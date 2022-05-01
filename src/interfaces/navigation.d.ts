type TNavLink = {
  id: string
  name: string
  icon: ({ color }: { color: string }) => JSX.Element
  link: string
  'data-testid': string
}
