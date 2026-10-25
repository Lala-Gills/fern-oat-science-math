import { next } from '@vercel/edge';

export const config = {
  // This matcher ensures Vercel ignores your games, HTML, images, and CSS
  matcher: [
    '/((?!index.html|favicon.ico|.*\\.(?:html|js|css|png|jpg|jpeg|gif|svg|woff|woff2)).*)',
  ],
};

export default function middleware(request) {
  // Let static asset requests pass through straight to your games page
  return next();
}
