import CalendarButton from "./Global Components/Calendar Button";
import LineChart from "./Global Components/Line Chart";
import getAllData from "./../Assets/JSON/Death and Recovered.json"; 

function CasesInfo() {
  const labels = Object.keys(getAllData.cases);

  const dataCases = Object.values(getAllData.cases);
  // const dataDeaths = Object.values(getAllData.deaths);
  // const dataRecovered = Object.values(getAllData.recovered);

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="flex">
        <div className="flex-none w-3/5"> Total No. of Cases</div>

        <div className="grid grid-cols-3 justify-center">
          <div className="text-xs border-t-2 border-royalblue rounde-lg w-3/4 pt-1">
            {" "}
            Recovered
          </div>
          <div className="text-xs border-t-2 border-royalblue rounde-lg w-3/4  pt-1">
            {" "}
            Deaths
          </div>
          <div>
            <CalendarButton value="March 2020" />
          </div>
        </div>
      </div>

      <div>
        <LineChart labels={labels} data1={dataCases}   />
      </div>
    </div>
  );
}

export default CasesInfo;
