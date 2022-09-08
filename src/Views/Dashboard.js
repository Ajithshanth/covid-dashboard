import BasicInfo from "../Components/Basic Info";
import CasesInfo from "../Components/Cases Info";
import CountriesInfo from "../Components/Countries Info";

function Dashboard() {
  return (
    <div className="p-8 text-white">
      <div className="text-xl font-semibold" >Global Covid-19 update</div>

      <div className="grid gap-6 py-4">
        <BasicInfo />
        <CasesInfo />
        <CountriesInfo /> 
      </div>
    </div>
  );
}

export default Dashboard;
