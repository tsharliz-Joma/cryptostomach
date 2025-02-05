import PropTypes from "prop-types";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Filler, Tooltip, Legend);

const PriceGraph = ({ historicalData, coinName }) => {
  // This creates an array of dates and slices the first 5 characters of the date string
  const labels = historicalData?.prices.map((dataType) =>
    new Date(dataType[0]).toLocaleDateString().slice(0, 5)
  );
  // This maps through each price data and returns the second element of the array which is the price
  const priceData = historicalData?.prices.map((data) => data[1]);

  const chartData = {
    labels,
    datasets: [
      {
        label: `${coinName} Price`,
        data: priceData,
        borderColor: "#4A90E2",
        backgroundColor: "rgba(74, 144, 226, 0.2)",
        pointBorderColor: "#4A90E2",
        pointBackgroundColor: "#FFF",
        fill: true,
        tension: 0.2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      x: { grid: { display: false }, ticks: { color: "#666" } },
      y: { ticks: { color: "#666" } },
    },
  };

  return (
    <div className="h-60">
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

PriceGraph.propTypes = {
  historicalData: PropTypes.object,
  coinName: PropTypes.string,
};

export default PriceGraph;
