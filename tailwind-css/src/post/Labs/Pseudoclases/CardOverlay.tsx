import img_science from "../../../assets/images/img-science.jpg";
export const CardOverlay = () => {
  return (
    <div
      className="
          h-screen
          flex
          justify-center items-center
        "
    >
      <figure
        className="
      w-70 mx-auto my-60 relative 
      rounded-3xl 
      overflow-hidden
      
      group/figure
      "
      >
        <img
          src={img_science}
          alt=""
          className="
        rounded-[inherit]

        group-hover/figure:scale-150
        group-hover/figure:rotate-30
        transition-transform
        "
        />
        <div
          className="
        absolute w-full h-full 
        bg-purple-900/70
        top-0
        rounded-[inherit]
        flex justify-center items-center

        translate-y-full

        group-hover/figure:translate-y-0
        transition-transform
        "
        >
          <h3
            className="
          text-2xl font-bold text-white opacity-0

          group-hover/figure:opacity-100
          "
          >
            !Aprende Taildwind!
          </h3>
        </div>
      </figure>
    </div>
  );
};
