import { TodoColorItem, type TodoColorItemProps } from "./TodoColorItem";

export interface TodoColorProps {
  todos: TodoColorItemProps[];
}
export const TodoColor = ({ todos }: TodoColorProps) => {
  return (
    <div
      className="
        h-screen 
        bg-zinc-950
        p-12"
    >
      <section
        className="
        text-white 
        border-2
        px-8
        py-10
        w-max
        mx-auto
        rounded-xl
        "
      >
        <h2
          className="
            text-3xl
            font-bold
            text-center
            mb-10
            "
        >
          !Lista de Tareas! 👋
        </h2>
        <section className="grid gap-10">
          {todos.map((item, index) => (
            <TodoColorItem
              key={`todo-color-item-${index}`}
              title={item.title}
              description={item.description}
              color={item.color}
            />
          ))}

          {/* Botón */}
          <a
            href="#"
            className="
              bg-fuchsia-800
              text-white
              w-max
              py-4
              px-8
              rounded-md
              ml-auto
              "
          >
            Agregar Tarea
          </a>
        </section>
      </section>
    </div>
  );
};
