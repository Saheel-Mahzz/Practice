"use client";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PasswordInput from "@/molecules/passwordInput";
import { useActionState, useEffect, useState } from "react";
import { changePasswordAction } from "./actions/changePasswordAction";
import { toast } from "sonner";

export default function ChangePassword() {
  const [state, formAction, isPending] = useActionState(
    changePasswordAction,
    {},
  );

  const [number, setNumber] = useState<number>(0);

  useEffect(() => {
    if (state?.success) {
      toast.success("Updated Succesfully!");
    }
  }, [state]);

  let value: number = 0;

  const handleAdd = () => {
    console.log("triggeresd value", value);
    return value++;
  };

  console.log("hazndle add", handleAdd());
  console.log("state", state);
  const str = "hello";
  let reverse = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }

  const arr = [3, 1, 9, 2, 7];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log("max", max);
  const input = [3, 1, 9, 2, 7];
  let min = input[0];

  for (let i = 1; i < input.length; i++) {
    if (input[i] < min) {
      min = input[i];
    }
  }
  console.log("min value", min);

  const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

  const occurance = {};

  for (let i = 0; i < fruits.length; i++) {
    if (occurance[fruits[i]]) {
      occurance[fruits[i]] += 1;
    } else {
      occurance[fruits[i]] = 1;
    }
  }

  const groupArray = [
    { name: "A", dept: "IT" },
    { name: "B", dept: "HR" },
    { name: "C", dept: "IT" },
  ];
  // output: { IT: ["A", "C"], HR: ["B"] }
  const groupObj = {};

  //   for(let i = 0; i < groupArray.length; i++) {
  //   if(groupObj[groupArray[i]["dept"]]) {
  //     groupObj[groupArray[i]["dept"]].push(groupArray[i]["name"])
  //   } else {
  //     groupObj[groupArray[i]["dept"]] = [groupArray[i]["name"]]
  //   }
  // }

  for (let i = 0; i < groupArray?.length; i++) {
    if (groupObj[groupArray[i]["dept"]]) {
      groupObj[groupArray[i]["dept"]].push(groupArray[i]["name"]);
    } else {
      groupObj[groupArray[i]["dept"]] = [groupArray[i]["name"]];
    }
  }

  console.log("final grouped obk", groupObj);

  const allNumbers = [1, 2, 3, 2, 4, 3];
  const obj = {};
  const arr1 = [];

  for (let i = 0; i < allNumbers.length; i++) {
    if (obj[allNumbers[i]]) {
      obj[allNumbers[i]] += 1;
    } else {
      obj[allNumbers[i]] = 1;
    }
  }

  for (const key in obj) {
    if (obj[key] > 1) {
      arr1.push(key);
    }
  }
  console.log("arr", arr1);

  console.log("obj", obj);

  // output: [2, 3]

  const testArray = [
    {
      name: "A",
      dept: "IT",
    },
  ];
  const pushed = {
    name: "B",
    IT: [],
  };
  console.log("pushed ", pushed[testArray[0]["dept"]].push("saheel"));
  console.log("final pshed ", pushed);

  console.log("grouped obj", groupObj);

  console.log("occurance", occurance);
  console.log("reversed string", reverse);
  return (
    <form action={formAction}>
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Change Password</CardTitle>
          <CardDescription>
            Choose a strong password to secure your account.
          </CardDescription>
          <Button type="button" onClick={() => setNumber((prev) => prev + 1)}>
            State add
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          <PasswordInput
            name="current_password"
            label="Current Password"
            id="current_password"
            placeholder="Enter current password"
            err={state?.error?.current_password}
          />
          <PasswordInput
            name="new_password"
            label="New password"
            id="new_password"
            placeholder="Enter new password"
            err={state?.error?.new_password}
          />
          <PasswordInput
            label="Confirm New Password"
            name="confirm_password"
            id="confirm_password"
            placeholder="Confirm new password"
            err={state?.error?.confirm_password}
          />

          <Button type="button" onClick={() => handleAdd()}>
            Add Value
          </Button>
          <p>check value: {value}</p>
        </CardContent>

        <CardFooter>
          <Button className="w-full" type="submit">
            Update Password
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
