import { FiCalendar } from "react-icons/fi";

function CalendarButton(props) {
  return (
    <div>
      <button className="flex border-2 border-white/50 rounded-md px-2 py-1">
        <span className="text-xss text-white"> {props.value} </span>
        <span className=" ml-2">
          {" "}
          <FiCalendar className="h-3" color="mediumturquoise" />
        </span>
      </button>

      
    </div>
  );
}

export default CalendarButton;
