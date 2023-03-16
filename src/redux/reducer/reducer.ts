import { TodoActions, TodoList } from './types'

interface List {
    content: string
    id: number
}

export interface InitialState {
  todoList: List[]
}

export const initialState: InitialState = {
  todoList: [],
}

export function reducer(state = initialState, action: TodoActions) {
  switch (action.type) {
    case TodoList.CREATE_NEW_TODO: {
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      }
    }
    case TodoList.DELETE_TODO: {
      return {
        ...state,
        todoList: [...state.todoList].filter(
          (todo) => todo.id !== action.payload
        ),
      }
    }
    case TodoList.CHANGE_TODO: {
      return {
        ...state,
        todoList: [...state.todoList].map(todos => todos.id === action.payload.id ? {...todos, content: action.payload.content} : todos)
      }
    }

    default:
      return { ...state }
  }
}
