import { useState } from 'react'

const TextInput = ({ type, placeholder, onChange }: any) => {
  const [showPassword, setShowPassword] = useState<Boolean>(false)
  const [isFocused, setIsFocused] = useState<Boolean>(false)

  const icons = {
    email: (
      <svg
        className="mr-3 w-5"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="ic:round-email">
          <path
            id="Vector"
            d="M21.6 2.40039H2.4C1.08 2.40039 0.012 3.4804 0.012 4.8004L0 19.2005C0 20.5205 1.08 21.6005 2.4 21.6005H21.6C22.92 21.6005 24 20.5205 24 19.2005V4.8004C24 3.4804 22.92 2.40039 21.6 2.40039ZM21.12 7.50042L12.636 12.8044C12.252 13.0444 11.748 13.0444 11.364 12.8044L2.88 7.50042C2.75967 7.43287 2.6543 7.34161 2.57027 7.23216C2.48623 7.12271 2.42527 6.99735 2.39109 6.86366C2.35691 6.72997 2.3502 6.59074 2.37139 6.45438C2.39257 6.31803 2.4412 6.18739 2.51434 6.07037C2.58747 5.95336 2.68359 5.8524 2.79687 5.7736C2.91015 5.69481 3.03825 5.63982 3.17339 5.61197C3.30854 5.58411 3.44794 5.58397 3.58315 5.61155C3.71835 5.63912 3.84656 5.69385 3.96 5.77241L12 10.8004L20.04 5.77241C20.1534 5.69385 20.2817 5.63912 20.4169 5.61155C20.5521 5.58397 20.6915 5.58411 20.8266 5.61197C20.9618 5.63982 21.0898 5.69481 21.2031 5.7736C21.3164 5.8524 21.4125 5.95336 21.4857 6.07037C21.5588 6.18739 21.6074 6.31803 21.6286 6.45438C21.6498 6.59074 21.6431 6.72997 21.6089 6.86366C21.5747 6.99735 21.5138 7.12271 21.4297 7.23216C21.3457 7.34161 21.2403 7.43287 21.12 7.50042Z"
            fill={isFocused ? 'rgba(5, 96, 253, 1)' : '#888888'}
            className="transition duration-300 ease-in-out"
          />
        </g>
      </svg>
    ),
    text: (
      <svg
        className="mr-3 w-5"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Component 2" clipPath="url(#clip0_200_1887)">
          <g id="Group">
            <g id="account-circle">
              <path
                id="Vector"
                d="M12 0C5.4 0 0 5.4 0 12C0 18.6 5.4 24 12 24C18.6 24 24 18.6 24 12C24 5.4 18.6 0 12 0ZM12 3.6C14.04 3.6 15.6 5.16 15.6 7.2C15.6 9.24 14.04 10.8 12 10.8C9.96 10.8 8.4 9.24 8.4 7.2C8.4 5.16 9.96 3.6 12 3.6ZM12 20.64C9 20.64 6.36 19.08 4.8 16.8C4.8 14.4 9.6 13.08 12 13.08C14.4 13.08 19.2 14.4 19.2 16.8C17.64 19.08 15 20.64 12 20.64Z"
                fill={isFocused ? 'rgba(5, 96, 253, 1)' : '#888888'}
                className="transition duration-300 ease-in-out"
              />
            </g>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_200_1887">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    password: (
      <svg
        className="mr-3 w-5"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Component 1" clipPath="url(#clip0_200_1827)">
          <g id="Group">
            <g id="lock">
              <path
                id="Vector"
                d="M18.8569 8H17.7141V5.71429C17.7141 2.51429 15.1998 0 11.9998 0C8.79979 0 6.28551 2.51429 6.28551 5.71429V8H5.14265C3.88551 8 2.85693 9.02857 2.85693 10.2857V21.7143C2.85693 22.9714 3.88551 24 5.14265 24H18.8569C20.1141 24 21.1426 22.9714 21.1426 21.7143V10.2857C21.1426 9.02857 20.1141 8 18.8569 8ZM11.9998 18.2857C10.7426 18.2857 9.71408 17.2571 9.71408 16C9.71408 14.7429 10.7426 13.7143 11.9998 13.7143C13.2569 13.7143 14.2855 14.7429 14.2855 16C14.2855 17.2571 13.2569 18.2857 11.9998 18.2857ZM15.5426 8H8.45693V5.71429C8.45693 3.77143 10.0569 2.17143 11.9998 2.17143C13.9426 2.17143 15.5426 3.77143 15.5426 5.71429V8Z"
                fill={isFocused ? 'rgba(5, 96, 253, 1)' : '#888888'}
                className="transition duration-300 ease-in-out"
              />
            </g>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_200_1827">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  }

  return (
    <div className="relative bg-white w-full flex py-4 px-4 rounded-sm">
      {icons[type]}
      <div className="flex items-center w-full">
        <input
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="outline-none w-full"
          type={showPassword ? 'text' : type}
          placeholder={placeholder}
          onChange={(v) => {
            if (onChange !== undefined) onChange(v.target.value)
          }}
        />
      </div>
      {type === 'password' && (
        <div
          onClick={() => setShowPassword((curr) => !curr)}
          className="absolute right-5 top-1/2 -translate-y-1/2 w-5 flex items-center cursor-pointer"
        >
          <img
            src={'/icons/' + (showPassword ? 'close-eye.png' : 'eye.svg')}
            alt="icons"
          />
        </div>
      )}
    </div>
  )
}

export default TextInput
