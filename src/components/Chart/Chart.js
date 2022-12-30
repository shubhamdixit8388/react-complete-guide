import ChartBar from "./ChartBar";
import './Chart.css'

const Chart = props => {
    const maxValue = props.dataPoints.reduce((prev, current) => (prev.value > current.value) ? prev : current).value;
    console.log(maxValue);
    return (
        <div className="chart">
            {
                props.dataPoints.map(dataPoint => {
                    return <ChartBar value={dataPoint.value} maxValue={maxValue} label={dataPoint.label} key={dataPoint.label}></ChartBar>
                })
            }
        </div>
    )
}

export default Chart;