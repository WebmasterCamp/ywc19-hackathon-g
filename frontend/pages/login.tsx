import LoadingScreen from '@/components/LoadingScreen'
import TextInput from '@/components/TextInput'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

const Login = () => {
  const [isLoading, setIsLoading] = useState<Boolean>(false)

  const router = useRouter()

  const loginHandle = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      router.push('/home')
    }, 1000)
  }

  return (
    <div className="h-screen grid grid-cols-2 bg-lightBlue">
      <LoadingScreen isLoading={isLoading} />
      <div className="bg-[#ACACAC] rounded-br-[5%] overflow-hidden relative">
        <div className="absolute left-1/2 font-mont -translate-x-1/2 bottom-10 z-10 text-white text-4xl font-semibold">
          ADVANCELANE
        </div>
        <img
          className="w-full h-screen object-cover"
          src="/images/login.png"
          alt="login-image"
          height={500}
          width={500}
        />
      </div>
      <div className="bg-lightBlue rounded-tl-md flex items-center">
        <div className="max-w-[500px] w-8/12 mx-auto">
          <div className="text-3xl font-semibold">ยินดีต้อนรับสู่,</div>
          <div className="text-5xl font-semibold text-primary -mt-1 mb-7 font-mont">
            ADVANCELANE
          </div>
          <div>
            <div className="mb-4">
              <TextInput type="text" placeholder="ชื่อผู้ใช้" />
            </div>
            <div className="mb-4">
              <TextInput type="password" placeholder="รหัสผ่าน" />
            </div>
          </div>
          <div className="text-center text-sm mb-7">
            <span className="text-gray-200">ยังไม่มีบัญชีใช่ไหม ?</span>
            <Link href="/register">
              <span className="underline ml-2 cursor-pointer">ลงทะเบียน</span>
            </Link>
          </div>
          <button
            onClick={loginHandle}
            className="w-full bg-primary rounded-xs text-white py-3 text-sm font-light"
          >
            เข้าสู่ระบบ
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
