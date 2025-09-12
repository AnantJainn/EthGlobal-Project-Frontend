// import React, { Fragment, useReducer } from "react";
// import { Link } from 'react-router-dom';
// import { Button, Dropdown, Modal, Tab, Nav } from "react-bootstrap";
// import profile08 from "./../../../images/profile/8.jpg";
// import profile09 from "./../../../images/profile/9.jpg";


// const Security = () => {

//     return (
//         <>
//             <div className="d-flex">
//                 {/* Sidebar */}
//                 <div
//                     className="fixed-sidebar bg-gray-200 p-4 shadow-md h-screen"
//                     style={{ width: "250px", display: "flex", flexDirection: "column" }}
//                 >
//                     <h4 className="text-lg font-bold mb-6">Profile</h4>
//                     <nav className="flex flex-col gap-4">
//                         <Link
//                             to="/security"
//                             className="btn btn-primary text-start w-full rounded-lg text-center mb-4"
//                         >
//                             Security
//                         </Link>
//                         <Link
//                             to="/verification"
//                             className="btn btn-primary text-start w-full rounded-lg text-center mb-4"
//                         >
//                             Verification
//                         </Link>
//                         <Link
//                             to="/settings"
//                             className="btn btn-primary text-start w-full rounded-lg text-center"
//                         >
//                             Settings
//                         </Link>
//                     </nav>
//                 </div>

//                 {/* Empty Main Content */}
//                 <div className="flex-1 ml-80">
//                     {/* Placeholder for future content */}
//                     <div className="col-xl-8">
//                         <div className="card">
//                             <div className="card-body">
//                                 <div className="profile-tab">
//                                     <div className="custom-tab-1">
//                                         <Tab.Container defaultActiveKey='Posts'>
                                            
//                                             <Tab.Content>
//                                                 <Tab.Pane id="my-posts" eventKey='Posts'>
//                                                 <div className="pt-3">
//                                                         <div className="settings-form">
//                                                             <h4 className="text-primary">Account Setting</h4>
//                                                             <form onSubmit={(e) => e.preventDefault()}>
//                                                                 <div className="row">
//                                                                     <div className="form-group mb-3 col-md-6">
//                                                                         <label className="form-label" >Email</label>
//                                                                         <input type="email" placeholder="Email" className="form-control" />
//                                                                     </div>
//                                                                     <div className="form-group mb-3 col-md-6">
//                                                                         <label className="form-label">Password</label>
//                                                                         <input type="password" placeholder="Password" className="form-control" />
//                                                                     </div>
//                                                                 </div>
//                                                                 <div className="form-group mb-3">
//                                                                     <label className="form-label">Address</label>
//                                                                     <input type="text" placeholder="1234 Main St" className="form-control" />
//                                                                 </div>
//                                                                 <div className="form-group mb-3">
//                                                                     <label className="form-label">Address 2</label>
//                                                                     <input type="text" placeholder="Apartment, studio, or floor" className="form-control" />
//                                                                 </div>
//                                                                 <div className="row">
//                                                                     <div className="form-group mb-3 col-md-6">
//                                                                         <label className="form-label" >City</label>
//                                                                         <input type="text" className="form-control" />
//                                                                     </div>
//                                                                     <div className="form-group mb-3 col-md-4">
//                                                                         <label className="form-label">State</label>
//                                                                         <select
//                                                                             className="form-control"
//                                                                             id="inputState"
//                                                                             defaultValue="option-1"
//                                                                         >
//                                                                             <option value="option-1">Choose...</option>
//                                                                             <option value="option-2">Option 1</option>
//                                                                             <option value="option-3">Option 2</option>
//                                                                             <option value="option-4">Option 3</option>
//                                                                         </select>
//                                                                     </div>
//                                                                     <div className="form-group mb-3 col-md-2">
//                                                                         <label className="form-label">Zip</label>
//                                                                         <input type="text" className="form-control" />
//                                                                     </div>
//                                                                 </div>
//                                                                 <div className="form-group mb-3">
//                                                                     <div className="form-check custom-checkbox">
//                                                                         <input
//                                                                             type="checkbox"
//                                                                             className="form-check-input"
//                                                                             id="gridCheck"
//                                                                         />
//                                                                         <label
//                                                                             className="form-check-label"
//                                                                             htmlFor="gridCheck"
//                                                                         >
//                                                                             Check me out
//                                                                         </label>
//                                                                     </div>
//                                                                 </div>
//                                                                 <button className="btn btn-primary" type="submit">Sign in</button>
//                                                             </form>
//                                                         </div>
//                                                     </div>
//                                                 </Tab.Pane>
                                                
//                                             </Tab.Content>
//                                         </Tab.Container>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//             </div>
//         </div >
//         </>
//     );
// };

// export default Security;




import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Form, ProgressBar, Button } from "react-bootstrap";

const Security = () => {
    return (
        <>
            <div className="d-flex">

                {/* Main Content */}
                <div className="flex-1 p-4">
                    <Row className="g-4">
                        {/* Account Setting Form */}
                        <Col lg={8} md={12}>
                            <Card className="p-4 shadow-lg">
                                <h4 className="text-primary mb-4">Account Setting</h4>
                                <Form>
                                    <Row>
                                        <Col md={6} className="mb-3">
                                            <Form.Label>Id</Form.Label>
                                            <Form.Control type="text" placeholder="Id" />
                                        </Col>
                                        <Col md={6} className="mb-3">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="email" placeholder="Email" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={6} className="mb-3">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" />
                                        </Col>
                                        <Col
                                            md={6}
                                            className="mb-3 d-flex align-items-center"
                                        >
                                            <i className="fa fa-pencil text-success me-2"></i>
                                            <a
                                                
                                                className="text-success"
                                                style={{ textDecoration: "none" }}
                                            >
                                                Change password
                                            </a>
                                        </Col>
                                    </Row>
                                </Form>
                            </Card>
                        </Col>

                        {/* Communication Language and Currency Section */}
                        <Col lg={4} md={12}>
                            <Row className="g-4">
                                {/* Communication Language Card */}
                                <Col xs={12}>
                                    <Card className="p-3 shadow-lg">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h6 className="text-primary m-0">
                                                Communication Language
                                            </h6>
                                            <div>
                                                <span className="text-dark me-3">En</span>
                                                <a href="" className="text-success">
                                                    Change
                                                </a>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>

                                {/* Currency Card */}
                                <Col xs={12}>
                                    <Card className="p-3 shadow-lg">
                                        <h6 className="text-primary m-0 mb-3">Currency</h6>
                                        <Form.Select
                                            aria-label="Currency selection"
                                            style={{ width: "100%" }}
                                        >
                                            <option value="USD">USD</option>
                                            <option value="EUR">EUR</option>
                                            <option value="INR">INR</option>
                                            <option value="GBP">GBP</option>
                                        </Form.Select>
                                    </Card>
                                </Col>
                                <Col xl={12} lg={6} md={6}>
          <Card>
            <Card.Header className=" d-block">
              <Card.Title>Your Verification status is</Card.Title>
            </Card.Header>
            <Card.Body>
              <ProgressBar now={60} variant="danger" />
              <Card.Text className="mb-0 subtitle">
                Level Details
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
                            </Row>
                        </Col>
                        <Col xl="7">
                            <Card className=" h-auto">
                                <Card.Header>
                                    <Card.Title>Delete Account</Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        Here's is the disclaimer. Please delete the account only when you are sure you have no pending funds on the system.
                                    </Card.Text>
                                    <Button
                                        as="a"
                                        variant="outline-danger"
                                        href="#"
                                        className="mt-3"
                                    >
                                        Delete
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
};

export default Security;





// import React from "react";
// import { Link } from "react-router-dom";

// const Security = () => {
//     return (
//         <>
//             <div className="d-flex">
//                 {/* Sidebar */}
//                 <div
//                     className="fixed-sidebar bg-gray-200 p-4 shadow-md h-screen"
//                     style={{ width: "250px", display: "flex", flexDirection: "column" }}
//                 >
//                     <h4 className="text-lg font-bold mb-6">Profile</h4>
//                     <nav className="flex flex-col gap-4">
//                         <Link
//                             to="/security"
//                             className="btn btn-primary text-start w-full rounded-lg text-center mb-4"
//                         >
//                             Security
//                         </Link>
//                         <Link
//                             to="/verification"
//                             className="btn btn-primary text-start w-full rounded-lg text-center mb-4"
//                         >
//                             Verification
//                         </Link>
//                         <Link
//                             to="/settings"
//                             className="btn btn-primary text-start w-full rounded-lg text-center"
//                         >
//                             Settings
//                         </Link>
//                     </nav>
//                 </div>

//                 {/* Main Content */}
//                 <div className="flex-1 d-flex justify-content-center align-items-start flex-wrap gap-4 p-4">
//                     <div
//                         className="card shadow-lg p-5 bg-gray-100 rounded"
//                         style={{ width: "45%" }}
//                     >
//                         <h4 className="text-primary text-center mb-4">Account Setting</h4>
//                         <form>
//                             <div className="row">
//                                 <div className="col-md-6 mb-3">
//                                     <label className="form-label">Email</label>
//                                     <input
//                                         type="email"
//                                         className="form-control"
//                                         placeholder="Email"
//                                     />
//                                 </div>
//                                 <div className="col-md-6 mb-3">
//                                     <label className="form-label">Password</label>
//                                     <input
//                                         type="password"
//                                         className="form-control"
//                                         placeholder="Password"
//                                     />
//                                 </div>
//                             </div>
//                             <div className="mb-3">
//                                 <label className="form-label">Id</label>
//                                 <input
//                                     type="text"
//                                     className="form-control"
//                                     placeholder="1234 Main St"
//                                 />
//                             </div>
                    
//                             <button type="submit" className="btn btn-primary w-100">
//                                 Sign in
//                             </button>
//                         </form>
//                     </div>
//                     <div className="flex-1">
//     <div className="container">
//         {/* Communication Language Card */}
//         <div
//             className="card shadow-lg p-4 bg-white rounded mb-4"
//             style={{
//                 width: "300px",
//                 margin: "0 auto",
//                 textAlign: "left",
//                 position: "relative",
//             }}
//         >
//             <h6 className="text-primary">Communication Language</h6>
//             <div
//                 className="d-flex justify-content-between align-items-center"
//                 style={{ marginTop: "10px" }}
//             >
//                 <span className="text-dark">En</span>
//                 <a href="#" className="text-success">
//                     Change
//                 </a>
//             </div>
//         </div>

//         {/* Currency Card */}
//         <div
//             className="card shadow-lg p-4 bg-white rounded"
//             style={{
//                 width: "300px",
//                 margin: "0 auto",
//                 textAlign: "left",
//                 position: "relative",
//             }}
//         >
//             <h6 className="text-primary">Currency</h6>
//             <div
//                 className="d-flex justify-content-between align-items-center"
//                 style={{ marginTop: "10px" }}
//             >
//                 <select
//                     className="form-select"
//                     style={{
//                         border: "1px solid #F28D8D",
//                         borderRadius: "8px",
//                         padding: "5px 10px",
//                         color: "#F28D8D",
//                     }}
//                 >
//                     <option value="USD">USD</option>
//                     <option value="EUR">EUR</option>
//                     <option value="INR">INR</option>
//                     <option value="GBP">GBP</option>
//                 </select>
//             </div>
//         </div>
//     </div>
// </div>

//                 </div>
//             </div>
//         </>
//     );
// };

// export default Security;
