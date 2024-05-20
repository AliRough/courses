import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const orginalPath: string = request.nextUrl.href;
  // console.log(orginalPath);

  const newPath: string = ConvertUrlToStandard(orginalPath);
  let isToken: boolean = request.cookies.has('Authorization');

  /* 
     Because pages with uppercase letters result in a 404 error, to prevent this error,
     the addresses are converted to lowercase and redirected.
     با توجه به اینکه صفحه‌ها با حروف بزرگ منجر به خطای 404 می‌شوند، برای جلوگیری
     از این خطا، آدرس‌ها را به حروف کوچک تبدیل کرده و ریدایرکت میکنیم.
   */
  return;
  if (orginalPath.includes('/profile')) {
    let token = request.cookies.get('Authorization');
    if (!token) {
      return NextResponse.redirect(new URL(`/auth/login`, request.url));
    }
  }
  return;
  if (
    request.nextUrl.pathname !== '/auth/login' &&
    !isToken &&
    orginalPath.includes('/profile')
  ) {
    const path = request.nextUrl.pathname.replaceAll('/', '$slash$');
    let search = request.nextUrl.search;
    if (request.nextUrl.pathname !== '/') {
      search = search
        ? `${search}&redirect=${path}`
        : `?redirect=${path + search}`;
    }
    return NextResponse.redirect(new URL(`/auth/login${search}`, request.url));
  }
  return;
  if (newPath !== orginalPath) {
    return NextResponse.redirect(new URL(newPath));
  }

  /*
    If the token is present and the next URL pathname is "/login"
    در صورتی که توکن وجود دارد و مسیر آدرس لاگین بود
   */
  if (request.nextUrl.pathname === '/auth/login' && isToken) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  /* 
  If the token is not present and the next URL pathname is not "/login"
  در صورتی که توکن وجود ندارد و مسیر آدرس لاگین نبود
  */
  if (request.nextUrl.pathname !== '/login' && !isToken) {
    const path = request.nextUrl.pathname.replaceAll('/', '$slash$');
    let search = request.nextUrl.search;
    if (request.nextUrl.pathname !== '/') {
      search = search
        ? `${search}&redirect=${path}`
        : `?redirect=${path + search}`;
    }
    return NextResponse.redirect(new URL(`/login${search}`, request.url));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - __nextjs_original-stack-frame
     * - _next/image (image optimization files)
     * - /image (image files)
     * - /svg (svg files)
     * - /font (font files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|_next/|font|image|svg|__nextjs_original-stack-frame|favicon.ico).*)',
  ],
};

/**
 * Converting Persian and Arabic numerals to English in URLs
 * تبدیل عداد فارسی و عربی به انگلیسی در آدرس
 */
function ConvertUrlToStandard(orginalPath: string): string {
  const p2e: any = (s: any) =>
    s.replace(/[۰-۹]/g, (d: any) => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));
  const a2e: any = (s: any) =>
    s.replace(/[٠-٩]/g, (d: any) => '٠١٢٣٤٥٦٧٨٩'.indexOf(d));
  const path = decodeURI(orginalPath);

  const newPath = p2e(a2e(path));
  return newPath.toLowerCase();
}
