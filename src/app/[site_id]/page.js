export default function TenantHome({ params }) {
    return (
      <main className="p-6">
        <h1 className="text-2xl font-bold">Welcome to {params.tenant} tenant site!</h1>
      </main>
    );
  }