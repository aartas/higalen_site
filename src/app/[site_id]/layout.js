export default function TenantLayout({ children }) {
    return (
      <html lang="en">
        <body className="min-h-screen font-sans bg-gray-50 text-black">
          <header className="p-4 bg-white shadow">Public Tenant Layout</header>
          {children}
        </body>
      </html>
    );
  }
   