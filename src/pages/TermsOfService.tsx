import { useLanguage } from "../contexts/LanguageContext";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
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
          {isEn ? "Terms of Service" : "Términos de Servicio"}
        </h1>
        <p className="text-[var(--slate)] mb-4">
          {isEn ? "Last updated: February 22, 2026" : "Última actualización: 22 de febrero de 2026"}
        </p>

        {/* Header / Entity */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 mb-8">
          <p className="text-[var(--slate)] leading-relaxed">
            {isEn
              ? 'CitaBooking is operated by Zephyr Solution, LLC, a Florida limited liability company ("CitaBooking," "we," "us," or "our"). These Terms of Service ("Terms") govern access to and use of the CitaBooking platform, website, applications, and related services (collectively, the "Platform"). By creating an account, accessing, or using the Platform, you agree to be bound by these Terms.'
              : 'CitaBooking es operado por Zephyr Solution, LLC, una compañía de responsabilidad limitada de Florida ("CitaBooking," "nosotros," "nos," o "nuestro"). Estos Términos de Servicio ("Términos") rigen el acceso y uso de la plataforma CitaBooking, sitio web, aplicaciones y servicios relacionados (colectivamente, la "Plataforma"). Al crear una cuenta, acceder o usar la Plataforma, usted acepta estar sujeto a estos Términos.'}
          </p>
        </div>

        <div className="prose prose-slate max-w-none space-y-8">
          {/* Section 1 - Agreement & Eligibility */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">
              {isEn ? "1) Agreement & Eligibility" : "1) Acuerdo y Elegibilidad"}
            </h2>
            <p className="text-[var(--slate)] leading-relaxed mb-3">
              {isEn
                ? 'By accessing or using CitaBooking ("Service"), you agree to these Terms. If you are using CitaBooking on behalf of a business, you represent you have authority to bind that business.'
                : 'Al acceder o usar CitaBooking ("Servicio"), usted acepta estos Términos. Si está usando CitaBooking en nombre de un negocio, usted declara que tiene la autoridad para obligar a ese negocio.'}
            </p>
            <p className="text-[var(--slate)] leading-relaxed">
              {isEn
                ? "The Platform is intended for use by business owners and authorized representatives operating lawful service-based businesses. You must be at least 18 years old to use the Platform."
                : "La Plataforma está destinada al uso de propietarios de negocios y representantes autorizados que operan negocios legales basados en servicios. Debe tener al menos 18 años para usar la Plataforma."}
            </p>
          </section>

          {/* Section 2 - Definitions */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">
              {isEn ? "2) Definitions" : "2) Definiciones"}
            </h2>
            <ul className="list-disc list-inside text-[var(--slate)] space-y-3 ml-4">
              <li>
                <strong>{isEn ? '"Business Owner"' : '"Propietario del Negocio"'}</strong>{" "}
                {isEn
                  ? "means an individual or entity who registers on CitaBooking to create and manage a business, including services, appointments, pricing, and policies."
                  : "significa una persona o entidad que se registra en CitaBooking para crear y gestionar un negocio, incluyendo servicios, citas, precios y políticas."}
              </li>
              <li>
                <strong>{isEn ? '"Team Member"' : '"Miembro del Equipo"'}</strong>{" "}
                {isEn
                  ? "means an individual invited by a Business Owner to access the platform in a supporting role (e.g., assistant)."
                  : "significa una persona invitada por un Propietario del Negocio para acceder a la plataforma en un rol de apoyo (ej., asistente)."}
              </li>
              <li>
                <strong>{isEn ? '"Client"' : '"Cliente"'}</strong>{" "}
                {isEn
                  ? "means an individual who books services, creates a portal account, makes payments or deposits, or receives communications through the platform."
                  : "significa una persona que reserva servicios, crea una cuenta en el portal, realiza pagos o depósitos, o recibe comunicaciones a través de la plataforma."}
              </li>
              <li>
                <strong>{isEn ? '"User"' : '"Usuario"'}</strong>{" "}
                {isEn
                  ? "means any person who accesses or uses the platform, including Business Owners, Team Members, and Clients."
                  : "significa cualquier persona que accede o usa la plataforma, incluyendo Propietarios de Negocios, Miembros del Equipo y Clientes."}
              </li>
            </ul>
          </section>

          {/* Section 3 - The Service */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">
              {isEn ? "3) The Service" : "3) El Servicio"}
            </h2>
            <p className="text-[var(--slate)] leading-relaxed mb-3">
              {isEn
                ? "CitaBooking provides a cloud-based software platform that includes scheduling, messaging, reporting, payment facilitation integrations, and operational tools for service businesses."
                : "CitaBooking proporciona una plataforma de software en la nube que incluye programación, mensajería, informes, integraciones de facilitación de pagos y herramientas operativas para negocios de servicios."}
            </p>
            <p className="text-[var(--slate)] leading-relaxed font-medium mb-3">
              {isEn
                ? "No guarantee of growth: CitaBooking provides software tools only and does not guarantee business growth, client volume, or revenue outcomes."
                : "Sin garantía de crecimiento: CitaBooking proporciona solo herramientas de software y no garantiza el crecimiento del negocio, volumen de clientes o resultados de ingresos."}
            </p>
            <p className="text-[var(--slate)] leading-relaxed mb-2">
              {isEn ? "CitaBooking:" : "CitaBooking:"}
            </p>
            <ul className="list-disc list-inside text-[var(--slate)] space-y-1 ml-4">
              <li>{isEn ? "Does not provide the services offered by Business Owners" : "No proporciona los servicios ofrecidos por los Propietarios de Negocios"}</li>
              <li>{isEn ? "Does not employ service providers" : "No emplea proveedores de servicios"}</li>
              <li>{isEn ? "Does not control pricing, deposits, or cancellation policies" : "No controla precios, depósitos o políticas de cancelación"}</li>
              <li>{isEn ? "Does not guarantee revenue, attendance, profit, or business results" : "No garantiza ingresos, asistencia, ganancias o resultados comerciales"}</li>
              <li>{isEn ? "Does not mediate disputes between Business Owners and their Clients" : "No media en disputas entre Propietarios de Negocios y sus Clientes"}</li>
            </ul>
          </section>

          {/* Section 4 - Platform Role */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">
              {isEn ? "4) Platform Role" : "4) Rol de la Plataforma"}
            </h2>
            <p className="text-[var(--slate)] leading-relaxed mb-3">
              {isEn
                ? "CitaBooking acts solely as a technology platform that connects Business Owners with Clients. Service agreements, including pricing, scheduling, and service delivery, are exclusively between the Client and the Business Owner."
                : "CitaBooking actúa únicamente como una plataforma tecnológica que conecta a los Propietarios de Negocios con los Clientes. Los acuerdos de servicio, incluyendo precios, programación y prestación de servicios, son exclusivamente entre el Cliente y el Propietario del Negocio."}
            </p>
            <p className="text-[var(--slate)] leading-relaxed">
              {isEn
                ? "CitaBooking is not a party to, and bears no responsibility for, the services provided by Business Owners to Clients."
                : "CitaBooking no es parte de, ni tiene responsabilidad por, los servicios proporcionados por los Propietarios de Negocios a los Clientes."}
            </p>
          </section>

          {/* Section 5 - License Grant */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">
              {isEn ? "5) License Grant" : "5) Otorgamiento de Licencia"}
            </h2>
            <p className="text-[var(--slate)] leading-relaxed mb-3">
              {isEn
                ? "Subject to these Terms, Zephyr Solution, LLC grants you a limited, non-exclusive, non-transferable, revocable, subscription-based license to access and use the Platform solely for your internal business operations during an active subscription term."
                : "Sujeto a estos Términos, Zephyr Solution, LLC le otorga una licencia limitada, no exclusiva, intransferible, revocable y basada en suscripción para acceder y usar la Plataforma únicamente para sus operaciones comerciales internas durante un período de suscripción activo."}
            </p>
            <p className="text-[var(--slate)] leading-relaxed mb-3">
              {isEn
                ? "This license does not grant ownership of the Platform or its source code. All rights not expressly granted are reserved."
                : "Esta licencia no otorga propiedad de la Plataforma ni de su código fuente. Todos los derechos no otorgados expresamente están reservados."}
            </p>
            <p className="text-[var(--slate)] leading-relaxed mb-2">
              {isEn ? "You may not:" : "Usted no puede:"}
            </p>
            <ul className="list-disc list-inside text-[var(--slate)] space-y-1 ml-4">
              <li>{isEn ? "Copy, modify, or reverse engineer the Platform" : "Copiar, modificar o aplicar ingeniería inversa a la Plataforma"}</li>
              <li>{isEn ? "Resell or sublicense access" : "Revender o sublicenciar el acceso"}</li>
              <li>{isEn ? "Share login credentials" : "Compartir credenciales de inicio de sesión"}</li>
              <li>{isEn ? "Attempt unauthorized access" : "Intentar acceso no autorizado"}</li>
              <li>{isEn ? "Create derivative competing products" : "Crear productos competidores derivados"}</li>
            </ul>
          </section>

          {/* Section 6 - Accounts & Security */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">
              {isEn ? "6) Accounts & Security" : "6) Cuentas y Seguridad"}
            </h2>
            <p className="text-[var(--slate)] leading-relaxed mb-3">
              {isEn ? "You are responsible for:" : "Usted es responsable de:"}
            </p>
            <ul className="list-disc list-inside text-[var(--slate)] space-y-1 ml-4">
              <li>{isEn ? "Keeping login credentials secure" : "Mantener las credenciales de inicio de sesión seguras"}</li>
              <li>{isEn ? "Providing accurate information" : "Proporcionar información precisa"}</li>
              <li>{isEn ? "All activity under your account" : "Toda la actividad bajo su cuenta"}</li>
            </ul>
            <p className="text-[var(--slate)] leading-relaxed mt-3">
              {isEn
                ? "We may suspend accounts for suspected fraud or misuse. You agree to notify us immediately of unauthorized use. We are not liable for losses resulting from compromised credentials."
                : "Podemos suspender cuentas por sospecha de fraude o mal uso. Usted acepta notificarnos inmediatamente sobre uso no autorizado. No somos responsables por pérdidas resultantes de credenciales comprometidas."}
            </p>
          </section>

          {/* Section 7 - Business Owner Responsibilities */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">
              {isEn ? "7) Business Owner Responsibilities" : "7) Responsabilidades del Propietario del Negocio"}
            </h2>
            <p className="text-[var(--slate)] leading-relaxed mb-3">
              {isEn ? "Business Owners are responsible for:" : "Los Propietarios de Negocios son responsables de:"}
            </p>
            <ul className="list-disc list-inside text-[var(--slate)] space-y-1 ml-4">
              <li>{isEn ? "Setting accurate services, prices, hours, policies, and availability" : "Establecer servicios, precios, horarios, políticas y disponibilidad precisos"}</li>
              <li>{isEn ? "Complying with local laws (consumer protection, taxes, licensing, messaging consent)" : "Cumplir con las leyes locales (protección al consumidor, impuestos, licencias, consentimiento de mensajes)"}</li>
              <li>{isEn ? "Handling customer disputes related to appointments and services" : "Manejar disputas de clientes relacionadas con citas y servicios"}</li>
              <li>{isEn ? "Obtaining necessary consents from Clients before collecting or using their data" : "Obtener los consentimientos necesarios de los Clientes antes de recopilar o usar sus datos"}</li>
              <li>{isEn ? "Managing Team Member access and permissions" : "Gestionar el acceso y permisos de los Miembros del Equipo"}</li>
              <li>{isEn ? "Maintaining opt-in records for SMS and messaging" : "Mantener registros de consentimiento para SMS y mensajería"}</li>
              <li>{isEn ? "Managing employees and contractors" : "Gestionar empleados y contratistas"}</li>
            </ul>
          </section>

          {/* Section 8 - Client Responsibilities */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">
              {isEn ? "8) Client Responsibilities" : "8) Responsabilidades del Cliente"}
            </h2>
            <p className="text-[var(--slate)] leading-relaxed mb-3">
              {isEn ? "Clients agree to:" : "Los Clientes aceptan:"}
            </p>
            <ul className="list-disc list-inside text-[var(--slate)] space-y-1 ml-4">
              <li>{isEn ? "Provide accurate booking and contact information" : "Proporcionar información de reserva y contacto precisa"}</li>
              <li>{isEn ? "Honor cancellation policies set by the Business Owner" : "Respetar las políticas de cancelación establecidas por el Propietario del Negocio"}</li>
              <li>{isEn ? "Pay any applicable deposits or service fees at the time of booking" : "Pagar los depósitos o tarifas de servicio aplicables al momento de reservar"}</li>
              <li>{isEn ? "Not misuse messaging features or the booking system" : "No hacer mal uso de las funciones de mensajería o del sistema de reservas"}</li>
              <li>{isEn ? "Direct service-related disputes to the Business Owner, not CitaBooking" : "Dirigir disputas relacionadas con servicios al Propietario del Negocio, no a CitaBooking"}</li>
            </ul>
          </section>

          {/* Section 9 - Payments and Deposits */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">
              {isEn ? "9) Payments and Deposits" : "9) Pagos y Depósitos"}
            </h2>
            <h3 className="text-lg font-semibold text-[var(--navy)] mb-2 mt-4">
              {isEn ? "Payment Processing" : "Procesamiento de Pagos"}
            </h3>
            <p className="text-[var(--slate)] leading-relaxed mb-3">
              {isEn
                ? "Payments are processed by third-party payment processors (such as Stripe). CitaBooking facilitates payment transactions but does not hold Client funds."
                : "Los pagos son procesados por procesadores de pago de terceros (como Stripe). CitaBooking facilita las transacciones de pago pero no retiene fondos de los Clientes."}
            </p>
            <p className="text-[var(--slate)] leading-relaxed mb-2">
              {isEn ? "CitaBooking:" : "CitaBooking:"}
            </p>
            <ul className="list-disc list-inside text-[var(--slate)] space-y-1 ml-4 mb-3">
              <li>{isEn ? "Does not hold client funds" : "No retiene fondos de clientes"}</li>
              <li>{isEn ? "Does not process chargebacks" : "No procesa contracargos"}</li>
              <li>{isEn ? "Is not responsible for payment processor errors" : "No es responsable por errores del procesador de pagos"}</li>
              <li>{isEn ? "Is not responsible for disputes between Business Owners and their Clients" : "No es responsable por disputas entre Propietarios de Negocios y sus Clientes"}</li>
            </ul>
            <p className="text-[var(--slate)] leading-relaxed mb-3">
              {isEn
                ? "All payment disputes are governed by the payment processor's terms and applicable card network rules."
                : "Todas las disputas de pago se rigen por los términos del procesador de pagos y las reglas de la red de tarjetas aplicables."}
            </p>
            <h3 className="text-lg font-semibold text-[var(--navy)] mb-2 mt-4">
              {isEn ? "Refunds" : "Reembolsos"}
            </h3>
            <p className="text-[var(--slate)] leading-relaxed mb-3">
              {isEn
                ? "Refund decisions are determined solely by the Business Owner according to their cancellation and deposit policies. Refund transactions, if approved, are processed by the applicable third-party payment processor."
                : "Las decisiones de reembolso son determinadas únicamente por el Propietario del Negocio de acuerdo con sus políticas de cancelación y depósitos. Las transacciones de reembolso, si son aprobadas, son procesadas por el procesador de pagos de terceros correspondiente."}
            </p>
            <p className="text-[var(--slate)] leading-relaxed mb-3">
              {isEn
                ? "CitaBooking does not issue refunds for services provided by Business Owners. Refund decisions, including whether funds are returned or credits are issued, are determined solely by the applicable Business Owner in accordance with their published policies."
                : "CitaBooking no emite reembolsos por servicios proporcionados por los Propietarios de Negocios. Las decisiones de reembolso, incluyendo si se devuelven fondos o se emiten créditos, son determinadas únicamente por el Propietario del Negocio de acuerdo con sus políticas publicadas."}
            </p>
            <h3 className="text-lg font-semibold text-[var(--navy)] mb-2 mt-4">
              {isEn ? "Subscriptions" : "Suscripciones"}
            </h3>
            <p className="text-[var(--slate)] leading-relaxed">
              {isEn
                ? "Subscriptions renew automatically unless canceled before the renewal date. You authorize recurring billing through your selected payment method. Promotional pricing may convert to standard pricing upon renewal. Failure to pay may result in suspension or termination of access."
                : "Las suscripciones se renuevan automáticamente a menos que se cancelen antes de la fecha de renovación. Usted autoriza la facturación recurrente a través de su método de pago seleccionado. Los precios promocionales pueden convertirse a precios estándar al renovarse. La falta de pago puede resultar en la suspensión o terminación del acceso."}
            </p>
          </section>

          {/* Section 10 - Credits */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">
              {isEn ? "10) Credits" : "10) Créditos"}
            </h2>
            <p className="text-[var(--slate)] leading-relaxed mb-3">
              {isEn
                ? "The Platform may support the issuance of credits, including:"
                : "La Plataforma puede soportar la emisión de créditos, incluyendo:"}
            </p>
            <ul className="list-disc list-inside text-[var(--slate)] space-y-1 ml-4 mb-3">
              <li><strong>{isEn ? "Cancellation Credits" : "Créditos por Cancelación"}</strong> — {isEn ? "Automatically issued per a Business Owner's cancellation policy" : "Emitidos automáticamente según la política de cancelación del Propietario del Negocio"}</li>
              <li><strong>{isEn ? "Loyalty Rewards" : "Recompensas de Lealtad"}</strong> — {isEn ? "Issued under an enabled loyalty program" : "Emitidas bajo un programa de lealtad habilitado"}</li>
              <li><strong>{isEn ? "Business Credits" : "Créditos del Negocio"}</strong> — {isEn ? "Discretionary credits granted by a Business Owner" : "Créditos discrecionales otorgados por un Propietario del Negocio"}</li>
              <li><strong>{isEn ? "Promotional Credits" : "Créditos Promocionales"}</strong> — {isEn ? "Offered during campaigns" : "Ofrecidos durante campañas"}</li>
              <li><strong>{isEn ? "Refund Credits" : "Créditos de Reembolso"}</strong> — {isEn ? "Issued in lieu of a monetary refund" : "Emitidos en lugar de un reembolso monetario"}</li>
            </ul>
            <p className="text-[var(--slate)] leading-relaxed mb-2">
              {isEn ? "Credits:" : "Los créditos:"}
            </p>
            <ul className="list-disc list-inside text-[var(--slate)] space-y-1 ml-4 mb-3">
              <li>{isEn ? "Are not cash" : "No son efectivo"}</li>
              <li>{isEn ? "Are not transferable" : "No son transferibles"}</li>
              <li>{isEn ? "May expire (commonly within 12 months)" : "Pueden expirar (comúnmente dentro de 12 meses)"}</li>
              <li>{isEn ? "Are governed by the Business Owner's policies" : "Se rigen por las políticas del Propietario del Negocio"}</li>
            </ul>
            <p className="text-[var(--slate)] leading-relaxed">
              {isEn
                ? "CitaBooking is not responsible for Business Owner credit decisions. Automated notifications are informational and based on system data at the time of sending."
                : "CitaBooking no es responsable por las decisiones de crédito del Propietario del Negocio. Las notificaciones automáticas son informativas y se basan en los datos del sistema al momento del envío."}
            </p>
          </section>

          {/* Section 11 - Messaging and Consent */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">
              {isEn ? "11) Messaging and Consent (Email/SMS/WhatsApp)" : "11) Mensajería y Consentimiento (Email/SMS/WhatsApp)"}
            </h2>
            <h3 className="text-lg font-semibold text-[var(--navy)] mb-2 mt-4">
              {isEn ? "Transactional Notifications" : "Notificaciones Transaccionales"}
            </h3>
            <p className="text-[var(--slate)] leading-relaxed mb-2">
              {isEn
                ? "The Platform may send transactional notifications including:"
                : "La Plataforma puede enviar notificaciones transaccionales incluyendo:"}
            </p>
            <ul className="list-disc list-inside text-[var(--slate)] space-y-1 ml-4 mb-3">
              <li>{isEn ? "Appointment confirmations" : "Confirmaciones de citas"}</li>
              <li>{isEn ? "Appointment reminders" : "Recordatorios de citas"}</li>
              <li>{isEn ? "Credit notifications" : "Notificaciones de créditos"}</li>
              <li>{isEn ? "Password resets" : "Restablecimiento de contraseñas"}</li>
              <li>{isEn ? "Billing notifications" : "Notificaciones de facturación"}</li>
            </ul>
            <h3 className="text-lg font-semibold text-[var(--navy)] mb-2 mt-4">
              {isEn ? "Consent" : "Consentimiento"}
            </h3>
            <p className="text-[var(--slate)] leading-relaxed mb-3">
              {isEn
                ? "Clients consent to receive appointment-related communications (confirmations, reminders, cancellation notices) when booking through the platform. Clients may opt out of non-essential marketing messages at any time."
                : "Los Clientes consienten recibir comunicaciones relacionadas con citas (confirmaciones, recordatorios, avisos de cancelación) al reservar a través de la plataforma. Los Clientes pueden optar por no recibir mensajes de marketing no esenciales en cualquier momento."}
            </p>
            <h3 className="text-lg font-semibold text-[var(--navy)] mb-2 mt-4">
              {isEn ? "Business Owner Obligations" : "Obligaciones del Propietario del Negocio"}
            </h3>
            <p className="text-[var(--slate)] leading-relaxed mb-2">
              {isEn
                ? "Business Owners are solely responsible for:"
                : "Los Propietarios de Negocios son los únicos responsables de:"}
            </p>
            <ul className="list-disc list-inside text-[var(--slate)] space-y-1 ml-4 mb-3">
              <li>{isEn ? "Obtaining proper SMS or messaging consent" : "Obtener el consentimiento adecuado de SMS o mensajería"}</li>
              <li>{isEn ? "Maintaining opt-in records" : "Mantener registros de consentimiento (opt-in)"}</li>
              <li>{isEn ? "Complying with TCPA, A2P 10DLC, and other applicable laws" : "Cumplir con TCPA, A2P 10DLC y otras leyes aplicables"}</li>
            </ul>
            <h3 className="text-lg font-semibold text-[var(--navy)] mb-2 mt-4">
              {isEn ? "Opt-Out" : "Exclusión"}
            </h3>
            <p className="text-[var(--slate)] leading-relaxed mb-3">
              {isEn
                ? "Users may opt out of SMS messages by replying STOP where applicable."
                : "Los usuarios pueden optar por no recibir mensajes SMS respondiendo STOP donde sea aplicable."}
            </p>
            <h3 className="text-lg font-semibold text-[var(--navy)] mb-2 mt-4">
              {isEn ? "Limitations" : "Limitaciones"}
            </h3>
            <p className="text-[var(--slate)] leading-relaxed">
              {isEn
                ? "Message delivery depends on third-party carriers and is not guaranteed. CitaBooking is not liable for undelivered messages or carrier filtering. You agree not to use the Service to send unlawful, spammy, or deceptive messages."
                : "La entrega de mensajes depende de operadores de terceros y no está garantizada. CitaBooking no es responsable por mensajes no entregados o filtrado por operadores. Usted acepta no usar el Servicio para enviar mensajes ilegales, spam o engañosos."}
            </p>
          </section>

          {/* Section 12 - Subscription, Fees, and Cancellation */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">
              {isEn ? "12) Subscription, Fees, and Cancellation" : "12) Suscripción, Tarifas y Cancelación"}
            </h2>
            <ul className="list-disc list-inside text-[var(--slate)] space-y-2 ml-4">
              <li>{isEn ? "Fees are described on the pricing page or inside the app." : "Las tarifas se describen en la página de precios o dentro de la aplicación."}</li>
              <li>{isEn ? "You may cancel anytime. Unless required by law, fees are non-refundable once billed." : "Puede cancelar en cualquier momento. A menos que la ley lo requiera, las tarifas no son reembolsables una vez facturadas."}</li>
              <li>{isEn ? "We may change pricing with notice." : "Podemos cambiar los precios con previo aviso."}</li>
            </ul>
          </section>

          {/* Section 13 - Acceptable Use */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">
              {isEn ? "13) Acceptable Use" : "13) Uso Aceptable"}
            </h2>
            <p className="text-[var(--slate)] leading-relaxed mb-3">
              {isEn ? "You agree not to:" : "Usted acepta no:"}
            </p>
            <ul className="list-disc list-inside text-[var(--slate)] space-y-1 ml-4">
              <li>{isEn ? "Violate laws or third-party rights" : "Violar leyes o derechos de terceros"}</li>
              <li>{isEn ? "Attempt to bypass security or access others' data" : "Intentar evadir la seguridad o acceder a datos de otros"}</li>
              <li>{isEn ? "Upload malware or harmful content" : "Subir malware o contenido dañino"}</li>
              <li>{isEn ? "Use the service to harass or threaten others" : "Usar el servicio para acosar o amenazar a otros"}</li>
            </ul>
          </section>

          {/* Section 14 - Intellectual Property & Data Ownership */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">
              {isEn ? "14) Intellectual Property & Data Ownership" : "14) Propiedad Intelectual y Propiedad de Datos"}
            </h2>
            <p className="text-[var(--slate)] leading-relaxed mb-3">
              {isEn
                ? "We own the Service and related IP. You retain ownership of content you upload, but grant us a license to host and process it to operate the Service."
                : "Nosotros somos dueños del Servicio y la propiedad intelectual relacionada. Usted retiene la propiedad del contenido que sube, pero nos otorga una licencia para alojarlo y procesarlo para operar el Servicio."}
            </p>
            <p className="text-[var(--slate)] leading-relaxed mb-2">
              {isEn
                ? "Business Owners retain ownership of their business data. CitaBooking retains ownership of:"
                : "Los Propietarios de Negocios retienen la propiedad de sus datos comerciales. CitaBooking retiene la propiedad de:"}
            </p>
            <ul className="list-disc list-inside text-[var(--slate)] space-y-1 ml-4 mb-3">
              <li>{isEn ? "Software" : "Software"}</li>
              <li>{isEn ? "Platform architecture" : "Arquitectura de la plataforma"}</li>
              <li>{isEn ? "Branding" : "Marca"}</li>
              <li>{isEn ? "Analytics models" : "Modelos de análisis"}</li>
            </ul>
            <p className="text-[var(--slate)] leading-relaxed">
              {isEn
                ? "We may use aggregated, anonymized data for system improvement."
                : "Podemos usar datos agregados y anonimizados para mejorar el sistema."}
            </p>
          </section>

          {/* Section 15 - Privacy */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">
              {isEn ? "15) Privacy" : "15) Privacidad"}
            </h2>
            <p className="text-[var(--slate)] leading-relaxed">
              {isEn ? "Our " : "Nuestra "}
              <Link href="/privacy" className="text-[var(--teal)] hover:underline">
                {isEn ? "Privacy Policy" : "Política de Privacidad"}
              </Link>
              {isEn ? " explains how we collect and use information." : " explica cómo recopilamos y usamos la información."}
            </p>
          </section>

          {/* Section 16 - Beta Features */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">
              {isEn ? "16) Beta Features" : "16) Funciones Beta"}
            </h2>
            <p className="text-[var(--slate)] leading-relaxed">
              {isEn
                ? "Certain features may be labeled beta or experimental. We make no guarantees regarding uninterrupted performance of beta features. Beta features may be modified or discontinued at any time without notice."
                : "Ciertas funciones pueden estar etiquetadas como beta o experimentales. No hacemos garantías respecto al rendimiento ininterrumpido de las funciones beta. Las funciones beta pueden ser modificadas o descontinuadas en cualquier momento sin previo aviso."}
            </p>
          </section>

          {/* Section 17 - Disclaimers */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">
              {isEn ? "17) Disclaimers" : "17) Descargos de Responsabilidad"}
            </h2>
            <p className="text-[var(--slate)] leading-relaxed mb-3">
              {isEn
                ? 'The Service is provided "as is" and "as available." We do not warrant uninterrupted or error-free operation. We disclaim all warranties, express or implied, including:'
                : 'El Servicio se proporciona "tal cual" y "según disponibilidad." No garantizamos operación ininterrumpida o libre de errores. Renunciamos a todas las garantías, expresas o implícitas, incluyendo:'}
            </p>
            <ul className="list-disc list-inside text-[var(--slate)] space-y-1 ml-4 mb-3">
              <li>{isEn ? "Merchantability" : "Comerciabilidad"}</li>
              <li>{isEn ? "Fitness for a particular purpose" : "Idoneidad para un propósito particular"}</li>
              <li>{isEn ? "Non-infringement" : "No infracción"}</li>
            </ul>
            <p className="text-[var(--slate)] leading-relaxed">
              {isEn
                ? "CitaBooking is not a tax advisor, accountant, or attorney. Reports are provided for convenience only."
                : "CitaBooking no es un asesor fiscal, contador o abogado. Los informes se proporcionan solo por conveniencia."}
            </p>
          </section>

          {/* Section 18 - Limitation of Liability */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">
              {isEn ? "18) Limitation of Liability" : "18) Limitación de Responsabilidad"}
            </h2>
            <p className="text-[var(--slate)] leading-relaxed mb-3">
              {isEn ? "To the maximum extent permitted by law:" : "En la máxima medida permitida por la ley:"}
            </p>
            <ul className="list-disc list-inside text-[var(--slate)] space-y-1 ml-4 mb-3">
              <li>{isEn ? "CitaBooking is not liable for indirect or consequential damages" : "CitaBooking no es responsable por daños indirectos o consecuentes"}</li>
              <li>{isEn ? "Our total liability is limited to the greater of $100 USD or the total amount paid by you in the 12 months preceding the claim" : "Nuestra responsabilidad total está limitada al mayor de $100 USD o el monto total pagado por usted en los 12 meses anteriores a la reclamación"}</li>
            </ul>
            <p className="text-[var(--slate)] leading-relaxed mb-2">
              {isEn ? "We are not liable for:" : "No somos responsables por:"}
            </p>
            <ul className="list-disc list-inside text-[var(--slate)] space-y-1 ml-4">
              <li>{isEn ? "Lost profits" : "Pérdida de ganancias"}</li>
              <li>{isEn ? "Lost revenue" : "Pérdida de ingresos"}</li>
              <li>{isEn ? "Business interruption" : "Interrupción del negocio"}</li>
              <li>{isEn ? "Indirect or consequential damages" : "Daños indirectos o consecuentes"}</li>
            </ul>
          </section>

          {/* Section 19 - Indemnification */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">
              {isEn ? "19) Indemnification" : "19) Indemnización"}
            </h2>
            <p className="text-[var(--slate)] leading-relaxed mb-3">
              {isEn
                ? "You agree to indemnify and hold harmless Zephyr Solution, LLC from claims arising from:"
                : "Usted acepta indemnizar y mantener libre de responsabilidad a Zephyr Solution, LLC de reclamaciones que surjan de:"}
            </p>
            <ul className="list-disc list-inside text-[var(--slate)] space-y-1 ml-4">
              <li>{isEn ? "Your use of the Service" : "Su uso del Servicio"}</li>
              <li>{isEn ? "Your services to Clients (if you are a Business Owner)" : "Sus servicios a Clientes (si es Propietario de Negocio)"}</li>
              <li>{isEn ? "Your policies, communications, or content" : "Sus políticas, comunicaciones o contenido"}</li>
              <li>{isEn ? "Your violation of law" : "Su violación de la ley"}</li>
              <li>{isEn ? "Your client disputes" : "Sus disputas con clientes"}</li>
            </ul>
          </section>

          {/* Section 20 - Dispute Resolution */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">
              {isEn ? "20) Dispute Resolution" : "20) Resolución de Disputas"}
            </h2>
            <p className="text-[var(--slate)] leading-relaxed mb-3">
              {isEn
                ? "Any dispute arising under these Terms shall be resolved through binding arbitration in the State of Florida. Small claims court actions are permitted where applicable."
                : "Cualquier disputa que surja bajo estos Términos será resuelta mediante arbitraje vinculante en el Estado de Florida. Se permiten acciones en tribunales de reclamaciones menores donde sea aplicable."}
            </p>
            <p className="text-[var(--slate)] leading-relaxed mb-2">
              {isEn ? "You waive the right to:" : "Usted renuncia al derecho de:"}
            </p>
            <ul className="list-disc list-inside text-[var(--slate)] space-y-1 ml-4">
              <li>{isEn ? "Participate in class actions" : "Participar en acciones colectivas"}</li>
              <li>{isEn ? "Trial by jury" : "Juicio por jurado"}</li>
            </ul>
          </section>

          {/* Section 21 - Termination */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">
              {isEn ? "21) Termination" : "21) Terminación"}
            </h2>
            <p className="text-[var(--slate)] leading-relaxed mb-3">
              {isEn
                ? "You may stop using the Service at any time."
                : "Puede dejar de usar el Servicio en cualquier momento."}
            </p>
            <p className="text-[var(--slate)] leading-relaxed mb-2">
              {isEn ? "We may suspend or terminate access for:" : "Podemos suspender o terminar el acceso por:"}
            </p>
            <ul className="list-disc list-inside text-[var(--slate)] space-y-1 ml-4 mb-3">
              <li>{isEn ? "Non-payment" : "Falta de pago"}</li>
              <li>{isEn ? "Violation of these Terms" : "Violación de estos Términos"}</li>
              <li>{isEn ? "Fraudulent or abusive conduct" : "Conducta fraudulenta o abusiva"}</li>
            </ul>
            <p className="text-[var(--slate)] leading-relaxed">
              {isEn
                ? "Upon termination, access may be revoked and data retention may be limited according to policy."
                : "Al terminar, el acceso puede ser revocado y la retención de datos puede ser limitada según la política."}
            </p>
          </section>

          {/* Section 22 - Changes to These Terms */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">
              {isEn ? "22) Changes to These Terms" : "22) Cambios a Estos Términos"}
            </h2>
            <p className="text-[var(--slate)] leading-relaxed">
              {isEn
                ? "We may update Terms and will post an updated effective date. Continued use means acceptance."
                : "Podemos actualizar los Términos y publicaremos una fecha de vigencia actualizada. El uso continuado significa aceptación."}
            </p>
          </section>

          {/* Section 23 - Language */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">
              {isEn ? "23) Language" : "23) Idioma"}
            </h2>
            <p className="text-[var(--slate)] leading-relaxed">
              {isEn
                ? "In the event of conflict between English and Spanish versions, the English version controls."
                : "En caso de conflicto entre las versiones en inglés y español, la versión en inglés prevalece."}
            </p>
          </section>

          {/* Section 24 - Governing Law */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">
              {isEn ? "24) Governing Law" : "24) Ley Aplicable"}
            </h2>
            <p className="text-[var(--slate)] leading-relaxed">
              {isEn
                ? "These Terms are governed by the laws of the State of Florida, excluding conflict of law principles. Venue shall be Florida."
                : "Estos Términos se rigen por las leyes del Estado de Florida, excluyendo los principios de conflicto de leyes. La jurisdicción será Florida."}
            </p>
          </section>

          {/* Section 25 - Contact */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">
              {isEn ? "25) Contact" : "25) Contacto"}
            </h2>
            <p className="text-[var(--slate)] leading-relaxed">
              {isEn ? "Support: " : "Soporte: "}
              <a href="mailto:support@citabooking.com" className="text-[var(--teal)] hover:underline">
                support@citabooking.com
              </a>
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
