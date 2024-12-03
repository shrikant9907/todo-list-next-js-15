import localFont from "next/font/local";
import { Open_Sans } from "next/font/google"; // Import Open Sans from Google Fonts
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";

// Load local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Load Open Sans from Google Fonts
const openSans = Open_Sans({
  weight: ["400", "600", "700"],  // You can adjust the weights based on your needs
  subsets: ["latin"],
});

// Metadata for SEO
export const metadata = {
  title: "Todo App - Manage Your Tasks Efficiently",
  description: "A simple and elegant Todo App to manage your daily tasks effectively. Built with Next.js and Tailwind CSS.",
  keywords: "todo app, task management, next.js, tailwind css, productivity",
  author: "Shrikant Yadav",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  charset: "UTF-8",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="robots" content={metadata.robots} />
        <meta name="viewport" content={metadata.viewport} />
        <meta charSet={metadata.charset} />
        <title>{metadata.title}</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${openSans.className} antialiased flex flex-col h-screen`} // Add Open Sans here
      >
        {/* Main Layout */}
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <aside className="w-64 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4">
            <ul>
              <li className="py-2">Home</li>
              <li className="py-2">Tasks</li>
              <li className="py-2">Settings</li>
            </ul>
          </aside>

          <div className="flex-1 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
            {/* Header */}
            <Header />
            {/* Main Content */}
            <main className="min-h-screen overflow-hidden">{children}</main>
            {/* Footer */}
            <Footer />
          </div>
        </div>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
      </body>
    </html>
  );
}
