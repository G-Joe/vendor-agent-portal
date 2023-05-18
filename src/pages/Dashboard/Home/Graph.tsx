import {Line} from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    Title,
    Tooltip,
    LinearScale,
    PointElement,
    CategoryScale,
    Filler,
    Legend
} from "chart.js";

ChartJS.register(
    LineElement,
    Title,
    Tooltip,
    LinearScale,
    PointElement,
    CategoryScale,
    Legend,
    Filler
)


const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets:[{
        label: 'Interest (₦‎)',
        data: [1500, 1600, 1700, 1600, 1500, 1400, 1500, 1500, 1600, 1800, 1600, 1500],
        backgroundColor: '#ecfefd',
        borderColor: '#2bd9c7',
        tension: 0.5,
        fill: true,
        
    }],
}

const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales:{
        x: {
            grid:{
                display: false
            },
        },
        y: {
            grid:{
                display: false
            },
            min: 1000,
            max: 2000,
            display: false,
            ticks:{
                stepSize: 500,
            }
        }
    },
   plugins: {
    tooltip: {
        enabled: true,
        backgroundColor: '#2BD9C7',
    }
   },
   
}




const Graph = () => {
    
    return (
        <div style={{height:'440px'}}>
        <Line data={data} options={options}></Line>
        </div>
    )
}

export default Graph;