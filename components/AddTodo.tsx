"use client";

import { useAddTodo } from "@/hooks/useTodo";
import { useState } from "react";

export const AddTodo = () => {
  const [input, setInput] = useState("");
  const { mutate: addTodo } = useAddTodo();

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return alert("할일을 입력해주세요!");
    addTodo({ id: crypto.randomUUID(), title: input, completed: false });
    setInput("");
  };
  return (
    <form
      onSubmit={handleAddTodo}
      className="flex items-center gap-4 p-4 rounded-md bg-white shadow-md mb-4"
    >
      <input
        type="text"
        placeholder="할일을 입력하세요"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border-gray-300 border p-2 rounded-md flex-1"
      />
      <button
        type="submit"
        className="cursor-pointer p-2 rounded-md bg-blue-500 text-white"
      >
        추가
      </button>
    </form>
  );
};
