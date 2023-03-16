import { Card } from 'antd'
import { FC } from 'react'

import './card.css'

interface CardProps {
  content: string
  onDelete: () => void
  onReset: () => void
}
const CardComponent: FC<CardProps> = ({
  content,
  onDelete,
  onReset,
}) => {
  const date = new Date().toISOString().split('T')[0]
  return (
    <div className='cardWrapper'>
      <Card title={`${date}`} bordered={false} className='card'>
        <p>{content}</p>
      </Card>
      <div className='navigation'>
        <button onClick={onDelete} className='button closeBtn'>
          X
        </button>
        <button onClick={onReset} className='button resetBtn'>
          O
        </button>
      </div>
    </div>
  )
}

export default CardComponent
