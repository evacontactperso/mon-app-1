import Header from "@/app/components/site/Header";
import Footer from "@/app/components/site/Footer";
import ScrollToTop from "@/app/components/site/ScrollToTop";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#0B0B0B]">
      <ScrollToTop />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
