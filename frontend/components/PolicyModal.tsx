import { saveCourse } from '@/helper/user-helper'
import { useRouter } from 'next/router'
import { useState } from 'react'

const PolicyModal = ({
  course,
  isOpen,
  setIsOpen,
  mainTitle,
  miniTitle,
  description,
  policies,
}: {
  course: any
  isOpen: boolean
  setIsOpen: any
  mainTitle: string
  miniTitle?: string
  description: string
  policies: string[]
}) => {
  const [policyChecked, setPolicyChecked] = useState<boolean>(false)

  const router = useRouter()

  const courseLearnHandle = () => {
    saveCourse(course)
    setIsOpen(false)
    router.push('/')
  }

  return (
    <div
      className={
        'fixed bg-[#000000] w-full transistion duration-200 ease-in-out h-screen top-0 left-0 bg-blur-[16.5px] bg-opacity-50 z-30 grid place-items-center ' +
        (isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none')
      }
    >
      <div className="relative max-w-[1060px]">
        <div className="backdrop-blur-[16.5px] backdrop-filter bg-white bg-opacity-80 rounded-md px-[45px] py-[20px]">
          <div
            onClick={() => setIsOpen(false)}
            className="hover:scale-125 transition duration-300 ease-in-out cursor-pointer absolute right-5 top-5"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.5625 3.5625L13.0625 11.0625L20.5 18.5C21.125 19.0625 21.125 20 20.5 20.5625C19.9375 21.1875 19 21.1875 18.4375 20.5625L10.9375 13.125L3.5 20.5625C2.9375 21.1875 2 21.1875 1.4375 20.5625C0.8125 20 0.8125 19.0625 1.4375 18.4375L8.875 11L1.4375 3.5625C0.8125 3 0.8125 2.0625 1.4375 1.4375C2 0.875 2.9375 0.875 3.5625 1.4375L11 8.9375L18.4375 1.5C19 0.875 19.9375 0.875 20.5625 1.5C21.125 2.0625 21.125 3 20.5625 3.5625Z"
                fill="black"
                fill-opacity="0.5"
              />
            </svg>
          </div>
          <div className="text-center text-[28px] mt-10 font-semibold mb-5">
            {mainTitle}
          </div>
          {miniTitle && (
            <div className="text-primary text-center text-[18px] mb-5">
              {miniTitle}
            </div>
          )}
          <div style={{ textIndent: '2rem' }} className="mb-5 text-[18px]">
            {description}
          </div>
          <ol>
            {policies.map((policy, index) => {
              return (
                <li className="text-[18px]" key={index}>
                  {policy}
                </li>
              )
            })}
          </ol>
          <div className="w-max mx-auto flex items-center mt-7 mb-3">
            <input
              id="policy"
              className="mr-2"
              name="policy"
              type="checkbox"
              onChange={() => setPolicyChecked((curr) => !curr)}
            />
            <label htmlFor="policy" className="text-[14px] cursor-pointer">
              ฉันยินยอมและอนุญาตให้หน่วยงาน ‘มือโปร’
              ใช้ข้อมูลของฉันในการสร้างงานและวัตถุประสงค์อื่นในการพัฒนาระบบการเรียนให้ดียิ่งขึ้น
            </label>
          </div>
          <div
            onClick={courseLearnHandle}
            className={
              'w-[752px] text-center rounded-[8px] cursor-pointer py-2 text-[20px] text-white bg-primary mx-auto mb-6 ' +
              (!policyChecked && 'opacity-60 pointer-events-none')
            }
          >
            เริ่มต้นเรียนรู้
          </div>
        </div>
      </div>
    </div>
  )
}

export default PolicyModal
