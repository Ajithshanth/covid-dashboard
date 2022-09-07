import CalendarButton from "./Global Components/Calendar Button";

function BasicInfo() {
  return (
    <div className="grid grid-cols-2 gap-4  ">
      <div className="rounded-lg bg-secondary p-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div >608,960,923 </div>

            <div className="text-lightskyblue text-xs">Total Coronovirus Cases</div>
          </div>
          <div>
            <CalendarButton />
          </div>
          <div>
            <div> 17,198,154 </div>
            <div className="text-lightskyblue text-xs"> Active Cases</div>
          </div>
          <div> 591,726,769</div>
        </div>
      </div>

      <div className="grid grid-rows-2 grid-flow-col gap-4">
        <div className="rounded-lg  bg-secondary p-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div>608,960,923 </div>

              <div className="text-lightskyblue text-xs">Deaths</div>
            </div>
            <div>
              {" "}
              <CalendarButton />
            </div>
          </div>
        </div>
        <div className="rounded-lg  bg-secondary p-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div>608,960,923 </div>

              <div className="text-lightskyblue text-xs"> Recovered</div>
            </div>
            <div>
              {" "}
              <CalendarButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasicInfo;
