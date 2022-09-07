import { FiCalendar } from "react-icons/fi";

function CalendarButton() {
  return (
    <div>
      <button className="flex border-2 border-white/50 rounded-md px-2 py-1">
        <span className="text-md"> All Time </span>
        <span className="mt-1 ml-2">
          {" "}
          <FiCalendar color="mediumturquoise" />
        </span>
      </button>

      
    </div>
  );
}

export default CalendarButton;
