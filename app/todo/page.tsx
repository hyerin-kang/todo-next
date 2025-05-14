"use client";
import { Todo } from "@/api/todoApi";
import { useGetTodo, useUpdateTodo } from "@/hooks/useTodo";

export default function TodoPage() {
  const { data, isLoading, error } = useGetTodo();
  const { mutate: updateTodo } = useUpdateTodo();

  const handleToggleTodo = (todo: Todo) => {
    updateTodo({ ...todo, completed: !todo.completed });
    console.log("수정");
  };
  if (isLoading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다 {error.message}</div>;
  console.log(data);
  return (
    <div className="p-4 bg-white shadow-md rounded-sm">
      <ul>
        {data?.map(
          (todo: { id: string; title: string; completed: boolean }) => (
            <li key={todo.id} className="flex items-center justify-between">
              <p className={todo.completed ? "line-through text-gray-400" : ""}>
                {todo.title}
              </p>
              <button
                onClick={() => {
                  handleToggleTodo(todo);
                }}
              >
                {todo.completed ? "완료" : "미완료"}
              </button>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
