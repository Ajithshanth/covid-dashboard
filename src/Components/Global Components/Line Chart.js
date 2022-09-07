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

function LineChart() {
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});
  //   useEffect(() => {
  //     const fetchPrices = async () => {
  //       const res = await fetch("https://api.coincap.io/v2/assets/?limit=5");
  //       const data = await res.json();
  //       setChartData({
  //         labels: data.data.map((crypto) => crypto.name),
  //         datasets: [
  //           {
  //             label: "Price in USD",
  //             data: data.data.map((crypto) => crypto.priceUsd),
  //             borderColor: "royalblue",
  //             backgroundColor: "rgba(53, 162, 235, 0.4)",
  //             color:"royalblue",
  //             legend: {
  //                 display: false
  //             },

  //           },
  //         ],
  //       });
  //     };
  //     fetchPrices();
  //   }, []);

  const tooltipTitle = function () {
    return "This Month";
  };
  const tooltipFooter = (tooltipItems) => {
    return tooltipItems[0].label;
  };

  useEffect(() => {
    setChartData({
      labels: ["March", "April", "May", "June", "July", "August", "Sept"],
      datasets: [
        {
          label: "Label",
          data: [12, 55, 34, 120, 720, 150, 300],
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "white",

          tension: 0.5,
          pointStyle: "circle",
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
    });
  }, []);

  return (
    <div className="w-4/5">
      <Line options={chartOptions} data={chartData} />
    </div>
  );
}

export default LineChart;
