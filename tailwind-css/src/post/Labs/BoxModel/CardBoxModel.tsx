import imgMountain from "../../../assets/images/img-mountain.jpg";

export const CardBoxModel = () => {
  return (
    <div className="h-screen">
      <article
        className="
        w-md mx-auto my-20
        border border-gray-500/50
        py-7 px-5
        space-y-8
        rounded-2xl
        "
      >
        <img
          src={imgMountain}
          alt=""
          className="
          w-full h-60
          rounded-md
          object-cover
          "
        />
        <h3
          className="
          text-3xl font-bold
          my-6
          "
        >
          !Titulo Card!
        </h3>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quidem
          necessitatibus explicabo eligendi quo fugit? Quam explicabo
          dignissimos ad libero voluptates vero quaerat, atque ut voluptas sequi
          iusto molestias animi!
        </p>
        <a
          href="#"
          className="
            block
            bg-blue-600
            text-white text-center 
            py-4
            rounded-full
          "
        >
          More Info
        </a>
      </article>
    </div>
  );
};
