export interface Service {
    code: number;
    desc: string;
    date: string;
    cost: number;
  }
  
 export interface Customer {
    firstName: string;
    lastName: string;
    year: number;
    make: string;
    model: string;
    services: Service[];
  }
  
  export const customers: Customer[] = [
    {
      firstName: "Kathy",
      lastName: "Barker",
      year: 2016,
      make: "Ford",
      model: "Focus",
      services: [
        { code: 1001, desc: "Oil change", date: "January 25, 2019", cost: 20.71 },
        { code: 1001, desc: "Oil change", date: "April 3, 2019", cost: 22.13 },
        { code: 1001, desc: "Oil change", date: "August 5, 2019", cost: 22.13 },
        { code: 1009, desc: "Brake pad replacement", date: "August 5, 2019", cost: 258.41 },
      ],
    },
    {
      firstName: "Ralph",
      lastName: "Benson",
      year: 2014,
      make: "Honda",
      model: "Civic",
      services: [
        { code: 1001, desc: "Oil change", date: "March 13, 2019", cost: 36.42 },
        { code: 1003, desc: "A/C recharge", date: "March 13, 2019", cost: 206.14 },
      ],
    },
    {
      firstName: "Bob",
      lastName: "Douglas",
      year: 2016,
      make: "Ford",
      model: "F-150",
      services: [
        { code: 1005, desc: "Tire patch (driver's side front)", date: "May 12, 2020", cost: 0 },
      ],
    },
    {
      firstName: "Omar",
      lastName: "Adams",
      year: 2017,
      make: "Kia",
      model: "Sorento",
      services: [
        { code: 1006, desc: "Rough shift from 2nd to 3rd", date: "May 5, 2020", cost: 223.43 },
      ],
    },
  ];
  