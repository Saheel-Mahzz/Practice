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
import InputElement from "@/molecules/inputElement";
import PasswordInput from "@/molecules/passwordInput";
import { useActionState, useEffect } from "react";
import { logInAction } from "./actions/loginAction";
import { useRouter } from "next/navigation";

export function Login() {
  const initialState = {
    success: false,
    data: null,
    // error:null,
    message: null,
  };

  const [state, formAction, isPending] = useActionState(logInAction, {});

  const router = useRouter();
  useEffect(() => {
    if (state?.success) {
      const { access, refresh } = state?.data;
      localStorage?.setItem("access_token", access);
      localStorage?.setItem("refresh_token", refresh);

      router.push("/dashboard");
    }
  }, [state]);
  console.log("tsate", state);

  return (
    <form action={formAction}>
      <div className="flex min-h-screen items-center justify-center px-4">
        <Card className="w-full max-w-sm">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">
              Login
            </CardTitle>
            <CardDescription className="text-center">
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>

            <InputElement
              label="Email"
              type="text"
              name="username"
              id="username"
              placeholder="m@exmaple.com"
              defaultValue={state?.data?.username}
              error={state?.error?.username}
            />

            <PasswordInput
              id="password"
              label="Password"
              placeholder="*****"
              name="password"
              defaultValue={state?.data?.password}
              err={state?.error?.password}
            />
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button className="w-full">
              {" "}
              {isPending ? "Signing..." : "Sign In"}
            </Button>
            <div className="text-center text-sm text-muted-foreground">
              Don&apos;t have an account?{" "}
              <a
                href="#"
                className="underline underline-offset-4 hover:text-primary"
              >
                Sign up
              </a>
            </div>
          </CardFooter>
        </Card>
      </div>
    </form>
  );
}

const numbers1 = numbers.map((num) => num * 2);
const filtered = numbers.filter((num) => !num / 2);

const reduced = numbers.reduce((acc, curr) => {
  return (acc += curr);
}, 0);

const num = [1, 2, 3, 4, 5];

const result = [];
for (let i = 0; i < num.length; i++) {
  if (i / 2 == 0) result.push(i);
}
la 