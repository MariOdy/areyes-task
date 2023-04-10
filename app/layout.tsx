import localFont from "next/font/local";

import "./globals.css";

export const metadata = {
  title: "Areyes Test Task",
  description: "Test Task for the Areyes",
};

const PoetsenOne = localFont({
  src: "../public/fonts/PoetsenOne.ttf",
  display: "swap",
});

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => (
  <html lang="en" className={PoetsenOne.className}>
    <body>{children}</body>
  </html>
);

export default RootLayout;
