import { useLanguage } from "../contexts/LanguageContext";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function MessagingPolicy() {
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
          {isEn ? "Messaging Policy (SMS)" : "Política de Mensajería (SMS)"}
        </h1>
        <p className="text-[var(--slate)] mb-8">
          {isEn ? "Last updated: March 7, 2026" : "Última actualización: 7 de marzo de 2026"}
        </p>

        <div className="prose prose-slate max-w-none space-y-8">
          {/* Intro */}
          <section>
            <p className="text-[var(--slate)] leading-relaxed">
              {isEn
                ? 'This Messaging Policy explains how CitaBooking ("we", "us") supports SMS notifications between service businesses and their clients. CitaBooking is a scheduling and deposit management system used by independent service providers.'
                : 'Esta Política de Mensajería explica cómo CitaBooking ("nosotros", "nos") soporta notificaciones SMS entre negocios de servicios y sus clientes. CitaBooking es un sistema de programación y gestión de depósitos utilizado por proveedores de servicios independientes.'}
            </p>
          </section>

          {/* Message Program Description */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">
              {isEn ? "Message Program Description" : "Descripción del Programa de Mensajes"}
            </h2>
            <p className="text-[var(--slate)] leading-relaxed">
              {isEn
                ? "When SMS is enabled by a business using CitaBooking, clients may receive text messages related to their appointments and transactions, such as booking confirmations, reminders, reschedules, cancellations, and payment-related notifications."
                : "Cuando un negocio habilita SMS a través de CitaBooking, los clientes pueden recibir mensajes de texto relacionados con sus citas y transacciones, como confirmaciones de reservas, recordatorios, reprogramaciones, cancelaciones y notificaciones relacionadas con pagos."}
            </p>
          </section>

          {/* Opt-In */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">
              {isEn ? "Opt-In" : "Consentimiento (Opt-In)"}
            </h2>
            <ul className="list-disc list-inside text-[var(--slate)] space-y-3 ml-4">
              <li>
                <strong>{isEn ? "Business Owners:" : "Propietarios de Negocios:"}</strong>{" "}
                {isEn
                  ? "A business owner opts in by enabling SMS features within their CitaBooking account settings and providing an authorized phone number."
                  : "Un propietario de negocio acepta al habilitar las funciones de SMS en la configuración de su cuenta CitaBooking y proporcionar un número de teléfono autorizado."}
              </li>
              <li>
                <strong>{isEn ? "Clients:" : "Clientes:"}</strong>{" "}
                {isEn
                  ? "Clients opt in by checking a required SMS consent checkbox during the booking process. The checkbox states: \"I agree to receive appointment notifications via SMS from this business.\" The checkbox is unchecked by default and must be actively selected by the client. Consent is not a condition of booking or purchase."
                  : "Los clientes aceptan al marcar una casilla obligatoria de consentimiento SMS durante el proceso de reserva. La casilla indica: \"Acepto recibir notificaciones de citas vía SMS de este negocio.\" La casilla está desmarcada por defecto y debe ser seleccionada activamente por el cliente. El consentimiento no es condición para reservar o comprar."}
              </li>
            </ul>
            <p className="text-[var(--slate)] leading-relaxed mt-3">
              {isEn
                ? "The opt-in message displayed to clients reads: \"By checking this box, you agree to receive appointment-related SMS from this business via CitaBooking, including confirmations and reminders. Msg & data rates may apply. Message frequency varies. Reply STOP to opt out, HELP for help. Consent is not a condition of purchase.\""
                : "El mensaje de consentimiento mostrado a los clientes dice: \"Al marcar esta casilla, aceptas recibir SMS relacionados con citas de este negocio a través de CitaBooking, incluyendo confirmaciones y recordatorios. Pueden aplicarse tarifas de mensajes y datos. La frecuencia varía. Responde STOP para cancelar, HELP para ayuda. El consentimiento no es condición de compra.\""}
            </p>
          </section>

          {/* Message Frequency */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">
              {isEn ? "Message Frequency" : "Frecuencia de Mensajes"}
            </h2>
            <p className="text-[var(--slate)] leading-relaxed">
              {isEn
                ? "Message frequency varies based on appointment activity and business settings. Typical usage is 0–4 messages per appointment (e.g., confirmation + reminders + updates)."
                : "La frecuencia de mensajes varía según la actividad de citas y la configuración del negocio. El uso típico es de 0 a 4 mensajes por cita (ej. confirmación + recordatorios + actualizaciones)."}
            </p>
          </section>

          {/* Fees */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">
              {isEn ? "Fees" : "Tarifas"}
            </h2>
            <p className="text-[var(--slate)] leading-relaxed">
              {isEn
                ? "Message and data rates may apply. Carriers are not liable for delayed or undelivered messages."
                : "Pueden aplicarse tarifas de mensajes y datos. Los operadores no son responsables por mensajes retrasados o no entregados."}
            </p>
          </section>

          {/* Opt-Out / STOP */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">
              {isEn ? "Opt-Out / STOP" : "Cancelación / STOP"}
            </h2>
            <p className="text-[var(--slate)] leading-relaxed">
              {isEn
                ? "You may opt out at any time by replying STOP. After opting out, you will no longer receive SMS messages from that messaging program unless you opt in again."
                : "Puede cancelar en cualquier momento respondiendo STOP. Después de cancelar, no recibirá más mensajes SMS de ese programa de mensajería a menos que vuelva a aceptar."}
            </p>
          </section>

          {/* Help / Support */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">
              {isEn ? "Help / Support" : "Ayuda / Soporte"}
            </h2>
            <p className="text-[var(--slate)] leading-relaxed">
              {isEn ? "For help, reply " : "Para ayuda, responda "}
              <strong>HELP</strong>
              {isEn ? " or contact us at " : " o contáctenos en "}
              <a href="mailto:support@citabooking.com" className="text-[var(--teal)] hover:underline">
                support@citabooking.com
              </a>.
            </p>
          </section>

          {/* Privacy & Terms */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--navy)] mb-3">
              {isEn ? "Privacy & Terms" : "Privacidad y Términos"}
            </h2>
            <ul className="list-disc list-inside text-[var(--slate)] space-y-2 ml-4">
              <li>
                <Link href="/privacy" className="text-[var(--teal)] hover:underline">
                  {isEn ? "Privacy Policy" : "Política de Privacidad"}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-[var(--teal)] hover:underline">
                  {isEn ? "Terms of Service" : "Términos de Servicio"}
                </Link>
              </li>
            </ul>
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
