"use client";

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
import React, { useActionState } from "react";
import { TUser } from "../definitions/user.definitions";
import { userAction } from "../actions/userAction";

export default function UserForm({ user }: { user: TUser }) {
  const [state, formAction, isPending] = useActionState(userAction, {});

  console.log("state", state);
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
          <form className="space-y-6" action={formAction}>
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="full_name"
                name="full_name"
                type="text"
                placeholder="John Doe"
                defaultValue={state?.data?.full_name ?? user?.full_name ?? ""}
              />
              {state?.errors?.full_name && (
                <span className="text-red-700">{state?.errors?.full_name}</span>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="example@domain.com"
                defaultValue={state?.data?.email ?? user?.email ?? ""}
              />
              {state?.errors?.email && (
                <span className="text-red-700">{state?.errors?.email}</span>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="contactNumber">Contact Number</Label>
              <Input
                id="contactNumber"
                type="tel"
                name="contact_number"
                placeholder="+977-9XXXXXXXX"
                defaultValue={user?.contact_number}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address1">Address Line 1</Label>
              <Input
                id="address1"
                name="temporary_address"
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
                name="permanent_address"
                placeholder="Apartment, suite, unit, building, floor"
                defaultValue={user?.permanent_address}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  name="city"
                  type="text"
                  placeholder="Kathmandu"
                  defaultValue={user?.city}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="state">State / Province (Optional)</Label>
                <Input
                  id="state"
                  name="state"
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
              <Button type="submit">
                {isPending ? "Saving.." : "Save Changes"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
