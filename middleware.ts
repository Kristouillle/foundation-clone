
import { middleware as paraglide } from "@/lib/i18n"
export function middleware(request) {
  return paraglide(request);
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
