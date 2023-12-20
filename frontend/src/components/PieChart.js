import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';


const PieChart = ({PieData}) => {
    console.log('PieChart')
    console.log(PieData?.categories)
    console.log(Object.keys(PieData?.categories))
    const keys = Object.keys(PieData?.categories)
    const values = Object.values(PieData?.categories)
    const data = {
        labels: keys,
        datasets: [
            {
                data: values,
                backgroundColor: [
                    'red',
                    'blue',
                    'yellow',
                    'green',
                    'purple',
                    'orange',
                ],
            },
        ],
    };

    const options = {
        animation: {
            duration: 1000,
        },
    };
    return <Pie data={data} options={options} />;

}

export default PieChart