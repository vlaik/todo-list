import { Input } from 'antd'
import { FC } from 'react'

import './input.css'

interface InputProps {
  value: string
  placeholder: string
  onChange: (value: string) => void
}

const InputComponent: FC<InputProps> = ({
  value,
  onChange,
  placeholder,
}) => {
  return (
    <Input
      value={value}
      onChange={e => onChange(e.target.value)}
      className='input'
      placeholder={placeholder}
    />
  )
}

export default InputComponent
