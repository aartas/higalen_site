import StoreProvider from "./StoreProvider";
import { WindowContextProvider } from "@/context/WindowContext";
import { ConfigProvider } from 'antd';
import configProviderTheme from "./configProviderTheme";
import "./globals.css";
import './common.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <WindowContextProvider>
          <ConfigProvider theme={configProviderTheme}>
            {children}
            </ConfigProvider>
          </WindowContextProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
