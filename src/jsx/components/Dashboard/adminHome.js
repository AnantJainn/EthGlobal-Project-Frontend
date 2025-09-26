import React, { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

const AdminDashboard = () => {
  const { changeBackground } = useContext(ThemeContext);

  const [totalServices, setTotalServices] = useState(0);
  const [pendingServices, setPendingServices] = useState(0);
  const [approvedServices, setApprovedServices] = useState(0);
  const [revenue, setRevenue] = useState(0);

  // Form state
  const [serviceName, setServiceName] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    changeBackground({ value: "light", label: "Light" });

    // Simulate fetching admin metrics
    setTotalServices(12);
    setPendingServices(3);
    setApprovedServices(9);
    setRevenue(150000);
  }, []);

  const handleAddService = async (e) => {
    e.preventDefault();

    const newService = {
      serviceName,
      serviceDescription,
      price,
    };

    try {
      const response = await fetch(
        "https://ethglobal-project-backend.onrender.com/api/v1/services",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newService),
        }
      );

      if (!response.ok) throw new Error("Failed to add service");

      const data = await response.json();
      console.log("✅ Service added:", data);

      // Reset form
      setServiceName("");
      setServiceDescription("");
      setPrice("");

      // Update metrics UI
      setTotalServices((prev) => prev + 1);
      setPendingServices((prev) => prev + 1);

      alert("Service added successfully!");
    } catch (error) {
      console.error("🚨 Error adding service:", error);
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-xl-12">
          <div className="row">
            {/* TOTAL SERVICES */}
            <div className="col-sm-3">
              <div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
                <div>
                  <h3 className="mb-0 lh-1">{totalServices}</h3>
                  <span className="fs-14 d-block">TOTAL SERVICES</span>
                </div>
              </div>
            </div>

            {/* PENDING SERVICES */}
            <div className="col-sm-3">
              <div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
                <div>
                  <h3 className="mb-0 lh-1">{pendingServices}</h3>
                  <span className="fs-14 d-block">PENDING APPROVAL</span>
                </div>
              </div>
            </div>

            {/* APPROVED SERVICES */}
            <div className="col-sm-3">
              <div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
                <div>
                  <h3 className="mb-0 lh-1">{approvedServices}</h3>
                  <span className="fs-14 d-block">APPROVED SERVICES</span>
                </div>
              </div>
            </div>

            {/* REVENUE */}
            <div className="col-sm-3">
              <div className="job-icon d-flex justify-content-center align-items-center text-center border p-3">
                <div>
                  <h3 className="mb-0 lh-1">₹{revenue}</h3>
                  <span className="fs-14 d-block">TOTAL REVENUE</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ADD SERVICE FORM */}
        <div className="col-xl-12 mt-4">
          <div className="border p-4">
            <h4 className="mb-3">➕ Add New Service</h4>
            <form onSubmit={handleAddService}>
              <div className="mb-3">
                <label className="form-label">Service Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={serviceName}
                  onChange={(e) => setServiceName(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                  className="form-control"
                  value={serviceDescription}
                  onChange={(e) => setServiceDescription(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Price</label>
                <input
                  type="number"
                  className="form-control"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Add Service
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
