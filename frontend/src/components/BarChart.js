import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';


const BarChart = ({ BarData }) => {
    const data = {
        labels: ['0-100', '101-200', '201-300', '301-400', '401-500', '501-600', '601-700', '701-800', '801-900', '901-above'],
        datasets: [
            {
                label: 'Monthly Items',
                data: BarData?.pRangeProduct,
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 2,
            },
        ],
    }

    const options = {
        scales: {
            x: {
              type: 'category',
              position: 'bottom',
              beginAtZero: true,
              title: {
                display: true,
                text: 'Price Range',
              },
            },
            y: {
              type: 'linear',
              position: 'left',
              beginAtZero: true,
              title: {
                display: true,
                text: 'Count',
              },
            },
          },
          animation: {
            duration: 1000,
          },
    };

    return <Bar  data={data} options={options} />
}

export default BarChart