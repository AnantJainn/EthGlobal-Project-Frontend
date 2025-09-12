// import React, { useState, useContext, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import loadable from "@loadable/component";
// import pMinDelay from "p-min-delay";
// import { Dropdown } from 'react-bootstrap';

// //Import Components
// import { ThemeContext } from "../../../context/ThemeContext";
// import VacanyTab from '../Jobick/Home/VacanyTab';
// import CanvasChartTab from '../Jobick/Home/CanvasChartTab';
// import FeaturedCompanies from '../Jobick/Home/FeaturedCompanies';
// import RecentActivity from '../Jobick/Home/RecentActivity';
// import HomeSlider from '../Jobick/Home/HomeSlider';

// import Content from '../Cms/Content';

// //import FinancialChartMultipleData from './FinancialChartMultipleData';

// //Images
// import pic1 from './../../../images/profile/pic1.png';

// //Components
// const NewCustomers1 = loadable(() =>
// 	pMinDelay(import("../Jobick/Home/NewCustomers1"), 1000)
// );
// const NewCustomers2 = loadable(() =>
// 	pMinDelay(import("../Jobick/Home/NewCustomers2"), 1000)
// );
// const NewCustomers3 = loadable(() =>
// 	pMinDelay(import("../Jobick/Home/NewCustomers3"), 1000)
// );
// const NewCustomers4 = loadable(() =>
// 	pMinDelay(import("../Jobick/Home/NewCustomers4"), 1000)
// );
// const ApexPieChart = loadable(() =>
// 	pMinDelay(import("../Jobick/Home/ApexPieChart"), 1000)
// );


// const Home = () => {
// 	const { changeBackground, background } = useContext(ThemeContext);
	
// 	const [control3, setControl3] = useState('Newest');
// 	const [userPurchases, setUserPurchases] = useState(null);
//   const [siteCount, setSiteCount] = useState(0);
//   const [purchasedkWp, setPurchasedkWp] = useState(0);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [userTotalReturn, setUserTotalReturn] = useState(); // Store the total return


//    // Fetch user ID from localStorage
//    const userDetails = JSON.parse(localStorage.getItem("userDetails"));
//    const userId = userDetails?.userId;

//   useEffect(() => {
// 	changeBackground({ value: "light", label: "Light" });
// 	if (userId) {
// 		fetchUserPurchases();
// 		fetchTotalReturn(userId);
// 	  }
// 	}, [userId]);

 

// 	const fetchUserPurchases = async () => {
// 		try {
// 		  const response = await fetch(
// 			`https://enfros-solutions-backend-1.onrender.com/api/v1/sites/user-purchases/${userId}`
// 		  );
	
// 		  const data = await response.json();
// 		  console.log("Data: ", data)
	
// 		  if (response.ok) {
// 			setUserPurchases(data.purchases);
	         
// 			const siteCountFromResponse = data.userSites?.siteCount || 0
// 			// Extract and set values from API response
// 			const totalCapacity = data.purchases.reduce((sum, p) => sum + p.purchasedkWp, 0);
// 			const totalInvestment = data.purchases.reduce((sum, p) => sum + p.totalPrice, 0);
	
// 			setSiteCount(siteCountFromResponse);
// 			setPurchasedkWp(totalCapacity);
// 			setTotalPrice(totalInvestment);
// 		  } else {
// 			throw new Error(data.message || "Failed to fetch purchases");
// 		  }
// 		} catch (error) {
// 		  console.error("🚨 Error fetching user purchases:", error);
// 		}
// 	  };

	  
// 	  const fetchTotalReturn = async (userId) => {
// 		try {
// 		  const response = await fetch(
// 			`https://enfros-solutions-backend-1.onrender.com/api/v1/users/${userId}/totalReturn`
// 		  );
// 		  const data = await response.json();
// 		  if (response.ok) {
// 			setUserTotalReturn(data.totalReturn);
// 		  } else {
// 			console.error("Failed to fetch total return");
// 		  }
// 		} catch (err) {
// 		  console.error("Error fetching total return:", err);
// 		}
// 	  };
// 	return (
// 		<>
// 			<div className="row">
// 				<div className="col-xl-12">

// 					<div className="row">
					
// 						<div className="col-xl-12">
// 							<div className="card">
// 								<div className="card-body">
// 									<div className="row">
// 										<div className="col-sm-3">
// 											<div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
// 												<div>
// 													<h3 className="mb-0 lh-1">{siteCount}</h3>
// 													<span className="fs-14 d-block">SITES</span>
// 												</div>
// 											</div>
// 										</div>
// 										<div className="col-sm-3">
// 											<div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
// 												<div>
// 													<h3 className="mb-0 lh-1">{purchasedkWp} kWp</h3>
// 													<span className="fs-14 d-block">INVESTED CAPACITY</span>
// 												</div>
// 											</div>
// 										</div>
// 										<div className="col-sm-3">
// 											<div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
// 												<div>
// 													<h3 className="mb-0 lh-1">14200 kWh</h3>
// 													<span className="fs-14 d-block">TOTAL GENERATION</span>
// 												</div>
// 											</div>
// 										</div>
// 										<div className="col-sm-3">
// 											<div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
// 												<div>
// 													<h3 className="mb-0 lh-1">1231 Kg/kWh</h3>
// 													<span className="fs-14 d-block">CO2 Saved</span>
// 												</div>
// 											</div>
// 										</div>
// 										<div className="col-sm-3">
// 											<div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
// 												<div>
// 													<h3 className="mb-0 lh-1">Rs. {totalPrice}</h3>
// 													<span className="fs-14 d-block">INVESTMENT</span>
// 												</div>
// 											</div>
// 										</div>
// 										<div className="col-sm-3">
// 											<div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
// 												<div>
// 													<h3 className="mb-0 lh-1">Rs.{userTotalReturn || 0}</h3>
// 													<span className="fs-14 d-block">TOTAL RETURN</span>
// 												</div>
// 											</div>
// 										</div>
// 										<div className="col-sm-3">
// 											<div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
// 												<div>
// 													<h3 className="mb-0 lh-1">17.04</h3>
// 													<span className="fs-14 d-block">ROI %</span>
// 												</div>
// 											</div>
// 										</div>
// 										<div className="col-sm-3">
// 											<div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
// 												<div>
// 													<h3 className="mb-0 lh-1">1250</h3>
// 													<span className="fs-14 d-block">NFTs OWNED</span>
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>

// 						<div className="col-xl-12">
// 							{/* <RecentActivity /> */}
// 							{/* <FeaturedCompanies /> */}
// 							<Content />
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	)
// }
// export default Home;


// import React, { useState, useContext, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Dropdown } from 'react-bootstrap';
// import { ThemeContext } from "../../../context/ThemeContext";
// import Content from '../Cms/Content';

// // Mapping sites to RTU IDs
// const siteMapping = {
//   "Unit-1 Metal Profiles Indore": "RTU2006",
//   "HiTech Metal Formings Indore": "RTU1933",
//   "UNIT-3 METAL PROFILES Indore": "RTU1928",
//   "Shishukunj International School Indore": "RTU1934"
// };

// const AUTH_API_URL = "https://portal.intellotechsolutions.co.in:5000/api/intello/authenticate";

// const Home = () => {
//   const { changeBackground } = useContext(ThemeContext);

//   const [userPurchases, setUserPurchases] = useState(null);
//   const [siteCount, setSiteCount] = useState(0);
//   const [purchasedkWp, setPurchasedkWp] = useState(0);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [userTotalReturn, setUserTotalReturn] = useState();
//   const [totalGeneration, setTotalGeneration] = useState(0);  // New state for total generation
//   const [authToken, setAuthToken] = useState(null);  // Auth token state

//   const userDetails = JSON.parse(localStorage.getItem("userDetails"));
//   const userId = userDetails?.userId;

//   useEffect(() => {
//     changeBackground({ value: "light", label: "Light" });
//     if (userId) {
//       authenticateUser();  // Call authentication on mount
//     }
//   }, [userId]);

//   // Authenticate user to get authToken
//   const authenticateUser = async () => {
//     try {
//       const response = await fetch(AUTH_API_URL, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           username: "prateek@enfros.co.in",  // Add your username here
//           password: "9032961c4a5757c8b460c2ecdecbdabc337950cd7b3b1a0fb2592a4b130630ca",  // Add your password here
//         }),
//       });
//       const data = await response.json();
//       if (data.token) {
//         setAuthToken(data.token);  // Set the token in state
//       } else {
//         console.error("Authentication failed");
//       }
//     } catch (error) {
//       console.error("Error during authentication:", error);
//     }
//   };

//   // Fetch user purchases and calculate total generation
//   const fetchUserPurchases = async () => {
//     try {
//       const response = await fetch(
//         `https://enfros-solutions-backend-1.onrender.com/api/v1/sites/user-purchases/${userId}`
//       );
//       const data = await response.json();

//       if (response.ok) {
//         setUserPurchases(data.purchases);

//         const siteCountFromResponse = data.userSites?.siteCount || 0;
//         const totalCapacity = data.purchases.reduce((sum, p) => sum + p.purchasedkWp, 0);
//         const totalInvestment = data.purchases.reduce((sum, p) => sum + p.totalPrice, 0);

//         setSiteCount(siteCountFromResponse);
//         setPurchasedkWp(totalCapacity);
//         setTotalPrice(totalInvestment);

//         // Fetch the total generation data for the user
//         const totalGeneration = await fetchTotalGeneration(data.purchases);
//         setTotalGeneration(totalGeneration);  // Set the total generation
//       } else {
//         throw new Error(data.message || "Failed to fetch purchases");
//       }
//     } catch (error) {
//       console.error("🚨 Error fetching user purchases:", error);
//     }
//   };

//   // Fetch total generation for all sites from the start of the month till today
//   const fetchTotalGeneration = async (purchases) => {
//     let totalGeneration = 0;

//     // Fetch generation data for each site
//     for (let purchase of purchases) {
//       const rtuId = siteMapping[purchase.siteName];  // Get RTU ID based on the site
//       const generation = await fetchSiteGeneration(rtuId);
//       totalGeneration += generation;
//     }

//     return totalGeneration;
//   };

//   // Fetch generation data for each site from start of the month to today
//   const fetchSiteGeneration = async (rtuId) => {
//     if (!authToken) return 0;

//     // Get today's date and first day of the month
//     const today = new Date();
//     const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);

//     const formattedToday = today.toISOString().split("T")[0];
//     const formattedStartOfMonth = startOfMonth.toISOString().split("T")[0];

//     const apiUrl = `https://portal.intellotechsolutions.co.in:5000/api/intello/rtu/v1/data?fromDate=${formattedStartOfMonth}&toDate=${formattedToday}&mode=Monthly&resultType=site&rtuid=${rtuId}`;

//     try {
//       const response = await fetch(apiUrl, {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${authToken}`,
//           "Content-Type": "application/json",
//         },
//       });
//       const data = await response.json();
//       const totalGenerationForSite = data.reduce((sum, item) => sum + (item.generation || 0), 0);

//       return totalGenerationForSite;
//     } catch (error) {
//       console.error("Error fetching generation data for site:", error);
//       return 0; // Return 0 in case of error
//     }
//   };

//   // Fetch total return from backend
//   const fetchTotalReturn = async (userId) => {
//     try {
//       const response = await fetch(
//         `https://enfros-solutions-backend-1.onrender.com/api/v1/users/${userId}/totalReturn`
//       );
//       const data = await response.json();
//       if (response.ok) {
//         setUserTotalReturn(data.totalReturn);
//       } else {
//         console.error("Failed to fetch total return");
//       }
//     } catch (err) {
//       console.error("Error fetching total return:", err);
//     }
//   };

//   // Only call fetchUserPurchases after the authentication is successful
//   useEffect(() => {
//     if (authToken) {
//       fetchUserPurchases();
//     }
//   }, [authToken]);

//   return (
//     <>
//       <div className="row">
//         <div className="col-xl-12">
//           <div className="row">
//             <div className="col-xl-12">
//               <div className="card">
//                 <div className="card-body">
//                   <div className="row">
//                     <div className="col-sm-3">
//                       <div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
//                         <div>
//                           <h3 className="mb-0 lh-1">{siteCount}</h3>
//                           <span className="fs-14 d-block">SITES</span>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-sm-3">
//                       <div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
//                         <div>
//                           <h3 className="mb-0 lh-1">{purchasedkWp} kWp</h3>
//                           <span className="fs-14 d-block">INVESTED CAPACITY</span>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-sm-3">
//                       <div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
//                         <div>
//                           <h3 className="mb-0 lh-1">{totalGeneration} kWh</h3>
//                           <span className="fs-14 d-block">TOTAL GENERATION</span>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-sm-3">
//                       <div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
//                         <div>
//                           <h3 className="mb-0 lh-1">{totalPrice}</h3>
//                           <span className="fs-14 d-block">INVESTMENT</span>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-sm-3">
//                       <div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
//                         <div>
//                           <h3 className="mb-0 lh-1">{userTotalReturn || 0}</h3>
//                           <span className="fs-14 d-block">TOTAL RETURN</span>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-sm-3">
//                       <div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
//                         <div>
//                           <h3 className="mb-0 lh-1">17.04</h3>
//                           <span className="fs-14 d-block">ROI %</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="col-xl-12">
//               <Content />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;



// import React, { useState, useContext, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Dropdown } from 'react-bootstrap';
// import { ThemeContext } from "../../../context/ThemeContext";
// import Content from '../Cms/Content';

// // Mapping sites to RTU IDs
// const siteMapping = {
//   "Unit-1 Metal Profiles Indore": "RTU2006",
//   "HiTech Metal Formings Indore": "RTU1933",
//   "UNIT-3 METAL PROFILES Indore": "RTU1928",
//   "Shishukunj International School Indore": "RTU1934"
// };

// const AUTH_API_URL = "https://portal.intellotechsolutions.co.in:5000/api/intello/authenticate";

// const Home = () => {
//   const { changeBackground } = useContext(ThemeContext);

//   const [userPurchases, setUserPurchases] = useState(null);
//   const [siteCount, setSiteCount] = useState(0);
//   const [purchasedkWp, setPurchasedkWp] = useState(0);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [userTotalReturn, setUserTotalReturn] = useState();
//   const [totalGeneration, setTotalGeneration] = useState(0);  // New state for total generation
//   const [authToken, setAuthToken] = useState(null);  // Auth token state

//   const userDetails = JSON.parse(localStorage.getItem("userDetails"));
//   const userId = userDetails?.userId;

//   useEffect(() => {
//     changeBackground({ value: "light", label: "Light" });
//     if (userId) {
//       authenticateUser();  // Call authentication on mount
//     }
//   }, [userId]);

//   // Authenticate user to get authToken
//   const authenticateUser = async () => {
//     try {
//       const response = await fetch(AUTH_API_URL, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           username: "prateek@enfros.co.in",  // Add your username here
//           password: "9032961c4a5757c8b460c2ecdecbdabc337950cd7b3b1a0fb2592a4b130630ca",  // Add your password here
//         }),
//       });
//       const data = await response.json();
//       if (data.token) {
//         setAuthToken(data.token);  // Set the token in state
//       } else {
//         console.error("Authentication failed");
//       }
//     } catch (error) {
//       console.error("Error during authentication:", error);
//     }
//   };

//   // Fetch user purchases and calculate total generation
//   const fetchUserPurchases = async () => {
//     try {
//       const response = await fetch(
//         `https://enfros-solutions-backend-1.onrender.com/api/v1/sites/user-purchases/${userId}`
//       );
//       const data = await response.json();

//       if (response.ok) {
//         setUserPurchases(data.purchases);

//         const siteCountFromResponse = data.userSites?.siteCount || 0;
//         const totalCapacity = data.purchases.reduce((sum, p) => sum + p.purchasedkWp, 0);
//         const totalInvestment = data.purchases.reduce((sum, p) => sum + p.totalPrice, 0);

//         setSiteCount(siteCountFromResponse);
//         setPurchasedkWp(totalCapacity);
//         setTotalPrice(totalInvestment);

//         // Fetch the total generation data for the user
//         const totalGeneration = await fetchTotalGeneration(data.purchases);
//         setTotalGeneration(totalGeneration);  // Set the total generation
//       } else {
//         throw new Error(data.message || "Failed to fetch purchases");
//       }
//     } catch (error) {
//       console.error("🚨 Error fetching user purchases:", error);
//     }
//   };

//   // Fetch total generation for all sites from the start of the month till today
//   const fetchTotalGeneration = async (purchases) => {
//     let totalGeneration = 0;

//     // Fetch generation data for each site
//     for (let purchase of purchases) {
//       const rtuId = siteMapping[purchase.siteName];  // Get RTU ID based on the site
//       const generation = await fetchSiteGeneration(rtuId);
//       totalGeneration += generation;
//     }

//     return totalGeneration;
//   };

//   // Fetch generation data for each site from start of the month to today
//   const fetchSiteGeneration = async (rtuId) => {
//     if (!authToken) return 0;

//     // Get today's date and first day of the month
//     const today = new Date();
//     const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);

//     const formattedToday = today.toISOString().split("T")[0];
//     const formattedStartOfMonth = startOfMonth.toISOString().split("T")[0];

//     const apiUrl = `https://portal.intellotechsolutions.co.in:5000/api/intello/rtu/v1/data?fromDate=${formattedStartOfMonth}&toDate=${formattedToday}&mode=Monthly&resultType=site&rtuid=${rtuId}`;

//     try {
//       const response = await fetch(apiUrl, {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${authToken}`,
//           "Content-Type": "application/json",
//         },
//       });
//       const data = await response.json();
//       const totalGenerationForSite = data.reduce((sum, item) => sum + (item.generation || 0), 0);

//       return totalGenerationForSite;
//     } catch (error) {
//       console.error("Error fetching generation data for site:", error);
//       return 0; // Return 0 in case of error
//     }
//   };

//   // Fetch total return from backend
//   const fetchTotalReturn = async (userId) => {
//     try {
//       const response = await fetch(
//         `https://enfros-solutions-backend-1.onrender.com/api/v1/users/${userId}/totalReturn`
//       );
//       const data = await response.json();
//       if (response.ok) {
//         setUserTotalReturn(data.totalReturn);
//       } else {
//         console.error("Failed to fetch total return");
//       }
//     } catch (err) {
//       console.error("Error fetching total return:", err);
//     }
//   };

//   // Only call fetchUserPurchases after the authentication is successful
//   useEffect(() => {
//     if (authToken) {
//       fetchUserPurchases();
//     }
//   }, [authToken]);

//   return (
//     <>
//       <div className="row">
//         <div className="col-xl-12">
//           <div className="row">
//             <div className="col-xl-12">
//               <div className="card">
//                 <div className="card-body">
//                   <div className="row">
//                     <div className="col-sm-3">
//                       <div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
//                         <div>
//                           <h3 className="mb-0 lh-1">{siteCount}</h3>
//                           <span className="fs-14 d-block">SITES</span>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-sm-3">
//                       <div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
//                         <div>
//                           <h3 className="mb-0 lh-1">{purchasedkWp} kWp</h3>
//                           <span className="fs-14 d-block">INVESTED CAPACITY</span>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-sm-3">
//                       <div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
//                         <div>
//                           <h3 className="mb-0 lh-1">{totalGeneration} kWh</h3>
//                           <span className="fs-14 d-block">TOTAL GENERATION</span>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-sm-3">
//                       <div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
//                         <div>
//                           <h3 className="mb-0 lh-1">{totalPrice}</h3>
//                           <span className="fs-14 d-block">INVESTMENT</span>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-sm-3">
//                       <div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
//                         <div>
//                           <h3 className="mb-0 lh-1">{userTotalReturn || 0}</h3>
//                           <span className="fs-14 d-block">TOTAL RETURN</span>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-sm-3">
//                       <div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
//                         <div>
//                           <h3 className="mb-0 lh-1">17.04</h3>
//                           <span className="fs-14 d-block">ROI %</span>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-sm-3">
//                       <div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
//                         <div>
//                           <h3 className="mb-0 lh-1">1250</h3>
//                           <span className="fs-14 d-block">NFTs OWNED</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="col-xl-12">
//               <Content />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;


// import React, { useState, useContext, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Dropdown } from 'react-bootstrap';
// import { ThemeContext } from "../../../context/ThemeContext";
// import Content from '../Cms/Content';

// // Mapping sites to RTU IDs
// const siteMapping = {
//   "Unit-1 Metal Profiles Indore": "RTU2006",
//   "HiTech Metal Formings Indore": "RTU1933",
//   "UNIT-3 METAL PROFILES Indore": "RTU1928",
//   "Shishukunj International School Indore": "RTU1934"
// };
// const idMapping = {
//   "RTU2006": "1779",
//   "RTU1933": "1780",
//   "RTU1928": "1778",
//   "RTU1934": "1781"
// };

// const AUTH_API_URL = "https://portal.intellotechsolutions.co.in:5000/api/intello/authenticate";

// const Home = () => {
//   const { changeBackground } = useContext(ThemeContext);

//   const [userPurchases, setUserPurchases] = useState(null);
//   const [siteCount, setSiteCount] = useState(0);
//   const [purchasedkWp, setPurchasedkWp] = useState(0);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [userTotalReturn, setUserTotalReturn] = useState(0);  // New state for total return
//   const [totalGeneration, setTotalGeneration] = useState(0);  // New state for total generation
//   const [authToken, setAuthToken] = useState(null);  // Auth token state

//   const userDetails = JSON.parse(localStorage.getItem("userDetails"));
//   const userId = userDetails?.userId;

//   useEffect(() => {
//     changeBackground({ value: "light", label: "Light" });
//     if (userId) {
//       authenticateUser();  // Call authentication on mount
//     }
//   }, [userId]);

//   // Authenticate user to get authToken
//   const authenticateUser = async () => {
//     try {
//       const response = await fetch(AUTH_API_URL, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           username: "prateek@enfros.co.in",  // Add your username here
//           password: "9032961c4a5757c8b460c2ecdecbdabc337950cd7b3b1a0fb2592a4b130630ca",  // Add your password here
//         }),
//       });
//       const data = await response.json();
//       if (data.token) {
//         setAuthToken(data.token);  // Set the token in state
//       } else {
//         console.error("Authentication failed");
//       }
//     } catch (error) {
//       console.error("Error during authentication:", error);
//     }
//   };

//   // Fetch user purchases and calculate total generation and total return
//   const fetchUserPurchases = async () => {
//     try {
//       const response = await fetch(
//         `https://enfros-solutions-backend-1.onrender.com/api/v1/sites/user-purchases/${userId}`
//       );
//       const data = await response.json();

//       if (response.ok) {
//         setUserPurchases(data.purchases);

//         const siteCountFromResponse = data.userSites?.siteCount || 0;
//         const totalCapacity = data.purchases.reduce((sum, p) => sum + p.purchasedkWp, 0);
//         const totalInvestment = data.purchases.reduce((sum, p) => sum + p.totalPrice, 0);

//         setSiteCount(siteCountFromResponse);
//         setPurchasedkWp(totalCapacity);
//         setTotalPrice(totalInvestment);

//         // Fetch the total generation data for the user
//         const totalGeneration = await fetchTotalGeneration(data.purchases);
//         setTotalGeneration(totalGeneration);  // Set the total generation

//         // Calculate the total return based on the given logic
//         const totalReturn = await calculateTotalReturn(data.purchases);
//         setUserTotalReturn(totalReturn);  // Set the total return
//       } else {
//         throw new Error(data.message || "Failed to fetch purchases");
//       }
//     } catch (error) {
//       console.error("🚨 Error fetching user purchases:", error);
//     }
//   };

//   // Fetch total generation for the current month for each site
//   const fetchTotalGeneration = async (purchases) => {
//     let totalGeneration = 0;
//     const currentMonth = new Date().getMonth() + 1; // Get current month (1-12)

//     // Fetch generation data for each site
//     for (let purchase of purchases) {
//       const rtuId = siteMapping[purchase.siteName];  // Get RTU ID based on the site
//       const generation = await fetchGenerationForMonth(rtuId, currentMonth);
//       totalGeneration += generation;
//     }

//     return totalGeneration;
//   };

//   // Fetch generation data for a specific RTU ID and month
//   const fetchGenerationForMonth = async (rtuId, month) => {
//     if (!authToken) return 0;

//     const apiUrl = `https://portal.intellotechsolutions.co.in:5000/api/intello/rtu/v1/data?fromDate=2025-01-01&mode=Yearly&resultType=site&rtuid=${rtuId}`;
//     try {
//       const response = await fetch(apiUrl, {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${authToken}`,
//           "Content-Type": "application/json",
//         },
//       });
//       const data = await response.json();
//       // Find the generation data for the requested month
//       const monthData = data.find((item) => item.month === month.toString());
//       return monthData ? monthData.generation : 0; // Return the generation for the requested month
//     } catch (error) {
//       console.error("Error fetching generation data for site:", error);
//       return 0;
//     }
//   };

//   // Calculate the total return for all the sites user has purchased
//   const calculateTotalReturn = async (purchases) => {
//     let totalReturn = 0;

//     for (let purchase of purchases) {
//       const rtuId = siteMapping[purchase.siteName];  // Get RTU ID based on the site
//       const id = idMapping[purchase.siteName];  // Get RTU ID based on the site
//       const siteCapacity = await fetchSiteCapacity(id);  // Fetch siteCapacity for each site
//       const generation = await fetchGenerationForMonth(rtuId, new Date().getMonth() + 1);  // Fetch the total generation for the current month
// console.log(siteCapacity);

//       // Calculate return for this site based on the formula
//       const siteReturn = (purchase.purchasedkWp / siteCapacity) * generation * 4.5;
//       totalReturn += siteReturn;
//     }

//     return totalReturn;
//   };

//   // Fetch site capacity from API (used for calculation of total return)
//   const fetchSiteCapacity = async (rtuId) => {
//     try {
//       const response = await fetch(
//         `https://portal.intellotechsolutions.co.in:5000/api/intello/site/v1/${rtuId}`,
//         {
//           method: "GET",
//           headers: {
//             Authorization: `Bearer ${authToken}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       const data = await response.json();
//       if (data && data.siteCapacity) {
//         return parseFloat(data.siteCapacity);  // Return siteCapacity from the API
//       } else {
//         console.error("Site capacity not available.");
//         return 1;  // Default site capacity to 1 if there's an error or no data
//       }
//     } catch (error) {
//       console.error("Error fetching site capacity:", error);
//       return 1;  // Default site capacity to 1 if there's an error
//     }
//   };

//   // Only call fetchUserPurchases after the authentication is successful
//   useEffect(() => {
//     if (authToken) {
//       fetchUserPurchases();
//     }
//   }, [authToken]);

//   return (
//     <>
//       <div className="row">
//         <div className="col-xl-12">
//           <div className="row">
//             <div className="col-xl-12">
//               <div className="card">
//                 <div className="card-body">
//                   <div className="row">
//                     <div className="col-sm-3">
//                       <div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
//                         <div>
//                           <h3 className="mb-0 lh-1">{siteCount}</h3>
//                           <span className="fs-14 d-block">SITES</span>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-sm-3">
//                       <div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
//                         <div>
//                           <h3 className="mb-0 lh-1">{purchasedkWp} kWp</h3>
//                           <span className="fs-14 d-block">INVESTED CAPACITY</span>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-sm-3">
//                       <div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
//                         <div>
//                           <h3 className="mb-0 lh-1">{totalGeneration} kWh</h3>
//                           <span className="fs-14 d-block">TOTAL GENERATION</span>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-sm-3">
//                       <div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
//                         <div>
//                           <h3 className="mb-0 lh-1">{totalPrice}</h3>
//                           <span className="fs-14 d-block">INVESTMENT</span>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-sm-3">
//                       <div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
//                         <div>
//                           <h3 className="mb-0 lh-1">{userTotalReturn.toFixed(2)}</h3>
//                           <span className="fs-14 d-block">TOTAL RETURN</span>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-sm-3">
//                       <div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
//                         <div>
//                           <h3 className="mb-0 lh-1">17.04</h3>
//                           <span className="fs-14 d-block">ROI %</span>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-sm-3">
//                       <div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
//                         <div>
//                           <h3 className="mb-0 lh-1">1250</h3>
//                           <span className="fs-14 d-block">NFTs OWNED</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="col-xl-12">
//               <Content />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;




// import React, { useState, useContext, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Dropdown } from 'react-bootstrap';
// import { ThemeContext } from "../../../context/ThemeContext";
// import Content from '../Cms/Content';

// // Mapping sites to RTU IDs
// const siteMapping = {
//   "Unit-1 Metal Profiles Indore": "RTU2006",
//   "HiTech Metal Formings Indore": "RTU1933",
//   "UNIT-3 METAL PROFILES Indore": "RTU1928",
//   "Shishukunj International School Indore": "RTU1934",
//   "Unit-II Metal Profiles Indore": "RTU2006"
// };

// // Mapping RTU IDs to Site Capacity API IDs
// const siteCapacityMapping = {
//   "RTU2006": "1779",
//   "RTU1928": "1778",
//   "RTU1933": "1780",
//   "RTU1934": "1781"
// };

// const AUTH_API_URL = "https://portal.intellotechsolutions.co.in:5000/api/intello/authenticate";

// const Home = () => {
//   const { changeBackground } = useContext(ThemeContext);

//   const [userPurchases, setUserPurchases] = useState(null);
//   const [siteCount, setSiteCount] = useState(0);
//   const [purchasedkWp, setPurchasedkWp] = useState(0);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [userTotalReturn, setUserTotalReturn] = useState(0);  // New state for total return
//   const [totalGeneration, setTotalGeneration] = useState(0);  // New state for total generation
//   const [authToken, setAuthToken] = useState(null);  // Auth token state

//   const userDetails = JSON.parse(localStorage.getItem("userDetails"));
//   const userId = userDetails?.userId;

//   useEffect(() => {
//     changeBackground({ value: "light", label: "Light" });
//     if (userId) {
//       authenticateUser();  // Call authentication on mount
//     }
//   }, [userId]);

//   // Authenticate user to get authToken
//   const authenticateUser = async () => {
//     try {
//       const response = await fetch(AUTH_API_URL, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           username: "prateek@enfros.co.in",  // Add your username here
//           password: "9032961c4a5757c8b460c2ecdecbdabc337950cd7b3b1a0fb2592a4b130630ca",  // Add your password here
//         }),
//       });
//       const data = await response.json();
//       if (data.token) {
//         setAuthToken(data.token);  // Set the token in state
//       } else {
//         console.error("Authentication failed");
//       }
//     } catch (error) {
//       console.error("Error during authentication:", error);
//     }
//   };

//   // Fetch user purchases and calculate total generation and total return
//   const fetchUserPurchases = async () => {
//     try {
//       const response = await fetch(
//         `https://enfros-solutions-backend-1.onrender.com/api/v1/sites/user-purchases/${userId}`
//       );
//       const data = await response.json();

//       if (response.ok) {
//         setUserPurchases(data.purchases);

//         const siteCountFromResponse = data.userSites?.siteCount || 0;
//         const totalCapacity = data.purchases.reduce((sum, p) => sum + p.purchasedkWp, 0);
//         const totalInvestment = data.purchases.reduce((sum, p) => sum + p.totalPrice, 0);

//         setSiteCount(siteCountFromResponse);
//         setPurchasedkWp(totalCapacity);
//         setTotalPrice(totalInvestment);

//         // Fetch the total generation data for the user
//         const totalGeneration = await fetchTotalGeneration(data.purchases);
//         setTotalGeneration(totalGeneration);  // Set the total generation

//         // Calculate the total return based on the given logic
//         const totalReturn = await calculateTotalReturn(data.purchases);
//         setUserTotalReturn(totalReturn);  // Set the total return
//         try {
//           await fetch(`https://enfros-solutions-backend-1.onrender.com/api/v1/users/${userId}/updateTotalReturn`, {
//             method: "PUT",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//               totalReturn: totalReturn,
//             }),
//           });
//           console.log("✅ Total return updated in database successfully");
//         } catch (err) {
//           console.error("🚨 Failed to update total return in database:", err);
//         }
//       } else {
//         throw new Error(data.message || "Failed to fetch purchases");
//       }
//     } catch (error) {
//       console.error("🚨 Error fetching user purchases:", error);
//     }
//   };

//   // Fetch total generation for the current month for each site
//   const fetchTotalGeneration = async (purchases) => {
//     let totalGeneration = 0;
//     const currentMonth = new Date().getMonth() + 1; // Get current month (1-12)

//     // Fetch generation data for each site
//     for (let purchase of purchases) {
//       const rtuId = siteMapping[purchase.siteName];  // Get RTU ID based on the site
//       const generation = await fetchGenerationForMonth(rtuId, currentMonth);
//       totalGeneration += generation;
//     }

//     return totalGeneration;
//   };

//   // Fetch generation data for a specific RTU ID and month
//   const fetchGenerationForMonth = async (rtuId, month) => {
//     if (!authToken) return 0;

//     const apiUrl = `https://portal.intellotechsolutions.co.in:5000/api/intello/rtu/v1/data?fromDate=2025-01-01&mode=Yearly&resultType=site&rtuid=${rtuId}`;
//     try {
//       const response = await fetch(apiUrl, {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${authToken}`,
//           "Content-Type": "application/json",
//         },
//       });
//       const data = await response.json();
//       // Find the generation data for the requested month
//       const monthData = data.find((item) => item.month === month.toString());
//       return monthData ? monthData.generation : 0; // Return the generation for the requested month
//     } catch (error) {
//       console.error("Error fetching generation data for site:", error);
//       return 0;
//     }
//   };

//   // Calculate the total return for all the sites user has purchased
//   const calculateTotalReturn = async (purchases) => {
//     let totalReturn = 0;

//     for (let purchase of purchases) {
//       const rtuId = siteMapping[purchase.siteName];  // Get RTU ID based on the site
//       const siteCapacityApiId = siteCapacityMapping[rtuId];  // Get the correct siteCapacity API ID based on RTU ID
//       const siteCapacity = await fetchSiteCapacity(siteCapacityApiId);  // Fetch siteCapacity for each site
//       const generation = await fetchGenerationForMonth(rtuId, new Date().getMonth() + 1);  // Fetch the total generation for the current month

//       // Calculate return for this site based on the formula
//       const siteReturn = (purchase.purchasedkWp / siteCapacity) * generation * 4.5;
//       totalReturn += siteReturn;
//     }

//     return totalReturn;
//   };

//   // Fetch site capacity from API (used for calculation of total return)
//   const fetchSiteCapacity = async (siteCapacityApiId) => {
//     try {
//       const response = await fetch(
//         `https://portal.intellotechsolutions.co.in:5000/api/intello/site/v1/${siteCapacityApiId}`,
//         {
//           method: "GET",
//           headers: {
//             Authorization: `Bearer ${authToken}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       const data = await response.json();
//       if (data && data.siteCapacity) {
//         console.log(`Site Capacity for ${siteCapacityApiId}:`, data.siteCapacity);
//         return parseFloat(data.siteCapacity);  // Return siteCapacity from the API
//       } else {
//         console.error("Site capacity not available.");
//         return 1;  // Default site capacity to 1 if there's an error or no data
//       }
//     } catch (error) {
//       console.error("Error fetching site capacity:", error);
//       return 1;  // Default site capacity to 1 if there's an error
//     }
//   };

//   // Only call fetchUserPurchases after the authentication is successful
//   useEffect(() => {
//     if (authToken) {
//       fetchUserPurchases();
//     }
//   }, [authToken]);

//   return (
//     <>
//       <div className="row">
//         <div className="col-xl-12">
//           <div className="row">
//             <div className="col-xl-12">
//               <div className="card">
//                 <div className="card-body">
//                   <div className="row">
//                     <div className="col-sm-3">
//                       <div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
//                         <div>
//                           <h3 className="mb-0 lh-1">{siteCount}</h3>
//                           <span className="fs-14 d-block">SITES</span>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-sm-3">
//                       <div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
//                         <div>
//                           <h3 className="mb-0 lh-1">{purchasedkWp} kWp</h3>
//                           <span className="fs-14 d-block">INVESTED CAPACITY</span>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-sm-3">
//                       <div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
//                         <div>
//                           <h3 className="mb-0 lh-1">{totalGeneration} kWh</h3>
//                           <span className="fs-14 d-block">TOTAL GENERATION</span>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-sm-3">
//                       <div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
//                         <div>
//                           <h3 className="mb-0 lh-1">{totalPrice}</h3>
//                           <span className="fs-14 d-block">INVESTMENT</span>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-sm-3">
//                       <div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
//                         <div>
//                           <h3 className="mb-0 lh-1">{userTotalReturn.toFixed(2)}</h3>
//                           <span className="fs-14 d-block">TOTAL RETURN</span>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-sm-3">
//                       <div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
//                         <div>
//                           <h3 className="mb-0 lh-1">17.04</h3>
//                           <span className="fs-14 d-block">ROI %</span>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-sm-3">
//                       <div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
//                         <div>
//                           <h3 className="mb-0 lh-1">{purchasedkWp}</h3>
//                           <span className="fs-14 d-block">LIFETIME GENERATION</span>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-sm-3">
//                       <div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
//                         <div>
//                           <h3 className="mb-0 lh-1">{purchasedkWp}</h3>
//                           <span className="fs-14 d-block">NFTs OWNED</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="col-xl-12">
//               <Content />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;





import React, { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import Content from "../Cms/Content";

// Mapping sites to RTU IDs
const siteMapping = {
  "Unit-1 Metal Profiles Indore": "RTU2006",
  "HiTech Metal Formings Indore": "RTU1933",
  "UNIT-3 METAL PROFILES Indore": "RTU1928",
  "Shishukunj International School Indore": "RTU1934",
  "Unit-II Metal Profiles Indore": "RTU2006",
};

// Mapping RTU IDs to Site Capacity API IDs
const siteCapacityMapping = {
  RTU2006: "1779",
  RTU1928: "1778",
  RTU1933: "1780",
  RTU1934: "1781",
};

const AUTH_API_URL =
  "https://portal.intellotechsolutions.co.in:5000/api/intello/authenticate";

const Home = () => {
  const { changeBackground } = useContext(ThemeContext);

  const [userPurchases, setUserPurchases] = useState([]);
  const [siteCount, setSiteCount] = useState(0);
  const [purchasedkWp, setPurchasedkWp] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [userTotalReturn, setUserTotalReturn] = useState(0);
  const [totalGeneration, setTotalGeneration] = useState(0); // Monthly generation
  const [lifetimeGeneration, setLifetimeGeneration] = useState(0); // Lifetime generation
  const [authToken, setAuthToken] = useState(null);

  const userDetails = JSON.parse(localStorage.getItem("userDetails"));
  const userId = userDetails?.userId;

  // On mount, set background and authenticate if userId exists
  useEffect(() => {
    changeBackground({ value: "light", label: "Light" });
    if (userId) {
      authenticateUser();
    }
  }, [userId]);

  // Authenticate to get authToken
  const authenticateUser = async () => {
    try {
      const response = await fetch(AUTH_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: "prateek@enfros.co.in",
          password:
            "9032961c4a5757c8b460c2ecdecbdabc337950cd7b3b1a0fb2592a4b130630ca",
        }),
      });
      const data = await response.json();
      if (data.token) {
        setAuthToken(data.token);
      } else {
        console.error("Authentication failed");
      }
    } catch (error) {
      console.error("Error during authentication:", error);
    }
  };

  // Once authToken is set, fetch the user's purchases and all metrics
  useEffect(() => {
    if (authToken) {
      fetchUserPurchases();
    }
  }, [authToken]);

  // Fetch user purchases and compute metrics
  const fetchUserPurchases = async () => {
    try {
      const response = await fetch(
        `https://enfros-solutions-backend-1.onrender.com/api/v1/sites/user-purchases/${userId}`
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch purchases");
      }

      const purchases = data.purchases || [];
      setUserPurchases(purchases);

      // Site count (if provided by backend) or derive from length
      const siteCountFromResponse = data.userSites?.siteCount ?? purchases.length;
      setSiteCount(siteCountFromResponse);

      // Total invested capacity (sum of purchasedkWp)
      const totalCapacity = purchases.reduce(
        (sum, p) => sum + (p.purchasedkWp || 0),
        0
      );
      setPurchasedkWp(totalCapacity);

      // Total investment (sum of totalPrice)
      const totalInvestment = purchases.reduce(
        (sum, p) => sum + (p.totalPrice || 0),
        0
      );
      setTotalPrice(totalInvestment);

      // Fetch current-month total generation
      const monthlyGen = await fetchTotalGeneration(purchases);
      setTotalGeneration(monthlyGen);

      // Fetch lifetime total generation for all purchased RTUs
      const lifetimeGen = await fetchLifetimeGeneration(purchases);
      setLifetimeGeneration(lifetimeGen);

      // Calculate total return (based on capacity, generation, and site capacity)
      const totalReturn = await calculateTotalReturn(purchases);
      setUserTotalReturn(totalReturn);

      // Update total return in the backend
      try {
        await fetch(
          `https://enfros-solutions-backend-1.onrender.com/api/v1/users/${userId}/updateTotalReturn`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ totalReturn }),
          }
        );
        console.log("✅ Total return updated in database successfully");
      } catch (err) {
        console.error("🚨 Failed to update total return in database:", err);
      }
    } catch (error) {
      console.error("🚨 Error fetching user purchases:", error);
    }
  };

  // Fetch total generation for the current month for each purchased site
  const fetchTotalGeneration = async (purchases) => {
    let totalGen = 0;
    const currentMonth = new Date().getMonth() + 1; // 1-12

    for (let purchase of purchases) {
      const rtuId = siteMapping[purchase.siteName];
      if (!rtuId) continue;
      const monthly = await fetchGenerationForMonth(rtuId, currentMonth);
      totalGen += monthly;
    }

    return totalGen;
  };

  // Fetch generation for a specific RTU ID and month (Yearly mode with site data)
  const fetchGenerationForMonth = async (rtuId, month) => {
    if (!authToken) return 0;
    const apiUrl = `https://portal.intellotechsolutions.co.in:5000/api/intello/rtu/v1/data?fromDate=2025-01-01&mode=Yearly&resultType=site&rtuid=${rtuId}`;

    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      // `data` is expected to be an array of { month: "1", generation: "..." } objects
      const monthObj = Array.isArray(data)
        ? data.find((item) => item.month === month.toString())
        : null;
      return monthObj ? parseFloat(monthObj.generation) || 0 : 0;
    } catch (error) {
      console.error("Error fetching generation data:", error);
      return 0;
    }
  };

  // Fetch lifetime total generation for all RTUs purchased by the user
  const fetchLifetimeGeneration = async (purchases) => {
    if (!authToken || purchases.length === 0) return 0;

    // Build an array of RTU IDs from the purchases
    const rtuIds = purchases
      .map((p) => siteMapping[p.siteName])
      .filter(Boolean);

    if (rtuIds.length === 0) return 0;

    const body = {
      rtuIds,
      fromDate: "2025-02-04", // Keeping date as in provided example
      toDate: "2025-02-04",   // No change to date range
      mode: "siteDetail",
    };

    try {
      const response = await fetch(
        "https://portal.intellotechsolutions.co.in:5000/api/intello/rtu/v1/data/total",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );
      const data = await response.json();

      // The API returns { totalsitegeneration: "368587.46", ... }
      if (data && data.totalsitegeneration) {
        return parseFloat(data.totalsitegeneration) || 0;
      } else {
        return 0;
      }
    } catch (error) {
      console.error("Error fetching lifetime generation:", error);
      return 0;
    }
  };

  // Calculate total return for all purchased sites
  const calculateTotalReturn = async (purchases) => {
    let totalReturn = 0;
    const currentMonth = new Date().getMonth() + 1;

    for (let purchase of purchases) {
      const rtuId = siteMapping[purchase.siteName];
      if (!rtuId) continue;

      // Get the API ID for the site capacity
      const capacityApiId = siteCapacityMapping[rtuId];
      const siteCapacity = await fetchSiteCapacity(capacityApiId);
      const monthlyGen = await fetchGenerationForMonth(rtuId, currentMonth);

      // Return formula: (purchasedkWp / siteCapacity) * generation * 4.5
      const siteReturn =
        ((purchase.purchasedkWp || 0) / (siteCapacity || 1)) *
        (monthlyGen || 0) *
        4.5;
      totalReturn += siteReturn;
    }

    return totalReturn;
  };

  // Fetch site capacity via API (for return calculation)
  const fetchSiteCapacity = async (siteCapacityApiId) => {
    if (!authToken) return 1;
    try {
      const response = await fetch(
        `https://portal.intellotechsolutions.co.in:5000/api/intello/site/v1/${siteCapacityApiId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (data && data.siteCapacity) {
        return parseFloat(data.siteCapacity) || 1;
      } else {
        return 1;
      }
    } catch (error) {
      console.error("Error fetching site capacity:", error);
      return 1;
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-xl-12">
          <div className="row">
            {/* SITES CARD */}
            <div className="col-sm-3">
              <div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
                <div>
                  <h3 className="mb-0 lh-1">{siteCount}</h3>
                  <span className="fs-14 d-block">SITES</span>
                </div>
              </div>
            </div>

            {/* INVESTED CAPACITY CARD */}
            <div className="col-sm-3">
              <div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
                <div>
                  <h3 className="mb-0 lh-1">{purchasedkWp} kWp</h3>
                  <span className="fs-14 d-block">INVESTED CAPACITY</span>
                </div>
              </div>
            </div>

            {/* TOTAL GENERATION (CURRENT MONTH) CARD */}
            <div className="col-sm-3">
              <div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
                <div>
                  <h3 className="mb-0 lh-1">{totalGeneration} kWh</h3>
                  <span className="fs-14 d-block">TOTAL GENERATION</span>
                </div>
              </div>
            </div>

            {/* INVESTMENT CARD */}
            <div className="col-sm-3">
              <div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
                <div>
                  <h3 className="mb-0 lh-1">{totalPrice}</h3>
                  <span className="fs-14 d-block">INVESTMENT</span>
                </div>
              </div>
            </div>

            {/* TOTAL RETURN CARD */}
            <div className="col-sm-3">
              <div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
                <div>
                  <h3 className="mb-0 lh-1">
                    {userTotalReturn.toFixed(2)}
                  </h3>
                  <span className="fs-14 d-block">TOTAL RETURN</span>
                </div>
              </div>
            </div>

            {/* ROI % CARD (static value retained) */}
            <div className="col-sm-3">
              <div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
                <div>
                  <h3 className="mb-0 lh-1">17.04</h3>
                  <span className="fs-14 d-block">ROI %</span>
                </div>
              </div>
            </div>

            {/* LIFETIME GENERATION CARD (UPDATED) */}
            <div className="col-sm-3">
              <div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
                <div>
                  <h3 className="mb-0 lh-1">
                    {lifetimeGeneration} kWh
                  </h3>
                  <span className="fs-14 d-block">LIFETIME GENERATION</span>
                </div>
              </div>
            </div>

            {/* NFTs OWNED CARD (static or reuse purchasedkWp as placeholder) */}
            <div className="col-sm-3">
              <div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
                <div>
                  <h3 className="mb-0 lh-1">{purchasedkWp}</h3>
                  <span className="fs-14 d-block">NFTs OWNED</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CMS CONTENT BELOW */}
        <div className="col-xl-12">
          <Content />
        </div>
      </div>
    </>
  );
};

export default Home;
