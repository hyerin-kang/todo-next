"use client";
import { Todo } from "@/api/todoApi";
import { useDeleteTodo, useGetTodo, useUpdateTodo } from "@/hooks/useTodo";

export default function TodoPage() {
  const { data, isLoading, error } = useGetTodo();
  const { mutate: updateTodo } = useUpdateTodo();
  const { mutate: deleteTodo } = useDeleteTodo();

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
            <li
              key={todo.id}
              className="flex items-center justify-between border-b-gray-300 border-b p-4"
            >
              <p className={todo.completed ? "line-through text-gray-400" : ""}>
                {todo.title}
              </p>
              <div>
                <button
                  onClick={() => {
                    handleToggleTodo(todo);
                  }}
                  className={
                    todo.completed
                      ? "bg-gray-300 py-2 px-3 rounded-md cursor-pointer mr-2 text-white"
                      : "bg-blue-200 py-2 px-3 rounded-md cursor-pointer mr-2 "
                  }
                >
                  {todo.completed ? "완료" : "미완료"}
                </button>
                <button
                  onClick={() => {
                    deleteTodo(todo.id);
                  }}
                  className="bg-red-200 py-2 px-3 rounded-md cursor-pointer"
                >
                  삭제
                </button>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
