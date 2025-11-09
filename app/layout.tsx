import "./globals.css";
import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
import ClientLayout from "@/components/ClientLayout";

const kumbhSans = Kumbh_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Devjobs Web App",
  description: "Find your dream developer job",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={kumbhSans.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
