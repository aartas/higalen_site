import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import configProviderTheme from '@/config/themeConfig';
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ConfigProvider theme={configProviderTheme}>
          <AntdRegistry>
            {children}
          </AntdRegistry>
        </ConfigProvider>
      </body>
    </html>
  );
}
