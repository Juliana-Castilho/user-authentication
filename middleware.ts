import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('nextauth-token')?.value;
  console.log('Middleware executado. Token:', token);

  if (!token) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/((?!api|_next|static|favicon.ico).*)',
};
