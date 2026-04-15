import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Nunito_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Stein\'s Electrical | Licensed Electrician Sydney',
  description: 'Stein\'s Electrical offers professional, safe and neat electrical services in Sydney. 5.0 Star rated, 24/7 Emergency services available. Call 0426 254 273.',
  openGraph: {
    "title": "Stein's Electrical | Licensed Electrician Sydney",
    "description": "Top-rated electrician in Wattle Grove, NSW. 24/7 Emergency support.",
    "siteName": "Stein's Electrical"
  },
};

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${nunitoSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
