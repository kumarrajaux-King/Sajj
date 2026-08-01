import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sajj Consulting | IT & Digital Recruitment",
  description: "Specialist IT and digital recruitment for Australian teams that build.",
  metadataBase: new URL("https://sajj.com.au"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <body>{children}</body>
    </html>
  );
}
