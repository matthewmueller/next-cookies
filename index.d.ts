declare const cookies: (
  context: { req?: { headers: { cookie?: string } } }
) => Record<string, string | undefined>
export = cookies
