import { Chart as ChartJS, BarElement } from "chart.js";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
ChartJS.register(BarElement);

function BarChart(props) {
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: props.labels,
      datasets: [
        {
          label: props.labelName,
          data: props.data,
          backgroundColor: ["#41cbe2"],
          borderColor: ["#41cbe2"],
          borderWidth: 1,
          borderRadius: 5,
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
  }, [props]);

  return (
    <div className="w-4/5">
      <Bar options={chartOptions} data={chartData} />
    </div>
  );
}

export default BarChart;
