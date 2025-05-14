"use client";
import { useGetTodo } from "@/hooks/useTodo";

export default function TodoPage() {
  const { data, isLoading, error } = useGetTodo();
  if (isLoading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다 {error.message}</div>;
  console.log(data);
  return (
    <div className="p-4 bg-white shadow-md rounded-sm">
      <ul>
        {data?.map(
          (todo: { id: string; title: string; completed: boolean }) => (
            <li key={todo.id} className="flex items-center justify-between">
              <p>{todo.title}</p>
              <button>{todo.completed ? "완료" : "미완료"}</button>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
