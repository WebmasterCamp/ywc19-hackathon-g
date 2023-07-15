import { useState } from 'react'

export const SalaryForm = () => {
  const [selectedOption, setSelectedOption] = useState('option1')

  const handleOptionChange = (option) => {
    setSelectedOption(option)
  }

  return (
    <div>
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
    </div>
  )
}

function RadioRow({ option, selectedOption, handleOptionChange }) {
  return (
    <div
      className="h-[58px] w-auto flex items-center rounded-lg px-5 bg-blue-500 bg-opacity-10 cursor-pointer"
      onClick={() => {
        handleOptionChange(option)
      }}
    >
      <input
        type="radio"
        value={option}
        checked={selectedOption === option}
        onChange={() => {}}
        className="form-radio text-blue-500"
      />
      <span className="text-gray-700 m-2 font-serif">{option}</span>
    </div>
  )
}
