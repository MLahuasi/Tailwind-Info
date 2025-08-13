// Mapea los colores manualmente
const colorMap = {
  fuchsia: {
    bg: "bg-fuchsia-300",
    text: "text-fuchsia-900",
    shadow: "shadow-fuchsia-300/50",
  },
  rose: {
    bg: "bg-rose-300",
    text: "text-rose-900",
    shadow: "shadow-rose-300/50",
  },
  lime: {
    bg: "bg-lime-300",
    text: "text-lime-900",
    shadow: "shadow-lime-300/50",
  },
};

export interface TodoColorItemProps {
  title: string;
  description: string;
  color: "fuchsia" | "rose" | "lime";
}

export const TodoColorItem = ({
  title,
  description,
  color,
}: TodoColorItemProps) => {
  const { bg, text, shadow } = colorMap[color];
  console.log({
    bg,
    text,
    shadow,
  });
  return (
    <article className="flex items-start gap-4">
      {/* Ícono con fondo de color */}
      <div
        className={`w-max flex items-center justify-center ${bg} p-2 rounded-sm shadow-md ${shadow}`}
      >
        <i className={`bx bx-calendar-check text-[20px] ${text}`}></i>
      </div>

      {/* Contenido textual de la tarea */}
      <article>
        <p className="text-xl font-bold">{title}</p>
        <p>{description}</p>
      </article>
    </article>
  );
};
