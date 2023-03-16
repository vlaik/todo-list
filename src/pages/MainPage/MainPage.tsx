import { useState } from 'react'
import { CardComponent, InputComponent } from '../../component'
import {
  AddTodo,
  ChangeTodos,
  DeleteTodoById,
} from '../../redux/reducer/todoAction'
import { useAppDispatch, useAppSelector } from '../../redux/store'

import './mainPage.css'

export const MainPage = () => {
  const [value, setValue] = useState<string>('')
  const [changeValue, setChangeValue] = useState<string>('')
  const [isOpenInputChange, setIsOpenInputChange] = useState<
    number | null
  >(null)

  const { todoList } = useAppSelector(state => state)
  console.log(todoList)

  const dispatch = useAppDispatch()
  const addTodoList = (value: string) => {
    setValue('')
    dispatch(AddTodo(value, Math.random()))
  }
  const deleteTodo = (id: number) => {
    dispatch(DeleteTodoById(id))
  }
  const changeTodoList = (id: number, content: string) => {
    dispatch(ChangeTodos(id, content))
  }
  return (
    <div className='mainWrapper'>
      <div className='mainHeader'>
        <h1>Todo List</h1>
      </div>
      <div className='mainContent'>
        <div className='mainInputContainer'>
          <InputComponent
            placeholder='Add Todo'
            value={value}
            onChange={setValue}
          />
          <button
            onClick={() => addTodoList(value)}
            className='addTodo'
          >
            Add
          </button>
        </div>
        <div className='cardList'>
          {todoList?.map(card => (
            <div className='todoContainer' key={card.id}>
              <CardComponent
                onDelete={() => deleteTodo(card.id)}
                onReset={() => setIsOpenInputChange(card.id)}
                content={card.content}
              />
              {isOpenInputChange === card.id ? (
                <div className='mainInputContainer'>
                  <InputComponent
                    placeholder='Change Todo'
                    value={changeValue}
                    onChange={setChangeValue}
                  />
                  <button
                    onClick={() =>
                      changeTodoList(card.id, changeValue)
                    }
                    className='addTodo changeTodo'
                  >
                    Change
                  </button>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
