import React from "react";

export default function Practice() {
  const cards = ["1234-5678-9012-3456", "9876-5432-1111-2222"];
  //   const cards = "1234-5678-9012-3456";

  //   const group = cards.split("-");
  //   console.log("group", group);

  //   const transformmedArray = group
  //     ?.map((g, index) => (index === group.length - 1 ? g : "****"))
  //     .join("-");
  //   console.log("transformmed Array", transformmedArray);
  const email = "john.doe@gmail.com";

  const splittedEmail = email.split("@");

  //   const transformedEmail = splittedEmail.map((em, index) => {
  //     const splittedName =
  //       index === splittedEmail.length - 1 ? [em] : em.split(".");

  //     const transformedName = splittedName.map((name, i) => {
  //       return i === 0 ? name[0] + "***" : "***";
  //     });

  //     return transformedName.join(".");
  //   });

  //   input: ["Mr.John Smith", "Dr.Jane Doe", "Mrs.Emily Clark"]

  const inputOne = "Mr.John Smith";

  const splittedInput = inputOne.split(" ");
  console.log("spliited input", splittedInput);

  const TransformedInput = splittedInput?.map((spl, index) => {
    if (index === splittedInput.length - 1) return spl[0] + "***";

    const remainSplit = spl.split(".");
    console.log("remain split", remainSplit);
    return remainSplit
      .map((r, index) => (index === remainSplit.length - 1 ? r[0] + "***" : r))
      .join(".");
  });
  console.log("TransformedInput", TransformedInput.join(" "));

  // output: ["Mr.J*** S***", "Dr.J*** D***", "Mrs.E*** C***"]

  const transformmedArray = cards.map((card) => {
    const group = card.split("-");
    return group
      .map((g, index) => (index === group.length - 1 ? g : "****"))
      .join("-");
  });

  const transformedEmail = splittedEmail.map((em, index) => {
    if (index === splittedEmail.length - 1) return em; // just return domain as is

    const splittedName = em.split(".");
    const transformedName = splittedName.map((name, i) => {
      return i === 0 ? name[0] + "***" : "***";
    });

    return transformedName.join(".");
  });

  console.log(transformedEmail.join("@")); // "j***.***@gmail.com"

  // output: ["4***-1***-1***-1234", "5***-0***-0***-5678"]
  const number = "4111-1111-1111-1234";

  const splittedNumber = number?.split("-");

  const transformmedNumber = splittedNumber
    .map((num, index) => {
      if (index === splittedNumber.length - 1) return num;
      return num[0] + "***";
    })
    .join("-");
  console.log("transformed number", transformmedNumber);
  console.log(transformedEmail.join("@"));

  input: ["alice@gmail.com", "bob@yahoo.com", "charlie@hotmail.com"];

  output: ["a****@g****.com", "b****@y****.com", "c****@h****.com"];

  const dummyEmail = "alice@gmail.com";

  const splittedEmaildummy = dummyEmail.split(".");
  const transformDummyEmail = splittedEmaildummy
    .map((email, index) => {
      if (index === splittedEmaildummy.length - 1) return email;
      const splitedFirstPart = email.split("@");
      return splitedFirstPart.map((sp, indx) => sp[0] + "***").join("@");
    })
    .join(".");
  console.log("transfomred dummy email", transformDummyEmail);

  const array = ["a@gmail.com", "b@gmail.com", "a@gmail.com", "c@gmail.com"];
  const newArr: string[] = [];

  //   console.log("index", array.indexOf("c@gmail.com"));

  const uniqueArray = array.filter(
    (arr, index) => array.indexOf(arr) === index,
  );

  //   array.filter((arr) => {
  //     if (newArr.includes(arr)) {
  //       return;
  //     }
  //     newArr.push(arr);
  //   });

  //   const uniqueArray = [...new Set(array)];

  console.log("new arr", uniqueArray);

  const employees = [
    { name: "A", salary: 50000 },
    { name: "B", salary: 80000 },
    { name: "C", salary: 60000 },
  ];

  return <div>Here for practice...s</div>;
}

input: ["john.doe@gmail.com", "jane.smith@yahoo.com"];

output: ["j***.***@gmail.com", "j***.***@yahoo.com"];
