import "../styles/globals.css";
import { Navigation } from "../components/Navigation";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <main>
        <body>
          <Navigation />
          {children}
        </body>
      </main>
    </html>
  );
}
