(function () {
  var isIndex = !document.body.classList.contains('inner-page');
  var base = isIndex ? '' : 'index.html';
  var staticBase = isIndex ? 'static/' : 'static/';

  // ── Translations ─────────────────────────────────────────────────────────
  var translations = {
    de: {
      about_p1: 'Das Data Lab Hell (DLH) ist eine <strong>außeruniversitäre Forschungseinrichtung</strong> und als <strong>R&amp;D Incubator &amp; Innovation Lab</strong> in seiner Form einzigartig. Wir sind <strong>nicht gewinnorientiert,</strong> d.h. wir reinvestieren unseren Gewinn zur Gänze in F&amp;E, und betreiben <strong>anwendungsorientierte Forschung und Entwicklung</strong> konsequent als <strong>Kooperationspartner</strong>.',
      about_p2: 'Vielfältige datenbasierte Methoden für industrielle Anwendungen, dezentrale und adaptive Algorithmen sowie innovative mathematische, physikalische und algorithmische Modelle erfordern ein höchst <strong>interdisziplinäres Umfeld</strong>. Das spiegelt sich in unserem <strong>Team</strong> wider: Mathematiker:innen, Statistiker:innen, Informatiker:innen und Physiker:innen arbeiten gemeinsam an neuen theoretischen Modellen, experimentellen Plattformen und innovativen Forschungsansätzen.',
      about_p3: 'DLH ist ein <strong>einzigartiger Raum</strong>, in dem <strong>datengetriebene Innovation</strong> nicht nur gedacht wird, sondern <strong>zündet</strong> – wir leben „Igniting Data-Driven Innovation".',
      rd_intro: 'Wir arbeiten an der Schnittstelle von Wissenschaft und Industrie — mit der Tiefe einer Forschungseinrichtung und der Agilität eines Startups — ohne eines zu sein.',
      rd1_title: 'Datenbasierte Methoden',
      rd1_desc: 'Vielfältige datenbasierte Methoden für industrielle Anwendungen.',
      rd2_title: 'Dezentrale & adaptive Algorithmen',
      rd2_desc: 'Entwicklung dezentraler und adaptiver Algorithmen für komplexe reale Systeme.',
      rd3_title: 'Mathematische & physikalische Modelle',
      rd3_desc: 'Innovative mathematische, physikalische und algorithmische Modelle für neue Problemstellungen.',
      rd4_title: 'Theoretische Modelle',
      rd4_desc: 'Gemeinsame Arbeit an neuen theoretischen Modellen in einem interdisziplinären Umfeld.',
      rd5_title: 'Experimentelle Plattformen',
      rd5_desc: 'Aufbau und Betrieb experimenteller Plattformen für anwendungsorientierte Forschung.',
      rd6_title: 'Innovative Forschungsansätze',
      rd6_desc: 'Entwicklung innovativer Forschungsansätze an der Schnittstelle von Wissenschaft und Industrie.',
      team_intro: 'Ein interdisziplinäres Team aus Mathematiker:innen, Statistiker:innen, Informatiker:innen und Physiker:innen.',
      team_toggle_show: 'Alle Teammitglieder anzeigen ↓',
      team_toggle_hide: 'Weniger anzeigen ↑',
      collab_intro: 'Wir betreiben angewandte Forschung und Entwicklung konsequent als Kooperationspartner — gemeinsam mit führenden Unternehmen und Forschungseinrichtungen. Eine Auswahl unserer bisherigen Kooperationspartner:',
      contact_intro: 'Wir arbeiten gerne gemeinsam an Herausforderungen, sind neugierig und offen für neue Perspektiven. Der Austausch mit Partnern aus Industrie und Wissenschaft ist uns wichtig. Wenn die Chemie stimmt, entstehen daraus langfristige Kooperationen.',
      contact_office: 'Büro',
      contact_mgmt: 'Geschäftsführung',
      contact_hq: 'Firmensitz',
      contact_branch: 'Zweigniederlassung',
      footer_revoke: 'Einwilligungen widerrufen',
      footer_datenschutz: 'Datenschutz',
      footer_impressum: 'Impressum',
      legal_label: 'Rechtliches',
      ds_title: 'Datenschutzerklärung',
      ds_h_general: 'Allgemeines',
      ds_p_general: 'Die Data Lab Hell GmbH (im Folgenden „wir" oder „uns") nimmt den Schutz Ihrer persönlichen Daten ernst. Diese Datenschutzerklärung informiert Sie über die Art, den Umfang und Zweck der Erhebung und Verwendung von personenbezogenen Daten auf unserer Website www.datalabhell.at (im Folgenden „Website").',
      ds_h_controller: 'Verantwortliche Stelle',
      ds_p_controller: 'Verantwortlich für die Verarbeitung personenbezogener Daten ist:<br /><br />Data Lab Hell GmbH<br />Europastraße 2a<br />6170 Zirl, Österreich<br />E-Mail: <a href="mailto:office@datalabhell.at">office@datalabhell.at</a>',
      ds_h_collection: 'Datenerhebung und -verwendung',
      ds_h_logs: 'a) Log-Dateien',
      ds_p_logs1: 'Bei jedem Zugriff auf unsere Website werden automatisch Informationen durch den Internetbrowser Ihres Endgerätes an unseren Server gesendet und in Log-Dateien gespeichert. Diese Informationen beinhalten:',
      ds_li_logs1: 'IP-Adresse des anfragenden Rechners',
      ds_li_logs2: 'Datum und Uhrzeit des Zugriffs',
      ds_li_logs3: 'Name und URL der abgerufenen Datei',
      ds_li_logs4: 'Website, von der aus der Zugriff erfolgt (Referrer-URL)',
      ds_li_logs5: 'verwendetes Betriebssystem Ihres Rechners',
      ds_li_logs6: 'Browser, Sprache und Version der Browsersoftware',
      ds_p_logs2: 'Die genannten Daten werden zu folgenden Zwecken verarbeitet:',
      ds_li_use1: 'Gewährleistung eines reibungslosen Verbindungsaufbaus der Website',
      ds_li_use2: 'Gewährleistung einer komfortablen Nutzung unserer Website',
      ds_li_use3: 'Auswertung der Systemsicherheit und -stabilität',
      ds_li_use4: 'zu administrativen Zwecken',
      ds_p_logs_legal: 'Die Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse folgt aus den oben aufgelisteten Zwecken zur Datenerhebung.',
      ds_h_contact_form: 'b) Kontaktaufnahme',
      ds_p_contact_form: 'Wenn Sie per E-Mail oder Telefon Kontakt mit uns aufnehmen, werden die von Ihnen angegebenen Daten (z.B. Name, E-Mail-Adresse, Telefonnummer) zur Bearbeitung Ihrer Anfrage und für mögliche Anschlussfragen gespeichert. Die Rechtsgrundlage für die Verarbeitung der Daten ist Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) und/oder auf unseren berechtigten Interessen (Art. 6 Abs. 1 lit. f DSGVO).',
      ds_h_sharing: 'Weitergabe von Daten',
      ds_p_sharing: 'Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den im Folgenden aufgeführten Zwecken findet nicht statt. Wir geben Ihre persönlichen Daten nur an Dritte weiter, wenn:',
      ds_li_share1: 'Sie Ihre ausdrückliche Einwilligung dazu erteilt haben,',
      ds_li_share2: 'die Verarbeitung zur Erfüllung einer rechtlichen Verpflichtung erforderlich ist,',
      ds_li_share3: 'die Verarbeitung zur Wahrung berechtigter Interessen erforderlich ist und kein Grund zur Annahme besteht, dass Sie ein überwiegendes schutzwürdiges Interesse an der Nichtweitergabe Ihrer Daten haben.',
      ds_h_cookies: 'Cookies',
      ds_p_cookies1: 'Unsere Website verwendet Cookies. Bei Cookies handelt es sich um kleine Textdateien, die auf Ihrem Endgerät abgelegt werden. Ihr Browser greift auf diese Dateien zu. Durch den Einsatz von Cookies erhöht sich die Benutzerfreundlichkeit und Sicherheit dieser Website.',
      ds_p_cookies2: 'Die von uns verwendeten Cookies sind technisch notwendige „Session-Cookies", die nach Ende Ihres Besuchs automatisch gelöscht werden. Es werden keine Tracking-, Analyse- oder Marketing-Cookies eingesetzt. Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben oder generell ausschließen.',
      ds_h_rights: 'Ihre Rechte',
      ds_p_rights_intro: 'Sie haben das Recht:',
      ds_li_rights1: 'gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen, insbesondere über Verarbeitungszwecke, Kategorien, Empfänger, geplante Speicherdauer sowie das Bestehen eines Rechts auf Berichtigung, Löschung, Einschränkung oder Widerspruch;',
      ds_li_rights2: 'gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen;',
      ds_li_rights3: 'gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen, soweit nicht die Verarbeitung zur Ausübung des Rechts auf freie Meinungsäußerung, zur Erfüllung einer rechtlichen Verpflichtung oder zur Geltendmachung von Rechtsansprüchen erforderlich ist;',
      ds_li_rights4: 'gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen;',
      ds_li_rights5: 'gemäß Art. 20 DSGVO Ihre personenbezogenen Daten in einem strukturierten, gängigen Format zu erhalten (Datenübertragbarkeit);',
      ds_li_rights6: 'gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten einzulegen.',
      ds_p_rights_contact: 'Zur Ausübung Ihrer Rechte wenden Sie sich bitte an: <a href="mailto:office@datalabhell.at">office@datalabhell.at</a>',
      ds_p_rights_authority: 'Sie haben außerdem das Recht, sich bei der zuständigen Datenschutzbehörde zu beschweren. In Österreich ist dies die Datenschutzbehörde (<a href="https://www.dsb.gv.at" target="_blank" rel="noopener">www.dsb.gv.at</a>).',
      ds_h_updates: 'Aktualität und Änderungen',
      ds_p_updates: 'Diese Datenschutzerklärung ist aktuell gültig und hat den Stand März 2026. Durch die Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher bzw. behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern.',
      imp_title: 'Impressum',
      imp_p_contact_main: 'E-Mail: <a href="mailto:office@datalabhell.at">office@datalabhell.at</a><br />T Office: <a href="tel:+436776175730">+43 677 617 573 00</a><br />T Geschäftsführung: <a href="tel:+436776175731">+43 677 617 573 01</a><br />Website: <a href="https://www.datalabhell.at" target="_blank" rel="noopener">www.datalabhell.at</a>',
      imp_h_branch: 'Zweigniederlassung',
      imp_h_register: 'Firmenbuch',
      imp_p_register: 'Firmenbuchnummer: FN 591704 d<br />Firmenbuchgericht: Innsbruck<br />Firmensitz: 6170 Zirl<br />UID: ATU78729468',
      imp_h_ceo: 'Geschäftsführer',
      imp_h_contact_legal: 'Kontakt für Anfragen und rechtliche Angelegenheiten',
      imp_p_contact_legal: 'Data Lab Hell GmbH<br />Europastraße 2a<br />6170 Zirl, Österreich<br />E-Mail: <a href="mailto:office@datalabhell.at">office@datalabhell.at</a><br />T Office: <a href="tel:+436776175730">+43 677 617 573 00</a>',
      imp_p_image1: 'Archiv Data Lab Hell GmbH',
      imp_h_image: 'Bilderrechte',
      imp_p_image2: 'Alle auf dieser Website verwendeten Logos und Markenzeichen sind Eigentum der jeweiligen Unternehmen und Organisationen und werden ausschließlich zu Identifikationszwecken verwendet.',
      imp_h_liability: 'Haftungshinweis',
      imp_p_liability: 'Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.',
      imp_h_copyright: 'Urheberrechtshinweis',
      imp_p_copyright: 'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.',
      imp_p_datenschutz: 'Informationen zum Datenschutz finden Sie in unserer ausführlichen <a href="datenschutz.html">Datenschutzerklärung</a>.'
    },
    en: {
      about_p1: 'Data Lab Hell (DLH) is a <strong>research and technology organisation</strong> and as an <strong>R&amp;D Incubator &amp; Innovation Lab</strong> unique in its form. We are <strong>not profit-oriented,</strong> meaning we reinvest our profits entirely into R&amp;D, and consistently pursue <strong>applied research and development</strong> as a <strong>cooperation partner</strong>.',
      about_p2: 'Diverse data-based methods for industrial applications, decentralised and adaptive algorithms, as well as innovative mathematical, physical and algorithmic models require a highly <strong>interdisciplinary environment</strong>. This is reflected in our <strong>team</strong>: mathematicians, statisticians, computer scientists and physicists work together on new theoretical models, experimental platforms and innovative research approaches.',
      about_p3: 'DLH is a <strong>unique space</strong> where <strong>data-driven innovation</strong> is not only conceived but <strong>ignites</strong> – we live "Igniting Data-Driven Innovation".',
      rd_intro: 'We work at the interface of science and industry — with the depth of a research institution and the agility of a startup — without being either.',
      rd1_title: 'Data-Based Methods',
      rd1_desc: 'Diverse data-based methods for industrial applications.',
      rd2_title: 'Decentralised & Adaptive Algorithms',
      rd2_desc: 'Development of decentralised and adaptive algorithms for complex real-world systems.',
      rd3_title: 'Mathematical & Physical Models',
      rd3_desc: 'Innovative mathematical, physical and algorithmic models for new problem statements.',
      rd4_title: 'Theoretical Models',
      rd4_desc: 'Collaborative work on new theoretical models in an interdisciplinary environment.',
      rd5_title: 'Experimental Platforms',
      rd5_desc: 'Building and operating experimental platforms for applied research.',
      rd6_title: 'Innovative Research Approaches',
      rd6_desc: 'Development of innovative research approaches at the interface of science and industry.',
      team_intro: 'An interdisciplinary team of mathematicians, statisticians, computer scientists and physicists.',
      team_toggle_show: 'Show all team members ↓',
      team_toggle_hide: 'Show less ↑',
      collab_intro: 'We consistently pursue applied research and development as a cooperation partner — together with leading companies and research institutions. A selection of our cooperation partners:',
      contact_intro: 'We enjoy working on challenges together, are curious and open to new perspectives. The exchange with partners from industry and science is important to us. When the chemistry is right, long-term cooperations emerge.',
      contact_office: 'Office',
      contact_mgmt: 'Management',
      contact_hq: 'Headquarters',
      contact_branch: 'Branch Office',
      footer_revoke: 'Revoke Consent',
      footer_datenschutz: 'Privacy Policy',
      footer_impressum: 'Legal Notice',
      legal_label: 'Legal',
      ds_title: 'Privacy Policy',
      ds_h_general: 'General',
      ds_p_general: 'Data Lab Hell GmbH (hereinafter "we" or "us") takes the protection of your personal data seriously. This privacy policy informs you about the nature, scope and purpose of the collection and use of personal data on our website www.datalabhell.at (hereinafter "website").',
      ds_h_controller: 'Data Controller',
      ds_p_controller: 'The party responsible for the processing of personal data is:<br /><br />Data Lab Hell GmbH<br />Europastraße 2a<br />6170 Zirl, Austria<br />E-Mail: <a href="mailto:office@datalabhell.at">office@datalabhell.at</a>',
      ds_h_collection: 'Data Collection and Use',
      ds_h_logs: 'a) Log Files',
      ds_p_logs1: 'Each time our website is accessed, information is automatically sent to our server by the internet browser of your device and stored in log files. This information includes:',
      ds_li_logs1: 'IP address of the requesting computer',
      ds_li_logs2: 'Date and time of access',
      ds_li_logs3: 'Name and URL of the retrieved file',
      ds_li_logs4: 'Website from which access is made (referrer URL)',
      ds_li_logs5: 'Operating system of your computer',
      ds_li_logs6: 'Browser, language and version of the browser software',
      ds_p_logs2: 'The data mentioned is processed for the following purposes:',
      ds_li_use1: 'Ensuring a smooth connection to the website',
      ds_li_use2: 'Ensuring convenient use of our website',
      ds_li_use3: 'Evaluation of system security and stability',
      ds_li_use4: 'For administrative purposes',
      ds_p_logs_legal: 'The legal basis for data processing is Art. 6 para. 1 lit. f GDPR. Our legitimate interest follows from the purposes for data collection listed above.',
      ds_h_contact_form: 'b) Contact',
      ds_p_contact_form: 'If you contact us by e-mail or telephone, the data you provide (e.g. name, e-mail address, telephone number) will be stored for the purpose of processing your enquiry and in case of follow-up questions. The legal basis for processing the data is Art. 6 para. 1 lit. b GDPR, insofar as your enquiry is related to the fulfilment of a contract or is necessary for the implementation of pre-contractual measures. In all other cases, the processing is based on your consent (Art. 6 para. 1 lit. a GDPR) and/or our legitimate interests (Art. 6 para. 1 lit. f GDPR).',
      ds_h_sharing: 'Data Sharing',
      ds_p_sharing: 'Your personal data will not be transmitted to third parties for purposes other than those listed below. We only pass on your personal data to third parties if:',
      ds_li_share1: 'You have given your express consent to do so,',
      ds_li_share2: 'Processing is necessary to fulfil a legal obligation,',
      ds_li_share3: 'Processing is necessary to protect legitimate interests and there is no reason to assume that you have an overriding interest worthy of protection in the non-disclosure of your data.',
      ds_h_cookies: 'Cookies',
      ds_p_cookies1: 'Our website uses cookies. Cookies are small text files that are stored on your device. Your browser accesses these files. The use of cookies increases the user-friendliness and security of this website.',
      ds_p_cookies2: 'The cookies we use are technically necessary "session cookies" that are automatically deleted after your visit. No tracking, analytics or marketing cookies are used. You can set your browser to inform you about the setting of cookies and to allow cookies only in individual cases or to exclude them generally.',
      ds_h_rights: 'Your Rights',
      ds_p_rights_intro: 'You have the right to:',
      ds_li_rights1: 'pursuant to Art. 15 GDPR, request information about your personal data processed by us, in particular about the purposes of processing, categories, recipients, planned storage period and the existence of a right to rectification, erasure, restriction or objection;',
      ds_li_rights2: 'pursuant to Art. 16 GDPR, immediately request the correction of incorrect or completion of your personal data stored by us;',
      ds_li_rights3: 'pursuant to Art. 17 GDPR, request the deletion of your personal data stored by us, unless the processing is necessary for the exercise of the right to freedom of expression, for the fulfilment of a legal obligation or for the assertion of legal claims;',
      ds_li_rights4: 'pursuant to Art. 18 GDPR, request the restriction of the processing of your personal data;',
      ds_li_rights5: 'pursuant to Art. 20 GDPR, receive your personal data in a structured, common format (data portability);',
      ds_li_rights6: 'pursuant to Art. 21 GDPR, object to the processing of your personal data.',
      ds_p_rights_contact: 'To exercise your rights, please contact: <a href="mailto:office@datalabhell.at">office@datalabhell.at</a>',
      ds_p_rights_authority: 'You also have the right to lodge a complaint with the competent data protection authority. In Austria, this is the Austrian Data Protection Authority (<a href="https://www.dsb.gv.at" target="_blank" rel="noopener">www.dsb.gv.at</a>).',
      ds_h_updates: 'Currency and Changes',
      ds_p_updates: 'This privacy policy is currently valid as of March 2026. Due to the further development of our website or changes in legal or regulatory requirements, it may be necessary to amend this privacy policy.',
      imp_title: 'Legal Notice',
      imp_p_contact_main: 'E-Mail: <a href="mailto:office@datalabhell.at">office@datalabhell.at</a><br />T Office: <a href="tel:+436776175730">+43 677 617 573 00</a><br />T Management: <a href="tel:+436776175731">+43 677 617 573 01</a><br />Website: <a href="https://www.datalabhell.at" target="_blank" rel="noopener">www.datalabhell.at</a>',
      imp_h_branch: 'Branch Office',
      imp_h_register: 'Company Register',
      imp_p_register: 'Registration Number: FN 591704 d<br />Commercial Court: Innsbruck<br />Registered Office: 6170 Zirl<br />VAT ID: ATU78729468',
      imp_h_ceo: 'Managing Director',
      imp_h_contact_legal: 'Contact for Enquiries and Legal Matters',
      imp_p_contact_legal: 'Data Lab Hell GmbH<br />Europastraße 2a<br />6170 Zirl, Austria<br />E-Mail: <a href="mailto:office@datalabhell.at">office@datalabhell.at</a><br />T Office: <a href="tel:+436776175730">+43 677 617 573 00</a>',
      imp_p_image1: 'Archive Data Lab Hell GmbH',
      imp_h_image: 'Image Credits',
      imp_p_image2: 'All logos and trademarks used on this website are the property of their respective companies and organisations and are used solely for identification purposes.',
      imp_h_liability: 'Liability Disclaimer',
      imp_p_liability: 'Despite careful editorial control, we accept no liability for the content of external links. The operators of the linked pages are solely responsible for their content.',
      imp_h_copyright: 'Copyright Notice',
      imp_p_copyright: 'The content and works on these pages created by the site operators are subject to Austrian copyright law. Reproduction, editing, distribution and any kind of exploitation outside the limits of copyright law require the written consent of the respective author or creator. Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected. In particular, third-party content is identified as such. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. Upon becoming aware of legal violations, we will remove such content immediately.',
      imp_p_datenschutz: 'Information on data protection can be found in our detailed <a href="datenschutz.html">Privacy Policy</a>.'
    }
  };

  var savedLang = localStorage.getItem('dlh_lang');
  var browserLang = (navigator.language || 'de').toLowerCase().startsWith('de') ? 'de' : 'en';
  var currentLang = savedLang || browserLang;

  function applyLang(lang) {
    var t = translations[lang] || translations['de'];
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.textContent = t[key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (t[key] !== undefined) el.innerHTML = t[key];
    });
    // Update team toggle text based on current expand state
    var toggle = document.getElementById('team-toggle');
    var expanded = document.getElementById('team-expanded');
    if (toggle && expanded) {
      var isOpen = expanded.style.display !== 'none';
      toggle.textContent = isOpen ? t['team_toggle_hide'] : t['team_toggle_show'];
    }
    document.documentElement.lang = lang;
    var langBtn = document.getElementById('lang-toggle');
    if (langBtn) langBtn.textContent = lang === 'de' ? 'EN' : 'DE';
  }

  // ── Header ───────────────────────────────────────────────────────────────
  var headerEl = document.querySelector('header');
  if (headerEl) {
    headerEl.innerHTML = [
      '<div class="container">',
      '  <a class="logo" href="' + (isIndex ? '#hero' : 'index.html') + '">',
      '    <img src="' + staticBase + 'brand/LOGO_DLH_header.svg" alt="Data Lab Hell" />',
      '  </a>',
      '  <nav id="main-nav">',
      '    <a href="' + base + '#about">About</a>',
      '    <a href="' + base + '#research">Scope</a>',
      '    <a href="' + base + '#team">Team</a>',
      '    <a href="' + base + '#kooperationen">Collaborations</a>',
      '    <a href="' + base + '#contact">Contact</a>',
      '    <a href="https://blog.datalabhell.at">Blog</a>',
      '  </nav>',
      '  <div class="header-right">',
      '    <button id="lang-toggle" class="lang-toggle">' + (currentLang === 'de' ? 'EN' : 'DE') + '</button>',
      '    <button class="burger" id="burger" aria-label="Toggle menu" aria-expanded="false">',
      '      <span></span><span></span><span></span>',
      '    </button>',
      '  </div>',
      '</div>'
    ].join('\n');

    // Lang toggle
    var langBtn = document.getElementById('lang-toggle');
    langBtn.addEventListener('click', function () {
      currentLang = currentLang === 'de' ? 'en' : 'de';
      localStorage.setItem('dlh_lang', currentLang);
      applyLang(currentLang);
    });

    // Burger toggle
    var burger = document.getElementById('burger');
    var nav = document.getElementById('main-nav');
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('nav-open');
      burger.classList.toggle('burger-open', open);
      burger.setAttribute('aria-expanded', open);
    });

    // Close nav when a link is clicked
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('nav-open');
        burger.classList.remove('burger-open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });

  }

  // ── Footer ───────────────────────────────────────────────────────────────
  var footerEl = document.querySelector('footer');
  if (footerEl) {
    footerEl.innerHTML = [
      '<div class="container footer-bottom-inner">',
      '  <p class="copy">&copy; 2026 Data Lab Hell GmbH &middot; Zirl, Austria</p>',
      '  <nav class="footer-legal">',
      '    <a href="#" data-cc-revoke data-i18n="footer_revoke">Einwilligungen widerrufen</a>',
      '    <a href="datenschutz.html" data-i18n="footer_datenschutz">Datenschutz</a>',
      '    <a href="impressum.html" data-i18n="footer_impressum">Impressum</a>',
      '  </nav>',
      '</div>'
    ].join('\n');
  }

  // Apply language to all [data-i18n] elements (including injected header/footer)
  applyLang(currentLang);

  // ── Back-to-top button ───────────────────────────────────────────────────
  var btn = document.createElement('button');
  btn.id = 'back-to-top';
  btn.setAttribute('aria-label', 'Back to top');
  btn.textContent = '↑';
  document.body.appendChild(btn);

  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ── Scroll handlers ──────────────────────────────────────────────────────
  var header = document.querySelector('header');

  window.addEventListener('scroll', function () {
    btn.classList.toggle('visible', window.scrollY > 400);
    if (isIndex && header) {
      header.classList.toggle('scrolled', window.scrollY > 40);
    }
  }, { passive: true });

  // trigger once on load
  if (isIndex && header) {
    header.classList.toggle('scrolled', window.scrollY > 40);
  }

  // ── Active footer link (subpages only) ───────────────────────────────────
  if (!isIndex) {
    var path = window.location.pathname;
    document.querySelectorAll('footer .footer-legal a').forEach(function (a) {
      var href = a.getAttribute('href');
      if (href && path.includes(href.replace('.html', ''))) {
        a.setAttribute('aria-current', 'page');
      }
    });
  }

  // ── Team toggle (index only) ─────────────────────────────────────────────
  if (isIndex) {
    var teamToggle = document.getElementById('team-toggle');
    var teamExpanded = document.getElementById('team-expanded');
    if (teamToggle && teamExpanded) {
      teamToggle.addEventListener('click', function () {
        var open = teamExpanded.style.display !== 'none';
        teamExpanded.style.display = open ? 'none' : 'grid';
        var t = translations[currentLang] || translations['de'];
        teamToggle.textContent = open ? t['team_toggle_show'] : t['team_toggle_hide'];
      });
    }
  }

  // ── Active nav highlight (index only, scroll-based) ──────────────────────
  if (isIndex) {
    var sections = document.querySelectorAll('section[id], div.hero[id]');
    var navLinks = document.querySelectorAll('header nav a');
    var lockedSection = null;
    var lockTimer = null;

    navLinks.forEach(function (a) {
      a.addEventListener('click', function () {
        var id = (a.getAttribute('href') || '').replace('#', '');
        if (!id) return;
        if (lockTimer) clearTimeout(lockTimer);
        lockedSection = id;
        navLinks.forEach(function (l) {
          l.classList.toggle('active', l === a);
        });
        lockTimer = setTimeout(function () { lockedSection = null; }, 1200);
      });
    });

    function onScroll() {
      if (lockedSection) return;
      var headerH = header ? header.offsetHeight : 0;
      var scrollY = window.scrollY;
      var maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

      // Build natural thresholds
      var thresholds = [];
      sections.forEach(function (sec) {
        thresholds.push(sec.offsetTop - headerH - 8);
      });

      // Redistribute thresholds that exceed maxScroll evenly within the reachable range
      var firstOver = -1;
      for (var k = 0; k < thresholds.length; k++) {
        if (thresholds[k] > maxScroll) { firstOver = k; break; }
      }
      if (firstOver !== -1) {
        var base = firstOver > 0 ? thresholds[firstOver - 1] : 0;
        var count = thresholds.length - firstOver;
        var step = (maxScroll - base) / (count + 1);
        for (var m = firstOver; m < thresholds.length; m++) {
          thresholds[m] = base + step * (m - firstOver + 1);
        }
      }

      // Each section active from its threshold until the next one
      var current = '';
      for (var i = 0; i < sections.length; i++) {
        var nextThreshold = i + 1 < sections.length ? thresholds[i + 1] : Infinity;
        if (scrollY >= thresholds[i] && scrollY < nextThreshold) {
          current = sections[i].id;
          break;
        }
      }

      navLinks.forEach(function (a) {
        a.classList.toggle('active', a.getAttribute('href') === '#' + current);
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ── Ticker ───────────────────────────────────────────────────────────────
  var tickerInner = document.querySelector('.ticker-inner');
  if (tickerInner) {
    var track = tickerInner.parentNode; // .ticker-track

    // Wrap original + clone in a single flex row that we will translate
    var wrapper = document.createElement('div');
    wrapper.style.cssText = 'display:flex;gap:7rem;width:max-content;will-change:transform;';
    track.appendChild(wrapper);
    wrapper.appendChild(tickerInner); // move original into wrapper
    var clone = tickerInner.cloneNode(true);
    wrapper.appendChild(clone);

    var speed = 0.5; // px per frame
    var pos = 0;
    var paused = false;
    var singleWidth = 0;

    track.parentNode.addEventListener('mouseenter', function () { paused = true; });
    track.parentNode.addEventListener('mouseleave', function () { paused = false; });

    function tick() {
      if (!paused) {
        pos -= speed;
        if (Math.abs(pos) >= singleWidth) pos = 0;
        wrapper.style.transform = 'translateX(' + pos + 'px)';
      }
      requestAnimationFrame(tick);
    }

    // Wait for images to load so widths are correct
    window.addEventListener('load', function () {
      var gap = parseFloat(getComputedStyle(wrapper).gap) || 0;
      singleWidth = tickerInner.offsetWidth + gap;
      requestAnimationFrame(tick);
    });
  }
})();
