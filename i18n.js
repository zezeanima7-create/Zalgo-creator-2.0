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
      "Pagamento ainda não disponível.":"Payment is not available yet.","Esta loja está em modo de demonstração.":"This store is in demo mode.",
      "Os valores abaixo são os preços planejados; as assinaturas ainda não estão ativadas.":"The prices below are planned prices; subscriptions are not active yet.",
      "Mensal":"Monthly",
      "Total previsto: R$ 1,00 por mês":"Estimated total: R$ 1.00 per month",
      "Plano de um mês":"One-month plan",
      "Renovação somente após integração de pagamento":"Renewal only after payment integration",
      "Cancelamento conforme as condições apresentadas na compra":"Cancellation according to the terms shown at purchase",
      "Anual":"Yearly",
      "Equivale a R$ 0,95 por mês":"Equivalent to R$ 0.95 per month",
      "5% mais barato que 12 meses mensais":"5% cheaper than 12 monthly payments",
      "Acesso previsto por um ano":"Planned access for one year",
      "Pagamento anual após ativação oficial":"Annual payment after official activation",
      "Condições de renovação informadas antes da compra":"Renewal terms will be shown before purchase",
      "Seu plano":"Your plan",
      "Confira sua seleção antes de continuar.":"Review your selection before continuing.",
      "Plano mensal — R$ 1,00 por mês.":"Monthly plan — R$ 1.00 per month.",
      "Ver opções de assinatura":"View subscription options",
      "Informações importantes":"Important information",
      "Estado da loja: demonstração. Os botões não realizam pagamentos e não concedem acesso pago.":"Store status: demo. The buttons do not process payments or grant paid access.",
      "Renovação e cancelamento: ainda não configurados. Antes de ativar assinaturas, a loja deverá explicar claramente o preço, a periodicidade, a renovação automática (se houver) e como cancelar.":"Renewal and cancellation: not configured yet. Before subscriptions are enabled, the store must clearly explain the price, billing period, automatic renewal (if any), and how to cancel.",
      "Reembolsos: a política final será publicada antes da ativação dos pagamentos e deverá respeitar os direitos do consumidor e as regras aplicáveis à plataforma de venda.":"Refunds: the final policy will be published before payments are enabled and must respect consumer rights and the rules applicable to the sales platform.",
      "Não use esta página como confirmação de compra.":"Do not use this page as purchase confirmation.",
      "Privacidade: esta página não solicita número de cartão, senha bancária ou dados de pagamento.":"Privacy: this page does not request card numbers, bank passwords, or payment details.",
      "Consultar a política de privacidade":"Read the privacy policy",
      "© Zalgo Creator 2.0 · Loja em demonstração":"© Zalgo Creator 2.0 · Demo store",,
      "Política de Privacidade":"Privacy Policy",
      "Última atualização: 30 de outubro de 2026.":"Last updated: October 30, 2026.",
      "Esta política descreve como a versão atual do Zalgo Creator 2.0 trata as informações usadas na ferramenta de personalização de texto.":"This policy describes how the current version of Zalgo Creator 2.0 handles information used by the text customization tool.",
      "1. Processamento dos textos":"1. Text processing",
      "2. Histórico e preferências locais":"2. Local history and preferences",
      "3. Copiar, compartilhar e baixar":"3. Copying, sharing, and downloading",
      "4. Hospedagem e dados técnicos":"4. Hosting and technical data",
      "5. Cookies, anúncios e análise":"5. Cookies, ads, and analytics",
      "6. Informações que não devem ser inseridas":"6. Information you should not enter",
      "7. Segurança e direitos":"7. Security and rights",
      "8. Mudanças nesta política":"8. Changes to this policy",
      "9. Código-fonte":"9. Source code",
      "O texto digitado é transformado diretamente no navegador, no próprio dispositivo. A funcionalidade de geração não envia o texto original nem o resultado para uma API ou banco de dados do projeto.":"The text you type is transformed directly in the browser, on your own device. The generation feature does not send the original text or the result to a project API or database.",
      "Para facilitar o uso, o aplicativo pode salvar no armazenamento local do navegador deste dispositivo até oito resultados recentes, além das preferências de estilo e do tema visual escolhido. Esses dados ficam no próprio navegador e não são enviados ao servidor pelo código do aplicativo.":"To make the app easier to use, it may save up to eight recent results in this device's browser storage, along with your style preferences and chosen visual theme. This data stays in the browser and is not sent to the server by the app's code.",
      "Você pode apagar os resultados usando o botão “Limpar” na área de histórico. As preferências podem ser alteradas pelo próprio editor. Limpar os dados do site no navegador também remove esses registros locais.":"You can delete results using the “Clear” button in the history area. Preferences can be changed in the editor itself. Clearing the site's data in the browser also removes these local records.",
      "Copiar, compartilhar e baixar são ações iniciadas por você. O compartilhamento pode abrir os recursos nativos do sistema ou do navegador, que passam a seguir as configurações e políticas desses serviços. O download cria um arquivo de texto no dispositivo.":"Copying, sharing, and downloading are actions you initiate. Sharing may open native system or browser features, which follow those services' own settings and policies. The download creates a text file on the device.",
      "O site é hospedado por um provedor de infraestrutura. A entrega e a segurança do site podem envolver o processamento de dados técnicos das solicitações, como endereço IP, informações do navegador, data, hora e registros de segurança, conforme as configurações do provedor.":"The website is hosted by an infrastructure provider. Website delivery and security may involve processing technical request data, such as IP address, browser information, date, time, and security logs, according to the provider's settings.",
      "Consulte também a Política de Privacidade da":"See also the Privacy Policy of",
      "Cloudflare":"Cloudflare",
      "O código atual do Zalgo Creator não integra intencionalmente anúncios nem ferramentas próprias de análise de audiência. O aplicativo usa armazenamento local do navegador para histórico e preferências, conforme explicado acima. Serviços da hospedagem podem usar mecanismos técnicos próprios, conforme suas configurações e políticas.":"The current Zalgo Creator code does not intentionally integrate ads or its own audience analytics tools. The app uses browser storage for history and preferences as explained above. Hosting services may use their own technical mechanisms, according to their settings and policies.",
      "Use a ferramenta para personalizar textos. Evite inserir senhas, dados bancários, documentos ou outras informações confidenciais.":"Use the tool to customize text. Avoid entering passwords, banking details, identity documents, or other confidential information.",
      "Adotamos a estrutura descrita no código atual, mas nenhum serviço conectado à internet pode garantir segurança absoluta. Os direitos relativos a dados pessoais dependem da situação e da legislação aplicável, incluindo a Lei Geral de Proteção de Dados Pessoais (LGPD), quando aplicável.":"We use the structure described in the current code, but no service connected to the internet can guarantee absolute security. Rights relating to personal data depend on the circumstances and applicable law, including Brazil's General Data Protection Law (LGPD), where applicable.",
      "Esta política poderá ser atualizada quando novas funcionalidades ou integrações forem adicionadas. A data de atualização será ajustada quando houver mudanças relevantes.":"This policy may be updated when new features or integrations are added. The update date will be adjusted when relevant changes are made.",
      "O código do projeto pode ser consultado no repositório do":"The project's source code is available in the repository of",
      "Zalgo Creator 2.0 no GitHub":"Zalgo Creator 2.0 on GitHub",
      "Esta política descreve o comportamento previsto pelo código atual do aplicativo. Configurações reais da hospedagem e serviços externos também podem ter políticas próprias.":"This policy describes the behavior intended by the app's current code. Actual hosting settings and external services may also have their own policies.",
      "← Voltar ao Zalgo Creator 2.0":"← Back to Zalgo Creator 2.0",
      "Zalgo Creator 2.0 · Créditos: Zeze Anima":"Zalgo Creator 2.0 · Credits: Zeze Anima"
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
      "Pagamento ainda não disponível.":"El pago aún no está disponible.","Esta loja está em modo de demonstração.":"Esta tienda está en modo de demostración.",
      "Os valores abaixo são os preços planejados; as assinaturas ainda não estão ativadas.":"Los precios indicados son los previstos; las suscripciones aún no están activadas.",
      "Mensal":"Mensual",
      "Total previsto: R$ 1,00 por mês":"Total previsto: R$ 1,00 al mes",
      "Plano de um mês":"Plan de un mes",
      "Renovação somente após integração de pagamento":"Renovación solo después de integrar los pagos",
      "Cancelamento conforme as condições apresentadas na compra":"Cancelación según las condiciones mostradas durante la compra",
      "Anual":"Anual",
      "Equivale a R$ 0,95 por mês":"Equivale a R$ 0,95 al mes",
      "5% mais barato que 12 meses mensais":"Un 5 % más barato que 12 pagos mensuales",
      "Acesso previsto por um ano":"Acceso previsto durante un año",
      "Pagamento anual após ativação oficial":"Pago anual después de la activación oficial",
      "Condições de renovação informadas antes da compra":"Las condiciones de renovación se informarán antes de la compra",
      "Seu plano":"Tu plan",
      "Confira sua seleção antes de continuar.":"Revisa tu selección antes de continuar.",
      "Plano mensal — R$ 1,00 por mês.":"Plan mensual — R$ 1,00 al mes.",
      "Ver opções de assinatura":"Ver opciones de suscripción",
      "Informações importantes":"Información importante",
      "Estado da loja: demonstração. Os botões não realizam pagamentos e não concedem acesso pago.":"Estado de la tienda: demostración. Los botones no procesan pagos ni conceden acceso de pago.",
      "Renovação e cancelamento: ainda não configurados. Antes de ativar assinaturas, a loja deverá explicar claramente o preço, a periodicidade, a renovação automática (se houver) e como cancelar.":"Renovación y cancelación: aún no configuradas. Antes de activar las suscripciones, la tienda deberá explicar claramente el precio, la periodicidad, la renovación automática (si existe) y cómo cancelar.",
      "Reembolsos: a política final será publicada antes da ativação dos pagamentos e deverá respeitar os direitos do consumidor e as regras aplicáveis à plataforma de venda.":"Reembolsos: la política definitiva se publicará antes de activar los pagos y deberá respetar los derechos del consumidor y las reglas aplicables a la plataforma de venta.",
      "Não use esta página como confirmação de compra.":"No utilices esta página como confirmación de compra.",
      "Privacidade: esta página não solicita número de cartão, senha bancária ou dados de pagamento.":"Privacidad: esta página no solicita números de tarjeta, contraseñas bancarias ni datos de pago.",
      "Consultar a política de privacidade":"Consultar la política de privacidad",
      "© Zalgo Creator 2.0 · Loja em demonstração":"© Zalgo Creator 2.0 · Tienda de demostración",,
      "Política de Privacidade":"Política de privacidad",
      "Última atualização: 30 de outubro de 2026.":"Última actualización: 30 de octubre de 2026.",
      "Esta política descreve como a versão atual do Zalgo Creator 2.0 trata as informações usadas na ferramenta de personalização de texto.":"Esta política describe cómo la versión actual de Zalgo Creator 2.0 trata la información utilizada por la herramienta de personalización de texto.",
      "1. Processamento dos textos":"1. Procesamiento de textos",
      "2. Histórico e preferências locais":"2. Historial y preferencias locales",
      "3. Copiar, compartilhar e baixar":"3. Copiar, compartir y descargar",
      "4. Hospedagem e dados técnicos":"4. Alojamiento y datos técnicos",
      "5. Cookies, anúncios e análise":"5. Cookies, anuncios y análisis",
      "6. Informações que não devem ser inseridas":"6. Información que no debes introducir",
      "7. Segurança e direitos":"7. Seguridad y derechos",
      "8. Mudanças nesta política":"8. Cambios en esta política",
      "9. Código-fonte":"9. Código fuente",
      "O texto digitado é transformado diretamente no navegador, no próprio dispositivo. A funcionalidade de geração não envia o texto original nem o resultado para uma API ou banco de dados do projeto.":"El texto que escribes se transforma directamente en el navegador, en tu propio dispositivo. La función de generación no envía el texto original ni el resultado a una API o base de datos del proyecto.",
      "Para facilitar o uso, o aplicativo pode salvar no armazenamento local do navegador deste dispositivo até oito resultados recentes, além das preferências de estilo e do tema visual escolhido. Esses dados ficam no próprio navegador e não são enviados ao servidor pelo código do aplicativo.":"Para facilitar el uso, la aplicación puede guardar hasta ocho resultados recientes en el almacenamiento local del navegador de este dispositivo, junto con tus preferencias de estilo y el tema visual elegido. Estos datos permanecen en el navegador y el código de la aplicación no los envía al servidor.",
      "Você pode apagar os resultados usando o botão “Limpar” na área de histórico. As preferências podem ser alteradas pelo próprio editor. Limpar os dados do site no navegador também remove esses registros locais.":"Puedes borrar los resultados con el botón “Limpiar” del historial. Las preferencias se pueden cambiar desde el propio editor. Borrar los datos del sitio en el navegador también elimina estos registros locales.",
      "Copiar, compartilhar e baixar são ações iniciadas por você. O compartilhamento pode abrir os recursos nativos do sistema ou do navegador, que passam a seguir as configurações e políticas desses serviços. O download cria um arquivo de texto no dispositivo.":"Copiar, compartir y descargar son acciones que tú inicias. Compartir puede abrir las funciones nativas del sistema o del navegador, que siguen la configuración y las políticas de esos servicios. La descarga crea un archivo de texto en el dispositivo.",
      "O site é hospedado por um provedor de infraestrutura. A entrega e a segurança do site podem envolver o processamento de dados técnicos das solicitações, como endereço IP, informações do navegador, data, hora e registros de segurança, conforme as configurações do provedor.":"El sitio está alojado por un proveedor de infraestructura. La entrega y la seguridad del sitio pueden implicar el tratamiento de datos técnicos de las solicitudes, como la dirección IP, información del navegador, fecha, hora y registros de seguridad, según la configuración del proveedor.",
      "Consulte também a Política de Privacidade da":"Consulta también la política de privacidad de",
      "Cloudflare":"Cloudflare",
      "O código atual do Zalgo Creator não integra intencionalmente anúncios nem ferramentas próprias de análise de audiência. O aplicativo usa armazenamento local do navegador para histórico e preferências, conforme explicado acima. Serviços da hospedagem podem usar mecanismos técnicos próprios, conforme suas configurações e políticas.":"El código actual de Zalgo Creator no integra intencionadamente anuncios ni herramientas propias de análisis de audiencia. La aplicación utiliza el almacenamiento local del navegador para el historial y las preferencias, como se explicó anteriormente. Los servicios de alojamiento pueden utilizar sus propios mecanismos técnicos según su configuración y políticas.",
      "Use a ferramenta para personalizar textos. Evite inserir senhas, dados bancários, documentos ou outras informações confidenciais.":"Utiliza la herramienta para personalizar textos. Evita introducir contraseñas, datos bancarios, documentos u otra información confidencial.",
      "Adotamos a estrutura descrita no código atual, mas nenhum serviço conectado à internet pode garantir segurança absoluta. Os direitos relativos a dados pessoais dependem da situação e da legislação aplicável, incluindo a Lei Geral de Proteção de Dados Pessoais (LGPD), quando aplicável.":"Adoptamos la estructura descrita en el código actual, pero ningún servicio conectado a Internet puede garantizar una seguridad absoluta. Los derechos relativos a los datos personales dependen de las circunstancias y de la legislación aplicable, incluida la Ley General de Protección de Datos de Brasil (LGPD), cuando corresponda.",
      "Esta política poderá ser atualizada quando novas funcionalidades ou integrações forem adicionadas. A data de atualização será ajustada quando houver mudanças relevantes.":"Esta política podrá actualizarse cuando se añadan nuevas funciones o integraciones. La fecha de actualización se modificará cuando se produzcan cambios relevantes.",
      "O código do projeto pode ser consultado no repositório do":"El código del proyecto está disponible en el repositorio de",
      "Zalgo Creator 2.0 no GitHub":"Zalgo Creator 2.0 en GitHub",
      "Esta política descreve o comportamento previsto pelo código atual do aplicativo. Configurações reais da hospedagem e serviços externos também podem ter políticas próprias.":"Esta política describe el comportamiento previsto por el código actual de la aplicación. La configuración real del alojamiento y los servicios externos también pueden tener sus propias políticas.",
      "← Voltar ao Zalgo Creator 2.0":"← Volver a Zalgo Creator 2.0",
      "Zalgo Creator 2.0 · Créditos: Zeze Anima":"Zalgo Creator 2.0 · Créditos: Zeze Anima"
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
      "Pagamento ainda não disponível.":"भुगतान अभी उपलब्ध नहीं है।","Esta loja está em modo de demonstração.":"यह स्टोर डेमो मोड में है।",
      "Os valores abaixo são os preços planejados; as assinaturas ainda não estão ativadas.":"नीचे दी गई कीमतें प्रस्तावित हैं; सदस्यताएँ अभी सक्रिय नहीं हैं।",
      "Mensal":"मासिक",
      "Total previsto: R$ 1,00 por mês":"अनुमानित कुल: R$ 1,00 प्रति माह",
      "Plano de um mês":"एक महीने की योजना",
      "Renovação somente após integração de pagamento":"भुगतान एकीकरण के बाद ही नवीनीकरण होगा",
      "Cancelamento conforme as condições apresentadas na compra":"खरीद के समय दिखाई गई शर्तों के अनुसार रद्दीकरण",
      "Anual":"वार्षिक",
      "Equivale a R$ 0,95 por mês":"R$ 0,95 प्रति माह के बराबर",
      "5% mais barato que 12 meses mensais":"12 मासिक भुगतानों से 5% सस्ता",
      "Acesso previsto por um ano":"एक वर्ष की प्रस्तावित पहुँच",
      "Pagamento anual após ativação oficial":"आधिकारिक सक्रियण के बाद वार्षिक भुगतान",
      "Condições de renovação informadas antes da compra":"नवीनीकरण की शर्तें खरीद से पहले बताई जाएँगी",
      "Seu plano":"आपकी योजना",
      "Confira sua seleção antes de continuar.":"आगे बढ़ने से पहले अपना चयन देखें।",
      "Plano mensal — R$ 1,00 por mês.":"मासिक योजना — R$ 1,00 प्रति माह।",
      "Ver opções de assinatura":"सदस्यता विकल्प देखें",
      "Informações importantes":"महत्वपूर्ण जानकारी",
      "Estado da loja: demonstração. Os botões não realizam pagamentos e não concedem acesso pago.":"स्टोर की स्थिति: डेमो। बटन भुगतान नहीं करते और सशुल्क पहुँच प्रदान नहीं करते।",
      "Não use esta página como confirmação de compra.":"इस पृष्ठ को खरीद की पुष्टि न मानें。",
      "Privacidade: esta página não solicita número de cartão, senha bancária ou dados de pagamento.":"गोपनीयता: यह पृष्ठ कार्ड नंबर, बैंक पासवर्ड या भुगतान विवरण नहीं माँगता।",
      "Consultar a política de privacidade":"गोपनीयता नीति देखें",
      "© Zalgo Creator 2.0 · Loja em demonstração":"© Zalgo Creator 2.0 · डेमो स्टोर",,
      "Política de Privacidade":"गोपनीयता नीति",
      "Última atualização: 30 de outubro de 2026.":"अंतिम अपडेट: 30 अक्टूबर 2026।",
      "Esta política descreve como a versão atual do Zalgo Creator 2.0 trata as informações usadas na ferramenta de personalização de texto.":"यह नीति बताती है कि Zalgo Creator 2.0 का वर्तमान संस्करण टेक्स्ट अनुकूलन टूल में उपयोग की जाने वाली जानकारी को कैसे संभालता है।",
      "1. Processamento dos textos":"1. टेक्स्ट प्रोसेसिंग",
      "2. Histórico e preferências locais":"2. स्थानीय इतिहास और प्राथमिकताएँ",
      "3. Copiar, compartilhar e baixar":"3. कॉपी करना, साझा करना और डाउनलोड करना",
      "4. Hospedagem e dados técnicos":"4. होस्टिंग और तकनीकी डेटा",
      "5. Cookies, anúncios e análise":"5. कुकीज़, विज्ञापन और विश्लेषण",
      "6. Informações que não devem ser inseridas":"6. ऐसी जानकारी जो दर्ज नहीं करनी चाहिए",
      "7. Segurança e direitos":"7. सुरक्षा और अधिकार",
      "8. Mudanças nesta política":"8. इस नीति में बदलाव",
      "9. Código-fonte":"9. सोर्स कोड",
      "O texto digitado é transformado diretamente no navegador, no próprio dispositivo. A funcionalidade de geração não envia o texto original nem o resultado para uma API ou banco de dados do projeto.":"आपके द्वारा टाइप किया गया टेक्स्ट सीधे आपके डिवाइस के ब्राउज़र में बदला जाता है। टेक्स्ट बनाने की सुविधा मूल टेक्स्ट या परिणाम को प्रोजेक्ट के API या डेटाबेस पर नहीं भेजती।",
      "Para facilitar o uso, o aplicativo pode salvar no armazenamento local do navegador deste dispositivo até oito resultados recentes, além das preferências de estilo e do tema visual escolhido. Esses dados ficam no próprio navegador e não são enviados ao servidor pelo código do aplicativo.":"उपयोग आसान बनाने के लिए ऐप इस डिवाइस के ब्राउज़र में अधिकतम आठ हाल के परिणाम, आपकी शैली की प्राथमिकताएँ और चुनी हुई थीम सहेज सकता है। यह डेटा ब्राउज़र में ही रहता है और ऐप का कोड इसे सर्वर पर नहीं भेजता।",
      "Você pode apagar os resultados usando o botão “Limpar” na área de histórico. As preferências podem ser alteradas pelo próprio editor. Limpar os dados do site no navegador também remove esses registros locais.":"आप इतिहास में “साफ़ करें” बटन से परिणाम मिटा सकते हैं। प्राथमिकताएँ एडिटर में बदली जा सकती हैं। ब्राउज़र में साइट का डेटा साफ़ करने से ये स्थानीय रिकॉर्ड भी हट जाते हैं।",
      "Copiar, compartilhar e baixar são ações iniciadas por você. O compartilhamento pode abrir os recursos nativos do sistema ou do navegador, que passam a seguir as configurações e políticas desses serviços. O download cria um arquivo de texto no dispositivo.":"कॉपी करना, साझा करना और डाउनलोड करना आपके द्वारा शुरू की गई कार्रवाइयाँ हैं। साझा करने पर सिस्टम या ब्राउज़र की सुविधाएँ खुल सकती हैं, जो उन सेवाओं की अपनी सेटिंग और नीतियों का पालन करती हैं। डाउनलोड से डिवाइस पर टेक्स्ट फ़ाइल बनती है।",
      "O site é hospedado por um provedor de infraestrutura. A entrega e a segurança do site podem envolver o processamento de dados técnicos das solicitações, como endereço IP, informações do navegador, data, hora e registros de segurança, conforme as configurações do provedor.":"यह वेबसाइट एक इंफ्रास्ट्रक्चर प्रदाता द्वारा होस्ट की जाती है। वेबसाइट की डिलीवरी और सुरक्षा में अनुरोधों के तकनीकी डेटा, जैसे IP पता, ब्राउज़र जानकारी, तारीख, समय और सुरक्षा लॉग का प्रसंस्करण शामिल हो सकता है।",
      "Consulte também a Política de Privacidade da":"यह भी देखें:",
      "Cloudflare":"Cloudflare",
      "O código atual do Zalgo Creator não integra intencionalmente anúncios nem ferramentas próprias de análise de audiência. O aplicativo usa armazenamento local do navegador para histórico e preferências, conforme explicado acima. Serviços da hospedagem podem usar mecanismos técnicos próprios, conforme suas configurações e políticas.":"Zalgo Creator के वर्तमान कोड में जानबूझकर विज्ञापन या अपने ऑडियंस विश्लेषण टूल शामिल नहीं हैं। ऐप ऊपर बताए अनुसार इतिहास और प्राथमिकताओं के लिए ब्राउज़र का स्थानीय स्टोरेज उपयोग करता है। होस्टिंग सेवाएँ अपनी सेटिंग और नीतियों के अनुसार तकनीकी प्रणालियाँ उपयोग कर सकती हैं।",
      "Use a ferramenta para personalizar textos. Evite inserir senhas, dados bancários, documentos ou outras informações confidenciais.":"इस टूल का उपयोग टेक्स्ट को अनुकूलित करने के लिए करें। पासवर्ड, बैंक जानकारी, पहचान दस्तावेज़ या अन्य गोपनीय जानकारी दर्ज न करें।",
      "Adotamos a estrutura descrita no código atual, mas nenhum serviço conectado à internet pode garantir segurança absoluta. Os direitos relativos a dados pessoais dependem da situação e da legislação aplicável, incluindo a Lei Geral de Proteção de Dados Pessoais (LGPD), quando aplicável.":"हम वर्तमान कोड में वर्णित संरचना अपनाते हैं, लेकिन इंटरनेट से जुड़ी कोई भी सेवा पूर्ण सुरक्षा की गारंटी नहीं दे सकती। व्यक्तिगत डेटा से जुड़े अधिकार परिस्थितियों और लागू कानूनों पर निर्भर करते हैं, जिनमें लागू होने पर ब्राज़ील का LGPD भी शामिल है।",
      "Esta política poderá ser atualizada quando novas funcionalidades ou integrações forem adicionadas. A data de atualização será ajustada quando houver mudanças relevantes.":"नई सुविधाएँ या एकीकरण जोड़े जाने पर इस नीति को अपडेट किया जा सकता है। महत्वपूर्ण बदलाव होने पर अपडेट की तारीख बदली जाएगी।",
      "O código do projeto pode ser consultado no repositório do":"प्रोजेक्ट का कोड इस रिपॉज़िटरी में देखा जा सकता है:",
      "Zalgo Creator 2.0 no GitHub":"GitHub पर Zalgo Creator 2.0",
      "Esta política descreve o comportamento previsto pelo código atual do aplicativo. Configurações reais da hospedagem e serviços externos também podem ter políticas próprias.":"यह नीति ऐप के वर्तमान कोड के अनुसार अपेक्षित व्यवहार बताती है। होस्टिंग और बाहरी सेवाओं की अपनी नीतियाँ भी हो सकती हैं।",
      "← Voltar ao Zalgo Creator 2.0":"← Zalgo Creator 2.0 पर वापस जाएँ",
      "Zalgo Creator 2.0 · Créditos: Zeze Anima":"Zalgo Creator 2.0 · श्रेय: Zeze Anima"
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
      "Pagamento ainda não disponível.":"お支払いはまだ利用できません。","Esta loja está em modo de demonstração.":"このストアはデモモードです。",
      "Os valores abaixo são os preços planejados; as assinaturas ainda não estão ativadas.":"以下は予定価格です。サブスクリプションはまだ有効化されていません。",
      "Mensal":"月額",
      "Total previsto: R$ 1,00 por mês":"予定合計: 月額 R$ 1.00",
      "Plano de um mês":"1か月プラン",
      "Renovação somente após integração de pagamento":"決済機能の連携後にのみ更新されます",
      "Cancelamento conforme as condições apresentadas na compra":"購入時に表示される条件に従って解約できます",
      "Anual":"年額",
      "Equivale a R$ 0,95 por mês":"月額換算 R$ 0.95",
      "5% mais barato que 12 meses mensais":"月額12回払いより5%お得",
      "Acesso previsto por um ano":"1年間のアクセスを予定",
      "Pagamento anual após ativação oficial":"正式な有効化後に年額決済",
      "Condições de renovação informadas antes da compra":"更新条件は購入前に表示されます",
      "Seu plano":"ご利用プラン",
      "Confira sua seleção antes de continuar.":"続行する前に選択内容をご確認ください。",
      "Plano mensal — R$ 1,00 por mês.":"月額プラン — 月額 R$ 1.00",
      "Ver opções de assinatura":"サブスクリプションの選択肢を見る",
      "Informações importantes":"重要なお知らせ",
      "Estado da loja: demonstração. Os botões não realizam pagamentos e não concedem acesso pago.":"ストアの状態: デモ。ボタンは決済を行わず、有料アクセスも付与しません。",
      "Não use esta página como confirmação de compra.":"このページを購入確認として使用しないでください。",
      "Privacidade: esta página não solicita número de cartão, senha bancária ou dados de pagamento.":"プライバシー: このページではカード番号、銀行パスワード、決済情報を要求しません。",
      "Consultar a política de privacidade":"プライバシーポリシーを見る",
      "© Zalgo Creator 2.0 · Loja em demonstração":"© Zalgo Creator 2.0 · デモストア",,
      "Política de Privacidade":"プライバシーポリシー",
      "Última atualização: 30 de outubro de 2026.":"最終更新日: 2026年10月30日",
      "Esta política descreve como a versão atual do Zalgo Creator 2.0 trata as informações usadas na ferramenta de personalização de texto.":"このポリシーでは、Zalgo Creator 2.0の現行バージョンがテキスト編集ツールで使用される情報をどのように扱うかを説明します。",
      "1. Processamento dos textos":"1. テキストの処理",
      "2. Histórico e preferências locais":"2. ローカル履歴と設定",
      "3. Copiar, compartilhar e baixar":"3. コピー、共有、ダウンロード",
      "4. Hospedagem e dados técnicos":"4. ホスティングと技術データ",
      "5. Cookies, anúncios e análise":"5. Cookie、広告、分析",
      "6. Informações que não devem ser inseridas":"6. 入力しないでほしい情報",
      "7. Segurança e direitos":"7. セキュリティと権利",
      "8. Mudanças nesta política":"8. このポリシーの変更",
      "9. Código-fonte":"9. ソースコード",
      "O texto digitado é transformado diretamente no navegador, no próprio dispositivo. A funcionalidade de geração não envia o texto original nem o resultado para uma API ou banco de dados do projeto.":"入力したテキストは、お使いの端末のブラウザー内で直接変換されます。生成機能は元のテキストや結果をプロジェクトのAPIやデータベースに送信しません。",
      "Para facilitar o uso, o aplicativo pode salvar no armazenamento local do navegador deste dispositivo até oito resultados recentes, além das preferências de estilo e do tema visual escolhido. Esses dados ficam no próprio navegador e não são enviados ao servidor pelo código do aplicativo.":"使いやすさのため、アプリはこの端末のブラウザー内に最大8件の最近の結果、スタイル設定、選択したテーマを保存する場合があります。これらのデータはブラウザー内に保存され、アプリのコードによってサーバーに送信されません。",
      "Você pode apagar os resultados usando o botão “Limpar” na área de histórico. As preferências podem ser alteradas pelo próprio editor. Limpar os dados do site no navegador também remove esses registros locais.":"履歴欄の「クリア」ボタンで結果を削除できます。設定はエディターで変更できます。ブラウザーでサイトデータを消去すると、これらのローカル記録も削除されます。",
      "Copiar, compartilhar e baixar são ações iniciadas por você. O compartilhamento pode abrir os recursos nativos do sistema ou do navegador, que passam a seguir as configurações e políticas desses serviços. O download cria um arquivo de texto no dispositivo.":"コピー、共有、ダウンロードはユーザーが開始する操作です。共有すると、システムやブラウザーの標準機能が開く場合があり、それぞれの設定とポリシーが適用されます。ダウンロードでは端末にテキストファイルが作成されます。",
      "O site é hospedado por um provedor de infraestrutura. A entrega e a segurança do site podem envolver o processamento de dados técnicos das solicitações, como endereço IP, informações do navegador, data, hora e registros de segurança, conforme as configurações do provedor.":"このサイトはインフラストラクチャプロバイダーによってホストされています。サイトの配信とセキュリティでは、プロバイダーの設定に応じて、IPアドレス、ブラウザー情報、日付、時刻、セキュリティログなどの技術データが処理される場合があります。",
      "Consulte também a Política de Privacidade da":"次のプライバシーポリシーもご確認ください:",
      "Cloudflare":"Cloudflare",
      "O código atual do Zalgo Creator não integra intencionalmente anúncios nem ferramentas próprias de análise de audiência. O aplicativo usa armazenamento local do navegador para histórico e preferências, conforme explicado acima. Serviços da hospedagem podem usar mecanismos técnicos próprios, conforme suas configurações e políticas.":"Zalgo Creatorの現行コードには、広告や独自のアクセス解析ツールは意図的に組み込まれていません。アプリは上記のとおり、履歴と設定のためにブラウザーのローカルストレージを使用します。ホスティングサービスは、それぞれの設定とポリシーに従って独自の技術的な仕組みを使用する場合があります。",
      "Use a ferramenta para personalizar textos. Evite inserir senhas, dados bancários, documentos ou outras informações confidenciais.":"このツールはテキストの編集に使用してください。パスワード、銀行情報、本人確認書類、その他の機密情報は入力しないでください。",
      "Adotamos a estrutura descrita no código atual, mas nenhum serviço conectado à internet pode garantir segurança absoluta. Os direitos relativos a dados pessoais dependem da situação e da legislação aplicável, incluindo a Lei Geral de Proteção de Dados Pessoais (LGPD), quando aplicável.":"現行コードに記載された仕組みを採用していますが、インターネットに接続されたサービスが完全な安全性を保証することはできません。個人データに関する権利は状況と適用法令によって異なり、該当する場合はブラジルの個人データ保護法（LGPD）も含まれます。",
      "Esta política poderá ser atualizada quando novas funcionalidades ou integrações forem adicionadas. A data de atualização será ajustada quando houver mudanças relevantes.":"新機能や連携機能が追加された場合、このポリシーを更新することがあります。重要な変更が行われた場合は更新日も変更します。",
      "O código do projeto pode ser consultado no repositório do":"プロジェクトのコードは、次のリポジトリで確認できます:",
      "Zalgo Creator 2.0 no GitHub":"GitHub上のZalgo Creator 2.0",
      "Esta política descreve o comportamento previsto pelo código atual do aplicativo. Configurações reais da hospedagem e serviços externos também podem ter políticas próprias.":"このポリシーは、アプリの現行コードで想定される動作を説明しています。実際のホスティング設定や外部サービスには、独自のポリシーが適用される場合があります。",
      "← Voltar ao Zalgo Creator 2.0":"← Zalgo Creator 2.0に戻る",
      "Zalgo Creator 2.0 · Créditos: Zeze Anima":"Zalgo Creator 2.0 · クレジット: Zeze Anima"
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