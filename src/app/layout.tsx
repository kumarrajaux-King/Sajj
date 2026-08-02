import type { Metadata } from "next";
import { MotionController } from "@/components/motion-controller";
import "./globals.css";

// Hostinger replaces hashed Next.js assets on each deployment. Keeping the
// generated HTML in Next's long-lived route cache can leave it pointing at a
// CSS bundle from an older release, so always render HTML against this build.
export const dynamic = "force-dynamic";
export const revalidate = 0;

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
      <body><MotionController />{children}</body>
    </html>
  );
}
