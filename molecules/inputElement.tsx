import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

interface InputProps {
  name: string;
  label: string;
  id: string;
  type: string;
  placeholder: string;
  defaultValue?: string;
  error?: string;
}

export default function InputElement({
  name,
  label,
  id,
  placeholder,
  type,
  defaultValue,
  error,
}: InputProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
      {error && <span className="text-red-700">{error}</span>}
    </div>
  );
}
