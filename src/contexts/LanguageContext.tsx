import { createContext, useContext, useState, ReactNode } from "react";

type LanguageContextType = {
  language: "en" | "es";
  setLanguage: (lang: "en" | "es") => void;
};

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<"en" | "es">(() => {
    const saved = localStorage.getItem("sms_page_language");
    return saved === "es" ? "es" : "en";
  });

  const handleSetLanguage = (lang: "en" | "es") => {
    setLanguage(lang);
    localStorage.setItem("sms_page_language", lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
