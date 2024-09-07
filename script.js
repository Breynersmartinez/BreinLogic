/* MANEJO DE OBJETOS EN JS */

   /*Mapeo de palabras clave*/

  /* ( El metodo de soluciones comunes, 
   contiene pares de clave y valor,
   la clave representa un palabra que
    la persona podria ingresar y 
    el valor es la respuesta que esta
     predeterinada en el objeto )*/

     /* LIBRERIAS LENGUAJE NATURA PARA JS */
/* (INSTALADA) TensorFlow.js para tareas de procesamiento de lenguaje 
natural
npm install @tensorflow/tfjs*/
/*Natural Language Toolkit (NLTK) comúnmente utilizado 
en Python pero también puede ser utilizado 
en JavaScript a través de Node.js
 npm install nltk*/
 /* COMPROMISE:
 librería de procesamiento de lenguaje natural en JavaScript
 npm install compromise */
 // Función para mostrar el historial de conversaciones
 const Soluciones_Comunes = {
    'hola': 'Hola, ¿en qué puedo asesorarte legalmente?',
    'bien': 'Me alegra escuchar eso. ¿Tienes alguna consulta legal específica?',
    'mal': 'Lo siento por escuchar eso. ¿Puedo ayudarte con algo legal?',
    'divorcio': 'El proceso de divorcio puede ser complicado. ¿Tienes alguna pregunta específica sobre ello?',
    'contrato de alquiler': 'Los contratos de alquiler son importantes. ¿Qué necesitas saber?',
    'laboral': 'Entiendo, las cuestiones laborales pueden ser confusas. ¿Cómo puedo ayudarte?',
    'indemnización laboral': 'Entiendo, las cuestiones laborales pueden ser confusas. ¿Cómo puedo ayudarte?',
    'indemnizacion laboral': 'Entiendo, las cuestiones laborales pueden ser confusas. ¿Cómo puedo ayudarte?',
    'salud': 'El derecho a la salud es fundamental. ¿Tienes alguna pregunta específica sobre ello?',
    'contrato': 'Los contratos son acuerdos legales entre dos o más partes. ¿Necesitas ayuda con algún contrato en particular?',
    'negligencia': 'La negligencia es una falta de cuidado o diligencia debida. ¿Tienes alguna pregunta específica sobre un caso de negligencia?',
    'daños': 'Los daños y perjuicios se refieren a la compensación que se debe pagar a una persona que ha sufrido una pérdida o daño. ¿Tienes alguna pregunta específica sobre ello?',
    'seguros': 'Los reclamos de seguros pueden ser complicados. ¿Necesitas ayuda con un reclamo de seguro?',
    'custodia': 'La custodia de los hijos es un tema delicado. ¿Tienes alguna pregunta específica sobre ello?',
    'manutención': 'La manutención de menores es un deber legal de los padres. ¿Tienes alguna pregunta específica sobre ello?',
    'restricción': 'Las órdenes de restricción se utilizan para proteger a una persona de otra. ¿Tienes alguna pregunta específica sobre ello?',
    'despido': 'Los despidos injustificados pueden dar lugar a reclamaciones legales. ¿Tienes alguna pregunta específica sobre ello?',
    'discriminación': 'La discriminación es ilegal y puede dar lugar a reclamaciones legales. ¿Tienes alguna pregunta específica sobre ello?',
    'comercial': 'Las disputas comerciales pueden ser complejas. ¿Necesitas ayuda con una disputa comercial?',
    
    'cómo estás': 'Estoy aquí para ayudarte con tus consultas legales. ¿En qué puedo asistirte hoy?',
    'divorcio': 'El proceso de divorcio puede ser complejo. ¿Tienes alguna pregunta específica sobre los trámites o derechos asociados?',
    'contrato de alquiler': 'Un contrato de alquiler establece las obligaciones de arrendador e inquilino. ¿Necesitas asesoría sobre alguna cláusula específica?',
    'indemnización laboral': 'La indemnización laboral puede aplicarse en casos de despido injustificado. ¿Quieres saber más sobre cómo reclamarla?',
    'salud': 'El derecho a la salud es fundamental. ¿Tienes dudas sobre tus derechos en relación con la atención médica?',
    'negligencia': 'La negligencia se refiere a la falta de diligencia que causa daño a otra persona. ¿Estás considerando presentar una demanda por negligencia?',
    'custodia': 'La custodia de los hijos es un tema delicado en los casos de separación o divorcio. ¿Tienes preguntas sobre cómo se determina la custodia?',
    'manutención': 'La manutención es una obligación financiera para los hijos. ¿Necesitas asesoramiento sobre cómo se calcula o se exige?',
    'despido': 'Si crees que tu despido fue injustificado, podrías tener derecho a una indemnización. ¿Quieres saber más sobre tus derechos laborales?',
    'discriminación': 'La discriminación en el trabajo o en otros ámbitos es ilegal. ¿Tienes preguntas sobre cómo presentar una denuncia?',
    'seguro': 'Los reclamos de seguros pueden ser complicados. ¿Necesitas ayuda con un problema relacionado con tu seguro?',
    'herencia': 'La distribución de una herencia puede generar conflictos. ¿Tienes dudas sobre cómo se realiza este proceso?',
    'testamento': 'Un testamento es un documento legal que expresa la voluntad de una persona sobre cómo distribuir sus bienes tras su fallecimiento. ¿Quieres saber cómo redactar uno?',
    'violencia doméstica': 'La violencia doméstica es un asunto grave. Existen medidas legales para protegerte. ¿Necesitas información sobre cómo obtener una orden de protección?',
    'reclamo civil': 'Los reclamos civiles pueden surgir de diferentes situaciones, como daños a la propiedad o incumplimiento de contratos. ¿Necesitas asesoría sobre cómo proceder con un reclamo?',
    'acoso laboral': 'El acoso laboral es inaceptable y puede ser denunciado. ¿Tienes preguntas sobre cómo proceder en tu situación?',
    'mobbing': 'El mobbing, o acoso psicológico en el trabajo, es una situación grave. ¿Quieres saber cómo denunciarlo?',
    'acoso sexual': 'El acoso sexual en el trabajo o en cualquier otro lugar es ilegal. ¿Necesitas asesoría sobre cómo proceder?',
    'falsificación': 'La falsificación de documentos es un delito grave. ¿Tienes preguntas sobre las posibles consecuencias?',
    'fraude': 'El fraude es un delito que involucra el engaño con el fin de obtener un beneficio injusto. ¿Necesitas asesoría sobre un caso de fraude?',
    'litigio comercial': 'Los litigios comerciales pueden ser complicados y costosos. ¿Necesitas ayuda con un problema legal relacionado con tu negocio?',
    'propiedad intelectual': 'La protección de la propiedad intelectual es crucial para los creadores. ¿Tienes preguntas sobre derechos de autor o patentes?',
    'marca registrada': 'Registrar una marca protege tu negocio y productos. ¿Tienes preguntas sobre cómo registrar una marca?',
    'patente': 'Una patente te otorga derechos exclusivos sobre una invención. ¿Quieres saber cómo obtener una patente?',
    'demandas colectivas': 'Una demanda colectiva permite a un grupo de personas con un problema similar demandar conjuntamente. ¿Estás considerando unirte a una demanda colectiva?',
    'responsabilidad civil': 'La responsabilidad civil se refiere a la obligación de reparar un daño causado a otra persona. ¿Tienes preguntas sobre cómo proceder con una reclamación?',
    'responsabilidad penal': 'La responsabilidad penal se refiere a las consecuencias legales de cometer un delito. ¿Necesitas asesoramiento sobre un caso penal?',
    'arbitraje': 'El arbitraje es una forma de resolver disputas fuera de los tribunales. ¿Tienes preguntas sobre cómo funciona el proceso de arbitraje?',
    'mediación': 'La mediación es una alternativa a la resolución de conflictos en los tribunales, donde una tercera parte ayuda a llegar a un acuerdo. ¿Te gustaría saber más sobre este proceso?',
    'compraventa': 'La compraventa de bienes inmuebles implica varios pasos legales. ¿Necesitas asesoría sobre un contrato de compraventa?',
    'hipoteca': 'Una hipoteca es un préstamo garantizado por un inmueble. ¿Tienes preguntas sobre los términos de tu hipoteca?',
    'derecho de familia': 'El derecho de familia abarca temas como divorcio, custodia, y manutención. ¿En qué tema específico necesitas ayuda?',
    'derecho laboral': 'El derecho laboral regula las relaciones entre empleadores y empleados. ¿Tienes alguna consulta sobre tus derechos laborales?',
    'derecho penal': 'El derecho penal se ocupa de delitos y castigos. ¿Tienes preguntas sobre un caso penal específico?',
    'derecho civil': 'El derecho civil regula las relaciones privadas entre individuos. ¿Tienes alguna consulta sobre tus derechos o responsabilidades?',
    'defensa penal': 'La defensa penal es crucial si te enfrentas a cargos criminales. ¿Necesitas asesoría sobre cómo defenderte en un caso penal?',
    'expulsión': 'La expulsión de un inquilino debe cumplir con procedimientos legales específicos. ¿Necesitas ayuda con un caso de expulsión?',
    'cláusula abusiva': 'Las cláusulas abusivas en un contrato son aquellas que ponen a una de las partes en una posición desventajosa. ¿Tienes dudas sobre alguna cláusula?',
    'derecho a la privacidad': 'El derecho a la privacidad protege tu información personal. ¿Tienes preguntas sobre cómo proteger tu privacidad?',
    'protección de datos': 'La protección de datos es crucial en la era digital. ¿Necesitas ayuda con un problema relacionado con tus datos personales?',
    'defensa del consumidor': 'La defensa del consumidor te protege de prácticas comerciales injustas. ¿Tienes preguntas sobre cómo hacer valer tus derechos como consumidor?',
    'litigio penal': 'El litigio penal involucra procedimientos legales por delitos. ¿Necesitas asesoramiento sobre un proceso penal?',
    'derecho de sucesiones': 'El derecho de sucesiones regula la distribución de bienes tras el fallecimiento de una persona. ¿Tienes preguntas sobre la herencia o el testamento?',
    'usucapión': 'La usucapión es un proceso legal que permite adquirir la propiedad de un bien por el paso del tiempo. ¿Tienes preguntas sobre cómo funciona?',
    'contrato de trabajo': 'Un contrato de trabajo establece los derechos y obligaciones de empleadores y empleados. ¿Necesitas revisar o negociar un contrato?',
    'contrato de sociedad': 'Un contrato de sociedad regula la relación entre socios de un negocio. ¿Tienes preguntas sobre cómo estructurar una sociedad?',
    'derecho administrativo': 'El derecho administrativo regula las relaciones entre los ciudadanos y las entidades públicas. ¿Tienes dudas sobre algún trámite o procedimiento administrativo?',
    'extranjería': 'La ley de extranjería regula la entrada, estancia y derechos de los extranjeros en un país. ¿Necesitas ayuda con un proceso de inmigración?',
    'asilo': 'El asilo es una protección que se otorga a personas que huyen de persecuciones en su país de origen. ¿Tienes preguntas sobre cómo solicitar asilo?',
    'deportación': 'La deportación es el proceso de expulsar a un extranjero de un país. ¿Necesitas asesoramiento sobre cómo evitar la deportación?',
    'licencias': 'Obtener licencias es necesario para muchas actividades comerciales. ¿Tienes preguntas sobre cómo obtener una licencia específica?',
    'sociedad limitada': 'Una sociedad limitada es un tipo de entidad jurídica. ¿Tienes preguntas sobre cómo crear o gestionar una sociedad limitada?',
    'sociedad anónima': 'Una sociedad anónima permite a los accionistas limitar su responsabilidad. ¿Necesitas información sobre cómo funciona?',
    'derechos humanos': 'Los derechos humanos son protecciones fundamentales garantizadas a todas las personas. ¿Tienes preguntas sobre cómo defender tus derechos?',
    'derecho internacional': 'El derecho internacional regula las relaciones entre países y sus ciudadanos. ¿Tienes preguntas sobre un conflicto de leyes internacionales?',
    'expropiación': 'La expropiación es la acción de un gobierno de tomar propiedad privada por un motivo de utilidad pública. ¿Tienes dudas sobre este proceso?',
    'derecho marítimo': 'El derecho marítimo regula la navegación y los asuntos legales relacionados con el mar. ¿Tienes preguntas sobre un conflicto marítimo?',
    'derecho aéreo': 'El derecho aéreo regula la aviación y el transporte aéreo. ¿Tienes dudas sobre un conflicto relacionado con el transporte aéreo?',
    'derecho ambiental': 'El derecho ambiental protege el medio ambiente a través de regulaciones. ¿Tienes preguntas sobre cómo cumplir con las normativas ambientales?',
    // Con mala ortografía y sintaxis
    'ola': 'Ola ke ase, nesesitas ayuda kon algo legal?',
    'como estas': 'Aqui, listo pa ayudar en lo q sea legal. Que necesitas?',
    'diborcio': 'El diborcio es complicado. Kieres saver algo de los tramites?',
    'contrato d alquiler': 'El contrato d alquiler dice ke tiene ke aser el dueño y el inquilino. ¿Kieres saber algo espesifico?',
    'indemnisacion laboral': 'La indemnisacion laboral se pide kuando te corren sin justa causa. ¿Kieres saber komo sakarla?',
    'neglijencia': 'La neglijencia es kuando alguien no ase lo ke debe y le ase daño a otro. ¿Estas pensando demandar por neglijencia?',
    'custodia': 'La kustodia de los hijos se define en un divorcio. ¿Tienes preguntas sobre komo se decide?',
    'manutencion': 'La manutencion es lo ke se paga por los hijos. ¿Nesesitas ayuda para sakar o pagar manutencion?',
    'diskriminacion': 'La diskriminacion no es legal. ¿Tienes preguntas sobre komo denunciar?',
    'seguro': 'Los rekleamos de seguro son komplikaos. ¿Nesesitas ayuda kon tu problema de seguro?',
    'erensia': 'La erensia puede krear muchos problemas. ¿Tienes dudas sobre komo se reparte?',
    'testamento': 'El testamento es para decir komo se reparten tus kosas kuando mueres. ¿Kieres saber komo acer uno?',
    'viyolencia domestica': 'La viyolencia domestica es seria. Ai maneras legales de protejerte. ¿Nesesitas info para sakar una orden de proteccion?',
    'rekleamo sivil': 'Los rekleamos sivilis pasan por kosas komo daños a propiedades o kontratos no cumplidos. ¿Kieres saber komo aser un rekleamo?',
  // Con mala ortografía y sintaxis
  'ola': 'Ola ke ase, nesesitas ayuda kon algo legal?',
  'como estas': 'Aqui, listo pa ayudar en lo q sea legal. Que necesitas?',
  'diborcio': 'El diborcio es complicado. Kieres saver algo de los tramites?',
  'kontrato d alkiler': 'El kontrato d alkiler dice ke tiene ke aser el dueño y el inquilino. ¿Kieres saber algo espesifico?',
  'indemnisacion laboral': 'La indemnisacion laboral se pide kuando te corren sin justa causa. ¿Kieres saber komo sakarla?',
  'neglijencia': 'La neglijencia es kuando alguien no ase lo ke debe y le ase daño a otro. ¿Estas pensando demandar por neglijencia?',
  'kustodia': 'La kustodia de los hijos se define en un divorcio. ¿Tienes preguntas sobre komo se decide?',
  'manutencion': 'La manutencion es lo ke se paga por los hijos. ¿Nesesitas ayuda para sakar o pagar manutencion?',
  'diskriminacion': 'La diskriminacion no es legal. ¿Tienes preguntas sobre komo denunciar?',
  'seguro': 'Los rekleamos de seguro son komplikaos. ¿Nesesitas ayuda kon tu problema de seguro?',
  'erensia': 'La erensia puede krear muchos problemas. ¿Tienes dudas sobre komo se reparte?',
  'testamento': 'El testamento es para decir komo se reparten tus kosas kuando mueres. ¿Kieres saber komo acer uno?',
  'viyolencia domestica': 'La viyolencia domestica es seria. Ai maneras legales de protejerte. ¿Nesesitas info para sakar una orden de proteccion?',
  'rekleamo sivil': 'Los rekleamos sivilis pasan por kosas komo daños a propiedades o kontratos no cumplidos. ¿Kieres saber komo aser un rekleamo?',
  'akoso laboral': 'El akoso laboral es malo y se puede denunciar. ¿Kieres saver komo acerlo?',
  'kontrato d trabajo': 'El kontrato d trabajo tiene ke decir ke ase el trabajador y el jefe. ¿Nesesitas revisar algo?',
  'despido injustifikado': 'Si krees ke tu despido no es justo',
   // Con buena ortografía y sintaxis
   'hola': '¡Hola! ¿En qué puedo ayudarte con respecto a temas legales?',
   'cómo estás': 'Estoy aquí para ayudarte con tus consultas legales. ¿En qué puedo asistirte hoy?',
   'divorcio': 'El proceso de divorcio puede ser complejo. ¿Tienes alguna pregunta específica sobre los trámites o derechos asociados?',
   'contrato de alquiler': 'Un contrato de alquiler establece las obligaciones de arrendador e inquilino. ¿Necesitas asesoría sobre alguna cláusula específica?',
   'indemnización laboral': 'La indemnización laboral puede aplicarse en casos de despido injustificado. ¿Quieres saber más sobre cómo reclamarla?',
   'negligencia': 'La negligencia se refiere a la falta de diligencia que causa daño a otra persona. ¿Estás considerando presentar una demanda por negligencia?',
   'custodia': 'La custodia de los hijos es un tema delicado en los casos de separación o divorcio. ¿Tienes preguntas sobre cómo se determina la custodia?',
   'manutención': 'La manutención es una obligación financiera para los hijos. ¿Necesitas asesoramiento sobre cómo se calcula o se exige?',
   'discriminación': 'La discriminación en el trabajo o en otros ámbitos es ilegal. ¿Tienes preguntas sobre cómo presentar una denuncia?',
   'seguro': 'Los reclamos de seguros pueden ser complicados. ¿Necesitas ayuda con un problema relacionado con tu seguro?',
   'herencia': 'La distribución de una herencia puede generar conflictos. ¿Tienes dudas sobre cómo se realiza este proceso?',
   'testamento': 'Un testamento es un documento legal que expresa la voluntad de una persona sobre cómo distribuir sus bienes tras su fallecimiento. ¿Quieres saber cómo redactar uno?',
   'violencia doméstica': 'La violencia doméstica es un asunto grave. Existen medidas legales para protegerte. ¿Necesitas información sobre cómo obtener una orden de protección?',
   'reclamo civil': 'Los reclamos civiles pueden surgir de diferentes situaciones, como daños a la propiedad o incumplimiento de contratos. ¿Necesitas asesoría sobre cómo proceder con un reclamo?',
   'acoso laboral': 'El acoso laboral es inaceptable y puede ser denunciado. ¿Tienes alguna pregunta sobre cómo proceder?',
   'contrato de trabajo': 'Un contrato de trabajo define las obligaciones entre empleado y empleador. ¿Necesitas revisar alguna cláusula?',
   'despido injustificado': 'Si crees que tu despido fue injustificado, podrías tener derecho a una compensación. ¿Quieres saber más?',
   'licencia por maternidad': 'La licencia por maternidad es un derecho laboral. ¿Tienes preguntas sobre su duración o requisitos?',
   'subsidio de desempleo': 'El subsidio de desempleo puede ayudar en situaciones de pérdida de empleo. ¿Necesitas información sobre cómo solicitarlo?',
   'cobro de deudas': 'El cobro de deudas debe hacerse dentro de la legalidad. ¿Tienes dudas sobre cómo proceder?',
   'fraude': 'El fraude es un delito grave. ¿Estás pensando en denunciar un caso de fraude?',
   'lesiones personales': 'Las lesiones personales pueden dar lugar a una demanda por daños. ¿Quieres saber más sobre cómo reclamar?',
   'adopción': 'El proceso de adopción es complejo y tiene varios pasos legales. ¿Tienes alguna pregunta específica sobre este tema?',
   'propiedad intelectual': 'Los derechos de propiedad intelectual protegen creaciones originales. ¿Necesitas asesoramiento en este ámbito?',
   'demandas por difamación': 'La difamación es un acto que puede ser demandado si afecta tu reputación. ¿Quieres saber cómo proceder?',
   'mediación': 'La mediación es una alternativa para resolver conflictos sin llegar a juicio. ¿Te interesa saber más sobre cómo funciona?',
   'préstamo hipotecario': 'Un préstamo hipotecario tiene condiciones legales que debes entender. ¿Necesitas ayuda con esto?',
   'declaración de renta': 'La declaración de renta es una obligación fiscal anual. ¿Tienes preguntas sobre cómo presentarla correctamente?',
   'acoso sexual': 'El acoso sexual es un delito y puede ser denunciado. ¿Necesitas orientación sobre cómo proceder?',
   'incumplimiento de contrato': 'El incumplimiento de contrato puede dar lugar a acciones legales. ¿Estás considerando demandar?',
   'sociedades': 'Las sociedades son formas legales de organización empresarial. ¿Tienes dudas sobre cómo constituir una?',
   'deudas hipotecarias': 'Las deudas hipotecarias pueden llevar a la pérdida de la vivienda. ¿Necesitas asesoramiento sobre cómo manejar esta situación?',
   'impuestos': 'El cumplimiento de las obligaciones tributarias es esencial. ¿Tienes dudas sobre tus impuestos?',
   'leasing': 'El leasing es una forma de financiamiento que implica un contrato específico. ¿Quieres saber cómo funciona?',
   'pago de pensiones': 'El pago de pensiones es un derecho adquirido. ¿Tienes preguntas sobre cómo asegurar este beneficio?',
   'sanciones administrativas': 'Las sanciones administrativas se aplican por incumplimientos legales. ¿Necesitas saber cómo apelar una sanción?',
   'abuso de poder': 'El abuso de poder puede ser denunciado en diversas instancias. ¿Tienes preguntas sobre cómo proceder?',
   'defensa penal': 'La defensa penal es crucial si enfrentas cargos criminales. ¿Necesitas asesoramiento legal en este ámbito?',
   'auditorías fiscales': 'Las auditorías fiscales revisan el cumplimiento de las obligaciones tributarias. ¿Tienes dudas sobre cómo prepararte?',
   'bienes raíces': 'La compra y venta de bienes raíces implica varios aspectos legales. ¿Necesitas ayuda con algún contrato?',
   'derechos laborales': 'Los derechos laborales protegen a los trabajadores en diversas situaciones. ¿Tienes alguna consulta específica?',
   'extranjería': 'Las leyes de extranjería regulan la entrada y permanencia de extranjeros en el país. ¿Necesitas asesoramiento sobre tu situación migratoria?',
   'juicio': 'Un juicio es el proceso legal donde se resuelve un conflicto. ¿Tienes preguntas sobre cómo se desarrolla un juicio?',
   'hermanos': 'Los conflictos entre hermanos pueden generar disputas legales, especialmente en herencias. ¿Necesitas asesoramiento?',
   'contratos mercantiles': 'Los contratos mercantiles regulan las relaciones comerciales. ¿Tienes dudas sobre la redacción de uno?',
   'testigos': 'El testimonio de testigos puede ser crucial en un juicio. ¿Tienes preguntas sobre cómo citar a un testigo?',
   'mediación familiar': 'La mediación familiar busca resolver conflictos sin llegar a juicio. ¿Te interesa este proceso?',
   'sucesión': 'El proceso de sucesión determina cómo se distribuyen los bienes tras el fallecimiento de una persona. ¿Tienes preguntas sobre cómo iniciar?',
   'acusaciones falsas': 'Las acusaciones falsas pueden tener consecuencias legales. ¿Quieres saber cómo defenderte?',
   'jurídico': 'En el ámbito jurídico, el asesoramiento adecuado es clave. ¿Qué aspecto legal te preocupa?',
   'perjuicios': 'Los perjuicios se refieren a los daños sufridos por una persona. ¿Necesitas ayuda para reclamar por perjuicios?',
   'obligaciones contractuales': 'Las obligaciones contractuales deben ser cumplidas según lo acordado. ¿Tienes problemas con algún contrato?',
   'jurídica': 'La asesoría jurídica puede ayudarte a resolver conflictos legales. ¿En qué puedo asistirte?',
   'resolución de conflictos': 'La resolución de conflictos puede lograrse a través de diversos métodos legales. ¿Qué tipo de conflicto estás enfrentando?',

   // Con mala ortografía y sintaxis
   'ola': 'Ola ke ase, nesesitas ayuda kon algo legal?',
   'como estas': 'Aqui, listo pa ayudar en lo q sea legal. Que necesitas?',
   'diborcio': 'El diborcio es complicado. Kieres saver algo de los tramites?',
   'kontrato d alkiler': 'El kontrato d alkiler dice ke tiene ke aser el dueño y el inquilino. ¿Kieres saber algo espesifico?',
   'indemnisacion laboral': 'La indemnisacion laboral se pide kuando te corren sin justa causa. ¿Kieres saber komo sakarla?',
   'neglijencia': 'La neglijencia es kuando alguien no ase lo ke debe y le ase daño a otro. ¿Estas pensando demandar por neglijencia?',
   'kustodia': 'La kustodia de los hijos se define en un divorcio. ¿Tienes preguntas sobre komo se decide?',
   'manutencion': 'La manutencion es lo ke se paga por los hijos. ¿Nesesitas ayuda para sakar o pagar manutencion?',
   'diskriminacion': 'La diskriminacion no es legal. ¿Tienes preguntas sobre komo denunciar?',
   'seguro': 'Los rekleamos de seguro son komplikaos. ¿Nesesitas ayuda kon tu problema de seguro?',
   'erensia': 'La erensia puede krear muchos problemas. ¿Tienes dudas sobre komo se reparte?',
   'testamento': 'El testamento es para decir komo se reparten tus kosas kuando mueres. ¿Kieres saber komo acer uno?',
   'viyolencia domestica': 'La viyolencia domestica es seria',
   'derecho agrario': 'El derecho agrario regula las actividades'
};

 var isPaused = false;
    
 function sendMessage() {
     var userInput = document.getElementById('userInput').value;
     var chatWindow = document.getElementById('chatWindow');
 
     var userMessage = document.createElement('div');
     userMessage.classList.add('message', 'user-message');
     userMessage.textContent = userInput;
     chatWindow.appendChild(userMessage);
 
     var time = new Date().toLocaleTimeString();
     var timeSpan = document.createElement('span');
     timeSpan.classList.add('message-time');
     timeSpan.textContent = time;
     userMessage.appendChild(timeSpan);
 
     var botMessage = document.createElement('div');
     botMessage.classList.add('message', 'bot-message');
     chatWindow.appendChild(botMessage);
 
     var botResponse = Soluciones_Comunes.hasOwnProperty(userInput.toLowerCase()) ? Soluciones_Comunes[userInput.toLowerCase()] : 'Estoy procesando tu mensaje...';
     var i = 0;
     var intervalId = setInterval(function() {
         if (!isPaused) {
             if (i < botResponse.length) {
                 botMessage.textContent += botResponse[i];
                 i++;
             } else {
                 clearInterval(intervalId);
                 var botTimeSpan = document.createElement('span');
                 botTimeSpan.classList.add('message-time');
                 botTimeSpan.textContent = new Date().toLocaleTimeString();
                 botMessage.appendChild(botTimeSpan);
             }
         }
     }, 20);  // Ajusta este valor para controlar la velocidad de la animación
 
     document.getElementById('userInput').value = '';
     chatWindow.scrollTop = chatWindow.scrollHeight;
 }
 
 function pauseBot() {
     isPaused = true;
 }
 
 function resumeBot() {
     isPaused = false;
 }
 
 function toggleDarkMode() {
     document.body.classList.toggle('modo_oscuro');
 }
     /* se utiliza para abrir un enlace
      en una nueva pestaña del navegador. 
      En este caso, abre un documento compartido 
      en SharePoint.*/
 
     function openDocument() {
         window.open('https://campusuccedu-my.sharepoint.com/:w:/g/personal/breiner_martinez_campusucc_edu_co/EV9j7QzGVzJNnKDSR7nTqAYBQykzAWR3-TmlwBVbl1qb8A?e=2x2n20', '_blank');
     }
     
     /* La  función se llama cuando 
     se cambia el interruptor de tema
      (modo claro / oscuro).
       Dependiendo del estado del interruptor,
        llama a toggleDarkMode() para cambiar
         entre los modos claro y oscuro.*/
 
     function toggleTheme() {
         var themeSwitch = document.getElementById("themeSwitch");
         if (themeSwitch.checked) {
             toggleDarkMode();
         } else {
             toggleDarkMode();
         }
     }
     
     document.addEventListener("DOMContentLoaded", function() {
         const inputField = document.getElementById("userInput");
     
         // Escuchar el evento "keypress" en el campo de entrada
         inputField.addEventListener("keypress", function(event) {
             // Verificar si la tecla presionada es "Enter"
             if (event.key === "Enter") {
                 // Evitar que se envíe un salto de línea al presionar "Enter"
                 event.preventDefault();
                 
                 // Llamar a la función para enviar el mensaje
                 sendMessage();
             }
         });
     });
     
     /* _______________Menu__________*/
 /*
     muestra u ocultar el menú desplegable cuando
      se hace clic en el botón correspondiente. 
      pone o quita la clase "show" al elemento 
      que contiene el menú desplegable.
     */
     function toggleDropdown() {
         var dropdownContent = document.getElementById("dropdownContent");
         dropdownContent.classList.toggle("show");
     }
 
     /* un evento que se activa cuando se hace clic
      en cualquier parte de la ventana del navegador. 
      Se utiliza aquí para cerrar el menú desplegable
       si se hace clic fuera de él. Si el clic no es 
       en el botón del menú desplegable, se cierra el
        menú desplegable.*/
 
     window.onclick = function(event) {
       if (!event.target.matches('.dropdown-btn')) {
         var dropdowns = document.getElementsByClassName("dropdown-content");
         var i;
         for (i = 0; i < dropdowns.length; i++) {
           var openDropdown = dropdowns[i];
           if (openDropdown.classList.contains('show')) {
             openDropdown.classList.remove('show');
           }
         }
       }
     }
/*_________________________________________________ */
function mostrarHistorialConversaciones() {
    const historialConversaciones = cargarHistorialConversaciones();
    let historialHTML = '<h2>Historial de Conversaciones</h2><ul>';
    historialConversaciones.forEach(conversacion => {
        historialHTML += `<li><strong>Usuario:</strong> ${conversacion.userInput}</li>`;
        historialHTML += `<li><strong>Chatbot:</strong> ${conversacion.botResponse}</li>`;
    });
    historialHTML += '</ul>';
    // Mostrar el historial en una ventana emergente o en un área específica de la página
    alert(historialHTML); // Ejemplo: mostrar en una ventana emergente
}

// Función para crear una nueva conversación (limpiar el área de chat)
function crearNuevaConversacion() {
    const chatWindow = document.getElementById('chatWindow');
    chatWindow.innerHTML = ''; // Limpiar el contenido del área de chat
}

// Función para guardar el historial de conversaciones en el almacenamiento local
function guardarHistorialConversaciones(conversaciones) {
    localStorage.setItem('historialConversaciones', JSON.stringify(conversaciones));
}

// Función para cargar el historial de conversaciones desde el almacenamiento local
function cargarHistorialConversaciones() {
    const historialConversaciones = localStorage.getItem('historialConversaciones');
    return historialConversaciones ? JSON.parse(historialConversaciones) : [];
}

 
// Función para manejar el envío de mensajes del usuario
async function handleUserMessage() {
    const userInput = document.getElementById('userInput').value;
    const chatWindow = document.getElementById('chatWindow');
    const userMessage = document.createElement('div');
    userMessage.classList.add('message', 'user-message');
    userMessage.textContent = userInput;
    chatWindow.appendChild(userMessage);

    const botMessage = document.createElement('div');
    botMessage.classList.add('message', 'bot-message');
    chatWindow.appendChild(botMessage);

    const botResponse = await generateResponse(userInput);
    botMessage.textContent = botResponse;

       // Guardar la conversación actual en el historial
    const conversacion = { userInput, botResponse };
    const historialConversaciones = cargarHistorialConversaciones();
    historialConversaciones.push(conversacion);
    guardarHistorialConversaciones(historialConversaciones);


    document.getElementById('userInput').value = '';
    chatWindow.scrollTop = chatWindow.scrollHeight;
}
/*_________________________________________________ */
        /*INTALAR LIBRERIA:
        npm install botpress
        biblioteca Botpress en tu proyecto,
         y npm gestionará automáticamente las 
         dependencias necesarias.
 */

         /*letra 8421: conversion binaria, binario a decimal */

         /*USO DE LA LIBRERIA  TensorFlow.js */
         // Importa TensorFlow.js

         // Agrega un evento de clic al botón con el ID 'siguienteBtn'
document.getElementById('Perfil').addEventListener('click', function() {
    // Redirige a la página 'index.html' al hacer clic en el botón
    window.location.href = 'https://breynersmartinez.github.io/User_chatbot.github.io/';
});

