import './globals.css'

export const metadata = {
  title: 'Custom Hook con Nextjs',
  description: 'Aplicacion de Ejemplo de Custom Hook en NextJs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
