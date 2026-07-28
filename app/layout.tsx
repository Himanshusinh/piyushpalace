import type { Metadata } from "next";
import { Cinzel, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Piyush Palace | Royal Heritage Hotel, Resort & Luxury Weddings | Gujarat",
  description: "Experience royal luxury at Piyush Palace, a 7-acre palatial resort & grand wedding venue on the Ahmedabad-Kheda Highway, Gujarat. Grand banquet lawns for up to 5,000 guests, royal suites, and 5-star amenities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${plusJakartaSans.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#0B0C10] text-amber-50 font-sans selection:bg-amber-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
