import { useState } from 'react'

const TextInput = ({ type, placeholder }: any) => {
  const [showPassword, setShowPassword] = useState<Boolean>(false)

  const icons = {
    email: 'email.svg',
    text: 'user.svg',
    password: 'password.svg',
  }

  return (
    <div className="relative bg-white w-full flex py-4 px-4 rounded-[2px]">
      <div className="mr-3 w-5 flex items-center">
        <img src={'/icons/' + icons[type]} alt="icons" />
      </div>
      <div className="flex items-center w-full">
        <input
          className="outline-none w-full"
          type={showPassword ? 'text' : type}
          placeholder={placeholder}
        />
      </div>
      {type === 'password' && (
        <div
          onClick={() => setShowPassword((curr) => !curr)}
          className="absolute right-5 top-1/2 -translate-y-1/2 w-5 flex items-center cursor-pointer"
        >
          <img src="/icons/eye.svg" alt="icons" />
        </div>
      )}
    </div>
  )
}

export default TextInput
