import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const JobApplicationBlog = () => {
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
	const handleDownload = (rowData) => {
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
						<tr role="row" className="odd">
							<td className="wspace-no">Apr-2024</td>
							<td className="wspace-no">41,899 kWh</td>
							<td>01-05-2024</td>
							<td>Jordan@gmail.com</td>
							<td>1234598765</td>
							<td>24-01-2021</td>
							<td>Nicholas</td>
							<td><span className="btn btn-warning btn-sm btn-rounded">Pending</span></td>
							<td>10%</td>
							<td className="action-btn wspace-no">
								<span>
									<Link
										to="#"
										onClick={() =>
											handleDownload([
												'1',
												'Database analyst',
												'Jordan',
												'Jordan@gmail.com',
												'1234598765',
												'24-01-2021',
												'Nicholas',
												'Pending',
												'10%',
											])
										}
									>
										<i className="fas fa-download text-warning"></i>
									</Link>
								</span>
							</td>
						</tr>
					</tbody>
				</table>
				<div className="d-sm-flex text-center justify-content-between align-items-center">
					<div className="dataTables_info" id="example5_info">
						Showing {activePag.current * sort + 1} to{' '}
						{data.length > (activePag.current + 1) * sort
							? (activePag.current + 1) * sort
							: data.length}{' '}
						of {data.length} entries
					</div>
					<div className="dataTables_paginate paging_simple_numbers" id="example5_paginate">
						<Link
							to="/job-application"
							className="paginate_button previous disabled"
							onClick={() => activePag.current > 0 && onClick(activePag.current - 1)}
						>
							<i className="fa fa-angle-double-left" />
						</Link>
						<span>
							{paggination.map((number, i) => (
								<Link
									key={i}
									to="/job-application"
									className={`paginate_button  ${activePag.current === i ? 'current' : ''}`}
									onClick={() => onClick(i)}
								>
									{number}
								</Link>
							))}
						</span>
						<Link
							to="/job-application"
							className="paginate_button next"
							onClick={() => activePag.current + 1 < paggination.length && onClick(activePag.current + 1)}
						>
							<i className="fa fa-angle-double-right" />
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default JobApplicationBlog;
