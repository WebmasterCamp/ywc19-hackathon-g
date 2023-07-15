import type { ReactNode } from 'react'

export const metadata = {
  title: 'Hello World',
}

interface Props {
  children: ReactNode
}

const Layout = async (props: Props) => {
  const { children } = props

  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}

export default Layout
  