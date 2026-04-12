import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "김민지 | Designer Portfolio",
  description: "감각과 구조를 함께 고민하는 디자이너 김민지의 데모 포트폴리오",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
