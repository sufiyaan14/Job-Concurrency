import { addTodo, getTodos, toggleTodo } from "./actions";

export const dynamic = "force-dynamic";

export default async function TodosPage() {
  const todos = await getTodos();

  return (
    <section>
      <h2>Todos (Server Actions)</h2>
      <form action={addTodo} style={{display:"flex", gap:".5rem", margin:"1rem 0"}}>
        <input name="text" placeholder="Add a todo..." />
        <button type="submit">Add</button>
      </form>
      <ul style={{listStyle:"none", padding:0}}>
        {todos.map(t => (
          <li key={t.id} style={{display:"flex", alignItems:"center", gap:".5rem", padding:".25rem 0"}}>
            <form action={async () => { "use server"; await toggleTodo(t.id); }}>
              <button type="submit" aria-label="toggle">
                {t.done ? "✅" : "⬜"}
              </button>
            </form>
            <span style={{opacity: t.done ? .6 : 1, textDecoration: t.done ? "line-through" : "none"}}>
              {t.text}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
