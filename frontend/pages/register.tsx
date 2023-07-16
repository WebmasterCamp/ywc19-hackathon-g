import LoadingScreen from '@/components/LoadingScreen'
import TextInput from '@/components/TextInput'
import { saveUserDetail } from '@/helper/user-helper'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

type UserRegistering = {
  email: String
  username: String
  password: String
}

const Register = () => {
  const [isLoading, setIsLoading] = useState<Boolean>(false)

  const router = useRouter()
  const [username, setUsername] = useState<string>('')

  const registerHandle = async (event: any) => {
    setIsLoading(true)
    saveUserDetail({ username })
    setTimeout(async () => {
      await router.push('/registering')
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="flex bg-lightBlue min-h-screen">
      <LoadingScreen isLoading={isLoading} />

      <img
        className=" h-screen  object-cover rounded-br-[10%] hidden lg:block"
        src="/auth.png"
        alt="login-image"
      />
      <div className="bg-lightBlue rounded-tl-md flex items-center w-full px-4">
        <div className=" mx-auto">
          <div className="flex items-center mb-5 gap-4">
            <div className="text-[28px] lg:text-[40px] font-semibold">
              ยินดีต้อนรับสู่,
            </div>
            <img
              src="/logo-primary.svg"
              className="w-[100px] lg:w-[177px]"
            ></img>
          </div>
          {/* <form onSubmit={registerHandle}> */}
          <div>
            <div className="mb-4">
              <TextInput type="email" placeholder="อีเมล" />
            </div>
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
            <div className="mb-4">
              <TextInput type="password" placeholder="ยืนยันรหัสผ่าน" />
            </div>
          </div>
          <div className="text-center text-sm mb-7">
            <span className="text-gray-200">มีบัญชีแล้วใช่ไหม ?</span>
            <Link href="/login">
              <span className="underline ml-2 cursor-pointer">เข้าสู่ระบบ</span>
            </Link>
          </div>
          <input
            type="submit"
            className="w-full bg-primary rounded-xs text-white py-3 text-sm font-light"
            value="ลงทะเบียน"
            onClick={registerHandle}
          />
          {/* </form> */}
        </div>
      </div>
    </div>
  )
}

export default Register
