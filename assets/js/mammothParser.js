async function parseDOCX(file) {
    try {
        const arrayBuffer = await file.arrayBuffer();
        const result = await mammoth.convertToHtml({ arrayBuffer });
        let html = result.value;

        // Replace emojis if you have a custom function in emojiReplacer.js
        html = replaceEmojis(html);

        // Postprocess the HTML content
        html = transformContent(html, editor);

        // Inject into the current template
        editor.setComponents(
            baseTemplates.catalan.replace('{{content}}', html)
        );
    } catch (error) {
        console.error("Error during DOCX conversion:", error);
        alert("Error converting DOCX file. Please ensure the file is valid and try again.");
    }
}

function transformContent(html, editor) {
    // Replace <p> that contains ONLY triple-hyphens with a custom <hr>
    html = replaceTripleHyphensWithHR(html);

    // Create a temporary DOM to manipulate
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;

    // Force all <a> elements to have the desired style
    const links = tempDiv.querySelectorAll('a');
    links.forEach(a => {
        let style = a.getAttribute('style') || '';
        // Remove any existing color or text-decoration from the style
        style = style.replace(/color\s*:\s*[^;]+;?/i, '');
        style = style.replace(/text-decoration\s*:\s*[^;]+;?/i, '');
        // Append the required style
        style += 'color:#000078;text-decoration:underline;';
        a.setAttribute('style', style.trim());
    });

    // Force all <h3> elemestrs to have the desired styles
    function processH3(content) {
        return content.replace(/<h3(?:\s+[^>]*)?>(.*?)<\/h3>/gi,
            '<h3 style="color:#000078;font-size:20px;font-family:Arial,sans-serif;line-height:20px;font-weight:bold;margin:0 0 20px 0">$1</h3>');
    }

    // If the doc contains a table with two colums, it's formated to the desired style
    var tables = tempDiv.getElementsByTagName('table');
    Array.from(tables).forEach(function(table) {
        if (table.rows && table.rows.length > 0 && table.rows[0].cells.length === 2) {
            var col1Content = processH3(table.rows[0].cells[0].innerHTML);
            var col2Content = processH3(table.rows[0].cells[1].innerHTML);
            var datesBlockHTML = `
        <table border="0" cellpadding="1" cellspacing="1" style="width:100%">
          <tbody>
            <tr>
              <td valign="top" style="background-color:#d6faff;width:50%;background-image:url('https://campus.uoc.edu/estudiant/_resources/img/mail/uoc_blau_birret_butlleti.png');background-position:right bottom 5px;background-repeat:no-repeat;padding:20px 60px 20px 20px;border-right:2px solid white">
                <div>${col1Content}</div>
              </td>
              <td valign="top" style="background-color:#d6faff;width:50%;background-image:url('https://campus.uoc.edu/estudiant/_resources/img/mail/uoc_blau_calendari_i_agenda_butlleti.png');background-position:right bottom 5px;background-repeat:no-repeat;padding:20px 60px 20px 20px;border-left:2px solid white">
                <div>${col2Content}</div>
              </td>
            </tr>
          </tbody>
        </table>`;
            table.outerHTML = datesBlockHTML;
        }
    });

    // Process <h2> elements to have the desired style
    const h2Elements = tempDiv.querySelectorAll('h2');
    Array.from(h2Elements).forEach((h2) => {
        const text = h2.textContent.trim();
        if (/^##.*##$/.test(text)) {
            h2.outerHTML = '';
        } else {
            h2.outerHTML = `<h2 class="ew-h2">${h2.innerHTML}</h2>`;
        }
    });

    // Convert <hr> elements to the custom style
    const hrElements = tempDiv.querySelectorAll('hr');
    Array.from(hrElements).forEach((hr) => {
        hr.outerHTML = `<hr width="100%" size="3" color="#000078" style="margin:2rem 0 0 0;height:3px;">`;
    });

    // Remove elements styled in gray
    const allElements = tempDiv.querySelectorAll('*');
    Array.from(allElements).forEach((el) => {
        const style = el.getAttribute('style');
        if (style) {
            const colorMatch = style.match(/color\s*:\s*([^;]+);?/i);
            if (colorMatch && isGray(colorMatch[1])) {
                el.outerHTML = '';
            }
        }
    });

    // CRITICAL STEP:
    //    Force paragraphs (including any inline images) to be treated as one text block.
    //    - data-gjs-type="text" ensures GrapesJS sees <p> as a text component.
    //    - data-gjs-type="none" on <img> prevents GrapesJS from converting it into an image component.
    //    - contenteditable="false" on <img> ensures you can place the cursor around the image.
    const paragraphs = tempDiv.querySelectorAll('p');
    paragraphs.forEach(p => {
        // Make the entire <p> recognized as text
        p.setAttribute('data-gjs-type', 'text');

        // Any inline <img> inside <p> won't become a separate image component
        const imgs = p.querySelectorAll('img');
        imgs.forEach(img => {
            img.setAttribute('data-gjs-type', 'image');
            img.setAttribute('contenteditable', 'false');
        });
    });

    // Sustituciones estáticas como ##---comparteixcomunitat##
    let innerHTML = tempDiv.innerHTML;

    // Sustituciones estáticas como ##---comparteixcomunitat##
    const insertions = [
        insertBlockByTag('##---comparteixcomunitat##', 'comparteix-block', editor),
    ];

    // Sustituciones dinámicas con contenido personalizado
    const dynamicInsertions = [
        insertNewsBlockByTag('##---noticies##', 'noticies-block', editor),
        insertAwardsBlockByTag('##---premis##', 'premis-block', editor),
        insertComparteixOpinioBlockByTag('##---comparteixopinio##', 'comparteixopinio-block', editor),

    ];


    // Reemplazos estáticos
    insertions.forEach(item => {
        if (item) innerHTML = innerHTML.replace(item.regex, item.replacement);
    });
    insertions.forEach(item => {
        if (item) innerHTML = innerHTML.replace(item.replacement, item.html);
    });

    // Reemplazos dinámicos
    dynamicInsertions.forEach(item => {
        if (item) innerHTML = innerHTML.replace(item.regex, item.render);
    });

    // Eliminar qualsevol línia o paràgraf que contingui marques tipus ##---x## o ##fi##
    innerHTML = innerHTML.replace(/<p[^>]*>\s*##[^<]*##\s*<\/p>/gi, '');
    innerHTML = innerHTML.replace(/##[^<]{2,}##/g, '');

    return innerHTML;

}

/**
 * Finds <p> tags that contain ONLY three-or-more consecutive hyphens
 * (e.g., <p>---</p>) and replaces them with a custom <hr>.
 */
function replaceTripleHyphensWithHR(html) {
    return html.replace(
        /<p[^>]*>\s*##---##\s*<\/p>/gi,
        '<hr width="100%" size="3" color="#000078" style="margin:2rem 0 0 0;height:3px;">'
    );
}



function isGray(color) {
    if (!color) return false;
    color = color.trim();
    if (/^(gray|grey)$/i.test(color)) return true;

    // Check for hex
    const hexMatch = color.match(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/);
    if (hexMatch) {
        const hex = hexMatch[1];
        if (hex.length === 3) {
            const r = parseInt(hex[0] + hex[0], 16);
            const g = parseInt(hex[1] + hex[1], 16);
            const b = parseInt(hex[2] + hex[2], 16);
            return (r === g && g === b);
        } else if (hex.length === 6) {
            const r = parseInt(hex.substring(0, 2), 16);
            const g = parseInt(hex.substring(2, 4), 16);
            const b = parseInt(hex.substring(4, 6), 16);
            return (r === g && g === b);
        }
    }

    // Check for rgb()
    const rgbMatch = color.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    if (rgbMatch) {
        const r = parseInt(rgbMatch[1]);
        const g = parseInt(rgbMatch[2]);
        const b = parseInt(rgbMatch[3]);
        return (r === g && g === b);
    }
    return false;
}

function insertBlockByTag(tag, blockId, editor) {
    // Busca la marca como <p>##---blocktag##</p>
    const regex = new RegExp(`<p[^>]*>\\s*${tag}\\s*<\\/p>[\\s\\S]*?<p[^>]*>\\s*##fi##\\s*<\\/p>`, 'gi');
    const blockContent = editor.BlockManager.get(blockId)?.get('content');
    if (blockContent) {
        const placeholder = `<!--BLOCK-${blockId.toUpperCase()}-->`;
        return { regex, replacement: placeholder, html: blockContent };
    }
    return null;
}

function insertComparteixOpinioBlockByTag(tag, blockId, editor) {
  const regex = new RegExp(`<p[^>]*>\\s*${tag}\\s*<\\/p>([\\s\\S]*?)<p[^>]*>\\s*##fi##\\s*<\\/p>`, 'gi');
  const block = editor.BlockManager.get(blockId);
  const blockContent = block?.get('content');
  if (!blockContent) return null;

  return {
    regex,
    render(match, dynamicContent) {
      const temp = document.createElement('div');
      temp.innerHTML = dynamicContent.trim();

      // Agafem tots els paràgrafs útils (sense marques ##)
      const bodyParagraphs = Array.from(temp.querySelectorAll('p'))
        .filter(p => !p.textContent.includes('##'));

      // Generem N <p> nous
      const bodyHTML = bodyParagraphs
        .map(p => `<p>${p.innerHTML}</p>`)
        .join('');

      let updatedBlock = blockContent;

      // No toquem el <h2>
      // Substituïm els dos <p> originals del bloc per N <p> del Word
      updatedBlock = updatedBlock.replace(
        /<p class="ew-textbase">[\s\S]*?<\/p>\s*<p>[\s\S]*?<\/p>/,
        bodyHTML
      );

      return updatedBlock;
    }
  };
}



function insertNewsBlockByTag(tag, blockId, editor) {
    const regex = new RegExp(`<p[^>]*>\\s*${tag}\\s*<\\/p>([\\s\\S]*?)<p[^>]*>\\s*##fi##\\s*<\\/p>`, 'gi');
    const blockContent = editor.BlockManager.get(blockId)?.get('content');
    if (!blockContent) return null;

    return {
        regex,
        render(match, dynamicContent) {
            const temp = document.createElement('div');
            temp.innerHTML = dynamicContent.trim();

            // Extraer H2 si hay
            const h2 = temp.querySelector('h2');
            const h2Text = h2 ? h2.innerText.trim() : 'Tens 5 minuts més?';

            // Extraer columnas
            const tdList = temp.querySelectorAll('td');
            const columnData = [];

            tdList.forEach((td, i) => {
                const linkEl = td.querySelector('a');
                const title = linkEl?.innerText?.trim() || `Títol notícia ${i + 1}`;
                const href = linkEl?.getAttribute('href') || '#';

                // Texto restante: todo el contenido que no sea el link
                let textAfterLink = '';
                linkEl?.parentNode?.childNodes?.forEach((node) => {
                    if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
                        textAfterLink += node.textContent.trim();
                    }
                });

                const extraText = Array.from(td.childNodes)
                    .filter(n => n !== linkEl?.parentNode && n.nodeType === Node.TEXT_NODE && n.textContent.trim())
                    .map(n => n.textContent.trim()).join(' ');

                columnData.push({
                    href,
                    title,
                    desc: textAfterLink + (extraText ? ' ' + extraText : '')
                });
            });

            // Reemplazar <h2> del bloque
            let updatedBlock = blockContent.replace(/<h2[^>]*>.*?<\/h2>/,
                `<h2 class="ew-h2">${h2Text}</h2>`);

            // Reemplazar cada columna
            columnData.forEach((col, i) => {
                updatedBlock = updatedBlock.replace(
                    new RegExp(`(<a[^>]*>)(Placeholder News Title ${i + 1})(</a>)`),
                    `$1${col.title}$3`
                );
                updatedBlock = updatedBlock.replace(
                    new RegExp(`(<a[^>]*href=")[^"]*(")`, 'g'),
                    (match, p1, p2, offset, str) => {
                        // Solo cambiar si corresponde al enlace actual
                        return offset < str.indexOf(col.title) ? match : `${p1}${col.href}${p2}`;
                    }
                );
                updatedBlock = updatedBlock.replace(
                    new RegExp(`(<div[^>]*>)(\\s*)Placeholder News Title ${i + 1}(\\s*)(</a>)(\\s*</div>)`),
                    `<div style="padding:10px 0;"><a href="${col.href}" style="text-decoration:underline;color:#000078;word-break:break-word;" target="_blank">${col.title}</a></div>`
                );
            });

            return updatedBlock;
        }
    };
}


function insertAwardsBlockByTag(tag, blockId, editor) {
    const regex = new RegExp(`<p[^>]*>\\s*${tag}\\s*<\\/p>([\\s\\S]*?)<p[^>]*>\\s*##fi##\\s*<\\/p>`, 'gi');
    const block = editor.BlockManager.get(blockId);
    const blockContent = block ? block.get('content') : null;
    if (!blockContent) return null;

    return {
        regex,
        render(match, dynamicContent) {
            const temp = document.createElement('div');
            temp.innerHTML = dynamicContent.trim();

            const h2 = temp.querySelector('h2');
            const h2Text = h2 ? h2.innerText.trim() : 'Premis, beques i ajuts';

            const tdList = temp.querySelectorAll('td');
            const columnData = [];

            tdList.forEach((td, i) => {
                const paragraphs = td.querySelectorAll('p');
                let title = `Premi ${i + 1}`;
                let href = '#';
                let desc = '';

                const aEl = paragraphs[0]?.querySelector('a');
                if (aEl) {
                    title = aEl.textContent.trim();
                    href = aEl.getAttribute('href') || '#';
                }

                if (paragraphs[1]) {
                    desc = paragraphs[1].textContent.trim();
                }

                columnData.push({ title, href, desc });
            });

            const cellsHTML = columnData.map(col => `
        <td valign="top" style="width:33%; background-color:#d6faff;">
          <p>
            <a href="${col.href}" style="text-decoration:underline;color:#000078;" target="_blank">
              <strong>${col.title}</strong>
            </a><br>${col.desc}
          </p>
        </td>
      `).join('');

            const finalHTML = `
        <hr width="100%" size="3" color="#000078" style="margin:2rem 0 0 0;height:3px;">
        <h2 class="ew-h2" style="line-height:26px;font-weight:bold;margin:4px 0 1em 0;">${h2Text}</h2>
        <table border="0" cellpadding="10" cellspacing="3" style="width:100%">
          <tr>${cellsHTML}</tr>
        </table>
      `;

            return finalHTML;
        }
    };
}

function handleDocxUploadModal() {
    const fileInput = document.getElementById('docxFileModal');
    if (fileInput && fileInput.files.length > 0) {
        parseDOCX(fileInput.files[0]);
    } else {
        alert("Please select a DOCX file.");
    }
}
