interface MainProps {
  title: string;
  children?: React.ReactNode;
}

export const Main = ({ title, children }: MainProps) => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-700 via-purple-700 to-indigo-800">
      <section className="h-full flex flex-wrap justify-between items-center px-4 max-w-[1280px] mx-auto py-12">
        <div className="w-full md:w-[45%] text-white text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
          {children && (
            <div className="mt-6 text-base md:text-lg font-light">
              {children}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};
