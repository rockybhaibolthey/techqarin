import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Techqarin",
    template: "%s | Techqarin",
  },
  description:
    "Techqarin is a software company that builds custom websites and mobile applications tailored to your business needs. From idea to launch, we help you grow digitally.",

  keywords: [
    "Techqarin",
    "web development",
    "app development",
    "custom software",
    "website development company",
    "mobile app development",
    "startup tech solutions",
  ],

  authors: [{ name: "Techqarin Team" }],
  creator: "Techqarin",
  publisher: "Techqarin",

  metadataBase: new URL("https://techqarin.com"), // 🔁 replace with your real domain

  icons: {
    icon: "/images/techlogo.png",
    shortcut: "/images/techlogo.png",
    apple: "/images/techlogo.png",
  },

  openGraph: {
    title: "Techqarin | Build. Launch. Grow.",
    description:
      "We create modern websites and mobile apps tailored to your business. Turn your ideas into scalable digital products with Techqarin.",
    url: "https://techqarin.com", // 🔁 replace
    siteName: "Techqarin",
    images: [
      {
        url: "/images/techlogo.png", // 🔁 ideally use a banner image (1200x630)
        width: 1200,
        height: 630,
        alt: "Techqarin - Software Development Company",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Techqarin | Build. Launch. Grow.",
    description:
      "Custom websites and mobile apps built for your business growth.",
    images: ["/images/techlogo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  applicationName: "Techqarin",
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}