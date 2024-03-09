import React, { useState, useEffect } from 'react';
import { customers, Customer } from './data';
import CustomerData from './component/customersData';

const App: React.FC = () => {
  const [customerData, setCustomerData] = useState<Customer[]>([]);

  useEffect(() => {
    setTimeout(() => setCustomerData(customers), 500);
  }, []);

  return (
    <>
      <CustomerData></CustomerData>
    </>
  );
}

export default App;
