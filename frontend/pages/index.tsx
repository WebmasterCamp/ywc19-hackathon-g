import { CourseCard } from '@/components/CourseCard'
import TextInput from '@/components/TextInput'
import { courses } from '@/constant/courses'
import { getUserDetail } from '@/helper/user-helper'

export default function Main() {
  return (
    <div>
      <div className="max-w-[1200px] mx-auto">
        <div className="text-[40px] font-semibold mt-4 text-center">
          สวัสดี,{' '}
          <span className="text-primary">
            คุณ{getUserDetail()?.username || '-'}
          </span>
        </div>
        <div className="text-lg text-center ">
          หางานและคอร์สที่ใช่สำหรับคุณ !
        </div>
        <img src="/images/banner.svg" className="mt-6"></img>
        <div className="flex items-center gap-2 mt-5">
          <div className="bg-lightBlue rounded-xs w-[48px] h-[48px] flex items-center justify-center">
            <img src="/learning.svg" className="w-[32px] h-[32px]"></img>
          </div>
          <div className="text-2xl font-medium">คอร์สที่แนะนำสำหรับคุณ</div>
        </div>
      </div>
      <div className="flex gap-3 overflow-auto max-w-[1500px] mx-auto px-5 mb-10 mt-6 no-scrollbar">
        {courses.map((course) => (
          <CourseCard course={course} />
        ))}
      </div>
    </div>
  )
}
