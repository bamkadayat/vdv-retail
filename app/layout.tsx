import type { Metadata } from "next";
import { Inter} from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VYVER Group",
  description: "VYVER Group",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.png" sizes="any" type="image/png" />
      </head>
      <body className={inter.className} style={{ backgroundColor:"#000000"}}>
        {children}
      </body>
    </html>
  );
}
