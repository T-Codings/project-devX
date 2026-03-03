import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const navigate = useNavigate();
  const auth = useAuth();
  const user = auth?.user || auth?.currentUser;
  const logout = auth?.logout;

  const [active, setActive] = useState("overview");

  const handleLogout = async () => {
    await logout?.();
    navigate("/login");
  };

  const navItemBase =
    "w-full text-left rounded-xl px-4 py-3 text-base sm:text-lg font-semibold transition";
  const navItemActive = "bg-purple-800 text-white";
  const navItemIdle = "text-gray-700 hover:bg-gray-50";

  // Demo content (replace later with real data)
  const stats = [
    { label: "Courses enrolled", value: "2" },
    { label: "Projects completed", value: "4" },
    { label: "Tasks this week", value: "6" },
  ];

  const activity = [
    { title: "Completed: Responsive Navbar", time: "Today" },
    { title: "Updated: Programs page typography", time: "Yesterday" },
    { title: "Started: Fullstack Builder Program", time: "This week" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* SIDEBAR */}
          <aside className="lg:col-span-3">
            <div className="rounded-3xl bg-white border border-gray-200 shadow-sm p-6">
              <div className="mb-6">
                <p className="text-sm text-gray-600">Signed in as</p>
                <p className="mt-1 font-semibold leading-tight text-base sm:text-lg text-gray-900 break-words">
                  {user?.email || "User"}
                </p>
              </div>

              <nav className="space-y-2">
                <button
                  className={`${navItemBase} ${
                    active === "overview" ? navItemActive : navItemIdle
                  }`}
                  onClick={() => setActive("overview")}
                >
                  Overview
                </button>

                <button
                  className={`${navItemBase} ${
                    active === "projects" ? navItemActive : navItemIdle
                  }`}
                  onClick={() => setActive("projects")}
                >
                  Projects
                </button>

                <button
                  className={`${navItemBase} ${
                    active === "analytics" ? navItemActive : navItemIdle
                  }`}
                  onClick={() => setActive("analytics")}
                >
                  Analytics
                </button>

                <button
                  className={`${navItemBase} ${
                    active === "settings" ? navItemActive : navItemIdle
                  }`}
                  onClick={() => setActive("settings")}
                >
                  Settings
                </button>
              </nav>

              <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
                <Link
                  to="/programs"
                  className="block w-full text-center rounded-full px-6 py-3 text-base sm:text-lg font-semibold bg-purple-800 text-white hover:bg-purple-700 transition-colors"
                >
                  View Programs
                </Link>

                <button
                  onClick={handleLogout}
                  className="w-full rounded-full px-6 py-3 text-base sm:text-lg font-semibold bg-white border border-gray-200 text-gray-900 hover:bg-gray-50 transition"
                >
                  Logout
                </button>
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <main className="lg:col-span-9">
            <div className="rounded-3xl bg-white border border-gray-200 shadow-sm p-6 sm:p-10">
              <h1 className="font-semibold leading-tight text-3xl sm:text-4xl lg:text-5xl text-gray-900">
                Dashboard
              </h1>
              <p className="mt-3 text-base sm:text-lg leading-7 sm:leading-8 text-gray-700 max-w-3xl">
                Welcome back{user?.email ? `, ${user.email}` : ""}. Manage your progress and keep building.
              </p>

              {/* OVERVIEW */}
              {active === "overview" && (
                <>
                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {stats.map((s) => (
                      <div
                        key={s.label}
                        className="rounded-2xl bg-gray-50 border border-gray-200 p-6"
                      >
                        <p className="text-sm text-gray-600">{s.label}</p>
                        <p className="mt-2 font-semibold leading-tight text-3xl text-gray-900">
                          {s.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <section className="mt-8">
                    <h2 className="font-semibold leading-tight text-2xl sm:text-3xl text-gray-900">
                      Recent activity
                    </h2>

                    <div className="mt-4 space-y-4">
                      {activity.map((a) => (
                        <div
                          key={a.title}
                          className="rounded-2xl bg-gray-50 border border-gray-200 p-5 flex items-start justify-between gap-4"
                        >
                          <div>
                            <p className="font-semibold leading-tight text-base sm:text-lg text-gray-900">
                              {a.title}
                            </p>
                            <p className="mt-1 text-sm sm:text-base leading-6 text-gray-600">
                              {a.time}
                            </p>
                          </div>

                          <span className="text-xs font-semibold text-purple-800 bg-purple-100 border border-purple-200 px-3 py-1 rounded-full">
                            Update
                          </span>
                        </div>
                      ))}
                    </div>
                  </section>
                </>
              )}

              {/* PROJECTS */}
              {active === "projects" && (
                <section className="mt-8">
                  <h2 className="font-semibold leading-tight text-2xl sm:text-3xl text-gray-900">
                    Projects
                  </h2>
                  <p className="mt-2 text-base sm:text-lg leading-7 sm:leading-8 text-gray-700">
                    Add your portfolio projects here. Later you can connect this to Firebase.
                  </p>

                  <div className="mt-6 rounded-2xl bg-gray-50 border border-gray-200 p-6">
                    <p className="font-semibold text-gray-900">No projects yet</p>
                    <p className="mt-2 text-gray-700">
                      Start with the Frontend Track and deploy your first project.
                    </p>
                  </div>
                </section>
              )}

              {/* ANALYTICS */}
              {active === "analytics" && (
                <section className="mt-8">
                  <h2 className="font-semibold leading-tight text-2xl sm:text-3xl text-gray-900">
                    Analytics
                  </h2>
                  <p className="mt-2 text-base sm:text-lg leading-7 sm:leading-8 text-gray-700">
                    Track your learning progress and consistency over time.
                  </p>

                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-gray-50 border border-gray-200 p-6">
                      <p className="text-sm text-gray-600">Study streak</p>
                      <p className="mt-2 font-semibold text-3xl text-gray-900">5 days</p>
                    </div>
                    <div className="rounded-2xl bg-gray-50 border border-gray-200 p-6">
                      <p className="text-sm text-gray-600">Hours this week</p>
                      <p className="mt-2 font-semibold text-3xl text-gray-900">8</p>
                    </div>
                  </div>
                </section>
              )}

              {/* SETTINGS */}
              {active === "settings" && (
                <section className="mt-8">
                  <h2 className="font-semibold leading-tight text-2xl sm:text-3xl text-gray-900">
                    Settings
                  </h2>
                  <p className="mt-2 text-base sm:text-lg leading-7 sm:leading-8 text-gray-700">
                    Update your preferences and account details here.
                  </p>

                  <div className="mt-6 rounded-2xl bg-gray-50 border border-gray-200 p-6">
                    <p className="font-semibold text-gray-900">Account</p>
                    <p className="mt-2 text-gray-700">
                      Email: <span className="font-semibold">{user?.email || "N/A"}</span>
                    </p>
                  </div>
                </section>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}