import React from "react";
import { UserProps } from "@/interfaces";

interface Props {
  user: UserProps;
}

const UserCard: React.FC<Props> = ({ user }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white w-full max-w-md">
      <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
      <p className="text-gray-700">Username: {user.username}</p>
      <p className="text-gray-700">Email: {user.email}</p>
      <p className="text-gray-700">Phone: {user.phone}</p>
      <p className="text-gray-700">Website: {user.website}</p>

      <div className="mt-4">
        <p className="font-semibold text-gray-800">Address</p>
        <p className="text-sm text-gray-600">
          {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
        </p>
      </div>

      <div className="mt-4">
        <p className="font-semibold text-gray-800">Company</p>
        <p className="text-sm text-gray-600">{user.company.name}</p>
        <p className="text-xs italic text-gray-500">"{user.company.catchPhrase}"</p>
      </div>
    </div>
  );
};

export default UserCard;


