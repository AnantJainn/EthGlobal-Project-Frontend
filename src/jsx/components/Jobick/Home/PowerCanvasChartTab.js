// import React from 'react';
// import {Tab, Nav} from 'react-bootstrap';

// import CanvasChart2 from "./TabChart/CanvasChart2";
// import PowerCanvasChart2 from './TabChart/PowerCanvasChart2';

// const PowerCanvasChartTab = ()=>{
// 	return(
// 		<>	
// 			<Tab.Container defaultActiveKey="Monthly">
// 				<div className="card">
// 					<div className="card-header border-0 pb-0">
// 						<h4 className="fs-20 mb-1">Chart</h4>
// 						<div className="card-action coin-tabs mt-3 mt-sm-0">
// 							<Nav  className="nav nav-tabs" role="tablist">
// 								<Nav.Item >
// 									<Nav.Link eventKey="Daily">Daily</Nav.Link>
// 								</Nav.Item>
// 								<Nav.Item >
// 									<Nav.Link eventKey="Weekly">Weekly</Nav.Link>
// 								</Nav.Item>
// 								<Nav.Item>
// 									<Nav.Link eventKey="Monthly">Monthly</Nav.Link>
// 								</Nav.Item >
// 							</Nav>
// 						</div>
// 					</div>
// 					<div className="card-body">
// 						{/* <div className="pb-4 d-flex flex-wrap">
// 							<span className="me-sm-5 me-3 font-w500">
// 								<svg className="me-1" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13">
// 								  <rect  width="13" height="13" fill="#f73a0b"/>
// 								</svg>
// 								Delivered
// 							</span>
// 							<span className="fs-16 font-w600 me-5">239 <small className="text-success fs-12 font-w400">+0.4%</small></span>
// 							<span className="ms-sm-5 ms-3 font-w500">
// 								<svg className="me-1" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13">
// 								  <rect  width="13" height="13" fill="#6e6e6e"/>
// 								</svg>
// 								Expense
// 							</span>
// 							<span className="fs-16 font-w600 ms-1">239</span>
// 						</div> */}
// 						<Tab.Content>
// 							<Tab.Pane eventKey="Daily" >
// 								<PowerCanvasChart2 className="chartjs" dataActive={0}/>
// 							</Tab.Pane >	
// 							<Tab.Pane eventKey="Weekly">
// 								<PowerCanvasChart2 className="chartjs" dataActive={1}/>
// 							</Tab.Pane >	
// 							<Tab.Pane eventKey="Monthly">												
// 								<PowerCanvasChart2 className="chartjs" dataActive={2}/>
// 							</Tab.Pane >	
// 						</Tab.Content >	
// 					</div>
// 				</div> 
				
// 			</Tab.Container>			
// 		</>
// 	)
// }
// export default PowerCanvasChartTab;




// import React, { useState } from 'react';
// import { Tab, Nav } from 'react-bootstrap';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// import CanvasChart2 from "./TabChart/CanvasChart2";
// import PowerCanvasChart2 from './TabChart/PowerCanvasChart2';

// const PowerCanvasChartTab = () => {
//     const [startDate, setStartDate] = useState(new Date());
//     const [endDate, setEndDate] = useState(new Date());
    
//     const handleDateChange = (dates) => {
//         const [start, end] = dates;
//         setStartDate(start);
//         setEndDate(end);
//     };

//     return (
//         <>
//             <Tab.Container defaultActiveKey="Monthly">
//                 <div className="card">
//                     <div className="card-header border-0 pb-0">
//                         <h4 className="fs-20 mb-1">Chart</h4>
//                         <div className="card-action coin-tabs mt-3 mt-sm-0">
//                             <Nav className="nav nav-tabs" role="tablist">
//                                 <Nav.Item>
//                                     <Nav.Link eventKey="Daily">Daily</Nav.Link>
//                                 </Nav.Item>
//                                 <Nav.Item>
//                                     <Nav.Link eventKey="Weekly">Weekly</Nav.Link>
//                                 </Nav.Item>
//                                 <Nav.Item>
//                                     <Nav.Link eventKey="Monthly">Monthly</Nav.Link>
//                                 </Nav.Item>
//                                 <Nav.Item>
//                                     <Nav.Link eventKey="Custom">Custom</Nav.Link>
//                                 </Nav.Item>
//                             </Nav>
//                         </div>
//                     </div>
//                     <div className="card-body">
//                         <Tab.Content>
//                             <Tab.Pane eventKey="Daily">
//                                 <PowerCanvasChart2 className="chartjs" dataActive={0} />
//                             </Tab.Pane>
//                             <Tab.Pane eventKey="Weekly">
//                                 <PowerCanvasChart2 className="chartjs" dataActive={1} />
//                             </Tab.Pane>
//                             <Tab.Pane eventKey="Monthly">
//                                 <PowerCanvasChart2 className="chartjs" dataActive={2} />
//                             </Tab.Pane>
//                             <Tab.Pane eventKey="Custom">
//                                 <div className="d-flex align-items-center">
//                                     <DatePicker
//                                         selected={startDate}
//                                         onChange={handleDateChange}
//                                         startDate={startDate}
//                                         endDate={endDate}
//                                         selectsRange
//                                         inline
//                                     />
//                                 </div>
//                                 {startDate && endDate && (
//                                     <PowerCanvasChart2 className="chartjs" startDate={startDate} endDate={endDate} />
//                                 )}
//                             </Tab.Pane>
//                         </Tab.Content>
//                     </div>
//                 </div>
//             </Tab.Container>
//         </>
//     );
// };

// export default PowerCanvasChartTab;




// import React, { useState, useEffect } from 'react';
// import { Tab, Nav } from 'react-bootstrap';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { Line } from 'react-chartjs-2';

// const PowerCanvasChartTab = () => {
//     const [activeTab, setActiveTab] = useState("Daily");
//     const [startDate, setStartDate] = useState(new Date());
//     const [endDate, setEndDate] = useState(new Date());
//     const [chartData, setChartData] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);

//     const fetchData = async (fromDate, toDate) => {
//         setLoading(true);
//         setError(null);

//         try {
//             console.log("Fetching data for range:", fromDate, "to", toDate);

//             const response = await fetch('https://portal.intellotechsolutions.co.in:5000/api/intello/rtu/v1/data/total', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     rtuIds: ['RTU1928'],
//                     fromDate: fromDate.toISOString().split('T')[0], // Format to YYYY-MM-DD
//                     toDate: toDate.toISOString().split('T')[0],
//                     mode: 'homev2',
//                 }),
//             });

//             const data = await response.json();
//             console.log("API Response:", data);

//             const rtuData = data['RTU1928'] || [];
//             if (rtuData.length > 0) {
//                 const formattedData = rtuData.map(item => ({
//                     date: new Date(item.date).toLocaleDateString(),
//                     totalGeneration: item.totalgeneration,
//                 }));
//                 console.log("Formatted Chart Data:", formattedData);
//                 setChartData(formattedData);
//             } else {
//                 setChartData([]);
//                 console.warn("No data available for the selected range.");
//                 setError('No data available for the selected range.');
//             }
//         } catch (err) {
//             console.error('Error fetching data:', err);
//             setError('Failed to fetch chart data.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleTabChange = (key) => {
//         setActiveTab(key);

//         const today = new Date();
//         if (key === "Daily") {
//             fetchData(today, today);
//         } else if (key === "Weekly") {
//             const lastWeek = new Date();
//             lastWeek.setDate(today.getDate() - 7);
//             fetchData(lastWeek, today);
//         } else if (key === "Monthly") {
//             const lastMonth = new Date();
//             lastMonth.setDate(today.getDate() - 30);
//             fetchData(lastMonth, today);
//         }
//     };

//     const handleDateChange = (dates) => {
//         const [start, end] = dates;
//         setStartDate(start);
//         setEndDate(end);

//         if (start && end) {
//             fetchData(start, end);
//         }
//     };

//     useEffect(() => {
//         // Default tab fetch: Today's Data
//         handleTabChange("Daily");
//     }, []);

//     const data = chartData && chartData.length > 0
//         ? {
//               labels: chartData.map(item => item.date),
//               datasets: [
//                   {
//                       label: 'Total Generation (kWh)',
//                       data: chartData.map(item => item.totalGeneration),
//                       backgroundColor: 'rgba(75, 192, 192, 0.2)',
//                       borderColor: 'rgba(75, 192, 192, 1)',
//                       borderWidth: 2,
//                       tension: 0.4,
//                   },
//               ],
//           }
//         : {
//               labels: [],
//               datasets: [
//                   {
//                       label: 'No Data',
//                       data: [],
//                       backgroundColor: 'rgba(255, 99, 132, 0.2)',
//                       borderColor: 'rgba(255, 99, 132, 1)',
//                       borderWidth: 2,
//                   },
//               ],
//           };

//     const options = {
//         responsive: true,
//         plugins: {
//             legend: {
//                 display: true,
//             },
//         },
//         scales: {
//             x: {
//                 title: {
//                     display: true,
//                     text: 'Date',
//                 },
//             },
//             y: {
//                 title: {
//                     display: true,
//                     text: 'Total Generation (kWh)',
//                 },
//                 beginAtZero: true,
//             },
//         },
//     };

//     return (
//         <Tab.Container activeKey={activeTab} onSelect={handleTabChange}>
//             <div className="card">
//                 <div className="card-header border-0 pb-0">
//                     <h4 className="fs-20 mb-1">Power Generation Chart</h4>
//                     <div className="card-action coin-tabs mt-3 mt-sm-0">
//                         <Nav className="nav nav-tabs" role="tablist">
//                             <Nav.Item>
//                                 <Nav.Link eventKey="Daily">Today's Data</Nav.Link>
//                             </Nav.Item>
//                             <Nav.Item>
//                                 <Nav.Link eventKey="Weekly">Last 7 Days</Nav.Link>
//                             </Nav.Item>
//                             <Nav.Item>
//                                 <Nav.Link eventKey="Monthly">Last 30 Days</Nav.Link>
//                             </Nav.Item>
//                             <Nav.Item>
//                                 <Nav.Link eventKey="Custom">Custom Range</Nav.Link>
//                             </Nav.Item>
//                         </Nav>
//                     </div>
//                 </div>
//                 <div className="card-body">
//                     <Tab.Content>
//                         <Tab.Pane eventKey="Daily">
//                             {loading ? <p>Loading...</p> : error ? <p className="text-danger">{error}</p> : <Line data={data} options={options} />}
//                         </Tab.Pane>
//                         <Tab.Pane eventKey="Weekly">
//                             {loading ? <p>Loading...</p> : error ? <p className="text-danger">{error}</p> : <Line data={data} options={options} />}
//                         </Tab.Pane>
//                         <Tab.Pane eventKey="Monthly">
//                             {loading ? <p>Loading...</p> : error ? <p className="text-danger">{error}</p> : <Line data={data} options={options} />}
//                         </Tab.Pane>
//                         <Tab.Pane eventKey="Custom">
//                             <div className="d-flex align-items-center">
//                                 <DatePicker
//                                     selected={startDate}
//                                     onChange={handleDateChange}
//                                     startDate={startDate}
//                                     endDate={endDate}
//                                     selectsRange
//                                     inline
//                                 />
//                             </div>
//                             {startDate && endDate && (
//                                 loading ? <p>Loading...</p> : error ? <p className="text-danger">{error}</p> : <Line data={data} options={options} />
//                             )}
//                         </Tab.Pane>
//                     </Tab.Content>
//                 </div>
//             </div>
//         </Tab.Container>
//     );
// };

// export default PowerCanvasChartTab;




import React, { useState, useEffect } from 'react';
import { Tab, Nav } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Line } from 'react-chartjs-2';

const AUTH_API_URL = "https://portal.intellotechsolutions.co.in:5000/api/intello/authenticate";
const DATA_API_URL = "https://portal.intellotechsolutions.co.in:5000/api/intello/rtu/v1/data/total";

const PowerCanvasChartTab = () => {
    const [activeTab, setActiveTab] = useState("Daily");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [chartData, setChartData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [authToken, setAuthToken] = useState(null);

    // Authenticate User
    const authenticateUser = async () => {
        try {
            console.log("Authenticating user...");
            const response = await fetch(AUTH_API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: "prateek@enfros.co.in", // Replace with actual username
                    password: "9032961c4a5757c8b460c2ecdecbdabc337950cd7b3b1a0fb2592a4b130630ca", // Replace with actual password
                }),
            });
            const data = await response.json();
            console.log("Authentication response:", data);
            if (data.token) {
                setAuthToken(data.token);
            } else {
                setError("Authentication failed");
                console.error("Authentication failed:", data);
            }
        } catch (err) {
            setError("Failed to authenticate user");
            console.error("Error during authentication:", err);
        }
    };

    // Fetch data from the API
    const fetchData = async (fromDate, toDate) => {
        if (!authToken) {
            console.error("No auth token available");
            return;
        }

        setLoading(true);
        setError(null);

        try {
            console.log("Fetching data for range:", fromDate, "to", toDate);

            const response = await fetch(DATA_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${authToken}`,
                },
                body: JSON.stringify({
                    rtuIds: ['RTU1928'],
                    fromDate: fromDate.toISOString().split('T')[0], // Format to YYYY-MM-DD
                    toDate: toDate.toISOString().split('T')[0],
                    mode: 'homev2',
                }),
            });

            const data = await response.json();
            console.log("API Response:", data);

            const rtuData = data['RTU1928'] || [];
            if (rtuData.length > 0) {
                const formattedData = rtuData.map(item => ({
                    date: new Date(item.date).toLocaleDateString(),
                    totalGeneration: item.totalgeneration,
                }));
                console.log("Formatted Chart Data:", formattedData);
                setChartData(formattedData);
            } else {
                setChartData([]);
                console.warn("No data available for the selected range.");
                setError('No data available for the selected range.');
            }
        } catch (err) {
            console.error('Error fetching data:', err);
            setError('Failed to fetch chart data.');
        } finally {
            setLoading(false);
        }
    };

    // Handle tab change
    const handleTabChange = (key) => {
        setActiveTab(key);

        const today = new Date();
        if (key === "Daily") {
            fetchData(today, today);
        } else if (key === "Weekly") {
            const lastWeek = new Date();
            lastWeek.setDate(today.getDate() - 7);
            fetchData(lastWeek, today);
        } else if (key === "Monthly") {
            const lastMonth = new Date();
            lastMonth.setDate(today.getDate() - 30);
            fetchData(lastMonth, today);
        }
    };

    // Handle custom date range selection
    const handleDateChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);

        if (start && end) {
            fetchData(start, end);
        }
    };

    // Authenticate user on component mount
    useEffect(() => {
        authenticateUser();
    }, []);

    // Fetch data when the active tab changes or when authenticated
    useEffect(() => {
        if (authToken) {
            handleTabChange(activeTab);
        }
    }, [authToken, activeTab]);

    const data = chartData && chartData.length > 0
        ? {
              labels: chartData.map(item => item.date),
              datasets: [
                  {
                      label: 'Total Generation (kWh)',
                      data: chartData.map(item => item.totalGeneration),
                      backgroundColor: 'rgba(75, 192, 192, 0.2)',
                      borderColor: 'rgba(75, 192, 192, 1)',
                      borderWidth: 2,
                      tension: 0.4,
                  },
              ],
          }
        : {
              labels: [],
              datasets: [
                  {
                      label: 'No Data',
                      data: [],
                      backgroundColor: 'rgba(255, 99, 132, 0.2)',
                      borderColor: 'rgba(255, 99, 132, 1)',
                      borderWidth: 2,
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
        <Tab.Container activeKey={activeTab} onSelect={handleTabChange}>
            <div className="card">
                <div className="card-header border-0 pb-0">
                    <h4 className="fs-20 mb-1">Power Generation Chart</h4>
                    <div className="card-action coin-tabs mt-3 mt-sm-0">
                        <Nav className="nav nav-tabs" role="tablist">
                            <Nav.Item>
                                <Nav.Link eventKey="Daily">Today's Data</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Weekly">Last 7 Days</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Monthly">Last 30 Days</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Custom">Custom Range</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                </div>
                <div className="card-body">
                    <Tab.Content>
                        <Tab.Pane eventKey="Daily">
                            {loading ? <p>Loading...</p> : error ? <p className="text-danger">{error}</p> : <Line data={data} options={options} />}
                        </Tab.Pane>
                        <Tab.Pane eventKey="Weekly">
                            {loading ? <p>Loading...</p> : error ? <p className="text-danger">{error}</p> : <Line data={data} options={options} />}
                        </Tab.Pane>
                        <Tab.Pane eventKey="Monthly">
                            {loading ? <p>Loading...</p> : error ? <p className="text-danger">{error}</p> : <Line data={data} options={options} />}
                        </Tab.Pane>
                        <Tab.Pane eventKey="Custom">
                            <div className="d-flex align-items-center">
                                <DatePicker
                                    selected={startDate}
                                    onChange={handleDateChange}
                                    startDate={startDate}
                                    endDate={endDate}
                                    selectsRange
                                    inline
                                />
                            </div>
                            {startDate && endDate && (
                                loading ? <p>Loading...</p> : error ? <p className="text-danger">{error}</p> : <Line data={data} options={options} />
                            )}
                        </Tab.Pane>
                    </Tab.Content>
                </div>
            </div>
        </Tab.Container>
    );
};

export default PowerCanvasChartTab;
