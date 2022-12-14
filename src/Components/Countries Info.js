import SearchBar from "./Global Components/Search Bar";
import getAllCountries from "./../Assets/JSON/GETAll Countries.json";
import { useEffect, useState } from "react";
import CountryInfo from "./Global Components/Country Info";
import Pagination from "react-bootstrap/Pagination";

function CountriesInfo() {
  const [showModal, setShowModal] = useState(false);
  const [country, setCountry] = useState({});
  const [active, setActive] = useState(1);
  const [data, setData] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const dataCount = 10;

  useEffect(() => {
    let pageCount = Math.ceil(getAllCountries.length / dataCount);
    setPageCount(pageCount);
    changePage(1);
  }, []);
  let pageNumbers = [];
  for (let number = 1; number <= pageCount; number++) {
    pageNumbers.push(
      <Pagination.Item
        className={"paginationItemStyle"}
        onClick={() => changePage(number)}
        key={number}
        active={number === active}
      >
        {number}
      </Pagination.Item>
    );
  }


  const changePage = (pageNo) => {
    setActive(pageNo);
    let itemEnd = dataCount * pageNo;
    let itemStart = itemEnd - dataCount;
    let itemsLocal = getAllCountries.slice(itemStart, itemEnd);
    setData(itemsLocal);
  }

  const numberWithCommas = (x) => {
    if (x > 0) {
      var result = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return result || x;
  };
  const getPlus = (x) => {
    if (x > 0) {
      var result = " + ";
    }
    return result || "";
  };
  const viewInfo = (item) => {
    setShowModal(true);
    setCountry(item);
  };
  const headers = [
    { text: "Country", value: "country" },
    { text: "Total Cases", value: "cases" },
    { text: "New Cases", value: "todayCases" },
    { text: "Total Deaths", value: "deaths" },
    { text: "New Deaths", value: "todayDeaths" },
    { text: "Total Recovered", value: "recovered" },
    { text: "New Recovered", value: "newRecovered" },
    { text: "Active Cases", value: "active" },
    { text: "Critical", value: "critical" },
  ];
  const handleChange = (e) => {
    var result = getAllCountries.filter((obj) => {
      return obj.country === e.value;
    });

    console.log(result);
    setData(result);
    
  };
  const handleClear = () => {
    changePage(active);
    // setData(getAllCountries);
  };
  return (
    <div className="bg-slate-800 rounded-lg p-6">
      <CountryInfo
        handleShow={showModal}
        handleClose={() => setShowModal(false)}
        item={country}
      />

      <div className="flex">
        <div className="flex-none w-3/5">All affected Countries</div>

        <div className="w-full">
          <SearchBar handleChange={handleChange} handleClear={handleClear} />
        </div>
      </div>

      <div>
        <table className="table-fixed mt-8 w-full border-separate border-spacing-y-4 ">
          <thead className="text-white/50">
            <tr className="text-left text-xs">
              {headers.map((header, i) => {
                return <th key={i}> {header.text}</th>;
              })}
            </tr>
          </thead>
          <tbody className="">
            {data.map((item, i) => {
              return (
                <tr
                  onClick={() => viewInfo(item)}
                  className="text-xs text-right hover:bg-white/10 rounded-lg cursor-pointer"
                  key={i}
                >
                  <td className="text-mediumturquoise text-left ">
                    {item.country} &gt;{" "}
                  </td>
                  <td> {numberWithCommas(item.cases)}</td>
                  <td className="text-khaki">
                    {getPlus(item.todayCases) +
                      numberWithCommas(item.todayCases)}
                  </td>
                  <td> {numberWithCommas(item.deaths)}</td>
                  <td className="text-tomato">
                    {getPlus(item.todayDeaths) +
                      numberWithCommas(item.todayDeaths)}
                  </td>
                  <td> {numberWithCommas(item.recovered)}</td>
                  <td className="text-lightgreen">
                    {getPlus(item.newRecovered) +
                      numberWithCommas(item.newRecovered)}
                  </td>
                  <td> {numberWithCommas(item.active)}</td>
                  <td> {numberWithCommas(item.critical)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="mt-4 flex justify-center">
          <Pagination size="sm">{pageNumbers}</Pagination>
        </div>
      </div>
    </div>
  );
}

export default CountriesInfo;
