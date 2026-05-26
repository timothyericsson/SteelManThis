import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://steelmanthis.com"),
  title: "SteelManThis",
  description:
    "Drop any belief, decision, or worldview and let the crowd build the strongest fair case for it.",
  openGraph: {
    title: "SteelManThis",
    description:
      "Drop any belief, decision, or worldview and let the crowd build the strongest fair case for it.",
    url: "https://steelmanthis.com",
    siteName: "SteelManThis",
    images: [
      {
        url: "/steelman-fun-hero.jpg",
        width: 1536,
        height: 1024,
        alt: "Colorful cards moving through a playful argument lab"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "SteelManThis",
    description:
      "Drop any belief, decision, or worldview and let the crowd build the strongest fair case for it.",
    images: ["/steelman-fun-hero.jpg"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
