import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DAY BY DAY | 유슈경 디자이너",
  description: "브랜드를 키워드로 키워 감성디자인 구현합니다.",
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
