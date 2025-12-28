import api from "../utils/api";
import { MdMarkEmailRead } from "react-icons/md";
import {
  FaUserAstronaut,
  FaAddressBook,
  FaCircleUser,
  FaArrowLeftLong,
} from "react-icons/fa6";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Profile = () => {
  const [user, setUser] = useState({
    id: "",
    email: "",
    name: "",
  });
  useEffect(() => {
    const handleData = async () => {
      const response = await api.get("/users/me");
      const user = response.data;
      setUser(user);
      console.log(user);
    };
    handleData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 px-4">
      <div className="text-1xl font-bold text-white mr-2">
        <Link className="flex" to={"/dashboard"}>
          <FaArrowLeftLong size={20} />
          <h1 className=" ml-2">Return to dashboard</h1>
        </Link>
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-8 text-center">
            <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
              <FaUserAstronaut size={50} color="indigo" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">User Profile</h1>
            <p className="text-indigo-100">Manage your account information</p>
          </div>

          {/* Profile Information */}
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-white">
                Personal Information
              </h2>
            </div>

            <div className="space-y-6">
              {/* User ID */}
              <div className="flex items-start gap-4 p-4 bg-gray-700 rounded-lg">
                <div className="bg-indigo-600 p-3 rounded-lg">
                  <FaAddressBook color="white" size={30} />
                </div>
                <div className="flex-1">
                  <label className="text-sm font-medium text-gray-400 block mb-1">
                    User ID
                  </label>
                  <p className="text-white text-lg">{user.id}</p>
                  <p className="text-gray-400 text-sm mt-1">
                    This ID cannot be changed
                  </p>
                </div>
              </div>

              {/* Name */}
              <div className="flex items-start gap-4 p-4 bg-gray-700 rounded-lg">
                <div className="bg-indigo-600 p-3 rounded-lg">
                  <FaCircleUser color="white" size={30} />
                </div>
                <div className="flex-1">
                  <label className="text-sm font-medium text-gray-400 block mb-1">
                    Full Name
                  </label>
                  <p className="text-white text-lg">{user.name}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-4 bg-gray-700 rounded-lg">
                <div className="bg-indigo-600 p-3 rounded-lg">
                  <MdMarkEmailRead color="white" size={30} />
                </div>
                <div className="flex-1">
                  <label className="text-sm font-medium text-gray-400 block mb-1">
                    Email Address
                  </label>
                  <p className="text-white text-lg">{user.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
