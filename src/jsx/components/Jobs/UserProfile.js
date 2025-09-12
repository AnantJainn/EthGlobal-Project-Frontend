import React from 'react';
import { Link } from 'react-router-dom';

import user from './../../../images/user.jpg';

import { Fragment } from 'react'

/// Page Title
import PageTitle from '../../layouts/PageTitle'

/// Images
import img1 from '../../../images/big/img1.jpg'
import img2 from '../../../images/big/img2.jpg'
import img3 from '../../../images/big/img3.jpg'
import img4 from '../../../images/big/img4.jpg'
import img5 from '../../../images/big/img5.jpg'
import img6 from '../../../images/big/img6.jpg'
import img7 from '../../../images/big/img7.jpg'

/// Bootstrap
import { Row, Col, Card, Carousel, Accordion } from 'react-bootstrap'

const UserProfile = () => {
	const carousel1 = [img1, img2, img3]
	const defaultAccordion = [
		{
			title: "About the Project",
			text: `
				<p><strong>When is the ………………….?</strong><br />The commissioning date is on 15th August 2024.</p>
				<p><strong>Which make panels were used in the project?</strong><br />The project used ABC brand panels for solar power generation.</p>
			`,
			bg: "primary",
		},
		{
			title: "About the NFTs",
			text: `
				<p><strong>What is the total number of NFTs available?</strong><br />There are 64 NFTs available for this project.</p>
				<p><strong>How can I purchase NFTs?</strong><br />You can purchase NFTs through our official website by following the buy process.</p>
			`,
			bg: "info",
		},
		{
			title: "About Maintenance",
			text: `
				<p><strong>Who is responsible for maintenance?</strong><br />The maintenance is handled by XYZ company under a 5-year contract.</p>
				<p><strong>How often is maintenance performed?</strong><br />Maintenance is performed quarterly to ensure optimal performance.</p>
			`,
			bg: "success",
		},
	];


	return (
		<>
			<div className="d-flex align-items-center mb-4">
				<h3 className="mb-0 me-auto">NFT ABCD</h3>
				{/* <div>
					<Link to={"#"} className="btn btn-secondary btn-sm me-3" > <i className="fas fa-envelope"></i></Link>
					<Link to={"#"} className="btn btn-secondary btn-sm me-3" ><i className="fas fa-phone-alt"></i></Link>
					<Link to={"#"} className="btn btn-primary btn-sm" ><i className="fas fa-info"></i></Link>
				</div> */}
			</div>
			<div className="row">
				<div className="col-xl-12">
					<div className="card">
						<div className="card-header border-0 flex-wrap align-items-start">
							<div className="col-md-11">
								<div className="user d-sm-flex d-block pe-md-5 pe-0">
									<img src={user} style={{height: "250px", width: "auto"}} alt="" />
									<div className="ms-sm-3 ms-0 me-md-5 md-0">
										<h5 className="mb-1 font-w600"><Link to={"#"}>NFTs Available: 64</Link></h5>
										<p>A data analyst collects, interprets and visualizes data to uncover insights. A data analyst assigns a numerical value to business functions so performance.</p>
										<p>A data analyst collects, interprets and visualizes data to uncover insights. A data analyst assigns a numerical value to business functions so performance.</p>
										<p>A data analyst collects, interprets and visualizes data to uncover insights. A data analyst assigns a numerical value to business functions so performance.</p>
									</div>
								</div>
							</div>
							<div className="col-md-1 col-12 text-end">
								<Link to={"#"} className="btn btn-lg btn-success me-2">Buy</Link>
								{/* <Link to={"#"} className="btn btn-sm btn-info">Hire</Link> */}

							</div>
						</div>
						<div className="card-body pt-0">
							<h4 className="fs-20">Description</h4>
							<div className="row">
								<div className="col-xl-4 col-md-6">
									<p className="font-w600 mb-2 d-flex"><span className="custom-label-2">Site : </span><span className="font-w400">ABCD</span></p>
									<p className="font-w600 mb-2 d-flex"><span className="custom-label-2">Location : </span><span className="font-w400">Indore</span></p>
									<p className="font-w600 mb-2 d-flex"><span className="custom-label-2">Plant Size : </span><span className="font-w400">200 kWp</span></p>
									<p className="font-w600 mb-2 d-flex"><span className="custom-label-2">Total NFTs : </span><span className="font-w400">300</span></p>
									<p className="font-w600 mb-2 d-flex"><span className="custom-label-2">Plant Commissioning Date : </span><span className="font-w400">17 Aug 2024</span></p>
									<p className="font-w600 mb-2 d-flex"><span className="custom-label-2">Tarrif : </span><span className="font-w400">Rs. 4.75 per Unit</span></p>
								</div>
								<div className="col-xl-8 col-md-6">
									<div className="card">
										<div className="card-body">
											<div className="row">
												{/* Upper Row Cards */}
												<div className="col-sm-4">
													<div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
														<div>
															<h3 className="mb-0 lh-1">300kWp</h3>
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
															<span className="fs-14 d-block">Date of Commisioning</span>
														</div>
													</div>
												</div>

												{/* Lower Row Cards with Spacing (Added margin-top) */}
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
															<span className="fs-14 d-block">return</span>
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
						<Col xl={8} className="mx-auto">  {/* Added mx-auto to center the column */}
							<Card>
								<Card.Body className='p-4'>
									<h4 className='card-intro-title'>Photos</h4>
									<div className="d-flex justify-content-center">  {/* Added to center the carousel */}
										<Carousel>
											{carousel1.map((carousel, i) => (
												<Carousel.Item key={i}>
													<img
														src={carousel}
														className='d-block w-100'
														alt={`Slide ${i + 1}`}
													/>
												</Carousel.Item>
											))}
										</Carousel>
									</div>
								</Card.Body>
							</Card>
						</Col>

						<div className="card-footer">
							<h3 className="d-block mb-4"><strong>Documents</strong></h3>
							<div className="row">
								<div className="col-md-3 text-center mb-4">
									<Link to={"#"} className="d-block text-center">
										<i className="fas fa-file-alt fa-3x mb-2"></i> {/* File Icon */}
										<span>Power Purchase Agreement (PPA)</span>
									</Link>
								</div>
								<div className="col-md-3 text-center mb-4">
									<Link to={"#"} className="d-block text-center">
										<i className="fas fa-file-alt fa-3x mb-2"></i> {/* File Icon */}
										<span>Lease Agreement</span>
									</Link>
								</div>
								<div className="col-md-3 text-center mb-4">
									<Link to={"#"} className="d-block text-center">
										<i className="fas fa-clipboard fa-3x mb-2"></i> {/* Clipboard Icon */}
										<span>Commissioning Report</span>
									</Link>
								</div>
								<div className="col-md-3 text-center mb-4">
									<Link to={"#"} className="d-block text-center">
										<i className="fas fa-file-invoice fa-3x mb-2"></i> {/* Invoice Icon */}
										<span>Latest Bill</span>
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
									<Accordion className="col-xl-6 accordion accordion-rounded-stylish accordion-gradient" defaultActiveKey="0">
										{defaultAccordion.map((d, i) => (
											<Accordion.Item key={i} eventKey={`${i}`}>
												<Accordion.Header className="accordion-header accordion-header--primary">
													<span className="accordion-header-icon"></span>
													<span className="accordion-header-text">{d.title}</span>
													<span className="accordion-header-indicator"></span>
												</Accordion.Header>
												<Accordion.Collapse eventKey={`${i}`} className="accordion__body">
													{/* Use dangerouslySetInnerHTML to render HTML inside the accordion-body */}
													<div
														className="accordion-body"
														dangerouslySetInnerHTML={{ __html: d.text }} // Updated this part
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
			</div>
		</>
	)
}
export default UserProfile;