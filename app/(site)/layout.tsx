import Header from "@/app/components/site/Header";
import Footer from "@/app/components/site/Footer";
import ScrollToTop from "@/app/components/site/ScrollToTop";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip bg-white text-[#0B0B0B]">
      <ScrollToTop />
      <Header />
      <main className="min-w-0 flex-1 overflow-x-clip">{children}</main>
      <Footer />
    </div>
  );
}
