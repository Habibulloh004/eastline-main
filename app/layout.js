import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import { Toaster } from "react-hot-toast";
import NextTopLoader from "nextjs-toploader";
import ChatBot from "@/components/shared/chat-bot";
import { EdgeStoreProvider } from "@/lib/edgestore";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EAST LINE",
  description: "EAST LINE TELEKOM", // Consider adding a more descriptive and keyword-rich meta description
  // Additional Open Graph and Twitter meta tags (optional)

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen relative flex flex-col`}
      >
        {/* <EdgeStoreProvider> */}
        <NextTopLoader
          color="hsl(210 40% 96.1%)"
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
          template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
          zIndex={999999999}
          showAtBottom={false}
        />
        <Header />
        <div className="grow">{children}</div>
        <Footer />
        {/* <ChatBot /> */}
        <Toaster position="bottom-right" reverseOrder={false} />
        {/* </EdgeStoreProvider> */}
      </body>
    </html>
  );
}
