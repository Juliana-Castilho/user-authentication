import type { Metadata } from "next";
import { AuthProvider } from "./contexts/AuthContexts";
import "./globals.css";

export const metadata: Metadata = {
  title: "User Authentication",
  description: "Entre para continuar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-zinc-200">
        <AuthProvider>
          <main>{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
