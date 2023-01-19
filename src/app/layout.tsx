import "./globals.css";

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="flex flex-col justify-center p-20">
        <h1 className="text-3xl font-bold underline">Nextjs Template</h1>
        <main>{children}</main>
      </body>
    </html>
  );
}
