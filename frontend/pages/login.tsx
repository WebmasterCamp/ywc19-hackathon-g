import LoadingScreen from '@/components/LoadingScreen'
import TextInput from '@/components/TextInput'
import { saveUserDetail } from '@/helper/user-helper'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

const Login = () => {
  const [isLoading, setIsLoading] = useState<Boolean>(false)

  const router = useRouter()
  const [username, setUsername] = useState<string>('')
  const loginHandle = () => {
    setIsLoading(true)
    saveUserDetail({ username })
    setTimeout(async () => {
      await router.push('/')
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div>
      <LoadingScreen isLoading={isLoading} />
      <div className="min-h-screen flex bg-lightBlue">
        <img
          className=" h-screen object-cover rounded-br-[10%] hidden lg:block"
          src="/auth.png"
          alt="login-image"
        />
        <div className="bg-lightBlue rounded-tl-md flex items-center w-full">
          <div className=" mb-5 gap-4 mx-auto">
            <div className="flex items-center mb-5 gap-4">
              <div className="text-[28px] lg:text-[40px] font-semibold">
                ยินดีต้อนรับสู่,
              </div>
              <img
                src="/logo-primary.svg"
                className="w-[100px] lg:w-[177px]"
              ></img>
            </div>
            <div>
              <div className="mb-4">
                <TextInput
                  type="text"
                  placeholder="ชื่อผู้ใช้"
                  onChange={(val) => {
                    setUsername(val)
                  }}
                />
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
    </div>
  )
}

export default Login
