"use client";
import { Todo } from "@/api/todoApi";
import { useDeleteTodo, useGetTodo, useUpdateTodo } from "@/hooks/useTodo";
import { useState } from "react";

export default function TodoPage() {
  const { data, isLoading, error } = useGetTodo();
  const { mutate: updateTodo } = useUpdateTodo();
  const { mutate: deleteTodo } = useDeleteTodo();

  const handleToggleTodo = (todo: Todo) => {
    updateTodo({ ...todo, completed: !todo.completed });
    console.log("수정");
  };

  const handleDelete = (id: string) => {
    if (confirm("해당 목록을 삭제 하시겠습니까?")) {
      deleteTodo(id);
    }
  };

  //필터링
  const [filter, setFilter] = useState<"전체" | "완료" | "미완료">("전체");

  const filteredTodos = data?.filter((todo) => {
    if (filter == "완료") return todo.completed;
    if (filter == "미완료") return !todo.completed;
    return true;
  });

  if (isLoading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다 {error.message}</div>;
  console.log(data);
  return (
    <>
      <div className="flex items-center justify-between mb-5 gap-4">
        <button
          onClick={() => setFilter("전체")}
          className={`px-4 py-2 rounded-md flex-1 cursor-pointer ${
            filter === "전체" ? "bg-blue-400 text-white" : "bg-white text-black"
          }`}
        >
          전체
        </button>
        <button
          onClick={() => setFilter("완료")}
          className={`px-4 py-2 rounded-md flex-1 cursor-pointer ${
            filter === "완료" ? "bg-blue-400 text-white" : "bg-white text-black"
          }`}
        >
          완료
        </button>
        <button
          onClick={() => setFilter("미완료")}
          className={`px-4 py-2 rounded-md flex-1 cursor-pointer ${
            filter === "미완료"
              ? "bg-blue-400 text-white"
              : "bg-white text-black"
          }`}
        >
          미완료
        </button>
      </div>
      <div className="p-4 bg-white shadow-md rounded-sm">
        {filteredTodos?.length ? (
          <ul>
            {filteredTodos?.map(
              (todo: { id: string; title: string; completed: boolean }) => (
                <li
                  key={todo.id}
                  className="flex items-center justify-between border-b-gray-300 border-b p-4"
                >
                  <p
                    className={
                      todo.completed ? "line-through text-gray-400" : ""
                    }
                  >
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
                        handleDelete(todo.id);
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
        ) : (
          <p className="text-center text-gray-500 py-8">
            {filter === "완료"
              ? "완료된 목록이 없습니다"
              : filter === "미완료"
              ? "미완료된 할 일이 없습니다"
              : "할 일 목록 이 없습니다"}
          </p>
        )}
      </div>
    </>
  );
}
