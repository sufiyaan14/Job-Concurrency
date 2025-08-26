"use server";

let todos: { id: number; text: string; done: boolean }[] = [
  { id: 1, text: "Learn Next.js App Router", done: true },
  { id: 2, text: "Build something cool", done: false },
];

export async function addTodo(formData: FormData) {
  const text = String(formData.get("text") || "").trim();
  if (!text) return;
  const nextId = todos.length ? Math.max(...todos.map(t => t.id)) + 1 : 1;
  todos.push({ id: nextId, text, done: false });
}

export async function toggleTodo(id: number) {
  const t = todos.find(t => t.id === id);
  if (t) t.done = !t.done;
}

export async function getTodos() {
  // simulate server fetch
  return todos;
}
