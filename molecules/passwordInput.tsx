import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

interface PasswordProps {
  label: string;
  placeholder: string;
  name: string;
  id: string;
  err?: string;
  defaultValue?: string;
}

export default function PasswordInput({
  label,
  id,
  name,
  placeholder,
  err,
  defaultValue,
}: PasswordProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor="current-password">{label}</Label>
      <Input
        id={id}
        name={name}
        type="password"
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
      {err && <span className="text-red-500 text-sm">{err}</span>}
    </div>
  );
}
