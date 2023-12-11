const Navbar = () => {
  return (
    <nav className="bg-black  h-14 flex justify-between items-center">
      <div className="text-white pt-3 pl-5 font-bold text-xl">NewsPanda</div>
      <ul className="px-28 py-4 space-x-7 flex">
        <li className="text-white">Home</li>
        <li className="text-white">Buisiness</li>
        <li className="text-white">Entertainment</li>
        <li className="text-white">General</li>
        <li className="text-white">Health</li>
        <li className="text-white">Science</li>
        <li className="text-white">Sports</li>
        <li className="text-white">Technology</li>
      </ul>
      <button className="text-white bg-blue-800 rounded-lg h-9 w-20 m-4 text-lg ">
        Sign Out
      </button>
    </nav>
  );
};

export default Navbar;
