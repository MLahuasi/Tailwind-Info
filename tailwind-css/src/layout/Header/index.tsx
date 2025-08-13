export interface HeaderProps {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export const Header = ({
  title = "Bienvenido",
  subtitle,
  children,
}: HeaderProps) => {
  return (
    <header className="h-screen bg-gradient-to-t from-pink-600 to-rose-500">
      <section className="h-full flex flex-wrap-reverse justify-between items-center px-4 max-w-[1280px] mx-auto py-12">
        <div className="w-full md:w-[45%] text-white text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold">{title}</h1>

          {subtitle && (
            <p className="mt-4 text-xl font-light text-white/80">{subtitle}</p>
          )}

          {children && <div className="mt-6">{children}</div>}
        </div>
      </section>
    </header>
  );
};
