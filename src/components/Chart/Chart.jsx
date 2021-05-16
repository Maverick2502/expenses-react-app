import ChartBar from "./ChartBar";
import "/Chart.css";

function Chart(props) {
  return (
    <div className="name">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={null}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;