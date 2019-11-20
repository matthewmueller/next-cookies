import { CookieGetOptions } from 'universal-cookie'

declare const cookies: (
  context: { req?: { headers: { cookie?: string } } },
  options?: CookieGetOptions
) => Record<string, string | undefined>
export = cookies
