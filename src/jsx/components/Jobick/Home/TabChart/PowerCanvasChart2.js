// import React, { Component } from "react";
// import { Bar } from "react-chartjs-2";
// import BarChart1 from "../../../charts/Chartjs/bar1";
// import LineChart1 from "../../../charts/Chartjs/line1";

// class PowerCanvasChart2 extends Component {
//     render() {
//         var activityData = [
//             [35, 18, 15, 35, 40, 20, 30, 25, 22, 20, 45, 35, 35],
//             [25, 88, 25, 50, 21, 42, 60, 33, 50, 60, 50, 20, 25],
//             [50, 35, 10, 45, 40, 50, 60, 35, 10, 50, 34, 35, 50],
//             [20, 35, 60, 45, 40, 35, 30, 35, 10, 40, 60, 20, 20],
//         ];
//         const data = {
//             labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13"],
//             datasets: [{
//                 label: "My First dataset",
//                 backgroundColor: '#F73A0B',
//                 borderColor: 'var(--primary)',
//                 data: activityData[this.props.dataActive],
//                 borderWidth: 0,
//                 barThickness: 'flex',
//                 minBarLength: 10,
//                 barPercentage: 0.3,
//             }]
//         };
//         const options = {
//             responsive: true,
//             maintainAspectRatio: false,

//             plugins: {
//                 legend: false,
//             },
//             scales: {
//                 y: {
//                     grid: {
//                         color: "rgba(255,255,255,0.2)",
//                         drawBorder: true
//                     },
//                     ticks: {
//                         fontColor: "#6E6E6E",
//                         max: 60,
//                         min: 0,
//                         stepSize: 20
//                     },
//                 },
//                 x: {


//                     grid: {
//                         display: false,
//                         zeroLineColor: "transparent"
//                     },
//                     ticks: {
//                         stepSize: 20,
//                         fontColor: "#6E6E6E",
//                         fontFamily: "Nunito, sans-serif"
//                     }
//                 }
//             },
//             tooltips: {
//                 mode: "index",
//                 intersect: false,
//                 titleFontColor: "#888",
//                 bodyFontColor: "#555",
//                 titleFontSize: 12,
//                 bodyFontSize: 15,
//                 backgroundColor: "rgba(255,255,255,1)",
//                 displayColors: true,
//                 xPadding: 10,
//                 yPadding: 7,
//                 borderColor: "rgba(220, 220, 220, 1)",
//                 borderWidth: 1,
//                 caretSize: 6,
//                 caretPadding: 10
//             }
//         };

//         return (
//             <div>
//                 <LineChart1
//                     data={data}
//                     width={this.props.width }
//                     height={this.props.height }
//                     options={options}
//                 />
//             </div>
//         );
//     }
// }

// export default PowerCanvasChart2;



import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

const PowerCanvasChart2 = ({ startDate, endDate }) => {
    const [chartData, setChartData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchChartData = async (fromDate, toDate) => {
        setLoading(true);
        try {
            const response = await fetch('https://portal.intellotechsolutions.co.in:5000/api/intello/rtu/v1/data/total', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    rtuIds: ['RTU1928'],
                    fromDate: fromDate.toISOString().split('T')[0], // Convert to YYYY-MM-DD
                    toDate: toDate.toISOString().split('T')[0],
                    mode: 'homev2',
                }),
            });

            const data = await response.json();
            const rtuData = data['RTU1928'] || [];
            const formattedData = rtuData.map(item => ({
                date: new Date(item.date).toLocaleDateString(),
                totalGeneration: item.totalgeneration,
            }));

            if (formattedData.length > 0) {
                setChartData(formattedData);
                setError(null);
            } else {
                setError('No data available for the selected range.');
            }
        } catch (err) {
            console.error('Error fetching chart data:', err);
            setError('Failed to fetch chart data.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (startDate && endDate) {
            fetchChartData(startDate, endDate);
        }
    }, [startDate, endDate]);

    const data = chartData
        ? {
              labels: chartData.map(item => item.date),
              datasets: [
                  {
                      label: 'Total Generation (kWh)',
                      data: chartData.map(item => item.totalGeneration),
                      backgroundColor: 'rgba(75, 192, 192, 0.2)',
                      borderColor: 'rgba(75, 192, 192, 1)',
                      borderWidth: 1,
                      tension: 0.4,
                  },
              ],
          }
        : {
              labels: ['No Data'],
              datasets: [
                  {
                      label: 'No Data',
                      data: [0],
                      backgroundColor: 'rgba(255, 99, 132, 0.2)',
                      borderColor: 'rgba(255, 99, 132, 1)',
                      borderWidth: 1,
                  },
              ],
          };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Date',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Total Generation (kWh)',
                },
                beginAtZero: true,
            },
        },
    };

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p className="text-danger">{error}</p>
            ) : (
                <Line data={data} options={options} />
            )}
        </div>
    );
};

export default PowerCanvasChart2;
