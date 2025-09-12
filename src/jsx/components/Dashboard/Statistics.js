import React, { useState, useEffect, useRef } from "react";
import { Row, Col, Card, Dropdown, Button, Modal, Form } from "react-bootstrap";
import { saveAs } from "file-saver";  // For CSV file download
import jsPDF from "jspdf";  // For PDF file download
import 'jspdf-autotable';  // For table formatting in PDF
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import CanvasChartTab from '../Jobick/Home/CanvasChartTab';


const randomData = {
	Site1: {
		investmentDetails: {
			investment: '₹7,50,000.00',
			dateOfInvestment: '24 February 2024',
			totalReturn: '₹74,323.51',
			roi: '9.91%',
		},
		plantDetails: {
			totalPlantSize: '400 kWp',
			totalPlantValue: '₹1,00,00,000.00',
			plantOwned: '40 kWp',
			dateOfCommissioning: '10 April 2024',
			pricePerKwh: '₹4.60',
		}
	},
	Site2: {
		investmentDetails: {
			investment: '₹10,00,000.00',
			dateOfInvestment: '15 March 2023',
			totalReturn: '₹90,000.00',
			roi: '9.00%',
		},
		plantDetails: {
			totalPlantSize: '500 kWp',
			totalPlantValue: '₹1,20,00,000.00',
			plantOwned: '50 kWp',
			dateOfCommissioning: '12 May 2023',
			pricePerKwh: '₹4.20',
		}
	},
	Site3: {
		investmentDetails: {
			investment: '₹5,50,000.00',
			dateOfInvestment: '05 January 2024',
			totalReturn: '₹50,000.00',
			roi: '9.10%',
		},
		plantDetails: {
			totalPlantSize: '300 kWp',
			totalPlantValue: '₹90,00,000.00',
			plantOwned: '30 kWp',
			dateOfCommissioning: '21 June 2022',
			pricePerKwh: '₹4.00',
		}
	}
};

const tableData = [
	{
		month: 'Apr-2024',
		billedUnits: '41,899 kWh',
		dateOfBilling: '01-05-2024',
		billedAmount: '₹30,000',
		omExpenses: '₹2,000',
		netAmount: '₹28,000',
		return: '₹3,000',
		dateOfReceipt: '05-05-2024',
		roi: '10%',
	},
	{
		month: 'May-2024',
		billedUnits: '42,000 kWh',
		dateOfBilling: '01-06-2024',
		billedAmount: '₹32,000',
		omExpenses: '₹2,500',
		netAmount: '₹29,500',
		return: '₹3,500',
		dateOfReceipt: '05-06-2024',
		roi: '12%',
	},
	{
		month: 'May-2024',
		billedUnits: '42,000 kWh',
		dateOfBilling: '01-06-2024',
		billedAmount: '₹32,000',
		omExpenses: '₹2,500',
		netAmount: '₹29,500',
		return: '₹3,500',
		dateOfReceipt: '05-06-2024',
		roi: '12%',
	},
	{
		month: 'May-2024',
		billedUnits: '42,000 kWh',
		dateOfBilling: '01-06-2024',
		billedAmount: '₹32,000',
		omExpenses: '₹2,500',
		netAmount: '₹29,500',
		return: '₹3,500',
		dateOfReceipt: '05-06-2024',
		roi: '12%',
	},
	// Add more data as necessary
];

const Statistics = () => {
	const [selectedOption, setSelectedOption] = useState('Site1');
	const [dropdownLabel, setDropdownLabel] = useState('Choose Site');
	const [showModal, setShowModal] = useState(false);
	const [fileType, setFileType] = useState("pdf");
	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");
	const [selectedFields, setSelectedFields] = useState({
		month: true,
		billedUnits: true,
		dateOfBilling: true,
		billedAmount: true,
		omExpenses: true,
		netAmount: true,
		return: true,
		dateOfReceipt: true,
		roi: true,
	});

	const handleSelect = (key) => {
		setSelectedOption(key);
		setDropdownLabel(`${key}`);
	};

	const handleDownload = () => {
		setShowModal(true);
	};

	const handleFileDownload = () => {
		const investmentData = randomData[selectedOption].investmentDetails;
		const plantData = randomData[selectedOption].plantDetails;

		if (fileType === "pdf") {
			const doc = new jsPDF();
			doc.setFontSize(12);
			doc.text("Investment Details", 10, 10);

			// Investment Details Section
			doc.autoTable({
				head: [['Investment Details', 'Plant Details']],
				body: [
					[
						`Investment: ${investmentData.investment}\nDate of Investment: ${investmentData.dateOfInvestment}\nTotal Return: ${investmentData.totalReturn}\nROI: ${investmentData.roi}`,
						`Total Plant Size: ${plantData.totalPlantSize}\nTotal Plant Value: ${plantData.totalPlantValue}\nPlant Owned: ${plantData.plantOwned}\nDate of Commissioning: ${plantData.dateOfCommissioning}\nPrice per kWh: ${plantData.pricePerKwh}`
					]
				]
			});

			// Save the PDF
			doc.save(`InvestmentDetails_${selectedOption}.pdf`);

		} else if (fileType === "csv") {
			// CSV content for investment and plant details only
			const investmentDetailsCsv = [
				`Investment Details for ${selectedOption}`,
				`Investment,${investmentData.investment}`,
				`Date of Investment,${investmentData.dateOfInvestment}`,
				`Total Return,${investmentData.totalReturn}`,
				`ROI,${investmentData.roi}`,
				'',
				'Plant Details',
				`Total Plant Size,${plantData.totalPlantSize}`,
				`Total Plant Value,${plantData.totalPlantValue}`,
				`Plant Owned,${plantData.plantOwned}`,
				`Date of Commissioning,${plantData.dateOfCommissioning}`,
				`Price per kWh,${plantData.pricePerKwh}`,
				''
			].join('\n');

			// Create CSV Blob
			const blob = new Blob([`\uFEFF${investmentDetailsCsv}`], { type: "text/csv;charset=utf-8" });
			saveAs(blob, `InvestmentDetails_${selectedOption}.csv`);
		}

		setShowModal(false);
	};



	const handleFieldSelection = (e) => {
		const { name, checked } = e.target;
		setSelectedFields((prevFields) => ({
			...prevFields,
			[name]: checked,
		}));
	};

	const data1 = randomData[selectedOption];

	const [data, setData] = useState(document.querySelectorAll('#application-data tbody tr'));
	const sort = 8;
	const activePag = useRef(0);
	const [test, settest] = useState(0);

	// Active data
	const chageData = (frist, sec) => {
		for (var i = 0; i < data.length; ++i) {
			if (i >= frist && i < sec) {
				data[i].classList.remove('d-none');
			} else {
				data[i].classList.add('d-none');
			}
		}
	};

	// useEffect
	useEffect(() => {
		setData(document.querySelectorAll('#application-data tbody tr'));
	}, [test]);

	// Active pagginarion
	activePag.current === 0 && chageData(0, sort);

	// Pagination
	let paggination = Array(Math.ceil(data.length / sort))
		.fill()
		.map((_, i) => i + 1);

	// Active pagination & change data
	const onClick = (i) => {
		activePag.current = i;
		chageData(activePag.current * sort, (activePag.current + 1) * sort);
		settest(i);
	};

	// Function to handle downloading of row data
	const handleDownload1 = (rowData) => {
		// Convert the row data to CSV format (or any other format you prefer)
		const csvContent = `data:text/csv;charset=utf-8,Month,Billed Units,Date of Billing,Billed Amount,O&M Expenses,Net Amount,Return,Date of Receipt,ROI\n${rowData.join(',')}`;

		// Create a download link and trigger the download
		const encodedUri = encodeURI(csvContent);
		const link = document.createElement('a');
		link.setAttribute('href', encodedUri);
		link.setAttribute('download', 'row_data.csv');
		document.body.appendChild(link); // Required for Firefox

		link.click();
	};

	return (
		<>
			<div className="row">
				<div className="col-xl-12 mt-4">
					<div className="row">
						<div className="col-xl-12">
							<div className="card">
								<div className="card-body">
									<div className="row shapreter-row">
										<div className="col-xl-3 col-lg-3 col-sm-6 col-6">
											<div className="static-icon">
												<span>
													<i className="fas fa-eye"></i>
												</span>
												<h3 className="count mb-0">
													<CountUp end={3750000} duration={2} />
												</h3>
												<span className="fs-14">Investment</span>
											</div>
										</div>
										<div className="col-xl-3 col-lg-3 col-sm-6 col-6">
											<div className="static-icon">
												<span>
													<i className="far fa-comments"></i>
												</span>
												<h3 className="count mb-0">
													<CountUp end={639000} duration={3} />
												</h3>
												<span className="fs-14">Total Return</span>
											</div>
										</div>
										<div className="col-xl-3 col-lg-3 col-sm-6 col-6">
											<div className="static-icon">
												<span>
													<i className="fas fa-suitcase"></i>
												</span>
												<h3 className="count mb-0">
													<CountUp end={17.04} duration={5} />
												</h3>
												<span className="fs-14">ROI %</span>
											</div>
										</div>
										<div className="col-xl-3 col-lg-3 col-sm-6 col-6">
											<div className="static-icon">
												<span>
													<i className="fas fa-phone-alt"></i>
												</span>
												<h3 className="count mb-0">
													<CountUp end={1250} duration={2} />
												</h3>
												<span className="fs-14">NFTs OWNED</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-12 d-flex align-items-center">
							<div className="basic-dropdown me-3">
								<Dropdown onSelect={handleSelect}>
									<Dropdown.Toggle variant="primary">
										{dropdownLabel}
									</Dropdown.Toggle>
									<Dropdown.Menu>
										<Dropdown.Item eventKey="Site1">Site 1</Dropdown.Item>
										<Dropdown.Item eventKey="Site2">Site 2</Dropdown.Item>
										<Dropdown.Item eventKey="Site3">Site 3</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</div>
							<Button className="ms-auto" variant="success" onClick={handleDownload}>Export</Button>
						</div>
					</div>

					<Row className="mt-4">
						<Col xl={6}>
							<Card>
								<Card.Header> {/* Reduce padding */}
									<Card.Title>Investment Details</Card.Title>
								</Card.Header>
								<Card.Body className="p-1"> {/* Reduce padding */}
									<ul className="list-group list-group-flush">
										<li className="list-group-item mb-1"> {/* Reduce margin-bottom */}
											<span className="mb-0 title fw-bold" style={{ fontSize: '1.2rem' }}>Investment</span> :
											<span className="text-black ms-2" style={{ fontSize: '1.1rem' }}>{data1.investmentDetails.investment}</span>
										</li>
										<li className="list-group-item mb-1"> {/* Reduce margin-bottom */}
											<span className="mb-0 title fw-bold" style={{ fontSize: '1.2rem' }}>Date of Investment</span> :
											<span className="text-black ms-2" style={{ fontSize: '1.1rem' }}>{data1.investmentDetails.dateOfInvestment}</span>
										</li>
										<li className="list-group-item mb-1"> {/* Reduce margin-bottom */}
											<span className="mb-0 title fw-bold" style={{ fontSize: '1.2rem' }}>Total Return</span> :
											<span className="text-black ms-2" style={{ fontSize: '1.1rem' }}>{data1.investmentDetails.totalReturn}</span>
										</li>
										<li className="list-group-item mb-1"> {/* Reduce margin-bottom */}
											<span className="mb-0 title fw-bold" style={{ fontSize: '1.2rem' }}>ROI</span> :
											<span className="text-black ms-2" style={{ fontSize: '1.1rem' }}>{data1.investmentDetails.roi}</span>
										</li>
									</ul>
								</Card.Body>
							</Card>
						</Col>


						<Col xl={6}>
							<Card>
								<Card.Header>
									<Card.Title>Plant Details</Card.Title>
								</Card.Header>
								
								<Card.Body className="p-1">
									<ul className="list-group list-group-flush">
										<li className="list-group-item">
											<span className="mb-0 title fw-bold" style={{ fontSize: '1.2rem' }}>Total Plant Size</span> :
											<span className="text-black ms-2" style={{ fontSize: '1.1rem' }}>{data1.plantDetails.totalPlantSize}</span>
										</li>
										<li className="list-group-item">
											<span className="mb-0 title fw-bold" style={{ fontSize: '1.2rem' }}>Total Plant Value</span> :
											<span className="text-black ms-2" style={{ fontSize: '1.1rem' }}>{data1.plantDetails.totalPlantValue}</span>
										</li>
										<li className="list-group-item">
											<span className="mb-0 title fw-bold" style={{ fontSize: '1.2rem' }}>Plant Owned</span> :
											<span className="text-black ms-2" style={{ fontSize: '1.1rem' }}>{data1.plantDetails.plantOwned}</span>
										</li>
										<li className="list-group-item">
											<span className="mb-0 title fw-bold" style={{ fontSize: '1.2rem' }}>Date of Commissioning</span> :
											<span className="text-black ms-2" style={{ fontSize: '1.1rem' }}>{data1.plantDetails.dateOfCommissioning}</span>
										</li>
										<li className="list-group-item">
											<span className="mb-0 title fw-bold" style={{ fontSize: '1.2rem' }}>Price per kWh</span> :
											<span className="text-black ms-2" style={{ fontSize: '1.1rem' }}>{data1.plantDetails.pricePerKwh}</span>
										</li>
									</ul>
								</Card.Body>

							</Card>
						</Col>
					</Row>
				</div>
			</div>

			{/* Modal for downloading data */}
			// Updated modal with site selection
			<Modal show={showModal} onHide={() => setShowModal(false)}>
				<Modal.Header closeButton>
					<Modal.Title>Download Data</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group controlId="formStartDate">
							<Form.Label>Start Date</Form.Label>
							<Form.Control
								type="date"
								value={startDate}
								onChange={(e) => setStartDate(e.target.value)}
							/>
						</Form.Group>
						<Form.Group controlId="formEndDate" className="mt-2">
							<Form.Label>End Date</Form.Label>
							<Form.Control
								type="date"
								value={endDate}
								onChange={(e) => setEndDate(e.target.value)}
							/>
						</Form.Group>
						<Form.Group controlId="formFileType" className="mt-2">
							<Form.Label>File Type</Form.Label>
							<Form.Control
								as="select"
								value={fileType}
								onChange={(e) => setFileType(e.target.value)}
							>
								<option value="pdf">PDF</option>
								<option value="csv">CSV</option>
							</Form.Control>
						</Form.Group>

						{/* Site selection checkboxes */}
						<Form.Group className="mt-3">
							<Form.Label>Select Site to Download Data</Form.Label>
							{['Site1', 'Site2', 'Site3'].map((site) => (
								<Form.Check
									key={site}
									type="radio"
									label={site}
									name="site"
									value={site}
									checked={selectedOption === site}
									onChange={() => setSelectedOption(site)}
								/>
							))}
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={() => setShowModal(false)}>
						Close
					</Button>
					<Button variant="primary" onClick={handleFileDownload}>
						Download
					</Button>
				</Modal.Footer>
			</Modal>

			<div className="col-xl-12">
				<div className="row">
					<div className="col-xl-12">
						<div className="table-responsive dataTables_wrapper" id="application-data">
							<table className="table display mb-4 dataTablesCard job-table table-responsive-xl card-table dataTable no-footer" id="example5">
								<thead>
									<tr role="row">
										<th className="sorting_asc">Month</th>
										<th className="sorting_asc">Billed Units</th>
										<th className="sorting_asc">Date of Billing</th>
										<th className="sorting_asc">Billed Amount</th>
										<th className="sorting_asc">O&M Expenses</th>
										<th className="sorting_asc">Net Amount</th>
										<th className="sorting_asc">Return</th>
										<th className="sorting_asc">Date of Receipt</th>
										<th className="sorting_asc">ROI</th>
										<th className="sorting_asc text-center">Actions</th>
									</tr>
								</thead>
								<tbody>
									{tableData.map((row, index) => (
										<tr key={index} role="row" className="odd">
											<td className="wspace-no">{row.month}</td>
											<td className="wspace-no">{row.billedUnits}</td>
											<td>{row.dateOfBilling}</td>
											<td>{row.billedAmount}</td>
											<td>{row.omExpenses}</td>
											<td>{row.netAmount}</td>
											<td>{row.return}</td>
											<td>{row.dateOfReceipt}</td>
											<td>{row.roi}</td>
											<td className="action-btn wspace-no text-center">
												<span>
													<Link
														to="#"
														onClick={() => handleDownload1([
															row.month,
															row.billedUnits,
															row.dateOfBilling,
															row.billedAmount,
															row.omExpenses,
															row.netAmount,
															row.return,
															row.dateOfReceipt,
															row.roi,
														])}
													>
														<i className="fas fa-download text-warning"></i>
													</Link>
												</span>
											</td>
										</tr>
									))}
								</tbody>
							</table>
							<div className="d-sm-flex text-center justify-content-between align-items-center">
								<div className="dataTables_info" id="example5_info">
									Showing 1 to {tableData.length} of {tableData.length} entries
								</div>
								<div className="dataTables_paginate paging_simple_numbers" id="example5_paginate">
									{/* Pagination can be added here if necessary */}
									<Link to="#" className="paginate_button previous disabled">
										<i className="fa fa-angle-double-left" />
									</Link>
									<span>
										<Link to="#" className="paginate_button current">1</Link>
									</span>
									<Link to="#" className="paginate_button next">
										<i className="fa fa-angle-double-right" />
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="col-xl-12">
				<div className="row">
					<div className="col-xl-12">
						<CanvasChartTab />
					</div>
				</div>
			</div>
		</>
	);
};

export default Statistics;
