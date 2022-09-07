import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
} from "chart.js";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement
);

function LineChart(props) {
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});
  const tooltipTitle = function () {
    return "No of Cases";
  };
  const tooltipFooter = (tooltipItems) => {
    return tooltipItems[0].label;
  };

  useEffect(() => {
    setChartData({
      labels: props.labels,
      datasets: [
        {
          data: props.data1,
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "white",
          pointStyle: "circle",
          borderWidth: 2,
          yAxisID: "y",
        },
      ],

      // datasets: [
      //   {
      //     data: props.data2,
      //     borderColor: "rgb(53, 162, 235)",
      //     backgroundColor: "white",
      //     pointStyle: "circle",
      //     borderWidth: 2,
      //     yAxisID: "y1",
      //   },
      // ],
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

          backgroundColor: "white",
          footerColor: "black",
          titleColor: "black",
          titleFont: {
            size: 10,
          },
          bodyFont: {
            size: 20,
            weight: "bold",
          },
          footerFont: {
            size: 10,
          },

          yAlign: "bottom",
          padding: { top: 10, right: 30, left: 30, bottom: 10 },

          callbacks: {
            title: tooltipTitle,
            label: function (tooltipItem) {
              return tooltipItem.parsed.y;
            },
            labelTextColor: function (context) {
              return "black";
            },

            footer: tooltipFooter,
          },
        },
      },

      interaction: {
        mode: "index",
        intersect: false,
      },
      stacked: false,

      scales: {
        y: {
          type: "linear",
          display: true,
          position: "left",
        },
        // y1: {
        //   type: "linear",
        //   display: true,
        //   position: "right",

        //   grid: {
        //     drawOnChartArea: false,
        //   },
        // },
      },
    });
  }, [props]);

  return (
    <div className="w-4/5">
      <Line options={chartOptions} data={chartData} />
    </div>
  );
}

export default LineChart;
