import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import Provider from "./provider";
import "./globals.css";
import ThemeSwitcher from "./theme-switcher";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Tic Tac Toe",
  description: "A simple tic tac toe game",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Provider>
        <body className={`${GeistSans.className} dark:bg-black bg-slate-50`}>
          {children}
          <ThemeSwitcher />
          <Toaster position="top-center" />
        </body>
      </Provider>
    </html>
  );
}
