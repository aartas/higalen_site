import { notFound } from 'next/navigation';

const allowedSubdomains = ['rakesh', 'nikhil'];

export default async function Page({ params }) {
  const { subdomain, slug = [] } = params;

  // ❌ Redirect to 404 if subdomain is not in allowed list
  if (!allowedSubdomains.includes(subdomain)) {
    notFound();
  }

  return (
    <div>
      <h1>Subdomain: {subdomain}</h1>
    </div>
  );
}
