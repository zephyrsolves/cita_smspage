import { useLanguage } from "../contexts/LanguageContext";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  const { language } = useLanguage();
  const isEn = language === "en";

  return (
    <div className="min-h-screen bg-[var(--cloud)]">
      {/* Header */}
      <header className="bg-[var(--navy)] text-white py-4">
        <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-white hover:text-[var(--teal)] transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">CitaBooking™</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-[var(--navy)] mb-2">
          {isEn ? "Privacy Policy" : "Política de Privacidad"}
        </h1>
        <p className="text-[var(--slate)] mb-4">
          {isEn ? "Last updated: February 22, 2026" : "Última actualización: 22 de febrero de 2026"}
        </p>
        <p className="text-[var(--slate)] mb-8 italic">
          {isEn
            ? "This policy explains what data we collect, how we use it, and the choices you have."
            : "Esta política explica qué datos recopilamos, cómo los usamos y las opciones que tiene."}
        </p>

        <div className="prose prose-slate max-w-none space-y-8">
          {/* Section 1 */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">
              {isEn ? "1) Who We Are" : "1) Quiénes Somos"}
            </h2>
            <p className="text-[var(--slate)] leading-relaxed">
              {isEn
                ? 'CitaBooking is operated by Zephyr Solution, LLC, a Florida limited liability company ("CitaBooking," "we," "us," or "our"). CitaBooking provides scheduling and business management tools for service professionals.'
                : 'CitaBooking es operado por Zephyr Solution, LLC, una compañía de responsabilidad limitada de Florida ("CitaBooking," "nosotros," "nos" o "nuestro"). CitaBooking proporciona herramientas de programación y gestión de negocios para profesionales de servicios.'}
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">
              {isEn ? "2) Information We Collect" : "2) Información que Recopilamos"}
            </h2>
            <h3 className="text-lg font-medium text-[var(--navy)] mt-4 mb-2">{isEn ? "A) Account Information" : "A) Información de Cuenta"}</h3>
            <ul className="list-disc list-inside text-[var(--slate)] space-y-1 ml-4">
              <li>{isEn ? "Name" : "Nombre"}</li>
              <li>{isEn ? "Email" : "Correo electrónico"}</li>
              <li>{isEn ? "Phone number (optional)" : "Número de teléfono (opcional)"}</li>
              <li>{isEn ? "Preferred language and settings" : "Idioma preferido y configuraciones"}</li>
            </ul>
            <h3 className="text-lg font-medium text-[var(--navy)] mt-4 mb-2">{isEn ? "B) Business Information" : "B) Información del Negocio"}</h3>
            <ul className="list-disc list-inside text-[var(--slate)] space-y-1 ml-4">
              <li>{isEn ? "Business name, hours, timezone" : "Nombre del negocio, horarios, zona horaria"}</li>
              <li>{isEn ? "Services and pricing set by the business owner" : "Servicios y precios establecidos por el propietario"}</li>
              <li>{isEn ? "Staff data (if enabled later)" : "Datos del personal (si se habilita más adelante)"}</li>
            </ul>
            <h3 className="text-lg font-medium text-[var(--navy)] mt-4 mb-2">{isEn ? "C) Client and Booking Information" : "C) Información de Clientes y Reservas"}</h3>
            <p className="text-[var(--slate)] text-sm mb-2">{isEn ? "(entered by business owners or clients)" : "(ingresada por propietarios de negocios o clientes)"}</p>
            <ul className="list-disc list-inside text-[var(--slate)] space-y-1 ml-4">
              <li>{isEn ? "Client name and contact details (email/phone)" : "Nombre del cliente y datos de contacto (email/teléfono)"}</li>
              <li>{isEn ? "Appointment date/time, selected services" : "Fecha/hora de cita, servicios seleccionados"}</li>
              <li>{isEn ? "Communications and reminders (where enabled)" : "Comunicaciones y recordatorios (donde esté habilitado)"}</li>
            </ul>
            <h3 className="text-lg font-medium text-[var(--navy)] mt-4 mb-2">{isEn ? "D) Payments" : "D) Pagos"}</h3>
            <ul className="list-disc list-inside text-[var(--slate)] space-y-1 ml-4">
              <li>{isEn ? "Payments are processed by third-party payment processors (e.g., Stripe)." : "Los pagos son procesados por procesadores de pago de terceros (ej. Stripe)."}</li>
              <li>{isEn ? "We may receive payment-related metadata such as: payment status, timestamps, amount, last4, and transaction identifiers" : "Podemos recibir metadatos relacionados con pagos como: estado del pago, marcas de tiempo, monto, últimos 4 dígitos e identificadores de transacción"}</li>
              <li className="font-medium">{isEn ? "We do not store full card numbers." : "No almacenamos números de tarjeta completos."}</li>
            </ul>
            <h3 className="text-lg font-medium text-[var(--navy)] mt-4 mb-2">{isEn ? "E) Receipts / Attachments (if enabled)" : "E) Recibos / Adjuntos (si está habilitado)"}</h3>
            <ul className="list-disc list-inside text-[var(--slate)] space-y-1 ml-4">
              <li>{isEn ? "Receipt photos or files uploaded by the owner" : "Fotos de recibos o archivos subidos por el propietario"}</li>
              <li>{isEn ? "Notes and descriptions tied to expenses/inventory (if enabled)" : "Notas y descripciones vinculadas a gastos/inventario (si está habilitado)"}</li>
            </ul>
            <h3 className="text-lg font-medium text-[var(--navy)] mt-4 mb-2">{isEn ? "F) Device and Usage Data" : "F) Datos de Dispositivo y Uso"}</h3>
            <ul className="list-disc list-inside text-[var(--slate)] space-y-1 ml-4">
              <li>{isEn ? "Log data such as IP address, device type, browser, pages/actions" : "Datos de registro como dirección IP, tipo de dispositivo, navegador, páginas/acciones"}</li>
              <li>{isEn ? "Basic analytics to improve the service" : "Análisis básicos para mejorar el servicio"}</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">{isEn ? "3) How We Use Information" : "3) Cómo Usamos la Información"}</h2>
            <p className="text-[var(--slate)] leading-relaxed mb-3">{isEn ? "We use data to:" : "Usamos los datos para:"}</p>
            <ul className="list-disc list-inside text-[var(--slate)] space-y-1 ml-4">
              <li>{isEn ? "Provide and operate the platform (bookings, reminders, dashboards)" : "Proporcionar y operar la plataforma (reservas, recordatorios, paneles)"}</li>
              <li>{isEn ? "Process payments and prevent fraud" : "Procesar pagos y prevenir fraude"}</li>
              <li>{isEn ? "Communicate service messages (confirmations, reminders, policy notices)" : "Comunicar mensajes de servicio (confirmaciones, recordatorios, avisos de políticas)"}</li>
              <li>{isEn ? "Improve product performance, reliability, and support" : "Mejorar el rendimiento, confiabilidad y soporte del producto"}</li>
              <li>{isEn ? "Comply with legal obligations" : "Cumplir con obligaciones legales"}</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">{isEn ? "4) How We Share Information" : "4) Cómo Compartimos la Información"}</h2>
            <p className="text-[var(--slate)] leading-relaxed mb-3">{isEn ? "We share data only as needed:" : "Compartimos datos solo según sea necesario:"}</p>
            <ul className="list-disc list-inside text-[var(--slate)] space-y-2 ml-4">
              <li><strong>{isEn ? "With service providers" : "Con proveedores de servicios"}</strong> {isEn ? "(hosting, analytics, email/SMS, payments) who support the platform" : "(alojamiento, análisis, email/SMS, pagos) que apoyan la plataforma"}</li>
              <li><strong>{isEn ? "With the business owner" : "Con el propietario del negocio"}</strong> {isEn ? "whose booking page you used (so they can deliver the service)" : "cuya página de reservas usó (para que puedan prestar el servicio)"}</li>
              <li><strong>{isEn ? "For legal reasons" : "Por razones legales"}</strong> {isEn ? "if required by law or to protect rights/safety" : "si es requerido por ley o para proteger derechos/seguridad"}</li>
              <li><strong>{isEn ? "Business transfers" : "Transferencias de negocios"}</strong> {isEn ? "(e.g., merger/acquisition), with notice where required" : "(ej. fusión/adquisición), con aviso donde sea requerido"}</li>
            </ul>
            <p className="text-[var(--slate)] leading-relaxed mt-4 font-medium">{isEn ? "We do not sell personal information." : "No vendemos información personal."}</p>
          </section>

          {/* Section 5 — Communications */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">{isEn ? "5) Communications" : "5) Comunicaciones"}</h2>
            <p className="text-[var(--slate)] leading-relaxed mb-3">
              {isEn
                ? "CitaBooking enables Business Owners to send transactional and, where applicable, marketing communications to their clients via email, SMS text message, or other supported messaging channels (where enabled)."
                : "CitaBooking permite a los Propietarios de Negocios enviar comunicaciones transaccionales y, cuando sea aplicable, comunicaciones de marketing a sus clientes por correo electrónico, mensaje de texto SMS u otros canales de mensajería compatibles (donde estén habilitados)."}
            </p>
            <h3 className="text-lg font-medium text-[var(--navy)] mt-4 mb-2">{isEn ? "A) Transactional Messages" : "A) Mensajes Transaccionales"}</h3>
            <p className="text-[var(--slate)] leading-relaxed mb-2">{isEn ? "Transactional messages may include, but are not limited to:" : "Los mensajes transaccionales pueden incluir, pero no se limitan a:"}</p>
            <ul className="list-disc list-inside text-[var(--slate)] space-y-1 ml-4">
              <li>{isEn ? "Appointment confirmations" : "Confirmaciones de citas"}</li>
              <li>{isEn ? "Appointment reminders" : "Recordatorios de citas"}</li>
              <li>{isEn ? "Rescheduling or cancellation notices" : "Avisos de reprogramación o cancelación"}</li>
              <li>{isEn ? "Credit balance notifications" : "Notificaciones de saldo de créditos"}</li>
              <li>{isEn ? "Payment or invoice notifications" : "Notificaciones de pago o facturas"}</li>
              <li>{isEn ? "Account-related alerts" : "Alertas relacionadas con la cuenta"}</li>
            </ul>
            <p className="text-[var(--slate)] leading-relaxed mt-2">{isEn ? "These messages are service-related and may be sent as necessary to facilitate scheduled services." : "Estos mensajes están relacionados con el servicio y pueden enviarse según sea necesario para facilitar los servicios programados."}</p>
            <h3 className="text-lg font-medium text-[var(--navy)] mt-4 mb-2">{isEn ? "B) Marketing Messages" : "B) Mensajes de Marketing"}</h3>
            <p className="text-[var(--slate)] leading-relaxed">
              {isEn
                ? "Where enabled by a Business Owner, marketing or promotional messages may be sent to clients who have provided appropriate consent. Clients may opt out of marketing communications at any time as described below."
                : "Cuando un Propietario de Negocio lo habilite, se pueden enviar mensajes de marketing o promocionales a los clientes que hayan proporcionado el consentimiento apropiado. Los clientes pueden optar por no recibir comunicaciones de marketing en cualquier momento como se describe a continuación."}
            </p>
            <h3 className="text-lg font-medium text-[var(--navy)] mt-4 mb-2">{isEn ? "C) SMS Consent & Responsibility" : "C) Consentimiento y Responsabilidad de SMS"}</h3>
            <p className="text-[var(--slate)] leading-relaxed mb-2">{isEn ? "Business Owners are solely responsible for:" : "Los Propietarios de Negocios son los únicos responsables de:"}</p>
            <ul className="list-disc list-inside text-[var(--slate)] space-y-1 ml-4">
              <li>{isEn ? "Obtaining legally required consent from their clients prior to sending SMS or other electronic communications" : "Obtener el consentimiento legalmente requerido de sus clientes antes de enviar SMS u otras comunicaciones electrónicas"}</li>
              <li>{isEn ? "Maintaining records of such consent" : "Mantener registros de dicho consentimiento"}</li>
              <li>{isEn ? "Complying with the Telephone Consumer Protection Act (TCPA), A2P 10DLC requirements, and other applicable messaging regulations" : "Cumplir con la Ley de Protección al Consumidor Telefónico (TCPA), los requisitos A2P 10DLC y otras regulaciones de mensajería aplicables"}</li>
            </ul>
            <p className="text-[var(--slate)] leading-relaxed mt-2">{isEn ? "CitaBooking does not independently verify consent obtained by Business Owners and is not responsible for messaging practices conducted by Business Owners through the Platform." : "CitaBooking no verifica de forma independiente el consentimiento obtenido por los Propietarios de Negocios y no es responsable de las prácticas de mensajería realizadas por los Propietarios de Negocios a través de la Plataforma."}</p>
            <h3 className="text-lg font-medium text-[var(--navy)] mt-4 mb-2">{isEn ? "D) Opt-Out Instructions" : "D) Instrucciones para Darse de Baja"}</h3>
            <ul className="list-disc list-inside text-[var(--slate)] space-y-1 ml-4">
              <li>{isEn ? "Recipients of SMS messages may opt out by replying STOP to any message, where supported. After opting out, no further SMS messages will be sent unless the recipient opts back in." : "Los destinatarios de mensajes SMS pueden darse de baja respondiendo STOP a cualquier mensaje, donde sea compatible. Después de darse de baja, no se enviarán más mensajes SMS a menos que el destinatario vuelva a optar por recibirlos."}</li>
              <li>{isEn ? "Recipients may reply HELP for assistance, where supported." : "Los destinatarios pueden responder HELP para obtener asistencia, donde sea compatible."}</li>
              <li>{isEn ? "Email recipients may unsubscribe using the unsubscribe link included in applicable communications." : "Los destinatarios de correo electrónico pueden cancelar su suscripción usando el enlace de cancelación incluido en las comunicaciones aplicables."}</li>
              <li>{isEn ? "Transactional messages necessary to provide scheduled services may still be sent where legally permitted." : "Los mensajes transaccionales necesarios para proporcionar servicios programados aún pueden enviarse donde sea legalmente permitido."}</li>
            </ul>
            <h3 className="text-lg font-medium text-[var(--navy)] mt-4 mb-2">{isEn ? "E) Message Frequency & Fees" : "E) Frecuencia de Mensajes y Tarifas"}</h3>
            <p className="text-[var(--slate)] leading-relaxed">{isEn ? "Message frequency may vary depending on appointment activity, account status, and Business Owner configuration. Standard message and data rates may apply based on the recipient's mobile carrier plan. CitaBooking and Business Owners are not responsible for carrier delays or undelivered messages." : "La frecuencia de los mensajes puede variar según la actividad de citas, el estado de la cuenta y la configuración del Propietario del Negocio. Las tarifas estándar de mensajes y datos pueden aplicarse según el plan del operador móvil del destinatario. CitaBooking y los Propietarios de Negocios no son responsables de retrasos del operador o mensajes no entregados."}</p>
            <h3 className="text-lg font-medium text-[var(--navy)] mt-4 mb-2">{isEn ? "F) Third-Party Messaging Providers" : "F) Proveedores de Mensajería de Terceros"}</h3>
            <p className="text-[var(--slate)] leading-relaxed">{isEn ? "SMS and messaging services may be provided through third-party service providers (e.g., telecommunications carriers or messaging platforms). Delivery of messages is subject to carrier filtering and network availability. CitaBooking does not guarantee delivery or timing of messages." : "Los servicios de SMS y mensajería pueden ser proporcionados a través de proveedores de servicios de terceros (ej. operadores de telecomunicaciones o plataformas de mensajería). La entrega de mensajes está sujeta al filtrado del operador y la disponibilidad de la red. CitaBooking no garantiza la entrega ni el momento de los mensajes."}</p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">{isEn ? "6) Data Roles — Controller & Processor" : "6) Roles de Datos — Controlador y Procesador"}</h2>
            <p className="text-[var(--slate)] leading-relaxed mb-3">{isEn ? "For the purposes of data protection:" : "A los efectos de la protección de datos:"}</p>
            <ul className="list-disc list-inside text-[var(--slate)] space-y-2 ml-4">
              <li><strong>{isEn ? "Business Owners" : "Propietarios de Negocios"}</strong> {isEn ? "are the data controllers of their client data. They determine the purposes and means of processing personal data collected through their use of the Platform (e.g., client names, contact details, appointment history)." : "son los controladores de datos de la información de sus clientes. Ellos determinan los propósitos y medios del procesamiento de datos personales recopilados a través de su uso de la Plataforma (ej. nombres de clientes, datos de contacto, historial de citas)."}</li>
              <li><strong>CitaBooking</strong> {isEn ? "acts as a data processor, processing client data on behalf of Business Owners to provide the Platform's services (scheduling, reminders, payments, etc.)." : "actúa como procesador de datos, procesando datos de clientes en nombre de los Propietarios de Negocios para proporcionar los servicios de la Plataforma (programación, recordatorios, pagos, etc.)."}</li>
              <li>{isEn ? "For data that CitaBooking collects directly from Business Owners for account management and billing purposes, CitaBooking acts as the data controller." : "Para los datos que CitaBooking recopila directamente de los Propietarios de Negocios para la gestión de cuentas y facturación, CitaBooking actúa como controlador de datos."}</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">{isEn ? "7) Data Retention" : "7) Retención de Datos"}</h2>
            <ul className="list-disc list-inside text-[var(--slate)] space-y-2 ml-4">
              <li>{isEn ? "We keep data as long as needed to provide the service and meet legal obligations." : "Mantenemos los datos mientras sea necesario para proporcionar el servicio y cumplir con las obligaciones legales."}</li>
              <li>{isEn ? "Owners can delete clients/records where applicable; some logs may remain for security/audit." : "Los propietarios pueden eliminar clientes/registros donde sea aplicable; algunos registros pueden permanecer por seguridad/auditoría."}</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">{isEn ? "8) Security" : "8) Seguridad"}</h2>
            <p className="text-[var(--slate)] leading-relaxed mb-3">{isEn ? "We use reasonable administrative, technical, and organizational measures to protect data, including:" : "Usamos medidas administrativas, técnicas y organizacionales razonables para proteger los datos, incluyendo:"}</p>
            <ul className="list-disc list-inside text-[var(--slate)] space-y-1 ml-4">
              <li>{isEn ? "encryption in transit (HTTPS)" : "encriptación en tránsito (HTTPS)"}</li>
              <li>{isEn ? "access controls" : "controles de acceso"}</li>
              <li>{isEn ? "monitoring and audit logging (where enabled)" : "monitoreo y registro de auditoría (donde esté habilitado)"}</li>
            </ul>
            <p className="text-[var(--slate)] leading-relaxed mt-3">{isEn ? "No system is 100% secure; we continuously improve safeguards." : "Ningún sistema es 100% seguro; mejoramos continuamente las protecciones."}</p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">{isEn ? "9) Breach Notification" : "9) Notificación de Violación de Datos"}</h2>
            <p className="text-[var(--slate)] leading-relaxed mb-3">{isEn ? "In the event of a confirmed data breach that affects personal information, CitaBooking will:" : "En caso de una violación de datos confirmada que afecte información personal, CitaBooking:"}</p>
            <ul className="list-disc list-inside text-[var(--slate)] space-y-1 ml-4">
              <li>{isEn ? "Notify affected Business Owners without unreasonable delay" : "Notificará a los Propietarios de Negocios afectados sin demora injustificada"}</li>
              <li>{isEn ? "Provide details of the nature and scope of the breach where known" : "Proporcionará detalles sobre la naturaleza y el alcance de la violación cuando se conozcan"}</li>
              <li>{isEn ? "Describe the measures taken or proposed to address the breach" : "Describirá las medidas tomadas o propuestas para abordar la violación"}</li>
              <li>{isEn ? "Comply with applicable breach notification laws, including Florida state law" : "Cumplirá con las leyes de notificación de violaciones aplicables, incluyendo la ley del estado de Florida"}</li>
            </ul>
            <p className="text-[var(--slate)] leading-relaxed mt-3">{isEn ? "Business Owners are responsible for notifying their own clients as required by applicable law." : "Los Propietarios de Negocios son responsables de notificar a sus propios clientes según lo exija la ley aplicable."}</p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">{isEn ? "10) Platform Administrative Access" : "10) Acceso Administrativo de la Plataforma"}</h2>
            <p className="text-[var(--slate)] leading-relaxed mb-3">{isEn ? "CitaBooking administrators may access account data strictly for the following purposes:" : "Los administradores de CitaBooking pueden acceder a datos de cuentas estrictamente para los siguientes propósitos:"}</p>
            <ul className="list-disc list-inside text-[var(--slate)] space-y-1 ml-4">
              <li>{isEn ? "Technical troubleshooting and platform maintenance" : "Resolución de problemas técnicos y mantenimiento de la plataforma"}</li>
              <li>{isEn ? "Security investigations and fraud prevention" : "Investigaciones de seguridad y prevención de fraude"}</li>
              <li>{isEn ? "Legal compliance and regulatory requirements" : "Cumplimiento legal y requisitos regulatorios"}</li>
            </ul>
            <p className="text-[var(--slate)] leading-relaxed mt-3">{isEn ? "Administrative access is logged, restricted to authorized personnel, and subject to internal policies." : "El acceso administrativo se registra, está restringido al personal autorizado y está sujeto a políticas internas."}</p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">{isEn ? "11) Your Choices" : "11) Sus Opciones"}</h2>
            <p className="text-[var(--slate)] leading-relaxed mb-3">{isEn ? "Depending on your role (owner or client), you may be able to:" : "Dependiendo de su rol (propietario o cliente), puede:"}</p>
            <ul className="list-disc list-inside text-[var(--slate)] space-y-1 ml-4">
              <li>{isEn ? "access, correct, or delete your information" : "acceder, corregir o eliminar su información"}</li>
              <li>{isEn ? "export certain data" : "exportar ciertos datos"}</li>
              <li>{isEn ? "opt out of non-essential communications" : "optar por no recibir comunicaciones no esenciales"}</li>
            </ul>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">{isEn ? "12) International Users" : "12) Usuarios Internacionales"}</h2>
            <p className="text-[var(--slate)] leading-relaxed">{isEn ? "If you access the service from outside the U.S., your data may be processed in the U.S. or other locations where our providers operate." : "Si accede al servicio desde fuera de EE.UU., sus datos pueden ser procesados en EE.UU. u otras ubicaciones donde operan nuestros proveedores."}</p>
          </section>

          {/* Section 13 */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">{isEn ? "13) Children" : "13) Niños"}</h2>
            <p className="text-[var(--slate)] leading-relaxed">{isEn ? "CitaBooking is not directed to children under 13, and we do not knowingly collect data from children." : "CitaBooking no está dirigido a niños menores de 13 años, y no recopilamos datos de niños a sabiendas."}</p>
          </section>

          {/* Section 14 */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">{isEn ? "14) Changes" : "14) Cambios"}</h2>
            <p className="text-[var(--slate)] leading-relaxed">{isEn ? "We may update this policy. We'll post changes with an updated effective date." : "Podemos actualizar esta política. Publicaremos los cambios con una fecha de vigencia actualizada."}</p>
          </section>

          {/* Section 15 */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">{isEn ? "15) Contact" : "15) Contacto"}</h2>
            <p className="text-[var(--slate)] leading-relaxed">
              {isEn ? "Questions or requests: " : "Preguntas o solicitudes: "}
              <a href="mailto:support@citabooking.com" className="text-[var(--teal)] hover:underline">support@citabooking.com</a>
            </p>
          </section>
        </div>

        {/* Back navigation */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/" className="text-[var(--teal)] hover:underline flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            {isEn ? "Back to CitaBooking" : "Volver a CitaBooking"}
          </Link>
        </div>
      </main>
    </div>
  );
}
