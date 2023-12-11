const Home = () => {
  return (
    <div className="relative">
      <img
        src="/src/images/news.jpg"
        alt=""
        className="opacity-60 w-screen h-screen object-cover"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg">
        <div className=" text-black text-4xl font-bold ">
          Stay Informed, Stay Connected
        </div>
        <div className="flex justify-center">
          <button className="bg-blue-700 m-4 p-2 rounded-lg text-white">
            Sign In
          </button>
          <button className="bg-blue-700 m-4 p-2 rounded-lg text-white">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
