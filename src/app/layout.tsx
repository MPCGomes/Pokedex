import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Pokédex",
  description: "A Pokédex project built with Next.js, TypeScript, and Java Spring Boot, showcasing my skills in these technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
