import { getUser } from "./api/getUser";
import Practice from "./components/practice";
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

  const userProfileAPIResponse = {
  id: "USR-99",
  name: "Saheel",
  info: {
    role: "Frontend Developer",
    experience: "1.5 Years",
    location: {
      city: "Kathmandu",
      country: "Nepal"
    }
  },
  preferences: {
    theme: "dark",
    notifications: {
      email: true,
      push: false
    }
  }
};

let result ={}

function flatten (obj){
   for(let key in obj){
    if(typeof obj[key] ==='object' && obj[key] !== null){
   flatten(obj[key])
    }
    result= {...old,obj[key]}
   }
}

result = countDown(1-1) =0 //this runs 
result =countDown(2-1) =1 //this runs right 
  // const numbers = [10, 20, 30];
  // const scores = [12, 45, 78, 23, 56];

  // // const greaterNumber = scores?.reduce((acc, curr) => {
  // //   if (acc < curr) {
  // //     acc = curr;
  // //     return acc;
  // //   }
  // //   return acc;
  // // }, 0);
  // interface TUserItem {
  //   id: number;
  //   name: string;
  //   role: string; // or strict 'developer' | 'admin'
  // }
  // const users = [
  //   { id: 1, name: "Sahil", role: "developer" },
  //   { id: 2, name: "Alex", role: "admin" },
  //   { id: 3, name: "Rohan", role: "developer" },
  //   { id: 4, name: "Sita", role: "admin" },
  // ];

  // // const transformmedArray = users?.reduce((acc, curr) => {
  // //   if (acc[curr.role]) {
  // //     acc[curr.role].push(curr);
  // //     return acc;
  // //   }
  // //   acc[curr.role] = [];
  // //   acc[curr.role].push(curr);

  // //   return acc;
  // // }, {});

  // interface product {
  //   item: string;
  //   price: number;
  //   item: number;
  // }

  // const cart = [
  //   { item: "Gaming Mouse", price: 25, quantity: 2 }, // 25 * 2 = 50
  //   { item: "Mechanical Keyboard", price: 80, quantity: 1 }, // 80 * 1 = 80
  //   { item: "Mouse Pad", price: 15, quantity: 3 }, // 15 * 3 = 45
  //   { item: "Type-C Cable", price: 10, quantity: 2 }, // 10 * 2 = 20
  // ];

  // const calculatedPrice = cart?.reduce((acc, curr) => {
  //   acc += curr.quantity * curr.price;
  //   return acc;
  // }, 0);

  // const orders = [
  //   { customer: "Sahil", amount: 150 },
  //   { customer: "Rohan", amount: 200 },
  //   { customer: "Sahil", amount: 50 },
  //   { customer: "Sita", amount: 300 },
  //   { customer: "Rohan", amount: 120 },
  // ];

  // const filteredOrders = orders?.reduce((acc, curr) => {
  //   //   acc[curr?.customer] = acc[curr?.customer] || {};
  //   //   acc[curr?.customer] = {...acc[curr?.customer],curr}

  //   acc[curr?.customer] = acc[curr?.customer] || {
  //     totalSpend: 0,
  //     orderCount: 0,
  //   };

  //   acc[curr?.customer].totalSpend += curr.amount;
  //   acc[curr?.customer].orderCount += 1;
  //   return acc;
  // }, {});

  // console.log("filetred orders", filteredOrders);

  // console.log("calculated price", calculatedPrice);

  // const transformedArray = users?.reduce(
  //   (acc, curr) => {
  //     acc[curr?.role] = acc[curr?.role] || [];
  //     acc[curr?.role].push(curr);
  //     return acc;
  //   },
  //   {} as Record<string, keyof TUserItem>,
  // );

  // const numberss = [1, 2, 3, 3, 4, 4, 5, 6, 7];

  // const uniqueNumbers = [...new Set(numberss)];

  // console.log("unique numbers", uniqueNumbers);

  // const skills = ["React", "Next.js", "React", "TypeScript", "Next.js"];
  // const uniqueSkills = [...new Set(skills)];
  // console.log("unique skills", uniqueSkills);

  // // const listA = [1, 2, 3, 4];
  // // const listB = [3, 4, 5, 6];

  // // const setB = new Set(listB);

  // // const uniqueSets = listA.filter((item) => setB.has(item));
  // // console.log("unique sets", uniqueSets);

  // const listA = ["react", "nextjs", "typescript"];
  // const listB = ["react", "vue", "angular"];

  // const setB = new Set(listB);

  // const onlyA = listA.filter((item) => !setB.has(item));

  // console.log("only A", onlyA);
  // const logs = [
  //   { item: "Laptop", type: "IN", qty: 10 },
  //   { item: "Mouse", type: "IN", qty: 50 },
  //   { item: "Laptop", type: "OUT", qty: 3 },
  //   { item: "Mouse", type: "OUT", qty: 15 },
  //   { item: "Laptop", type: "IN", qty: 5 },
  // ];

  // const usersObject = [
  //   { id: "usr_1", name: "Saheel" },
  //   { id: "usr_2", name: "Dai" },
  //   { id: "usr_1", name: "Sahil Maharjan" }, // Duplicate ID!
  // ];

  // const seenIds = new Set();

  // const uniqueUsersObject = usersObject.filter((user) => {
  //   if (seenIds.has(user?.id)) {
  //     return false;
  //   }
  //   seenIds.add(user?.id);
  //   return true;
  // });

  // console.log("unique users object", uniqueUsersObject);

  // const notifications = [
  //   { notifyId: 101, text: "New Comment" },
  //   { notifyId: 102, text: "Like on post" },
  //   { notifyId: 101, text: "New Comment Duplicate" },
  // ];

  // const seenNotify = new Set();

  // const uniqueNotifications = notifications?.filter((notification) => {
  //   if (seenNotify.has(notification?.notifyId)) {
  //     return false;
  //   }
  //   seenNotify.add(notification?.notifyId);
  //   return true;
  // });
  // console.log("unique notifications", uniqueNotifications);

  // // const str = "A man, a plan, a canal: Panama";

  // // let left = 0;
  // // let right = str.length - 1;
  // // console.log("right", str[2]);

  // // while (left < right) {
  // //   if (str[left] !== str[right]) return false;
  // //   left++;
  // //   right--;
  // // }

  // const str = "A man, a plan, a canal: Panamttta";

  // function check() {
  //   // Paila character space validation filter small lower standard bypass garne!
  //   const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  //   let left = 0;
  //   let right = cleanStr.length - 1;

  //   while (left < right) {
  //     if (cleanStr[left] !== cleanStr[right]) {
  //       return false; // Aba function block vako le dynamic exit instant huncha!
  //     }
  //     left++;
  //     right--;
  //   }
  //   return true;
  // }

  // console.log(check()); // Output: true 🎯
  // // const formattedLogs = logs.reduce((acc, curr) => {
  // //   acc[curr?.item] = acc[curr?.item] || 0;

  // //   acc[curr?.item] =
  // //     curr?.type === "IN"
  // //       ? acc[curr?.item] + curr?.qty
  // //       : acc[curr?.item] - curr?.qty;
  // //   return acc;
  // // }, {});
  // const str1 = "hello";
  // let reverse = "";

  // for (let i = str1.length - 1; i > 0; i--) {
  //   reverse += str1[i];
  // }

  // console.log("reverse", reverse);

  // const formattedLogs = logs?.reduce((acc, curr) => {
  //   const item = curr?.item;
  //   acc[item] = acc[item] || 0;
  //   acc[item] += curr?.type === "IN" ? curr?.qty : -curr?.qty;
  //   return acc;
  // }, {});
  // console.log("formatted logs", formattedLogs);
  // console.log("transformed array", transformedArray);

  // const greaterNumber = scores?.reduce((acc, curr) => {
  //   return acc > curr ? acc : curr;
  // }, 0);

  // console.log("greater number", greaterNumber);

  // const calculatedNumber = numbers.reduce((acc, curr) => {
  //   acc = acc + curr;
  //   return acc;
  // }, 0);

  // console.log("calculated number", calculatedNumber);

  // const rawUsers = [
  //   { first_name: "sahil", last_name: "maharjan", is_active: 1 },
  //   { first_name: "rohan", last_name: "shrestha", is_active: 0 },
  //   { first_name: "sita", last_name: "thapa", is_active: 1 },
  // ];

  // const mappedUsers = rawUsers?.map((user) => {
  //   const capitalize = (str: string) =>
  //     str ? str.charAt(0).toUpperCase() + str.slice(1) : "";
  //   const name = "saheel";
  //   return {
  //     // fullName:
  //     //   user?.first_name.charAt(0).toUpperCase() +
  //     //   user?.first_name?.slice(1) +
  //     //   " " +
  //     //   user?.last_name?.charAt(0).toUpperCase() +
  //     //   user?.last_name?.slice(1),
  //     fullName: `${capitalize(user?.first_name)} ${capitalize(user?.last_name)}`,

  //     status: user?.is_active ? "Active" : "Inactive",
  //   };
  // });

  // const randomNumbers = [10, 20, 30];

  // function check1(...args) {
  //   console.log("args", args);
  // }
  // check1("Saheel", 25, "Kathmandu");
  // const userTest = {
  //   name: "Saheel",
  //   role: "Frontend Developer",
  //   salary: "28k",
  //   password: "secret_password_123",
  // };

  // // 'password' lai bahira jhikera, baki sabai 'rest' variables ma pack gareko
  // const { password, ...restOfData } = userTest;

  // console.log("password", password);
  // console.log("rest of dta", restOfData);

  // const greaterThanTwenty = randomNumbers?.map((number) => number > 20);
  // console.log("greater than twenty", greaterThanTwenty);

  // const products = [
  //   { id: 1, name: "Smartphone", category: "Electronics", price: 800 },
  //   { id: 2, name: "Trimmer", category: "Electronics", price: 40 },
  //   { id: 3, name: "Keyboard", category: "Electronics", price: 120 },
  //   { id: 4, name: "Running Shoes", category: "Clothing", price: 90 },
  //   { id: 5, name: "Smart Watch", category: "Electronics", price: 250 },
  // ];

  // const filteredProducts = products?.filter(
  //   (product) => product?.category === "Electronics" && product?.price < 500,
  // );
  // console.log("filtered prducts", filteredProducts);

  return <UserForm user={user?.data} />;
  // return <Practice />;
}
