// import React, { useState, useRef, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Select from "react-select";
// import Collapse from "react-bootstrap/Collapse";

// const options = [
//   //{ value: '1', label: 'Select Status' },
//   { value: "2", label: "Published" },
//   { value: "3", label: "Draft" },
//   { value: "4", label: "Trash" },
//   { value: "5", label: "Private" },
//   { value: "6", label: "Pending" },
// ];

// const Content = () => {
//   const [open, setOpen] = useState(true);
//   const [open2, setOpen2] = useState(true);

//   const [data, setData] = useState(
//     document.querySelectorAll("#content_wrapper tbody tr")
//   );
//   const sort = 8;
//   const activePag = useRef(0);
//   const [test, settest] = useState(0);
//   const [userPurchases, setUserPurchases] = useState([]);
//   const [siteCount, setSiteCount] = useState(0);
//   const [purchasedkWp, setPurchasedkWp] = useState(0);
//   const [totalPrice, setTotalPrice] = useState(0);

//   // Active data
//   const chageData = (frist, sec) => {
//     for (var i = 0; i < data.length; ++i) {
//       if (i >= frist && i < sec) {
//         data[i].classList.remove("d-none");
//       } else {
//         data[i].classList.add("d-none");
//       }
//     }
//   };

//   useEffect(() => {
//     setData(document.querySelectorAll("#content_wrapper tbody tr"));
//   }, [test]);

//   activePag.current === 0 && chageData(0, sort);

//   let paggination = Array(Math.ceil(data.length / sort))
//     .fill()
//     .map((_, i) => i + 1);

//   const onClick = (i) => {
//     activePag.current = i;
//     chageData(activePag.current * sort, (activePag.current + 1) * sort);
//     settest(i);
//   };

// //   const [deleteItem, setDeleteItem] = useState(tableData);
// //   const handleDelete = (ind) => {
// //     setDeleteItem((oldValues) => {
// //       return oldValues.filter((_, i) => i !== ind);
// //     });
// //   };

//   // Fetch user ID from localStorage
//   const userDetails = JSON.parse(localStorage.getItem("userDetails"));
//   const userId = userDetails?.userId;

//   useEffect(() => {
//     if (userId) {
//       fetchUserPurchases();
//     }
//   }, [userId]);

//   const fetchUserPurchases = async () => {
//     try {
//       const response = await fetch(
//         `https://enfros-solutions-backend-1.onrender.com/api/v1/sites/user-purchases/${userId}`
//       );

//       const data = await response.json();
//       console.log("Data: ", data);

//       if (response.ok) {
//         setUserPurchases(data.purchases);

//         const siteCountFromResponse = data.userSites?.siteCount || 0;
//         // Extract and set values from API response
//         const totalCapacity = data.purchases.reduce(
//           (sum, p) => sum + p.purchasedkWp,
//           0
//         );
//         const totalInvestment = data.purchases.reduce(
//           (sum, p) => sum + p.totalPrice,
//           0
//         );

//         setSiteCount(siteCountFromResponse);
//         setPurchasedkWp(totalCapacity);
//         setTotalPrice(totalInvestment);
//       } else {
//         throw new Error(data.message || "Failed to fetch purchases");
//       }
//     } catch (error) {
//       console.error("🚨 Error fetching user purchases:", error);
//     }
//   };

//   return (
//     <>
//       <div className="row">
//         <div className="col-xl-12">

//           <div className="filter cm-content-box box-primary mt-5">
//             <div className={`content-title`}>
//               <div className="cpa">
//                 <i className="fas fa-file-word me-2"></i>SITE LEVEL ANALYSIS
//               </div>
//               <div className="tools">
//                 <Link
//                   to={"#"}
//                   className={`SlideToolHeader ${open2 ? "collapse" : "expand"}`}
//                   onClick={() => setOpen2(!open2)}
//                 >
//                   <i className="fas fa-angle-up"></i>
//                 </Link>
//               </div>
//             </div>
//             <Collapse in={open2}>
//               <div className="cm-content-body form excerpt">
//                 <div className="card-body">
//                   <div className="table-responsive">
//                     <div
//                       id="content_wrapper"
//                       className="dataTables_wrapper no-footer"
//                     >
//                       <table className="table table-bordered table-responsive-lg table-striped table-condensed flip-content">
//                         <thead>
//                           <tr>
//                             <th>S.No</th>
//                             <th>SITE NAME</th>
//                             <th>Purchased kWp</th>
//                             <th>Total Price</th>
//                             {/* <th>Status</th>
//                                                         <th>CAPACITY</th> */}
//                             <th>GENERATION TODAY</th>
//                             <th>OUTPUT POWER</th>
//                             <th>PR</th>
//                             {/* <th className="text-end">Actions</th> */}
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {userPurchases.map((item, index) => (
//                             <tr key={index}>
//                               <td>{index + 1}</td>
//                               <td>{item.siteName}</td>
//                               <td>{item.purchasedkWp} kWp</td>
//                               <td>₹ {item.totalPrice}</td>
//                               {/* <td>{item.status}</td>
//                                                             <td>{item.capacity}</td> */}
//                               <td>{item.generationToday}</td>
//                               <td>{item.outputPower}</td>
//                               <td>{item.pr}</td>

//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>
//                       <div className="d-sm-flex text-center justify-content-between align-items-center mt-3">
//                         <div className="dataTables_info">
//                           Showing {activePag.current * sort + 1} to{" "}
//                           {data.length > (activePag.current + 1) * sort
//                             ? (activePag.current + 1) * sort
//                             : data.length}{" "}
//                           of {data.length} entries
//                         </div>
//                         <div
//                           className="dataTables_paginate paging_simple_numbers"
//                           id="example2_paginate"
//                         >
//                           <Link
//                             className="paginate_button previous disabled"
//                             to="/dashboard"
//                             onClick={() =>
//                               activePag.current > 0 &&
//                               onClick(activePag.current - 1)
//                             }
//                           >
//                             <i
//                               className="fa fa-angle-double-left"
//                               aria-hidden="true"
//                             ></i>
//                           </Link>
//                           <span>
//                             {paggination.map((number, i) => (
//                               <Link
//                                 key={i}
//                                 to="/dashboard"
//                                 className={`paginate_button  ${
//                                   activePag.current === i ? "current" : ""
//                                 } `}
//                                 onClick={() => onClick(i)}
//                               >
//                                 {number}
//                               </Link>
//                             ))}
//                           </span>
//                           <Link
//                             className="paginate_button next"
//                             to="/dashboard"
//                             onClick={() =>
//                               activePag.current + 1 < paggination.length &&
//                               onClick(activePag.current + 1)
//                             }
//                           >
//                             <i
//                               className="fa fa-angle-double-right"
//                               aria-hidden="true"
//                             ></i>
//                           </Link>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </Collapse>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Content;

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Collapse from "react-bootstrap/Collapse";

const AUTH_API_URL =
  "https://portal.intellotechsolutions.co.in:5000/api/intello/authenticate";

// Mapping sites to RTU IDs
const siteMapping = {
  "Unit-1 Metal Profiles Indore": "RTU2006",
  "HiTech Metal Formings Indore": "RTU1933",
  "UNIT-3 METAL PROFILES Indore": "RTU1928",
  "Shishukunj International School Indore": "RTU1934",
};

const Content = () => {
  const [open2, setOpen2] = useState(true);
  const [userPurchases, setUserPurchases] = useState([]);
  const [authToken, setAuthToken] = useState(null);
  const [todayGeneration, setTodayGeneration] = useState("Loading...");

  const activePag = useRef(0);
  const sort = 8;

  // Fetch user ID from localStorage
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));
  const userId = userDetails?.userId;

  const fetchUserPurchases = async () => {
    try {
      const response = await fetch(
        `https://enfros-solutions-backend-1.onrender.com/api/v1/sites/user-purchases/${userId}`
      );
      const data = await response.json();

      if (response.ok) {
        setUserPurchases(data.purchases);
      } else {
        throw new Error(data.message || "Failed to fetch purchases");
      }
    } catch (error) {
      console.error("Error fetching user purchases:", error);
    }
  };

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

  const fetchTodayGeneration = async (siteName, rtuId) => {
    if (!authToken) return;

    const today = new Date();
    const formattedToday = today.toISOString().split("T")[0];

    const apiUrl = `https://portal.intellotechsolutions.co.in:5000/api/intello/rtu/v1/data?fromDate=${formattedToday}&mode=Monthly&resultType=site&rtuid=${rtuId}`;

    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      const record = data.find(
        (item) =>
          parseInt(item.day, 10) === today.getDate() &&
          parseInt(item.month, 10) === today.getMonth() + 1
      );

      return record ? record.generation : "N/A";
    } catch (error) {
      console.error("Error fetching generation data:", error);
      return "Error";
    }
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  useEffect(() => {
    if (authToken) {
      fetchUserPurchases();
    }
  }, [authToken]);

  useEffect(() => {
    if (authToken && userPurchases.length > 0) {
      const updatePurchasesWithGeneration = async () => {
        const updatedPurchases = await Promise.all(
          userPurchases.map(async (purchase) => {
            const rtuId = siteMapping[purchase.siteName];
            const generation = await fetchTodayGeneration(
              purchase.siteName,
              rtuId
            );
            return { ...purchase, generationToday: generation };
          })
        );
        setUserPurchases(updatedPurchases);
      };
      updatePurchasesWithGeneration();
    }
  }, [authToken, userPurchases]);

  const chageData = (first, sec) => {
    const data = document.querySelectorAll("#content_wrapper tbody tr");
    for (let i = 0; i < data.length; ++i) {
      if (i >= first && i < sec) {
        data[i].classList.remove("d-none");
      } else {
        data[i].classList.add("d-none");
      }
    }
  };

  const onClick = (i) => {
    activePag.current = i;
    chageData(activePag.current * sort, (activePag.current + 1) * sort);
  };

  const paggination = Array(Math.ceil(userPurchases.length / sort))
    .fill()
    .map((_, i) => i + 1);

  return (
    <>
      <div className="row">
        <div className="col-xl-12">
          <div className="filter cm-content-box box-primary mt-5">
            <div className={`content-title`}>
              <div className="cpa">
                <i className="fas fa-file-word me-2"></i>SITE LEVEL ANALYSIS
              </div>
              <div className="tools">
                <Link
                  to={"#"}
                  className={`SlideToolHeader ${open2 ? "collapse" : "expand"}`}
                  onClick={() => setOpen2(!open2)}
                >
                  <i className="fas fa-angle-up"></i>
                </Link>
              </div>
            </div>
            <Collapse in={open2}>
              <div className="cm-content-body form excerpt">
                <div className="card-body">
                  <div className="table-responsive">
                    <div
                      id="content_wrapper"
                      className="dataTables_wrapper no-footer"
                    >
                      <table className="table table-bordered table-responsive-lg table-striped table-condensed flip-content">
                        <thead>
                          <tr>
                            <th className="text-left">S.No</th>
                            <th className="text-left">SITE NAME</th>
                            <th className="text-left">Purchased kWp</th>
                            <th className="text-left">Total Price</th>
                            <th style={{ textAlign: "left" }}>
                              GENERATION TODAY
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {userPurchases.map((item, index) => (
                            <tr key={index}>
                              <td className="text-left">{index + 1}</td>
                              <td className="text-left">{item.siteName}</td>
                              <td className="text-left">
                                {item.purchasedkWp} kWp
                              </td>
                              <td className="text-left">
                                {item.paymentMethod === "razorpay"
                                  ? `₹ ${item.totalPrice}`
                                  : `🪙 ${item.totalPrice} USDC`}
                              </td>
                              <td style={{ textAlign: "left" }}>
                                {item.generationToday ?? "Loading..."}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>

                      <div className="d-sm-flex text-center justify-content-between align-items-center mt-3">
                        <div className="dataTables_info">
                          Showing {activePag.current * sort + 1} to{" "}
                          {userPurchases.length > (activePag.current + 1) * sort
                            ? (activePag.current + 1) * sort
                            : userPurchases.length}{" "}
                          of {userPurchases.length} entries
                        </div>
                        <div
                          className="dataTables_paginate paging_simple_numbers"
                          id="example2_paginate"
                        >
                          <Link
                            className="paginate_button previous disabled"
                            to="/dashboard"
                            onClick={() =>
                              activePag.current > 0 &&
                              onClick(activePag.current - 1)
                            }
                          >
                            <i
                              className="fa fa-angle-double-left"
                              aria-hidden="true"
                            ></i>
                          </Link>
                          <span>
                            {paggination.map((number, i) => (
                              <Link
                                key={i}
                                to="/dashboard"
                                className={`paginate_button  ${
                                  activePag.current === i ? "current" : ""
                                }`}
                                onClick={() => onClick(i)}
                              >
                                {number}
                              </Link>
                            ))}
                          </span>
                          <Link
                            className="paginate_button next"
                            to="/dashboard"
                            onClick={() =>
                              activePag.current + 1 < paggination.length &&
                              onClick(activePag.current + 1)
                            }
                          >
                            <i
                              className="fa fa-angle-double-right"
                              aria-hidden="true"
                            ></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Collapse>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
