import SearchBar from "./Global Components/Search Bar";
import getAllCountries from "./../Assets/JSON/GETAll Countries.json";
import { useEffect, useState } from "react";
import CountryInfo from "./Global Components/Country Info";

function CountriesInfo() {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {}, []);
  function numberWithCommas(x) {
    if (x > 0) {
      var result = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return result || x;
  }
  function getPlus(x) {
    if (x > 0) {
      var result = " + ";
    }
    return result || "";
  }
  function viewInfo(item) {
    console.log(item);
    setShowModal(true);
  }
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

  return (
    <div className="bg-secondary rounded-lg p-6">
        <CountryInfo show={showModal} handleClose={() => setShowModal(false)} />
      <div className="flex">
        <div className="flex-none w-3/5">All affected Countries</div>

        <div className="w-full">
          <SearchBar />
        </div>
      </div>

      <div>
        <table className="table-fixed mt-8 w-full">
          <thead className="text-white/50">
            <tr className="text-left text-xs">
              {headers.map((header, i) => {
                return <th key={i}> {header.text}</th>;
              })}
            </tr>
          </thead>
          <tbody className="">
            {getAllCountries.map((item, i) => {
              return (
                <tr
                onClick={(e) => viewInfo(e)}
                  className="text-xs text-right hover:bg-white/10 rounded-lg"
                  key={i}
                >
                  <td
                 
                    className="text-mediumturquoise text-left "
                  >
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
      </div>

    
    </div>
  );
}

export default CountriesInfo;
