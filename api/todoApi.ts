export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL as string;

//일기
export const fetchTodos = async (): Promise<Todo[]> => {
  const res = await fetch(`${BASE_URL}/todos`);
  if (!res.ok) throw new Error("투두 데이터 불러오기 실패");
  return res.json();
};

//추가
export const addTodo = async (newTodo: Todo): Promise<void> => {
  const res = await fetch(`${BASE_URL}/todos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newTodo),
  });
  if (!res.ok) throw new Error("할일 추가 실패");
  return res.json();
};

//수정
export const updateTodo = async (updateTodo: Todo) => {
  const res = await fetch(`${BASE_URL}/todos/${updateTodo.id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updateTodo),
  });
  if (!res.ok) throw new Error("할일 수정 실패");
  return res.json();
};

//삭제
export const deleteTodo = async (id: string) => {
  const res = await fetch(`${BASE_URL}/todos/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("할일 삭제 실패");
  return res.json();
};
