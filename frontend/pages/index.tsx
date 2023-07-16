import { CourseCard } from '@/components/CourseCard'
import TextInput from '@/components/TextInput'
import { courses } from '@/constant/courses'
import {
  completedLatestCourse,
  getLatestCourse,
  getUserDetail,
} from '@/helper/user-helper'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Main() {
  const course: any = getLatestCourse()

  const user = getUserDetail()
  const router = useRouter()
  const [search, setSearch] = useState('')

  useEffect(() => {
    if (course) {
      setTimeout(() => {
        completedLatestCourse()
      }, 2000)
    }
  }, [])

  console.log('course', course)

  return (
    <div>
      <div className="flex items-center gap-5 mt-4 max-w-[1200px] mx-auto ">
        <img src="/logo.svg" className="h-[28px] ml-3 xl:ml-0"></img>
        <div className="flex-grow">
          <div className="relative bg-gray-100 w-full  py-4 px-4 rounded-xs h-[48px] hidden md:flex">
            <div className="mr-3 w-5 flex items-center">
              <img src="/search.svg" alt="icons" />
            </div>
            <div className="flex items-center w-full">
              <input
                className="outline-none w-full bg-gray-100"
                type={'text'}
                placeholder={'ค้นหา'}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
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
      <div className="max-w-[1200px] mx-auto">
        <div className="text-[40px] font-semibold mt-4 text-center">
          {user ? (
            <>
              สวัสดี,{' '}
              <span className="text-primary">
                คุณ{user?.username || 'พัฒนา'}
              </span>{' '}
            </>
          ) : (
            <>ยินดีต้อนรับสู่มือโปร</>
          )}
        </div>
        <div className="text-lg text-center ">
          หางานและคอร์สที่ใช่สำหรับคุณ !
        </div>
        <div className="flex items-center gap-2 mt-5 mx-3 xl:mx-0">
          <div className="bg-lightBlue rounded-xs w-[48px] h-[48px] flex items-center justify-center">
            <img src="/learning.svg" className="w-[32px] h-[32px]"></img>
          </div>
          <div className="text-2xl font-medium">คอร์สที่คุณกำลังเรียนอยู่</div>
        </div>
        {!course ? (
          <div className="mx-3 xl:mx-0">
            <img
              src="/images/banner.svg"
              className="mt-4 w-[100%] object-cover  md:block hidden"
            ></img>
            <img
              src="/images/banner-mobile.svg"
              className="mt-4 w-full object-cover  md:hidden block"
            ></img>
          </div>
        ) : (
          <div className="min-h-[187px]  rounded-xs flex items-center px-10 py-5 justify-between bg-[url('/banner-bg.svg')] bg-cover mt-4 flex-wrap gap-y-10  mx-3 xl:mx-0">
            <div className="flex items-center ">
              <div className="text-white">
                <div>คอร์สเรียนของคุณ</div>
                <div className="text-4xl">{course?.name}</div>
              </div>
              <div className="w-[1px] h-[120px] border-[0.5px] border-white mx-7"></div>
              {!course?.completed ? (
                <div className="text-white">
                  <div>เรียนไปแล้ว</div>
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">
                      0 ชั่วโมง <span className="text-lg">(0%)</span>
                    </div>
                    <div className="bg-gray-200 px-4 py-1 text-xs rounded-[4px] hidden md:block">
                      เหลืออีก 30 ชั่วโมง
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-white text-4xl hidden md:block">
                  <div className="flex items-start gap-2">
                    <img src="/congrats.svg" className="mt-2"></img>
                    ยินดีด้วย คุณเรียนคอร์ส <br />
                    {course?.name}จบแล้ว !
                  </div>
                </div>
              )}
            </div>
            {!course?.completed ? (
              <div
                className="text-lg rounded-xs px-10 py-3 text-white border-white border cursor-pointer  mx-auto xl:mx-0"
                onClick={() => {
                  router.push(`/course/${course?.id}`)
                }}
              >
                คลิกเพื่อดูรายละเอียด
              </div>
            ) : (
              <div>
                <div
                  className="text-lg items-start gap-2 flex rounded-xs px-10 py-2 text-primary border-white border cursor-pointer bg-white  mx-auto xl:mx-0"
                  onClick={() => {
                    window.open('/certificate.png', '_blank')
                  }}
                >
                  <img src="/download.svg" className="mt-2"></img>
                  ดาวน์โหลดเกียรติบัตร
                </div>
                <div
                  className="text-lg mt-2 rounded-xs px-10 py-2 text-white border-white border cursor-pointer  mx-auto xl:mx-0"
                  onClick={() => {
                    router.push(`/course/${course?.id}`)
                  }}
                >
                  คลิกเพื่อดูรายละเอียด
                </div>
              </div>
            )}
          </div>
        )}
        <div className="flex items-center gap-2 mt-6  mx-3 xl:mx-0">
          <div className="bg-lightBlue rounded-xs w-[48px] h-[48px] flex items-center justify-center">
            <img src="/learning.svg" className="w-[32px] h-[32px]"></img>
          </div>
          <div className="text-2xl font-medium">คอร์สที่แนะนำสำหรับคุณ</div>
        </div>
        <div className="flex gap-3 overflow-auto max-w-[1500px]  mb-10 mt-6 no-scrollbar  mx-3 xl:mx-0">
          {courses.map((course) => {
            if (!search) return <CourseCard course={course} />
            if (course.name.includes(search))
              return <CourseCard course={course} />
          })}
        </div>
      </div>
    </div>
  )
}
