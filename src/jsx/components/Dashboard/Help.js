// import React, { useState } from 'react';
// import CountUp from 'react-countup';
// import {
//     Row,
//     Col,
//     Card,
//     Dropdown,
// } from "react-bootstrap";
// import CanvasChartTab from '../Jobick/Home/CanvasChartTab';
// import PowerCanvasChartTab from '../Jobick/Home/PowerCanvasChartTab';
// import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
// import { Link } from "react-router-dom";



// // Random data for different dropdown options
// const randomData = {
//     Site1: {
//         sites: 4,
//         on: 4,
//         off: 0,
//         capacityKwp: 1918,
//         units: '51/51',
//         inverter: '47/47',
//         wms: '4/4',
//         co2Saved: 1352285.6,
//     },
//     Site2: {
//         sites: 6,
//         on: 5,
//         off: 1,
//         capacityKwp: 2100,
//         units: '53/55',
//         inverter: '46/47',
//         wms: '3/4',
//         co2Saved: 1420000.0,
//     },
//     Site3: {
//         sites: 3,
//         on: 3,
//         off: 0,
//         capacityKwp: 1800,
//         units: '48/48',
//         inverter: '45/45',
//         wms: '4/4',
//         co2Saved: 1250000.8,
//     }
// };

// const Help = () => {
//     // State for dropdown selection and corresponding data
//     const [selectedOption, setSelectedOption] = useState('Site1');
//     const [dropdownLabel, setDropdownLabel] = useState('Choose Site');
//     const [searchBut, setSearchBut] = useState(false);


//     const handleSelect = (key) => {
//         setSelectedOption(key);
//         setDropdownLabel(`${key}`);
//     };

//     const data = randomData[selectedOption];

//     return (
//         <>
//             <div className="col-xl-6 col-lg-12">
//                 <div className="card">
//                     <div className="card-header">
//                         <h4 className="card-title">Horizontal Form</h4>
//                     </div>
//                     <div className="card-body">
//                         <div className="basic-form">
//                             <form onSubmit={(e) => e.preventDefault()}>
//                                 <div className="row">
//                                     <div className="form-group mb-3 col-md-6">

//                                         <div id="multiselect">
//                                             <DropdownMultiselect
//                                                 options={["1", "2", "3", "4", "5", "6"]}
//                                             />
//                                         </div>
//                                     </div>
//                                     {/* <div className="form-group input-group-sm mb-3 col-md-6">
//                                         <input type="text"
//                                             className={`form-control ${searchBut ? "active" : ""}`}
//                                             placeholder="Search here"
//                                         />
//                                         <span className="input-group-text" onClick={() => setSearchBut(!searchBut)}>
//                                             <Link to={"#"}><i className="flaticon-381-search-2"></i></Link>
//                                         </span>
//                                     </div> */}
//                                     <div className="form-group input-group-sm mb-3 col-md-6">
//                                         <div className="input-group">
//                                             <input
//                                                 type="text"
//                                                 className={`form-control ${searchBut ? "active" : ""}`}
//                                                 placeholder="Search here"
//                                             />
//                                             <span
//                                                 className="input-group-text"
//                                                 onClick={() => setSearchBut(!searchBut)}
//                                                 style={{ cursor: "pointer" }}
//                                             >
//                                                 <Link to={"#"}>
//                                                     <i className="flaticon-381-search-2"></i>
//                                                 </Link>
//                                             </span>
//                                         </div>
//                                     </div>

//                                     <div className="form-group mb-3 col-md-6">
//                                         <label>First Name</label>
//                                         <input
//                                             type="text"
//                                             className="form-control"
//                                             placeholder="1234 Main St"
//                                         />
//                                     </div>
//                                     <div className="form-group mb-3 col-md-6">
//                                         <label>Email</label>
//                                         <input
//                                             type="email"
//                                             className="form-control"
//                                             placeholder="Email"
//                                         />
//                                     </div>
//                                     <div className="form-group mb-3 col-md-6">
//                                         <label>Password</label>
//                                         <input
//                                             type="password"
//                                             className="form-control"
//                                             placeholder="Password"
//                                         />
//                                     </div>
//                                     <div className="form-group mb-3 col-md-6">
//                                         <label>City</label>
//                                         <input type="text" className="form-control" />
//                                     </div>
//                                 </div>
//                                 <div className="row">
//                                     <div className="form-group mb-3 col-md-4">
//                                         <label>State</label>
//                                         <select
//                                             defaultValue={"option"}
//                                             id="inputState"
//                                             className="form-control"
//                                         >
//                                             <option value="option" disabled>
//                                                 Choose...
//                                             </option>
//                                             <option>Option 1</option>
//                                             <option>Option 2</option>
//                                             <option>Option 3</option>
//                                         </select>
//                                     </div>
//                                     <div className="form-group col-md-2">
//                                         <label>Zip</label>
//                                         <input type="text" className="form-control" />
//                                     </div>
//                                 </div>
//                                 <div className="form-group">
//                                     <div className="form-check">
//                                         <input className="form-check-input" type="checkbox" />
//                                         <label className="form-check-label">Check me out</label>
//                                     </div>
//                                 </div>
//                                 <button type="submit" className="btn btn-primary">
//                                     Sign in
//                                 </button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }
// export default Help;






// import React, { useState } from 'react';
// import {
//     Row,
//     Col,
//     Card,
//     Dropdown,
// } from "react-bootstrap";
// import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
// import { Link } from "react-router-dom";



// // Random data for different dropdown options
// const randomData = {
//     Site1: {
//         sites: 4,
//         on: 4,
//         off: 0,
//         capacityKwp: 1918,
//         units: '51/51',
//         inverter: '47/47',
//         wms: '4/4',
//         co2Saved: 1352285.6,
//     },
//     Site2: {
//         sites: 6,
//         on: 5,
//         off: 1,
//         capacityKwp: 2100,
//         units: '53/55',
//         inverter: '46/47',
//         wms: '3/4',
//         co2Saved: 1420000.0,
//     },
//     Site3: {
//         sites: 3,
//         on: 3,
//         off: 0,
//         capacityKwp: 1800,
//         units: '48/48',
//         inverter: '45/45',
//         wms: '4/4',
//         co2Saved: 1250000.8,
//     }
// };

// const Help = () => {
//     // State for dropdown selection and corresponding data
//     const [selectedOption, setSelectedOption] = useState('Site1');
//     const [dropdownLabel, setDropdownLabel] = useState('Choose Site');
//     const [searchBut, setSearchBut] = useState(false);


//     const handleSelect = (key) => {
//         setSelectedOption(key);
//         setDropdownLabel(`${key}`);
//     };

//     const data = randomData[selectedOption];

//     return (
//         <div
//             style={{
//                 display: "flex",
//                 justifyContent: "center",
//                 // alignItems: "center",
//                 height: "auto",
//                 backgroundColor: "#f9f9f9", // Optional for styling
//             }}
//         >
//             <div className="col-xl-6 col-lg-12">
//                 <div className="card">
//                     <div className="card-header">
//                         <h4 className="card-title">Horizontal Form</h4>
//                     </div>
//                     <div className="card-body">
//                         <div className="basic-form">
//                             <form onSubmit={(e) => e.preventDefault()}>
//                                 <div className="row">
//                                     <div className="form-group mb-3 col-md-6">
//                                         <div id="multiselect">
//                                             <DropdownMultiselect
//                                                 options={["1", "2", "3", "4", "5", "6"]}
//                                             />
//                                         </div>
//                                     </div>
//                                     <div className="form-group input-group-sm mb-3 col-md-6">
//                                         <div className="input-group">
//                                             <input
//                                                 type="text"
//                                                 className={`form-control ${searchBut ? "active" : ""}`}
//                                                 placeholder="Search here"
//                                             />
//                                             <span
//                                                 className="input-group-text"
//                                                 onClick={() => setSearchBut(!searchBut)}
//                                                 style={{ cursor: "pointer" }}
//                                             >
//                                                 <Link to={"#"}>
//                                                     <i className="flaticon-381-search-2"></i>
//                                                 </Link>
//                                             </span>
//                                         </div>
//                                     </div>
//                                     <Col xl="12">
//                                         <Card>
//                                             <Card.Header className=" border-0 pb-0">
//                                                 <Card.Title>Card title</Card.Title>
//                                             </Card.Header>
//                                             <Card.Body>
//                                                 <Card.Text>
//                                                     He lay on his armour-like back, and if he lifted his head a
//                                                     little he could see his brown belly, slightly domed and divided
//                                                     by arches into stiff <br /> sections. The bedding was hardly
//                                                     able to cover it and seemed ready to slide off any moment.
//                                                 </Card.Text>
//                                             </Card.Body>
//                                             <Card.Footer className=" border-0 pt-0">
//                                                 <Card.Text className=" d-inline">Card footer</Card.Text>
//                                                 <Card.Link href="#" className="float-end">
//                                                     Card link
//                                                 </Card.Link>
//                                             </Card.Footer>
//                                         </Card>
//                                     </Col>
//                                     <Col xl="12">
//                                         <Card>
//                                             <Card.Header className=" border-0 pb-0">
//                                                 <Card.Title>Card title</Card.Title>
//                                             </Card.Header>
//                                             <Card.Body>
//                                                 <Card.Text>
//                                                     He lay on his armour-like back, and if he lifted his head a
//                                                     little he could see his brown belly, slightly domed and divided
//                                                     by arches into stiff <br /> sections. The bedding was hardly
//                                                     able to cover it and seemed ready to slide off any moment.
//                                                 </Card.Text>
//                                             </Card.Body>
//                                             <Card.Footer className=" border-0 pt-0">
//                                                 <Card.Text className=" d-inline">Card footer</Card.Text>
//                                                 <Card.Link href="#" className="float-end">
//                                                     Card link
//                                                 </Card.Link>
//                                             </Card.Footer>
//                                         </Card>
//                                     </Col>
//                                     <Col xl="12">
//                                         <Card>
//                                             <Card.Header className=" border-0 pb-0">
//                                                 <Card.Title>Card title</Card.Title>
//                                             </Card.Header>
//                                             <Card.Body>
//                                                 <Card.Text>
//                                                     He lay on his armour-like back, and if he lifted his head a
//                                                     little he could see his brown belly, slightly domed and divided
//                                                     by arches into stiff <br /> sections. The bedding was hardly
//                                                     able to cover it and seemed ready to slide off any moment.
//                                                 </Card.Text>
//                                             </Card.Body>
//                                             <Card.Footer className=" border-0 pt-0">
//                                                 <Card.Text className=" d-inline">Card footer</Card.Text>
//                                                 <Card.Link href="#" className="float-end">
//                                                     Card link
//                                                 </Card.Link>
//                                             </Card.Footer>
//                                         </Card>
//                                     </Col>
//                                     {/* Repeat the Col for other cards */}
//                                 </div>
//                                 <Link to={"#"} className="btn btn-primary">
//                                     Go somewhere
//                                 </Link>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default Help;






import React, { useState } from 'react';
import {
    Row,
    Col,
    Card,
} from "react-bootstrap";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import { Link } from "react-router-dom";

// Random data for different dropdown options
const randomData = {
    Site1: { /* ... */ },
    Site2: { /* ... */ },
    Site3: { /* ... */ },
};

const Help = () => {
    const [selectedOption, setSelectedOption] = useState('Site1');
    const [dropdownLabel, setDropdownLabel] = useState('Choose Site');
    const [searchBut, setSearchBut] = useState(false);
    const [showAdditionalForm, setShowAdditionalForm] = useState(false); // State to toggle additional form

    const handleSelect = (key) => {
        setSelectedOption(key);
        setDropdownLabel(`${key}`);
    };

    const data = randomData[selectedOption];

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                height: "auto",
                backgroundColor: "#f9f9f9", // Optional for styling
            }}
        >
            <div className="col-xl-6 col-lg-12">
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">Horizontal Form</h4>
                    </div>
                    <div className="card-body">
                        <div className="basic-form">
                            <form onSubmit={(e) => e.preventDefault()}>
                                <div className="row">
                                    <div className="form-group mb-3 col-md-6">
                                        <div id="multiselect">
                                            <DropdownMultiselect
                                                options={["1", "2", "3", "4", "5", "6"]}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group input-group-sm mb-3 col-md-6">
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                className={`form-control ${searchBut ? "active" : ""}`}
                                                placeholder="Search here"
                                            />
                                            <span
                                                className="input-group-text"
                                                onClick={() => setSearchBut(!searchBut)}
                                                style={{ cursor: "pointer" }}
                                            >
                                                <Link to={"#"}>
                                                    <i className="flaticon-381-search-2"></i>
                                                </Link>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <Link
                                    to={"#"}
                                    className="btn btn-primary"
                                    onClick={() => setShowAdditionalForm(true)} // Show the additional form
                                >
                                    Go somewhere
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Additional Form Component */}
                {showAdditionalForm && (
                    <div className="card mt-4">
                        <div className="card-header">
                            <h4 className="card-title">Additional Form</h4>
                        </div>
                        <div className="card-body">
                            <div className="basic-form">
                                <form onSubmit={(e) => e.preventDefault()}>
                                    <div className="row">
                                        {/* <div className="form-group mb-3 col-md-6">
                                            <div id="multiselect">
                                                <DropdownMultiselect
                                                    options={["1", "2", "3", "4", "5", "6"]}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group input-group-sm mb-3 col-md-6">
                                            <div className="input-group">
                                                <input
                                                    type="text"
                                                    className={`form-control ${searchBut ? "active" : ""}`}
                                                    placeholder="Search here"
                                                />
                                                <span
                                                    className="input-group-text"
                                                    style={{ cursor: "pointer" }}
                                                >
                                                    <Link to={"#"}>
                                                        <i className="flaticon-381-search-2"></i>
                                                    </Link>
                                                </span>
                                            </div>
                                        </div> */}
                                        <div className="form-group mb-3 col-md-6">
                                            <label>First Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="1234 Main St"
                                            />
                                        </div>
                                        <div className="form-group mb-3 col-md-6">
                                            <label>Email</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Email"
                                            />
                                        </div>
                                        <div className="form-group mb-3 col-md-6">
                                            <label>Password</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder="Password"
                                            />
                                        </div>
                                        <div className="form-group mb-3 col-md-6">
                                            <label>City</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group mb-3 col-md-4">
                                            <label>State</label>
                                            <select
                                                defaultValue={"option"}
                                                id="inputState"
                                                className="form-control"
                                            >
                                                <option value="option" disabled>
                                                    Choose...
                                                </option>
                                                <option>Option 1</option>
                                                <option>Option 2</option>
                                                <option>Option 3</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-2">
                                            <label>Zip</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" />
                                            <label className="form-check-label">Check me out</label>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary">
                                        Sign in
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Help;
