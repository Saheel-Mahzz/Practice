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
import { useActionState, useEffect } from "react";
import { changePasswordAction } from "./actions/changePasswordAction";
import { toast } from "sonner";

export default function ChangePassword() {
  const [state, formAction, isPending] = useActionState(
    changePasswordAction,
    {},
  );

  useEffect(() => {
    if (state?.success) {
      toast.success("Updated Succesfully!");
    }
  }, [state]);

  console.log("state", state);
  return (
    <form action={formAction}>
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Change Password</CardTitle>
          <CardDescription>
            Choose a strong password to secure your account.
          </CardDescription>
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
