import TextInput from '@/components/TextInput'

export default function Main() {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex items-center gap-5 mt-4 ">
        <img src="/logo.svg" className="h-[28px]"></img>
        <div className="flex-grow">
          <div className="relative bg-gray-100 w-full flex py-4 px-4 rounded-xs h-[48px]">
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
          </div>
        </div>
        <div className="flex">
          <div className="bg-[#D9D9D9] rounded w-[48px] h-[48px]"></div>
          <div className="ml-2">
            <div>K. ณัฐมน เลิศสุนทร</div>
            <div className="text-sm text-[#9D9D9D]" style={{ marginTop: -2 }}>
              090-xxx-xxx
            </div>
          </div>
        </div>
      </div>
      <div className="text-[40px] font-semibold mt-4 text-center">
        สวัสดี, <span className="text-primary">คุณณัฐมน</span>
      </div>
      <div className="text-lg text-center ">หางานและคอร์สที่ใช่สำหรับคุณ !</div>
      <img src="/banner.svg" className="mt-6"></img>
      <div className="flex">
        <div className="bg-primary w-[48px] h-[48px]"></div>
        <div className="text-2xl">คอร์สที่แนะนำสำหรับคุณ</div>
      </div>
    </div>
  )
}
