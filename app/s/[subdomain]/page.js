export default async function Page(props) {
  const params = await props.params; // ✅ await the params here
  const { subdomain, slug = [] } = params;

  return (
    <div>
      <h1>Subdomain: {subdomain}</h1>
    </div>
  );
}
