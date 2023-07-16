export const getUserDetail = () => {
  if (typeof window === 'undefined') return null
  const user = window?.localStorage?.getItem('user')
  return user ? JSON.parse(user) : null
}

export const saveUserDetail = (user: any) => {
  if (typeof window !== 'undefined')
    window?.localStorage?.setItem('user', JSON.stringify(user))
}

export const saveCourse = (object: any) => {
  if (typeof window !== 'undefined') {
    const newObject = { ...object, date: new Date(), completed: false }
    window?.localStorage?.setItem('course', JSON.stringify(newObject))
  }
}

export const getLatestCourse = () => {
  if (typeof window === 'undefined') return null
  const course = window?.localStorage?.getItem('course')
  return course ? JSON.parse(course) : null
}

export const completedLatestCourse = () => {
  if (typeof window !== 'undefined') {
    const course = window?.localStorage?.getItem('course')
    if (course) {
      const newCourse = { ...JSON.parse(course), completed: true }
      window?.localStorage?.setItem('course', JSON.stringify(newCourse))
    }
  }
}
