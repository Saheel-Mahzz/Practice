import { Button } from "@/components/ui/button";

export default function Home() {
  const fullname: string = "saheel";
  return (
    <div className="bg-red-200">
      I am home page..{fullname} <Button variant="destructive">Click me</Button>
    </div>
  );
}
