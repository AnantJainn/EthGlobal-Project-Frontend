// import React from 'react';
// import {Tab, Nav} from 'react-bootstrap';

// import CanvasChart2 from "./TabChart/CanvasChart2";

// const CanvasChartTab = ()=>{
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
// 						<div className="pb-4 d-flex flex-wrap">
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
// 						</div>
// 						<Tab.Content>
// 							<Tab.Pane eventKey="Daily" >
// 								<CanvasChart2 className="chartjs" dataActive={0}/>
// 							</Tab.Pane >	
// 							<Tab.Pane eventKey="Weekly">
// 								<CanvasChart2 className="chartjs" dataActive={1}/>
// 							</Tab.Pane >	
// 							<Tab.Pane eventKey="Monthly">												
// 								<CanvasChart2 className="chartjs" dataActive={2}/>
// 							</Tab.Pane >	
// 						</Tab.Content >	
// 					</div>
// 				</div> 

// 			</Tab.Container>			
// 		</>
// 	)
// }
// export default CanvasChartTab;




// import React, { useState, useEffect } from "react";
// import { Tab, Nav } from "react-bootstrap";
// import { Bar } from "react-chartjs-2";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// // API URLs
// const AUTH_API_URL = "https://portal.intellotechsolutions.co.in:5000/api/intello/authenticate";
// const GENERATION_API_URL = "https://portal.intellotechsolutions.co.in:5000/api/intello/rtu/v1/data";

// // Main Component
// const CanvasChartTab = () => {
//   const [authToken, setAuthToken] = useState(null);
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [chartData, setChartData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Authenticate User
//   const authenticateUser = async () => {
//     try {
//       const response = await fetch(AUTH_API_URL, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           username: "prateek@enfros.co.in", // Replace with actual credentials
//           password: "9032961c4a5757c8b460c2ecdecbdabc337950cd7b3b1a0fb2592a4b130630ca",
//         }),
//       });
//       const data = await response.json();
//       if (data.token) {
//         setAuthToken(data.token);
//       } else {
//         setError("Authentication failed");
//       }
//     } catch (err) {
//       console.error("Authentication error:", err);
//       setError("Authentication failed");
//     }
//   };

//   // Fetch Generation Data
//   const fetchGenerationData = async (date) => {
//     if (!authToken) {
//       console.error("No auth token available");
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     const formattedDate = date.toISOString().split("T")[0]; // Format as YYYY-MM-DD

//     try {
//       const response = await fetch(`${GENERATION_API_URL}?fromDate=${formattedDate}&mode=Daily&resultType=site&rtuid=RTU1928`, {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${authToken}`,
//           "Content-Type": "application/json",
//         },
//       });

//       const data = await response.json();
//       if (data.length > 0) {
//         const formattedData = {
//           labels: data.map((item) => item.hour),
//           datasets: [
//             {
//               label: "Generation (kWh)",
//               data: data.map((item) => item.generation),
//               backgroundColor: "rgba(75, 192, 192, 0.2)",
//               borderColor: "rgba(75, 192, 192, 1)",
//               borderWidth: 2,
//               tension: 0.4,
//             },
//           ],
//         };
//         setChartData(formattedData);
//         console.log("Fetched Data:", data);
//       } else {
//         setChartData(null);
//         setError("No data available for the selected date.");
//       }
//     } catch (err) {
//       console.error("Error fetching generation data:", err);
//       setError("Failed to fetch data");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Authenticate user on mount
//   useEffect(() => {
//     authenticateUser();
//   }, []);

//   // Fetch data when the date changes
//   useEffect(() => {
//     if (authToken) {
//       fetchGenerationData(selectedDate);
//     }
//   }, [authToken, selectedDate]);

//   return (
//     <>
//       <Tab.Container defaultActiveKey="Daily">
//         <div className="card">
//           <div className="card-header border-0 pb-0">
//             <h4 className="fs-20 mb-1">Generation Data (10-Minute Intervals)</h4>
//             <div className="card-action coin-tabs mt-3 mt-sm-0">
//               <Nav className="nav nav-tabs" role="tablist">
//                 <Nav.Item>
//                   <Nav.Link eventKey="Daily">Select Date</Nav.Link>
//                 </Nav.Item>
//               </Nav>
//             </div>
//           </div>
//           <div className="card-body">
//             <Tab.Content>
//               <Tab.Pane eventKey="Daily">
//                 <div className="d-flex align-items-center mb-4">
//                   <DatePicker
//                     selected={selectedDate}
//                     onChange={(date) => setSelectedDate(date)}
//                     dateFormat="yyyy-MM-dd"
//                   />
//                 </div>
//                 {loading ? (
//                   <p>Loading...</p>
//                 ) : error ? (
//                   <p className="text-danger">{error}</p>
//                 ) : chartData ? (
//                   <Bar
//                     data={chartData}
//                     options={{
//                       responsive: true,
//                       maintainAspectRatio: false,
//                       scales: {
//                         x: {
//                           title: { display: true, text: "Time (10-Minute Intervals)" },
//                         },
//                         y: {
//                           title: { display: true, text: "Generation (kWh)" },
//                         },
//                       },
//                     }}
//                   />
//                 ) : (
//                   <p className="text-muted">Select a date to view data.</p>
//                 )}
//               </Tab.Pane>
//             </Tab.Content>
//           </div>
//         </div>
//       </Tab.Container>
//     </>
//   );
// };

// export default CanvasChartTab;




// import React, { useState, useEffect } from "react";
// import { Tab, Nav } from "react-bootstrap";
// import { Bar } from "react-chartjs-2";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { Line } from 'react-chartjs-2';

// const AUTH_API_URL = "https://portal.intellotechsolutions.co.in:5000/api/intello/authenticate";
// const DAILY_API_URL = "https://portal.intellotechsolutions.co.in:5000/api/intello/rtu/v1/data";
// const RANGE_API_URL = "https://portal.intellotechsolutions.co.in:5000/api/intello/rtu/v1/data/total";

// // Main Component
// const CanvasChartTab = () => {

// const [authToken, setAuthToken] = useState(null);
//     const [activeTab, setActiveTab] = useState("Daily");
//     const [selectedDate, setSelectedDate] = useState(new Date());
//     const [startDate, setStartDate] = useState(new Date());
//     const [endDate, setEndDate] = useState(new Date());
//     const [chartData, setChartData] = useState({ labels: [], datasets: [] });
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         authenticateUser();
//     }, []);

//     useEffect(() => {
//         if (authToken) {
//             fetchData(selectedDate, selectedDate, "Daily");
//         }
//     }, [authToken, selectedDate]);

//     const authenticateUser = async () => {
//         try {
//             const response = await fetch(AUTH_API_URL, {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({
//                     username: "prateek@enfros.co.in",
//                     password: "9032961c4a5757c8b460c2ecdecbdabc337950cd7b3b1a0fb2592a4b130630ca",
//                 }),
//             });
//             const data = await response.json();
//             if (data.token) {
//                 setAuthToken(data.token);
//             } else {
//                 setError("Authentication failed");
//             }
//         } catch (err) {
//             setError("Authentication failed");
//         }
//     };

//     const fetchData = async (fromDate, toDate, mode) => {
//         if (!authToken) return;
//         setLoading(true);
//         setError(null);
//         setChartData({ labels: [], datasets: [] });

//         const apiUrl = mode === "Daily" ? `${DAILY_API_URL}?fromDate=${fromDate.toISOString().split("T")[0]}&mode=Daily&resultType=site&rtuid=RTU1928` : RANGE_API_URL;
//         const requestOptions = mode === "Daily" ? {
//             method: "GET",
//             headers: { Authorization: `Bearer ${authToken}`, "Content-Type": "application/json" }
//         } : {
//             method: "POST",
//             headers: { Authorization: `Bearer ${authToken}`, "Content-Type": "application/json" },
//             body: JSON.stringify({
//                 rtuIds: ["RTU1928"],
//                 fromDate: fromDate.toISOString().split("T")[0],
//                 toDate: toDate.toISOString().split("T")[0],
//                 mode: "homev2",
//             })
//         };

//         try {
//             const response = await fetch(apiUrl, requestOptions);
//             const data = await response.json();

//             if (mode === "Daily" && Array.isArray(data)) {
//                 setChartData({
//                     labels: data.map(item => item.hour),
//                     datasets: [{
//                         label: "Generation (kWh)",
//                         data: data.map(item => item.generation || 0),
//                         backgroundColor: "rgba(75, 192, 192, 0.6)",
//                         borderColor: "rgba(75, 192, 192, 1)",
//                         borderWidth: 1,
//                     }],
//                 });
//             } else if (data["RTU1928"] && Array.isArray(data["RTU1928"])) {
//                 setChartData({
//                     labels: data["RTU1928"].map(item => new Date(item.date).toLocaleDateString()),
//                     datasets: [{
//                         label: "Total Generation (kWh)",
//                         data: data["RTU1928"].map(item => item.totalgeneration || 0),
//                         backgroundColor: "rgba(75, 192, 192, 0.2)",
//                         borderColor: "rgba(75, 192, 192, 1)",
//                         borderWidth: 2,
//                         tension: 0.4,
//                     }],
//                 });
//             } else {
//                 setError("No data available");
//             }
//         } catch (err) {
//             setError("Failed to fetch data");
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <Tab.Container activeKey={activeTab} onSelect={(tab) => {
//             setActiveTab(tab);
//             let fromDate = new Date(), toDate = new Date();
//             if (tab === "Weekly") {
//                 fromDate.setDate(toDate.getDate() - 7);
//             } else if (tab === "Monthly") {
//                 fromDate.setMonth(toDate.getMonth() - 1);
//             } else if (tab === "Yearly") {
//                 fromDate.setFullYear(toDate.getFullYear() - 1);
//             }
//             fetchData(fromDate, toDate, tab);
//         }}>
//             <div className="card">
//                 <div className="card-header border-0 pb-0">
//                     <h4 className="fs-20 mb-1">Power Generation Chart</h4>
//                     <Nav className="nav nav-tabs">
//                         <Nav.Item><Nav.Link eventKey="Daily">Daily</Nav.Link></Nav.Item>
//                         <Nav.Item><Nav.Link eventKey="Weekly">Weekly</Nav.Link></Nav.Item>
//                         <Nav.Item><Nav.Link eventKey="Monthly">Monthly</Nav.Link></Nav.Item>
//                         <Nav.Item><Nav.Link eventKey="Yearly">Yearly</Nav.Link></Nav.Item>
//                         <Nav.Item><Nav.Link eventKey="Custom">Custom</Nav.Link></Nav.Item>
//                     </Nav>
//                 </div>
//                 <div className="card-body">
//                     <Tab.Content>
//                         <Tab.Pane eventKey="Daily">
//                             <DatePicker selected={selectedDate} onChange={setSelectedDate} dateFormat="yyyy-MM-dd" />
//                             {loading ? <p>Loading...</p> : error ? <p>{error}</p> : <Bar data={chartData} />}
//                         </Tab.Pane>
//                         <Tab.Pane eventKey="Custom">
//                             <DatePicker
//                                 selected={startDate}
//                                 onChange={(dates) => { setStartDate(dates[0]); setEndDate(dates[1]); fetchData(dates[0], dates[1], "Custom"); }}
//                                 startDate={startDate}
//                                 endDate={endDate}
//                                 selectsRange
//                                 inline
//                             />
//                         </Tab.Pane>
//                         <Tab.Pane eventKey="Weekly">
//                         {loading ? <p>Loading...</p> : error ? <p>{error}</p> : <Line data={chartData} />}
//                         </Tab.Pane>
//                         <Tab.Pane eventKey="Monthly">
//                         {loading ? <p>Loading...</p> : error ? <p>{error}</p> : <Line data={chartData} />}
//                         </Tab.Pane>
//                         <Tab.Pane eventKey="Yearly">
//                         {loading ? <p>Loading...</p> : error ? <p>{error}</p> : <Line data={chartData} />}
//                         </Tab.Pane>
//                         <Tab.Pane eventKey="Custom">
//                         {loading ? <p>Loading...</p> : error ? <p>{error}</p> : <Line data={chartData} />}
//                         </Tab.Pane>
//                     </Tab.Content>
//                 </div>
//             </div>
//         </Tab.Container>
//     );
// };



// export default CanvasChartTab;






// import React, { useState, useEffect } from "react";
// import { Tab, Nav } from "react-bootstrap";
// import { Bar, Line } from "react-chartjs-2";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const AUTH_API_URL = "https://portal.intellotechsolutions.co.in:5000/api/intello/authenticate";
// const DAILY_API_URL = "https://portal.intellotechsolutions.co.in:5000/api/intello/rtu/v1/data";
// const RANGE_API_URL = "https://portal.intellotechsolutions.co.in:5000/api/intello/rtu/v1/data/total";

// const CanvasChartTab = ({ rtuId }) => {
//     const [authToken, setAuthToken] = useState(null);
//     const [activeTab, setActiveTab] = useState("Daily");
//     const [selectedDate, setSelectedDate] = useState(new Date());
//     const [startDate, setStartDate] = useState(new Date());
//     const [endDate, setEndDate] = useState(new Date());
//     const [chartData, setChartData] = useState({ labels: [], datasets: [] });
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         authenticateUser();
//     }, []);

//     useEffect(() => {
//         if (authToken && rtuId) {
//             fetchData(selectedDate, selectedDate, "Daily");
//         }
//     }, [authToken, selectedDate, rtuId]); // Ensures fetching updates with site selection

//     const authenticateUser = async () => {
//         try {
//             const response = await fetch(AUTH_API_URL, {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({
//                     username: "prateek@enfros.co.in",
//                     password: "9032961c4a5757c8b460c2ecdecbdabc337950cd7b3b1a0fb2592a4b130630ca",
//                 }),
//             });
//             const data = await response.json();
//             if (data.token) {
//                 setAuthToken(data.token);
//             } else {
//                 setError("Authentication failed");
//             }
//         } catch (err) {
//             setError("Authentication failed");
//         }
//     };

//     const fetchData = async (fromDate, toDate, mode) => {
//         if (!authToken || !rtuId) return;
//         setLoading(true);
//         setError(null);
//         setChartData({ labels: [], datasets: [] });

//         const apiUrl = mode === "Daily" 
//             ? `${DAILY_API_URL}?fromDate=${fromDate.toISOString().split("T")[0]}&mode=Daily&resultType=site&rtuid=${rtuId}` 
//             : RANGE_API_URL;

//         const requestOptions = mode === "Daily" ? {
//             method: "GET",
//             headers: { Authorization: `Bearer ${authToken}`, "Content-Type": "application/json" }
//         } : {
//             method: "POST",
//             headers: { Authorization: `Bearer ${authToken}`, "Content-Type": "application/json" },
//             body: JSON.stringify({
//                 rtuIds: [rtuId],
//                 fromDate: fromDate.toISOString().split("T")[0],
//                 toDate: toDate.toISOString().split("T")[0],
//                 mode: "homev2",
//             })
//         };

//         try {
//             const response = await fetch(apiUrl, requestOptions);
//             const data = await response.json();

//             if (mode === "Daily" && Array.isArray(data)) {
//                 setChartData({
//                     labels: data.map(item => item.hour),
//                     datasets: [{
//                         label: "Generation (kWh)",
//                         data: data.map(item => item.generation || 0),
//                         backgroundColor: "rgba(75, 192, 192, 0.6)",
//                         borderColor: "rgba(75, 192, 192, 1)",
//                         borderWidth: 1,
//                     }],
//                 });
//             } else if (data[rtuId] && Array.isArray(data[rtuId])) {
//                 setChartData({
//                     labels: data[rtuId].map(item => new Date(item.date).toLocaleDateString()),
//                     datasets: [{
//                         label: "Total Generation (kWh)",
//                         data: data[rtuId].map(item => item.totalgeneration || 0),
//                         backgroundColor: "rgba(75, 192, 192, 0.2)",
//                         borderColor: "rgba(75, 192, 192, 1)",
//                         borderWidth: 2,
//                     }],
//                 });
//             } else {
//                 setError("No data available");
//             }
//         } catch (err) {
//             setError("Failed to fetch data");
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <Tab.Container activeKey={activeTab} onSelect={(tab) => {
//             setActiveTab(tab);
//             let fromDate = new Date(), toDate = new Date();
//             if (tab === "Weekly") {
//                 fromDate.setDate(toDate.getDate() - 7);
//             } else if (tab === "Monthly") {
//                 fromDate.setMonth(toDate.getMonth() - 1);
//             } else if (tab === "Yearly") {
//                 fromDate.setFullYear(toDate.getFullYear() - 1);
//             }
//             fetchData(fromDate, toDate, tab);
//         }}>
//             <div className="card">
//                 <div className="card-header border-0 pb-0">
//                     <h4 className="fs-20 mb-1">Power Generation Chart</h4>
//                     <Nav className="nav nav-tabs">
//                         <Nav.Item><Nav.Link eventKey="Daily">Daily</Nav.Link></Nav.Item>
//                         <Nav.Item><Nav.Link eventKey="Weekly">Weekly</Nav.Link></Nav.Item>
//                         <Nav.Item><Nav.Link eventKey="Monthly">Monthly</Nav.Link></Nav.Item>
//                         <Nav.Item><Nav.Link eventKey="Yearly">Yearly</Nav.Link></Nav.Item>
//                         <Nav.Item><Nav.Link eventKey="Custom">Custom</Nav.Link></Nav.Item>
//                     </Nav>
//                 </div>
//                 <div className="card-body">
//                     <Tab.Content>
//                         <Tab.Pane eventKey="Daily">
//                             <DatePicker selected={selectedDate} onChange={setSelectedDate} dateFormat="yyyy-MM-dd" />
//                             {loading ? <p>Loading...</p> : error ? <p>{error}</p> : <Bar data={chartData} />}
//                         </Tab.Pane>
//                         <Tab.Pane eventKey="Weekly">
//                             {loading ? <p>Loading...</p> : error ? <p>{error}</p> : <Line data={chartData} />}
//                         </Tab.Pane>
//                         <Tab.Pane eventKey="Monthly">
//                             {loading ? <p>Loading...</p> : error ? <p>{error}</p> : <Line data={chartData} />}
//                         </Tab.Pane>
//                         <Tab.Pane eventKey="Yearly">
//                             {loading ? <p>Loading...</p> : error ? <p>{error}</p> : <Line data={chartData} />}
//                         </Tab.Pane>
//                         <Tab.Pane eventKey="Custom">
//                             <DatePicker
//                                 selected={startDate}
//                                 onChange={(dates) => { setStartDate(dates[0]); setEndDate(dates[1]); fetchData(dates[0], dates[1], "Custom"); }}
//                                 startDate={startDate}
//                                 endDate={endDate}
//                                 selectsRange
//                                 inline
//                             />
//                             {loading ? <p>Loading...</p> : error ? <p>{error}</p> : <Line data={chartData} />}
//                         </Tab.Pane>
//                     </Tab.Content>
//                 </div>
//             </div>
//         </Tab.Container>
//     );
// };

// export default CanvasChartTab;




// import React, { useState, useEffect } from "react";
// import { Tab, Nav } from "react-bootstrap";
// import { Bar, Line } from "react-chartjs-2";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { DateRangePicker } from "rsuite";
// import "rsuite/dist/rsuite.min.css";
// // import "./CanvasChartTab.css"; // Import custom CSS for styling

// const AUTH_API_URL = "https://portal.intellotechsolutions.co.in:5000/api/intello/authenticate";
// const DAILY_API_URL = "https://portal.intellotechsolutions.co.in:5000/api/intello/rtu/v1/data";
// const RANGE_API_URL = "https://portal.intellotechsolutions.co.in:5000/api/intello/rtu/v1/data/total";

// const CanvasChartTab = ({ rtuId }) => {
//     const [authToken, setAuthToken] = useState(null);
//     const [activeTab, setActiveTab] = useState("Daily");
//     const [selectedDate, setSelectedDate] = useState(new Date());
//     const [startDate, setStartDate] = useState(new Date());
//     const [endDate, setEndDate] = useState(new Date());
//     const [chartData, setChartData] = useState({ labels: [], datasets: [] });
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const [dateRange, setDateRange] = useState([new Date(), new Date()]);


//     useEffect(() => {
//         authenticateUser();
//     }, []);

//     useEffect(() => {
//         if (authToken && rtuId) {
//             fetchData(selectedDate, selectedDate, "Daily");
//         }
//     }, [authToken, selectedDate, rtuId]); // Ensures fetching updates with site selection

//     const authenticateUser = async () => {
//         try {
//             const response = await fetch(AUTH_API_URL, {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({
//                     username: "prateek@enfros.co.in",
//                     password: "9032961c4a5757c8b460c2ecdecbdabc337950cd7b3b1a0fb2592a4b130630ca",
//                 }),
//             });
//             const data = await response.json();
//             if (data.token) {
//                 setAuthToken(data.token);
//             } else {
//                 setError("Authentication failed");
//             }
//         } catch (err) {
//             setError("Authentication failed");
//         }
//     };

//     const fetchData = async (fromDate, toDate, mode) => {
//         if (!authToken || !rtuId) return;
//         setLoading(true);
//         setError(null);
//         setChartData({ labels: [], datasets: [] });

//         const apiUrl = mode === "Daily" 
//             ? `${DAILY_API_URL}?fromDate=${fromDate.toISOString().split("T")[0]}&mode=Daily&resultType=site&rtuid=${rtuId}` 
//             : RANGE_API_URL;

//         const requestOptions = mode === "Daily" ? {
//             method: "GET",
//             headers: { Authorization: `Bearer ${authToken}`, "Content-Type": "application/json" }
//         } : {
//             method: "POST",
//             headers: { Authorization: `Bearer ${authToken}`, "Content-Type": "application/json" },
//             body: JSON.stringify({
//                 rtuIds: [rtuId],
//                 fromDate: fromDate.toISOString().split("T")[0],
//                 toDate: toDate.toISOString().split("T")[0],
//                 mode: "homev2",
//             })
//         };

//         try {
//             const response = await fetch(apiUrl, requestOptions);
//             const data = await response.json();

//             if (mode === "Daily" && Array.isArray(data)) {
//                 setChartData({
//                     labels: data.map(item => item.hour),
//                     datasets: [{
//                         label: "Generation (kWh)",
//                         data: data.map(item => item.generation || 0),
//                         backgroundColor: "rgba(75, 192, 192, 0.6)",
//                         borderColor: "rgba(75, 192, 192, 1)",
//                         borderWidth: 1,
//                     }],
//                 });
//             } else if (data[rtuId] && Array.isArray(data[rtuId])) {
//                 setChartData({
//                     labels: data[rtuId].map(item => new Date(item.date).toLocaleDateString()),
//                     datasets: [{
//                         label: "Total Generation (kWh)",
//                         data: data[rtuId].map(item => item.totalgeneration || 0),
//                         backgroundColor: "rgba(75, 192, 192, 0.2)",
//                         borderColor: "rgba(75, 192, 192, 1)",
//                         borderWidth: 2,
//                     }],
//                 });
//             } else {
//                 setError("No data available");
//             }
//         } catch (err) {
//             setError("Failed to fetch data");
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <Tab.Container activeKey={activeTab} onSelect={(tab) => {
//             setActiveTab(tab);
//             let fromDate = new Date(), toDate = new Date();
//             if (tab === "Weekly") {
//                 fromDate.setDate(toDate.getDate() - 7);
//             } else if (tab === "Monthly") {
//                 fromDate.setMonth(toDate.getMonth() - 1);
//             } else if (tab === "Yearly") {
//                 fromDate.setFullYear(toDate.getFullYear() - 1);
//             }
//             fetchData(fromDate, toDate, tab);
//         }}>
//             <div className="card">
//                 <div className="card-header border-0 pb-0">
//                     <h4 className="fs-20 mb-1">Power Generation Chart</h4>
//                     <Nav className="nav nav-tabs">
//                         <Nav.Item><Nav.Link eventKey="Daily">Daily</Nav.Link></Nav.Item>
//                         <Nav.Item><Nav.Link eventKey="Weekly">Weekly</Nav.Link></Nav.Item>
//                         <Nav.Item><Nav.Link eventKey="Monthly">Monthly</Nav.Link></Nav.Item>
//                         <Nav.Item><Nav.Link eventKey="Yearly">Yearly</Nav.Link></Nav.Item>
//                         <Nav.Item><Nav.Link eventKey="Custom">Custom</Nav.Link></Nav.Item>
//                     </Nav>
//                 </div>
//                 <div className="card-body">
//                     <Tab.Content>
//                         <Tab.Pane eventKey="Daily">
//                             <DatePicker selected={selectedDate} onChange={setSelectedDate} dateFormat="yyyy-MM-dd" />
//                             {loading ? <p>Loading...</p> : error ? <p>{error}</p> : <Bar data={chartData} height={100} />}
//                         </Tab.Pane>
//                         <Tab.Pane eventKey="Weekly">
//                             {loading ? <p>Loading...</p> : error ? <p>{error}</p> : <Bar data={chartData} height={100} />}
//                         </Tab.Pane>
//                         <Tab.Pane eventKey="Monthly">
//                             {loading ? <p>Loading...</p> : error ? <p>{error}</p> : <Bar data={chartData} height={100} />}
//                         </Tab.Pane>
//                         <Tab.Pane eventKey="Yearly">
//                             {loading ? <p>Loading...</p> : error ? <p>{error}</p> : <Bar data={chartData} height={100} />}
//                         </Tab.Pane>
//                         <Tab.Pane eventKey="Custom">
//                             <div className="custom-date-picker">
//                                 {/* <DatePicker
//                                     selected={startDate}
//                                     onChange={(dates) => { setStartDate(dates[0]); setEndDate(dates[1]); fetchData(dates[0], dates[1], "Custom"); }}
//                                     startDate={startDate}
//                                     endDate={endDate}
//                                     selectsRange
//                                     inline
//                                 /> */}
//                                 <DateRangePicker
//                                     value={dateRange}
//                                     onChange={(range) => {
//                                         if (range) {
//                                             setDateRange(range);
//                                             fetchData(range[0], range[1], "Custom");
//                                         }
//                                     }}
//                                     format="yyyy-MM-dd"
//                                     showOneCalendar={true}
//                                     appearance="default"
//                                     placeholder="Select date range"
//                                     className="date-range-picker"
//                                 />
//                             </div>
//                             {loading ? <p>Loading...</p> : error ? <p>{error}</p> : <Bar data={chartData} height={100} />}
//                         </Tab.Pane>
//                     </Tab.Content>
//                 </div>
//             </div>
//         </Tab.Container>
//     );
// };

// export default CanvasChartTab;




// import React, { useState, useEffect } from "react";
// import { Tab, Nav } from "react-bootstrap";
// import { Bar, Line } from "react-chartjs-2";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { DateRangePicker } from "rsuite";
// import "rsuite/dist/rsuite.min.css";

// const AUTH_API_URL = "https://portal.intellotechsolutions.co.in:5000/api/intello/authenticate";
// const DAILY_API_URL = "https://portal.intellotechsolutions.co.in:5000/api/intello/rtu/v1/data";
// const RANGE_API_URL = "https://portal.intellotechsolutions.co.in:5000/api/intello/rtu/v1/data/total";


// const CanvasChartTab = ({ rtuId }) => {
//     const [authToken, setAuthToken] = useState(null);
//     const [activeTab, setActiveTab] = useState("Daily");
//     const [selectedDate, setSelectedDate] = useState(new Date());
//     const [startDate, setStartDate] = useState(new Date());
//     const [endDate, setEndDate] = useState(new Date());
//     const [chartData, setChartData] = useState({ labels: [], datasets: [] });
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const [dateRange, setDateRange] = useState([new Date(), new Date()]);

//     // NEW states for monthly selection
//     const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
//     const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

//     useEffect(() => {
//         authenticateUser();
//     }, []);

//     useEffect(() => {
//         if (authToken && rtuId) {
//             fetchData(selectedDate, selectedDate, "Daily");
//         }
//     }, [authToken, selectedDate, rtuId]);

//     const authenticateUser = async () => {
//         try {
//             const response = await fetch(AUTH_API_URL, {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({
//                     username: "prateek@enfros.co.in",
//                     password: "9032961c4a5757c8b460c2ecdecbdabc337950cd7b3b1a0fb2592a4b130630ca",
//                 }),
//             });
//             const data = await response.json();
//             if (data.token) {
//                 setAuthToken(data.token);
//             } else {
//                 setError("Authentication failed");
//             }
//         } catch (err) {
//             setError("Authentication failed");
//         }
//     };

//     const fetchData = async (fromDate, toDate, mode) => {
//         if (!authToken || !rtuId) return;

//         setLoading(true);
//         setError(null);
//         setChartData({ labels: [], datasets: [] });

//         // Decide which endpoint to call based on 'mode'
//         const apiUrl =
//             mode === "Daily"
//                 ? `${DAILY_API_URL}?fromDate=${fromDate.toISOString().split("T")[0]}&mode=Daily&resultType=site&rtuid=${rtuId}`
//                 : RANGE_API_URL;

//         // Build the request options
//         const requestOptions =
//             mode === "Daily"
//                 ? {
//                     method: "GET",
//                     headers: {
//                         Authorization: `Bearer ${authToken}`,
//                         "Content-Type": "application/json",
//                     },
//                 }
//                 : {
//                     method: "POST",
//                     headers: {
//                         Authorization: `Bearer ${authToken}`,
//                         "Content-Type": "application/json",
//                     },
//                     body: JSON.stringify({
//                         rtuIds: [rtuId],
//                         fromDate: fromDate.toISOString().split("T")[0],
//                         toDate: toDate.toISOString().split("T")[0],
//                         mode: "homev2",
//                     }),
//                 };

//         try {
//             const response = await fetch(apiUrl, requestOptions);
//             const data = await response.json();

//             // Handle Daily data (array of hourly records)
//             if (mode === "Daily" && Array.isArray(data)) {
//                 setChartData({
//                     labels: data.map((item) => item.hour),
//                     datasets: [
//                         {
//                             label: "Generation (kWh)",
//                             data: data.map((item) => item.generation || 0),
//                             backgroundColor: "rgba(75, 192, 192, 0.6)",
//                             borderColor: "rgba(75, 192, 192, 1)",
//                             borderWidth: 1,
//                         },
//                     ],
//                 });

//                 // Handle Weekly/Monthly/Yearly/Custom data (object keyed by rtuId)
//             } else if (data[rtuId] && Array.isArray(data[rtuId])) {
//                 // Only show the day (DD) on the X-axis
//                 setChartData({
//                     labels: data[rtuId].map((item) => new Date(item.date).getDate()),
//                     datasets: [
//                         {
//                             label: "Total Generation (kWh)",
//                             data: data[rtuId].map((item) => item.totalgeneration || 0),
//                             backgroundColor: "rgba(75, 192, 192, 0.2)",
//                             borderColor: "rgba(75, 192, 192, 1)",
//                             borderWidth: 2,
//                         },
//                     ],
//                 });
//             } else {
//                 setError("No data available");
//             }
//         } catch (err) {
//             setError("Failed to fetch data");
//         } finally {
//             setLoading(false);
//         }
//     };


//     // Helper to get first and last day of a given month
//     const getMonthDateRange = (year, month) => {
//         const from = new Date(year, month, 1);
//         // End date: last day of that month
//         const to = new Date(year, month + 1, 1, 23, 59, 59);
//         return { from, to };
//     };

//     return (
//         <Tab.Container
//             activeKey={activeTab}
//             onSelect={(tab) => {
//                 setActiveTab(tab);
//                 let fromDate = new Date(),
//                     toDate = new Date();
//                 if (tab === "Weekly") {
//                     fromDate.setDate(toDate.getDate() - 7);
//                     fetchData(fromDate, toDate, "Weekly");
//                 } else if (tab === "Monthly") {
//                     // Default to last 1 month, or pick the selectedMonth/selectedYear
//                     const { from, to } = getMonthDateRange(selectedYear, selectedMonth);
//                     fetchData(from, to, "Monthly");
//                 } else if (tab === "Yearly") {
//                     fromDate.setFullYear(toDate.getFullYear() - 1);
//                     fetchData(fromDate, toDate, "Yearly");
//                 } else if (tab === "Daily") {
//                     // Already handled by datepicker, but do a default fetch if you want
//                     fetchData(fromDate, fromDate, "Daily");
//                 } else if (tab === "Custom") {
//                     // Do nothing or do a default
//                 }
//             }}
//         >
//             <div className="card">
//                 <div className="card-header border-0 pb-0">
//                     <h4 className="fs-20 mb-1">Power Generation Chart</h4>
//                     <Nav className="nav nav-tabs">
//                         <Nav.Item>
//                             <Nav.Link eventKey="Daily">Daily</Nav.Link>
//                         </Nav.Item>
//                         <Nav.Item>
//                             <Nav.Link eventKey="Weekly">Weekly</Nav.Link>
//                         </Nav.Item>
//                         <Nav.Item>
//                             <Nav.Link eventKey="Monthly">Monthly</Nav.Link>
//                         </Nav.Item>
//                         <Nav.Item>
//                             <Nav.Link eventKey="Yearly">Yearly</Nav.Link>
//                         </Nav.Item>
//                         <Nav.Item>
//                             <Nav.Link eventKey="Custom">Custom</Nav.Link>
//                         </Nav.Item>
//                     </Nav>
//                 </div>
//                 <div className="card-body">
//                     <Tab.Content>
//                         <Tab.Pane eventKey="Daily">
//                             <DatePicker
//                                 selected={selectedDate}
//                                 onChange={setSelectedDate}
//                                 dateFormat="yyyy-MM-dd"
//                             />
//                             {loading ? (
//                                 <p>Loading...</p>
//                             ) : error ? (
//                                 <p>{error}</p>
//                             ) : (
//                                 <Bar data={chartData} height={100} />
//                             )}
//                         </Tab.Pane>

//                         <Tab.Pane eventKey="Weekly">
//                             {loading ? (
//                                 <p>Loading...</p>
//                             ) : error ? (
//                                 <p>{error}</p>
//                             ) : (
//                                 <Bar data={chartData} height={100} />
//                             )}
//                         </Tab.Pane>

//                         <Tab.Pane eventKey="Monthly">
//                             {/* Month / Year picker */}
//                             <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//                                 <select
//                                     value={selectedMonth}
//                                     onChange={(e) => {
//                                         const newMonth = parseInt(e.target.value, 10);
//                                         setSelectedMonth(newMonth);
//                                         const { from, to } = getMonthDateRange(selectedYear, newMonth);
//                                         fetchData(from, to, "Monthly");
//                                     }}
//                                 >
//                                     <option value={0}>January</option>
//                                     <option value={1}>February</option>
//                                     <option value={2}>March</option>
//                                     <option value={3}>April</option>
//                                     <option value={4}>May</option>
//                                     <option value={5}>June</option>
//                                     <option value={6}>July</option>
//                                     <option value={7}>August</option>
//                                     <option value={8}>September</option>
//                                     <option value={9}>October</option>
//                                     <option value={10}>November</option>
//                                     <option value={11}>December</option>
//                                 </select>

//                                 <select
//                                     value={selectedYear}
//                                     onChange={(e) => {
//                                         const newYear = parseInt(e.target.value, 10);
//                                         setSelectedYear(newYear);
//                                         const { from, to } = getMonthDateRange(newYear, selectedMonth);
//                                         fetchData(from, to, "Monthly");
//                                     }}
//                                 >
//                                     <option value={2025}>2025</option>
//                                     {/* <option value={2023}>2023</option>
//                                     <option value={2024}>2024</option> */}
//                                     {/* Add more years as needed */}
//                                 </select>
//                             </div>

//                             {loading ? (
//                                 <p>Loading...</p>
//                             ) : error ? (
//                                 <p>{error}</p>
//                             ) : (
//                                 <Bar data={chartData} height={100} />
//                             )}
//                         </Tab.Pane>

//                         <Tab.Pane eventKey="Yearly">
//                             {loading ? (
//                                 <p>Loading...</p>
//                             ) : error ? (
//                                 <p>{error}</p>
//                             ) : (
//                                 <Bar data={chartData} height={100} />
//                             )}
//                         </Tab.Pane>

//                         <Tab.Pane eventKey="Custom">
//                             <div className="custom-date-picker">
//                                 <DateRangePicker
//                                     value={dateRange}
//                                     onChange={(range) => {
//                                         if (range) {
//                                             setDateRange(range);
//                                             fetchData(range[0], range[1], "Custom");
//                                         }
//                                     }}
//                                     format="yyyy-MM-dd"
//                                     showOneCalendar={true}
//                                     appearance="default"
//                                     placeholder="Select date range"
//                                     className="date-range-picker"
//                                 />
//                             </div>
//                             {loading ? (
//                                 <p>Loading...</p>
//                             ) : error ? (
//                                 <p>{error}</p>
//                             ) : (
//                                 <Bar data={chartData} height={100} />
//                             )}
//                         </Tab.Pane>
//                     </Tab.Content>
//                 </div>
//             </div>
//         </Tab.Container>
//     );
// };

// export default CanvasChartTab;




import React, { useState, useEffect } from "react";
import { Tab, Nav, Container, Row, Col } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";

const AUTH_API_URL = "https://portal.intellotechsolutions.co.in:5000/api/intello/authenticate";
const DAILY_API_URL = "https://portal.intellotechsolutions.co.in:5000/api/intello/rtu/v1/data";
const RANGE_API_URL = "https://portal.intellotechsolutions.co.in:5000/api/intello/rtu/v1/data/total";

const CanvasChartTab = ({ rtuId }) => {
    const [authToken, setAuthToken] = useState(null);
    const [activeTab, setActiveTab] = useState("Daily");
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [chartData, setChartData] = useState({ labels: [], datasets: [] });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [dateRange, setDateRange] = useState([new Date(), new Date()]);

    // For Monthly selection
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

    // Chart.js options to ensure responsiveness
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false, // ensures the chart fills its container
    };

    useEffect(() => {
        authenticateUser();
    }, []);

    useEffect(() => {
        if (authToken && rtuId) {
            // By default, fetch Daily data for the current date
            fetchData(selectedDate, selectedDate, "Daily");
        }
    }, [authToken, rtuId, selectedDate]);

    const authenticateUser = async () => {
        try {
            const response = await fetch(AUTH_API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: "prateek@enfros.co.in",
                    password: "9032961c4a5757c8b460c2ecdecbdabc337950cd7b3b1a0fb2592a4b130630ca",
                }),
            });
            const data = await response.json();
            if (data.token) {
                setAuthToken(data.token);
            } else {
                setError("Authentication failed");
            }
        } catch (err) {
            setError("Authentication failed");
        }
    };

    const fetchData = async (fromDate, toDate, mode) => {
        if (!authToken || !rtuId) return;

        setLoading(true);
        setError(null);
        setChartData({ labels: [], datasets: [] });

        // Decide which endpoint to call based on mode
        const apiUrl =
            mode === "Daily"
                ? `${DAILY_API_URL}?fromDate=${fromDate.toISOString().split("T")[0]}&mode=Daily&resultType=site&rtuid=${rtuId}`
                : RANGE_API_URL;

        // Build request options
        const requestOptions =
            mode === "Daily"
                ? {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${authToken}`,
                        "Content-Type": "application/json",
                    },
                }
                : {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${authToken}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        rtuIds: [rtuId],
                        fromDate: fromDate.toISOString().split("T")[0],
                        toDate: toDate.toISOString().split("T")[0],
                        mode: "homev2",
                    }),
                };

        try {
            const response = await fetch(apiUrl, requestOptions);
            const data = await response.json();

            // For Daily data: array of hourly records
            if (mode === "Daily" && Array.isArray(data)) {
                setChartData({
                    labels: data.map((item) => item.hour),
                    datasets: [
                        {
                            label: "Generation (kWh)",
                            data: data.map((item) => item.generation || 0),
                            backgroundColor: "rgba(75, 192, 192, 0.6)",
                            borderColor: "rgba(75, 192, 192, 1)",
                            borderWidth: 1,
                        },
                    ],
                });
            }
            // For Weekly/Monthly/Yearly/Custom data: object keyed by rtuId
            else if (data[rtuId] && Array.isArray(data[rtuId])) {
                setChartData({
                    // Show day of month on the x-axis
                    labels: data[rtuId].map((item) => new Date(item.date).getDate()),
                    datasets: [
                        {
                            label: "Total Generation (kWh)",
                            data: data[rtuId].map((item) => item.totalgeneration || 0),
                            backgroundColor: "rgba(75, 192, 192, 0.2)",
                            borderColor: "rgba(75, 192, 192, 1)",
                            borderWidth: 2,
                        },
                    ],
                });
            } else {
                setError("No data available");
            }
        } catch (err) {
            setError("Failed to fetch data");
        } finally {
            setLoading(false);
        }
    };

    // Helper to get first and last day of a given month
    const getMonthDateRange = (year, month) => {
        const from = new Date(year, month, 1);
        // End date: last day of that month
        const to = new Date(year, month + 1, 1, 23, 59, 59);
        return { from, to };
    };

    // Handle switching between tabs
    const handleTabSelect = (tab) => {
        setActiveTab(tab);
        let fromDate = new Date(),
            toDate = new Date();

        if (tab === "Weekly") {
            fromDate.setDate(toDate.getDate() - 7);
            fetchData(fromDate, toDate, "Weekly");
        } else if (tab === "Monthly") {
            // Use the selectedMonth & selectedYear
            const { from, to } = getMonthDateRange(selectedYear, selectedMonth);
            fetchData(from, to, "Monthly");
        } else if (tab === "Yearly") {
            fromDate.setFullYear(toDate.getFullYear() - 1);
            fetchData(fromDate, toDate, "Yearly");
        } else if (tab === "Daily") {
            // Default to today's date
            fetchData(fromDate, fromDate, "Daily");
        } else if (tab === "Custom") {
            // The user picks from the date range picker
        }
    };

    return (
        // <Container fluid className="">
            <Tab.Container activeKey={activeTab} onSelect={handleTabSelect}>
                <Row className="card mx-auto" style={{ maxWidth: "100%" }}>
                    <Col xs={12}>
                        <div className="card-header border-0 pb-0">
                            <h4 className="fs-20 mb-1">Power Generation Chart</h4>
                            <Nav variant="tabs">
                                <Nav.Item>
                                    <Nav.Link eventKey="Daily">Daily</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="Weekly">Weekly</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="Monthly">Monthly</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="Yearly">Yearly</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="Custom">Custom</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>

                        <div className="card-body">
                            <Tab.Content>
                                {/* DAILY TAB */}
                                <Tab.Pane eventKey="Daily">
                                    <Row className="mb-18">
                                        <Col xs={12}>
                                            <DatePicker
                                                selected={selectedDate}
                                                onChange={setSelectedDate}
                                                dateFormat="yyyy-MM-dd"
                                                className="w-100"
                                            />
                                        </Col>
                                    </Row>
                                    {loading ? (
                                        <p>Loading...</p>
                                    ) : error ? (
                                        <p>{error}</p>
                                    ) : (
                                        <div style={{ position: "relative", minHeight: "300px" }}>
                                            <Bar data={chartData} options={chartOptions} />
                                        </div>
                                    )}
                                </Tab.Pane>

                                {/* WEEKLY TAB */}
                                <Tab.Pane eventKey="Weekly">
                                    {loading ? (
                                        <p>Loading...</p>
                                    ) : error ? (
                                        <p>{error}</p>
                                    ) : (
                                        <div style={{ position: "relative", minHeight: "300px" }}>
                                            <Bar data={chartData} options={chartOptions} />
                                        </div>
                                    )}
                                </Tab.Pane>

                                {/* MONTHLY TAB */}
                                <Tab.Pane eventKey="Monthly">
                                    <Row className="mb-3 align-items-center">
                                        <Col xs={6}>
                                            <select
                                                value={selectedMonth}
                                                onChange={(e) => {
                                                    const newMonth = parseInt(e.target.value, 10);
                                                    setSelectedMonth(newMonth);
                                                    const { from, to } = getMonthDateRange(selectedYear, newMonth);
                                                    fetchData(from, to, "Monthly");
                                                }}
                                                className="form-control"
                                            >
                                                <option value={0}>January</option>
                                                <option value={1}>February</option>
                                                <option value={2}>March</option>
                                                <option value={3}>April</option>
                                                <option value={4}>May</option>
                                                <option value={5}>June</option>
                                                <option value={6}>July</option>
                                                <option value={7}>August</option>
                                                <option value={8}>September</option>
                                                <option value={9}>October</option>
                                                <option value={10}>November</option>
                                                <option value={11}>December</option>
                                            </select>
                                        </Col>
                                        <Col xs={6}>
                                            <select
                                                value={selectedYear}
                                                onChange={(e) => {
                                                    const newYear = parseInt(e.target.value, 10);
                                                    setSelectedYear(newYear);
                                                    const { from, to } = getMonthDateRange(newYear, selectedMonth);
                                                    fetchData(from, to, "Monthly");
                                                }}
                                                className="form-control"
                                            >
                                                <option value={2025}>2025</option>
                                                {/* Add more years as needed */}
                                            </select>
                                        </Col>
                                    </Row>

                                    {loading ? (
                                        <p>Loading...</p>
                                    ) : error ? (
                                        <p>{error}</p>
                                    ) : (
                                        <div style={{ position: "relative", minHeight: "300px" }}>
                                            <Bar data={chartData} options={chartOptions} />
                                        </div>
                                    )}
                                </Tab.Pane>

                                {/* YEARLY TAB */}
                                <Tab.Pane eventKey="Yearly">
                                    {loading ? (
                                        <p>Loading...</p>
                                    ) : error ? (
                                        <p>{error}</p>
                                    ) : (
                                        <div style={{ position: "relative", minHeight: "300px" }}>
                                            <Bar data={chartData} options={chartOptions} />
                                        </div>
                                    )}
                                </Tab.Pane>

                                {/* CUSTOM TAB */}
                                <Tab.Pane eventKey="Custom">
                                    <Row className="mb-3">
                                        <Col xs={12}>
                                            <div className="custom-date-picker">
                                                <DateRangePicker
                                                    value={dateRange}
                                                    onChange={(range) => {
                                                        if (range) {
                                                            setDateRange(range);
                                                            fetchData(range[0], range[1], "Custom");
                                                        }
                                                    }}
                                                    format="yyyy-MM-dd"
                                                    showOneCalendar={true}
                                                    appearance="default"
                                                    placeholder="Select date range"
                                                    className="w-100"
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                    {loading ? (
                                        <p>Loading...</p>
                                    ) : error ? (
                                        <p>{error}</p>
                                    ) : (
                                        <div style={{ position: "relative", minHeight: "300px" }}>
                                            <Bar data={chartData} options={chartOptions} />
                                        </div>
                                    )}
                                </Tab.Pane>
                            </Tab.Content>
                        </div>
                    </Col>
                </Row>
            </Tab.Container>
        // </Container>
    );
};

export default CanvasChartTab;
