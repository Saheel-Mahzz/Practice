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

export default function ChangePassword() {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Change Password</CardTitle>
        <CardDescription>
          Choose a strong password to secure your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <PasswordInput
          name="current-password"
          label="Current Password"
          id="current-password"
          placeholder="Enter current password"
        />
        <PasswordInput
          name="new-password"
          label="New password"
          id="new-password"
          placeholder="Enter new password"
        />
        <PasswordInput
          label="Confirm New Password"
          name="confirm-password"
          id="confirm-password"
          placeholder="Confirm new password"
        />
      </CardContent>

      <CardFooter>
        <Button className="w-full" type="submit">
          Update Password
        </Button>
      </CardFooter>
    </Card>
  );
}
