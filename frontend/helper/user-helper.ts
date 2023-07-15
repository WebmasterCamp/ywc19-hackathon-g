export const getUserDetail = () => {
  if (typeof window === 'undefined') return null
  const user = window?.localStorage?.getItem('user')
  return user ? JSON.parse(user) : null
}

export const saveUserDetail = (user: any) => {
  if (typeof window !== 'undefined')
    window?.localStorage?.setItem('user', JSON.stringify(user))
}
