import {
  ChangeTodo,
  CreateTodoList,
  DeleteTodo,
  TodoList,
} from './types'

export const AddTodo = (content: string, id: number): CreateTodoList => ({
  type: TodoList.CREATE_NEW_TODO,
  payload: {
    content,
    id
  }
})

export const DeleteTodoById = (id: number): DeleteTodo => ({
  type: TodoList.DELETE_TODO,
  payload: id,
})

export const ChangeTodos = (id: number, content:string): ChangeTodo => ({
  type: TodoList.CHANGE_TODO,
  payload: {
    id,
    content
  }
})
