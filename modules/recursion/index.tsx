import React from "react";

export default function Recursion() {
  const array = [1, [2, 3], 4, 5, [6, [7, 8]]];

  const newArray = [];

  const input = [1, [2, 3], [4, [5, 6]]];
  // output: 21

  //   function recursion(input) {
  //     for (let i = 0; i < input.length; i++) {
  //       if (Array.isArray(input[i])) {
  //         recursion(input[i]);
  //       } else {
  //         newArray.push(input[i]);
  //       }
  //     }
  //   }

  //   recursion(array);
  //   console.log("new array", newArray);
  //   let total = 0;
  //   function recursion(input) {
  //     for (let i = 0; i < input.length; i++) {
  //       if (Array.isArray(input[i])) {
  //         recursion(input[i]);
  //       } else {
  //         total += input[i];
  //       }
  //     }
  //   }
  //   recursion(input);
  //   console.log("new tota", total);

  const input1 = 5;
  //   let output = 15;
  //   while (input1 > 0) {
  //     output = output * input1;
  //     input1--;
  //   }
  function factorial(n) {
    if (n === 1) return 1;
    return n + factorial(n - 1);
  }

  const productsAPIResponse = [
    {
      id: 1,
      name: "MacBook Pro",
      category: "Electronics",
      rating: 4.8,
      price: 2500,
    },
    {
      id: 2,
      name: "iPhone 15",
      category: "Electronics",
      rating: 4.3,
      price: 1000,
    },
    {
      id: 3,
      name: "Ergonomic Chair",
      category: "Furniture",
      rating: 4.6,
      price: 350,
    },
    {
      id: 4,
      name: "Coffee Maker",
      category: "Appliances",
      rating: 4.7,
      price: 120,
    },
    { id: 5, name: "Desk Lamp", category: "Furniture", rating: 4.1, price: 45 },
    {
      id: 6,
      name: "Mechanical Keyboard",
      category: "Electronics",
      rating: 4.9,
      price: 150,
    },
    { id: 7, name: "Blender", category: "Appliances", rating: 4.4, price: 80 },
  ];

  const filteredProducts = productsAPIResponse?.reduce((acc, curr) => {
    acc[curr?.category] = acc[curr?.category] || [];
    if (curr?.rating < 4.5) return acc;
    acc[curr?.category].push(curr);
    return acc;
  }, {});
  console.log("filtred products", filteredProducts);

  const cartItemsAPIResponse = [
    {
      id: 101,
      name: "Oversized Hoodie",
      price: 45,
      quantity: 2,
      stockStatus: "in-stock",
    },
    {
      id: 102,
      name: "Wireless Mouse",
      price: 25,
      quantity: 1,
      stockStatus: "out-of-stock",
    },
    {
      id: 103,
      name: "Mechanical Keyboard",
      price: 120,
      quantity: 1,
      stockStatus: "in-stock",
    },
    {
      id: 104,
      name: "Leather Wallet",
      price: 30,
      quantity: 3,
      stockStatus: "in-stock",
    },
    {
      id: 105,
      name: "Gaming Headset",
      price: 80,
      quantity: 0,
      stockStatus: "in-stock",
    },
  ];

  const userProfileAPIResponse = {
    id: "USR-99",
    name: "Saheel",
    info: {
      role: "Frontend Developer",
      experience: "1.5 Years",
      location: {
        city: "Kathmandu",
        country: "Nepal",
      },
    },
    preferences: {
      theme: "dark",
      notifications: {
        email: true,
        push: false,
      },
    },
  };

  //   first since the experince is string ..
  //   else runs now result ={
  //     experince:whatever
  //   }
  //   step2: now location ..this is object comes inside the if block
  //      now new keyis laoction ...loop runs location.city is string ..else block runs
  //      result ={
  //         expericen:whaerver
  //         location.city:whatver
  //      }

  console.log("user obj", userProfileAPIResponse?.info?.location?.city);

  function flattenObject(obj, prefix = "") {
    let result = {};

    for (const key in obj) {
      // 1. Dynamic path/key nikalne (e.g., "info" + "." + "role" = "info.role")
      const newKey = prefix ? `${prefix}.${key}` : key;

      // 2. Value object ho ki haina check garne (and null huna bhayena)
      if (typeof obj[key] === "object" && obj[key] !== null) {
        // Recursion: Bhitra xirera arko object lai pani flat garne ani merge garne
        const recursiveFlatten = flattenObject(obj[key], newKey);
        result = { ...result, ...recursiveFlatten };
      } else {
        // Base Case: Normal value (string, number, boolean) ho vane direct assign garne
        result[newKey] = obj[key];
      }
    }

    return result;
  }

  const bj = {
    experience: "2 years",
    role: {
      position: "fe",
      salary: "40k",
    },
  };

  for (const key in bj) {
    if (typeof bj[key] === "object") {
      // 1. Computer yo line ma aayo, location object dekhyo
      const recursiveFlatten = flattenObject(obj[key], newKey);

      // 2. Yo line ma computer pugna ko lagi, mathi ko function complete huna parxa.
      result = { ...result, ...recursiveFlatten };
    } else {
      result[newKey] = bj[key];
    }
  }

  result = {
    experience: "2 years",
  };
  // now in next step reuslt ={
  //      experience:'2 years',
  //      role.position:''
  // }

  const filteredItems = cartItemsAPIResponse?.reduce(
    (acc, curr) => {
      const { quantity, stockStatus } = curr;
      if (quantity > 0 && stockStatus === "in-stock") {
        // acc?.totalItems += quantity;
        acc.totalItems = acc?.totalItems + quantity;
        // acc?.totalPrice += curr?.price * curr?.quantity;
        acc.totalPrice = acc?.totalPrice + curr?.price * curr?.quantity;
        acc?.itemsToBuy.push(curr?.name);
      }
      return acc;
    },
    {
      totalItems: 0,
      totalPrice: 0,
      itemsToBuy: [],
    },
  );

  console.log("filtred items", filteredItems);

  console.log("output", factorial(5));
  // const newArray [1,2,3,4,5,6,7,8]

  return <div>I am page for the recursion practice..</div>;
}
