import { getUser } from "./api/getUser";
import UserForm from "./components/userForm";

export const dummyUserProfile = {
  full_name: "Saheel Shrestha",
  email: "saheel.bro@example.com",
  contact_number: "+977-9876543210",
  temporary_address: "Kathmandu, Nepal",
  permanent_address: "Pokhara, Nepal",
  city: "Kathmandu",
  state: "Bagmati",
};
export default async function User() {
  const user = await getUser();
  const numbers = [10, 20, 30];
  const scores = [12, 45, 78, 23, 56];

  // const greaterNumber = scores?.reduce((acc, curr) => {
  //   if (acc < curr) {
  //     acc = curr;
  //     return acc;
  //   }
  //   return acc;
  // }, 0);
  interface TUserItem {
    id: number;
    name: string;
    role: string; // or strict 'developer' | 'admin'
  }
  const users = [
    { id: 1, name: "Sahil", role: "developer" },
    { id: 2, name: "Alex", role: "admin" },
    { id: 3, name: "Rohan", role: "developer" },
    { id: 4, name: "Sita", role: "admin" },
  ];

  // const transformmedArray = users?.reduce((acc, curr) => {
  //   if (acc[curr.role]) {
  //     acc[curr.role].push(curr);
  //     return acc;
  //   }
  //   acc[curr.role] = [];
  //   acc[curr.role].push(curr);

  //   return acc;
  // }, {});

  interface product {
    item: string;
    price: number;
    item: number;
  }

  const cart = [
    { item: "Gaming Mouse", price: 25, quantity: 2 }, // 25 * 2 = 50
    { item: "Mechanical Keyboard", price: 80, quantity: 1 }, // 80 * 1 = 80
    { item: "Mouse Pad", price: 15, quantity: 3 }, // 15 * 3 = 45
    { item: "Type-C Cable", price: 10, quantity: 2 }, // 10 * 2 = 20
  ];

  const calculatedPrice = cart?.reduce((acc, curr) => {
    acc += curr.quantity * curr.price;
    return acc;
  }, 0);

  const orders = [
    { customer: "Sahil", amount: 150 },
    { customer: "Rohan", amount: 200 },
    { customer: "Sahil", amount: 50 },
    { customer: "Sita", amount: 300 },
    { customer: "Rohan", amount: 120 },
  ];

  const filteredOrders = orders?.reduce((acc, curr) => {
    //   acc[curr?.customer] = acc[curr?.customer] || {};
    //   acc[curr?.customer] = {...acc[curr?.customer],curr}

    acc[curr?.customer] = acc[curr?.customer] || {
      totalSpend: 0,
      orderCount: 0,
    };

    acc[curr?.customer].totalSpend += curr.amount;
    acc[curr?.customer].orderCount += 1;
    return acc;
  }, {});

  console.log("filetred orders", filteredOrders);

  console.log("calculated price", calculatedPrice);

  const transformedArray = users?.reduce(
    (acc, curr) => {
      acc[curr?.role] = acc[curr?.role] || [];
      acc[curr?.role].push(curr);
      return acc;
    },
    {} as Record<string, keyof TUserItem>,
  );

  const logs = [
    { item: "Laptop", type: "IN", qty: 10 },
    { item: "Mouse", type: "IN", qty: 50 },
    { item: "Laptop", type: "OUT", qty: 3 },
    { item: "Mouse", type: "OUT", qty: 15 },
    { item: "Laptop", type: "IN", qty: 5 },
  ];

  // const formattedLogs = logs.reduce((acc, curr) => {
  //   acc[curr?.item] = acc[curr?.item] || 0;

  //   acc[curr?.item] =
  //     curr?.type === "IN"
  //       ? acc[curr?.item] + curr?.qty
  //       : acc[curr?.item] - curr?.qty;
  //   return acc;
  // }, {});

  const formattedLogs = logs?.reduce((acc, curr) => {
    const item = curr?.item;
    acc[item] = acc[item] || 0;
    acc[item] += curr?.type === "IN" ? curr?.qty : -curr?.qty;
    return acc;
  }, {});
  console.log("formatted logs", formattedLogs);
  console.log("transformed array", transformedArray);

  const greaterNumber = scores?.reduce((acc, curr) => {
    return acc > curr ? acc : curr;
  }, 0);

  console.log("greater number", greaterNumber);

  const calculatedNumber = numbers.reduce((acc, curr) => {
    acc = acc + curr;
    return acc;
  }, 0);

  console.log("calculated number", calculatedNumber);

  const rawUsers = [
    { first_name: "sahil", last_name: "maharjan", is_active: 1 },
    { first_name: "rohan", last_name: "shrestha", is_active: 0 },
    { first_name: "sita", last_name: "thapa", is_active: 1 },
  ];

  const mappedUsers = rawUsers?.map((user) => {
    const capitalize = (str: string) =>
      str ? str.charAt(0).toUpperCase() + str.slice(1) : "";
    return {
      // fullName:
      //   user?.first_name.charAt(0).toUpperCase() +
      //   user?.first_name?.slice(1) +
      //   " " +
      //   user?.last_name?.charAt(0).toUpperCase() +
      //   user?.last_name?.slice(1),
      fullName: `${capitalize(user?.first_name)} ${capitalize(user?.last_name)}`,

      status: user?.is_active ? "Active" : "Inactive",
    };
  });

  const randomNumbers = [10, 20, 30];

  const greaterThanTwenty = randomNumbers?.map((number) => number > 20);
  console.log("greater than twenty", greaterThanTwenty);

  return <UserForm user={user?.data} />;
}
