const baseTemplates = {
catalan: `
<head>
<style type="text/css">
body, p {color:#000078; font-family:Arial,sans-serif; line-height:20px; font-size:17px;}
a {text-decoration:underline;color:#000078;}
.ew-header, .ew-main { border-spacing:8px; }
.ew-textbase { color:#000078; font-family:Arial,sans-serif; line-height:20px; font-size:17px; margin:0 0 17px; }
.ew-h2 { color:#000078; font-size:22px; font-family:Arial,sans-serif; line-height:26px; font-weight:bold; margin:4px 0 1em 0; }
.ew-titular { font-family:'UOCSans Bold',Georgia,'Times New Roman',Times,serif,sans-serif; line-height:28px; font-size:26px; }
</style>
</head>
<body>
<div style="width:100%!important;max-width:600px!important;margin:auto">
<table border="0" cellpadding="10" cellspacing="0" width="100%" class="contenidor">
<tr>
<td align="center" valign="top" style="padding:0">
<table border="0" cellpadding="0" cellspacing="0" width="100%" class="contingut">
<tr>
<td align="center" valign="top">
<!-- Capçalera -->
<table style="color:#000078;line-height:1;width:100%" class="ew-header" border="0" cellpadding="8">
<tbody>
<tr>
<td rowspan="2" style="min-width:92px;width:92px;padding:0;vertical-align:top">
<img src="https://guia-frontend.uoc.edu/UOC/GEFv2/assets/img/logo-uoc-default.png" alt="Logo UOC" style="max-width:100%;height:68px">
</td>
<td style="box-sizing:border-box;height:68px;font-family:'uoc-serif',Georgia;font-size:17.6px;padding:4px 0 0 0;
border-color:#73edff;border-top-width:4px;border-bottom-width:4px;border-bottom-style:solid;
border-top-style:solid;min-width:150px;width:auto;max-width:180px;vertical-align:top">
<font style="font-size:0px">aquesta setmana: GPS Professional, seminaris de preparació per a la Fira Virtual d'Ocupació, plans pel 8M, i molt més!</font>
Universitat Oberta <br>de Catalunya</td>
<td style="box-sizing:border-box;padding:0;height:68px;vertical-align:top;border-color:#73edff;border-top-width:4px;border-bottom-width:4px;border-bottom-style:solid;border-top-style:solid;height:68px;padding:1px 0 0 0">
<img style="width:156px;height:auto" src="https://campus.uoc.edu/estudiant/_resources/img/novetats/butlleti/header-h1-ca.png" alt="">
</td>
</tr>
</tbody>
</table>
<table style="margin:0;padding:0" width="100%" class="ew-date" align="center" cellpadding="0" border="0">
<tbody>
<tr>
<td width="50%" valign="top" align="left">
<strong>Notícies per a l'estudiantat</strong>
</td>
<td width="50%" valign="top" align="right">
<strong>DD/MM/YYYY</strong>
</td>
</tr>
</tbody>
</table>
<!-- Capçalera -->
</td>
</tr>
<tr>
<td valign="top">
<table class="ew-main" border="0" cellpadding="0" cellspacing="0" width="100%" style="color:#000078;font-family:Arial,sans-serif;font-size:16px;line-height:145%;margin-top:28px;border-spacing: 8px;">
<tbody>
<tr>
<td align="left" valign="top">
<div width="100%" align="left" style="padding-bottom:20px">
<!-- AQUI VA EL CONTINGUT DELS ELEMENTS -->
{{content}}
<hr width="100%" size="3" color="#000078" style="margin:2rem 0 0 0;height:3px;">
<h2 class="ew-h2">Què t'ha semblat el butlletí?</h2>
<p><a href="https://uocuniwide.eu.qualtrics.com/jfe/form/SV_9ZywPOnz9eKHNlk" target="_blank"><img alt="" src="https://campus.uoc.edu/estudiant/_resources/img/novetats/butlleti/Valoracix_CA.png" style="width:75%" /></a></p>
<!-- FI CONTINGUT DELS ELEMENTS -->
</div>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
<!-- PEU -->
<tr>
<td align="center" valign="top">
<table width="100%" border="0" cellspacing="0" cellpadding="0" class="ew-footer">
<tbody>
<tr>
<td valign="top" height="18" align="center" style="background-color:#f0f0f0;background-image:url('https://campus.uoc.edu/UOC/a/img/mail/servei_informacio/blau_mari_4.gif');background-repeat:repeat-x"></td>
</tr>
<tr>
<td valign="top" align="left" style="line-height:165%;font-family:Arial,sans-serif;color:#000078;font-size:12px;padding-left:20px;padding-right:20px;padding-bottom:20px;background-color:#f0f0f0">
Aquesta comunicació ha estat enviada per la Fundació per a la Universitat Oberta de Catalunya (en endavant, "FUOC") a destinataris amb els quals manté una relació contractual prèvia o que han sol·licitat o autoritzat expressament el seu enviament. Podeu exercir els drets establerts als articles 15 a 22 del Reglament (UE) 2016/679. Us podeu donar de baixa d'aquest butlletí <a href="https://forms.gle/zvT9uGPHWEZkBQ5WA" style="text-decoration:underline;color:#000078" target="_blank">aquí</a>. Si no desitgeu rebre més comunicacions comercials d'aquest tipus, podeu indicar-ho enviant un correu electrònic a l'adreça <a style="color:#000078;text-decoration:underline" href="mailto:fuoc_pd@uoc.edu" target="_blank">fuoc_pd@uoc.edu</a>. Per a més informació podeu contactar amb el Delegat de Protecció de Dades de la FUOC a <a style="color:#000078;text-decoration:underline" href="mailto:dpd@uoc.edu" target="_blank">dpd@uoc.edu</a>.<br>
<br>La bústia <i>Info UOC</i> és només emissora de missatges. En aquests moments, reps les comunicacions en català. Si vols, pots canviar-ho en qualsevol moment des del teu <a style="color:#000078;text-decoration:underline" href="https://cv.uoc.edu/webapps/cas/login?service=https://campus.uoc.edu/UOC/a/varis/miss_informacio/js/FinestraCampus.html%3Fhtm=https://campus.uoc.edu/estudiant/espai-personal/ca/index.html" target="_blank">Espai personal / Informació personal / Canvi d'idioma dels missatges</a>.
</td>
</tr>
</tbody>
</table>
</td>
</tr>
<!-- FI PEU-->
</table>
</div>
</body>
`,
english: `
<head>
<style type="text/css">
body, p {color:#000078; font-family:Arial,sans-serif; line-height:20px; font-size:17px;}
a {text-decoration:underline;color:#000078;}
.ew-header, .ew-main { border-spacing:8px; }
.ew-textbase { color:#000078; font-family:Arial,sans-serif; line-height:20px; font-size:17px; margin:0 0 17px; }
.ew-h2 { color:#000078; font-size:22px; font-family:Arial,sans-serif; line-height:26px; font-weight:bold; margin:4px 0 1em 0; }
.ew-titular { font-family:'UOCSans Bold',Georgia,'Times New Roman',Times,serif,sans-serif; line-height:28px; font-size:26px; }
</style>
</head>
<body>
<div style="width:100%!important;max-width:600px!important;margin:auto">
<table border="0" cellpadding="10" cellspacing="0" width="100%" class="contenidor">
<tr>
<td align="center" valign="top" style="padding:0">
<table border="0" cellpadding="0" cellspacing="0" width="100%" class="contingut">
<tr>
<td align="center" valign="top">
<!-- Capçalera -->
<table style="color:#000078;line-height:1;width:100%" class="ew-header" border="0" cellpadding="8">
<tbody>
<tr>
<td rowspan="2" style="min-width:92px;width:92px;padding:0;vertical-align:top">
<img src="https://guia-frontend.uoc.edu/UOC/GEFv2/assets/img/logo-uoc-default.png" alt="Logo UOC" style="max-width:100%;height:68px">
</td>
<td style="box-sizing:border-box;height:68px;font-family:'uoc-serif',Georgia;font-size:17.6px;padding:4px 0 0 0;
border-color:#73edff;border-top-width:4px;border-bottom-width:4px;border-bottom-style:solid;
border-top-style:solid;min-width:150px;width:auto;max-width:180px;vertical-align:top">
<font style="font-size:0px">aquesta setmana: GPS Professional, seminaris de preparació per a la Fira Virtual d'Ocupació, plans pel 8M, i molt més!</font>
Universitat Oberta <br>de Catalunya</td>
<td style="box-sizing:border-box;padding:0;height:68px;vertical-align:top;border-color:#73edff;border-top-width:4px;border-bottom-width:4px;border-bottom-style:solid;border-top-style:solid;height:68px;padding:1px 0 0 0">
<img style="width:156px;height:auto" src="https://campus.uoc.edu/estudiant/_resources/img/novetats/butlleti/header-h1-en.png" alt="">
</td>
</tr>
</tbody>
</table>
<table style="margin:0;padding:0" width="100%" class="ew-date" align="center" cellpadding="0" border="0">
<tbody>
<tr>
<td width="50%" valign="top" align="left">
<strong>News for students</strong>
</td>
<td width="50%" valign="top" align="right">
<strong>DD/MM/YYYY</strong>
</td>
</tr>
</tbody>
</table>
<!-- Capçalera -->
</td>
</tr>
<tr>
<td valign="top">
<table class="ew-main" border="0" cellpadding="0" cellspacing="0" width="100%" style="color:#000078;font-family:Arial,sans-serif;font-size:16px;line-height:145%;margin-top:28px;border-spacing: 8px;">
<tbody>
<tr>
<td align="left" valign="top">
<div width="100%" align="left" style="padding-bottom:20px">
<!-- AQUI VA EL CONTINGUT DELS ELEMENTS -->
{{content}}
<hr width="100%" size="4" color="#000078" style="margin:2rem 0 0 0">
<h2 class="ew-h2">What did you think of the newsletter? </h2>
<p><a href="https://uocuniwide.eu.qualtrics.com/jfe/form/SV_9ZywPOnz9eKHNlk" target="_blank"><img alt="" src="https://campus.uoc.edu/estudiant/_resources/img/novetats/butlleti/enquesta_butlleti_EN.jpg" style="width:75%" /></a></p>
<!-- FI CONTINGUT DELS ELEMENTS -->
</div>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
<!-- PEU --><tr><td align="center" valign="top">
<table width="100%" border="0" cellspacing="0" cellpadding="0" class="ew-footer"><tbody>
<tr><td valign="top" height="18" align="center" style="background-color:#f0f0f0;background-image:url('https://campus.uoc.edu/UOC/a/img/mail/servei_informacio/blau_mari_4.gif');background-repeat:repeat-x"></td></tr>
<tr><td valign="top" align="left" style="line-height:165%;font-family:Arial,sans-serif;color:#000078;font-size:12px;padding-left:20px;padding-right:20px;padding-bottom:20px;background-color:#f0f0f0">This message has been sent by the Fundació per a la Universitat Oberta (FUOC) to recipients with whom there is a prior contractual relationship or who have expressly agreed to receive it. You can exercise your rights as established in Articles 15 to 22 of Regulation (EU) 2016/679. You can<a href="https://forms.gle/spvbJytNF7LedTsz8" style="text-decoration:underline; color:#000078;" target="_blank">cancel your subscription</a>. If you don't want to receive any more commercial communications like this, let us know by emailing <a style="color:#000078;text-decoration:underline" href="mailto:fuoc_pd@uoc.edu" target="_blank">fuoc_pd@uoc.edu</a>. For more information, contact the FUOC's Data Protection Officer at <a style="color:#000078;text-decoration:underline" href="mailto:dpd@uoc.edu" target="_blank">dpd@uoc.edu</a>.<br>
<br>The Info UOC email address is only used to send out messages. Should you have any doubts, please consult the Student Services on the Virtual Campus. <br>You are currently receiving messages in English. You can change this whenever you want in your <a style="color:#000078;text-decoration:underline" href="https://cv.uoc.edu/webapps/cas/login?service=https://campus.uoc.edu/UOC/a/varis/miss_informacio/js/FinestraCampus.html%3Fhtm=https://campus.uoc.edu/estudiant/espai-personal/en/index.html" target="_blank">Personal area / Personal information / Change the language for messages</a> section.
</td></tr></tbody></table>
</td></tr><!-- FI PEU-->
</table>
</div>
</body>
`,
spanish: `
<head>
<style type="text/css">
body, p {color:#000078; font-family:Arial,sans-serif; line-height:20px; font-size:17px;}
a {text-decoration:underline;color:#000078;}
.ew-header, .ew-main { border-spacing:8px; }
.ew-textbase { color:#000078; font-family:Arial,sans-serif; line-height:20px; font-size:17px; margin:0 0 17px; }
.ew-h2 { color:#000078; font-size:22px; font-family:Arial,sans-serif; line-height:26px; font-weight:bold; margin:4px 0 1em 0; }
.ew-titular { font-family:'UOCSans Bold',Georgia,'Times New Roman',Times,serif,sans-serif; line-height:28px; font-size:26px; }
</style>
</head>
<body>
<div style="width:100%!important;max-width:600px!important;margin:auto">
<table border="0" cellpadding="10" cellspacing="0" width="100%" class="contenidor">
<tr>
<td align="center" valign="top" style="padding:0">
<table border="0" cellpadding="0" cellspacing="0" width="100%" class="contingut">
<tr>
<td align="center" valign="top">
<!-- Capçalera -->
<table style="color:#000078;line-height:1;width:100%" class="ew-header" border="0" cellpadding="8">
<tbody>
<tr>
<td rowspan="2" style="min-width:92px;width:92px;padding:0;vertical-align:top">
<img src="https://guia-frontend.uoc.edu/UOC/GEFv2/assets/img/logo-uoc-default.png" alt="Logo UOC" style="max-width:100%;height:68px">
</td>
<td style="box-sizing:border-box;height:68px;font-family:'uoc-serif',Georgia;font-size:17.6px;padding:4px 0 0 0;
border-color:#73edff;border-top-width:4px;border-bottom-width:4px;border-bottom-style:solid;
border-top-style:solid;min-width:150px;width:auto;max-width:180px;vertical-align:top">
<font style="font-size:0px">aquesta setmana: GPS Professional, seminaris de preparació per a la Fira Virtual d'Ocupació, plans pel 8M, i molt més!</font>
Universitat Oberta <br>de Catalunya</td>
<td style="box-sizing:border-box;padding:0;height:68px;vertical-align:top;border-color:#73edff;border-top-width:4px;border-bottom-width:4px;border-bottom-style:solid;border-top-style:solid;height:68px;padding:1px 0 0 0">
<img style="width:156px;height:auto" src="https://campus.uoc.edu/estudiant/_resources/img/novetats/butlleti/header-h1-es.png" alt="">
</td>
</tr>
</tbody>
</table>
<table style="margin:0;padding:0" width="100%" class="ew-date" align="center" cellpadding="0" border="0">
<tbody>
<tr>
<td width="50%" valign="top" align="left">
<strong>Noticias para el estudiantado</strong>
</td>
<td width="50%" valign="top" align="right">
<strong>DD/MM/YYYY</strong>
</td>
</tr>
</tbody>
</table>
<!-- Capçalera -->
</td>
</tr>
<tr>
<td valign="top">
<table class="ew-main" border="0" cellpadding="0" cellspacing="0" width="100%" style="color:#000078;font-family:Arial,sans-serif;font-size:16px;line-height:145%;margin-top:28px;border-spacing: 8px;">
<tbody>
<tr>
<td align="left" valign="top">
<div width="100%" align="left" style="padding-bottom:20px">
<!-- AQUI VA EL CONTINGUT DELS ELEMENTS -->
{{content}}
<hr width="100%" size="4" color="#000078" style="margin:2rem 0 0 0">
<h2 class="ew-h2">¿Qué te ha parecido el boletín?</h2>
<p><a href="https://uocuniwide.eu.qualtrics.com/jfe/form/SV_9ZywPOnz9eKHNlk" target="_blank"><img alt="" src="https://campus.uoc.edu/estudiant/_resources/img/novetats/butlleti/Valoracix_ES.png" style="width:75%" /></a></p>
<!-- FI CONTINGUT DELS ELEMENTS -->
</div>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
<!-- PEU --><tr><td align="center" valign="top">
<table width="100%" border="0" cellspacing="0" cellpadding="0" class="ew-footer"><tbody><tr><td valign="top" height="18" align="center" style="background-color:#f0f0f0;background-image:url('https://campus.uoc.edu/UOC/a/img/mail/servei_informacio/blau_mari_4.gif');background-repeat:repeat-x"></td></tr>
<tr><td valign="top" align="left" style="line-height:165%;font-family:Arial,sans-serif;color:#000078;font-size:12px;padding-left:20px;padding-right:20px;padding-bottom:20px;background-color:#f0f0f0">Esta comunicación ha sido enviada por la Fundació per a la Universitat Oberta de Catalunya (en adelante, FUOC) a destinatarios con los que mantiene una relación contractual previa o que han solicitado o autorizado expresamente su envío. Puede ejercer los derechos establecidos en los artículos 15 a 22 del Reglamento (UE) 2016/679. Puede darse de baja de este boletín <a style="color:#000078;text-decoration:underline" href="https://forms.gle/nwcXFCQKMqNpfjF77" target="_blank">aquí</a>. Si no desea recibir más comunicaciones comerciales de este tipo, puede indicarlo enviando un correo electrónico a la dirección <a style="color:#000078;text-decoration:underline" href="mailto:fuoc_pd@uoc.edu" target="_blank">fuoc_pd@uoc.edu</a>. Para más información puede contactar con el delegado o delegada de protección de datos de la FUOC a <a style="color:#000078;text-decoration:underline" href="mailto:dpd@uoc.edu" target="_blank">dpd@uoc.edu</a>.<br>
<br>El buzón Info UOC es sólo emisor de mensajes. Si tienes cualquier duda, el Servicio de atención del Campus Virtual está a tu disposición.
En estos momentos recibes las comunicaciones en español. Si quieres, puedes cambiarlo en cualquier momento desde tu <a style="color:#000078;text-decoration:underline" href="https://cv.uoc.edu/webapps/cas/login?service=https://campus.uoc.edu/UOC/a/varis/miss_informacio/js/FinestraCampus.html%3Fhtm=https://campus.uoc.edu/estudiant/espai-personal/es/index.html" target="_blank">Espacio personal / Información personal / Cambio de idioma de los mensajes</a>.
</td></tr></tbody></table>
</td></tr><!-- FI PEU-->
</table>
</div>
</body>
`
};