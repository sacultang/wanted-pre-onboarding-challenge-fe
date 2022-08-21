export interface TodoItemType {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

export interface TodoContextType {
  todoList: TodoItemType[];
}
