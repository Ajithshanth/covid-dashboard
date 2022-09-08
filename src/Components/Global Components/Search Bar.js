import { useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import getAllData from "./../../Assets/JSON/Death and Recovered.json"; 

function SearchBar() {
  
  useEffect(() => {
    console.log(getAllData)
  }, []);

  return (
    <div className="flex">
      <div className="relative w-full ">
        <input
          type="search"
          id="default-search"
          className=" block p-1 pl-5  w-full  text-sm text-white bg-gray-900 rounded-2xl border border-gray-300   "
          placeholder="Search by Country"
          required
        />
        <div className="flex absolute inset-y-0 right-0 items-center cursor-pointer mr-2 bg-royalblue rounded-3xl m-1 mr-1">
          <FiSearch color="white" className="w-6 h-6 p-1 " />
        </div>
      </div>

      {/* <input />
      <span className="mt-1 ml-2">
        <FiSearch color="mediumturquoise" />
      </span> */}
    </div>
  );
}

export default SearchBar;
