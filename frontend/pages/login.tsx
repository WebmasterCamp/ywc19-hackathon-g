import TextInput from '@/components/TextInput'
import Link from 'next/link'

const Login = () => {
  return (
    <div className="h-screen grid grid-cols-2 bg-lightBlue">
      <div className="bg-[#ACACAC] rounded-br-[5%] overflow-hidden">
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
          <Link href="/home">
            <button className="w-full bg-primary rounded-xs text-white py-3 text-sm font-light">
              เข้าสู่ระบบ
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
