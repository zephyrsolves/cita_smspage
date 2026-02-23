import { useLanguage } from "../contexts/LanguageContext";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function CookieNotice() {
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
          {isEn ? "Cookie Notice" : "Aviso de Cookies"}
        </h1>
        <p className="text-[var(--slate)] mb-8">
          {isEn ? "Last updated: February 11, 2026" : "Última actualización: 11 de febrero de 2026"}
        </p>

        <div className="prose prose-slate max-w-none space-y-8">
          {/* Intro */}
          <section>
            <p className="text-[var(--slate)] leading-relaxed mb-4">
              {isEn
                ? "CitaBooking uses cookies and similar technologies to:"
                : "CitaBooking usa cookies y tecnologías similares para:"}
            </p>
            <ul className="list-disc list-inside text-[var(--slate)] space-y-2 ml-4">
              <li>{isEn ? "keep you signed in" : "mantenerlo conectado"}</li>
              <li>{isEn ? "remember preferences (e.g., language)" : "recordar preferencias (ej., idioma)"}</li>
              <li>{isEn ? "measure site performance and improve the product" : "medir el rendimiento del sitio y mejorar el producto"}</li>
            </ul>
          </section>

          {/* Types of cookies */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--navy)] mb-4">
              {isEn ? "Types of Cookies We May Use" : "Tipos de Cookies que Podemos Usar"}
            </h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-[var(--navy)] mb-2">{isEn ? "Essential Cookies" : "Cookies Esenciales"}</h3>
                <p className="text-[var(--slate)] text-sm">{isEn ? "Required for the site to function (login, security). These cannot be disabled." : "Requeridas para que el sitio funcione (inicio de sesión, seguridad). Estas no se pueden desactivar."}</p>
                <span className="inline-block mt-2 text-xs font-medium text-[var(--teal)] bg-teal-50 px-2 py-1 rounded">{isEn ? "Always active" : "Siempre activas"}</span>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-[var(--navy)] mb-2">{isEn ? "Analytics Cookies" : "Cookies de Análisis"}</h3>
                <p className="text-[var(--slate)] text-sm">{isEn ? "Help us understand how visitors use the site so we can improve it." : "Nos ayudan a entender cómo los visitantes usan el sitio para poder mejorarlo."}</p>
                <span className="inline-block mt-2 text-xs font-medium text-[var(--slate)] bg-gray-100 px-2 py-1 rounded">{isEn ? "Optional" : "Opcional"}</span>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-[var(--navy)] mb-2">{isEn ? "Preference Cookies" : "Cookies de Preferencias"}</h3>
                <p className="text-[var(--slate)] text-sm">{isEn ? "Remember settings like language and display preferences." : "Recuerdan configuraciones como idioma y preferencias de visualización."}</p>
                <span className="inline-block mt-2 text-xs font-medium text-[var(--slate)] bg-gray-100 px-2 py-1 rounded">{isEn ? "Optional" : "Opcional"}</span>
              </div>
            </div>
          </section>

          {/* Your choices */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--navy)] mb-4">{isEn ? "Your Choices" : "Sus Opciones"}</h2>
            <p className="text-[var(--slate)] leading-relaxed mb-3">{isEn ? "You can control cookies through:" : "Puede controlar las cookies a través de:"}</p>
            <ul className="list-disc list-inside text-[var(--slate)] space-y-2 ml-4">
              <li>{isEn ? "the cookie banner preferences (where available)" : "las preferencias del banner de cookies (donde esté disponible)"}</li>
              <li>{isEn ? "your browser settings" : "la configuración de su navegador"}</li>
            </ul>
            <p className="text-[var(--slate)] leading-relaxed mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
              <strong>{isEn ? "Note:" : "Nota:"}</strong>{" "}
              {isEn ? "Disabling some cookies may affect functionality." : "Desactivar algunas cookies puede afectar la funcionalidad."}
            </p>
          </section>

          {/* More info */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--navy)] mb-4">{isEn ? "More Information" : "Más Información"}</h2>
            <p className="text-[var(--slate)] leading-relaxed">
              {isEn ? "For more details about how we handle your data, see our " : "Para más detalles sobre cómo manejamos sus datos, vea nuestra "}
              <Link href="/privacy" className="text-[var(--teal)] hover:underline">{isEn ? "Privacy Policy" : "Política de Privacidad"}</Link>.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-xl font-semibold text-[var(--navy)] mb-4">{isEn ? "Contact" : "Contacto"}</h2>
            <p className="text-[var(--slate)] leading-relaxed">
              {isEn ? "Questions about cookies? " : "¿Preguntas sobre cookies? "}
              <a href="mailto:privacy@citabooking.com" className="text-[var(--teal)] hover:underline">privacy@citabooking.com</a>
            </p>
          </section>
        </div>

        {/* Back to home */}
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
