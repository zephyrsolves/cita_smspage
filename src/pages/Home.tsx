import { useState } from "react";
import { Link } from "wouter";
import { Globe, ArrowRight, Shield, Instagram } from "lucide-react";
import { CitaBookingLogo } from "../components/CitaBookingLogo";

export default function Home() {
  const [lang, setLang] = useState<"en" | "es">("en");
  const isEn = lang === "en";

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <CitaBookingLogo className="h-10 w-auto" textColor="var(--navy, #0f172a)" />
          <button
            onClick={() => setLang(isEn ? "es" : "en")}
            className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors flex items-center gap-1 font-bold"
          >
            <Globe className="w-4 h-4" />
            {isEn ? "ES" : "EN"}
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center pt-32 pb-24 overflow-hidden min-h-[80vh]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-500/10 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-rose-500/5 blur-[120px]" />
          <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-teal-500/5 blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            {/* Coming Soon pill */}
            <div className="flex justify-center mb-8">
              <span className="inline-flex items-center gap-2 px-5 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-bold border border-indigo-100/50 shadow-sm">
                {isEn ? "Coming Soon" : "Pr\u00f3ximamente"}
              </span>
            </div>

            {/* Headline */}
            <div className="mb-8 space-y-1">
              {(isEn
                ? ["Your business.", "Your schedule.", "Your control."]
                : ["Tu negocio.", "Tu horario.", "Tu control."]
              ).map((line, i) => (
                <p
                  key={i}
                  className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0f172a] tracking-tight leading-[1.1]"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${i * 150}ms both`,
                  }}
                >
                  {line}
                </p>
              ))}
            </div>

            {/* Subheadline */}
            <p
              className="text-lg sm:text-xl text-zinc-500 max-w-xl mx-auto mb-12 leading-relaxed"
              style={{ animation: "fadeInUp 0.7s ease-out 450ms both" }}
            >
              {isEn
                ? "The all-in-one platform for independent service professionals. Launching soon."
                : "La plataforma todo-en-uno para profesionales de servicio independientes. Lanzamiento pr\u00f3ximo."}
            </p>

            {/* Email signup */}
            <div style={{ animation: "fadeInUp 0.7s ease-out 600ms both" }}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const input = form.querySelector("input") as HTMLInputElement;
                  if (input?.value) {
                    input.value = "";
                    input.placeholder = isEn ? "You're on the list!" : "\u00a1Est\u00e1s en la lista!";
                    setTimeout(() => {
                      input.placeholder = isEn ? "your@email.com" : "tu@email.com";
                    }, 3000);
                  }
                }}
                className="flex gap-2 max-w-md mx-auto"
              >
                <input
                  type="email"
                  placeholder={isEn ? "your@email.com" : "tu@email.com"}
                  className="flex-1 px-5 py-3 rounded-xl border border-zinc-200 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-sm"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-[#0f172a] text-white font-bold text-sm hover:bg-[#1e293b] transition-colors flex items-center gap-2 whitespace-nowrap"
                >
                  {isEn ? "Notify Me" : "Notif\u00edcame"}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
              <p className="text-xs text-zinc-400 mt-3">
                {isEn
                  ? "Be the first to know when we launch. No spam, ever."
                  : "S\u00e9 el primero en saber cuando lancemos. Sin spam, nunca."}
              </p>
            </div>

            {/* Social link */}
            <div className="mt-8" style={{ animation: "fadeInUp 0.7s ease-out 750ms both" }}>
              <a
                href="https://instagram.com/citabooking"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-500 hover:text-[#0f172a] transition-colors"
              >
                <Instagram className="w-5 h-5" />
                {isEn ? "Follow us on Instagram" : "S\u00edguenos en Instagram"}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="py-12 bg-zinc-50 border-y border-zinc-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white rounded-xl border border-zinc-200 shadow-sm">
              <Shield className="w-5 h-5 text-indigo-600" />
              <div className="text-left">
                <p className="text-[#0f172a] text-sm font-bold tracking-tight">
                  {isEn ? "Your Data is Protected" : "Tus Datos Est\u00e1n Protegidos"}
                </p>
                <p className="text-zinc-500 text-xs">
                  {isEn
                    ? "HTTPS encryption \u00b7 No data selling \u00b7 Stripe-secured payments"
                    : "Encriptaci\u00f3n HTTPS \u00b7 Sin venta de datos \u00b7 Pagos seguros con Stripe"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-zinc-100">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <Link href="/terms" className="text-zinc-500 hover:text-[#0f172a] text-sm font-medium transition-colors">
              {isEn ? "Terms of Service" : "T\u00e9rminos de Servicio"}
            </Link>
            <Link href="/privacy" className="text-zinc-500 hover:text-[#0f172a] text-sm font-medium transition-colors">
              {isEn ? "Privacy Policy" : "Pol\u00edtica de Privacidad"}
            </Link>
            <a href="mailto:support@citabooking.com" className="text-zinc-500 hover:text-[#0f172a] text-sm font-medium transition-colors">
              support@citabooking.com
            </a>
          </div>
          <div className="text-center">
            <p className="text-zinc-400 text-xs">
              &copy; {new Date().getFullYear()} Zephyr Solution, LLC. CitaBooking&trade; {isEn ? "is a product of Zephyr Solution, LLC." : "es un producto de Zephyr Solution, LLC."}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
