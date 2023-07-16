import PolicyModal from '@/components/PolicyModal'
import { courses } from '@/constant/courses'
import { Course, monthMapping } from '@/constant/enum'
import { getLatestCourse, getUserDetail } from '@/helper/user-helper'
import { GetStaticPaths, GetStaticProps } from 'next'
import Link from 'next/link'
import { useState } from 'react'

const CourseInfo = ({ matchedCourse }: { matchedCourse: Course }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const user = getUserDetail()
  const course = getLatestCourse()
  console.log(course)

  const jobRegistrationPolicy = {
    mainTitle: 'แบบยินยอมการยอมรับเงื่อนไขการสมัคร',
    miniTitle:
      '*กรุณาอ่านเงื่อนไขและรายละเอียดการเข้าร่วมเรียนรู้บนแพลตฟอร์มของมือโปรโดยละเอียด',
    description:
      '‘มือโปร’ เป็นแพลตฟอร์มการเรียนรู้ที่เปิดโอกาสให้ทุกคนได้เข้าถึงระบบการศึกษาที่มุ่งเน้นให้ทุกคนสามารถนำองค์ความรู้ไปประยุกต์ใช้ สร้างงานสร้างอาชีพได้ ทั้งนี้องค์กรของเราก็มีการขอความร่วมมือกับหน่วยงานทั้งภาครัฐและเอกชนในการมอบโอกาสในการจ้างงาน โดยมีรายละเอียดและเงื่อนไขดังนี้',
    policy: [
      'การเรียนรู้ของเราจะเน้นการเรียนรู้ในเชิงปฏิบัติ โดยค่าใช้จ่ายต่างๆ ที่เกี่ยวเนื่องกับกิจกรรมทางมือโปรจะเป็นผู้ออกค่าใช้จ่ายทั้งหมด (โดยจะไม่รวมไปถึงค่าใช้จ่ายส่วนตัวอื่นๆ ของผู้เข้าร่วมกิจกรรม)',
      '‘มือโปร’ มีสิทธ์ส่งมอบหรือใช้ข้อมูลของท่าน (ผลการเรียน, อายุ และข้อมูลอื่นๆ) ในการหางานและดำเนินการได้ทุกเมื่อ (ทั้งนี้เพื่อประโยชน์สูงสุดของท่าน เราจะใช้ ข้อมูลในการสร้างอาชีพเท่านั้น)',
      'เพื่อประสิทธิภาพสูงสุดในการเรียนกับ ‘มือโปร’ ท่านจะต้อง ‘ฝึกอาชีพ’ ในหน่วยงานที่ ‘มือโปร’ จัดหาให้อย่างน้อย 1 เดือน',
      'แต่ได้รับค่าตอบแทนตามอัตราที่กำหนด ทั้งนี้การ ‘ฝึกอาชีพ’ เป็นการเรียนรู้นอกหลักสูตรที่จะขยายโอกาสในสายงานให้แก่ท่าน',
    ],
  }

  return (
    <div className="max-w-[1200px] mx-auto mt-10 mb-14">
      <PolicyModal
        course={matchedCourse}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        mainTitle={jobRegistrationPolicy.mainTitle}
        miniTitle={jobRegistrationPolicy.miniTitle}
        description={jobRegistrationPolicy.description}
        policies={jobRegistrationPolicy.policy}
      />
      <Link href="/">
        <div className="hover:-translate-x-2 duration-300 transition ease-in-out cursor-pointer text-[#9D9D9D] flex items-center text-lg mb-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 cursor-pointer"
            width="15"
            height="15"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M7.47342 9.17678L14.1966 15.9L12.4502 17.6464L3.80375 9L12.4502 0.353554L14.1966 2.1L7.47342 8.82322L7.29664 9L7.47342 9.17678Z"
              fill="#9D9D9D"
              stroke="white"
              stroke-width="0.5"
            />
          </svg>
          กลับหน้าหลัก
        </div>
      </Link>
      <div className="flex items-center">
        <div className="flex items-center w-full">
          <div className="text-[40px] font-semibold mr-4">
            {matchedCourse?.name}
          </div>
          {matchedCourse?.certificate && (
            <div className="flex bg-lightBlueTp px-2 py-1 rounded-md items-center mr-2 h-max">
              <img src="/primary-check.svg"></img>
              <div className="text-[16px] ml-1 whitespace-nowrap text-primary font-medium">
                ได้รับเกียรติบัตร
              </div>
            </div>
          )}
          {matchedCourse?.test && (
            <div className="flex bg-[#caf5dc] px-2 py-1 rounded-md items-center h-max">
              <img src="/green-check.svg"></img>
              <div className="text-[16px] text-[#00AB54] ml-1 whitespace-nowrap">
                มีสอบ
              </div>
            </div>
          )}
        </div>
        <div
          onClick={() => setIsOpen(true)}
          className={
            'cursor-pointer rounded-xs py-2.5 px-14 flex items-center whitespace-nowrap text-[18px] ' +
            (!user && 'opacity-60 pointer-events-none ') +
            (course?.status === 'learn'
              ? ' bg-[#D0D0D0] text-[#A1A1A1] cursor-default'
              : ' bg-primary text-white')
          }
        >
          {!course && (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="18"
                className="mr-2"
                viewBox="0 0 21 20"
                fill="none"
              >
                <g clip-path="url(#clip0_250_651)">
                  <path
                    d="M18.5469 8.69998L18.5456 8.70002C18.286 8.70667 18.0331 8.75662 17.787 8.84972C17.5395 8.94338 17.3219 9.08399 17.1346 9.27129L17.1345 9.27131L10.1326 16.283L10.1228 16.2928L10.1195 16.3063L9.20149 19.9879L9.18135 20.0686L9.2621 20.0485L12.9437 19.1305L12.9572 19.1272L12.967 19.1173L19.9689 12.0959C19.969 12.0959 19.969 12.0959 19.969 12.0959C20.156 11.9088 20.2997 11.6916 20.3999 11.4446C20.4999 11.1979 20.55 10.9441 20.55 10.6836H20.5501L20.5499 10.6812C20.5367 10.4029 20.4836 10.1436 20.3904 9.90375C20.2966 9.66258 20.1558 9.45142 19.9683 9.27065C19.7815 9.09053 19.5679 8.95037 19.3278 8.85033C19.0869 8.74995 18.8264 8.7 18.5469 8.69998ZM19.0096 11.1463L19.0095 11.1463L12.2615 17.9041L11.0377 18.2123L11.3459 16.9884L18.094 10.2209L18.094 10.2209L18.0956 10.2192C18.1552 10.1536 18.2226 10.11 18.2979 10.0869C18.3774 10.0624 18.4601 10.0501 18.5461 10.05C18.7439 10.0563 18.9005 10.1178 19.0203 10.2316C19.1392 10.3446 19.2 10.4936 19.2 10.6836C19.2 10.8658 19.1368 11.019 19.0096 11.1463ZM6.75 8.8H6.8V8.75V7.5V7.45H6.75H5.5H5.45V7.5V8.75V8.8H5.5H6.75ZM15.5 8.8H15.55V8.75V7.5V7.45H15.5H8H7.95V7.5V8.75V8.8H8H15.5ZM5.5 11.2H5.45V11.25V12.5V12.55H5.5H6.75H6.8V12.5V11.25V11.2H6.75H5.5ZM6.75 5.05H6.8V5V3.75V3.7H6.75H5.5H5.45V3.75V5V5.05H5.5H6.75ZM15.5 5.05H15.55V5V3.75V3.7H15.5H8H7.95V3.75V5V5.05H8H15.5ZM8.57617 16.2H4.3V1.3H16.7V7.68555V7.77066L16.7743 7.72922C17.1664 7.51071 17.5773 7.3695 18.0074 7.30531L18.05 7.29895V7.25586V0V-0.05H18H3H2.95V0V17.5V17.55H3H8.26367H8.30271L8.31218 17.5121L8.62468 16.2621L8.64021 16.2H8.57617ZM8 11.2H7.95V11.25V12.5V12.55H8H11.7695H11.7902L11.8049 12.5354L13.0549 11.2854L13.1402 11.2H13.0195H8Z"
                    fill="white"
                    stroke="white"
                    stroke-width="0.1"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_250_651">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              สมัครเรียน
            </>
          )}
          {/* {course?.status === 'learn' && (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9.54961 17.9996L3.84961 12.2996L5.27461 10.8746L9.54961 15.1496L18.7246 5.97461L20.1496 7.39961L9.54961 17.9996Z"
                  fill="#A1A1A1"
                />
              </svg>
              สมัครเรียนเรียบร้อยแล้ว
            </>
          )} */}
          {course?.completed && course?.id === matchedCourse.id && (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="18"
                className="mr-2"
                viewBox="0 0 21 20"
                fill="none"
              >
                <g clip-path="url(#clip0_250_651)">
                  <path
                    d="M18.5469 8.69998L18.5456 8.70002C18.286 8.70667 18.0331 8.75662 17.787 8.84972C17.5395 8.94338 17.3219 9.08399 17.1346 9.27129L17.1345 9.27131L10.1326 16.283L10.1228 16.2928L10.1195 16.3063L9.20149 19.9879L9.18135 20.0686L9.2621 20.0485L12.9437 19.1305L12.9572 19.1272L12.967 19.1173L19.9689 12.0959C19.969 12.0959 19.969 12.0959 19.969 12.0959C20.156 11.9088 20.2997 11.6916 20.3999 11.4446C20.4999 11.1979 20.55 10.9441 20.55 10.6836H20.5501L20.5499 10.6812C20.5367 10.4029 20.4836 10.1436 20.3904 9.90375C20.2966 9.66258 20.1558 9.45142 19.9683 9.27065C19.7815 9.09053 19.5679 8.95037 19.3278 8.85033C19.0869 8.74995 18.8264 8.7 18.5469 8.69998ZM19.0096 11.1463L19.0095 11.1463L12.2615 17.9041L11.0377 18.2123L11.3459 16.9884L18.094 10.2209L18.094 10.2209L18.0956 10.2192C18.1552 10.1536 18.2226 10.11 18.2979 10.0869C18.3774 10.0624 18.4601 10.0501 18.5461 10.05C18.7439 10.0563 18.9005 10.1178 19.0203 10.2316C19.1392 10.3446 19.2 10.4936 19.2 10.6836C19.2 10.8658 19.1368 11.019 19.0096 11.1463ZM6.75 8.8H6.8V8.75V7.5V7.45H6.75H5.5H5.45V7.5V8.75V8.8H5.5H6.75ZM15.5 8.8H15.55V8.75V7.5V7.45H15.5H8H7.95V7.5V8.75V8.8H8H15.5ZM5.5 11.2H5.45V11.25V12.5V12.55H5.5H6.75H6.8V12.5V11.25V11.2H6.75H5.5ZM6.75 5.05H6.8V5V3.75V3.7H6.75H5.5H5.45V3.75V5V5.05H5.5H6.75ZM15.5 5.05H15.55V5V3.75V3.7H15.5H8H7.95V3.75V5V5.05H8H15.5ZM8.57617 16.2H4.3V1.3H16.7V7.68555V7.77066L16.7743 7.72922C17.1664 7.51071 17.5773 7.3695 18.0074 7.30531L18.05 7.29895V7.25586V0V-0.05H18H3H2.95V0V17.5V17.55H3H8.26367H8.30271L8.31218 17.5121L8.62468 16.2621L8.64021 16.2H8.57617ZM8 11.2H7.95V11.25V12.5V12.55H8H11.7695H11.7902L11.8049 12.5354L13.0549 11.2854L13.1402 11.2H13.0195H8Z"
                    fill="white"
                    stroke="white"
                    stroke-width="0.1"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_250_651">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              ดาวน์โหลดเกียรติบัตร
            </>
          )}
        </div>
      </div>
      <div className="text-[24px] mb-1">{matchedCourse?.description}</div>
      <div className="flex items-center text-[20px]">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M8.99782 9.79653C10.3185 9.79653 11.3892 8.72585 11.3892 7.4051C11.3892 6.08435 10.3185 5.01367 8.99782 5.01367C7.6771 5.01367 6.60645 6.08435 6.60645 7.4051C6.60645 8.72585 7.6771 9.79653 8.99782 9.79653Z"
              stroke="#9D9D9D"
              stroke-width="1.59427"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.9981 1.02734C7.30682 1.02734 5.6848 1.69922 4.48888 2.89517C3.29296 4.09111 2.62109 5.71316 2.62109 7.40449C2.62109 8.91268 2.94154 9.89954 3.81678 10.9916L8.9981 16.9702L14.1794 10.9916C15.0547 9.89954 15.3751 8.91268 15.3751 7.40449C15.3751 5.71316 14.7033 4.09111 13.5073 2.89517C12.3114 1.69922 10.6894 1.02734 8.9981 1.02734Z"
              stroke="#9D9D9D"
              stroke-width="1.59427"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span className="text-[#9D9D9D] ml-1">สถานที่ : </span>
          <span className="ml-1">{matchedCourse?.location}</span>
        </div>
        <span className="text-[#9D9D9D] mx-3 font-light">|</span>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 18 18"
            fill="none"
          >
            <g clip-path="url(#clip0_250_447)">
              <path
                d="M4.56432 1.05001V-0.685714H6.23576V1.05001V1.1143H6.30004H11.7001H11.7644V1.05001V-0.685714H13.4358V1.05001V1.1143H13.5001H17.1001C17.3218 1.1143 17.5343 1.20235 17.6911 1.35907C17.8478 1.5158 17.9358 1.72837 17.9358 1.95002V16.3501C17.9358 16.5718 17.8478 16.7843 17.6911 16.9411C17.5343 17.0978 17.3218 17.1858 17.1001 17.1858H0.900006C0.678359 17.1858 0.46579 17.0978 0.309062 16.9411C0.152335 16.7843 0.0642857 16.5718 0.0642857 16.3501V1.95002C0.0642857 1.72837 0.152335 1.5158 0.309062 1.35907C0.46579 1.20235 0.678359 1.1143 0.900006 1.1143H4.50003H4.56432V1.05001ZM16.2644 8.25006V8.18577H16.2001H1.80001H1.73573V8.25006V15.4501V15.5144H1.80001H16.2001H16.2644V15.4501V8.25006ZM4.56432 2.85002V2.78574H4.50003H1.80001H1.73573V2.85002V6.45005V6.51433H1.80001H16.2001H16.2644V6.45005V2.85002V2.78574H16.2001H13.5001H13.4358V2.85002V4.58575H11.7644V2.85002V2.78574H11.7001H6.30004H6.23576V2.85002V4.58575H4.56432V2.85002Z"
                fill="#9D9D9D"
                stroke="white"
                stroke-width="0.128571"
              />
            </g>
            <defs>
              <clipPath id="clip0_250_447">
                <rect width="18.0001" height="18.0001" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span className="text-[#9D9D9D] ml-1">ระยะเวลา : </span>
          <span className="ml-1">{matchedCourse?.duration}</span>
        </div>
      </div>
      <div className="flex mt-8">
        <div className="w-5/12 h-[608px] mr-[26px]">
          <img
            className="h-full w-full object-cover object-center"
            src={`/course/course-${matchedCourse?.id}.png`}
          />
        </div>
        <div className="w-7/12">
          <div className="flex items-center text-[#9D9D9D] -mt-3 mb-5">
            <div className="whitespace-nowrap text-[24px] mr-5">ตารางเรียน</div>
            <hr className="w-full -mb-1 bg-[#D1D6DB]" />
          </div>
          {matchedCourse?.lesson.map((lesson) => {
            const DayMonth: string[] = lesson.dateTime
              .split(/[\s,-]+/)
              .filter((item, index) => index <= 2 && index >= 1)

            return (
              <div
                className="flex bg-lightBlue py-4 px-4 rounded-[8px] items-center"
                key={lesson.lessonNo}
              >
                <div className="border-r-2 pr-5 pl-2 py-1 text-center border-r-[#DCE0E3] mr-5">
                  <div className="text-[36px] -mt-2">{DayMonth[1]}</div>
                  <div className="text-[18px] -mt-3">
                    {monthMapping[parseInt(DayMonth[0])]}
                  </div>
                </div>
                <div className="text-[28px] text-primary mr-4">
                  สัปดาห์ที่ {lesson.lessonNo}
                </div>
                <div className="text-[24px]"> {lesson.title}</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default CourseInfo

export const getStaticProps: GetStaticProps = ({ params }) => {
  const matchedCourse = courses.filter((course) => course.id === params.id)[0]
  return { props: { matchedCourse } }
}

export const getStaticPaths: GetStaticPaths = () => {
  const ids = courses.map((course) => {
    return {
      params: {
        id: course.id,
      },
    }
  })

  return {
    paths: [...ids],
    fallback: true,
  }
}
