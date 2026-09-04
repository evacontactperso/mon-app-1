import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Source_Sans_3, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SupabaseProvider } from "../components/SupabaseProvider";

const fontHeading = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const fontBody = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "L'Atelier des Méthodes — Méthode de travail pour collégiens et lycéens",
    template: "%s | L'Atelier des Méthodes",
  },
  description:
    "Aider les collégiens et lycéens à se concentrer, s'organiser, faire leurs devoirs, réviser efficacement et gagner en autonomie — pour les familles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${fontHeading.variable} ${fontBody.variable} ${geistMono.variable} antialiased`}
      >
        <SupabaseProvider>{children}</SupabaseProvider>
      </body>
    </html>
  );
}
