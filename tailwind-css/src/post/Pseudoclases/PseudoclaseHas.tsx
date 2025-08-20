export const PseudoclaseHas = () => {
  return (
    <div className="mb-4">
      {/*  */}
      <div className="flex flex-col">
        <div className="text-orange-500 text-3xl m-1">
          has (si tiene un hijo que)
        </div>
        <div className="flex justify-center items-center">
          <form
            className="
            text-white bg-zinc-800 min-w-[min(90%, 400px)] rounded-2xl px-8 py-12 border border-white
            has-checked:bg-gray-500
            has-active:bg-green-200
            "
          >
            <h2 className="text-4xl font-bold mb-6">Sign Up</h2>
            <div className="flex flex-col gap-6">
              <label className="flex flex-col gap-2">
                <span className="">Name</span>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="
                  border border-white py-2 px-1 rounded-md
                  "
                />
              </label>

              <label
                className="
                flex flex-col gap-2 
                has-[input]:bg-blue-400
                "
              >
                <span className="">Email</span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="border border-white py-2 px-1 rounded-md"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="">Password</span>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="border border-white py-2 px-1 rounded-md"
                />
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                <span className="">I agree with terms and conditions</span>
              </label>
              <input
                type="submit"
                value="Sign up"
                className="bg-blue-600 py-4 font-bold rounded-md"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
