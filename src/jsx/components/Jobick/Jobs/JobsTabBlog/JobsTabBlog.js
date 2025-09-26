// // import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import { Nav, Tab } from 'react-bootstrap';
// // import { Dropdown } from 'react-bootstrap';

// // //Images
// // import pic1 from './../../../../../images/card/1.png';
// // import pic2 from './../../../../../images/card/2.png';
// // import pic3 from './../../../../../images/card/3.png';
// // import pic4 from './../../../../../images/card/card11.jpg';
// // import pic5 from './../../../../../images/card/card22.jpg';
// // import pic6 from './../../../../../images/card/card33.jpg';

// // const JobCardBlog = [
// // 	{
// // 		image: pic1,
// // 		title: 'Site XYZ',
// // 		subtitle: 'Indore, India',
// // 		nftsAvailable: 88,
// // 		price: 'Rs. 33,250',
// // 		plantSize: '125 kWp',
// // 		totalNFTs: 125
// // 	},
// // 	{
// // 		image: pic2,
// // 		title: 'Site ABC',
// // 		subtitle: 'Mumbai, India',
// // 		nftsAvailable: 120,
// // 		price: 'Rs. 40,000',
// // 		plantSize: '150 kWp',
// // 		totalNFTs: 150
// // 	},
// // 	{
// // 		image: pic3,
// // 		title: 'Site XYZ',
// // 		subtitle: 'Indore, India',
// // 		nftsAvailable: 88,
// // 		price: 'Rs. 33,250',
// // 		plantSize: '125 kWp',
// // 		totalNFTs: 125
// // 	},
// // 	{
// // 		image: pic4,
// // 		title: 'Site ABC',
// // 		subtitle: 'Mumbai, India',
// // 		nftsAvailable: 120,
// // 		price: 'Rs. 40,000',
// // 		plantSize: '150 kWp',
// // 		totalNFTs: 150
// // 	},
// // 	{
// // 		image: pic5,
// // 		title: 'Site XYZ',
// // 		subtitle: 'Indore, India',
// // 		nftsAvailable: 88,
// // 		price: 'Rs. 33,250',
// // 		plantSize: '125 kWp',
// // 		totalNFTs: 125
// // 	},
// // 	{
// // 		image: pic6,
// // 		title: 'Site ABC',
// // 		subtitle: 'Mumbai, India',
// // 		nftsAvailable: 120,
// // 		price: 'Rs. 40,000',
// // 		plantSize: '150 kWp',
// // 		totalNFTs: 150
// // 	},
// // 	{
// // 		image: pic1,
// // 		title: 'Site XYZ',
// // 		subtitle: 'Indore, India',
// // 		nftsAvailable: 88,
// // 		price: 'Rs. 33,250',
// // 		plantSize: '125 kWp',
// // 		totalNFTs: 125
// // 	},
// // 	{
// // 		image: pic2,
// // 		title: 'Site ABC',
// // 		subtitle: 'Mumbai, India',
// // 		nftsAvailable: 120,
// // 		price: 'Rs. 40,000',
// // 		plantSize: '150 kWp',
// // 		totalNFTs: 150
// // 	},
// // 	{
// // 		image: pic3,
// // 		title: 'Site XYZ',
// // 		subtitle: 'Indore, India',
// // 		nftsAvailable: 88,
// // 		price: 'Rs. 33,250',
// // 		plantSize: '125 kWp',
// // 		totalNFTs: 125
// // 	}
// // ];

// // const JobsTabBlog = () => {
// // 	const [selectblog, setSelectblog] = useState('Newest');
// // 	return (
// // 		<>
// // 			<Tab.Container defaultActiveKey="Boxed">
// // 				<div className="mt-4 d-flex justify-content-between align-items-center flex-wrap">
// // 				</div>
// // 				<Tab.Content>
// // 					<Tab.Pane eventKey="Boxed">
// // 						<div className="row">
// // 							{JobCardBlog.map((data, index) => (
// // 								<div className="col-xl-3 col-xxl-4 col-md-4 col-sm-6" key={index}>
// // 									<div className="card">
// // 										<div className="jobs2 card-body">
// // 											<div className="text-left">
// // 												<img
// // 													src={data.image}
// // 													alt=""
// // 													className="mb-4"
// // 													style={{ width: '100%', height: 'auto' }} // Adjust image size
// // 												/>
// // 												<h3 className="mb-0"><Link to={"#"}>{data.title}</Link></h3>
// // 												<span className="text-primary mb-3 d-block">{data.subtitle}</span>
// // 											</div>
// // 											<div className=" text-left">  {/* Align content to left */}
// // 												<h4><strong>NFTs Available:</strong> {data.nftsAvailable}</h4>
// // 												<h4><strong>Price:</strong> {data.price}</h4>
// // 												<h4><strong>Location:</strong> {data.subtitle}</h4>
// // 												<h4><strong>Plant Size:</strong> {data.plantSize}</h4>
// // 												<h4><strong>Total NFTs:</strong> {data.totalNFTs}</h4>
// // 											</div>
// // 											<div className="text-center">
// // 												<Link to="/user-profile" className="btn btn-outline-success mt-3">
// // 													BUY
// // 												</Link>
// // 											</div>
// // 										</div>
// // 									</div>
// // 								</div>
// // 							))}
// // 						</div>
// // 					</Tab.Pane>
// // 				</Tab.Content>
// // 			</Tab.Container>

// // 		</>
// // 	)
// // }
// // export default JobsTabBlog;

// import React, { useState, useEffect } from 'react';
// import { Row, Col, Card, Carousel, Accordion } from 'react-bootstrap'
// import { Link } from 'react-router-dom';

// // Images for Jobs Cards
// import img1 from '../../../../../images/big/img1.jpg'
// import img2 from '../../../../../images/big/img2.jpg'
// import img3 from '../../../../../images/big/img3.jpg'
// import pic1 from './../../../../../images/card/1.png';
// import pic2 from './../../../../../images/card/2.png';
// import pic3 from './../../../../../images/card/3.png';
// import pic4 from './../../../../../images/card/card11.jpg';
// import pic5 from './../../../../../images/card/card22.jpg';
// import pic6 from './../../../../../images/card/card33.jpg';
// import user from './../../../../../images/user.jpg';  // Placeholder for User Profile

// const JobCardBlog = [
// 	{
// 		image: pic1,
// 		title: 'Site XYZ',
// 		subtitle: 'Indore, India',
// 		nftsAvailable: 88,
// 		price: 'Rs. 33,250',
// 		plantSize: '125 kWp',
// 		totalNFTs: 125
// 	},
// 	{
// 		image: pic2,
// 		title: 'Site ABC',
// 		subtitle: 'Mumbai, India',
// 		nftsAvailable: 120,
// 		price: 'Rs. 40,000',
// 		plantSize: '150 kWp',
// 		totalNFTs: 150
// 	},
// 	{
// 		image: pic3,
// 		title: 'Site PQR',
// 		subtitle: 'Delhi, India',
// 		nftsAvailable: 90,
// 		price: 'Rs. 35,000',
// 		plantSize: '130 kWp',
// 		totalNFTs: 130
// 	},
// 	{
// 		image: pic4,
// 		title: 'Site MNO',
// 		subtitle: 'Hyderabad, India',
// 		nftsAvailable: 110,
// 		price: 'Rs. 38,000',
// 		plantSize: '145 kWp',
// 		totalNFTs: 145
// 	}
// ];

// const carousel1 = [img1, img2, img3]
// const defaultAccordion = [
// 	{
// 		title: "About the Project",
// 		text: `
// 				<p><strong>When is the ………………….?</strong><br />The commissioning date is on 15th August 2024.</p>
// 				<p><strong>Which make panels were used in the project?</strong><br />The project used ABC brand panels for solar power generation.</p>
// 			`,
// 		bg: "primary",
// 	},
// 	{
// 		title: "About the NFTs",
// 		text: `
// 				<p><strong>What is the total number of NFTs available?</strong><br />There are 64 NFTs available for this project.</p>
// 				<p><strong>How can I purchase NFTs?</strong><br />You can purchase NFTs through our official website by following the buy process.</p>
// 			`,
// 		bg: "info",
// 	},
// 	{
// 		title: "About Maintenance",
// 		text: `
// 				<p><strong>Who is responsible for maintenance?</strong><br />The maintenance is handled by XYZ company under a 5-year contract.</p>
// 				<p><strong>How often is maintenance performed?</strong><br />Maintenance is performed quarterly to ensure optimal performance.</p>
// 			`,
// 		bg: "success",
// 	},
// ];

// const JobsTabBlog = () => {
// 	// State to store selected NFT details
// 	const [selectedNFT, setSelectedNFT] = useState(null);

// 	// Function to handle Buy button click and display UserProfile
// 	const handleBuyClick = (nft) => {
// 		setSelectedNFT(nft);
// 	};

// 	// If an NFT is selected, render the UserProfile, else render Job Cards
// 	if (selectedNFT) {
// 		return <UserProfile nft={selectedNFT} goBack={() => setSelectedNFT(null)} />;
// 	}

// 	return (
// 		<div className="mt-4">
// 	<div className="row">
// 		{JobCardBlog.map((data, index) => (
// 			<div className="col-xl-3 col-md-4 col-sm-6" key={index}>
// 				<div className="card hover-enlarge"> {/* Add the hover-enlarge class */}
// 					<div className="jobs2 card-body" onClick={() => handleBuyClick(data)}>
// 						<div className="text-left">
// 							<img
// 								src={data.image}
// 								alt=""
// 								className="mb-4"
// 								style={{ width: '100%', height: 'auto' }} // Adjust image size
// 							/>
// 							<h3 className="mb-0">{data.title}</h3>
// 							<span className="text-primary mb-3 d-block">{data.subtitle}</span>
// 						</div>
// 						<div className="text-left">
// 							<h4><strong>NFTs Available:</strong> {data.nftsAvailable}</h4>
// 							<h4><strong>Price:</strong> {data.price}</h4>
// 							<h4><strong>Location:</strong> {data.subtitle}</h4>
// 							<h4><strong>Plant Size:</strong> {data.plantSize}</h4>
// 							<h4><strong>Total NFTs:</strong> {data.totalNFTs}</h4>
// 						</div>
// 						<div className="text-center">
// 							{/* Buy button to select the NFT */}
// 							<button
// 								onClick={() => handleBuyClick(data)}
// 								className="btn btn-outline-success mt-3"
// 							>
// 								BUY
// 							</button>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		))}
// 	</div>
// </div>

// 	);
// };

// // const UserProfile = ({ nft, goBack }) => {
// // 	return (
// // 		<div className="mt-4">
// // 			<div className="d-flex align-items-center mb-4">
// // 				<h3 className="mb-0 me-auto">{nft.title}</h3>
// // 				<button onClick={goBack} className="btn btn-secondary">Back</button>
// // 			</div>
// // 			<div className="row">
// // 				{/* Fixed Image */}

// // 				{/* Rest of the content */}
// // 				<div className="col-xl-9"> {/* Shifted content to the right */}
// // 					<div className="card">
// // 						<div className="card-header border-0 flex-wrap align-items-start">
// // 							<div className="col-md-11">
// // 								<div className="user d-sm-flex d-block pe-md-5 pe-0">
// // 									<img
// // 										src={nft.image || user} // Use dynamic image if available
// // 										style={{ height: '250px', width: 'auto' }}
// // 										alt="Site"
// // 									/>
// // 									<div className="ms-sm-3 ms-0 me-md-5 md-0">
// // 										<h5 className="mb-1 font-w600">
// // 											NFTs Available: {nft.nftsAvailable}
// // 										</h5>
// // 										<p>
// // 											A data analyst collects, interprets and visualizes data to uncover insights...
// // 										</p>
// // 									</div>
// // 								</div>
// // 							</div>
// // 							<div className="col-md-1 col-12 text-end">
// // 								<Link to={"#"} className="btn btn-lg btn-success me-2">Buy</Link>
// // 							</div>
// // 						</div>
// // 						<div className="card-body pt-0">
// // 							<h4 className="fs-20">Description</h4>
// // 							<div className="row">
// // 								<div className="col-xl-4 col-md-6">
// // 									<p className="font-w600 mb-2 d-flex"><span className="custom-label-2">Site : </span><span className="font-w400">{nft.title}</span></p>
// // 									<p className="font-w600 mb-2 d-flex"><span className="custom-label-2">Location : </span><span className="font-w400">{nft.subtitle}</span></p>
// // 									<p className="font-w600 mb-2 d-flex"><span className="custom-label-2">Plant Size : </span><span className="font-w400">{nft.plantSize}</span></p>
// // 									<p className="font-w600 mb-2 d-flex"><span className="custom-label-2">Total NFTs : </span><span className="font-w400">{nft.totalNFTs}</span></p>
// // 									<p className="font-w600 mb-2 d-flex"><span className="custom-label-2">Plant Commissioning Date : </span><span className="font-w400">17 Aug 2024</span></p>
// // 									<p className="font-w600 mb-2 d-flex"><span className="custom-label-2">Tariff : </span><span className="font-w400">Rs. 4.75 per Unit</span></p>
// // 								</div>
// // 								<div className="col-xl-8 col-md-6">
// // 									<div className="card">
// // 										<div className="card-body">
// // 											<div className="row">
// // 												{/* Upper Row Cards */}
// // 												<div className="col-sm-4">
// // 													<div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
// // 														<div>
// // 															<h3 className="mb-0 lh-1">300kWp</h3>
// // 															<span className="fs-14 d-block">Capacity</span>
// // 														</div>
// // 													</div>
// // 												</div>

// // 												<div className="col-sm-4">
// // 													<div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
// // 														<div>
// // 															<h3 className="mb-0 lh-1">80%</h3>
// // 															<span className="fs-14 d-block">Reserved</span>
// // 														</div>
// // 													</div>
// // 												</div>

// // 												<div className="col-sm-4">
// // 													<div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
// // 														<div>
// // 															<h3 className="mb-0 lh-1">17-Aug-24</h3>
// // 															<span className="fs-14 d-block">Date of Commisioning</span>
// // 														</div>
// // 													</div>
// // 												</div>

// // 												{/* Lower Row Cards with Spacing (Added margin-top) */}
// // 												<div className="col-sm-4 mt-4">
// // 													<div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
// // 														<div>
// // 															<h3 className="mb-0 lh-1">15 Years</h3>
// // 															<span className="fs-14 d-block">PPA Terms</span>
// // 														</div>
// // 													</div>
// // 												</div>

// // 												<div className="col-sm-4 mt-4">
// // 													<div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
// // 														<div>
// // 															<h3 className="mb-0 lh-1">18%</h3>
// // 															<span className="fs-14 d-block">Return</span>
// // 														</div>
// // 													</div>
// // 												</div>

// // 												<div className="col-sm-4 mt-4">
// // 													<div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
// // 														<div>
// // 															<h3 className="mb-0 lh-1">Rs 4.75 per kWh</h3>
// // 															<span className="fs-14 d-block">Tariff</span>
// // 														</div>
// // 													</div>
// // 												</div>
// // 											</div>

// // 										</div>
// // 									</div>
// // 								</div>
// // 							</div>
// // 						</div>
// // 						<Col xl={8} className="mx-auto">
// // 							<Card>
// // 								<Card.Body className='p-4'>
// // 									<h4 className='card-intro-title'>Photos</h4>
// // 									<div className="d-flex justify-content-center">
// // 										<Carousel>
// // 											{carousel1.map((carousel, i) => (
// // 												<Carousel.Item key={i}>
// // 													<img
// // 														src={carousel}
// // 														className='d-block'
// // 														alt={`Slide ${i + 1}`}
// // 													/>
// // 												</Carousel.Item>
// // 											))}
// // 										</Carousel>
// // 									</div>
// // 								</Card.Body>
// // 							</Card>
// // 						</Col>

// // 						<div className="card-footer mb-10 mt-10">
// // 							<h3 className="d-block mb-10 mt-30"><strong>Documents</strong></h3>
// // 							<div className="row">
// // 								<div className="col-md-3 text-center mb-4">
// // 									<Link to={"#"} className="d-block text-center">
// // 										<i className="fas fa-file-alt fa-3x mb-2"></i> {/* File Icon */}
// // 										<span>Power Purchase Agreement (PPA)</span>
// // 									</Link>
// // 								</div>
// // 								<div className="col-md-3 text-center mb-4">
// // 									<Link to={"#"} className="d-block text-center">
// // 										<i className="fas fa-file-alt fa-3x mb-2"></i> {/* File Icon */}
// // 										<span>Lease Agreement</span>
// // 									</Link>
// // 								</div>
// // 								<div className="col-md-3 text-center mb-4">
// // 									<Link to={"#"} className="d-block text-center">
// // 										<i className="fas fa-clipboard fa-3x mb-2"></i> {/* Clipboard Icon */}
// // 										<span>Commissioning Report</span>
// // 									</Link>
// // 								</div>
// // 								<div className="col-md-3 text-center mb-4">
// // 									<Link to={"#"} className="d-block text-center">
// // 										<i className="fas fa-file-invoice fa-3x mb-2"></i> {/* Invoice Icon */}
// // 										<span>Latest Bill</span>
// // 									</Link>
// // 								</div>
// // 							</div>
// // 						</div>

// // 					</div>
// // 				</div>
// // <Col xl="12">
// // 	<Card>
// // 		<Card.Header className="d-block">
// // 			<Card.Title>FAQ</Card.Title>
// // 		</Card.Header>
// // 		<Card.Body>
// // 			<Accordion className="col-xl-6 accordion accordion-rounded-stylish accordion-gradient" defaultActiveKey="0">
// // 				{defaultAccordion.map((d, i) => (
// // 					<Accordion.Item key={i} eventKey={`${i}`}>
// // 						<Accordion.Header className="accordion-header accordion-header--primary">
// // 							<span className="accordion-header-icon"></span>
// // 							<span className="accordion-header-text">{d.title}</span>
// // 							<span className="accordion-header-indicator"></span>
// // 						</Accordion.Header>
// // 						<Accordion.Collapse eventKey={`${i}`} className="accordion__body">
// // 							<div
// // 								className="accordion-body"
// // 								dangerouslySetInnerHTML={{ __html: d.text }}
// // 							/>
// // 						</Accordion.Collapse>
// // 					</Accordion.Item>
// // 				))}
// // 			</Accordion>
// // 		</Card.Body>
// // 	</Card>
// // </Col>
// // 				<div className="col-xl-3">
// // 					<div style={{ position: 'fixed', top: '190px', right: '35px' }}> {/* Fixed container */}
// // 						<img
// // 							src={nft.image || user} // Use dynamic image if available
// // 							style={{ height: '300px', width: '300px' }}
// // 							alt="Site"
// // 						/>
// // 					</div>
// // 				</div>
// // 			</div>
// // 		</div>
// // 	);
// // };

// // // export default UserProfile;

// // export default JobsTabBlog;

// // import React, { useState, useEffect } from 'react';

// const UserProfile = ({ nft, goBack }) => {
// 	// State to track whether the image should be fixed or sticky
// 	const [isFixed, setIsFixed] = useState(true);

// 	// Event listener to track the scroll position
// 	const handleScroll = () => {
// 		// Get the current scroll position
// 		const scrollY = window.scrollX;
// 		// Set a scroll threshold (e.g., 900px) to change the position
// 		const threshold = 500; // Adjust this value as needed

// 		// Check if the scroll position is past the threshold
// 		if (scrollY > threshold) {
// 			setIsFixed(false); // Apply sticky behavior
// 		} else {
// 			setIsFixed(true); // Apply fixed behavior
// 		}
// 	};

// 	// Attach the scroll event listener
// 	useEffect(() => {
// 		window.addEventListener('scroll', handleScroll);
// 		// Cleanup the event listener when the component is unmounted
// 		return () => window.removeEventListener('scroll', handleScroll);
// 	}, []);

// 	return (
// 		<div className="mt-4">
// 			<div className="d-flex align-items-center mb-4">
// 				<h3 className="mb-0 me-auto">{nft.title}</h3>
// 				<button onClick={goBack} className="btn btn-secondary">Back</button>
// 			</div>
// 			<div className="row">
// 				{/* Rest of the content */}
// 				<div className="col-xl-9">
// 					<div className="card">
// 						<div className="card-header border-0 flex-wrap align-items-start">
// 							<div className="col-xl-12">
// 								<div className="user d-sm-flex d-block pe-0">
// 									<img
// 										src={nft.image || user} // Use dynamic image if available
// 										className="d-xl-none d-lg-none mb-4" // Hide image on large and extra-large screens
// 										style={{ width: '100%', height: 'auto' }}
// 										alt="Site"
// 									/>
// 									<div className="ms-sm-3 ms-0 me-md-5 md-0">
// 										<h5 className="mb-1 font-w600">
// 											NFTs Available: {nft.nftsAvailable}
// 										</h5>
// 										<p>A data analyst collects, interprets and visualizes data to uncover insights. A data analyst collects, interprets and visualizes data to uncover insights...</p>
// 										<p>A data analyst collects, interprets and visualizes data to uncover insights. A data analyst collects, interprets and visualizes data to uncover insights...</p>
// 										<p>A data analyst collects, interprets and visualizes data to uncover insights. A data analyst collects, interprets and visualizes data to uncover insights...</p>
// 									</div>
// 							<div className="d-xl-none d-lg-none mb-4">
// 								<Link to={"#"} className="btn btn-lg btn-success me-2">Buy</Link>
// 							</div>
// 								</div>
// 							</div>

// 						</div>
// 						<div className="card-body pt-0">
// 							<h4 className="fs-20">Description</h4>
// 							<div className="row">
// 								{/* <div className="col-xl-4 col-md-6">
// 									<p className="font-w600 mb-2 d-flex"><span className="custom-label-2">Siite : </span><span className="font-w400">{nft.title}</span></p>
// 									<p className="font-w600 mb-2 d-flex"><span className="custom-label-2">Location : </span><span className="font-w400">{nft.subtitle}</span></p>
// 									<p className="font-w600 mb-2 d-flex"><span className="custom-label-2">Plant Size : </span><span className="font-w400">{nft.plantSize}</span></p>
// 									<p className="font-w600 mb-2 d-flex"><span className="custom-label-2">Total NFTs : </span><span className="font-w400">{nft.totalNFTs}</span></p>
// 									<p className="font-w600 mb-2 d-flex"><span className="custom-label-2">Plant Commissioning Date : </span><span className="font-w400">17 Aug 2024</span></p>
// 									<p className="font-w600 mb-2 d-flex"><span className="custom-label-2">Tariff : </span><span className="font-w400">Rs. 4.75 per Unit</span></p>
// 								</div> */}
// 								<div className="col-xl-12 col-md-6">
// 									<div className="card">
// 										<div className="card-body">
// 											<div className="row">
// 												<div className="col-sm-4">
// 													<div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
// 														<div>
// 															<h3 className="mb-0 lh-1">300kWp</h3>
// 															<span className="fs-14 d-block">Capacity</span>
// 														</div>
// 													</div>
// 												</div>
// 												<div className="col-sm-4">
// 													<div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
// 														<div>
// 															<h3 className="mb-0 lh-1">80%</h3>
// 															<span className="fs-14 d-block">Reserved</span>
// 														</div>
// 													</div>
// 												</div>
// 												<div className="col-sm-4">
// 													<div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
// 														<div>
// 															<h3 className="mb-0 lh-1">17-Aug-24</h3>
// 															<span className="fs-14 d-block">Date of Commisioning</span>
// 														</div>
// 													</div>
// 												</div>
// 												<div className="col-sm-4 mt-4">
// 													<div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
// 														<div>
// 															<h3 className="mb-0 lh-1">15 Years</h3>
// 															<span className="fs-14 d-block">PPA Terms</span>
// 														</div>
// 													</div>
// 												</div>
// 												<div className="col-sm-4 mt-4">
// 													<div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
// 														<div>
// 															<h3 className="mb-0 lh-1">18%</h3>
// 															<span className="fs-14 d-block">Return</span>
// 														</div>
// 													</div>
// 												</div>
// 												<div className="col-sm-4 mt-4">
// 													<div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
// 														<div>
// 															<h3 className="mb-0 lh-1">Rs 4.75 per kWh</h3>
// 															<span className="fs-14 d-block">Tariff</span>
// 														</div>
// 													</div>
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 						<Col xl={8} className="mx-auto">
// 							<Card>
// 								<Card.Body className='p-4'>
// 									<h4 className='card-intro-title'>Photos</h4>
// 									<div className="d-flex justify-content-center">
// 										<Carousel>
// 											{carousel1.map((carousel, i) => (
// 												<Carousel.Item key={i}>
// 													<img src={carousel} className='d-block' alt={`Slide ${i + 1}`} />
// 												</Carousel.Item>
// 											))}
// 										</Carousel>
// 									</div>
// 								</Card.Body>
// 							</Card>
// 						</Col>
// 						<div className="card-footer mb-10 mt-10">
// 							<h3 className="d-block mb-10 mt-30"><strong>Documents</strong></h3>
// 							<div className="row">
// 								<div className="col-md-3 text-center mb-4">
// 									<Link to={"#"} className="d-block text-center">
// 										<i className="fas fa-file-alt fa-3x mb-2"></i>
// 										<span className="d-block">Power Purchase Agreement (PPA)</span> {/* Set text as block */}
// 									</Link>
// 								</div>
// 								<div className="col-md-3 text-center mb-4">
// 									<Link to={"#"} className="d-block text-center">
// 										<i className="fas fa-file-alt fa-3x mb-2"></i>
// 										<span className="d-block">Lease Agreement</span> {/* Set text as block */}
// 									</Link>
// 								</div>
// 								<div className="col-md-3 text-center mb-4">
// 									<Link to={"#"} className="d-block text-center">
// 										<i className="fas fa-clipboard fa-3x mb-2"></i>
// 										<span className="d-block">Commissioning Report</span> {/* Set text as block */}
// 									</Link>
// 								</div>
// 								<div className="col-md-3 text-center mb-4">
// 									<Link to={"#"} className="d-block text-center">
// 										<i className="fas fa-file-invoice fa-3x mb-2"></i>
// 										<span className="d-block">Latest Bill</span> {/* Set text as block */}
// 									</Link>
// 								</div>
// 							</div>
// 						</div>

// 						<Col xl="12">
// 							<Card>
// 								<Card.Header className="d-block">
// 									<Card.Title>FAQ</Card.Title>
// 								</Card.Header>
// 								<Card.Body>
// 									<Accordion className="col-xl-6 accordion accordion-rounded-stylish accordion-gradient" defaultActiveKey="0">
// 										{defaultAccordion.map((d, i) => (
// 											<Accordion.Item key={i} eventKey={`${i}`}>
// 												<Accordion.Header className="accordion-header accordion-header--primary">
// 													<span className="accordion-header-icon"></span>
// 													<span className="accordion-header-text">{d.title}</span>
// 													<span className="accordion-header-indicator"></span>
// 												</Accordion.Header>
// 												<Accordion.Collapse eventKey={`${i}`} className="accordion__body">
// 													<div
// 														className="accordion-body"
// 														dangerouslySetInnerHTML={{ __html: d.text }}
// 													/>
// 												</Accordion.Collapse>
// 											</Accordion.Item>
// 										))}
// 									</Accordion>
// 								</Card.Body>
// 							</Card>
// 						</Col>
// 					</div>
// 				</div>

// 				{/* Dynamic Positioning of the Image */}
// 				{/* Dynamic Positioning of the Image */}
// 				<div className="col-xl-3 d-none d-xl-block">
// 					<div
// 						style={
// 							isFixed
// 								? {
// 									position: 'fixed',
// 									top: '190px',
// 									right: '35px',
// 									transition: 'position 0.7s ease',
// 								}
// 								: {
// 									position: 'sticky',
// 									top: '190px', // This will keep it sticky until the content moves up
// 								}
// 						}
// 					>
// 						{/* Card Container */}
// 						<div className="card" style={{ height: '550px', width: '270px' }}>
// 							{/* Image Section */}
// 							<img
// 								src={nft.image || user}
// 								style={{ height: '300px', width: '100%', objectFit: 'cover' }}
// 								alt="Site"
// 							/>

// 							{/* Content Section */}
// 							<div className="card-body d-flex flex-column justify-content-center">
// 								{/* <h5 className="card-title text-center">Site Details</h5>
// 								<p className="card-text text-center mb-2">This is an amazing site with incredible views and details about the project.</p>
// 								<p className="card-text text-center mb-2">NFTs Available: {nft.nftsAvailable}</p> */}
// 								<div className="col-xl-4 col-md-6">
// 									<p className="font-w600 mb-2 d-flex"><span className="custom-label-2">Site : <span className="font-w400">{nft.title}</span></span></p>
// 									<p className="font-w600 mb-2 d-flex"><span className="custom-label-2">Location : <span className="font-w400">{nft.subtitle}</span></span></p>
// 									<p className="font-w600 mb-2 d-flex"><span className="custom-label-2">Plant Size : <span className="font-w400">{nft.plantSize}</span></span></p>
// 									<p className="font-w600 mb-2 d-flex"><span className="custom-label-2">Total NFTs : <span className="font-w400">{nft.totalNFTs}</span></span></p>
// 									<p className="font-w600 mb-2 d-flex"><span className="custom-label-2">Plant Date : <span className="font-w400">17 Aug 2024</span></span></p>
// 									<p className="font-w600 mb-2 d-flex"><span className="custom-label-2">Tariff : <span className="font-w400">Rs. 4.75 per Unit</span></span></p>
// 								</div>
// 								<Link to={"#"} className="btn btn-primary w-100 text-center">Buy</Link>
// 							</div>
// 						</div>
// 					</div>
// 				</div>

// 			</div>
// 		</div>
// 	);
// };
// // export default UserProfile;
// export default JobsTabBlog;

// import React, { useState, useEffect } from 'react';
// import { Row, Col, Card, Carousel, Accordion } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// // API URLs
// const AUTH_API_URL = "https://portal.intellotechsolutions.co.in:5000/api/intello/authenticate"; // Replace with actual auth API
// const GET_USER_SITES_API_URL = "https://portal.intellotechsolutions.co.in:5000/api/intello/user/v1/sites"; // Replace with actual API

// const JobsTabBlog = () => {
// 	// State for authentication
// 	const [isAuthenticated, setIsAuthenticated] = useState(false);
// 	const [userToken, setUserToken] = useState(null);

// 	// State to store user sites data
// 	const [userSites, setUserSites] = useState([]);

// 	// State to track selected NFT
// 	const [selectedNFT, setSelectedNFT] = useState(null);

// 	// Function to authenticate user
// 	const authenticateUser = async () => {
// 		try {
// 			const response = await fetch(AUTH_API_URL, {
// 				method: 'POST',
// 				headers: { 'Content-Type': 'application/json' },
// 				body: JSON.stringify({ username: "prateek@enfros.co.in", password: "9032961c4a5757c8b460c2ecdecbdabc337950cd7b3b1a0fb2592a4b130630ca" }) // Replace with actual credentials
// 			});
// 			const data = await response.json();
// 			if (data.token) {
// 				setIsAuthenticated(true);
// 				setUserToken(data.token);
// 			}
// 		} catch (error) {
// 			console.error("Authentication failed", error);
// 		}
// 	};

// 	// Function to fetch user sites
// 	const fetchUserSites = async () => {
// 		if (!isAuthenticated) return;
// 		try {
// 			const response = await fetch(GET_USER_SITES_API_URL, {
// 				method: 'GET',
// 				headers: {
// 					'Authorization': `Bearer ${userToken}`,
// 					'Content-Type': 'application/json'
// 				}
// 			});
// 			const data = await response.json();
// 			setUserSites(data.sites); // Assuming response has "sites" array
// 			console.log("Fetched");

// 		} catch (error) {
// 			console.error("Failed to fetch user sites", error);
// 		}
// 	};

// 	// Fetch user sites after authentication
// 	useEffect(() => {
// 		if (isAuthenticated) {
// 			fetchUserSites();
// 		}
// 	}, [isAuthenticated]);

// 	// Authenticate user on component mount
// 	useEffect(() => {
// 		authenticateUser();
// 	}, []);

// 	// Handle Buy Click
// 	const handleBuyClick = (nft) => {
// 		setSelectedNFT(nft);
// 	};

// 	// Show selected NFT details if an NFT is clicked
// 	if (selectedNFT) {
// 		return <UserProfile nft={selectedNFT} goBack={() => setSelectedNFT(null)} />;
// 	}

// 	return (
// 		<div className="mt-4">
// 			<div className="row">
// 				{userSites.length > 0 ? (
// 					userSites.map((data, index) => (
// 						<div className="col-xl-3 col-md-4 col-sm-6" key={index}>
// 							<div className="card hover-enlarge">
// 								<div className="jobs2 card-body" onClick={() => handleBuyClick(data)}>
// 									<div className="text-left">
// 										<img
// 											src={data.image || 'default-image.jpg'}
// 											alt=""
// 											className="mb-4"
// 											style={{ width: '100%', height: 'auto' }}
// 										/>
// 										<h3 className="mb-0">{data.title}</h3>
// 										<span className="text-primary mb-3 d-block">{data.subtitle}</span>
// 									</div>
// 									<div className="text-left">
// 										<h4><strong>NFTs Available:</strong> {data.nftsAvailable}</h4>
// 										<h4><strong>Price:</strong> {data.price}</h4>
// 										<h4><strong>Location:</strong> {data.subtitle}</h4>
// 										<h4><strong>Plant Size:</strong> {data.plantSize}</h4>
// 										<h4><strong>Total NFTs:</strong> {data.totalNFTs}</h4>
// 									</div>
// 									<div className="text-center">
// 										<button onClick={() => handleBuyClick(data)} className="btn btn-outline-success mt-3">
// 											BUY
// 										</button>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					))
// 				) : (
// 					<p className="text-center">Loading sites...</p>
// 				)}
// 			</div>
// 		</div>
// 	);
// };

// // User Profile Component
// const UserProfile = ({ nft, goBack }) => {
// 	return (
// 		<div className="mt-4">
// 			<div className="d-flex align-items-center mb-4">
// 				<h3 className="mb-0 me-auto">{nft.title}</h3>
// 				<button onClick={goBack} className="btn btn-secondary">Back</button>
// 			</div>
// 			<div className="row">
// 				<div className="col-xl-9">
// 					<div className="card">
// 						<div className="card-body">
// 							<h4 className="fs-20">Description</h4>
// 							<div className="row">
// 								<div className="col-xl-12 col-md-6">
// 									<div className="card">
// 										<div className="card-body">
// 											<div className="row">
// 												<div className="col-sm-4">
// 													<div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
// 														<div>
// 															<h3 className="mb-0 lh-1">{nft.plantSize}</h3>
// 															<span className="fs-14 d-block">Capacity</span>
// 														</div>
// 													</div>
// 												</div>
// 												<div className="col-sm-4">
// 													<div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
// 														<div>
// 															<h3 className="mb-0 lh-1">{nft.nftsAvailable}</h3>
// 															<span className="fs-14 d-block">Available NFTs</span>
// 														</div>
// 													</div>
// 												</div>
// 												<div className="col-sm-4">
// 													<div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
// 														<div>
// 															<h3 className="mb-0 lh-1">{nft.totalNFTs}</h3>
// 															<span className="fs-14 d-block">Total NFTs</span>
// 														</div>
// 													</div>
// 												</div>
// 												<div className="col-sm-4 mt-4">
// 													<div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
// 														<div>
// 															<h3 className="mb-0 lh-1">{nft.price}</h3>
// 															<span className="fs-14 d-block">Price</span>
// 														</div>
// 													</div>
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default JobsTabBlog;

// import React, { useState, useEffect } from 'react';
// import { Row, Col, Card } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// // API URLs
// const AUTH_API_URL = "https://portal.intellotechsolutions.co.in:5000/api/intello/authenticate";
// const GET_USER_SITES_API_URL = "https://portal.intellotechsolutions.co.in:5000/api/intello/user/v1/sites";

// const JobsTabBlog = () => {
//     // State for authentication
//     const [isAuthenticated, setIsAuthenticated] = useState(false);
//     const [userToken, setUserToken] = useState(null);

//     // State to store user sites data
//     const [userSites, setUserSites] = useState([]);

//     // State to track selected NFT
//     const [selectedNFT, setSelectedNFT] = useState(null);

//     // State for loading and errors
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     // Function to authenticate user
//     const authenticateUser = async () => {
//         try {
//             console.log("Authenticating user...");
//             const response = await fetch(AUTH_API_URL, {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({
//                     username: "prateek@enfros.co.in",
//                     password: "9032961c4a5757c8b460c2ecdecbdabc337950cd7b3b1a0fb2592a4b130630ca"
//                 })
//             });

//             const data = await response.json();
//             console.log("Authentication Response:", data); // Debugging API response

//             if (data.token) {
//                 setIsAuthenticated(true);
//                 setUserToken(data.token);
//             } else {
//                 throw new Error("Invalid authentication response");
//             }
//         } catch (error) {
//             console.error("Authentication failed", error);
//             setError("Authentication Failed");
//         }
//     };

//     // Function to fetch user sites
//     const fetchUserSites = async () => {
//         if (!userToken) return;

//         setLoading(true); // Start loading before fetching data
//         try {
//             console.log("Fetching user sites...");
//             const response = await fetch(GET_USER_SITES_API_URL, {
//                 method: 'GET',
//                 headers: {
//                     'Authorization': `Bearer ${userToken}`,
//                     'Content-Type': 'application/json'
//                 }
//             });

//             const data = await response.json();
//             console.log("User Sites Response:", data); // Debugging API response

//             if (data.sites) {
//                 setUserSites(data.sites);
//             } else {
//                 throw new Error("Invalid response format. Expected 'sites' array.");
//             }
//         } catch (error) {
//             console.error("Failed to fetch user sites", error);
//             setError("Failed to fetch user sites");
//         } finally {
//             setLoading(false); // Stop loading after fetching data
//         }
//     };

//     // Authenticate user on component mount
//     useEffect(() => {
//         authenticateUser();
//     }, []);

//     // Fetch user sites after authentication is successful
//     useEffect(() => {
//         if (isAuthenticated && userToken) {
//             fetchUserSites();
//         }
//     }, [isAuthenticated, userToken]);

//     // Handle Buy Click
//     const handleBuyClick = (nft) => {
//         setSelectedNFT(nft);
//     };

//     // Show selected NFT details if an NFT is clicked
//     if (selectedNFT) {
//         return <UserProfile nft={selectedNFT} goBack={() => setSelectedNFT(null)} />;
//     }

//     return (
//         <div className="mt-4">
//             {/* Show loading message */}
//             {loading && <p className="text-center">Loading sites...</p>}

//             {/* Show error message if any */}
//             {error && <p className="text-center text-danger">{error}</p>}

//             {/* Render user sites only when data is available */}
//             <div className="row">
//                 {!loading && userSites.length > 0 ? (
//                     userSites.map((data, index) => (
//                         <div className="col-xl-3 col-md-4 col-sm-6" key={index}>
//                             <div className="card hover-enlarge">
//                                 <div className="jobs2 card-body" onClick={() => handleBuyClick(data)}>
//                                     <div className="text-left">
//                                         <img
//                                             src={data.image || 'default-image.jpg'}
//                                             alt=""
//                                             className="mb-4"
//                                             style={{ width: '100%', height: 'auto' }}
//                                         />
//                                         <h3 className="mb-0">{data.title}</h3>
//                                         <span className="text-primary mb-3 d-block">{data.subtitle}</span>
//                                     </div>
//                                     <div className="text-left">
//                                         <h4><strong>NFTs Available:</strong> {data.nftsAvailable}</h4>
//                                         <h4><strong>Price:</strong> {data.price}</h4>
//                                         <h4><strong>Location:</strong> {data.subtitle}</h4>
//                                         <h4><strong>Plant Size:</strong> {data.plantSize}</h4>
//                                         <h4><strong>Total NFTs:</strong> {data.totalNFTs}</h4>
//                                     </div>
//                                     <div className="text-center">
//                                         <button onClick={() => handleBuyClick(data)} className="btn btn-outline-success mt-3">
//                                             BUY
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))
//                 ) : (
//                     !loading && <p className="text-center">No sites available</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// // User Profile Component
// const UserProfile = ({ nft, goBack }) => {
//     return (
//         <div className="mt-4">
//             <div className="d-flex align-items-center mb-4">
//                 <h3 className="mb-0 me-auto">{nft.title}</h3>
//                 <button onClick={goBack} className="btn btn-secondary">Back</button>
//             </div>
//             <div className="row">
//                 <div className="col-xl-9">
//                     <div className="card">
//                         <div className="card-body">
//                             <h4 className="fs-20">Description</h4>
//                             <p>Plant Size: {nft.plantSize}</p>
//                             <p>NFTs Available: {nft.nftsAvailable}</p>
//                             <p>Location: {nft.subtitle}</p>
//                             <p>Total NFTs: {nft.totalNFTs}</p>
//                             <p>Price: {nft.price}</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default JobsTabBlog;

// import React, { useState, useEffect } from 'react';
// import { Row, Col, Card } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// // API URLs
// const AUTH_API_URL = "https://portal.intellotechsolutions.co.in:5000/api/intello/authenticate";
// const GET_USER_SITES_API_URL = "https://portal.intellotechsolutions.co.in:5000/api/intello/user/v1/sites";

// const JobsTabBlog = () => {
//     // State for authentication
//     const [isAuthenticated, setIsAuthenticated] = useState(false);
//     const [userToken, setUserToken] = useState(null);

//     // State to store user sites data
//     const [userSites, setUserSites] = useState([]);

//     // State to track loading and error
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     // Authenticate user
//     const authenticateUser = async () => {
//         try {
//             const response = await fetch(AUTH_API_URL, {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({
//                     username: "prateek@enfros.co.in",
//                     password: "9032961c4a5757c8b460c2ecdecbdabc337950cd7b3b1a0fb2592a4b130630ca"
//                 })
//             });

//             const data = await response.json();
//             if (data.token) {
//                 setIsAuthenticated(true);
//                 setUserToken(data.token);
//             } else {
//                 throw new Error("Authentication failed");
//             }
//         } catch (err) {
//             console.error("Error authenticating user:", err);
//             setError("Authentication failed");
//         }
//     };

//     // Fetch user sites
//     const fetchUserSites = async () => {
//         if (!userToken) return;

//         setLoading(true);
//         try {
//             const response = await fetch(GET_USER_SITES_API_URL, {
//                 method: 'GET',
//                 headers: {
//                     'Authorization': `Bearer ${userToken}`,
//                     'Content-Type': 'application/json'
//                 }
//             });

//             const data = await response.json();
//             console.log("Fetched Sites Data:", data); // Debugging

//             // Use the direct array from the response
//             setUserSites(data);
//         } catch (err) {
//             console.error("Error fetching sites:", err);
//             setError("Failed to fetch user sites");
//         } finally {
//             setLoading(false);
//         }
//     };

//     // Authenticate on mount
//     useEffect(() => {
//         authenticateUser();
//     }, []);

//     // Fetch sites after authentication
//     useEffect(() => {
//         if (isAuthenticated && userToken) {
//             fetchUserSites();
//         }
//     }, [isAuthenticated, userToken]);

//     return (
//         <div className="mt-4">
//             {loading && <p className="text-center">Loading sites...</p>}
//             {error && <p className="text-center text-danger">{error}</p>}

//             {!loading && userSites.length > 0 ? (
//                 <div className="row">
//                     {userSites.map((site, index) => (
//                         <div className="col-xl-3 col-md-4 col-sm-6" key={index}>
//                             <div className="card hover-enlarge">
//                                 <div className="jobs2 card-body">
//                                     <div className="text-left">
//                                         <img
//                                             src={site.image || 'default-image.jpg'} // Add default fallback
//                                             alt=""
//                                             className="mb-4"
//                                             style={{ width: '100%', height: 'auto' }}
//                                         />
//                                         <h3 className="mb-0">{site.siteName || "No Name"}</h3>
//                                         <span className="text-primary mb-3 d-block">{site.location || "Unknown"}</span>
//                                     </div>
//                                     <div className="text-left">
//                                         <h4><strong>Client:</strong> {site.clientName || "N/A"}</h4>
//                                         <h4><strong>Capacity:</strong> {site.siteCapacity || "N/A"} kWp</h4>
//                                         <h4><strong>Location:</strong> {site.location || "N/A"}</h4>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             ) : (
//                 !loading && <p className="text-center">No sites available</p>
//             )}
//         </div>
//     );
// };

// export default JobsTabBlog;

// import React, { useState, useEffect } from 'react';
// import { Row, Col, Card, Carousel, Accordion } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// // API URLs
// const AUTH_API_URL = "https://portal.intellotechsolutions.co.in:5000/api/intello/authenticate";
// const GET_USER_SITES_API_URL = "https://portal.intellotechsolutions.co.in:5000/api/intello/user/v1/sites";

// // FAQ Data
// const faqData = [
//     {
//         title: "About the Project",
//         text: `
//             <p><strong>When is the commissioning date?</strong><br />The commissioning date is on 15th August 2024.</p>
//             <p><strong>Which make panels were used in the project?</strong><br />The project used ABC brand panels for solar power generation.</p>
//         `,
//     },
//     {
//         title: "About the NFTs",
//         text: `
//             <p><strong>What is the total number of NFTs available?</strong><br />There are 64 NFTs available for this project.</p>
//             <p><strong>How can I purchase NFTs?</strong><br />You can purchase NFTs through our official website by following the buy process.</p>
//         `,
//     },
//     {
//         title: "About Maintenance",
//         text: `
//             <p><strong>Who is responsible for maintenance?</strong><br />The maintenance is handled by XYZ company under a 5-year contract.</p>
//             <p><strong>How often is maintenance performed?</strong><br />Maintenance is performed quarterly to ensure optimal performance.</p>
//         `,
//     },
// ];

// // Carousel Images (Replace with dynamic images if needed)
// const carouselImages = [
//     "https://via.placeholder.com/800x400?text=Image+1",
//     "https://via.placeholder.com/800x400?text=Image+2",
//     "https://via.placeholder.com/800x400?text=Image+3",
// ];

// const JobsTabBlog = () => {
//     const [isAuthenticated, setIsAuthenticated] = useState(false);
//     const [userToken, setUserToken] = useState(null);
//     const [userSites, setUserSites] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [selectedSite, setSelectedSite] = useState(null);

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
//                 setIsAuthenticated(true);
//                 setUserToken(data.token);
//             } else {
//                 throw new Error("Authentication failed");
//             }
//         } catch (err) {
//             console.error("Error authenticating user:", err);
//             setError("Authentication failed");
//         }
//     };

//     const fetchUserSites = async () => {
//         if (!userToken) return;
//         setLoading(true);
//         try {
//             const response = await fetch(GET_USER_SITES_API_URL, {
//                 method: "GET",
//                 headers: {
//                     Authorization: `Bearer ${userToken}`,
//                     "Content-Type": "application/json",
//                 },
//             });
//             const data = await response.json();
//             setUserSites(data);
//         } catch (err) {
//             console.error("Error fetching sites:", err);
//             setError("Failed to fetch user sites");
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         authenticateUser();
//     }, []);

//     useEffect(() => {
//         if (isAuthenticated && userToken) {
//             fetchUserSites();
//         }
//     }, [isAuthenticated, userToken]);

//     if (selectedSite) {
//         return <UserProfile site={selectedSite} goBack={() => setSelectedSite(null)} />;
//     }

//     return (
//         <div className="mt-4">
//             {loading && <p className="text-center">Loading sites...</p>}
//             {error && <p className="text-center text-danger">{error}</p>}

//             {!loading && userSites.length > 0 ? (
//                 <div className="row">
//                     {userSites.map((site, index) => (
//                         <div className="col-xl-3 col-md-4 col-sm-6" key={index}>
//                             <div className="card hover-enlarge" onClick={() => setSelectedSite(site)}>
//                                 <div className="jobs2 card-body">
//                                     <div className="text-left">
//                                         <img
//                                             src={site.image || "https://via.placeholder.com/300"}
//                                             alt=""
//                                             className="mb-4"
//                                             style={{ width: "100%", height: "auto" }}
//                                         />
//                                         <h3 className="mb-0">{site.siteName || "No Name"}</h3>
//                                         <span className="text-primary mb-3 d-block">{site.location || "Unknown"}</span>
//                                     </div>
//                                     <div className="text-left">
//                                         <h4><strong>Client:</strong> {site.clientName || "N/A"}</h4>
//                                         <h4><strong>Capacity:</strong> {site.siteCapacity || "N/A"} kWp</h4>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             ) : (
//                 !loading && <p className="text-center">No sites available</p>
//             )}
//         </div>
//     );
// };

// const UserProfile = ({ site, goBack }) => {
//     return (
//         <div className="mt-4">
//             <div className="d-flex align-items-center mb-4">
//                 <h3 className="mb-0 me-auto">{site.siteName}</h3>
//                 <button onClick={goBack} className="btn btn-secondary">Back</button>
//             </div>
//             <div className="row">
//                 <div className="col-xl-9">
//                     <div className="card">
//                         <div className="card-body">
//                             <h4 className="fs-20">Site Details</h4>
//                             <div className="row">
//                                 <div className="col-md-6">
//                                     <p><strong>Client:</strong> {site.clientName || "N/A"}</p>
//                                     <p><strong>Capacity:</strong> {site.siteCapacity || "N/A"} kWp</p>
//                                     <p><strong>Location:</strong> {site.location || "N/A"}</p>
//                                     <p><strong>Address:</strong> {site.address || "N/A"}</p>
//                                     <p><strong>Tariff:</strong> {site.tariff || "N/A"} Rs/kWh</p>
//                                 </div>
//                                 <div className="col-md-6">
//                                     <p><strong>Panel Count:</strong> {site.panelCount || "N/A"}</p>
//                                     <p><strong>Panel Wattage:</strong> {site.panelWattage || "N/A"} W</p>
//                                     <p><strong>Status:</strong> {site.status || "N/A"}</p>
//                                     <p><strong>Installer Type:</strong> {site.installerType || "N/A"}</p>
//                                     <p><strong>Sanctioned Load:</strong> {site.sanctionedLoad || "N/A"} kW</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Carousel Section */}
//                     <Card className="mt-4">
//                         <Card.Body>
//                             <h4 className="card-intro-title">Photos</h4>
//                             <Carousel>
//                                 {carouselImages.map((img, i) => (
//                                     <Carousel.Item key={i}>
//                                         <img src={img} alt={`Slide ${i}`} className="d-block w-100" />
//                                     </Carousel.Item>
//                                 ))}
//                             </Carousel>
//                         </Card.Body>
//                     </Card>

//                     {/* FAQ Section */}
//                     <Card className="mt-4">
//                         <Card.Header><h4>FAQ</h4></Card.Header>
//                         <Card.Body>
//                             <Accordion>
//                                 {faqData.map((faq, index) => (
//                                     <Accordion.Item eventKey={index} key={index}>
//                                         <Accordion.Header>{faq.title}</Accordion.Header>
//                                         <Accordion.Body dangerouslySetInnerHTML={{ __html: faq.text }} />
//                                     </Accordion.Item>
//                                 ))}
//                             </Accordion>
//                         </Card.Body>
//                     </Card>

//                     {/* Documents Section */}
//                     <Card className="mt-4">
//                         <Card.Body>
//                             <h4>Documents</h4>
//                             <div className="row">
//                                 <div className="col-md-3 text-center">
//                                     <Link to={"#"} className="d-block">
//                                         <i className="fas fa-file-alt fa-3x mb-2"></i>
//                                         <span>Power Purchase Agreement</span>
//                                     </Link>
//                                 </div>
//                                 <div className="col-md-3 text-center">
//                                     <Link to={"#"} className="d-block">
//                                         <i className="fas fa-file-alt fa-3x mb-2"></i>
//                                         <span>Lease Agreement</span>
//                                     </Link>
//                                 </div>
//                                 <div className="col-md-3 text-center">
//                                     <Link to={"#"} className="d-block">
//                                         <i className="fas fa-clipboard fa-3x mb-2"></i>
//                                         <span>Commissioning Report</span>
//                                     </Link>
//                                 </div>
//                                 <div className="col-md-3 text-center">
//                                     <Link to={"#"} className="d-block">
//                                         <i className="fas fa-file-invoice fa-3x mb-2"></i>
//                                         <span>Latest Bill</span>
//                                     </Link>
//                                 </div>
//                             </div>
//                         </Card.Body>
//                     </Card>
//                 </div>

//                 <div className="col-xl-3">
//                     <Card>
//                         <img
//                             src={site.image || "https://via.placeholder.com/300"}
//                             alt="Site"
//                             className="card-img-top"
//                             style={{ height: "250px", objectFit: "cover" }}
//                         />
//                         <Card.Body>
//                             <p><strong>Latitude:</strong> {site.latitude || "N/A"}</p>
//                             <p><strong>Longitude:</strong> {site.longitude || "N/A"}</p>
//                         </Card.Body>
//                     </Card>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default JobsTabBlog;

// import React, { useState, useEffect } from 'react';
// import { Row, Col, Card, Carousel, Accordion } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// // API URLs
// const AUTH_API_URL = "https://portal.intellotechsolutions.co.in:5000/api/intello/authenticate";
// const GET_USER_SITES_API_URL = "https://portal.intellotechsolutions.co.in:5000/api/intello/user/v1/sites";

// // Static Data for FAQ and Carousel
// const faqData = [
//     {
//         title: "About the Project",
//         text: `
//             <p><strong>When is the commissioning date?</strong><br />The commissioning date is on 15th August 2024.</p>
//             <p><strong>Which make panels were used in the project?</strong><br />The project used ABC brand panels for solar power generation.</p>
//         `,
//     },
//     {
//         title: "About the NFTs",
//         text: `
//             <p><strong>What is the total number of NFTs available?</strong><br />There are 64 NFTs available for this project.</p>
//             <p><strong>How can I purchase NFTs?</strong><br />You can purchase NFTs through our official website by following the buy process.</p>
//         `,
//     },
//     {
//         title: "About Maintenance",
//         text: `
//             <p><strong>Who is responsible for maintenance?</strong><br />The maintenance is handled by XYZ company under a 5-year contract.</p>
//             <p><strong>How often is maintenance performed?</strong><br />Maintenance is performed quarterly to ensure optimal performance.</p>
//         `,
//     },
// ];

// const carouselImages = [
//     "https://via.placeholder.com/800x400?text=Image+1",
//     "https://via.placeholder.com/800x400?text=Image+2",
//     "https://via.placeholder.com/800x400?text=Image+3",
// ];

// const JobsTabBlog = () => {
//     const [isAuthenticated, setIsAuthenticated] = useState(false);
//     const [userToken, setUserToken] = useState(null);
//     const [userSites, setUserSites] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [selectedSite, setSelectedSite] = useState(null);

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
//                 setIsAuthenticated(true);
//                 setUserToken(data.token);
//             } else {
//                 throw new Error("Authentication failed");
//             }
//         } catch (err) {
//             console.error("Error authenticating user:", err);
//             setError("Authentication failed");
//         }
//     };

//     const fetchUserSites = async () => {
//         if (!userToken) return;
//         setLoading(true);
//         try {
//             const response = await fetch(GET_USER_SITES_API_URL, {
//                 method: "GET",
//                 headers: {
//                     Authorization: `Bearer ${userToken}`,
//                     "Content-Type": "application/json",
//                 },
//             });
//             const data = await response.json();
//             setUserSites(data);
//         } catch (err) {
//             console.error("Error fetching sites:", err);
//             setError("Failed to fetch user sites");
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         authenticateUser();
//     }, []);

//     useEffect(() => {
//         if (isAuthenticated && userToken) {
//             fetchUserSites();
//         }
//     }, [isAuthenticated, userToken]);

//     if (selectedSite) {
//         return <UserProfile site={selectedSite} goBack={() => setSelectedSite(null)} />;
//     }

//     return (
//         <div className="mt-4">
//             {loading && <p className="text-center">Loading sites...</p>}
//             {error && <p className="text-center text-danger">{error}</p>}

//             {!loading && userSites.length > 0 ? (
//                 <div className="row">
//                     {userSites.map((site, index) => (
//                         <div className="col-xl-3 col-md-4 col-sm-6" key={index}>
//                             <div className="card hover-enlarge" onClick={() => setSelectedSite(site)}>
//                                 <div className="jobs2 card-body">
//                                     <div className="text-left">
//                                         <img
//                                             src={site.image || "https://via.placeholder.com/300"}
//                                             alt="Site"
//                                             className="mb-4"
//                                             style={{ width: "100%", height: "auto" }}
//                                         />
//                                         <h3 className="mb-0">{site.siteName || "No Name"}</h3>
//                                         <span className="text-primary mb-3 d-block">{site.location || "Unknown"}</span>
//                                     </div>
//                                     <div className="text-left">
//                                         <h4><strong>Client:</strong> {site.clientName || "N/A"}</h4>
//                                         <h4><strong>Capacity:</strong> {site.siteCapacity || "N/A"} kWp</h4>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             ) : (
//                 !loading && <p className="text-center">No sites available</p>
//             )}
//         </div>
//     );
// };

// const UserProfile = ({ site, goBack }) => {
//     return (
//         <div className="mt-4">
//             <div className="d-flex align-items-center mb-4">
//                 <h3 className="mb-0 me-auto">{site.siteName}</h3>
//                 <button onClick={goBack} className="btn btn-secondary">Back</button>
//             </div>
//             <div className="row">
//                 <div className="col-xl-9">
//                     <div className="card">
//                         <div className="card-body">
//                             <h4 className="fs-20">Site Details</h4>
//                             <div className="row">
//                                 <div className="col-md-6">
//                                     <p><strong>Client:</strong> {site.clientName || "N/A"}</p>
//                                     <p><strong>Capacity:</strong> {site.siteCapacity || "N/A"} kWp</p>
//                                     <p><strong>Location:</strong> {site.location || "N/A"}</p>
//                                     <p><strong>Address:</strong> {site.address || "N/A"}</p>
//                                     <p><strong>Tariff:</strong> {site.tariff || "N/A"} Rs/kWh</p>
//                                 </div>
//                                 <div className="col-md-6">
//                                     <p><strong>Panel Count:</strong> {site.panelCount || "N/A"}</p>
//                                     <p><strong>Panel Wattage:</strong> {site.panelWattage || "N/A"} W</p>
//                                     <p><strong>Status:</strong> {site.status || "N/A"}</p>
//                                     <p><strong>Installer Type:</strong> {site.installerType || "N/A"}</p>
//                                     <p><strong>Sanctioned Load:</strong> {site.sanctionedLoad || "N/A"} kW</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="mt-4">
//                         <div>
//                             <h4 className="card-intro-title">Photos</h4>
//                             <Carousel>
//                                 {carouselImages.map((img, i) => (
//                                     <Carousel.Item key={i}>
//                                         <img src={img} alt={`Slide ${i}`} className="d-block w-100" />
//                                     </Carousel.Item>
//                                 ))}
//                             </Carousel>
//                         </div>
//                     </div>

//                     <Card className="mt-4">
//                         <Card.Header><h4>FAQ</h4></Card.Header>
//                         <Card.Body>
//                             <Accordion>
//                                 {faqData.map((faq, index) => (
//                                     <Accordion.Item eventKey={index} key={index}>
//                                         <Accordion.Header>{faq.title}</Accordion.Header>
//                                         <Accordion.Body dangerouslySetInnerHTML={{ __html: faq.text }} />
//                                     </Accordion.Item>
//                                 ))}
//                             </Accordion>
//                         </Card.Body>
//                     </Card>

//                     <Card className="mt-4">
//                         <Card.Body>
//                             <h4>Documents</h4>
//                             <div className="row">
//                                 <div className="col-md-3 text-center">
//                                     <Link to={"#"} className="d-block">
//                                         <i className="fas fa-file-alt fa-3x mb-2"></i>
//                                         <span>Power Purchase Agreement</span>
//                                     </Link>
//                                 </div>
//                                 <div className="col-md-3 text-center">
//                                     <Link to={"#"} className="d-block">
//                                         <i className="fas fa-file-alt fa-3x mb-2"></i>
//                                         <span>Lease Agreement</span>
//                                     </Link>
//                                 </div>
//                                 <div className="col-md-3 text-center">
//                                     <Link to={"#"} className="d-block">
//                                         <i className="fas fa-clipboard fa-3x mb-2"></i>
//                                         <span>Commissioning Report</span>
//                                     </Link>
//                                 </div>
//                                 <div className="col-md-3 text-center">
//                                     <Link to={"#"} className="d-block">
//                                         <i className="fas fa-file-invoice fa-3x mb-2"></i>
//                                         <span>Latest Bill</span>
//                                     </Link>
//                                 </div>
//                             </div>
//                         </Card.Body>
//                     </Card>
//                 </div>

//                 <div className="col-xl-3">
//                     <Card>
//                         <img
//                             src={site.image || "https://via.placeholder.com/300"}
//                             alt="Site"
//                             className="card-img-top"
//                             style={{ height: "250px", objectFit: "cover" }}
//                         />
//                         <Card.Body>
//                             <p><strong>Latitude:</strong> {site.latitude || "N/A"}</p>
//                             <p><strong>Longituzxzde:</strong> {site.longitude || "N/A"}</p>
//                         </Card.Body>
//                     </Card>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default JobsTabBlog;

// import React, { useState, useEffect } from "react";
// import { Row, Col, Card, Carousel, Accordion } from "react-bootstrap";
// import { Link } from "react-router-dom";

// // API URLs
// const AUTH_API_URL = "https://portal.intellotechsolutions.co.in:5000/api/intello/authenticate";
// const GET_USER_SITES_API_URL = "https://portal.intellotechsolutions.co.in:5000/api/intello/user/v1/sites";

// // Static Data for FAQ and Carousel
// const faqData = [
//     {
//         title: "About the Project",
//         text: `
//             <p><strong>When is the commissioning date?</strong><br />The commissioning date is on 15th August 2024.</p>
//             <p><strong>Which make panels were used in the project?</strong><br />The project used ABC brand panels for solar power generation.</p>
//         `,
//     },
//     {
//         title: "About the NFTs",
//         text: `
//             <p><strong>What is the total number of NFTs available?</strong><br />There are 64 NFTs available for this project.</p>
//             <p><strong>How can I purchase NFTs?</strong><br />You can purchase NFTs through our official website by following the buy process.</p>
//         `,
//     },
//     {
//         title: "About Maintenance",
//         text: `
//             <p><strong>Who is responsible for maintenance?</strong><br />The maintenance is handled by XYZ company under a 5-year contract.</p>
//             <p><strong>How often is maintenance performed?</strong><br />Maintenance is performed quarterly to ensure optimal performance.</p>
//         `,
//     },
// ];

// const carouselImages = [
//     "https://via.placeholder.com/800x400?text=Image+1",
//     "https://via.placeholder.com/800x400?text=Image+2",
//     "https://via.placeholder.com/800x400?text=Image+3",
// ];

// const JobsTabBlog = () => {
//     const [isAuthenticated, setIsAuthenticated] = useState(false);
//     const [userToken, setUserToken] = useState(null);
//     const [userSites, setUserSites] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [selectedSite, setSelectedSite] = useState(null);

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
//                 setIsAuthenticated(true);
//                 setUserToken(data.token);
//             } else {
//                 throw new Error("Authentication failed");
//             }
//         } catch (err) {
//             console.error("Error authenticating user:", err);
//             setError("Authentication failed");
//         }
//     };

//     const fetchUserSites = async () => {
//         if (!userToken) return;
//         setLoading(true);
//         try {
//             const response = await fetch(GET_USER_SITES_API_URL, {
//                 method: "GET",
//                 headers: {
//                     Authorization: `Bearer ${userToken}`,
//                     "Content-Type": "application/json",
//                 },
//             });
//             const data = await response.json();
//             setUserSites(data || []); // Fallback to an empty array if data is null
//         } catch (err) {
//             console.error("Error fetching sites:", err);
//             setError("Failed to fetch user sites");
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         authenticateUser();
//     }, []);

//     useEffect(() => {
//         if (isAuthenticated && userToken) {
//             fetchUserSites();
//         }
//     }, [isAuthenticated, userToken]);

//     if (selectedSite) {
//         return <UserProfile site={selectedSite} goBack={() => setSelectedSite(null)} />;
//     }

//     return (
//         <div className="mt-4">
//             {loading && <p className="text-center">Loading sites...</p>}
//             {error && <p className="text-center text-danger">{error}</p>}

//             {!loading && userSites.length > 0 ? (
//                 <div className="row">
//                     {userSites.map((site, index) => (
//                         <div className="col-xl-3 col-md-4 col-sm-6" key={index}>
//                             <div className="card hover-enlarge" onClick={() => setSelectedSite(site)}>
//                                 <div className="jobs2 card-body">
//                                     <div className="text-left">
//                                         <img
//                                             src={site.image || "https://via.placeholder.com/300"}
//                                             alt="Site"
//                                             className="mb-4"
//                                             style={{ width: "100%", height: "auto" }}
//                                         />
//                                         <h3 className="mb-0">{site.siteName || "No Name"}</h3>
//                                         <span className="text-primary mb-3 d-block">{site.location || "Unknown"}</span>
//                                     </div>
//                                     <div className="text-left">
//                                         <h4><strong>Client:</strong> {site.clientName || "N/A"}</h4>
//                                         <h4><strong>Capacity:</strong> {site.siteCapacity || "N/A"} kWp</h4>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             ) : (
//                 !loading && <p className="text-center">No sites available</p>
//             )}
//         </div>
//     );
// };

// const UserProfile = ({ site, goBack }) => {
//     return (
//         <div className="mt-4">
//             <div className="d-flex align-items-center mb-4">
//                 <h3 className="mb-0 me-auto">{site.siteName}</h3>
//                 <button onClick={goBack} className="btn btn-secondary">Back</button>
//             </div>
//             <div className="row">
//                 <div className="col-xl-9">
//                     <div className="card">
//                         <div className="card-body">
//                             <h4 className="fs-20">Site Details</h4>
//                             <div className="row">
//                                 <div className="col-md-6">
//                                     <p><strong>Client:</strong> {site.clientName || "N/A"}</p>
//                                     <p><strong>Capacity:</strong> {site.siteCapacity || "N/A"} kWp</p>
//                                     <p><strong>Location:</strong> {site.location || "N/A"}</p>
//                                     <p><strong>Address:</strong> {site.address || "N/A"}</p>
//                                     <p><strong>Tariff:</strong> {site.tariff || "N/A"} Rs/kWh</p>
//                                 </div>
//                                 <div className="col-md-6">
//                                     <p><strong>Panel Count:</strong> {site.panelCount || "N/A"}</p>
//                                     <p><strong>Panel Wattage:</strong> {site.panelWattage || "N/A"} W</p>
//                                     <p><strong>Status:</strong> {site.status || "N/A"}</p>
//                                     <p><strong>Installer Type:</strong> {site.installerType || "N/A"}</p>
//                                     <p><strong>Sanctioned Load:</strong> {site.sanctionedLoad || "N/A"} kW</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Photos Section */}
//                     <Card className="mt-4">
//                         <Card.Body>
//                             <h4 className="card-intro-title">Photos</h4>
//                             <Carousel>
//                                 {carouselImages.map((img, i) => (
//                                     <Carousel.Item key={i}>
//                                         <img src={img} alt={`Slide ${i}`} className="d-block w-100" />
//                                     </Carousel.Item>
//                                 ))}
//                             </Carousel>
//                         </Card.Body>
//                     </Card>

//                     {/* FAQ Section */}
//                     <Card className="mt-4">
//                         <Card.Header><h4>FAQ</h4></Card.Header>
//                         <Card.Body>
//                             <Accordion>
//                                 {faqData.map((faq, index) => (
//                                     <Accordion.Item eventKey={index} key={index}>
//                                         <Accordion.Header>{faq.title}</Accordion.Header>
//                                         <Accordion.Body dangerouslySetInnerHTML={{ __html: faq.text }} />
//                                     </Accordion.Item>
//                                 ))}
//                             </Accordion>
//                         </Card.Body>
//                     </Card>

//                     {/* Documents Section */}
//                     <Card className="mt-4">
//                         <Card.Body>
//                             <h4>Documents</h4>
//                             <div className="row">
//                                 <div className="col-md-3 text-center">
//                                     <Link to={"#"} className="d-block">
//                                         <i className="fas fa-file-alt fa-3x mb-2"></i>
//                                         <span>Power Purchase Agreement</span>
//                                     </Link>
//                                 </div>
//                                 <div className="col-md-3 text-center">
//                                     <Link to={"#"} className="d-block">
//                                         <i className="fas fa-file-alt fa-3x mb-2"></i>
//                                         <span>Lease Agreement</span>
//                                     </Link>
//                                 </div>
//                                 <div className="col-md-3 text-center">
//                                     <Link to={"#"} className="d-block">
//                                         <i className="fas fa-clipboard fa-3x mb-2"></i>
//                                         <span>Commissioning Report</span>
//                                     </Link>
//                                 </div>
//                                 <div className="col-md-3 text-center">
//                                     <Link to={"#"} className="d-block">
//                                         <i className="fas fa-file-invoice fa-3x mb-2"></i>
//                                         <span>Latest Bill</span>
//                                     </Link>
//                                 </div>
//                             </div>
//                         </Card.Body>
//                     </Card>
//                 </div>

//                 {/* Right-Side Box */}
//                 <div className="col-xl-3">
//                     <Card>
//                         <img
//                             src={site.image || "https://via.placeholder.com/300"}
//                             alt="Site"
//                             className="card-img-top"
//                             style={{ height: "250px", objectFit: "cover" }}
//                         />
//                         <Card.Body>
//                             <p><strong>Latitude:</strong> {site.latitude || "N/A"}</p>
//                             <p><strong>Longitude:</strong> {site.longitude || "N/A"}</p>
//                         </Card.Body>
//                     </Card>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default JobsTabBlog;

// import React, { useState, useEffect } from "react";
// import { Row, Col, Card, Carousel, Accordion } from "react-bootstrap";
// import { Link } from "react-router-dom";

// // API URLs

// // Placeholder images
// import user from "./../../../../../images/user.jpg";
// import img1 from "../../../../../images/big/img1.jpg";
// import img2 from "../../../../../images/big/img2.jpg";
// import img3 from "../../../../../images/big/img3.jpg";
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

//   // Fetch data from API
//   const fetchJobCardData = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       // Authenticate and fetch token
//       const authResponse = await fetch(AUTH_API_URL, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           username: "prateek@enfros.co.in",
//           password:
//             "9032961c4a5757c8b460c2ecdecbdabc337950cd7b3b1a0fb2592a4b130630ca",
//         }),
//       });
//       const authData = await authResponse.json();

//       if (!authData.token) {
//         throw new Error("Authentication failed");
//       }

//       // Fetch user sites using the token
//       const sitesResponse = await fetch(GET_USER_SITES_API_URL, {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${authData.token}`,
//           "Content-Type": "application/json",
//         },
//       });
//       const sitesData = await sitesResponse.json();

//       // Map the API data to the structure expected by the UI
//       const formattedData = sitesData.map((site) => ({
//         image: site.image || user,
//         title: site.siteName,
//         subtitle: site.location,
//         nftsAvailable: site.panelCount,
//         price: `Rs. ${site.tariff * 1000}`, // Example pricing logic
//         plantSize: `${site.siteCapacity} kWp`,
//         totalNFTs: site.panelCount,
//       }));
//       setJobCardData(formattedData);
//     } catch (err) {
//       console.error("Error fetching data:", err);
//       setError("Failed to load data. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch the data when the component loads
//   useEffect(() => {
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
//                       <strong>NFTs Available:</strong> {data.nftsAvailable}
//                     </h4>
//                     <h4>
//                       <strong>Price:</strong> {data.price}
//                     </h4>
//                     <h4>
//                       <strong>Plant Size:</strong> {data.plantSize}
//                     </h4>
//                     <h4>
//                       <strong>Total NFTs:</strong> {data.totalNFTs}
//                     </h4>
//                   </div>
//                   <div className="text-center">
//                     <button
//                       onClick={() => handleBuyClick(data)}
//                       className="btn btn-outline-success mt-3"
//                     >
//                       BUY
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
//   const tariffPerUnit = 4.75; // Rs per kWp
//   const [consumerWallet, setConsumerWallet] = useState("");
//   const userDetails = JSON.parse(localStorage.getItem("userDetails"));
//   const userId = userDetails?.userId;

//   useEffect(() => {
//     if (!nft.title) return;

//     // First API Call: Add Site (Ensures site exists before purchasing)
//     const addSite = async () => {
//       const cleanedPlantSize = parseFloat(nft.plantSize);
//       try {
//         const response = await fetch(`https://ethglobal-project-backend.onrender.com/api/v1/sites/site-details`, {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             action: "add",
//             userId: userId,
//             siteName: nft.title,
//             plantSize: cleanedPlantSize, // Plant size from props
//           }),
//         });

//         const data = await response.json();
//         setSiteDetails(data);
//       } catch (error) {
//         console.error("Error adding site:", error);
//       }
//     };

//     addSite();
//   }, [nft.title, userId]);

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

//     try {
//       const orderResponse = await fetch(
//         `https://ethglobal-project-backend.onrender.com/api/v1/payment/create/order`,
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ amount: price }),
//         }
//       );

//       const orderData = await orderResponse.json();
//       if (!orderResponse.ok) throw new Error("Failed to create order");

//       const options = {
//         key: process.env.REACT_APP_RAZORPAY_API_KEY,
//         amount: orderData.amount,
//         currency: orderData.currency,
//         name: "Enfros",
//         description: `Payment for ${nft.title}`,
//         image: "/logo.png",
//         order_id: orderData.order_id,
//         handler: function (response) {
//           verifyPayment(response);
//         },
//         prefill: {
//           name: userDetails?.email || "Customer Name",
//           email: userDetails?.email || "customer@example.com",
//           contact: "9999999999",
//         },
//         theme: { color: "#3399cc" },
//       };

//       const rzp1 = new window.Razorpay(options);
//       rzp1.open();
//     } catch (error) {
//       console.error("Payment initiation error:", error);
//     }
//   };

//   // Verify payment and update backend
//   const verifyPayment = async (response) => {
//     const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
//       response;

//     try {
//       const verifyResponse = await fetch(
//         `https://ethglobal-project-backend.onrender.com/api/v1/payment/verify/order`,
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
//       await fetch(`https://ethglobal-project-backend.onrender.com/api/v1/sites/site-details`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           action: "add",
//           userId: userId,
//           siteName: nft.title,
//           plantSize: nft.plantSize,
//         }),
//       });

//       // Then, update the kWp purchase
//       await fetch(`https://ethglobal-project-backend.onrender.com/api/v1/sites/site-details`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           action: "buy",
//           userId: userId,
//           siteName: nft.title,
//           kWp: kWp,
//         }),
//       });
//       setkWp(0);
//       setTotalAmount(0);
//       const mintResponse = await fetch(`http://localhost:5000/api/v1/mint`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           consumerAddress: consumerWallet, // consumer's wallet address
//           quantity: kWp, // number of NFTs to mint
//         }),
//       });

//       const mintData = await mintResponse.json();
//       if (!mintResponse.ok)
//         throw new Error(mintData.error || "NFT minting failed");

//       alert("NFTs successfully minted to your wallet!");
//       setkWp(0);
//       setTotalAmount(0);
//     } catch (error) {
//       console.error("Payment verification error:", error);
//       alert("Payment failed");
//     }
//   }

//     return (
//       <div className="mt-4">
//         <div className="d-flex align-items-center mb-4">
//           <h3 className="mb-0 me-auto">{nft.title}</h3>
//           <button onClick={goBack} className="btn btn-secondary">
//             Back
//           </button>
//         </div>
//         <div className="row">
//           {/* Rest of the content */}
//           <div className="col-xl-9">
//             <div className="card">
//               <div className="card-header border-0 flex-wrap align-items-start">
//                 <div className="col-xl-12">
//                   <div className="user d-sm-flex d-block pe-0">
//                     <img
//                       src={nft.image || user} // Use dynamic image if available
//                       className="d-xl-none d-lg-none mb-4" // Hide image on large and extra-large screens
//                       style={{ width: "100%", height: "auto" }}
//                       alt="Site"
//                     />
//                     <div className="ms-sm-3 ms-0 me-md-5 md-0">
//                       <h5 className="mb-1 font-w600">
//                         NFTs Available: {nft.nftsAvailable}
//                       </h5>
//                       <p>
//                         A data analyst collects, interprets and visualizes data to
//                         uncover insights. A data analyst collects, interprets and
//                         visualizes data to uncover insights...
//                       </p>
//                       <p>
//                         A data analyst collects, interprets and visualizes data to
//                         uncover insights. A data analyst collects, interprets and
//                         visualizes data to uncover insights...
//                       </p>
//                       <p>
//                         A data analyst collects, interprets and visualizes data to
//                         uncover insights. A data analyst collects, interprets and
//                         visualizes data to uncover insights...
//                       </p>
//                     </div>
//                     <div className="d-xl-none d-lg-none mb-4">
//                       <Link to={"#"} className="btn btn-lg btn-success me-2">
//                         Buy
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="card-body pt-0">
//                 <h4 className="fs-20">Description</h4>
//                 <div className="row">
//                   {/* <div className="col-xl-4 col-md-6">
// 									<p className="font-w600 mb-2 d-flex"><span className="custom-label-2">Siite : </span><span className="font-w400">{nft.title}</span></p>
// 									<p className="font-w600 mb-2 d-flex"><span className="custom-label-2">Location : </span><span className="font-w400">{nft.subtitle}</span></p>
// 									<p className="font-w600 mb-2 d-flex"><span className="custom-label-2">Plant Size : </span><span className="font-w400">{nft.plantSize}</span></p>
// 									<p className="font-w600 mb-2 d-flex"><span className="custom-label-2">Total NFTs : </span><span className="font-w400">{nft.totalNFTs}</span></p>
// 									<p className="font-w600 mb-2 d-flex"><span className="custom-label-2">Plant Commissioning Date : </span><span className="font-w400">17 Aug 2024</span></p>
// 									<p className="font-w600 mb-2 d-flex"><span className="custom-label-2">Tariff : </span><span className="font-w400">Rs. 4.75 per Unit</span></p>
// 								</div> */}
//                   <div className="col-xl-12 col-md-6">
//                     <div className="card">
//                       <div className="card-body">
//                         <div className="row">
//                           <div className="col-sm-4">
//                             <div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
//                               <div>
//                                 <h3 className="mb-0 lh-1">300kWp</h3>
//                                 <span className="fs-14 d-block">Capacity</span>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="col-sm-4">
//                             <div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
//                               <div>
//                                 <h3 className="mb-0 lh-1">80%</h3>
//                                 <span className="fs-14 d-block">Reserved</span>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="col-sm-4">
//                             <div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
//                               <div>
//                                 <h3 className="mb-0 lh-1">17-Aug-24</h3>
//                                 <span className="fs-14 d-block">
//                                   Date of Commisioning
//                                 </span>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="col-sm-4 mt-4">
//                             <div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
//                               <div>
//                                 <h3 className="mb-0 lh-1">15 Years</h3>
//                                 <span className="fs-14 d-block">PPA Terms</span>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="col-sm-4 mt-4">
//                             <div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
//                               <div>
//                                 <h3 className="mb-0 lh-1">18%</h3>
//                                 <span className="fs-14 d-block">Return</span>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="col-sm-4 mt-4">
//                             <div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
//                               <div>
//                                 <h3 className="mb-0 lh-1">Rs 4.75 per kWh</h3>
//                                 <span className="fs-14 d-block">Tariff</span>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <Col xl={8} className="mx-auto">
//                 <Card>
//                   <Card.Body className="p-4">
//                     <h4 className="card-intro-title">Photos</h4>
//                     <div className="d-flex justify-content-center">
//                       <Carousel>
//                         {carousel1.map((carousel, i) => (
//                           <Carousel.Item key={i}>
//                             <img
//                               src={carousel}
//                               className="d-block"
//                               alt={`Slide ${i + 1}`}
//                             />
//                           </Carousel.Item>
//                         ))}
//                       </Carousel>
//                     </div>
//                   </Card.Body>
//                 </Card>
//               </Col>
//               <div className="card-footer mb-10 mt-10">
//                 <h3 className="d-block mb-10 mt-30">
//                   <strong>Documents</strong>
//                 </h3>
//                 <div className="row">
//                   <div className="col-md-3 text-center mb-4">
//                     <Link to={"#"} className="d-block text-center">
//                       <i className="fas fa-file-alt fa-3x mb-2"></i>
//                       <span className="d-block">
//                         Power Purchase Agreement (PPA)
//                       </span>{" "}
//                       {/* Set text as block */}
//                     </Link>
//                   </div>
//                   <div className="col-md-3 text-center mb-4">
//                     <Link to={"#"} className="d-block text-center">
//                       <i className="fas fa-file-alt fa-3x mb-2"></i>
//                       <span className="d-block">Lease Agreement</span>{" "}
//                       {/* Set text as block */}
//                     </Link>
//                   </div>
//                   <div className="col-md-3 text-center mb-4">
//                     <Link to={"#"} className="d-block text-center">
//                       <i className="fas fa-clipboard fa-3x mb-2"></i>
//                       <span className="d-block">Commissioning Report</span>{" "}
//                       {/* Set text as block */}
//                     </Link>
//                   </div>
//                   <div className="col-md-3 text-center mb-4">
//                     <Link to={"#"} className="d-block text-center">
//                       <i className="fas fa-file-invoice fa-3x mb-2"></i>
//                       <span className="d-block">Latest Bill</span>{" "}
//                       {/* Set text as block */}
//                     </Link>
//                   </div>
//                 </div>
//               </div>

//               <Col xl="12">
//                 <Card>
//                   <Card.Header className="d-block">
//                     <Card.Title>FAQ</Card.Title>
//                   </Card.Header>
//                   <Card.Body>
//                     <Accordion
//                       className="col-xl-6 accordion accordion-rounded-stylish accordion-gradient"
//                       defaultActiveKey="0"
//                     >
//                       {defaultAccordion.map((d, i) => (
//                         <Accordion.Item key={i} eventKey={`${i}`}>
//                           <Accordion.Header className="accordion-header accordion-header--primary">
//                             <span className="accordion-header-icon"></span>
//                             <span className="accordion-header-text">
//                               {d.title}
//                             </span>
//                             <span className="accordion-header-indicator"></span>
//                           </Accordion.Header>
//                           <Accordion.Collapse
//                             eventKey={`${i}`}
//                             className="accordion__body"
//                           >
//                             <div
//                               className="accordion-body"
//                               dangerouslySetInnerHTML={{ __html: d.text }}
//                             />
//                           </Accordion.Collapse>
//                         </Accordion.Item>
//                       ))}
//                     </Accordion>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             </div>
//           </div>

//           {/* Dynamic Positioning of the Image */}
//           {/* Dynamic Positioning of the Image */}
//           <div className="col-xl-3 d-none d-xl-block">
//             <div
//               style={
//                 isFixed
//                   ? {
//                     position: "fixed",
//                     top: "190px",
//                     right: "35px",
//                     transition: "position 0.7s ease",
//                   }
//                   : {
//                     position: "sticky",
//                     top: "190px", // This will keep it sticky until the content moves up
//                   }
//               }
//             >
//               {/* Card Container */}
//               <div className="card" style={{ height: "550px", width: "270px" }}>
//                 {/* Image Section */}
//                 <img
//                   src={nft.image || user}
//                   style={{ height: "300px", width: "100%", objectFit: "cover" }}
//                   alt="Site"
//                 />

//                 {/* Content Section */}
//                 <div className="card-body d-flex flex-column justify-content-center">
//                   {/* <h5 className="card-title text-center">Site Details</h5>
// 								<p className="card-text text-center mb-2">This is an amazing site with incredible views and details about the project.</p>
// 								<p className="card-text text-center mb-2">NFTs Available: {nft.nftsAvailable}</p> */}
//                   <div className="col-xl-4 col-md-6">
//                     <p className="font-w600 mb-2 d-flex">
//                       <span className="custom-label-2">
//                         Site : <span className="font-w400">{nft.title}</span>
//                       </span>
//                     </p>
//                     <p className="font-w600 mb-2 d-flex">
//                       <span className="custom-label-2">
//                         Location :{" "}
//                         <span className="font-w400">{nft.subtitle}</span>
//                       </span>
//                     </p>
//                     <p className="font-w600 mb-2 d-flex">
//                       <span className="custom-label-2">
//                         Plant Size :{" "}
//                         <span className="font-w400">{nft.plantSize}</span>
//                       </span>
//                     </p>
//                     <p className="font-w600 mb-2 d-flex">
//                       <span className="custom-label-2">
//                         Total NFTs :{" "}
//                         <span className="font-w400">{nft.totalNFTs}</span>
//                       </span>
//                     </p>
//                     <p className="font-w600 mb-2 d-flex">
//                       <span className="custom-label-2">
//                         Plant Date :{" "}
//                         <span className="font-w400">17 Aug 2024</span>
//                       </span>
//                     </p>
//                     <p className="font-w600 mb-2 d-flex">
//                       <span className="custom-label-2">
//                         Tariff :{" "}
//                         <span className="font-w400">Rs. 4.75 per Unit</span>
//                       </span>
//                     </p>
//                   </div>
//                   <div className="d-flex align-items-center mt-3">
//                     <button
//                       className="btn btn-danger me-2"
//                       onClick={handleDecrease}
//                     >
//                       -
//                     </button>
//                     <span className="font-w600">{kWp} kWp</span>
//                     <button
//                       className="btn btn-success ms-2"
//                       onClick={handleIncrease}
//                     >
//                       +
//                     </button>
//                   </div>
//                   {/* Display Total Amount */}
//                   <div className="mt-3">
//                     <label htmlFor="walletAddress">Wallet Address:</label>
//                     <input
//                       id="walletAddress"
//                       type="text"
//                       className="form-control"
//                       placeholder="Enter your wallet address"
//                       value={consumerWallet}
//                       onChange={(e) => setConsumerWallet(e.target.value)}
//                     />
//                   </div>
//                   <p className="font-w600 mt-3">
//                     Total Amount: Rs. {totalAmount}
//                   </p>
//                   <button
//                     onClick={handleRazorPayPayment}
//                     className="btn btn-primary w-100 text-center"
//                   >
//                     Buy
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };
//   // export default UserProfile;
//   export default JobsTabBlog;

// import React, { useState, useEffect } from "react";
// import { Row, Col, Card, Carousel, Accordion } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import NFT_ABI from "./contractabi.json";

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

//   const fetchJobCardData = () => {
//     setLoading(true);
//     setError(null);

//     try {
//       const hardcodedData = [
//         {
//           image: user,
//           title: "Unit-II Metal Profiles Indore",
//           subtitle: "Sanwer Road Industrial Area, Madhya Pradesh",
//           generation: "~3,60,000 kWh",
//           price: "Rs. 34,675",
//           plantSize: "250 kWp",
//           tarrif: 4.5,
//           overview:
//             "Installed on a 25,000 sq. ft industrial rooftop, this solar plant operates under a 15-year PPA with 100% offtake guarantee, offering secure and predictable returns for investors.",
//           technology: {
//             modules: "Trina Solar TOPCon 695 Wp – high-efficiency next-gen modules.",
//             inverter: "SolarEdge Inverters with Optimizers – advanced Israeli technology with module-level monitoring.",
//           },
//           performanceReturns:
//             "With an expected output of 1,450 kWh/kWp/year, the plant is designed to deliver consistently high returns. The PPA is structured as a ;Pay-as-you-generate' model, with a fixed tariff of ₹4.5/kWh for the entire term—ensuring predictable revenue and insulation from market volatility. Degradation of 2% in the first year and 0.5% yearly after one year will have long-term reducing gains.",
//           totalNFTs: 250,
//           isAvailable: true,
//           contractAddress: "0x9296368c5316317b4F4BD55574BD7A219676Cb41",
//         },
//         {
//           image: user,
//           title: "Project Spotlight: Metal Profiles Unit-III",
//           subtitle: "Bardari, Indore, Madhya Pradesh",
//           generation: "~7,02,500 kWh",
//           price: "Rs. 34,675",
//           plantSize: "493 kWp",
//           tarrif: 4.5,
//           tenure: "15-year Power Purchase Agreement (PPA)",
//           consumer: "Metal Profiles, a leading industrial unit in Indore",
//           offtakeGuarantee: "100% of generated power underwritten by the consumer",
//           omExpenses: "Rs. 25/month/kWp, increasing 2% annually",
//           overview:
//             "This rooftop solar plant is installed atop the expansive 70,000 sq. ft facility of Metal Profiles and serves as a model project for clean, secure, and profitable renewable energy investment. Backed by a 15-year Power Purchase Agreement with a guaranteed offtake of 7,02,500 kWh annually, this asset offers stable long-term income for investors.",
//           technology: {
//             modules:
//               "Trina Solar TOPCon 695 Wp and Solex MonoPERC 545 Wp – High-efficiency next-gen modules ensuring reliable yield.",
//             inverter:
//               "SolarEdge Inverters and Optimizers – Cutting-edge Israeli technology with module-level monitoring and safety."
//           },
//           warranties: {
//             modules: "30-year linear power warranty",
//             inverters: "12 years",
//             optimizers: "25 years"
//           },
//           performanceReturns:
//             "Expected output: 1,450 kWh/kWp/year. ROI: ~14%. Payback: ~5.5 years. Degradation: 2% in year 1, 0.5% annually thereafter.",
//           revenueModel: "Pay-as-you-generate at fixed ₹4.5/kWh for entire term",
//           totalNFTs: 493,
//           isAvailable: false
//         },
//         {
//           image: user,
//           title: "Project Spotlight: Metal Profiles Unit-I",
//           subtitle: "Sanwer Road Industrial Area, Indore, Madhya Pradesh",
//           generation: "~6,15,000 kWh",
//           price: "Rs. 34,675",
//           plantSize: "425 kWp",
//           tarrif: 4.5,
//           tenure: "15-year Power Purchase Agreement (PPA)",
//           consumer: "Metal Profiles, a leading industrial unit in Indore",
//           offtakeGuarantee: "100% of generated power underwritten by the consumer",
//           omExpenses: "Rs. 25/month/kWp, increasing 2% annually",
//           overview:
//             "This rooftop solar plant is installed atop the expansive 40,000 sq. ft facility of Metal Profiles and serves as a model project for clean, secure, and profitable renewable energy investment. Backed by a 15-year Power Purchase Agreement with a guaranteed offtake of 6,15,000 kWh annually, this asset offers stable long-term income for investors.",
//           technology: {
//             modules: "Trina Solar TOPCon 695 Wp – One of the most efficient next-gen modules available.",
//             inverter: "SolarEdge Inverters and Optimizers – Cutting-edge Israeli technology with module-level monitoring and safety."
//           },
//           warranties: {
//             modules: "30-year linear power warranty",
//             inverters: "12 years",
//             optimizers: "25 years"
//           },
//           performanceReturns: "Expected output: 1,450 kWh/kWp/year. ROI: ~12%. Payback: ~6 years. Degradation: 2% in year 1, 0.5% annually thereafter.",
//           revenueModel: "Pay-as-you-generate at fixed ₹4.5/kWh for entire term",
//           totalNFTs: 425,
//           isAvailable: false,
//           contractAddress: "0x9296368c5316317b4F4BD55574BD7A219676Cb41",
//         },
//         {
//           image: user,
//           title: "Project Spotlight: Hi-Tech Metal Formings Unit-II",
//           subtitle: "Bardari, Indore, Madhya Pradesh",
//           generation: "~1,45,000 kWh",
//           price: "Rs. 34,675",
//           plantSize: "100 kWp",
//           tarrif: 5.5,
//           tenure: "15-year Power Purchase Agreement (PPA)",
//           consumer: "Hi-Tech Metal Formings, a leading industrial unit in Indore",
//           offtakeGuarantee: "100% of generated power underwritten by the consumer",
//           omExpenses: "Rs. 25/month/kWp, increasing 2% annually",
//           overview:
//             "This rooftop solar plant is installed atop the expansive 10,000 sq. ft facility of Hi-Tech Metal Formings and serves as a model project for clean, secure, and profitable renewable energy investment. Backed by a 15-year Power Purchase Agreement with a guaranteed offtake of 3,60,000 kWh annually, this asset offers stable long-term income for investors.",
//           technology: {
//             modules: "Solex MonoPERC 545 Wp – High-performance panels ensuring reliable yield.",
//             inverter: "SolarEdge Inverters and Optimizers – Cutting-edge Israeli technology with module-level monitoring and safety."
//           },
//           warranties: {
//             modules: "30-year linear power warranty",
//             inverters: "12 years",
//             optimizers: "25 years"
//           },
//           performanceReturns:
//             "Expected output: 1,450 kWh/kWp/year. ROI: ~10%. Payback: ~7 years. Degradation: 2% in year 1, 0.5% annually thereafter.",
//           revenueModel: "Pay-as-you-generate at fixed ₹5.5/kWh for entire term",
//           totalNFTs: 100,
//           isAvailable: false
//         },
//       ];

//       setJobCardData(hardcodedData);
//     } catch (err) {
//       console.error("Error loading hardcoded data:", err);
//       setError("Failed to load data.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch the data when the component loads
//   useEffect(() => {
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
//                       className={`btn ${data.isAvailable ? "btn-outline-success" : "btn-secondary"
//                         } mt-3`}
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
//   const userDetails = JSON.parse(localStorage.getItem("userDetails"));
//   const userId = userDetails?.userId;
//   const [nextTokenIdToMintVal, setNextTokenIdToMintVal] = useState(null);
//   const [maxKilowattsVal, setMaxKilowattsVal] = useState(null);

//   useEffect(() => {
//     if (!nft.title) return;

//     // First API Call: Add Site (Ensures site exists before purchasing)
//     const addSite = async () => {
//       const cleanedPlantSize = parseFloat(nft.plantSize);
//       try {
//         const response = await fetch(
//           `https://ethglobal-project-backend.onrender.com/api/v1/sites/site-details`,
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

//   // useEffect(() => {
//   //   if (!nft.contractAddress || !window.ethereum) return;

//   //   const provider = new ethers.BrowserProvider(window.ethereum);
//   //   const readContract = new ethers.Contract(
//   //     nft.contractAddress,
//   //     NFT_ABI,
//   //     provider
//   //   );

//   //   const fetchSupplyInfo = async () => {
//   //     try {
//   //       const [nextId, maxKw] = await Promise.all([
//   //         readContract.nextTokenIdToMint(),
//   //         readContract.maxKilowatts(),
//   //       ]);
//   //       setNextTokenIdToMintVal(nextId);
//   //       setMaxKilowattsVal(maxKw);
//   //     } catch (err) {
//   //       console.error("Error fetching contract supply info:", err);
//   //     }
//   //   };

//   //   fetchSupplyInfo();
//   // }, [nft.contractAddress]);

//   useEffect(() => {
//     const fetchMintData = async () => {
//       if (!nft.contractAddress || !window.ethereum) return;
//       try {
//         const provider = new BrowserProvider(window.ethereum);
//         await provider.send("eth_requestAccounts", []);
//         const signer = await provider.getSigner();
//         const contract = new ethers.Contract(nft.contractAddress, NFT_ABI, signer);

//         let nextId;
//         try {
//           nextId = await contract.nextTokenIdToClaim();
//         } catch (err) {
//           console.warn("nextTokenIdToMint() failed, deriving from totalSold():", err);
//           const sold = await contract.totalSold();
//           nextId = sold.add(1);
//         }

//         let maxKW;
//         try {
//           maxKW = await contract.maxKilowatts();
//         } catch (err) {
//           console.error("maxKilowatts() failed:", err);
//           // maxKW = ethers.Zero; // fallback to 0 if you like
//         }

//         console.log("nextTokenIdToMint:", nextId.toString());
//         console.log("maxKilowatts:", maxKW.toString());
//         setNextTokenIdToMintVal(nextId);
//         setMaxKilowatts(maxKW);
//       } catch (e) {
//         console.error("fetchMintData overall failure:", e);
//       }
//     };
//     fetchMintData();
//   }, [nft.contractAddress]);


//   // 2️⃣ Determine if minting is allowed by comparing BigNumbers:
//   const isMintAvailable =
//     nextTokenIdToMintVal != null &&
//     maxKilowattsVal != null &&
//     nextTokenIdToMintVal.lte(maxKilowattsVal);


//   // Handle Razorpay Payment
//   const handleRazorPayPayment = async () => {
//     const price = totalAmount; // Convert to paise

//     try {
//       const orderResponse = await fetch(
//         `https://ethglobal-project-backend.onrender.com/api/v1/payment/create/order`,
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ amount: price }),
//         }
//       );

//       const orderData = await orderResponse.json();
//       if (!orderResponse.ok) throw new Error("Failed to create order");

//       const options = {
//         key: process.env.REACT_APP_RAZORPAY_API_KEY,
//         amount: orderData.amount,
//         currency: orderData.currency,
//         name: "Enfros Solutions",
//         description: `Payment for ${nft.title}`,
//         image: "/logo.png",
//         order_id: orderData.order_id,
//         handler: function (response) {
//           verifyPayment(response);
//         },
//         prefill: {
//           name: userDetails?.email || "Customer Name",
//           email: userDetails?.email || "customer@example.com",
//           contact: "9999999999",
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
//       const USDC_TOKEN_ADDRESS = "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238";
//       const NFT_CONTRACT_ADDRESS = "0xd96bE61625495D8af13Dfa3886EF86691e46c078";

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

//       const nftContract = new ethers.Contract(
//         contractAddress,
//         NFT_ABI,
//         signer
//       );
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
//         `https://ethglobal-project-backend.onrender.com/api/v1/sites/site-details`,
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
//         `https://ethglobal-project-backend.onrender.com/api/v1/payment/verify/order`,
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
//         `https://ethglobal-project-backend.onrender.com/api/v1/sites/site-details`,
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
//         `https://ethglobal-project-backend.onrender.com/api/v1/sites/site-details`,
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
//         `http://localhost:5000/api/v1/mint`,
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
//                 onClick={() => {
//                   if (!nft.isAvailable) {
//                     return alert("Site is fully purchased");
//                   }
//                   if (!isMintAvailable) {
//                     return alert("Sold out—maximum kW reached");
//                   }
//                   handleRazorPayPayment();
//                 }}
//                 disabled={!nft.isAvailable || !isMintAvailable}
//                 className="btn btn-primary w-100"
//               >
//                 {nft.isAvailable ? "Buy" : "Sold Out"}
//               </button>
//               <button
//                 onClick={() =>
//                   nft.isAvailable
//                     ? purchaseWithUSDC()
//                     : alert("Site is fully purchased")
//                 }
//                 disabled={!nft.isAvailable}
//                 className="btn btn-secondary w-100 mt-2"
//               >
//                 {nft.isAvailable ? "Pay with USDC" : "Sold Out"}
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
//                   <span className="custom-label-2">Site: <span className="font-w400">{nft.title}</span></span>

//                 </p>
//                 <p className="font-w600 mb-2">
//                   <span className="custom-label-2">Location: <span className="font-w400">{nft.subtitle}</span></span>

//                 </p>
//                 <p className="font-w600 mb-2">
//                   <span className="custom-label-2">Plant Size: <span className="font-w400">{nft.plantSize}</span></span>

//                 </p>
//                 <p className="font-w600 mb-2">
//                   <span className="custom-label-2">Total NFTs: <span className="font-w400">{nft.totalNFTs}</span></span>

//                 </p>
//                 <p className="font-w600 mb-2">
//                   <span className="custom-label-2">Plant Date: <span className="font-w400">17 Aug 2024</span></span>

//                 </p>
//                 <p className="font-w600 mb-2">
//                   <span className="custom-label-2">Tariff: <span className="font-w400">Rs. 4.75 per Unit</span></span>

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
//                 onClick={() => {
//                   if (!nft.isAvailable) {
//                     return alert("Site is fully purchased");
//                   }
//                   if (!isMintAvailable) {
//                     return alert("Sold out—maximum kW reached");
//                   }
//                   handleRazorPayPayment();
//                 }}
//                 disabled={!nft.isAvailable || !isMintAvailable}
//                 className="btn btn-primary w-100"
//               >
//                 {nft.isAvailable ? "Buy" : "Sold Out"}
//               </button>
//               <button
//                 onClick={() =>
//                   nft.isAvailable
//                     ? purchaseWithUSDC()
//                     : alert("Site is fully purchased")
//                 }
//                 disabled={!nft.isAvailable}
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
// // export default UserProfile;
// export default JobsTabBlog;




import React, { useState, useEffect } from "react";
import { Row, Col, Card, Carousel, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import NFT_ABI from "./contractabi.json";
import axios from "axios"
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

    const fetchJobCardData = async() => {

    try {
      console.log('checkpoint 1');
      const res = await axios.get("http://localhost:5000/api/v1/admin/services");
      console.log('checkpoint 2');
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
                      className={`btn ${data.isAvailable ? "btn-outline-success" : "btn-secondary"
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
          `https://ethglobal-project-backend.onrender.com/api/v1/sites/site-details`,
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

  // 1. On mount, read nextTokenIdToMint() and maxKilowatts() from the contract
  // useEffect(() => {
  //   const fetchSaleState = async () => {
  //     if (!nft.contractAddress) {
  //       console.warn("No contractAddress on NFT, skipping sale check");
  //       setSaleActive(false);
  //       setLoadingSaleInfo(false);
  //       return;
  //     }

  //     try {
  //       // Use a read-only provider (no wallet popup)
  //       const provider = new ethers.JsonRpcProvider(/* your RPC URL here */);
  //       const contract = new ethers.Contract(
  //         nft.contractAddress,
  //         NFT_ABI,
  //         provider
  //       );

  //       // Call both on-chain getters in parallel
  //       const [nextIdBN, maxKWBN] = await Promise.all([
  //         contract.nextTokenIdToMint(),    // current next token id
  //         contract.maxKilowatts(),         // maximum supply
  //       ]);

  //       const nextId = nextIdBN.toNumber();
  //       const maxKW = maxKWBN.toNumber();

  //       setSaleActive(nextId <= maxKW);
  //       console.log(nextId, maxKW);

  //     } catch (err) {
  //       console.error("Error fetching sale state:", err);
  //       setSaleActive(false);
  //     } finally {
  //       setLoadingSaleInfo(false);
  //     }
  //   };

  //   fetchSaleState();
  // }, [nft.contractAddress]);

  useEffect(() => {
    const fetchSaleState = async () => {
      if (!nft.contractAddress) {
        console.warn("No contractAddress on NFT, skipping sale check");
        setSaleActive(false);
        setLoadingSaleInfo(false);
        return;
      }

      try {
        console.log("[SaleCheck] Fetching on‐chain data for", nft.contractAddress);
        // requires user to have MetaMask (for readRPC). 
        const provider = new BrowserProvider(window.ethereum);
        const contract = new ethers.Contract(nft.contractAddress, NFT_ABI, provider);

        // parallel fetch
        const [nextIdBN, maxKWBN] = await Promise.all([
          contract.nextTokenIdToClaim(),
          contract.maxKilowatts(),
        ]);

        console.log("[SaleCheck] nextTokenIdToMint (raw):", nextIdBN.toString());
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

  // useEffect(() => {
  //   const fetchSaleState = async () => {
  //     if (!nft.contractAddress) {
  //       console.warn("[SaleCheck] no contractAddress, skipping");
  //       setSaleActive(nft.isAvailable);
  //       setLoadingSaleInfo(false);
  //       return;
  //     }

  //     const provider = new BrowserProvider(window.ethereum);
  //     const contract = new ethers.Contract(nft.contractAddress, NFT_ABI, provider);

  //     let soldBN = 0n;
  //     try {
  //       soldBN = await contract.totalSold();
  //       console.log("[SaleCheck] totalSold:", soldBN);
  //     } catch (err) {
  //       console.error("[SaleCheck] totalSold() error:", err);
  //     }

  //     let maxKWBN = 0n;
  //     try {
  //       maxKWBN = await contract.maxKilowatts();
  //       console.log("[SaleCheck] maxKilowatts:", maxKWBN);
  //     } catch (err) {
  //       console.error("[SaleCheck] maxKilowatts() error:", err);
  //     }

  //     // if both calls succeeded, gate on sold < cap; otherwise fall back
  //     const active =
  //       soldBN > 0n && maxKWBN > 0n
  //         ? soldBN < maxKWBN
  //         : nft.isAvailable;
  //     console.log("[SaleCheck] saleActive:", active);

  //     setSaleActive(active);
  //     setLoadingSaleInfo(false);
  //   };

  //   fetchSaleState();
  // }, [nft.contractAddress, nft.isAvailable]);
  // Handle kWp change
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
        `https://ethglobal-project-backend.onrender.com/api/v1/payment/create/order`,
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

  const purchaseWithUSDC = async () => {
    if (!saleActive) {
      return alert("Sorry, all NFTs are sold out on-chain.");
    }
    if (kWp <= 0) {
      alert("Select at least 1 kWp");
      return;
    }

    try {
      // 1. Wallet connection
      if (!window.ethereum) {
        alert("Please install MetaMask");
        return;
      }

      const provider = new ethers.BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      const userAddress = await signer.getAddress();
      const USDC_TOKEN_ADDRESS = "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359";
      // const NFT_CONTRACT_ADDRESS = "0x78F4ed9aD9B09535150a755E160a282b2E1639C4";
      const NFT_CONTRACT_ADDRESS = "0x1dd4A8bd06188f42636Ee300F67170B01e6fF8cF";

      const usdc = new ethers.Contract(
        USDC_TOKEN_ADDRESS,
        [
          "function allowance(address, address) view returns (uint256)",
          "function approve(address, uint256) returns (bool)",
          "function balanceOf(address) view returns (uint256)",
        ],
        signer
      );
      const contractAddress = nft.contractAddress;
      if (!contractAddress) {
        throw new Error("Missing contract address for this site");
      }

      const nftContract = new ethers.Contract(
        contractAddress,
        NFT_ABI,
        signer
      );
      const contractPrice = await nftContract.pricePerNFT();
      console.log("price of nft", contractPrice);
      console.log("kWp", kWp);
      // eslint-disable-next-line no-undef
      const quantity = BigInt(kWp);
      console.log("quantity", quantity);
      const totalCost = contractPrice * quantity;
      console.log("totalCost", totalCost);
      const tokenIdCounter = await nftContract.totalSold();
      console.log("token Id counter", tokenIdCounter);
      const maxSupply = await nftContract.maxKilowatts();
      console.log("maxSupply", maxSupply);
      if (quantity > maxSupply - tokenIdCounter) {
        throw new Error(`Only ${maxSupply - tokenIdCounter} kWp remaining`);
      }
      // 4. Check USDC balance
      const balance = await usdc.balanceOf(userAddress);
      if (balance < totalCost) {
        throw new Error(
          `Insufficient USDC balance. Needed: ${ethers.formatUnits(
            totalCost,
            6
          )} USDC`
        );
      }

      // 5. Check and request approval
      const currentAllowance = await usdc.allowance(
        userAddress,
        NFT_CONTRACT_ADDRESS
      );
      // const quantity = parseInt(kWp);
      // if (isNaN(quantity)) throw new Error("Invalid quantity");
      if (!quantity || quantity <= 0) {
        throw new Error("Invalid quantity (must be a positive integer)");
      }

      const approveTx = await usdc.approve(nftContract.target, totalCost);
      await approveTx.wait();
      const postApprovalAllowance = await usdc.allowance(
        userAddress,
        NFT_CONTRACT_ADDRESS
      );
      console.log("Post-approval allowance:", postApprovalAllowance.toString());

      // Add 5-second block confirmation delay
      await new Promise((resolve) => setTimeout(resolve, 5000));

      // 6. Execute purchase after approval
      const tx = await nftContract.purchaseUSDC(quantity, {
        gasLimit: 1_000_000,
      });
      await tx.wait();

      // Wait for transaction confirmation
      const receipt = await tx.wait();
      if (receipt.status === 0) {
        throw new Error("Transaction failed");
      }

      alert("Purchase successful! 🎉");
      // Inside purchaseWithUSDC function after successful TX
      await fetch(
        `https://ethglobal-project-backend.onrender.com/api/v1/sites/site-details`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          // body: JSON.stringify({
          //   action: "buy",
          //   userId: userId,
          //   siteName: nft.title,
          //   kWp: kWp,
          //   paymentMethod: "usdc", // Add payment method
          // }),
          body: JSON.stringify({
            action: "buy",
            userId: userId,
            siteName: nft.title,
            kWp: kWp,
            paymentMethod: "usdc",
            consumerWallet: consumerWallet.trim(),
          }),
        }
      );
      setkWp(0);
      setTotalAmount(0);
    } catch (err) {
      console.error("USDC purchase failed:", err);
      alert(`USDC purchase failed: ${err.reason || err.message}`);
    }
  };

  // Verify payment and update backend
  const verifyPayment = async (response) => {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
      response;

    try {
      const verifyResponse = await fetch(
        `https://ethglobal-project-backend.onrender.com/api/v1/payment/verify/order`,
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

      // After successful payment, add the site
      await fetch(
        `https://ethglobal-project-backend.onrender.com/api/v1/sites/site-details`,
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
        `https://ethglobal-project-backend.onrender.com/api/v1/sites/site-details`,
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
        `https://ethglobal-project-backend.onrender.com/api/v1/mint`,
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
                  <span className="custom-label-2">Site: <span className="font-w400">{nft.title}</span></span>

                </p>
                <p className="font-w600 mb-2">
                  <span className="custom-label-2">Location: <span className="font-w400">{nft.subtitle}</span></span>

                </p>
                <p className="font-w600 mb-2">
                  <span className="custom-label-2">Plant Size: <span className="font-w400">{nft.plantSize}</span></span>

                </p>
                <p className="font-w600 mb-2">
                  <span className="custom-label-2">Total NFTs: <span className="font-w400">{nft.totalNFTs}</span></span>

                </p>
                <p className="font-w600 mb-2">
                  <span className="custom-label-2">Plant Date: <span className="font-w400">17 Aug 2024</span></span>

                </p>
                <p className="font-w600 mb-2">
                  <span className="custom-label-2">Tariff: <span className="font-w400">Rs. 4.75 per Unit</span></span>

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