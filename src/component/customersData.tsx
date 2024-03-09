import React, { useState, useEffect, ChangeEvent } from "react";
import { customers, Customer } from "../data"; // Adjust the import path based on your structure
import "../App.css";

const CustomerData: React.FC = () => {
  const [customerData, setCustomerData] = useState<Customer[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    setCustomerData(customers);
  }, []);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleRemoveService = (customerIndex: number, serviceIndex: number) => {
    const customerCopy = [...customerData];
    let customerServices = customerCopy[customerIndex].services;
    customerServices.splice(serviceIndex, 1);
    setCustomerData(customerCopy);
  };


  const filteredCustomers = customerData.filter((customer) => {
    return (
      customer.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.services.some(
        (service) =>
          service.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
          service.code.toString().includes(searchQuery)
      )
    );
  });

  return (
    <div>
      <div className="container">
        <div className="app-block">
          <h1>Customer Auto Track</h1>
          <div className="form-group search">
            <i className="fa fa-search"></i>
            <input
              className="form-control input-search"
              type="text"
              placeholder="Search customers..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>

          {filteredCustomers.length > 0 ? (
            filteredCustomers.map((customer, index) => (
              <div className="customer-list" key={index}>
                <h2 className="customer-title">
                <span className="customer-icon"><i className="bi bi-person-circle"></i>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          className="bi bi-person-circle"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                          <path
                            fill-rule="evenodd"
                            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                          />
                        </svg>
                      </span>{customer.firstName} {customer.lastName}
                </h2>
                <div className="customer-date">
                  <ul className="customer-date__list">
                  <li>{customer.year}</li>
                  <li>{customer.make}</li>
                  <li>{customer.model}</li>  
                </ul>
                </div>
                <ul className="service-list">
                  {customer.services.map((service, serviceIndex) => (
                    <li key={serviceIndex}>
                      {" "}
                      {service.code}: {service.desc} on {service.date} costing $
                      {service.cost}{" "}
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleRemoveService(index, serviceIndex)}
                      >
                        remove
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <p>No customers found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerData;
