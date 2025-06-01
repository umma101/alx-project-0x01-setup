import React from 'react';
import { UserProps } from "@/interfaces";

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="bg-white shadow-lg p-4 rounded-md w-full max-w-md">
      <h2 className="text-xl font-bold mb-1">{user.name}</h2>
      <p className="text-sm text-gray-600">@{user.username}</p>
      <p className="text-sm">{user.email}</p>
      <p className="text-sm">{user.phone}</p>
      <p className="text-sm">{user.website}</p>
      <div className="mt-2">
        <p className="text-sm text-gray-700">
          {user.address.street}, {user.address.city}
        </p>
      </div>
      <div className="mt-2">
        <p className="text-sm italic text-gray-500">
          Company: {user.company.name}
        </p>
      </div>
    </div>
  );
};

export default UserCard;

