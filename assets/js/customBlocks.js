function addCustomBlocks(editor) {
  // -------------------------
  // Ensure there is an "options" panel.
  // -------------------------
  let optionsPanel = editor.Panels.getPanel('options');
  if (!optionsPanel) {
    const panelEl = document.createElement('div');
    panelEl.className = 'panel__top';
    document.body.insertBefore(panelEl, document.body.firstChild);
    optionsPanel = editor.Panels.addPanel({
      id: 'options',
      el: panelEl,
    });
  }


  // -------------------------
  // Category panel: collapse all categories
  // -------------------------
  editor.on('load', () => {
  // Retrieve the categories collection from the Block Manager
  const categories = editor.BlockManager.getCategories();

  categories.each(category => {
    if (category.get('id') === 'Default') {
        category.set('open', false);
    } else {
        category.set('open', true);
    }
  });

  // Re-render the Block Manager so the new order is reflected
  editor.BlockManager.render();
});


  // -------------------------
  // Define Custom Blocks
  // -------------------------

  editor.BlockManager.add('h2title-block', {
    label: 'Títol de secció',
    media: `<svg xmlns="http://www.w3.org/2000/svg" height="auto" viewBox="0 -960 960 960" width="100%" fill="#D5FAFF"><path d="M120-280v-400h80v160h160v-160h80v400h-80v-160H200v160h-80Zm400 0v-160q0-33 23.5-56.5T600-520h160v-80H520v-80h240q33 0 56.5 23.5T840-600v80q0 33-23.5 56.5T760-440H600v80h240v80H520Z"/></svg>`,
    content: `<h2 class="ew-h2">Títol de secció</h2>`,
    category: 'UOC Català'
  });

  editor.BlockManager.add('ptext-block', {
    label: 'Bloc de text',
    media: `<svg viewBox=\"0 0 24 24\">\n        <path fill=\"currentColor\" d=\"M20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20M4,6V18H20V6H4M6,9H18V11H6V9M6,13H16V15H6V13Z\" />\n    </svg>`,
    content: `<p class="ew-textbase">Placeholder text</p>`,
    category: 'UOC Català'
  });

  editor.BlockManager.add('filet-block', {
    label: 'Filet',
    content: `<hr width="100%" size="3" color="#000078" style="margin:2rem 0 0 0;height:3px;">`,
    media: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path fill="currentColor" d="M21 18H2V20H21V18" />
</svg>`,
category: 'UOC Català'
  });

  editor.BlockManager.add('h2section-block', {
    label: 'Títol de secció amb filet',
    media: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path
    fill="currentColor"
    transform="rotate(180, 12, 12)"
    d="M21 18H2V20H21V18 M19 10V14H4V10H19 M20 8H3C2.45 8 2 8.45 2 9V15C2 15.55 2.45 16 3 16H20C20.55 16 21 15.55 21 15V9C21 8.45 20.55 8 20 8"
  />
</svg>`,
    content: `<hr width="100%" size="3" color="#000078" style="margin:2rem 0 0 0;height:3px;">
<h2 class="ew-h2">Placeholder section</h2>`,
    category: 'UOC Català'
  });

    editor.BlockManager.add('imagetext-block', {
    label: 'Filet, imatge i text',
    media: "<svg viewBox=\"0 0 24 24\">\n        <path fill=\"currentColor\" d=\"M21 18H2V20H21V18M19 10V14H4V10H19M20 8H3C2.45 8 2 8.45 2 9V15C2 15.55 2.45 16 3 16H20C20.55 16 21 15.55 21 15V9C21 8.45 20.55 8 20 8M21 4H2V6H21V4Z\" />\n    </svg>",
    content: `<hr width="100%" size="3" color="#000078" style="margin:2rem 0 0 0;height:3px;">
<p><a href="https://www.youtube.com/watch?v=0Wx-EWtWpT4" style="text-decoration:none;color:#000078" target="_blank"><img alt="" src="https://campus.uoc.edu/estudiant/_resources/img/novetats/butlleti/0703_pla_llengues_CA.jpg" style="width:100%" /></a>
<br>Placeholder text under image with link.</p>`,
    category: 'UOC Català'
  });
  
  editor.BlockManager.add('dates-block', {
    label: 'Bloc 2 columnes',
    content: `
<hr width="100%" size="3" color="#000078" style="margin:2rem 0 0 0;height:3px;">
<h2 class="ew-h2">Apunta't aquestes dates!</h2>
<table border="0" cellpadding="1" cellspacing="1" style="width:100%">
  <tbody>
    <tr>
      <td valign="top" style="background-color:#d6faff;width:50%;background-image:url('https://campus.uoc.edu/estudiant/_resources/img/mail/uoc_blau_birret_butlleti.png');background-position:right bottom 5px;background-repeat:no-repeat;margin-top:0;padding:20px 60px 20px 20px;border-right:2px solid white">
        <div>
          <h3 style="color:#000078;font-size:20px;font-family:Arial,sans-serif;line-height:20px;font-weight:bold;margin:0 0 20px 0">Dates acadèmiques</h3>
          <p>12 de març - <strong>Inici de semestre</strong>: màsters universitaris i programes de formació permanent</p>
          <p>1 i 2 de juliol - <strong>Notes finals</strong> de graus, màsters universitaris i programes de formació permanent</p>
        </div>
      </td>
      <td valign="top" style="background-color:#d6faff;width:50%;background-image:url('https://campus.uoc.edu/estudiant/_resources/img/mail/uoc_blau_calendari_i_agenda_butlleti.png');background-position:right bottom 5px;background-repeat:no-repeat;margin-top:0;padding:20px 60px 20px 20px;border-left:2px solid white">
        <div>
          <h3 style="color:#000078;font-size:20px;font-family:Arial,sans-serif;line-height:20px;font-weight:bold;margin:0 0 20px 0">Actes i seminaris</h3>
          <p>12 de març - <a href="https://uoc.jobteaser.com/ca/events/242488" target="_blank" style="text-decoration:underline;color:#000078">Coneix els <strong>Serveis de Carrera Professional i Ocupació</strong> de la UOC</a> (en línia)</p>
          <p>27 de març - <a href="https://symposium.uoc.edu/129829/detail/la-importancia-de-les-soft-skills-en-el-mercat-laboral-actual-un-factor-clau-de-desenvolupament.html" target="_blank" style="text-decoration:underline;color:#000078">La importància de les <strong>soft skills en el mercat laboral</strong> actual</a> (presencial)</p>
        </div>
      </td>
    </tr>
  </tbody>
</table>`,
  media: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <rect x="4" y="0" width="26" height="64" fill="#D5FAFF" stroke="#D5FAFF" stroke-width="2"/>
  <rect x="34" y="0" width="26" height="64" fill="#D5FAFF" stroke="#D5FAFF" stroke-width="2"/>
</svg>`,
category: 'UOC Català'
  });

editor.BlockManager.add('premis-block', {
    label: 'Bloc 3 columnes',
    media: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <rect x="4"  y="0" width="16" height="64" fill="#D5FAFF" stroke="#D5FAFF" stroke-width="2"/>
  <rect x="24" y="0" width="16" height="64" fill="#D5FAFF" stroke="#D5FAFF" stroke-width="2"/>
  <rect x="44" y="0" width="16" height="64" fill="#D5FAFF" stroke="#D5FAFF" stroke-width="2"/>
</svg>`,
    content: `
<hr width="100%" size="3" color="#000078" style="margin:2rem 0 0 0;height:3px;">
<h2 class="ew-h2" style="line-height:26px;font-weight:bold;margin:4px 0 1em 0;">Premis, beques i ajuts</h2>
<table border="0" cellpadding="10" cellspacing="3" style="width:100%">
  <tr>
    <td valign="top" style="width:33%; background-color:#d6faff;">
      <p><a href="#" style="text-decoration:underline;color:#000078;" target="_blank"><strong>Placeholder 1</strong></a>
      <br>Deadline: Placeholder Date</p>
    </td>
    <td valign="top" style="width:33%; background-color:#d6faff;">
      <p><a href="#" style="text-decoration:underline;color:#000078;" target="_blank"><strong>Placeholder 2</strong></a>
      <br>Deadline: Placeholder Date</p>
    </td>
    <td valign="top" style="width:33%; background-color:#d6faff;">
      <p><a href="#" style="text-decoration:underline;color:#000078;" target="_blank"><strong>Placeholder 3</strong></a>
      <br>Deadline: Placeholder Date</p>
    </td>
  </tr>
</table>`,
    category: 'UOC Català'
  });
  
  editor.BlockManager.add('noticies-block', {
    label: 'Bloc 4 columnes (notícies)',
    media: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <rect x="4"  y="26" width="12" height="12" fill="#D5FAFF"/>
  <rect x="20" y="26" width="12" height="12" fill="#D5FAFF"/>
  <rect x="36" y="26" width="12" height="12" fill="#D5FAFF"/>
  <rect x="52" y="26" width="12" height="12" fill="#D5FAFF"/>
</svg>`,
    content: `
<hr width="100%" size="3" color="#000078" style="margin:2rem 0 0 0;height:3px;">
<h2 class="ew-h2">Tens 5 minuts més?</h2>
<table border="0" cellpadding="1" cellspacing="1" style="width:100%;color:#000078;font-family:Arial, sans-serif;font-size:16px;line-height:145%;">
  <tr>
    <td valign="top" style="width:25%;">
      <img alt="" src="https://via.placeholder.com/150" style="width:100%;" /><br>
      <div style="padding:10px 0;">
        <a href="#" style="text-decoration:underline;color:#000078;word-break:break-word;" target="_blank">Placeholder News Title 1</a>
      </div>
    </td>
    <td valign="top" style="width:25%;">
      <img alt="" src="https://via.placeholder.com/150" style="width:100%;" /><br>
      <div style="padding:10px 0;">
        <a href="#" style="text-decoration:underline;color:#000078;word-break:break-word;" target="_blank">Placeholder News Title 2</a>
      </div>
    </td>
    <td valign="top" style="width:25%;">
      <img alt="" src="https://via.placeholder.com/150" style="width:100%;" /><br>
      <div style="padding:10px 0;">
        <a href="#" style="text-decoration:underline;color:#000078;word-break:break-word;" target="_blank">Placeholder News Title 3</a>
      </div>
    </td>
    <td valign="top" style="width:25%;">
      <img alt="" src="https://via.placeholder.com/150" style="width:100%;" /><br>
      <div style="padding:10px 0;">
        <a href="#" style="text-decoration:underline;color:#000078;word-break:break-word;" target="_blank">Placeholder News Title 4</a>
      </div>
    </td>
  </tr>
</table>`,
    category: 'UOC Català'
  });

  editor.BlockManager.add('intro-block', {
    label: 'Bloc introducció',
    media: `<svg xmlns="http://www.w3.org/2000/svg" height="auto" viewBox="0 -960 960 960" width="100%" fill="#D5FAFF"><path d="m434-498 276-275q9-9 21-9t21 9q9 9 9 21t-9 21L476-455l-42-43Zm104 104 247-247q9.07-9 21.53-9 12.47 0 21.47 8.84 9 8.84 9 21T828-599L580-351l-42-43ZM195-199q-91-91-91.5-218T194-635l122-122 42 42q12 12 19.5 28t8.5 30l163-164q9.07-9 21.53-9 12.47 0 21.47 9.05 9 9.06 9 21.5 0 12.45-9 21.45L389-575l-65 65 26 26q42 42 40.5 100.5T347-283l-7 7-42-43 7-7q25-25 25.5-58.5T307-442l-47-47q-9-9.07-9-21.53 0-12.47 9-21.47l56-55q17-17 17-42.5T316-672l-80 80q-73 73-72.5 175T237-242q74 74 177 75.5T590-238l241-241q9.07-9 21.53-9 12.47 0 21.47 8.84 9 8.84 9 21T874-437L633-196q-91 91-219 89.5T195-199Zm217-217ZM689-40l1-60q71 0 120.5-49.5T860-270l60-1q0 95.85-67.57 163.43Q784.85-40 689-40ZM40-689q0-95.85 67.57-163.43Q175.15-920 271-920l-1 60q-71 0-120.5 49.5T100-690l-60 1Z"/></svg>`,
    content: `<h2 class="ew-h2">Hola, [TERCERSNOMBRESINAPELLIDOS]! <img alt="hola" src="https://fonts.gstatic.com/s/e/notoemoji/15.0/1f44b/32.png" style="width:4%"></h2>
<p class="ew-textbase">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
<p class="ew-textbase">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`,
    category: 'UOC Català'
  });
  
  editor.BlockManager.add('comparteix-block', {
    label: 'Comparteix amb la comunitat',
    media: `<svg xmlns="http://www.w3.org/2000/svg" height="auto" viewBox="0 -960 960 960" width="100%" fill="#D5FAFF"><path d="M500-220Zm-340 60v-94q0-38 19-65t49-41q67-30 128.5-45T480-420q38.02 0 75.01 6T630-397l-48 47q-26-5-50.9-7.5-24.89-2.5-51.1-2.5-57 0-111 11.5T252-306q-14 7-23 21.5t-9 30.5v34h280v60H160Zm400 40v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q9 9 13 20t4 22q0 11-4.5 22.5T902.09-340L683-120H560Zm300-263-37-37 37 37ZM620-180h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19ZM480-481q-63 0-106.5-43.5T330-631q0-63 43.5-106.5T480-781q63 0 106.5 43.5T630-631q0 63-43.5 106.5T480-481Zm0-60q38 0 64-26t26-64q0-38-26-64t-64-26q-38 0-64 26t-26 64q0 38 26 64t64 26Zm0-90Z"/></svg>`,
    content: `<hr width="100%" size="3" color="#000078" style="margin:2rem 0 0 0;height:3px;">
<table border="0" cellpadding="1" cellspacing="1" style="width:100%">
<tbody>
<tr>
<td valign="top" style="width:70%">
<h2 class="ew-h2">Comparteix amb la comunitat</h2>
<a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfO_aYtJVhwJFKxUsK9F2DlsZ5wVh5c5oazfhcgidf8MYRs4w/viewform?usp=send_form" style="text-decoration:none;color:#ffffff">
<table width="300" border="0" cellspacing="0" cellpadding="4" height="40">
<tbody><tr><td align="center" valign="middle" style="background-color:#000078;font-size:16px;color:#ffffff">
Fes-nos arribar la teva notícia
</td>
</tr>
</tbody></table>
</a>
<p class="ew-textbase"><br><img alt="" src="https://campus.uoc.edu/estudiant/_resources/img/mail/uoc_blau_escriu.png" style="width:4%" /> Tens un projecte cultural o solidari? Necessites compartir una enquesta per al teu treball final? <strong><a href="https://campus.uoc.edu/webapps/cas/login?service=https://campus.uoc.edu/UOC/a/varis/miss_informacio/js/FinestraCampus.html%3Fhtm=https://campus.uoc.edu/estudiant/mes-uoc/ca/actualitat/noticies/tens-una-noticia/index.html" style="text-decoration:underline;color:#000078" target="_blank">Consulta les bases per publicar el teu missatge</a></strong></p>
</td>
<td valign="bottom" align="right" style="width:30%">
<p class="ew-textbase"><img alt="" src="https://campus.uoc.edu/estudiant/_resources/img/novetats/butlleti/estudiant_ordinador_personatge-2.gif" style="width:80%" /></p>
</td>
</tr>
</tbody></table>`,
    category: 'UOC Català'
  });

    editor.BlockManager.add('comparteix-block-es', {
    label: 'Comparte con la comunidad',
    media: `<svg xmlns="http://www.w3.org/2000/svg" height="auto" viewBox="0 -960 960 960" width="100%" fill="#D5FAFF"><path d="M500-220Zm-340 60v-94q0-38 19-65t49-41q67-30 128.5-45T480-420q38.02 0 75.01 6T630-397l-48 47q-26-5-50.9-7.5-24.89-2.5-51.1-2.5-57 0-111 11.5T252-306q-14 7-23 21.5t-9 30.5v34h280v60H160Zm400 40v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q9 9 13 20t4 22q0 11-4.5 22.5T902.09-340L683-120H560Zm300-263-37-37 37 37ZM620-180h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19ZM480-481q-63 0-106.5-43.5T330-631q0-63 43.5-106.5T480-781q63 0 106.5 43.5T630-631q0 63-43.5 106.5T480-481Zm0-60q38 0 64-26t26-64q0-38-26-64t-64-26q-38 0-64 26t-26 64q0 38 26 64t64 26Zm0-90Z"/></svg>`,
    content: `<hr width="100%" size="3" color="#000078" style="margin:2rem 0 0 0;height:3px;">
<table border="0" cellpadding="1" cellspacing="1" style="width:100%">
<tbody>
<tr>
<td valign="top" style="width:70%">
<h2 class="ew-h2">Comparte con la comunidad</h2>
<a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfO_aYtJVhwJFKxUsK9F2DlsZ5wVh5c5oazfhcgidf8MYRs4w/viewform?usp=send_form" style="text-decoration:none;color:#ffffff">
<table width="300" border="0" cellspacing="0" cellpadding="4" height="40">
<tbody><tr><td align="center" valign="middle" style="background-color:#000078;font-size:16px;color:#ffffff">
Haznos llegar tu noticia
</td>
</tr>
</tbody></table>
</a>
<p class="ew-textbase"><br><img alt="" src="https://campus.uoc.edu/estudiant/_resources/img/mail/uoc_blau_escriu.png" style="width:4%" /> ¿Tienes un proyecto cultural o solidario? ¿Necesitas compartir una encuesta para tu trabajo final?<strong> <a href="https://campus.uoc.edu/webapps/cas/login?service=https://campus.uoc.edu/UOC/a/varis/miss_informacio/js/FinestraCampus.html%3Fhtm=https://campus.uoc.edu/estudiant/mes-uoc/es/actualitat/noticies/tens-una-noticia/index.html" style="text-decoration:underline;color:#000078" target="_blank">Consulta las bases para publicar tu mensaje</a></strong></p>
</td>
<td valign="bottom" align="right" style="width:30%">
<p class="ew-textbase"><img alt="" src="https://campus.uoc.edu/estudiant/_resources/img/novetats/butlleti/estudiant_ordinador_personatge-2.gif" style="width:80%" /></p>
</td>
</tr>
</tbody></table>`,
    category: 'UOC Castellà'
  });

      editor.BlockManager.add('comparteix-block-en', {
    label: 'Share with the community',
    media: `<svg xmlns="http://www.w3.org/2000/svg" height="auto" viewBox="0 -960 960 960" width="100%" fill="#D5FAFF"><path d="M500-220Zm-340 60v-94q0-38 19-65t49-41q67-30 128.5-45T480-420q38.02 0 75.01 6T630-397l-48 47q-26-5-50.9-7.5-24.89-2.5-51.1-2.5-57 0-111 11.5T252-306q-14 7-23 21.5t-9 30.5v34h280v60H160Zm400 40v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q9 9 13 20t4 22q0 11-4.5 22.5T902.09-340L683-120H560Zm300-263-37-37 37 37ZM620-180h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19ZM480-481q-63 0-106.5-43.5T330-631q0-63 43.5-106.5T480-781q63 0 106.5 43.5T630-631q0 63-43.5 106.5T480-481Zm0-60q38 0 64-26t26-64q0-38-26-64t-64-26q-38 0-64 26t-26 64q0 38 26 64t64 26Zm0-90Z"/></svg>`,
    content: `<hr width="100%" size="3" color="#000078" style="margin:2rem 0 0 0;height:3px;">
<table border="0" cellpadding="1" cellspacing="1" style="width:100%">
<tbody>
<tr>
<td valign="top" style="width:70%">
<h2 class="ew-h2">Share with the community</h2>
<a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfO_aYtJVhwJFKxUsK9F2DlsZ5wVh5c5oazfhcgidf8MYRs4w/viewform?usp=send_form" style="text-decoration:none;color:#ffffff">
<table width="300" border="0" cellspacing="0" cellpadding="4" height="40">
<tbody><tr><td align="center" valign="middle" style="background-color:#000078;font-size:16px;color:#ffffff">
Send us your news
</td>
</tr>
</tbody></table>
</a>
<p class="ew-textbase"><br><img alt="" src="https://campus.uoc.edu/estudiant/_resources/img/mail/uoc_blau_escriu.png" style="width:4%" /> Are you involved in a cultural or charitable project? Do you need to share a questionnaire for your final project?<strong> <a href="https://campus.uoc.edu/webapps/cas/login?service=https://campus.uoc.edu/UOC/a/varis/miss_informacio/js/FinestraCampus.html%3Fhtm=https://campus.uoc.edu/estudiant/mes-uoc/en/actualitat/noticies/tens-una-noticia/index.html" style="text-decoration:underline;color:#000078" target="_blank">Check the terms and conditions for posting your message</a></strong>.</p>
</td>
<td valign="bottom" align="right" style="width:30%">
<p class="ew-textbase"><img alt="" src="https://campus.uoc.edu/estudiant/_resources/img/novetats/butlleti/estudiant_ordinador_personatge-2.gif" style="width:80%" /></p>
</td>
</tr>
</tbody></table>`,
    category: 'UOC Anglès'
  });  
  
  editor.BlockManager.add('feedback-block', {
    label: 'Feedback Qualtrics',
    media: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <circle cx="32" cy="32" r="28" fill="none" stroke="#D5FAFF" stroke-width="4" />
  <circle cx="24" cy="24" r="3" fill="#D5FAFF" stroke="#D5FAFF" stroke-width="2" />
  <circle cx="40" cy="24" r="3" fill="#D5FAFF" stroke="#D5FAFF" stroke-width="2" />
  <path d="M20 38 Q 32 50 44 38" fill="none" stroke="#D5FAFF" stroke-width="3" stroke-linecap="round" />
</svg>`,
    content: `
<hr width="100%" size="3" color="#000078" style="margin:2rem 0 0 0;height:3px;">
<h2 class="ew-h2">Què t'ha semblat el butlletí?</h2>
<p><a href="https://uocuniwide.eu.qualtrics.com/jfe/form/SV_bvb2J1rVTyfQdgi" target="_blank"><img alt="" src="https://campus.uoc.edu/estudiant/_resources/img/novetats/butlleti/Valoracix_CA.png" style="width:75%" /></a></p>`,
    category: 'UOC Català'
  });

  editor.BlockManager.add('comparteixopinio-block', {
    label: 'Comparteix la teva opinió',
    media: `<svg xmlns="http://www.w3.org/2000/svg" height="auto" viewBox="0 -960 960 960" width="100%" fill="#D5FAFF"><path d="M306-523q17 0 28.5-11.5T346-563q0-17-11.5-28.5T306-603q-17 0-28.5 11.5T266-563q0 17 11.5 28.5T306-523Zm177 0q17 0 28.5-11.5T523-563q0-17-11.5-28.5T483-603q-17 0-28.5 11.5T443-563q0 17 11.5 28.5T483-523Zm170 0q17 0 28.5-11.5T693-563q0-17-11.5-28.5T653-603q-17 0-28.5 11.5T613-563q0 17 11.5 28.5T653-523ZM80-80v-740q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H240L80-80Zm134-220h606v-520H140v600l74-80Zm-74 0v-520 520Z"/></svg>`,
    content: `<hr width="100%" size="3" color="#000078" style="margin:2rem 0 0 0;height:3px;">
<div style="background-color: #00FF0000; background-image: url('https://campus.uoc.edu/estudiant/_resources/img/novetats/butlleti/icona_somriure.png'); background-position:right bottom 5px; background-repeat: no-repeat; margin-top: 10px; padding-top: 10px; padding-left:10px; padding-right:70px; padding-bottom:10px;">
<h2 class="ew-h2">Comparteix la teva opinió!</h2>
<p class="ew-textbase">Vols ajudar a dissenyar <strong>oportunitats d'aprenentatge noves</strong> adaptades a les teves necessitats i als grans reptes globals? <img alt="" src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f30d/128.png" style="width:3%"><img alt="" src="https://fonts.gstatic.com/s/e/notoemoji/latest/2728/128.png" style="width:3%"> Comparteix la teva opinió sobre<strong> transformació digital</strong>, <strong>emergència climàtica</strong>, <strong>democràcia i valors europeus</strong>.</p>
<p><img alt="Emoji dit" src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f449/128.png" style="width:3%"> <a href="https://umfrage.fernuni-hagen.de/v3/166113?lang=en" target="_blank" style="text-decoration:underline;color:#000078"><strong>Participa en l'enquesta d'OpenEU</strong></a>
</p>
</div>`,
    category: 'UOC Català'
  });  
  
  // -------------------------
  // Register a custom component type for "h2section-block"
  // -------------------------
  editor.DomComponents.addType('h2section-block', {
    model: {
      defaults: {
        tagName: 'div',
        components: [
          '<hr width="100%" size="3" color="#000078" style="margin:2rem 0 0 0;height:3px;">',
          {
            tagName: 'h2',
            classes: ['ew-h2'],
            components: 'Placeholder section'
          }
        ],
        attributes: { 'data-title': 'Placeholder section' }
      },
      init() {
        this.on('change:attributes:data-title', this.updateTitle);
      },
      updateTitle() {
        const title = this.getAttributes()['data-title'] || 'Placeholder section';
        const comps = this.get('components');
        if (comps && comps.models && comps.models[1]) {
          comps.models[1].set('components', title);
        }
      }
    },
    view: {}
  });
  
  // -------------------------
  // Add custom command to open the template selector modal.
  // -------------------------
  editor.Commands.add('open-template-selector', {
    run: (editor) => {
      // Set modal title and content.
      editor.Modal.setTitle("Seleccionar plantilla base");
      editor.Modal.setContent(`
        <div id="template-selector-modal" style="padding: 10px;">
          <p>Seleccionar plantilla base:</p>
          <label><input type="radio" name="baseTemplate" value="catalan" checked>Plantilla en català</label><br>
          <label><input type="radio" name="baseTemplate" value="spanish">Plantilla en castellà</label><br>
          <label><input type="radio" name="baseTemplate" value="english">Plantilla en anglès</label><br><br>
          <button id="template-select-submit">Aplicar plantilla</button>
        </div>
      `);
      editor.Modal.open();
      
      setTimeout(() => {
        const btn = document.getElementById("template-select-submit");
        if (btn) {
          btn.addEventListener("click", () => {
            const selected = document.querySelector('input[name="baseTemplate"]:checked').value;
            if (baseTemplates[selected]) {
              if (confirm("Canviar de plantilla base resetejarà els continguts. Continuar?")) {
                editor.setComponents(baseTemplates[selected].replace('{{content}}', ''));
              }
            }
            editor.Modal.close();
          });
        }
      }, 0);
    }
  });
  
  // -------------------------
  // Add custom command to open modal for DOCX upload.
  // -------------------------
  editor.Commands.add('custom-action', {
    run: (editor, sender) => {
      editor.Modal.setTitle("Upload DOCX");
      editor.Modal.setContent(`
        <div id="docx-modal-content">
          <h2>Upload DOCX File</h2>
          <input type="file" id="docxFileModal" accept=".docx" />
          <br>
          <button id="uploadDocxBtn">Upload and Process</button>
        </div>
      `);
      editor.Modal.open();
      setTimeout(() => {
        const btn = document.getElementById('docxFileModal') ? document.getElementById('uploadDocxBtn') : null;
        if (btn) {
          btn.addEventListener('click', () => {
            handleDocxUploadModal();
            editor.Modal.close();
          });
        }
      }, 0);
      sender && sender.set('active', false);
    }
  });
  
  // -------------------------
  // Add custom buttons to the "options" panel.
  // -------------------------
  editor.Panels.addButton('options', [{
    id: 'template-selector-button',
    label: '<i class="fa fa-file-text-o"></i>',
    command: 'open-template-selector',
    attributes: { title: 'Seleccionar plantilla base', 'data-tooltip-pos': 'bottom' }
  }]);
  
  editor.Panels.addButton('options', [{
    id: 'custom-button',
    label: '<i class="fa fa-upload"></i>',
    command: 'custom-action',
    attributes: { title: 'Click to upload DOCX and process it', 'data-tooltip-pos': 'bottom' }
  }]);
}
