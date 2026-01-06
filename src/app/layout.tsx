import type { Metadata } from "next";
import "./styles/global/globals.css";
import "./styles/global/background.css";

export const metadata: Metadata = {
  title: "Login UI",
  description: "login interface",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <main className="min-h-screen place-items-center relative">
          <div className="gradient-background__wrapper">
            <div className="gradient-background gradient-background__dark">
              <div className="gradient-background__shape gradient-background__shape--1"></div>
              <div className="gradient-background__shape gradient-background__shape--2"></div>
            </div>
            <div className="gradient-background__noise"></div>
          </div>
          <div className="relative">{children}</div>
        </main>
      </body>
    </html>
  );
}
