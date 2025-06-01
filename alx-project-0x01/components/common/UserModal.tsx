import React, { useState } from "react";
import { UserData, UserModalProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: ""
      }
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: ""
    }
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    // For nested properties, we'll handle them carefully
    if (name.startsWith("address.")) {
      const field = name.split(".")[1];
      setUser((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [field]: value
        }
      }));
    } else if (name.startsWith("geo.")) {
      const field = name.split(".")[1];
      setUser((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          geo: {
            ...prev.address.geo,
            [field]: value
          }
        }
      }));
    } else if (name.startsWith("company.")) {
      const field = name.split(".")[1];
      setUser((prev) => ({
        ...prev,
        company: {
          ...prev.company,
          [field]: value
        }
      }));
    } else {
      setUser((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-lg overflow-y-auto max-h-[90vh]">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New User</h2>
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Basic User Info */}
          <div>
            <label className="block font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Address */}
          <fieldset className="border rounded p-3">
            <legend className="font-semibold mb-2">Address</legend>
            <div className="space-y-2">
              <input
                type="text"
                name="address.street"
                placeholder="Street"
                value={user.address.street}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="text"
                name="address.suite"
                placeholder="Suite"
                value={user.address.suite}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="address.city"
                placeholder="City"
                value={user.address.city}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="text"
                name="address.zipcode"
                placeholder="Zipcode"
                value={user.address.zipcode}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </fieldset>

          {/* Geo */}
          <fieldset className="border rounded p-3">
            <legend className="font-semibold mb-2">Geo Location</legend>
            <div className="space-y-2">
              <input
                type="text"
                name="geo.lat"
                placeholder="Latitude"
                value={user.address.geo.lat}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="geo.lng"
                placeholder="Longitude"
                value={user.address.geo.lng}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </fieldset>

          {/* Contact */}
          <div>
            <label className="block font-medium text-gray-700">Phone</label>
            <input
              type="text"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">Website</label>
            <input
              type="text"
              name="website"
              value={user.website}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Company */}
          <fieldset className="border rounded p-3">
            <legend className="font-semibold mb-2">Company</legend>
            <div className="space-y-2">
              <input
                type="text"
                name="company.name"
                placeholder="Company Name"
                value={user.company.name}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="company.catchPhrase"
                placeholder="Catch Phrase"
                value={user.company.catchPhrase}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="company.bs"
                placeholder="BS"
                value={user.company.bs}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </fieldset>

          {/* Buttons */}
          <div className="flex justify-between items-center pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
