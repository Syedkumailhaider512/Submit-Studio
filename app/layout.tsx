import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Submit Studio · Professional Academic & Design Support",
  description:
    "Assessments, posters, documentation, presentations, and final year project support, professionally prepared with zero AI and zero plagiarism.",
  keywords: [
    "academic support",
    "assessment help",
    "poster design",
    "final year project",
    "presentation",
    "documentation"
  ]
};

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
