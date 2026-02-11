import "./globals.css";

export const metadata = {
  title: "Sense+",
  description:
    "Understand your health. Clearly..",
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
