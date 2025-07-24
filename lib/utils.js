// Determine protocol based on environment
export const protocol =
  process.env.NODE_ENV === 'production' ? 'https' : 'http';

// Define root domain, with fallback for local dev
export const rootDomain =
  process.env.NEXT_PUBLIC_ROOT_DOMAIN || 'localhost:3000';
