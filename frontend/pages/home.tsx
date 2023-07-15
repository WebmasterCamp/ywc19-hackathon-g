import { SalaryForm } from '@/components/SalaryForm'

export default function Home() {
  return (
    <div className="flex">
      <div className="w-1/2"></div>
      <div className="w-1/2">
        <SalaryForm />
      </div>
    </div>
  )
}
