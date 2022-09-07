import CalendarButton from "./Global Components/Calendar Button";
import LineChart from "./Global Components/Line Chart"; 

function CasesInfo() {
  return (
    <div className="bg-secondary rounded-lg p-6">
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
            <CalendarButton />
          </div>
        </div>
      </div>

      <div>
        <LineChart />
      </div>
    </div>
  );
}

export default CasesInfo;
