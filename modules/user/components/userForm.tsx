import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { TUser } from "../definitions/user.definitions";

export default function UserForm({ user }: { user: TUser }) {
  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Update Profile</CardTitle>
          <CardDescription>
            Keep your account details accurate and up-to-date.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                type="text"
                placeholder="John Doe"
                defaultValue={user?.full_name}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="example@domain.com"
                defaultValue={user?.email}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contactNumber">Contact Number</Label>
              <Input
                id="contactNumber"
                type="tel"
                placeholder="+977-9XXXXXXXX"
                defaultValue={user?.contact_number}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address1">Address Line 1</Label>
              <Input
                id="address1"
                type="text"
                placeholder="Street address, P.O. box"
                defaultValue={user?.temporary_address}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address2">Address Line 2 (Optional)</Label>
              <Input
                id="address2"
                type="text"
                placeholder="Apartment, suite, unit, building, floor"
                defaultValue={user?.permanent_address}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  type="text"
                  placeholder="Kathmandu"
                  defaultValue={user?.city}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="state">State / Province (Optional)</Label>
                <Input
                  id="state"
                  type="text"
                  placeholder="Bagmati"
                  defaultValue={user?.state}
                />
              </div>
            </div>

            <div className="flex justify-end space-x-4 pt-4">
              <Button type="button" variant="outline">
                Cancel
              </Button>
              <Button type="submit">Save Changes</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
