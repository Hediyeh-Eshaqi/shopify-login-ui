import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>
        <main className="min-h-screen place-items-center p-4">
          <div className="gradient-noise"></div>{" "}
          <div className="relative z-10 mt-[3%]"> {children} </div>
        </main>
      </body>
    </html>
  );
}
