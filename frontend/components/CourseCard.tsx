import { Course } from '@/constant/enum'
import Link from 'next/link'

export const CourseCard = ({
  course: {
    id,
    duration,
    description,
    location,
    name,
    certificate = false,
    test = false,
    img,
  },
}: {
  course?: Course
}) => {
  return (
    <Link href={'/course/' + id}>
      <div className="min-w-[300px] max-w-[300px]  border-[0.5px] border-[#D6D6D6] rounded-xs hover:border-primary">
        <img src={img} className="w-[100%] "></img>
        <div className="p-4">
          <div className="text-lg">{name}</div>
          <div className="mt-1 text-xs text-gray-300">{description}</div>
          <div className="flex items-center text-xs gap-1 mt-2 text-gray-200">
            <img src="/location.svg" className="w-[14px] h-[14px]"></img>
            <div>{location}</div>
            <div className="bg-[#9D9D9D] w-[1px] h-[14px] mx-1"></div>
            <img src="/calendar.svg" className="w-[11.67px] h-[11.67px]"></img>
            <div>{duration}</div>
          </div>
          <div className="flex gap-2 mt-3">
            {certificate && (
              <div className="flex px-2 py-1 bg-lightBlueTp rounded-sm">
                <img src="/primary-check.svg"></img>
                <span className="text-xs ml-1 text-primary">
                  ได้รับเกียรติบัตร
                </span>
              </div>
            )}
            {test && (
              <div className="flex bg-[#B5EBCC] px-2 py-1 rounded-sm">
                <img src="/green-check.svg"></img>
                <span className="text-xs ml-1 text-success">มีสอบ</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}
