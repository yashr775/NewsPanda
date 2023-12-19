import { useRecoilState } from "recoil";
import { newsCategory } from "../atoms";

const handleSignout = () => {
  localStorage.removeItem("auth-token");
  window.location.href = "/";
};

const Navbar = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [category, setCategory] = useRecoilState(newsCategory);

  const onClickHome = () => {
    setCategory("general");
  };

  const onClickBuisiness = () => {
    setCategory("business");
  };

  const onClickEntertainment = () => {
    setCategory("entertainment");
  };

  const onClickGeneral = () => {
    setCategory("general");
  };

  const onClickHealth = () => {
    setCategory("health");
  };

  const onClickScience = () => {
    setCategory("science");
  };

  const onClickSports = () => {
    setCategory("sports");
  };

  const onClickTechnology = () => {
    setCategory("technology");
  };

  return (
    <nav className="bg-black  h-14 flex justify-between items-center">
      <div className="text-white pt-3 pl-5 font-bold text-xl">NewsPanda</div>
      <ul className="px-28 py-4 space-x-7 flex">
        <li className="text-white cursor-pointer" onClick={onClickHome}>
          Home
        </li>
        <li className="text-white cursor-pointer" onClick={onClickBuisiness}>
          Buisiness
        </li>
        <li
          className="text-white cursor-pointer"
          onClick={onClickEntertainment}
        >
          Entertainment
        </li>
        <li className="text-white cursor-pointer" onClick={onClickGeneral}>
          General
        </li>
        <li className="text-white cursor-pointer" onClick={onClickHealth}>
          Health
        </li>
        <li className="text-white cursor-pointer" onClick={onClickScience}>
          Science
        </li>
        <li className="text-white cursor-pointer" onClick={onClickSports}>
          Sports
        </li>
        <li className="text-white cursor-pointer" onClick={onClickTechnology}>
          Technology
        </li>
      </ul>
      <button
        className="text-white bg-blue-800 rounded-lg h-9 w-20 m-4 text-lg "
        onClick={handleSignout}
      >
        Sign Out
      </button>
    </nav>
  );
};

export default Navbar;
