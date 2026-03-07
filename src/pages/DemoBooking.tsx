import { useState } from "react";
import { Link } from "wouter";
import { CitaBookingLogo } from "../components/CitaBookingLogo";
import { Calendar, Clock, User, Phone, Mail, ChevronDown, ShieldCheck, HelpCircle } from "lucide-react";

const SERVICES = [
  { name: "Wax Appointment", nameEs: "Cita de Depilaci\u00f3n", duration: "30 min", price: "$45" },
  { name: "Brow Wax", nameEs: "Depilaci\u00f3n de Cejas", duration: "15 min", price: "$20" },
  { name: "Full Face Wax", nameEs: "Depilaci\u00f3n Facial Completa", duration: "45 min", price: "$65" },
];

const TIME_SLOTS = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"];

export default function DemoBooking() {
  const [lang, setLang] = useState<"en" | "es">("en");
  const [selectedService, setSelectedService] = useState(0);
  const [selectedTime, setSelectedTime] = useState("");
  const t = (en: string, es: string) => (lang === "en" ? en : es);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Language toggle */}
      <div className="fixed top-4 right-4 z-50 flex gap-1 bg-white rounded-full shadow-md border p-1">
        <button
          onClick={() => setLang("en")}
          className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${lang === "en" ? "bg-[#0f172a] text-white" : "text-gray-500 hover:text-gray-800"}`}
        >
          EN
        </button>
        <button
          onClick={() => setLang("es")}
          className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${lang === "es" ? "bg-[#0f172a] text-white" : "text-gray-500 hover:text-gray-800"}`}
        >
          ES
        </button>
      </div>

      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <CitaBookingLogo className="h-8 w-auto" />
          </Link>
        </div>
      </header>

      {/* Demo label */}
      <div className="bg-[#0f172a] text-white text-center py-2.5 px-4">
        <p className="text-sm font-medium tracking-wide">
          {t(
            "Demo Booking Page \u2014 Example of a Business Public Page",
            "P\u00e1gina de Reservas Demo \u2014 Ejemplo de una P\u00e1gina P\u00fablica de Negocio"
          )}
        </p>
        <p className="text-xs text-gray-400 mt-0.5">
          {t(
            "This page demonstrates how clients book appointments and receive SMS notifications through CitaBooking.",
            "Esta p\u00e1gina demuestra c\u00f3mo los clientes reservan citas y reciben notificaciones SMS a trav\u00e9s de CitaBooking."
          )}
        </p>
      </div>

      <main className="max-w-2xl mx-auto px-4 py-8">
        {/* Business info */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[#0f172a] rounded-2xl mx-auto mb-3 flex items-center justify-center">
            <span className="text-white text-2xl font-bold">S</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Sample Beauty Studio</h1>
          <p className="text-gray-500 text-sm mt-1">
            {t("Professional waxing & skin care services", "Servicios profesionales de depilaci\u00f3n y cuidado de la piel")}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border p-6 space-y-6">
          {/* Service selection */}
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
              <ChevronDown className="h-4 w-4 text-gray-400" />
              {t("Select a Service", "Selecciona un Servicio")}
            </label>
            <div className="space-y-2">
              {SERVICES.map((service, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedService(i)}
                  className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all ${
                    selectedService === i
                      ? "border-[#0f172a] bg-[#0f172a]/5"
                      : "border-gray-100 hover:border-gray-200"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">{t(service.name, service.nameEs)}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{service.duration}</p>
                    </div>
                    <span className="font-semibold text-gray-900">{service.price}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Date picker */}
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
              <Calendar className="h-4 w-4 text-gray-400" />
              {t("Select a Date", "Selecciona una Fecha")}
            </label>
            <input
              type="date"
              defaultValue="2026-03-15"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0f172a]/20 focus:border-[#0f172a]"
            />
          </div>

          {/* Time picker */}
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
              <Clock className="h-4 w-4 text-gray-400" />
              {t("Select a Time", "Selecciona una Hora")}
            </label>
            <div className="grid grid-cols-4 gap-2">
              {TIME_SLOTS.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedTime === time
                      ? "bg-[#0f172a] text-white"
                      : "bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Client info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-700">
              {t("Your Information", "Tu Informaci\u00f3n")}
            </h3>

            {/* Full name */}
            <div>
              <label className="flex items-center gap-2 text-xs font-medium text-gray-500 mb-1.5">
                <User className="h-3.5 w-3.5" />
                {t("Full Name", "Nombre Completo")}
              </label>
              <input
                type="text"
                placeholder={t("Jane Smith", "Mar\u00eda Garc\u00eda")}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-gray-900 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0f172a]/20 focus:border-[#0f172a]"
              />
            </div>

            {/* Phone — required */}
            <div>
              <label className="flex items-center gap-2 text-xs font-medium text-gray-500 mb-1.5">
                <Phone className="h-3.5 w-3.5" />
                {t("Mobile Number", "N\u00famero de Celular")}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="(555) 123-4567"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-gray-900 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0f172a]/20 focus:border-[#0f172a]"
              />
              {/* SMS Consent — checkbox is the primary CTA */}
              <div className="mt-3 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-0.5 h-4 w-4 rounded border-blue-300 text-[#0f172a] focus:ring-[#0f172a]/20 shrink-0"
                  />
                  <div className="space-y-1">
                    <span className="text-sm font-medium text-gray-800 leading-relaxed">
                      {t(
                        "I agree to receive appointment notifications via SMS from this business.",
                        "Acepto recibir notificaciones de citas vía SMS de este negocio."
                      )}
                    </span>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {t(
                        "By checking this box, you agree to receive appointment-related SMS from this business via CitaBooking, including confirmations and reminders. Msg & data rates may apply. Message frequency varies. Reply STOP to opt out, HELP for help. Consent is not a condition of purchase.",
                        "Al marcar esta casilla, aceptas recibir SMS relacionados con citas de este negocio a través de CitaBooking, incluyendo confirmaciones y recordatorios. Pueden aplicarse tarifas de mensajes y datos. La frecuencia varía. Responde STOP para cancelar, HELP para ayuda. El consentimiento no es condición de compra."
                      )}
                    </p>
                  </div>
                </label>
              </div>
            </div>

            {/* Email — optional */}
            <div>
              <label className="flex items-center gap-2 text-xs font-medium text-gray-500 mb-1.5">
                <Mail className="h-3.5 w-3.5" />
                {t("Email", "Correo Electr\u00f3nico")}
                <span className="text-gray-400 text-[10px]">({t("Optional", "Opcional")})</span>
              </label>
              <input
                type="email"
                placeholder="jane@email.com"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-gray-900 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0f172a]/20 focus:border-[#0f172a]"
              />
            </div>
          </div>

          {/* Confirm button */}
          <button className="w-full bg-[#0f172a] text-white font-semibold py-3 rounded-xl hover:bg-[#1e293b] transition-colors">
            {t("Confirm Appointment", "Confirmar Cita")}
          </button>

          {/* Consent under button */}
          <p className="text-[11px] text-gray-400 text-center leading-relaxed">
            {t(
              "By clicking Confirm, you agree to our Terms of Service and Privacy Policy.",
              "Al hacer clic en Confirmar, aceptas nuestros Términos de Servicio y Política de Privacidad."
            )}
          </p>
        </div>

        {/* FAQ Section */}
        <div className="mt-8 bg-white rounded-2xl shadow-sm border p-6">
          <h3 className="text-sm font-semibold text-gray-700 mb-4 flex items-center gap-2">
            <HelpCircle className="h-4 w-4 text-gray-400" />
            {t("Frequently Asked Questions", "Preguntas Frecuentes")}
          </h3>
          <div className="space-y-4 text-sm">
            <div>
              <p className="font-medium text-gray-800">
                {t("What messages will I receive?", "\u00bfQu\u00e9 mensajes recibir\u00e9?")}
              </p>
              <p className="text-gray-500 mt-0.5">
                {t(
                  "Appointment confirmations and reminders only. No promotional messages.",
                  "Solo confirmaciones y recordatorios de citas. Sin mensajes promocionales."
                )}
              </p>
            </div>
            <div>
              <p className="font-medium text-gray-800">
                {t("How do I stop messages?", "\u00bfC\u00f3mo detengo los mensajes?")}
              </p>
              <p className="text-gray-500 mt-0.5">
                {t("Reply STOP to any message.", "Responde STOP a cualquier mensaje.")}
              </p>
            </div>
            <div>
              <p className="font-medium text-gray-800">
                {t("Who sends messages?", "\u00bfQui\u00e9n env\u00eda los mensajes?")}
              </p>
              <p className="text-gray-500 mt-0.5">
                {t(
                  "The business you booked with. CitaBooking provides the technology platform.",
                  "El negocio con el que reservaste. CitaBooking provee la plataforma tecnol\u00f3gica."
                )}
              </p>
            </div>
          </div>
        </div>

        {/* SMS Compliance summary */}
        <div className="mt-6 flex items-start gap-3 px-4 py-3 bg-green-50 rounded-xl border border-green-100">
          <ShieldCheck className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
          <div className="text-xs text-green-800 leading-relaxed">
            <p className="font-semibold mb-1">
              {t("SMS Compliance", "Cumplimiento SMS")}
            </p>
            <p>
              {t(
                "CitaBooking sends transactional messages only (appointment confirmations, reminders, and status updates). Messages are sent on behalf of the business the client booked with. All messages include opt-out instructions. We comply with TCPA, CTIA, and carrier guidelines.",
                "CitaBooking env\u00eda solo mensajes transaccionales (confirmaciones de citas, recordatorios y actualizaciones de estado). Los mensajes se env\u00edan en nombre del negocio con el que el cliente reserv\u00f3. Todos los mensajes incluyen instrucciones de cancelaci\u00f3n. Cumplimos con TCPA, CTIA y las directrices de los operadores."
              )}
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white mt-12">
        <div className="max-w-3xl mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <Link href="/terms" className="hover:text-gray-800 underline underline-offset-2">
                {t("Terms of Service", "T\u00e9rminos de Servicio")}
              </Link>
              <Link href="/privacy" className="hover:text-gray-800 underline underline-offset-2">
                {t("Privacy Policy", "Pol\u00edtica de Privacidad")}
              </Link>
            </div>
            <p className="text-xs text-gray-400">
              {t("Contact: ", "Contacto: ")}
              <a href="mailto:support@citabooking.com" className="underline">support@citabooking.com</a>
            </p>
          </div>
          <p className="text-center text-[11px] text-gray-300 mt-4">
            &copy; {new Date().getFullYear()} CitaBooking&trade; &mdash; {t("All rights reserved.", "Todos los derechos reservados.")}
          </p>
        </div>
      </footer>
    </div>
  );
}
