import { Route, Switch } from "wouter";
import { LanguageProvider } from "./contexts/LanguageContext";
import Home from "./pages/Home";
import DemoBooking from "./pages/DemoBooking";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookieNotice from "./pages/CookieNotice";

export default function App() {
  return (
    <LanguageProvider>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/demo-booking" component={DemoBooking} />
        <Route path="/terms" component={TermsOfService} />
        <Route path="/privacy" component={PrivacyPolicy} />
        <Route path="/cookies" component={CookieNotice} />
        <Route>
          <div className="min-h-screen flex items-center justify-center">
            <p className="text-gray-500">Page not found</p>
          </div>
        </Route>
      </Switch>
    </LanguageProvider>
  );
}
