export enum TodoList {
  CREATE_NEW_TODO = 'CREATE_NEW_TODO',
  DELETE_TODO = 'DELETE_TODO',
  CHANGE_TODO = 'CHANGE_TODO'
}

export interface CreateTodoList {
  type: TodoList.CREATE_NEW_TODO
  payload: {
    content: string,
    id: number
  }
}

export interface DeleteTodo {
  type: TodoList.DELETE_TODO
  payload: number
}

export interface ChangeTodo {
    type: TodoList.CHANGE_TODO,
    payload: {
        id: number,
        content: string
    }
}

export type TodoActions = CreateTodoList | DeleteTodo | ChangeTodo
