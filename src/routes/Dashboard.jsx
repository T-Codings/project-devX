import React from "react";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const auth = useAuth();
  const user = auth?.user || auth?.currentUser; // ✅ supports either naming
  const logout = auth?.logout;

  const handleLogout = async () => {
    await logout?.();
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <main className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-gray-200 shadow-sm rounded-3xl overflow-hidden">
          <div className="px-6 py-8 sm:p-10">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div>
                {/* Hero-style heading */}
                <h1 className="font-semibold leading-tight text-3xl sm:text-4xl lg:text-5xl text-gray-900">
                  Welcome to your Dashboard{user?.email ? `, ${user.email}` : ""}!
                </h1>

                {/* Hero-style body text */}
                <p className="mt-3 text-base sm:text-lg leading-7 sm:leading-8 text-gray-700 max-w-2xl">
                  This is a protected dashboard page. You can only see this if you're logged in.
                </p>
              </div>

              <button
                onClick={handleLogout}
                className="rounded-xl px-5 py-3 font-sans text-base sm:text-lg font-semibold text-white bg-purple-900 text-center"
              >
                Logout
              </button>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-purple-50 border border-purple-100 p-6 rounded-2xl">
                <h2 className="font-semibold leading-tight text-xl sm:text-2xl text-purple-900">
                  Projects
                </h2>
                <p className="mt-2 text-base sm:text-lg leading-7 sm:leading-8 text-purple-900/80">
                  Manage your development projects.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-100 p-6 rounded-2xl">
                <h2 className="font-semibold leading-tight text-xl sm:text-2xl text-blue-900">
                  Analytics
                </h2>
                <p className="mt-2 text-base sm:text-lg leading-7 sm:leading-8 text-blue-900/80">
                  View your performance metrics.
                </p>
              </div>

              <div className="bg-green-50 border border-green-100 p-6 rounded-2xl">
                <h2 className="font-semibold leading-tight text-xl sm:text-2xl text-green-900">
                  Settings
                </h2>
                <p className="mt-2 text-base sm:text-lg leading-7 sm:leading-8 text-green-900/80">
                  Configure your account preferences.
                </p>
              </div>
            </div>

            {/* Optional small note */}
            <p className="mt-10 text-sm sm:text-base leading-6 text-gray-500">
              Tip: Add recent activity, course progress, or messages here to make the dashboard feel more real.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}