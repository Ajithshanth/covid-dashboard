import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { VscChromeClose } from "react-icons/vsc";
import Select, { StylesConfig } from "react-select";
import getAllData from "./../../Assets/JSON/GETAll Countries.json";

function SearchBar(props) {
  const [countries, setCountries] = useState([]);
  const [searchClearIcon, setSearchClearIcon] = useState(false);
  useEffect(() => {
    var countries = [];
    for (var i = 0; i < getAllData.length; i++) {
      var obj = {};
      obj.value = getAllData[i].country;
      obj.label = getAllData[i].country;
      countries.push(obj);
    }
    setCountries(countries);
  }, []);

  const colourStyles: StylesConfig<ColourOption> = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "gray",
      borderRadius: "50px",
    }),
    option: (styles) => ({ ...styles, backgroundColor: "#1d222c" }),
  };

  const searchActive = (e) => {
    props.handleChange(e);
    setSearchClearIcon(true);
  };

  const searchInActive = () => {
    setSearchClearIcon(false);
    props.handleClear();
  };

  return (
    <div className="flex">
      <div className="relative w-full ">
        <Select
          onChange={(e) => searchActive(e)}
          options={countries}
          styles={colourStyles}
        />
        {searchClearIcon ? (
          <div className="flex absolute inset-y-0 right-0 items-center cursor-pointer mr-2 bg-royalblue rounded-3xl pl-1 pr-1 m-1 mr-1">
            <VscChromeClose
              onClick={searchInActive}
              color="white"
              className="w-6 h-6 p-1 "
            />
          </div>
        ) : (
          <div className="flex absolute inset-y-0 right-0 items-center cursor-pointer mr-2 bg-royalblue rounded-3xl pl-1 pr-1 m-1 mr-1">
            <FiSearch color="white" className="w-6 h-6 p-1 " />
          </div>
        )}

        
      </div>
 
    </div>
  );
}

export default SearchBar;
