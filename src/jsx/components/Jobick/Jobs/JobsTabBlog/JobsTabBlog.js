// import React, { useState, useEffect } from "react";
// import { Row, Col, Card, Carousel, Accordion } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import NFT_ABI from "./contractabi.json";
// import axios from "axios";
// // Placeholder images
// import user from "./../../../../../images/user.jpg";
// import img1 from "../../../../../images/big/img1.jpg";
// import img2 from "../../../../../images/big/img2.jpg";
// import img3 from "../../../../../images/big/img3.jpg";
// import { BrowserProvider, ethers } from "ethers";
// // import { ethers } from "ethers";
// const AUTH_API_URL =
//   "https://portal.intellotechsolutions.co.in:5000/api/intello/authenticate";
// const GET_USER_SITES_API_URL =
//   "https://portal.intellotechsolutions.co.in:5000/api/intello/user/v1/sites";

// const carousel1 = [img1, img2, img3];

// const defaultAccordion = [
//   {
//     title: "About the Project",
//     text: `
//             <p><strong>When is the commissioning date?</strong><br />The commissioning date is on 15th August 2024.</p>
//             <p><strong>Which make panels were used in the project?</strong><br />The project used ABC brand panels for solar power generation.</p>
//         `,
//   },
//   {
//     title: "About the NFTs",
//     text: `
//             <p><strong>What is the total number of NFTs available?</strong><br />There are 64 NFTs available for this project.</p>
//             <p><strong>How can I purchase NFTs?</strong><br />You can purchase NFTs through our official website by following the buy process.</p>
//         `,
//   },
//   {
//     title: "About Maintenance",
//     text: `
//             <p><strong>Who is responsible for maintenance?</strong><br />The maintenance is handled by XYZ company under a 5-year contract.</p>
//             <p><strong>How often is maintenance performed?</strong><br />Maintenance is performed quarterly to ensure optimal performance.</p>
//         `,
//   },
// ];

// const JobsTabBlog = () => {
//   const [selectedNFT, setSelectedNFT] = useState(null); // For selected card
//   const [jobCardData, setJobCardData] = useState([]); // Dynamic card data
//   const [loading, setLoading] = useState(true); // Loading state
//   const [error, setError] = useState(null); // Error state

//   // Fetch the data when the component loads
//   useEffect(() => {
//     const fetchJobCardData = async () => {
//       try {
//         console.log("checkpoint 1");
//         const res = await axios.get(
//           "https://ethglobal.azurewebsites.net//api/v1/admin/services"
//         );
//         console.log("checkpoint 2");
//         console.log(res.data);
//         setJobCardData(res.data.data);
//       } catch (err) {
//         console.error("Error loading hardcoded data:", err);
//         setError("Failed to load data.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchJobCardData();
//   }, []);

//   const handleBuyClick = (nft) => {
//     setSelectedNFT(nft);
//   };

//   // If a card is selected, show the UserProfile component
//   if (selectedNFT) {
//     return (
//       <UserProfile nft={selectedNFT} goBack={() => setSelectedNFT(null)} />
//     );
//   }

//   return (
//     <div className="mt-4">
//       {loading && <p className="text-center">Loading...</p>}
//       {error && <p className="text-center text-danger">{error}</p>}
//       {!loading && !error && (
//         <div className="row">
//           {jobCardData.map((data, index) => (
//             <div className="col-xl-3 col-md-4 col-sm-6" key={index}>
//               <div className="card hover-enlarge">
//                 <div
//                   className="jobs2 card-body"
//                   onClick={() => handleBuyClick(data)}
//                 >
//                   <div className="text-left">
//                     <img
//                       src={data.image}
//                       alt=""
//                       className="mb-4"
//                       style={{ width: "100%", height: "auto" }}
//                     />
//                     <h3 className="mb-0">{data.title}</h3>
//                     <span className="text-primary mb-3 d-block">
//                       {data.subtitle}
//                     </span>
//                   </div>
//                   <div className="text-left">
//                     <h4>
//                       <strong>Annual Generation:</strong> {data.generation}
//                     </h4>
//                     <h4>
//                       <strong>Price:</strong> {data.price}
//                     </h4>
//                     <h4>
//                       <strong>Plant Size:</strong> {data.plantSize}
//                     </h4>
//                     <h4>
//                       <strong>Tariff:</strong> Rs. {data.tarrif}
//                     </h4>
//                   </div>
//                   <div className="text-center">
//                     <button
//                       onClick={() => {
//                         if (data.isAvailable) {
//                           handleBuyClick(data);
//                         } else {
//                           alert("Site is fully purchased");
//                         }
//                       }}
//                       disabled={!data.isAvailable}
//                       className={`btn ${
//                         data.isAvailable
//                           ? "btn-outline-success"
//                           : "btn-secondary"
//                       } mt-3`}
//                       title={
//                         data.isAvailable ? "Buy now" : "Site is fully purchased"
//                       }
//                     >
//                       {data.isAvailable ? "BUY" : "Sold Out"}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// const UserProfile = ({ nft, goBack }) => {
//   // State to track whether the image should be fixed or sticky
//   const [isFixed, setIsFixed] = useState(true);

//   const [kWp, setkWp] = useState(0);
//   const [siteDetails, setSiteDetails] = useState(null);
//   const [totalAmount, setTotalAmount] = useState(0);
//   const tariffPerUnit = 34675; // Rs per kWp
//   const [consumerWallet, setConsumerWallet] = useState("");
//   const [saleActive, setSaleActive] = useState(false);
//   const [loadingSaleInfo, setLoadingSaleInfo] = useState(true);
//   const userDetails = JSON.parse(localStorage.getItem("userDetails"));
//   const userId = userDetails?.userId;

//   useEffect(() => {
//     if (!nft.title) return;

//     // First API Call: Add Site (Ensures site exists before purchasing)
//     const addSite = async () => {
//       const cleanedPlantSize = parseFloat(nft.plantSize);
//       try {
//         const response = await fetch(
//           `https://ethglobal.azurewebsites.net/api/v1/sites/site-details`,
//           {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({
//               action: "add",
//               userId: userId,
//               siteName: nft.title,
//               plantSize: cleanedPlantSize, // Plant size from props
//             }),
//           }
//         );

//         const data = await response.json();
//         setSiteDetails(data);
//       } catch (error) {
//         console.error("Error adding site:", error);
//       }
//     };

//     addSite();
//   }, [nft.title, nft.plantSize, userId]);

//   useEffect(() => {
//     const fetchSaleState = async () => {
//       if (!nft.contractAddress) {
//         console.warn("No contractAddress on NFT, skipping sale check");
//         setSaleActive(false);
//         setLoadingSaleInfo(false);
//         return;
//       }

//       try {
//         console.log(
//           "[SaleCheck] Fetching on‐chain data for",
//           nft.contractAddress
//         );
//         // requires user to have MetaMask (for readRPC).
//         const provider = new BrowserProvider(window.ethereum);
//         const contract = new ethers.Contract(
//           nft.contractAddress,
//           NFT_ABI,
//           provider
//         );

//         // parallel fetch
//         const [nextIdBN, maxKWBN] = await Promise.all([
//           contract.nextTokenIdToClaim(),
//           contract.maxKilowatts(),
//         ]);

//         console.log(
//           "[SaleCheck] nextTokenIdToMint (raw):",
//           nextIdBN.toString()
//         );
//         console.log("[SaleCheck] maxKilowatts (raw):", maxKWBN.toString());
//         console.log(nextIdBN < maxKWBN);

//         const nextId = nextIdBN;
//         const maxKW = maxKWBN;

//         console.log("[SaleCheck] parsed:", { nextId, maxKW });
//         setSaleActive(nextId <= maxKW);
//       } catch (err) {
//         console.error("[SaleCheck] error:", err);
//         setSaleActive(false);
//       } finally {
//         setLoadingSaleInfo(false);
//       }
//     };

//     fetchSaleState();
//   }, [nft.contractAddress]);
//   // Handle kWp change
//   const handleIncrease = () => {
//     if (kWp + 1 > siteDetails?.plantSize - siteDetails?.totalPurchasedkWp) {
//       alert("Cannot exceed plant capacity!");
//       return;
//     }
//     setkWp(kWp + 1);
//     setTotalAmount((kWp + 1) * tariffPerUnit);
//   };

//   const handleDecrease = () => {
//     if (kWp > 0) {
//       setkWp(kWp - 1);
//       setTotalAmount((kWp - 1) * tariffPerUnit);
//     }
//   };

//   // Event listener to track the scroll position
//   const handleScroll = () => {
//     // Get the current scroll position
//     const scrollY = window.scrollX;
//     // Set a scroll threshold (e.g., 900px) to change the position
//     const threshold = 500; // Adjust this value as needed

//     // Check if the scroll position is past the threshold
//     if (scrollY > threshold) {
//       setIsFixed(false); // Apply sticky behavior
//     } else {
//       setIsFixed(true); // Apply fixed behavior
//     }
//   };

//   // Attach the scroll event listener
//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     // Cleanup the event listener when the component is unmounted
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Handle Razorpay Payment
//   const handleRazorPayPayment = async () => {
//     const price = totalAmount; // Convert to paise
//     if (!saleActive) {
//       return alert("Sorry, all NFTs are sold out on-chain.");
//     }

//     try {
//       const orderResponse = await fetch(
//         `https://ethglobal.azurewebsites.net/api/v1/payment/create/order`,
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ amount: price }),
//         }
//       );

//       const orderData = await orderResponse.json();
//       if (!orderResponse.ok) throw new Error("Failed to create order");

//       const options = {
//         // key: process.env.REACT_APP_RAZORPAY_API_KEY,
//         key: orderData.razorpay_key,
//         amount: orderData.amount,
//         currency: orderData.currency,
//         name: "WattWealth",
//         description: `Payment for ${nft.title}`,
//         image: "/logo.png",
//         order_id: orderData.order_id,
//         handler: function (response) {
//           verifyPayment(response);
//         },
//         prefill: {
//           name: userDetails?.email || "Customer Name",
//           email: userDetails?.email || "customer@example.com",
//           contact: "",
//         },
//         theme: { color: "#3399cc" },
//       };

//       const rzp1 = new window.Razorpay(options);
//       rzp1.open();
//     } catch (error) {
//       console.error("Payment initiation error:", error);
//     }
//   };

//   const purchaseWithUSDC = async () => {
//     if (!saleActive) {
//       return alert("Sorry, all NFTs are sold out on-chain.");
//     }
//     if (kWp <= 0) {
//       alert("Select at least 1 kWp");
//       return;
//     }

//     try {
//       // 1. Wallet connection
//       if (!window.ethereum) {
//         alert("Please install MetaMask");
//         return;
//       }

//       const provider = new ethers.BrowserProvider(window.ethereum);
//       await provider.send("eth_requestAccounts", []);
//       const signer = await provider.getSigner();
//       const userAddress = await signer.getAddress();
//       const USDC_TOKEN_ADDRESS = "0xCaC524BcA292aaade2DF8A05cC58F0a65B1B3bB9";
//       // const NFT_CONTRACT_ADDRESS = "0x78F4ed9aD9B09535150a755E160a282b2E1639C4";
//       const NFT_CONTRACT_ADDRESS = "0x1dd4A8bd06188f42636Ee300F67170B01e6fF8cF";

//       const usdc = new ethers.Contract(
//         USDC_TOKEN_ADDRESS,
//         [
//           "function allowance(address, address) view returns (uint256)",
//           "function approve(address, uint256) returns (bool)",
//           "function balanceOf(address) view returns (uint256)",
//         ],
//         signer
//       );
//       const contractAddress = nft.contractAddress;
//       if (!contractAddress) {
//         throw new Error("Missing contract address for this site");
//       }

//       const nftContract = new ethers.Contract(contractAddress, NFT_ABI, signer);
//       const contractPrice = await nftContract.pricePerNFT();
//       console.log("price of nft", contractPrice);
//       console.log("kWp", kWp);
//       // eslint-disable-next-line no-undef
//       const quantity = BigInt(kWp);
//       console.log("quantity", quantity);
//       const totalCost = contractPrice * quantity;
//       console.log("totalCost", totalCost);
//       const tokenIdCounter = await nftContract.totalSold();
//       console.log("token Id counter", tokenIdCounter);
//       const maxSupply = await nftContract.maxKilowatts();
//       console.log("maxSupply", maxSupply);
//       if (quantity > maxSupply - tokenIdCounter) {
//         throw new Error(`Only ${maxSupply - tokenIdCounter} kWp remaining`);
//       }
//       // 4. Check USDC balance
//       const balance = await usdc.balanceOf(userAddress);
//       if (balance < totalCost) {
//         throw new Error(
//           `Insufficient USDC balance. Needed: ${ethers.formatUnits(
//             totalCost,
//             6
//           )} USDC`
//         );
//       }

//       // 5. Check and request approval
//       const currentAllowance = await usdc.allowance(
//         userAddress,
//         NFT_CONTRACT_ADDRESS
//       );
//       // const quantity = parseInt(kWp);
//       // if (isNaN(quantity)) throw new Error("Invalid quantity");
//       if (!quantity || quantity <= 0) {
//         throw new Error("Invalid quantity (must be a positive integer)");
//       }

//       const approveTx = await usdc.approve(nftContract.target, totalCost);
//       await approveTx.wait();
//       const postApprovalAllowance = await usdc.allowance(
//         userAddress,
//         NFT_CONTRACT_ADDRESS
//       );
//       console.log("Post-approval allowance:", postApprovalAllowance.toString());

//       // Add 5-second block confirmation delay
//       await new Promise((resolve) => setTimeout(resolve, 5000));

//       // 6. Execute purchase after approval
//       const tx = await nftContract.purchaseUSDC(quantity, {
//         gasLimit: 1_000_000,
//       });
//       await tx.wait();

//       // Wait for transaction confirmation
//       const receipt = await tx.wait();
//       if (receipt.status === 0) {
//         throw new Error("Transaction failed");
//       }

//       alert("Purchase successful! 🎉");
//       // Inside purchaseWithUSDC function after successful TX
//       await fetch(
//         `https://ethglobal.azurewebsites.net/api/v1/sites/site-details`,
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           // body: JSON.stringify({
//           //   action: "buy",
//           //   userId: userId,
//           //   siteName: nft.title,
//           //   kWp: kWp,
//           //   paymentMethod: "usdc", // Add payment method
//           // }),
//           body: JSON.stringify({
//             action: "buy",
//             userId: userId,
//             siteName: nft.title,
//             kWp: kWp,
//             paymentMethod: "usdc",
//             consumerWallet: consumerWallet.trim(),
//           }),
//         }
//       );
//       setkWp(0);
//       setTotalAmount(0);
//     } catch (err) {
//       console.error("USDC purchase failed:", err);
//       alert(`USDC purchase failed: ${err.reason || err.message}`);
//     }
//   };

//   // Verify payment and update backend
//   const verifyPayment = async (response) => {
//     const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
//       response;

//     try {
//       const verifyResponse = await fetch(
//         `https://ethglobal.azurewebsites.net/api/v1/payment/verify/order`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             orderCreationId: razorpay_order_id,
//             razorpayPaymentId: razorpay_payment_id,
//             razorpaySignature: razorpay_signature,
//           }),
//         }
//       );

//       const verifyData = await verifyResponse.json();
//       if (!verifyResponse.ok) throw new Error("Payment verification failed");

//       alert(`Payment successful for ${nft.title}`);

//       // After successful payment, add the site
//       await fetch(
//         `https://ethglobal.azurewebsites.net/api/v1/sites/site-details`,
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             action: "add",
//             userId: userId,
//             siteName: nft.title,
//             plantSize: nft.plantSize,
//           }),
//         }
//       );

//       // Then, update the kWp purchase
//       await fetch(
//         `https://ethglobal.azurewebsites.net/api/v1/sites/site-details`,
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           // body: JSON.stringify({
//           //   action: "buy",
//           //   userId: userId,
//           //   siteName: nft.title,
//           //   kWp: kWp,
//           //   paymentMethod: "razorpay",
//           // }),
//           body: JSON.stringify({
//             action: "buy",
//             userId: userId,
//             siteName: nft.title,
//             kWp: kWp,
//             paymentMethod: "razorpay",
//             consumerWallet: consumerWallet.trim(),
//           }),
//         }
//       );
//       console.log("About to call /mint with:", {
//         consumerAddress: consumerWallet,
//         quantity: kWp,
//         contractAddress: nft.contractAddress,
//       });
//       // await mintNFTs(userDetails.walletAddress, kWp);
//       const mintResponse = await fetch(
//         `https://ethglobal.azurewebsites.net/api/v1/mint`,
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             consumerAddress: consumerWallet, // consumer's wallet address
//             quantity: kWp, // number of NFTs to mint
//             contractAddress: nft.contractAddress,
//           }),
//         }
//       );

//       const mintData = await mintResponse.json();
//       if (!mintResponse.ok)
//         throw new Error(mintData.error || "NFT minting failed");

//       alert("NFTs successfully minted to your wallet!");
//       setkWp(0);
//       setTotalAmount(0);
//     } catch (error) {
//       console.error("Payment verification error:", error);
//     }
//   };

//   return (
//     <div className="mt-4">
//       <div className="d-flex align-items-center mb-4">
//         <h3 className="mb-0 me-auto">{nft.title}</h3>
//         <button onClick={goBack} className="btn btn-secondary">
//           Back
//         </button>
//       </div>
//       <div className="row">
//         {/* Rest of the content */}
//         <div className="col-xl-9">
//           <div className="card">
//             <div className="card-header border-0 flex-wrap align-items-start">
//               <div className="col-xl-12">
//                 <div className="user d-sm-flex d-block pe-0">
//                   <img
//                     src={nft.image || user} // Use dynamic image if available
//                     className="d-xl-none d-lg-none mb-4" // Hide image on large and extra-large screens
//                     style={{ width: "100%", height: "auto" }}
//                     alt="Site"
//                   />
//                   <div className="ms-sm-3 ms-0 me-md-5 md-0">
//                     <h5 className="mb-1 font-w600">
//                       NFTs Available: {nft.nftsAvailable}
//                     </h5>

//                     {/* Overview */}
//                     <h5 className="font-w600">Overview</h5>
//                     <p>{nft.overview}</p>

//                     {/* Technology */}
//                     <h5 className="font-w600">Technology Deployed</h5>
//                     <h6>Modules:</h6>
//                     <p>{nft.technology?.modules}</p>
//                     <h6>Inverter & Optimization:</h6>
//                     <p>{nft.technology?.inverter}</p>

//                     {/* Performance & Returns */}
//                     <h5 className="font-w600">Performance & Returns</h5>
//                     <p>{nft.performanceReturns}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="card-body pt-0">
//               <h4 className="fs-20">Description</h4>
//               <div className="row">
//                 <div className="col-xl-12 col-md-6">
//                   <div className="card">
//                     <div className="card-body">
//                       <div className="row">
//                         <div className="col-sm-4">
//                           <div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
//                             <div>
//                               <h3 className="mb-0 lh-1">{nft.plantSize}</h3>
//                               <span className="fs-14 d-block">Capacity</span>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-sm-4">
//                           <div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
//                             <div>
//                               <h3 className="mb-0 lh-1">80%</h3>
//                               <span className="fs-14 d-block">Reserved</span>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-sm-4">
//                           <div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
//                             <div>
//                               <h3 className="mb-0 lh-1">17-Aug-24</h3>
//                               <span className="fs-14 d-block">
//                                 Date of Commisioning
//                               </span>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-sm-4 mt-4">
//                           <div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
//                             <div>
//                               <h3 className="mb-0 lh-1">15 Years</h3>
//                               <span className="fs-14 d-block">PPA Terms</span>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-sm-4 mt-4">
//                           <div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
//                             <div>
//                               <h3 className="mb-0 lh-1">18%</h3>
//                               <span className="fs-14 d-block">Return</span>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-sm-4 mt-4">
//                           <div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
//                             <div>
//                               <h3 className="mb-0 lh-1">Rs 4.75 per kWh</h3>
//                               <span className="fs-14 d-block">Tariff</span>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <Col xl={8} className="mx-auto">
//               <Card>
//                 <Card.Body className="p-4">
//                   <h4 className="card-intro-title">Photos</h4>
//                   <div className="d-flex justify-content-center">
//                     <Carousel>
//                       {carousel1.map((carousel, i) => (
//                         <Carousel.Item key={i}>
//                           <img
//                             src={carousel}
//                             className="d-block"
//                             alt={`Slide ${i + 1}`}
//                           />
//                         </Carousel.Item>
//                       ))}
//                     </Carousel>
//                   </div>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <div className="card-footer mb-10 mt-10">
//               <h3 className="d-block mb-10 mt-30">
//                 <strong>Documents</strong>
//               </h3>
//               <div className="row">
//                 <div className="col-md-3 text-center mb-4">
//                   <Link to={"#"} className="d-block text-center">
//                     <i className="fas fa-file-alt fa-3x mb-2"></i>
//                     <span className="d-block">
//                       Power Purchase Agreement (PPA)
//                     </span>{" "}
//                     {/* Set text as block */}
//                   </Link>
//                 </div>
//                 <div className="col-md-3 text-center mb-4">
//                   <Link to={"#"} className="d-block text-center">
//                     <i className="fas fa-file-alt fa-3x mb-2"></i>
//                     <span className="d-block">Lease Agreement</span>{" "}
//                     {/* Set text as block */}
//                   </Link>
//                 </div>
//                 <div className="col-md-3 text-center mb-4">
//                   <Link to={"#"} className="d-block text-center">
//                     <i className="fas fa-clipboard fa-3x mb-2"></i>
//                     <span className="d-block">Commissioning Report</span>{" "}
//                     {/* Set text as block */}
//                   </Link>
//                 </div>
//                 <div className="col-md-3 text-center mb-4">
//                   <Link to={"#"} className="d-block text-center">
//                     <i className="fas fa-file-invoice fa-3x mb-2"></i>
//                     <span className="d-block">Latest Bill</span>{" "}
//                     {/* Set text as block */}
//                   </Link>
//                 </div>
//               </div>
//             </div>

//             <Col xl="12">
//               <Card>
//                 <Card.Header className="d-block">
//                   <Card.Title>FAQ</Card.Title>
//                 </Card.Header>
//                 <Card.Body>
//                   <Accordion
//                     className="col-xl-6 accordion accordion-rounded-stylish accordion-gradient"
//                     defaultActiveKey="0"
//                   >
//                     {defaultAccordion.map((d, i) => (
//                       <Accordion.Item key={i} eventKey={`${i}`}>
//                         <Accordion.Header className="accordion-header accordion-header--primary">
//                           <span className="accordion-header-icon"></span>
//                           <span className="accordion-header-text">
//                             {d.title}
//                           </span>
//                           <span className="accordion-header-indicator"></span>
//                         </Accordion.Header>
//                         <Accordion.Collapse
//                           eventKey={`${i}`}
//                           className="accordion__body"
//                         >
//                           <div
//                             className="accordion-body"
//                             dangerouslySetInnerHTML={{ __html: d.text }}
//                           />
//                         </Accordion.Collapse>
//                       </Accordion.Item>
//                     ))}
//                   </Accordion>
//                 </Card.Body>
//               </Card>
//             </Col>
//           </div>
//         </div>

//         {/* Dynamic Positioning of the Image */}
//         {/* Mobile Buy Card */}
//         <div className="col-12 d-block d-xl-none order-first mb-4">
//           <div className="card" style={{ height: "auto", width: "100%" }}>
//             <img
//               src={nft.image || user}
//               style={{ height: "150px", width: "100%", objectFit: "cover" }}
//               alt="Site"
//             />
//             <div className="card-body d-flex flex-column justify-content-center">
//               <div className="col-12">
//                 <p className="font-w600 mb-2">
//                   <span className="custom-label-2">Site: </span>
//                   <span className="font-w400">{nft.title}</span>
//                 </p>
//                 <p className="font-w600 mb-2">
//                   <span className="custom-label-2">Location: </span>
//                   <span className="font-w400">{nft.subtitle}</span>
//                 </p>
//                 <p className="font-w600 mb-2">
//                   <span className="custom-label-2">Plant Size: </span>
//                   <span className="font-w400">{nft.plantSize}</span>
//                 </p>
//                 <p className="font-w600 mb-2">
//                   <span className="custom-label-2">Total NFTs: </span>
//                   <span className="font-w400">{nft.totalNFTs}</span>
//                 </p>
//                 <p className="font-w600 mb-2">
//                   <span className="custom-label-2">Plant Date: </span>
//                   <span className="font-w400">17 Aug 2024</span>
//                 </p>
//                 <p className="font-w600 mb-2">
//                   <span className="custom-label-2">Tariff: </span>
//                   <span className="font-w400">Rs. 4.75 per Unit</span>
//                 </p>
//               </div>
//               <div className="d-flex align-items-center mt-3 justify-content-center">
//                 <button
//                   className="btn btn-danger me-2"
//                   onClick={handleDecrease}
//                 >
//                   -
//                 </button>
//                 <span className="font-w600">{kWp} kWp</span>
//                 <button
//                   className="btn btn-success ms-2"
//                   onClick={handleIncrease}
//                 >
//                   +
//                 </button>
//               </div>
//               <div className="mt-3">
//                 <label htmlFor="walletAddress">Wallet Address:</label>
//                 <input
//                   id="walletAddress"
//                   type="text"
//                   className="form-control"
//                   placeholder="Enter your wallet address"
//                   value={consumerWallet}
//                   onChange={(e) => setConsumerWallet(e.target.value)}
//                 />
//               </div>
//               <p className="font-w600 mt-3 text-center">
//                 Total Amount: Rs. {totalAmount}
//               </p>
//               <button
//                 // onClick={() =>
//                 //   nft.isAvailable
//                 //     ? handleRazorPayPayment()
//                 //     : alert("Site is fully purchased")
//                 // }
//                 // disabled={!nft.isAvailable}
//                 onClick={handleRazorPayPayment}
//                 disabled={!nft.isAvailable || loadingSaleInfo || !saleActive}
//                 className="btn btn-primary w-100"
//               >
//                 {nft.isAvailable ? "Buy with Fiat" : "Sold Out"}
//               </button>
//               <button
//                 // onClick={() =>
//                 //   nft.isAvailable
//                 //     ? purchaseWithUSDC()
//                 //     : alert("Site is fully purchased")
//                 // }
//                 // disabled={!nft.isAvailable}
//                 onClick={purchaseWithUSDC}
//                 disabled={!nft.isAvailable || loadingSaleInfo || !saleActive}
//                 className="btn btn-secondary w-100 mt-2"
//               >
//                 {nft.isAvailable ? "Buy with with PayPal USDC" : "Sold Out"}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Desktop Buy Card (remains as before) */}
//         <div className="col-xl-3 d-none d-xl-block">
//           <div className="card" style={{ height: "auto", width: "270px" }}>
//             <img
//               src={nft.image || user}
//               style={{ height: "150px", width: "100%", objectFit: "cover" }}
//               alt="Site"
//             />
//             <div className="card-body d-flex flex-column justify-content-center">
//               <div className="col-xl-12">
//                 <p className="font-w600 mb-2">
//                   <span className="custom-label-2">
//                     Site: <span className="font-w400">{nft.title}</span>
//                   </span>
//                 </p>
//                 <p className="font-w600 mb-2">
//                   <span className="custom-label-2">
//                     Location: <span className="font-w400">{nft.subtitle}</span>
//                   </span>
//                 </p>
//                 <p className="font-w600 mb-2">
//                   <span className="custom-label-2">
//                     Plant Size:{" "}
//                     <span className="font-w400">{nft.plantSize}</span>
//                   </span>
//                 </p>
//                 <p className="font-w600 mb-2">
//                   <span className="custom-label-2">
//                     Total NFTs:{" "}
//                     <span className="font-w400">{nft.totalNFTs}</span>
//                   </span>
//                 </p>
//                 <p className="font-w600 mb-2">
//                   <span className="custom-label-2">
//                     Plant Date: <span className="font-w400">17 Aug 2024</span>
//                   </span>
//                 </p>
//                 <p className="font-w600 mb-2">
//                   <span className="custom-label-2">
//                     Tariff: <span className="font-w400">Rs. 4.75 per Unit</span>
//                   </span>
//                 </p>
//               </div>
//               <div className="d-flex align-items-center mt-3 justify-content-center">
//                 <button
//                   className="btn btn-danger me-2"
//                   onClick={handleDecrease}
//                 >
//                   -
//                 </button>
//                 <span className="font-w600">{kWp} kWp</span>
//                 <button
//                   className="btn btn-success ms-2"
//                   onClick={handleIncrease}
//                 >
//                   +
//                 </button>
//               </div>
//               <div className="mt-3">
//                 <label htmlFor="walletAddress">Wallet Address:</label>
//                 <input
//                   id="walletAddress"
//                   type="text"
//                   className="form-control"
//                   placeholder="Enter your wallet address"
//                   value={consumerWallet}
//                   onChange={(e) => setConsumerWallet(e.target.value)}
//                 />
//               </div>
//               <p className="font-w600 mt-3 text-center">
//                 Total Amount: Rs. {totalAmount}
//               </p>
//               <button
//                 onClick={() =>
//                   nft.isAvailable
//                     ? handleRazorPayPayment()
//                     : alert("Site is fully purchased")
//                 }
//                 disabled={!nft.isAvailable}
//                 className="btn btn-primary w-100"
//               >
//                 {nft.isAvailable ? "Buy with fiat" : "Sold Out"}
//               </button>
//               <button
//                 // onClick={() =>
//                 //   nft.isAvailable
//                 //     ? purchaseWithUSDC()
//                 //     : alert("Site is fully purchased")
//                 // }
//                 // disabled={!nft.isAvailable}
//                 onClick={purchaseWithUSDC}
//                 disabled={!nft.isAvailable || loadingSaleInfo || !saleActive}
//                 className="btn btn-secondary w-100 mt-2"
//               >
//                 {nft.isAvailable ? "Pay with USDC" : "Sold Out"}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JobsTabBlog;

import React, { useState, useEffect } from "react";
import { Row, Col, Card, Carousel, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import NFT_ABI from "./contractabi.json";
import axios from "axios";
// Placeholder images
import user from "./../../../../../images/user.jpg";
import img1 from "../../../../../images/big/img1.jpg";
import img2 from "../../../../../images/big/img2.jpg";
import img3 from "../../../../../images/big/img3.jpg";
import { BrowserProvider, ethers } from "ethers";
// import { ethers } from "ethers";
const AUTH_API_URL =
  "https://portal.intellotechsolutions.co.in:5000/api/intello/authenticate";
const GET_USER_SITES_API_URL =
  "https://portal.intellotechsolutions.co.in:5000/api/intello/user/v1/sites";

const carousel1 = [img1, img2, img3];

const defaultAccordion = [
  {
    title: "About the Project",
    text: `
            <p><strong>When is the commissioning date?</strong><br />The commissioning date is on 15th August 2024.</p>
            <p><strong>Which make panels were used in the project?</strong><br />The project used ABC brand panels for solar power generation.</p>
        `,
  },
  {
    title: "About the NFTs",
    text: `
            <p><strong>What is the total number of NFTs available?</strong><br />There are 64 NFTs available for this project.</p>
            <p><strong>How can I purchase NFTs?</strong><br />You can purchase NFTs through our official website by following the buy process.</p>
        `,
  },
  {
    title: "About Maintenance",
    text: `
            <p><strong>Who is responsible for maintenance?</strong><br />The maintenance is handled by XYZ company under a 5-year contract.</p>
            <p><strong>How often is maintenance performed?</strong><br />Maintenance is performed quarterly to ensure optimal performance.</p>
        `,
  },
];

const JobsTabBlog = () => {
  const [selectedNFT, setSelectedNFT] = useState(null); // For selected card
  const [jobCardData, setJobCardData] = useState([]); // Dynamic card data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch the data when the component loads
  useEffect(() => {
    const fetchJobCardData = async () => {
      try {
        console.log("checkpoint 1");
        const res = await axios.get(
          "https://ethglobal.azurewebsites.net//api/v1/admin/services"
        );
        console.log("checkpoint 2");
        console.log(res.data);
        setJobCardData(res.data.data);
      } catch (err) {
        console.error("Error loading hardcoded data:", err);
        setError("Failed to load data.");
      } finally {
        setLoading(false);
      }
    };

    fetchJobCardData();
  }, []);

  const handleBuyClick = (nft) => {
    setSelectedNFT(nft);
  };

  // If a card is selected, show the UserProfile component
  if (selectedNFT) {
    return (
      <UserProfile nft={selectedNFT} goBack={() => setSelectedNFT(null)} />
    );
  }

  return (
    <div className="mt-4">
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-danger">{error}</p>}
      {!loading && !error && (
        <div className="row">
          {jobCardData.map((data, index) => (
            <div className="col-xl-3 col-md-4 col-sm-6" key={index}>
              <div className="card hover-enlarge">
                <div
                  className="jobs2 card-body"
                  onClick={() => handleBuyClick(data)}
                >
                  <div className="text-left">
                    <img
                      src={data.image}
                      alt=""
                      className="mb-4"
                      style={{ width: "100%", height: "auto" }}
                    />
                    <h3 className="mb-0">{data.title}</h3>
                    <span className="text-primary mb-3 d-block">
                      {data.subtitle}
                    </span>
                  </div>
                  <div className="text-left">
                    <h4>
                      <strong>Annual Generation:</strong> {data.generation}
                    </h4>
                    <h4>
                      <strong>Price:</strong> {data.price}
                    </h4>
                    <h4>
                      <strong>Plant Size:</strong> {data.plantSize}
                    </h4>
                    <h4>
                      <strong>Tariff:</strong> Rs. {data.tarrif}
                    </h4>
                  </div>
                  <div className="text-center">
                    <button
                      onClick={() => {
                        if (data.isAvailable) {
                          handleBuyClick(data);
                        } else {
                          alert("Site is fully purchased");
                        }
                      }}
                      disabled={!data.isAvailable}
                      className={`btn ${
                        data.isAvailable
                          ? "btn-outline-success"
                          : "btn-secondary"
                      } mt-3`}
                      title={
                        data.isAvailable ? "Buy now" : "Site is fully purchased"
                      }
                    >
                      {data.isAvailable ? "BUY" : "Sold Out"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const UserProfile = ({ nft, goBack }) => {
  // State to track whether the image should be fixed or sticky
  const [isFixed, setIsFixed] = useState(true);

  const [kWp, setkWp] = useState(0);
  const [siteDetails, setSiteDetails] = useState(null);
  const [totalAmount, setTotalAmount] = useState(0);
  const tariffPerUnit = 34675; // Rs per kWp
  const [consumerWallet, setConsumerWallet] = useState("");
  const [saleActive, setSaleActive] = useState(false);
  const [loadingSaleInfo, setLoadingSaleInfo] = useState(true);
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));
  const userId = userDetails?.userId;

  useEffect(() => {
    if (!nft.title) return;

    // First API Call: Add Site (Ensures site exists before purchasing)
    const addSite = async () => {
      const cleanedPlantSize = parseFloat(nft.plantSize);
      try {
        const response = await fetch(
          `https://ethglobal.azurewebsites.net/api/v1/sites/site-details`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              action: "add",
              userId: userId,
              siteName: nft.title,
              plantSize: cleanedPlantSize, // Plant size from props
            }),
          }
        );

        const data = await response.json();
        setSiteDetails(data);
      } catch (error) {
        console.error("Error adding site:", error);
      }
    };

    addSite();
  }, [nft.title, nft.plantSize, userId]);

  useEffect(() => {
    const fetchSaleState = async () => {
      if (!nft.contractAddress) {
        console.warn("No contractAddress on NFT, skipping sale check");
        setSaleActive(false);
        setLoadingSaleInfo(false);
        return;
      }

      try {
        console.log(
          "[SaleCheck] Fetching on‐chain data for",
          nft.contractAddress
        );
        // requires user to have MetaMask (for readRPC).
        const provider = new BrowserProvider(window.ethereum);
        const contract = new ethers.Contract(
          nft.contractAddress,
          NFT_ABI,
          provider
        );

        // parallel fetch
        const [nextIdBN, maxKWBN] = await Promise.all([
          contract.nextTokenIdToClaim(),
          contract.maxKilowatts(),
        ]);

        console.log(
          "[SaleCheck] nextTokenIdToMint (raw):",
          nextIdBN.toString()
        );
        console.log("[SaleCheck] maxKilowatts (raw):", maxKWBN.toString());
        console.log(nextIdBN < maxKWBN);

        const nextId = nextIdBN;
        const maxKW = maxKWBN;

        console.log("[SaleCheck] parsed:", { nextId, maxKW });
        setSaleActive(nextId <= maxKW);
      } catch (err) {
        console.error("[SaleCheck] error:", err);
        setSaleActive(false);
      } finally {
        setLoadingSaleInfo(false);
      }
    };

    fetchSaleState();
  }, [nft.contractAddress]);

  const handleIncrease = () => {
    if (kWp + 1 > siteDetails?.plantSize - siteDetails?.totalPurchasedkWp) {
      alert("Cannot exceed plant capacity!");
      return;
    }
    setkWp(kWp + 1);
    setTotalAmount((kWp + 1) * tariffPerUnit);
  };

  const handleDecrease = () => {
    if (kWp > 0) {
      setkWp(kWp - 1);
      setTotalAmount((kWp - 1) * tariffPerUnit);
    }
  };

  // Event listener to track the scroll position
  const handleScroll = () => {
    // Get the current scroll position
    const scrollY = window.scrollX;
    // Set a scroll threshold (e.g., 900px) to change the position
    const threshold = 500; // Adjust this value as needed

    // Check if the scroll position is past the threshold
    if (scrollY > threshold) {
      setIsFixed(false); // Apply sticky behavior
    } else {
      setIsFixed(true); // Apply fixed behavior
    }
  };

  // Attach the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Cleanup the event listener when the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle Razorpay Payment
  const handleRazorPayPayment = async () => {
    const price = totalAmount; // Convert to paise
    if (!saleActive) {
      return alert("Sorry, all NFTs are sold out on-chain.");
    }

    try {
      const orderResponse = await fetch(
        `https://ethglobal.azurewebsites.net/api/v1/payment/create/order`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount: price }),
        }
      );

      const orderData = await orderResponse.json();
      if (!orderResponse.ok) throw new Error("Failed to create order");

      const options = {
        // key: process.env.REACT_APP_RAZORPAY_API_KEY,
        key: orderData.razorpay_key,
        amount: orderData.amount,
        currency: orderData.currency,
        name: "Enfros Solutions",
        description: `Payment for ${nft.title}`,
        image: "/logo.png",
        order_id: orderData.order_id,
        handler: function (response) {
          verifyPayment(response);
        },
        prefill: {
          name: userDetails?.email || "Customer Name",
          email: userDetails?.email || "customer@example.com",
          contact: "",
        },
        theme: { color: "#3399cc" },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error("Payment initiation error:", error);
    }
  };

  // const purchaseWithUSDC = async () => {

  //   if (!saleActive) {
  //     return alert("Sorry, all NFTs are sold out on-chain.");
  //   }
  //   if (kWp <= 0) {
  //     alert("Select at least 1 kWp");
  //     return;
  //   }

  //   try {
  //     // 1. Wallet connection
  //     if (!window.ethereum) {
  //       alert("Please install MetaMask");
  //       return;
  //     }

  //     const provider = new ethers.BrowserProvider(window.ethereum);
  //     await provider.send("eth_requestAccounts", []);
  //     const signer = await provider.getSigner();
  //     const userAddress = await signer.getAddress();
  //     const USDC_TOKEN_ADDRESS = "0xCaC524BcA292aaade2DF8A05cC58F0a65B1B3bB9";
  //     // const NFT_CONTRACT_ADDRESS = "0x78F4ed9aD9B09535150a755E160a282b2E1639C4";
  //     const NFT_CONTRACT_ADDRESS = "0x1dd4A8bd06188f42636Ee300F67170B01e6fF8cF";

  //     const usdc = new ethers.Contract(
  //       USDC_TOKEN_ADDRESS,
  //       [
  //         "function allowance(address, address) view returns (uint256)",
  //         "function approve(address, uint256) returns (bool)",
  //         "function balanceOf(address) view returns (uint256)",
  //       ],
  //       signer
  //     );
  //     const contractAddress = nft.contractAddress;
  //     if (!contractAddress) {
  //       throw new Error("Missing contract address for this site");
  //     }

  //     const nftContract = new ethers.Contract(
  //       contractAddress,
  //       NFT_ABI,
  //       signer
  //     );
  //     const contractPrice = await nftContract.pricePerNFT();
  //     console.log("price of nft", contractPrice);
  //     console.log("kWp", kWp);
  //     // eslint-disable-next-line no-undef
  //     const quantity = BigInt(kWp);
  //     console.log("quantity", quantity);
  //     const totalCost = contractPrice * quantity;
  //     console.log("totalCost", totalCost);
  //     const tokenIdCounter = await nftContract.totalSold();
  //     console.log("token Id counter", tokenIdCounter);
  //     const maxSupply = await nftContract.maxKilowatts();
  //     console.log("maxSupply", maxSupply);
  //     if (quantity > maxSupply - tokenIdCounter) {
  //       throw new Error(`Only ${maxSupply - tokenIdCounter} kWp remaining`);
  //     }
  //     // 4. Check USDC balance
  //     const balance = await usdc.balanceOf(userAddress);
  //     if (balance < totalCost) {
  //       throw new Error(
  //         `Insufficient USDC balance. Needed: ${ethers.formatUnits(
  //           totalCost,
  //           6
  //         )} USDC`
  //       );
  //     }

  //     // 5. Check and request approval
  //     const currentAllowance = await usdc.allowance(
  //       userAddress,
  //       NFT_CONTRACT_ADDRESS
  //     );
  //     // const quantity = parseInt(kWp);
  //     // if (isNaN(quantity)) throw new Error("Invalid quantity");
  //     if (!quantity || quantity <= 0) {
  //       throw new Error("Invalid quantity (must be a positive integer)");
  //     }

  //     const approveTx = await usdc.approve(nftContract.target, totalCost);
  //     await approveTx.wait();
  //     const postApprovalAllowance = await usdc.allowance(
  //       userAddress,
  //       NFT_CONTRACT_ADDRESS
  //     );
  //     console.log("Post-approval allowance:", postApprovalAllowance.toString());

  //     // Add 5-second block confirmation delay
  //     await new Promise((resolve) => setTimeout(resolve, 5000));

  //     // 6. Execute purchase after approval
  //     const tx = await nftContract.purchaseUSDC(quantity, {
  //       gasLimit: 1_000_000,
  //     });
  //     await tx.wait();

  //     // Wait for transaction confirmation
  //     const receipt = await tx.wait();
  //     if (receipt.status === 0) {
  //       throw new Error("Transaction failed");
  //     }

  //     alert("Purchase successful! 🎉");
  //     // Inside purchaseWithUSDC function after successful TX
  //     await fetch(
  //       `https://ethglobal.azurewebsites.net/api/v1/sites/site-details`,
  //       {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         // body: JSON.stringify({
  //         //   action: "buy",
  //         //   userId: userId,
  //         //   siteName: nft.title,
  //         //   kWp: kWp,
  //         //   paymentMethod: "usdc", // Add payment method
  //         // }),
  //         body: JSON.stringify({
  //           action: "buy",
  //           userId: userId,
  //           siteName: nft.title,
  //           kWp: kWp,
  //           paymentMethod: "usdc",
  //           consumerWallet: consumerWallet.trim(),
  //         }),
  //       }
  //     );
  //     setkWp(0);
  //     setTotalAmount(0);
  //   } catch (err) {
  //     console.error("USDC purchase failed:", err);
  //     alert(`USDC purchase failed: ${err.reason || err.message}`);
  //   }
  // };

  // Verify payment and update backend

  const purchaseWithUSDC = async () => {
    if (!saleActive) {
      return alert("Sorry, all NFTs are sold out on-chain.");
    }
    if (kWp <= 0) {
      alert("Select at least 1 kWp");
      return;
    }

    try {
      if (!window.ethereum) {
        alert("Please install MetaMask");
        return;
      }

      // connect wallet
      const provider = new BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      const userAddress = await signer.getAddress();

      // use consumerWallet if given, otherwise fall back to connected wallet
      const consumerAddress = (consumerWallet || "").trim() || userAddress;
      const contractAddress = nft.contractAddress;
      if (!contractAddress) {
        throw new Error("Missing contract address for this site");
      }

      const USDC_TOKEN_ADDRESS = "0xCaC524BcA292aaade2DF8A05cC58F0a65B1B3bB9";

      const usdc = new ethers.Contract(
        USDC_TOKEN_ADDRESS,
        [
          "function allowance(address, address) view returns (uint256)",
          "function approve(address, uint256) returns (bool)",
          "function balanceOf(address) view returns (uint256)",
        ],
        signer
      );

      const nftContract = new ethers.Contract(contractAddress, NFT_ABI, signer);

      // price and quantity (uints come back as bigint in ethers v6)
      const contractPrice = await nftContract.pricePerNFT(); // bigint
      const quantityBig = BigInt(kWp); // bigint
      const totalCost = contractPrice * quantityBig; // bigint

      // check remaining supply (use BigInt arithmetic)
      const tokenIdCounter = await nftContract.totalSold();
      const maxSupply = await nftContract.maxKilowatts();
      if (quantityBig > maxSupply - tokenIdCounter) {
        throw new Error(
          `Only ${Number(maxSupply - tokenIdCounter)} kWp remaining`
        );
      }

      // check USDC balance
      const balance = await usdc.balanceOf(userAddress);
      if (balance < totalCost) {
        throw new Error(
          `Insufficient USDC balance. Needed: ${ethers.formatUnits(
            totalCost,
            6
          )} USDC`
        );
      }

      // check allowance and approve if needed (approve to contract address)
      const currentAllowance = await usdc.allowance(
        userAddress,
        contractAddress
      );
      if (currentAllowance < totalCost) {
        const approveTx = await usdc.approve(contractAddress, totalCost);
        const approveReceipt = await approveTx.wait();
        if (approveReceipt.status === 0) {
          throw new Error("USDC approval transaction failed");
        }
      }

      // execute purchase on-chain
      const tx = await nftContract.purchaseUSDC(quantityBig, {
        gasLimit: 1_000_000,
      });
      const receipt = await tx.wait();
      if (receipt.status === 0) {
        throw new Error("Purchase transaction failed");
      }

      // --- Backend updates (same order as Razorpay flow) ---
      // 1) Ensure site exists (add)
      const addRes = await fetch(
        `https://ethglobal.azurewebsites.net/api/v1/sites/site-details`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            action: "add",
            userId: userId,
            siteName: nft.title,
            plantSize: nft.plantSize,
          }),
        }
      );
      if (!addRes.ok) {
        const err = await addRes.json().catch(() => ({}));
        console.warn("Add site responded with non-ok:", err);
        // continue — backend may still accept buy/mint even if add failed
      }

      // 2) Register the kWp purchase
      const buyRes = await fetch(
        `https://ethglobal.azurewebsites.net/api/v1/sites/site-details`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            action: "buy",
            userId: userId,
            siteName: nft.title,
            kWp: kWp,
            paymentMethod: "usdc",
            consumerWallet: consumerAddress,
          }),
        }
      );
      if (!buyRes.ok) {
        const err = await buyRes.json().catch(() => ({}));
        throw new Error(err.error || "Failed to register purchase on backend");
      }

      // 3) Mint NFTs (backend expects consumerAddress, quantity (number), contractAddress)
      const mintRes = await fetch(
        `https://ethglobal.azurewebsites.net/api/v1/mint`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            consumerAddress: consumerAddress,
            quantity: Number(kWp), // ensure we send a numeric quantity (not bigint)
            contractAddress: contractAddress,
          }),
        }
      );

      const mintData = await mintRes.json().catch(() => ({}));
      if (!mintRes.ok) {
        throw new Error(mintData.error || "NFT minting failed");
      }

      alert("Purchase successful & NFTs minted! 🎉");
      setkWp(0);
      setTotalAmount(0);
    } catch (err) {
      console.error("USDC purchase failed:", err);
      // alert(`USDC purchase failed: ${err.reason || err.message || err}`);
    }
  };

  const verifyPayment = async (response) => {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
      response;

    try {
      const verifyResponse = await fetch(
        `https://ethglobal.azurewebsites.net/api/v1/payment/verify/order`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            orderCreationId: razorpay_order_id,
            razorpayPaymentId: razorpay_payment_id,
            razorpaySignature: razorpay_signature,
          }),
        }
      );

      const verifyData = await verifyResponse.json();
      if (!verifyResponse.ok) throw new Error("Payment verification failed");

      alert(`Payment successful for ${nft.title}`);

      await fetch(
        `https://ethglobal.azurewebsites.net/api/v1/sites/site-details`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            action: "add",
            userId: userId,
            siteName: nft.title,
            plantSize: nft.plantSize,
          }),
        }
      );

      // Then, update the kWp purchase
      await fetch(
        `https://ethglobal.azurewebsites.net/api/v1/sites/site-details`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          // body: JSON.stringify({
          //   action: "buy",
          //   userId: userId,
          //   siteName: nft.title,
          //   kWp: kWp,
          //   paymentMethod: "razorpay",
          // }),
          body: JSON.stringify({
            action: "buy",
            userId: userId,
            siteName: nft.title,
            kWp: kWp,
            paymentMethod: "razorpay",
            consumerWallet: consumerWallet.trim(),
          }),
        }
      );
      console.log("About to call /mint with:", {
        consumerAddress: consumerWallet,
        quantity: kWp,
        contractAddress: nft.contractAddress,
      });
      // await mintNFTs(userDetails.walletAddress, kWp);
      const mintResponse = await fetch(
        `https://ethglobal.azurewebsites.net/api/v1/mint`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            consumerAddress: consumerWallet, // consumer's wallet address
            quantity: kWp, // number of NFTs to mint
            contractAddress: nft.contractAddress,
          }),
        }
      );

      const mintData = await mintResponse.json();
      if (!mintResponse.ok)
        throw new Error(mintData.error || "NFT minting failed");

      alert("NFTs successfully minted to your wallet!");
      setkWp(0);
      setTotalAmount(0);
    } catch (error) {
      console.error("Payment verification error:", error);
    }
  };

  return (
    <div className="mt-4">
      <div className="d-flex align-items-center mb-4">
        <h3 className="mb-0 me-auto">{nft.title}</h3>
        <button onClick={goBack} className="btn btn-secondary">
          Back
        </button>
      </div>
      <div className="row">
        {/* Rest of the content */}
        <div className="col-xl-9">
          <div className="card">
            <div className="card-header border-0 flex-wrap align-items-start">
              <div className="col-xl-12">
                <div className="user d-sm-flex d-block pe-0">
                  <img
                    src={nft.image || user} // Use dynamic image if available
                    className="d-xl-none d-lg-none mb-4" // Hide image on large and extra-large screens
                    style={{ width: "100%", height: "auto" }}
                    alt="Site"
                  />
                  <div className="ms-sm-3 ms-0 me-md-5 md-0">
                    <h5 className="mb-1 font-w600">
                      NFTs Available: {nft.nftsAvailable}
                    </h5>

                    {/* Overview */}
                    <h5 className="font-w600">Overview</h5>
                    <p>{nft.overview}</p>

                    {/* Technology */}
                    <h5 className="font-w600">Technology Deployed</h5>
                    <h6>Modules:</h6>
                    <p>{nft.technology?.modules}</p>
                    <h6>Inverter & Optimization:</h6>
                    <p>{nft.technology?.inverter}</p>

                    {/* Performance & Returns */}
                    <h5 className="font-w600">Performance & Returns</h5>
                    <p>{nft.performanceReturns}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-body pt-0">
              <h4 className="fs-20">Description</h4>
              <div className="row">
                <div className="col-xl-12 col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-sm-4">
                          <div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
                            <div>
                              <h3 className="mb-0 lh-1">{nft.plantSize}</h3>
                              <span className="fs-14 d-block">Capacity</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
                            <div>
                              <h3 className="mb-0 lh-1">80%</h3>
                              <span className="fs-14 d-block">Reserved</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
                            <div>
                              <h3 className="mb-0 lh-1">17-Aug-24</h3>
                              <span className="fs-14 d-block">
                                Date of Commisioning
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4 mt-4">
                          <div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
                            <div>
                              <h3 className="mb-0 lh-1">15 Years</h3>
                              <span className="fs-14 d-block">PPA Terms</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4 mt-4">
                          <div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
                            <div>
                              <h3 className="mb-0 lh-1">18%</h3>
                              <span className="fs-14 d-block">Return</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4 mt-4">
                          <div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
                            <div>
                              <h3 className="mb-0 lh-1">Rs 4.75 per kWh</h3>
                              <span className="fs-14 d-block">Tariff</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Col xl={8} className="mx-auto">
              <Card>
                <Card.Body className="p-4">
                  <h4 className="card-intro-title">Photos</h4>
                  <div className="d-flex justify-content-center">
                    <Carousel>
                      {carousel1.map((carousel, i) => (
                        <Carousel.Item key={i}>
                          <img
                            src={carousel}
                            className="d-block"
                            alt={`Slide ${i + 1}`}
                          />
                        </Carousel.Item>
                      ))}
                    </Carousel>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <div className="card-footer mb-10 mt-10">
              <h3 className="d-block mb-10 mt-30">
                <strong>Documents</strong>
              </h3>
              <div className="row">
                <div className="col-md-3 text-center mb-4">
                  <Link to={"#"} className="d-block text-center">
                    <i className="fas fa-file-alt fa-3x mb-2"></i>
                    <span className="d-block">
                      Power Purchase Agreement (PPA)
                    </span>{" "}
                    {/* Set text as block */}
                  </Link>
                </div>
                <div className="col-md-3 text-center mb-4">
                  <Link to={"#"} className="d-block text-center">
                    <i className="fas fa-file-alt fa-3x mb-2"></i>
                    <span className="d-block">Lease Agreement</span>{" "}
                    {/* Set text as block */}
                  </Link>
                </div>
                <div className="col-md-3 text-center mb-4">
                  <Link to={"#"} className="d-block text-center">
                    <i className="fas fa-clipboard fa-3x mb-2"></i>
                    <span className="d-block">Commissioning Report</span>{" "}
                    {/* Set text as block */}
                  </Link>
                </div>
                <div className="col-md-3 text-center mb-4">
                  <Link to={"#"} className="d-block text-center">
                    <i className="fas fa-file-invoice fa-3x mb-2"></i>
                    <span className="d-block">Latest Bill</span>{" "}
                    {/* Set text as block */}
                  </Link>
                </div>
              </div>
            </div>

            <Col xl="12">
              <Card>
                <Card.Header className="d-block">
                  <Card.Title>FAQ</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Accordion
                    className="col-xl-6 accordion accordion-rounded-stylish accordion-gradient"
                    defaultActiveKey="0"
                  >
                    {defaultAccordion.map((d, i) => (
                      <Accordion.Item key={i} eventKey={`${i}`}>
                        <Accordion.Header className="accordion-header accordion-header--primary">
                          <span className="accordion-header-icon"></span>
                          <span className="accordion-header-text">
                            {d.title}
                          </span>
                          <span className="accordion-header-indicator"></span>
                        </Accordion.Header>
                        <Accordion.Collapse
                          eventKey={`${i}`}
                          className="accordion__body"
                        >
                          <div
                            className="accordion-body"
                            dangerouslySetInnerHTML={{ __html: d.text }}
                          />
                        </Accordion.Collapse>
                      </Accordion.Item>
                    ))}
                  </Accordion>
                </Card.Body>
              </Card>
            </Col>
          </div>
        </div>

        {/* Dynamic Positioning of the Image */}
        {/* Mobile Buy Card */}
        <div className="col-12 d-block d-xl-none order-first mb-4">
          <div className="card" style={{ height: "auto", width: "100%" }}>
            <img
              src={nft.image || user}
              style={{ height: "150px", width: "100%", objectFit: "cover" }}
              alt="Site"
            />
            <div className="card-body d-flex flex-column justify-content-center">
              <div className="col-12">
                <p className="font-w600 mb-2">
                  <span className="custom-label-2">Site: </span>
                  <span className="font-w400">{nft.title}</span>
                </p>
                <p className="font-w600 mb-2">
                  <span className="custom-label-2">Location: </span>
                  <span className="font-w400">{nft.subtitle}</span>
                </p>
                <p className="font-w600 mb-2">
                  <span className="custom-label-2">Plant Size: </span>
                  <span className="font-w400">{nft.plantSize}</span>
                </p>
                <p className="font-w600 mb-2">
                  <span className="custom-label-2">Total NFTs: </span>
                  <span className="font-w400">{nft.totalNFTs}</span>
                </p>
                <p className="font-w600 mb-2">
                  <span className="custom-label-2">Plant Date: </span>
                  <span className="font-w400">17 Aug 2024</span>
                </p>
                <p className="font-w600 mb-2">
                  <span className="custom-label-2">Tariff: </span>
                  <span className="font-w400">Rs. 4.75 per Unit</span>
                </p>
              </div>
              <div className="d-flex align-items-center mt-3 justify-content-center">
                <button
                  className="btn btn-danger me-2"
                  onClick={handleDecrease}
                >
                  -
                </button>
                <span className="font-w600">{kWp} kWp</span>
                <button
                  className="btn btn-success ms-2"
                  onClick={handleIncrease}
                >
                  +
                </button>
              </div>
              <div className="mt-3">
                <label htmlFor="walletAddress">Wallet Address:</label>
                <input
                  id="walletAddress"
                  type="text"
                  className="form-control"
                  placeholder="Enter your wallet address"
                  value={consumerWallet}
                  onChange={(e) => setConsumerWallet(e.target.value)}
                />
              </div>
              <p className="font-w600 mt-3 text-center">
                Total Amount: Rs. {totalAmount}
              </p>
              <button
                // onClick={() =>
                //   nft.isAvailable
                //     ? handleRazorPayPayment()
                //     : alert("Site is fully purchased")
                // }
                // disabled={!nft.isAvailable}
                onClick={handleRazorPayPayment}
                disabled={!nft.isAvailable || loadingSaleInfo || !saleActive}
                className="btn btn-primary w-100"
              >
                {nft.isAvailable ? "Buy with Fiat" : "Sold Out"}
              </button>
              <button
                // onClick={() =>
                //   nft.isAvailable
                //     ? purchaseWithUSDC()
                //     : alert("Site is fully purchased")
                // }
                // disabled={!nft.isAvailable}
                onClick={purchaseWithUSDC}
                disabled={!nft.isAvailable || loadingSaleInfo || !saleActive}
                className="btn btn-secondary w-100 mt-2"
              >
                {nft.isAvailable ? "Pay with Paypal USDC" : "Sold Out"}
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Buy Card (remains as before) */}
        <div className="col-xl-3 d-none d-xl-block">
          <div className="card" style={{ height: "auto", width: "270px" }}>
            <img
              src={nft.image || user}
              style={{ height: "150px", width: "100%", objectFit: "cover" }}
              alt="Site"
            />
            <div className="card-body d-flex flex-column justify-content-center">
              <div className="col-xl-12">
                <p className="font-w600 mb-2">
                  <span className="custom-label-2">
                    Site: <span className="font-w400">{nft.title}</span>
                  </span>
                </p>
                <p className="font-w600 mb-2">
                  <span className="custom-label-2">
                    Location: <span className="font-w400">{nft.subtitle}</span>
                  </span>
                </p>
                <p className="font-w600 mb-2">
                  <span className="custom-label-2">
                    Plant Size:{" "}
                    <span className="font-w400">{nft.plantSize}</span>
                  </span>
                </p>
                <p className="font-w600 mb-2">
                  <span className="custom-label-2">
                    Total NFTs:{" "}
                    <span className="font-w400">{nft.totalNFTs}</span>
                  </span>
                </p>
                <p className="font-w600 mb-2">
                  <span className="custom-label-2">
                    Plant Date: <span className="font-w400">17 Aug 2024</span>
                  </span>
                </p>
                <p className="font-w600 mb-2">
                  <span className="custom-label-2">
                    Tariff: <span className="font-w400">Rs. 4.75 per Unit</span>
                  </span>
                </p>
              </div>
              <div className="d-flex align-items-center mt-3 justify-content-center">
                <button
                  className="btn btn-danger me-2"
                  onClick={handleDecrease}
                >
                  -
                </button>
                <span className="font-w600">{kWp} kWp</span>
                <button
                  className="btn btn-success ms-2"
                  onClick={handleIncrease}
                >
                  +
                </button>
              </div>
              <div className="mt-3">
                <label htmlFor="walletAddress">Wallet Address:</label>
                <input
                  id="walletAddress"
                  type="text"
                  className="form-control"
                  placeholder="Enter your wallet address"
                  value={consumerWallet}
                  onChange={(e) => setConsumerWallet(e.target.value)}
                />
              </div>
              <p className="font-w600 mt-3 text-center">
                Total Amount: Rs. {totalAmount}
              </p>
              <button
                onClick={() =>
                  nft.isAvailable
                    ? handleRazorPayPayment()
                    : alert("Site is fully purchased")
                }
                disabled={!nft.isAvailable}
                className="btn btn-primary w-100"
              >
                {nft.isAvailable ? "Buy" : "Sold Out"}
              </button>
              <button
                // onClick={() =>
                //   nft.isAvailable
                //     ? purchaseWithUSDC()
                //     : alert("Site is fully purchased")
                // }
                // disabled={!nft.isAvailable}
                onClick={purchaseWithUSDC}
                disabled={!nft.isAvailable || loadingSaleInfo || !saleActive}
                className="btn btn-secondary w-100 mt-2"
              >
                {nft.isAvailable ? "Pay with USDC" : "Sold Out"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsTabBlog;
