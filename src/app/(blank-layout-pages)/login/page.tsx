// Next Imports
import type { Metadata } from 'next'

// Component Imports
import Login from '@views/Login'

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login to sssyour account'
}

const LoginPage = () => {
  return <Login />
}

export default LoginPage
