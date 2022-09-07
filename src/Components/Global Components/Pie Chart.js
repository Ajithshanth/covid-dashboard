import { Chart as ChartJS, ArcElement } from "chart.js";
import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement);

function PieChart(props) {
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      datasets: [
        {
          data: [props.active, props.closed],
          backgroundColor: ["#4166ff", "  #41cbe2"],
          borderColor: "#111827",

          borderWidth: 2,
        },
      ],
    });
    setChartOptions({
      responsive: true,
      bodyFontColor: "white",

      plugins: {
        legend: {
          position: "top",
          display: false,
        },

        labels: {
          usePointStyle: false,
          color: "white",
        },
        title: {
          display: true,
          text: "",
        },
        tooltip: {
          displayColors: false,

          backgroundColor: "black",
          bodyFont: {
            size: 15,
            weight: "bold",
          },

          yAlign: "bottom",
          padding: { top: 10, right: 30, left: 30, bottom: 10 },
        },
      },
    });
  }, []);

  return (
    <div className="w-4/5">
      <Doughnut options={chartOptions} data={chartData} />
    </div>
  );
}

export default PieChart;
