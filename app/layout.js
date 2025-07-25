import StoreProvider from "./StoreProvider";
import { WindowContextProvider } from "@/context/WindowContext";
import "./globals.css";
import './common.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <WindowContextProvider>
            {children}
          </WindowContextProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
