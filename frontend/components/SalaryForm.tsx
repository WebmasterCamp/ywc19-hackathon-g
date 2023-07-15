import { useState } from 'react'

export const SalaryForm = () => {
  const [selectedOption, setSelectedOption] = useState('option1')

  const handleOptionChange = (option) => {
    setSelectedOption(option)
  }

  return (
    <div className="bg-white px-8 pb-10 pt-5 rounded-sm">
      <p className="text-[28px] text-primary font-medium">
        เงินเดือนที่ต้องการ
      </p>
      <p className="text-[16px] mb-4">กรุณาระบุเงินเดือนที่ต้องการ</p>
      <RadioRow
        option="option1"
        selectedOption={selectedOption}
        handleOptionChange={handleOptionChange}
      />
      <RadioRow
        option="option2"
        selectedOption={selectedOption}
        handleOptionChange={handleOptionChange}
      />
      <RadioRow
        option="option3"
        selectedOption={selectedOption}
        handleOptionChange={handleOptionChange}
      />
      <RadioRow
        option="option4"
        selectedOption={selectedOption}
        handleOptionChange={handleOptionChange}
      />
      <RadioRow
        option="option5"
        selectedOption={selectedOption}
        handleOptionChange={handleOptionChange}
      />
    </div>
  )
}

const mapping = {
  option1: 'น้อยกว่า 20,000 บาท',
  option2: '20,000 - 30,000 บาท',
  option3: '30,000 - 50,000 บาท',
  option4: '50,000 - 70,000 บาท',
  option5: 'มากกว่า 70,000 บาท',
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
        {mapping[option]}
      </span>
    </div>
  )
}
