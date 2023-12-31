import { salaryMapping, SalaryOptions } from '@/constant/enum'
import { useState } from 'react'

export const SalaryForm = ({
  selectedOption,
  handleOptionChange,
}: {
  selectedOption?: SalaryOptions
  handleOptionChange: (selectedOption: SalaryOptions) => void
}) => {
  return (
    <div className="bg-white px-8 pb-10 pt-5 rounded-sm">
      <p className="text-[28px] text-primary font-medium">
        เงินเดือนที่ต้องการ
      </p>
      <p className="text-[16px] mb-4">กรุณาระบุเงินเดือนที่ต้องการ</p>
      {Object.keys(SalaryOptions).map((option) => (
        <RadioRow
          option={option}
          selectedOption={selectedOption}
          handleOptionChange={() => handleOptionChange(SalaryOptions[option])}
        />
      ))}
    </div>
  )
}

function RadioRow({ option, selectedOption, handleOptionChange }) {
  return (
    <div
      className={`h-[58px] w-auto flex items-center rounded-lg px-5 bg-blue-500 bg-opacity-10 cursor-pointer mt-3 rounded-sm bg-gray-100 ${
        selectedOption === option ? 'border-primary border bg-lightBlue' : ''
      }`}
      onClick={() => {
        handleOptionChange(option)
      }}
    >
      <input
        type="radio"
        value={option}
        checked={selectedOption === option}
        onChange={() => {}}
        className={
          `form-radio text-blue-500 w-[20px] h-[20px] stroke-[0.8px] ` +
          (selectedOption === option
            ? 'border-[#9D9D9D] border bg-lightBlue'
            : '')
        }
      />
      <span
        className={
          `text-gray-700 m-2 font-serif ` +
          (selectedOption !== option ? 'text-[#565353]' : '')
        }
      >
        {salaryMapping[option]}
      </span>
    </div>
  )
}
