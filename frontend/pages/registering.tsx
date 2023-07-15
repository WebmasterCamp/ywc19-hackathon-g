import { ContractForm } from '@/components/ContractForm'
import { ExperienceForm } from '@/components/ExperienceForm'
import { JobForm } from '@/components/JobForm'
import LoadingScreen from '@/components/LoadingScreen'
import { SalaryForm } from '@/components/SalaryForm'
import {
  ContractOptions,
  ExperienceOptions,
  JobOptions,
  SalaryOptions,
} from '@/constant/enum'
import { useRouter } from 'next/router'
import { useState } from 'react'

enum FormSteps {
  SALARY = 1,
  JOB = 2,
  EXPERIENCE = 3,
  CONTRACT_TYPE = 4,
}

const steps = [
  {
    title: 'เงินเดือนที่ต้องการ',
    desc: 'กรุณาระบุเงินเดือนที่ต้องการ',
    number: FormSteps.SALARY,
  },
  {
    title: 'ประเภทของงาน',
    desc: 'กรุณาระบุประเภทของงานที่ต้องการ \nและเหมาะสมตามประสบการณ์ของคุณ',
    number: FormSteps.JOB,
  },
  {
    title: 'ประสบการณ์',
    desc: 'คุณมีประสบการณ์ในการทำงานกี่ปี?',
    number: FormSteps.EXPERIENCE,
  },
  {
    title: 'ประเภทการจ้างงาน',
    desc: 'คุณต้องการทำงานแบบใด?',
    number: FormSteps.CONTRACT_TYPE,
  },
]

export default function Home() {
  const [currectForm, setCurrectForm] = useState(FormSteps.SALARY)
  const [salary, setSalary] = useState<SalaryOptions | null>(null)
  const [job, setJob] = useState<JobOptions | null>(null)
  const [experience, setExperience] = useState<ExperienceOptions | null>(null)
  const [contractType, setContractType] = useState<ContractOptions | null>(null)
  const [isLoading, setIsLoading] = useState<Boolean>(false)
  const router = useRouter()

  const formHandle = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      router.push('/')
    }, 1000)
  }

  return (
    <div>
      <LoadingScreen isLoading={isLoading} />
      <div className="bg-lightBlue min-h-screen pt-[27px]">
        <p className="text-[40px] text-center font-semibold">
          ประเมินทักษะของคุณ
        </p>
        <p className="text-lg text-center pb-[45px]">
          จับคู่งานช่วยให้คุณมีโอกาสที่เหมาะสมตามทักษะและความชอบของคุณ
        </p>
        <div className="flex max-w-[1200px] mx-auto pb-[68px]">
          <div className="w-1/2 flex flex-col mt-5  gap-10">
            {steps.map((step) => (
              <>
                <Step
                  title={step.title}
                  desc={step.desc}
                  number={step.number}
                  currentForm={currectForm}
                />
                {/* <div className="h-[50px] border-l-[3px] ml-[30px] border-primary "></div> */}
              </>
            ))}
          </div>
          <div className="w-1/2">
            {currectForm === FormSteps.SALARY && (
              <SalaryForm
                selectedOption={salary}
                handleOptionChange={(option) => {
                  setSalary(option)
                }}
              />
            )}
            {currectForm === FormSteps.JOB && (
              <JobForm
                selectedOption={job}
                handleOptionChange={(option) => {
                  setJob(option)
                }}
              />
            )}
            {currectForm === FormSteps.EXPERIENCE && (
              <ExperienceForm
                selectedOption={experience}
                handleOptionChange={(option) => {
                  setExperience(option)
                }}
              />
            )}
            {currectForm === FormSteps.CONTRACT_TYPE && (
              <ContractForm
                selectedOption={contractType}
                handleOptionChange={(option) => {
                  setContractType(option)
                }}
              />
            )}
            <div className="flex gap-5">
              {currectForm !== FormSteps.SALARY && (
                <button
                  className=" bg-transparent w-full h-[48px] rounded-xs text-primary border border-primary mt-5 text-lg font-normal"
                  onClick={() => {
                    setCurrectForm(currectForm - 1)
                  }}
                >
                  ก่อนหน้า
                </button>
              )}
              <button
                className="bg-primary w-full h-[48px] rounded-xs text-white border mt-5 text-lg "
                onClick={() => {
                  if (currectForm !== FormSteps.CONTRACT_TYPE) {
                    setCurrectForm(currectForm + 1)
                    return
                  }
                  formHandle()
                  console.log('aa')
                }}
              >
                <p className="font-normal">
                  {currectForm !== FormSteps.CONTRACT_TYPE ? 'ต่อไป' : 'ส่ง'}
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
function Step({
  title,
  desc,
  number,
  currentForm,
}: {
  title: string
  desc: string
  number: number
  currentForm: number
}) {
  const formattedDesc = desc.replace(/\n/g, '<br>')

  return (
    <div className="flex items-center gap-10">
      <div
        className={
          `w-[66px] h-[66px]  rounded-[100%] flex items-center justify-center text-[36px] font-medium ` +
          (number <= currentForm
            ? 'bg-primary text-white'
            : 'bg-transparent border-2 border-primary text-primary')
        }
      >
        {number >= currentForm ? (
          number
        ) : (
          <img
            src="/material-symbols-check.svg"
            className="w-[42px] h-[42px]"
          ></img>
        )}
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
