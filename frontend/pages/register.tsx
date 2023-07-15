import TextInput from '@/components/TextInput'
import Link from 'next/link'
import { useState } from 'react'

type UserRegistering = {
  email: String
  username: String
  password: String
}

const Register = () => {
  const registerHandle = async (event: any) => {}

  return (
    <div className="h-screen grid grid-cols-2 bg-lightBlue">
      <div className="bg-[#ACACAC] rounded-br-[5%] overflow-hidden relative">
        <div className="absolute left-1/2 -translate-x-1/2 bottom-10 z-10 text-white text-4xl font-semibold">
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
          <div className="text-5xl font-semibold text-primary -mt-1 mb-7">
            ADVANCELANE
          </div>
          <form onSubmit={registerHandle}>
            <div>
              <div className="mb-4">
                <TextInput type="email" placeholder="อีเมล" />
              </div>
              <div className="mb-4">
                <TextInput type="text" placeholder="ชื่อผู้ใช้" />
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
                <span className="underline ml-2 cursor-pointer">
                  เข้าสู่ระบบ
                </span>
              </Link>
            </div>
            <input
              type="submit"
              className="w-full bg-primary rounded-xs text-white py-3 text-sm font-light"
              value="ลงทะเบียน"
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
