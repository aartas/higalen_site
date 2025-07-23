import { NextResponse } from 'next/server';

export function middleware(req) {
  const hostname = req.headers.get('host') || '';
  const url = req.nextUrl.clone();

  // Extract subdomain (user1) from host
  const currentHost = hostname
    .replace('.localhost:3000', '') // local testing
    .replace('.example.com', '');   // production domain

  // Only rewrite if it's a tenant subdomain (not root/www)
  if (currentHost && currentHost !== 'www') {
    url.pathname = `/${currentHost}${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  // Root domain stays as is
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|favicon.ico).*)'],
};
 