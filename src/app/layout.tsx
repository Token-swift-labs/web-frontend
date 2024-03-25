import Providers from "./providers";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

export const metadata = {
  title: "Token swift",
  description: "P2P loans",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body>
          {children}
          <Toaster />
        </body>
      </Providers>
    </html>
  );
}
