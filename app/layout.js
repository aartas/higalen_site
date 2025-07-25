import "./globals.css";
import './common.css';
import StoreProvider from "./StoreProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <StoreProvider>
        {children}
        </StoreProvider>
      </body>
    </html>
  );
}
