import Header from "@/app/components/site/Header";
import { LocaleProvider } from "@/app/lib/locale";

export default function AncienSiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <LocaleProvider>
      <Header />
      {children}
    </LocaleProvider>
  );
}
