// apis/todoApi.ts
export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

const BASE_URL = "http://localhost:4000/todos";

export const fetchTodos = async (): Promise<Todo[]> => {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error("투두 데이터 불러오기 실패");
  return res.json();
};

export const addTodo = async (newTodo: Todo): Promise<void> => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newTodo),
  });
  if (!res.ok) throw new Error("할일 추가 실패");
};
