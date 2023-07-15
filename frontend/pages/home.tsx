import { ContractForm } from '@/components/ContractForm'
import { ExperienceForm } from '@/components/ExperienceForm'
import { JobForm } from '@/components/JobForm'
import { SalaryForm } from '@/components/SalaryForm'
import {
  ContractOptions,
  ExperienceOptions,
  JobOptions,
  SalaryOptions,
} from '@/constant/enum'
import { useState } from 'react'

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

enum FormSteps {
  SALARY = 1,
  JOB = 2,
  EXPERIENCE = 3,
  CONTRACT_TYPE = 4,
}

export default function Home() {
  const [currectForm, setCurrectForm] = useState(FormSteps.SALARY)
  const [salary, setSalary] = useState<SalaryOptions | null>(null)
  const [job, setJob] = useState<JobOptions | null>(null)
  const [experience, setExperience] = useState<ExperienceOptions | null>(null)
  const [contractType, setContractType] = useState<ContractOptions | null>(null)

  console.log('salary', salary)
  console.log('job', job)

  return (
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
              <Step title={step.title} desc={step.desc} number={step.number} />
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
                className=" bg-transparent w-full h-[48px] rounded-xs text-primary border border-primary mt-5 text-base"
                onClick={() => {
                  setCurrectForm(currectForm - 1)
                }}
              >
                Previous step
              </button>
            )}
            <button
              className="bg-primary w-full h-[48px] rounded-xs text-white border mt-5"
              onClick={() => {
                if (currectForm !== FormSteps.CONTRACT_TYPE) {
                  setCurrectForm(currectForm + 1)
                  return
                }
                console.log('submit', {
                  salary,
                  job,
                  experience,
                  contractType,
                })
              }}
            >
              {currectForm !== FormSteps.CONTRACT_TYPE ? 'Next' : 'Submit'}
            </button>
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
}: {
  title: string
  desc: string
  number: number
}) {
  const formattedDesc = desc.replace(/\n/g, '<br>')

  return (
    <div className="flex items-center gap-10">
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
