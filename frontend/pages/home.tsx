import { SalaryForm } from '@/components/SalaryForm'

const steps = [
  {
    title: 'เงินเดือนที่ต้องการ',
    desc: 'กรุณาระบุเงินเดือนที่ต้องการ',
    number: 1,
  },
  {
    title: 'ประเภทของงาน',
    desc: 'กรุณาระบุประเภทของงานที่ต้องการ \nและเหมาะสมตามประสบการณ์ของคุณ',
    number: 2,
  },
  {
    title: 'ประสบการณ์',
    desc: 'คุณมีประสบการณ์ในการทำงานกี่ปี?',
    number: 3,
  },
  {
    title: 'ประเภทการจ้างงาน',
    desc: 'คุณต้องการทำงานแบบใด?',
    number: 4,
  },
]
export default function Home() {
  return (
    <div className="bg-lightBlue min-h-screen">
      <p className="text-[40px] text-center font-semibold">
        ประเมินทักษะของคุณ
      </p>
      <p className="text-lg text-center pb-[68px]">
        จับคู่งานช่วยให้คุณมีโอกาสที่เหมาะสมตามทักษะและความชอบของคุณ
      </p>
      <div className="flex max-w-[1200px] mx-auto ">
        <div className="w-1/2 flex flex-col mt-5 ">
          {steps.map((step) => (
            <>
              <Step title={step.title} desc={step.desc} number={step.number} />
              <div className="h-[50px] border-l-[3px] ml-[30px] border-primary "></div>
            </>
          ))}
        </div>
        <div className="w-1/2">
          <SalaryForm />
          <button className="rounded-lg bg-primary w-full h-[48px] rounded-xs text-white mt-5">
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
function Step({
  title,
  desc,
  number,
}: {
  title: string
  desc: string
  number: number
}) {
  const formattedDesc = desc.replace(/\n/g, '<br>')

  return (
    <div className="flex items-stretch gap-10">
      <div className="w-[66px] h-[66px] bg-primary rounded-[100%] flex items-center justify-center text-white text-[36px] font-medium">
        {number}
      </div>
      <div className="text-start">
        <div className="text-[28px] font-medium">{title}</div>
        <div
          className="text-[16px] "
          dangerouslySetInnerHTML={{ __html: formattedDesc }}
        ></div>
      </div>
    </div>
  )
}
