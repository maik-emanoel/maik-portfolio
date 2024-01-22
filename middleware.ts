import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  locales: ['en', 'pt'],
 
  defaultLocale: 'en',
  localeDetection: false
});
 
export const config = {
  matcher: ['/', '/(pt|en)/:path*']
};