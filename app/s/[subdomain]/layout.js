import { notFound } from 'next/navigation';

const allowedSubdomains = ['rakesh', 'nikhil'];

export async function generateStaticParams() {
    return allowedSubdomains.map((subdomain) => ({ subdomain }));
}

export default async function Layout(props) {
    const params = await props.params;
    const children = await props.children;
    const { subdomain } = params;

    if (!allowedSubdomains.includes(subdomain)) {
        notFound();
    }

    return <div>{children}</div>;
}
