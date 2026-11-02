(() => {
  "use strict";
  const supported = ["pt", "en", "es", "hi", "ja"];
  const names = {pt:"Português",en:"English",es:"Español",hi:"हिन्दी",ja:"日本語"};
  let saved = "";
  try { saved = localStorage.getItem("zalgoCreatorLanguageV1") || ""; } catch (_) {}
  const detected = (navigator.languages || [navigator.language || "pt-BR"])
    .map(value => String(value).toLowerCase().split("-")[0])
    .find(value => supported.includes(value)) || "pt";
  let language = supported.includes(saved) ? saved : detected;

  const dictionaries = {
    en: {
      "Privacidade":"Privacy","Tema claro":"Light theme","Tema escuro":"Dark theme","Alternar tema":"Toggle theme","Idioma":"Language",
      "ESTÚDIO DE TEXTO · 2.0":"TEXT STUDIO · 2.0","✦ Laboratório de texto":"✦ Text laboratory",
      "Dê outra dimensão às palavras.":"Give words another dimension.",
      "Crie efeitos Zalgo, experimente estilos, edite o resultado e compartilhe suas criações. Tudo é processado no próprio dispositivo.":"Create Zalgo effects, try styles, edit the result, and share your creations. Everything is processed on your device.",
      "Sem cadastro":"No registration","Funciona offline após carregar":"Works offline after loading","Textos processados localmente":"Texts processed locally",
      "Conectando à API...":"Connecting to API...","API conectada":"API connected","API indisponível":"API unavailable",
      "Contando visitantes...":"Counting visitors...","Online indisponível":"Online unavailable"," pessoa online":" person online"," pessoas online":" people online",
      "PUBLICIDADE":"ADVERTISEMENT","Área de criação":"Creation area","Escreva ou cole o texto que deseja transformar.":"Type or paste the text you want to transform.",
      "Texto original":"Original text","Digite ou cole seu texto aqui...":"Type or paste your text here...",
      "Exemplos rápidos":"Quick examples","Olá mundo":"Hello world","Boas-vindas":"Welcome","Texto estranho":"Strange text","Clima sombrio":"Dark mood",
      "Estilo de distorção":"Distortion style","Zalgo clássico":"Classic Zalgo","Falha digital":"Digital glitch","Caos total":"Total chaos",
      "Intensidade":"Intensity","Leve":"Light","Normal":"Normal","Pesada":"Heavy","Extrema":"Extreme",
      "Quantidade de marcas":"Number of marks","Cobertura do texto":"Text coverage","Marcas acima":"Marks above","Marcas no meio":"Marks in the middle",
      "Marcas abaixo":"Marks below","Preservar espaços":"Preserve spaces","✦ Gerar texto Zalgo":"✦ Generate Zalgo text",
      "⤨ Surpreenda-me":"⤨ Surprise me","↺ Restaurar ajustes":"↺ Restore settings","Limpar campos":"Clear fields","Pronto para criar.":"Ready to create.",
      "⚡ Resultado":"⚡ Result","Edite o texto gerado diretamente aqui.":"Edit the generated text right here.",
      "Texto transformado":"Transformed text","Seu texto Zalgo aparecerá aqui...":"Your Zalgo text will appear here...",
      "Copiar":"Copy","Compartilhar":"Share","Baixar TXT":"Download TXT","Usar como original":"Use as original","Selecionar tudo":"Select all",
      "🛠️ Ferramentas rápidas":"🛠️ Quick tools","Aplicadas ao texto original.":"Applied to the original text.",
      "Aᵃ Maiúsculas":"Aᵃ Uppercase","Transforma em CAIXA ALTA":"Converts to UPPERCASE","aᵃ Minúsculas":"aᵃ Lowercase",
      "Transforma em caixa baixa":"Converts to lowercase","⇄ Inverter texto":"⇄ Reverse text","Inverte a ordem dos caracteres":"Reverses character order",
      "✧ Limpar Zalgo":"✧ Clean Zalgo","Remove marcas combinantes":"Removes combining marks","⧉ Duplicar texto":"⧉ Duplicate text",
      "Repete o conteúdo em outra linha":"Repeats the content on another line","↔ Remover espaços":"↔ Remove extra spaces",
      "Remove espaços extras nas pontas":"Removes extra spaces at the ends","🕘 Histórico recente":"🕘 Recent history",
      "Até 8 resultados salvos neste dispositivo.":"Up to 8 results saved on this device.","Limpar":"Clear",
      "Suas criações aparecerão aqui.":"Your creations will appear here.","Abrir":"Open",
      "Privacidade:":"Privacy:","os textos não são enviados a um servidor. O histórico e suas preferências ficam armazenados localmente no navegador deste dispositivo. Use a opção “Limpar histórico” para apagá-los.":"texts are not sent to a server. Your history and preferences are stored locally in this device's browser. Use “Clear history” to delete them.",
      "Créditos: Zeze Anima · Ferramenta gratuita":"Credits: Zeze Anima · Free tool","Política de privacidade":"Privacy policy",
      "Código-fonte":"Source code","Voltar ao topo ↑":"Back to top ↑",
      "Digite algum texto antes de gerar.":"Enter some text before generating.","Ative pelo menos um tipo de marca.":"Enable at least one type of mark.",
      "Texto criado! Copie, compartilhe ou continue editando.":"Text created! Copy, share, or keep editing.",
      "Ainda não existe um resultado para copiar.":"There is no result to copy yet.","Texto copiado!":"Text copied!",
      "Texto selecionado. Use Copiar no menu do celular.":"Text selected. Use Copy in your phone's menu.",
      "Gere um resultado antes de baixar.":"Generate a result before downloading.","Arquivo TXT preparado para baixar.":"TXT file is ready to download.",
      "Gere um resultado antes de compartilhar.":"Generate a result before sharing.","Texto criado no Zalgo Creator":"Text created in Zalgo Creator",
      "Compartilhamento aberto.":"Sharing opened.","Não foi possível abrir o compartilhamento.":"Could not open sharing.",
      "Seu navegador não oferece compartilhamento direto. O texto foi copiado.":"Your browser does not support direct sharing. The text was copied.",
      "Campos limpos.":"Fields cleared.","Digite um texto original primeiro.":"Enter original text first.",
      "Ferramenta aplicada ao texto original.":"Tool applied to the original text.","Criação recuperada do histórico.":"Creation restored from history.",
      "Ajustes restaurados.":"Settings restored.","Ainda não existe um resultado.":"There is no result yet.",
      "Resultado movido para o texto original.":"Result moved to the original text.","Não há texto para selecionar.":"There is no text to select.",
      "Resultado selecionado.":"Result selected.","Histórico apagado deste dispositivo.":"History deleted from this device.",
      "Exemplo carregado.":"Example loaded."," caracteres":" characters"," caracteres":" characters",
      "Créditos":"Credits","Conheça quem criou o Zalgo Lab.":"Meet the creator of Zalgo Lab.",
      "Criação e desenvolvimento do projeto.":"Project creation and development.","◉ Ver perfil no GitHub":"◉ View GitHub profile",
      "Obrigado por visitar o Zalgo Lab!":"Thank you for visiting Zalgo Lab!","← Voltar ao gerador":"← Back to generator",
      "← Voltar ao criador":"← Back to creator","Loja oficial":"Official store","LOJA OFICIAL":"OFFICIAL STORE",
      "Desbloqueie o Zalgo Pro":"Unlock Zalgo Pro","Escolha o plano que combina com você.":"Choose the plan that works for you.",
      "Pagamento ainda não disponível.":"Payment is not available yet.","Esta loja está em modo de demonstração.":"This store is in demo mode."
    },
    es: {
      "Privacidade":"Privacidad","Tema claro":"Tema claro","Tema escuro":"Tema oscuro","Alternar tema":"Cambiar tema","Idioma":"Idioma",
      "ESTÚDIO DE TEXTO · 2.0":"ESTUDIO DE TEXTO · 2.0","✦ Laboratório de texto":"✦ Laboratorio de texto",
      "Dê outra dimensão às palavras.":"Dale otra dimensión a las palabras.",
      "Crie efeitos Zalgo, experimente estilos, edite o resultado e compartilhe suas criações. Tudo é processado no próprio dispositivo.":"Crea efectos Zalgo, prueba estilos, edita el resultado y comparte tus creaciones. Todo se procesa en tu propio dispositivo.",
      "Sem cadastro":"Sin registro","Funciona offline após carregar":"Funciona sin conexión tras cargar","Textos processados localmente":"Textos procesados localmente",
      "Conectando à API...":"Conectando con la API...","API conectada":"API conectada","API indisponível":"API no disponible",
      "Contando visitantes...":"Contando visitantes...","Online indisponível":"Estado en línea no disponible"," pessoa online":" persona en línea"," pessoas online":" personas en línea",
      "PUBLICIDADE":"PUBLICIDAD","Área de criação":"Área de creación","Escreva ou cole o texto que deseja transformar.":"Escribe o pega el texto que quieres transformar.",
      "Texto original":"Texto original","Digite ou cole seu texto aqui...":"Escribe o pega tu texto aquí...",
      "Exemplos rápidos":"Ejemplos rápidos","Olá mundo":"Hola mundo","Boas-vindas":"Bienvenida","Texto estranho":"Texto extraño","Clima sombrio":"Ambiente oscuro",
      "Estilo de distorção":"Estilo de distorsión","Zalgo clássico":"Zalgo clásico","Falha digital":"Fallo digital","Caos total":"Caos total",
      "Intensidade":"Intensidad","Leve":"Ligera","Normal":"Normal","Pesada":"Intensa","Extrema":"Extrema",
      "Quantidade de marcas":"Cantidad de marcas","Cobertura do texto":"Cobertura del texto","Marcas acima":"Marcas arriba","Marcas no meio":"Marcas en medio",
      "Marcas abaixo":"Marcas abajo","Preservar espaços":"Conservar espacios","✦ Gerar texto Zalgo":"✦ Generar texto Zalgo",
      "⤨ Surpreenda-me":"⤨ Sorpréndeme","↺ Restaurar ajustes":"↺ Restaurar ajustes","Limpar campos":"Limpiar campos","Pronto para criar.":"Listo para crear.",
      "⚡ Resultado":"⚡ Resultado","Edite o texto gerado diretamente aqui.":"Edita aquí mismo el texto generado.",
      "Texto transformado":"Texto transformado","Seu texto Zalgo aparecerá aqui...":"Tu texto Zalgo aparecerá aquí...",
      "Copiar":"Copiar","Compartilhar":"Compartir","Baixar TXT":"Descargar TXT","Usar como original":"Usar como original","Selecionar tudo":"Seleccionar todo",
      "🛠️ Ferramentas rápidas":"🛠️ Herramientas rápidas","Aplicadas ao texto original.":"Se aplican al texto original.",
      "Aᵃ Maiúsculas":"Aᵃ Mayúsculas","Transforma em CAIXA ALTA":"Convierte a MAYÚSCULAS","aᵃ Minúsculas":"aᵃ Minúsculas",
      "Transforma em caixa baixa":"Convierte a minúsculas","⇄ Inverter texto":"⇄ Invertir texto","Inverte a ordem dos caracteres":"Invierte el orden de los caracteres",
      "✧ Limpar Zalgo":"✧ Limpiar Zalgo","Remove marcas combinantes":"Elimina marcas combinantes","⧉ Duplicar texto":"⧉ Duplicar texto",
      "Repete o conteúdo em outra linha":"Repite el contenido en otra línea","↔ Remover espaços":"↔ Quitar espacios",
      "Remove espaços extras nas pontas":"Elimina espacios sobrantes en los extremos","🕘 Histórico recente":"🕘 Historial reciente",
      "Até 8 resultados salvos neste dispositivo.":"Hasta 8 resultados guardados en este dispositivo.","Limpar":"Limpiar",
      "Suas criações aparecerão aqui.":"Tus creaciones aparecerán aquí.","Abrir":"Abrir",
      "Privacidade:":"Privacidad:","os textos não são enviados a um servidor. O histórico e suas preferências ficam armazenados localmente no navegador deste dispositivo. Use a opção “Limpar histórico” para apagá-los.":"los textos no se envían a un servidor. El historial y tus preferencias se guardan localmente en el navegador de este dispositivo. Usa “Limpiar historial” para borrarlos.",
      "Créditos: Zeze Anima · Ferramenta gratuita":"Créditos: Zeze Anima · Herramienta gratuita","Política de privacidade":"Política de privacidad",
      "Código-fonte":"Código fuente","Voltar ao topo ↑":"Volver arriba ↑",
      "Digite algum texto antes de gerar.":"Escribe algo antes de generar.","Ative pelo menos um tipo de marca.":"Activa al menos un tipo de marca.",
      "Texto criado! Copie, compartilhe ou continue editando.":"¡Texto creado! Cópialo, compártelo o sigue editando.",
      "Ainda não existe um resultado para copiar.":"Todavía no hay ningún resultado para copiar.","Texto copiado!":"¡Texto copiado!",
      "Texto selecionado. Use Copiar no menu do celular.":"Texto seleccionado. Usa Copiar en el menú del móvil.",
      "Gere um resultado antes de baixar.":"Genera un resultado antes de descargarlo.","Arquivo TXT preparado para baixar.":"Archivo TXT preparado para descargar.",
      "Gere um resultado antes de compartilhar.":"Genera un resultado antes de compartirlo.","Texto criado no Zalgo Creator":"Texto creado en Zalgo Creator",
      "Compartilhamento aberto.":"Se abrió la opción para compartir.","Não foi possível abrir o compartilhamento.":"No se pudo abrir la opción para compartir.",
      "Seu navegador não oferece compartilhamento direto. O texto foi copiado.":"Tu navegador no permite compartir directamente. El texto se copió.",
      "Campos limpos.":"Campos vaciados.","Digite um texto original primeiro.":"Primero escribe un texto original.",
      "Ferramenta aplicada ao texto original.":"Herramienta aplicada al texto original.","Criação recuperada do histórico.":"Creación recuperada del historial.",
      "Ajustes restaurados.":"Ajustes restaurados.","Ainda não existe um resultado.":"Todavía no hay ningún resultado.",
      "Resultado movido para o texto original.":"Resultado movido al texto original.","Não há texto para selecionar.":"No hay texto para seleccionar.",
      "Resultado selecionado.":"Resultado seleccionado.","Histórico apagado deste dispositivo.":"Historial borrado de este dispositivo.",
      "Exemplo carregado.":"Ejemplo cargado."," caracteres":" caracteres",
      "Créditos":"Créditos","Conheça quem criou o Zalgo Lab.":"Conoce a quien creó Zalgo Lab.",
      "Criação e desenvolvimento do projeto.":"Creación y desarrollo del proyecto.","◉ Ver perfil no GitHub":"◉ Ver perfil en GitHub",
      "Obrigado por visitar o Zalgo Lab!":"¡Gracias por visitar Zalgo Lab!","← Voltar ao gerador":"← Volver al generador",
      "← Voltar ao criador":"← Volver al creador","Loja oficial":"Tienda oficial","LOJA OFICIAL":"TIENDA OFICIAL",
      "Desbloqueie o Zalgo Pro":"Desbloquea Zalgo Pro","Escolha o plano que combina com você.":"Elige el plan que más te convenga.",
      "Pagamento ainda não disponível.":"El pago aún no está disponible.","Esta loja está em modo de demonstração.":"Esta tienda está en modo de demostración."
    },
    hi: {
      "Privacidade":"गोपनीयता","Tema claro":"लाइट थीम","Tema escuro":"डार्क थीम","Alternar tema":"थीम बदलें","Idioma":"भाषा",
      "ESTÚDIO DE TEXTO · 2.0":"टेक्स्ट स्टूडियो · 2.0","✦ Laboratório de texto":"✦ टेक्स्ट प्रयोगशाला",
      "Dê outra dimensão às palavras.":"शब्दों को एक नया आयाम दें।",
      "Crie efeitos Zalgo, experimente estilos, edite o resultado e compartilhe suas criações. Tudo é processado no próprio dispositivo.":"ज़ाल्गो प्रभाव बनाएँ, अलग-अलग शैलियाँ आज़माएँ, परिणाम संपादित करें और अपनी रचनाएँ साझा करें। सब कुछ आपके डिवाइस पर ही प्रोसेस होता है।",
      "Sem cadastro":"पंजीकरण आवश्यक नहीं","Funciona offline após carregar":"लोड होने के बाद ऑफ़लाइन काम करता है","Textos processados localmente":"टेक्स्ट डिवाइस पर प्रोसेस होता है",
      "Conectando à API...":"API से कनेक्ट हो रहा है...","API conectada":"API कनेक्ट है","API indisponível":"API उपलब्ध नहीं है",
      "Contando visitantes...":"आगंतुकों की गणना हो रही है...","Online indisponível":"ऑनलाइन स्थिति उपलब्ध नहीं"," pessoa online":" व्यक्ति ऑनलाइन"," pessoas online":" लोग ऑनलाइन",
      "PUBLICIDADE":"विज्ञापन","Área de criação":"निर्माण क्षेत्र","Escreva ou cole o texto que deseja transformar.":"जिस टेक्स्ट को बदलना है उसे लिखें या पेस्ट करें।",
      "Texto original":"मूल टेक्स्ट","Digite ou cole seu texto aqui...":"अपना टेक्स्ट यहाँ लिखें या पेस्ट करें...",
      "Exemplos rápidos":"त्वरित उदाहरण","Olá mundo":"नमस्ते दुनिया","Boas-vindas":"स्वागत है","Texto estranho":"अजीब टेक्स्ट","Clima sombrio":"रहस्यमय माहौल",
      "Estilo de distorção":"विकृति शैली","Zalgo clássico":"क्लासिक ज़ाल्गो","Falha digital":"डिजिटल ग्लिच","Caos total":"पूर्ण अव्यवस्था",
      "Intensidade":"तीव्रता","Leve":"हल्का","Normal":"सामान्य","Pesada":"भारी","Extrema":"अत्यधिक",
      "Quantidade de marcas":"चिह्नों की संख्या","Cobertura do texto":"टेक्स्ट कवरेज","Marcas acima":"ऊपर चिह्न","Marcas no meio":"बीच में चिह्न",
      "Marcas abaixo":"नीचे चिह्न","Preservar espaços":"रिक्त स्थान बनाए रखें","✦ Gerar texto Zalgo":"✦ ज़ाल्गो टेक्स्ट बनाएँ",
      "⤨ Surpreenda-me":"⤨ मुझे चौंकाएँ","↺ Restaurar ajustes":"↺ सेटिंग रीसेट करें","Limpar campos":"फ़ील्ड साफ़ करें","Pronto para criar.":"बनाने के लिए तैयार।",
      "⚡ Resultado":"⚡ परिणाम","Edite o texto gerado diretamente aqui.":"बनाए गए टेक्स्ट को यहीं संपादित करें।",
      "Texto transformado":"बदला हुआ टेक्स्ट","Seu texto Zalgo aparecerá aqui...":"आपका ज़ाल्गो टेक्स्ट यहाँ दिखाई देगा...",
      "Copiar":"कॉपी करें","Compartilhar":"साझा करें","Baixar TXT":"TXT डाउनलोड करें","Usar como original":"मूल टेक्स्ट के रूप में उपयोग करें","Selecionar tudo":"सब चुनें",
      "🛠️ Ferramentas rápidas":"🛠️ त्वरित टूल","Aplicadas ao texto original.":"मूल टेक्स्ट पर लागू होते हैं।",
      "Aᵃ Maiúsculas":"Aᵃ बड़े अक्षर","Transforma em CAIXA ALTA":"सभी अक्षरों को बड़ा करता है","aᵃ Minúsculas":"aᵃ छोटे अक्षर",
      "Transforma em caixa baixa":"सभी अक्षरों को छोटा करता है","⇄ Inverter texto":"⇄ टेक्स्ट उलटें","Inverte a ordem dos caracteres":"अक्षरों का क्रम उलटता है",
      "✧ Limpar Zalgo":"✧ ज़ाल्गो साफ़ करें","Remove marcas combinantes":"संयोजन चिह्न हटाता है","⧉ Duplicar texto":"⧉ टेक्स्ट की प्रतिलिपि",
      "Repete o conteúdo em outra linha":"सामग्री को अगली पंक्ति में दोहराता है","↔ Remover espaços":"↔ अतिरिक्त रिक्त स्थान हटाएँ",
      "Remove espaços extras nas pontas":"शुरुआत और अंत के अतिरिक्त स्थान हटाता है","🕘 Histórico recente":"🕘 हाल का इतिहास",
      "Até 8 resultados salvos neste dispositivo.":"इस डिवाइस पर अधिकतम 8 परिणाम सहेजे जाते हैं।","Limpar":"साफ़ करें",
      "Suas criações aparecerão aqui.":"आपकी रचनाएँ यहाँ दिखाई देंगी।","Abrir":"खोलें",
      "Privacidade:":"गोपनीयता:","os textos não são enviados a um servidor. O histórico e suas preferências ficam armazenados localmente no navegador deste dispositivo. Use a opção “Limpar histórico” para apagá-los.":"टेक्स्ट किसी सर्वर पर नहीं भेजे जाते। आपका इतिहास और प्राथमिकताएँ इसी डिवाइस के ब्राउज़र में सहेजी जाती हैं। उन्हें हटाने के लिए “इतिहास साफ़ करें” चुनें।",
      "Créditos: Zeze Anima · Ferramenta gratuita":"श्रेय: Zeze Anima · निःशुल्क टूल","Política de privacidade":"गोपनीयता नीति",
      "Código-fonte":"सोर्स कोड","Voltar ao topo ↑":"ऊपर जाएँ ↑",
      "Digite algum texto antes de gerar.":"बनाने से पहले कुछ टेक्स्ट लिखें।","Ative pelo menos um tipo de marca.":"कम से कम एक प्रकार का चिह्न चालू करें।",
      "Texto criado! Copie, compartilhe ou continue editando.":"टेक्स्ट बन गया! कॉपी करें, साझा करें या संपादन जारी रखें।",
      "Ainda não existe um resultado para copiar.":"कॉपी करने के लिए अभी कोई परिणाम नहीं है।","Texto copiado!":"टेक्स्ट कॉपी हो गया!",
      "Texto selecionado. Use Copiar no menu do celular.":"टेक्स्ट चुना गया। फ़ोन के मेनू में कॉपी चुनें।",
      "Gere um resultado antes de baixar.":"डाउनलोड करने से पहले परिणाम बनाएँ।","Arquivo TXT preparado para baixar.":"TXT फ़ाइल डाउनलोड के लिए तैयार है।",
      "Gere um resultado antes de compartilhar.":"साझा करने से पहले परिणाम बनाएँ।","Texto criado no Zalgo Creator":"Zalgo Creator में बनाया गया टेक्स्ट",
      "Compartilhamento aberto.":"शेयर विकल्प खुल गया।","Não foi possível abrir o compartilhamento.":"शेयर विकल्प नहीं खुल सका।",
      "Seu navegador não oferece compartilhamento direto. O texto foi copiado.":"आपका ब्राउज़र सीधे शेयर नहीं कर सकता। टेक्स्ट कॉपी कर दिया गया है।",
      "Campos limpos.":"फ़ील्ड साफ़ कर दिए गए।","Digite um texto original primeiro.":"पहले मूल टेक्स्ट लिखें।",
      "Ferramenta aplicada ao texto original.":"टूल मूल टेक्स्ट पर लागू किया गया।","Criação recuperada do histórico.":"इतिहास से रचना वापस लाई गई।",
      "Ajustes restaurados.":"सेटिंग रीसेट की गई।","Ainda não existe um resultado.":"अभी कोई परिणाम नहीं है।",
      "Resultado movido para o texto original.":"परिणाम मूल टेक्स्ट में ले जाया गया।","Não há texto para selecionar.":"चुनने के लिए कोई टेक्स्ट नहीं है।",
      "Resultado selecionado.":"परिणाम चुन लिया गया।","Histórico apagado deste dispositivo.":"इस डिवाइस का इतिहास मिटा दिया गया।",
      "Exemplo carregado.":"उदाहरण लोड हो गया।"," caracteres":" अक्षर",
      "Créditos":"श्रेय","Conheça quem criou o Zalgo Lab.":"जानें कि Zalgo Lab किसने बनाया।",
      "Criação e desenvolvimento do projeto.":"परियोजना का निर्माण और विकास।","◉ Ver perfil no GitHub":"◉ GitHub प्रोफ़ाइल देखें",
      "Obrigado por visitar o Zalgo Lab!":"Zalgo Lab पर आने के लिए धन्यवाद!","← Voltar ao gerador":"← जनरेटर पर वापस जाएँ",
      "← Voltar ao criador":"← क्रिएटर पर वापस जाएँ","Loja oficial":"आधिकारिक स्टोर","LOJA OFICIAL":"आधिकारिक स्टोर",
      "Desbloqueie o Zalgo Pro":"Zalgo Pro अनलॉक करें","Escolha o plano que combina com você.":"अपने लिए उपयुक्त प्लान चुनें।",
      "Pagamento ainda não disponível.":"भुगतान अभी उपलब्ध नहीं है।","Esta loja está em modo de demonstração.":"यह स्टोर डेमो मोड में है।"
    },
    ja: {
      "Privacidade":"プライバシー","Tema claro":"ライトテーマ","Tema escuro":"ダークテーマ","Alternar tema":"テーマを切り替え","Idioma":"言語",
      "ESTÚDIO DE TEXTO · 2.0":"テキストスタジオ · 2.0","✦ Laboratório de texto":"✦ テキストラボ",
      "Dê outra dimensão às palavras.":"言葉に新しい次元を。","Crie efeitos Zalgo, experimente estilos, edite o resultado e compartilhe suas criações. Tudo é processado no próprio dispositivo.":"Zalgo効果を作成し、スタイルを試し、結果を編集して作品を共有できます。すべて端末内で処理されます。",
      "Sem cadastro":"登録不要","Funciona offline após carregar":"読み込み後はオフラインで利用可能","Textos processados localmente":"テキストは端末内で処理",
      "Conectando à API...":"APIに接続中...","API conectada":"API接続済み","API indisponível":"APIを利用できません",
      "Contando visitantes...":"訪問者をカウント中...","Online indisponível":"オンライン状況を取得できません"," pessoa online":"人がオンライン"," pessoas online":"人がオンライン",
      "PUBLICIDADE":"広告","Área de criação":"作成エリア","Escreva ou cole o texto que deseja transformar.":"変換したいテキストを入力または貼り付けてください。",
      "Texto original":"元のテキスト","Digite ou cole seu texto aqui...":"ここにテキストを入力または貼り付けてください...",
      "Exemplos rápidos":"クイック例","Olá mundo":"こんにちは世界","Boas-vindas":"ようこそ","Texto estranho":"不思議なテキスト","Clima sombrio":"ダークな雰囲気",
      "Estilo de distorção":"変形スタイル","Zalgo clássico":"クラシックZalgo","Falha digital":"デジタルグリッチ","Caos total":"完全なカオス",
      "Intensidade":"強度","Leve":"弱","Normal":"標準","Pesada":"強","Extrema":"最大",
      "Quantidade de marcas":"記号の数","Cobertura do texto":"テキストの適用範囲","Marcas acima":"上側の記号","Marcas no meio":"中央の記号",
      "Marcas abaixo":"下側の記号","Preservar espaços":"スペースを保持","✦ Gerar texto Zalgo":"✦ Zalgoテキストを生成",
      "⤨ Surpreenda-me":"⤨ おまかせ","↺ Restaurar ajustes":"↺ 設定をリセット","Limpar campos":"入力欄をクリア","Pronto para criar.":"作成する準備ができました。",
      "⚡ Resultado":"⚡ 結果","Edite o texto gerado diretamente aqui.":"生成されたテキストをここで直接編集できます。",
      "Texto transformado":"変換後のテキスト","Seu texto Zalgo aparecerá aqui...":"Zalgoテキストがここに表示されます...",
      "Copiar":"コピー","Compartilhar":"共有","Baixar TXT":"TXTをダウンロード","Usar como original":"元のテキストとして使用","Selecionar tudo":"すべて選択",
      "🛠️ Ferramentas rápidas":"🛠️ クイックツール","Aplicadas ao texto original.":"元のテキストに適用されます。",
      "Aᵃ Maiúsculas":"Aᵃ 大文字","Transforma em CAIXA ALTA":"すべて大文字に変換","aᵃ Minúsculas":"aᵃ 小文字",
      "Transforma em caixa baixa":"すべて小文字に変換","⇄ Inverter texto":"⇄ テキストを反転","Inverte a ordem dos caracteres":"文字の順序を反転",
      "✧ Limpar Zalgo":"✧ Zalgoをクリア","Remove marcas combinantes":"結合文字を削除","⧉ Duplicar texto":"⧉ テキストを複製",
      "Repete o conteúdo em outra linha":"内容を次の行に複製","↔ Remover espaços":"↔ 余分な空白を削除",
      "Remove espaços extras nas pontas":"先頭と末尾の余分な空白を削除","🕘 Histórico recente":"🕘 最近の履歴",
      "Até 8 resultados salvos neste dispositivo.":"この端末に最大8件の結果を保存します。","Limpar":"クリア",
      "Suas criações aparecerão aqui.":"作成した内容がここに表示されます。","Abrir":"開く",
      "Privacidade:":"プライバシー:","os textos não são enviados a um servidor. O histórico e suas preferências ficam armazenados localmente no navegador deste dispositivo. Use a opção “Limpar histórico” para apagá-los.":"テキストはサーバーに送信されません。履歴と設定はこの端末のブラウザー内に保存されます。削除するには「履歴をクリア」を選択してください。",
      "Créditos: Zeze Anima · Ferramenta gratuita":"クレジット: Zeze Anima · 無料ツール","Política de privacidade":"プライバシーポリシー",
      "Código-fonte":"ソースコード","Voltar ao topo ↑":"トップへ戻る ↑",
      "Digite algum texto antes de gerar.":"生成する前にテキストを入力してください。","Ative pelo menos um tipo de marca.":"少なくとも1種類の記号を有効にしてください。",
      "Texto criado! Copie, compartilhe ou continue editando.":"テキストを作成しました。コピー、共有、または編集を続けられます。",
      "Ainda não existe um resultado para copiar.":"コピーできる結果がまだありません。","Texto copiado!":"テキストをコピーしました。",
      "Texto selecionado. Use Copiar no menu do celular.":"テキストを選択しました。スマートフォンのメニューからコピーしてください。",
      "Gere um resultado antes de baixar.":"ダウンロードする前に結果を生成してください。","Arquivo TXT preparado para baixar.":"TXTファイルのダウンロード準備ができました。",
      "Gere um resultado antes de compartilhar.":"共有する前に結果を生成してください。","Texto criado no Zalgo Creator":"Zalgo Creatorで作成したテキスト",
      "Compartilhamento aberto.":"共有画面を開きました。","Não foi possível abrir o compartilhamento.":"共有画面を開けませんでした。",
      "Seu navegador não oferece compartilhamento direto. O texto foi copiado.":"お使いのブラウザーは直接共有に対応していません。テキストをコピーしました。",
      "Campos limpos.":"入力欄をクリアしました。","Digite um texto original primeiro.":"先に元のテキストを入力してください。",
      "Ferramenta aplicada ao texto original.":"ツールを元のテキストに適用しました。","Criação recuperada do histórico.":"履歴から作品を復元しました。",
      "Ajustes restaurados.":"設定をリセットしました。","Ainda não existe um resultado.":"まだ結果がありません。",
      "Resultado movido para o texto original.":"結果を元のテキスト欄に移動しました。","Não há texto para selecionar.":"選択するテキストがありません。",
      "Resultado selecionado.":"結果を選択しました。","Histórico apagado deste dispositivo.":"この端末の履歴を削除しました。",
      "Exemplo carregado.":"例を読み込みました。"," caracteres":"文字",
      "Créditos":"クレジット","Conheça quem criou o Zalgo Lab.":"Zalgo Labの開発者を紹介します。",
      "Criação e desenvolvimento do projeto.":"プロジェクトの制作と開発。","◉ Ver perfil no GitHub":"◉ GitHubプロフィールを見る",
      "Obrigado por visitar o Zalgo Lab!":"Zalgo Labをご利用いただきありがとうございます。","← Voltar ao gerador":"← ジェネレーターに戻る",
      "← Voltar ao criador":"← クリエイターに戻る","Loja oficial":"公式ストア","LOJA OFICIAL":"公式ストア",
      "Desbloqueie o Zalgo Pro":"Zalgo Proをアンロック","Escolha o plano que combina com você.":"ご希望に合うプランを選択してください。",
      "Pagamento ainda não disponível.":"お支払いはまだ利用できません。","Esta loja está em modo de demonstração.":"このストアはデモモードです。"
    }
  };

  const clean = value => String(value ?? "");
  function translate(value, lang = language) {
    const raw = clean(value);
    const trimmed = raw.trim();
    if (!trimmed) return raw;
    const dict = dictionaries[lang];
    if (!dict) return raw;
    if (dict[trimmed]) return raw.replace(trimmed, dict[trimmed]);
    const online = trimmed.match(/^(\d[\d.,]*) (pessoa|pessoas) online$/);
    if (online) {
      const noun = lang === "en" ? (online[2] === "pessoa" ? "person" : "people") :
                   lang === "es" ? (online[2] === "pessoa" ? "persona" : "personas") :
                   lang === "hi" ? (online[2] === "pessoa" ? "व्यक्ति" : "लोग") :
                   (online[2] === "pessoa" ? "人" : "人");
      const suffix = lang === "en" ? " online" : lang === "es" ? " en línea" : " ऑनलाइन";
      return raw.replace(trimmed, online[1] + " " + noun + suffix);
    }
    const count = trimmed.match(/^(\d[\d.,]*) caracteres$/);
    if (count) {
      const unit = lang === "en" ? " characters" : lang === "es" ? " caracteres" : lang === "hi" ? " अक्षर" : " 文字";
      return raw.replace(trimmed, count[1] + unit);
    }
    return raw;
  }

  function walk(root) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) {
      const node = walker.currentNode;
      const parent = node.parentElement;
      if (!parent || /^(SCRIPT|STYLE|TEXTAREA)$/i.test(parent.tagName)) continue;
      nodes.push(node);
    }
    for (const node of nodes) {
      const next = translate(node.nodeValue);
      if (next !== node.nodeValue) node.nodeValue = next;
    }
    if (root.nodeType === 1) {
      for (const el of [root, ...root.querySelectorAll("*")]) {
        for (const attr of ["placeholder", "title", "aria-label", "alt"]) {
          if (!el.hasAttribute?.(attr)) continue;
          const before = el.getAttribute(attr);
          const after = translate(before);
          if (after !== before) el.setAttribute(attr, after);
        }
      }
    }
  }

  function buildSelector() {
    if (document.getElementById("languageSelect")) return document.getElementById("languageSelect");
    const select = document.createElement("select");
    select.id = "languageSelect";
    select.className = "language-select";
    select.setAttribute("aria-label", translate("Idioma"));
    for (const code of supported) {
      const option = document.createElement("option");
      option.value = code;
      option.textContent = names[code];
      select.append(option);
    }
    select.value = language;
    select.addEventListener("change", () => {
      const next = supported.includes(select.value) ? select.value : "pt";
      try { localStorage.setItem("zalgoCreatorLanguageV1", next); } catch (_) {}
      location.reload();
    });
    const actions = document.querySelector(".nav-actions");
    if (actions) actions.insertBefore(select, actions.querySelector("#themeBtn"));
    else {
      select.style.cssText = "position:fixed;z-index:9999;top:12px;right:12px;width:auto;min-height:38px;padding:8px 10px;border:1px solid #8b6bb2;border-radius:10px;background:#171020;color:inherit;font:700 12px system-ui;box-shadow:0 5px 20px #0005";
      document.body.append(select);
    }
    return select;
  }

  function applyLanguage() {
    const lang = language === "pt" ? "pt-BR" : language;
    document.documentElement.lang = lang;
    const select = buildSelector();
    if (select) select.value = language;
    if (language === "pt") return;
    walk(document.body);
  }

  const start = () => {
    buildSelector();
    applyLanguage();
    const observer = new MutationObserver(records => {
      for (const record of records) {
        if (record.type === "characterData") {
          const next = translate(record.target.nodeValue);
          if (next !== record.target.nodeValue) record.target.nodeValue = next;
        }
        for (const node of record.addedNodes || []) {
          if (node.nodeType === 3) {
            const parent = node.parentElement;
            if (parent && !/^(SCRIPT|STYLE|TEXTAREA)$/i.test(parent.tagName)) {
              const next = translate(node.nodeValue);
              if (next !== node.nodeValue) node.nodeValue = next;
            }
          } else if (node.nodeType === 1 && node.id !== "languageSelect") {
            walk(node);
          }
        }
        if (record.type === "attributes" && record.target.id !== "languageSelect") {
          const attr = record.attributeName;
          if (["placeholder", "title", "aria-label", "alt"].includes(attr)) {
            const before = record.target.getAttribute(attr);
            const after = translate(before);
            if (after !== before) record.target.setAttribute(attr, after);
          }
        }
      }
    });
    observer.observe(document.body, {subtree:true, childList:true, characterData:true, attributes:true, attributeFilter:["placeholder","title","aria-label","alt"]});
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start, {once:true});
  else start();
})();