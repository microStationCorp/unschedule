import AppBar from "@/components/appbar";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <AppBar/>
        <div className="pl-2 flex-auto">{children}</div>
      </body>
    </html>
  );
}
