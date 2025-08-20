export const CustomHero = () => {
  return (
    <div className="mb-4">
      <div className="text-orange-500 text-3xl m-1">(CustomHero)</div>
      <div className="bg-principal-pagina h-[70vh]">
        <section
          className="
            min-h-130
            p-8 mt-15
            bg-(image:--hero-img) bg-center bg-cover
            w-[90%] mx-auto
            rounded-3xl
            
            flex flex-col gap-4
            justify-center items-center
            text-white text-center


            md:text-left
            md:justify-end
            md:items-start
            md:pb-20
        "
        >
          <h1
            className="
          text-4xl font-bold

          md:text-5xl
          "
          >
            Domina CSS desde Cero a Héroe
          </h1>
          <p className="md:max-w-[65%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            incidunt doloremque quisquam veniam sequi, placeat quae ea
            accusantium! Quo cum deleniti aspernatur? Nobis porro aut facilis
            sunt sequi maiores similique.
          </p>
          <a
            href="#"
            className="
            py-4 px-6
            rounded-full font-bold
          bg-button
          text-principal-pagina
          "
          >
            Inscríbete ahora!
          </a>
        </section>
      </div>
    </div>
  );
};
