import "./globals.css";

export const metadata = {
  title: "Sense+ | AI-Powered Health Insights",
  description:
    "Sense+ is an AI-powered health awareness app that helps you understand symptoms using images and prompts. Coming soon.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
