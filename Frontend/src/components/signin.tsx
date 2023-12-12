const Signin = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-slate-300">
      <form className="bg-white opacity-100 w-1/5 h-auto rounded-xl" action="">
        <h1 className="from-neutral-950 text-2xl flex justify-center mt-5 mb-5 font-bold underline">
          Login To Continue !
        </h1>
        <label className="m-5 pt-5 text-lg">Email :</label>
        <input
          type="text"
          className=" border-2 border-black  m-5 w-5/6 h-10 flex justify-center items-center rounded-lg"
        />
        <label className="m-5 pt-5 text-lg">Password :</label>
        <input
          type="text"
          className=" border-2 border-black  m-5 w-5/6 h-10 flex justify-center items-center rounded-lg"
        />
        <button className="bg-blue-800 w-5/6 h-10 text-white m-5 rounded-lg">
          SIGN IN
        </button>
      </form>
    </div>
  );
};

export default Signin;
