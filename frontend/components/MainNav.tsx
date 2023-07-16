import { getUserDetail } from '@/helper/user-helper'
import { useRouter } from 'next/router'

const MainNav = () => {
  const user = getUserDetail()
  const router = useRouter()
  return (
    <div className="flex items-center gap-5 mt-4 max-w-[1200px] mx-auto ">
      <img src="/logo.svg" className="h-[28px] ml-3 xl:ml-0"></img>
      <div className="flex-grow">
        {/* <div className="relative bg-gray-100 w-full flex py-4 px-4 rounded-xs h-[48px]">
          <div className="mr-3 w-5 flex items-center">
            <img src="/search.svg" alt="icons" />
          </div>
          <div className="flex items-center w-full">
            <input
              className="outline-none w-full bg-gray-100"
              type={'text'}
              placeholder={'ค้นหา'}
            />
          </div>
        </div> */}
      </div>
      {user ? (
        <div className="flex mr-3 xl:mr-0 ">
          <div className="bg-[#D9D9D9]  rounded-[100%] w-[48px] h-[48px]"></div>
          <div className="ml-2">
            <div>K. {user?.username || 'พัฒนา'}</div>
            <div className="text-sm text-[#9D9D9D]" style={{ marginTop: -2 }}>
              090-xxx-xxx
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => router.push('/login')}
          className=" bg-primary rounded-xs text-white py-3 text-sm font-light px-4 mr-3 xl:mr-0  "
        >
          เข้าสู่ระบบ / ลงทะเบียน
        </button>
      )}
    </div>
  )
}

export default MainNav
