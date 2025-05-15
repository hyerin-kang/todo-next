import { AddTodo } from "@/components/AddTodo";
import TodoPage from "./todo/page";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto">
      <AddTodo />
      <TodoPage />
    </div>
  );
}
