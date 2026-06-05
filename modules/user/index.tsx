import UserForm from "./components/userForm";

export const dummyUserProfile = {
  full_name: "Saheel Shrestha",
  email: "saheel.bro@example.com",
  contact_number: "+977-9876543210",
  temporary_address: "Kathmandu, Nepal",
  permanent_address: "Pokhara, Nepal",
  city: "Kathmandu",
  state: "Bagmati",
};
export default async function User() {
  //   const user = await getUser();
  return <UserForm user={dummyUserProfile} />;
}
