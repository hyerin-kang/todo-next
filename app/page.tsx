import { AddTodo } from "@/components/AddTodo";
import TodoPage from "./todo/page";

export default function Home() {
  return (
    <div>
      <AddTodo />
      <TodoPage />
    </div>
  );
}
