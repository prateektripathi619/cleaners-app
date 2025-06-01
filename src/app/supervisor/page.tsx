"use client";

import Link from "next/link";
import {
  BadgeCheck,
  Building2,
  ClipboardList,
  Users,
  Clock,
  CheckCircle2,
  Bell,
  Plus,
  MapPin,
  Home,
  User,
} from "lucide-react";
import React from "react";
import { Toaster, toast } from "react-hot-toast";

export default function SupervisorDashboard() {
  const performers = ["JohnDoe", "RahulSharma", "NehaVerma", "AmitKumar", "SnehaRani"];

  function Card({
    icon,
    title,
    value,
    color = "bg-blue-100",
  }: {
    icon: React.ReactNode;
    title: string;
    value: string;
    color?: string;
  }) {
    return (
      <div className="flex flex-col justify-between rounded-lg bg-white p-4 shadow hover:shadow-md transition">
        <div className="flex items-center gap-3 text-gray-700">
          <div className={`rounded-full p-2 ${color}`}>{icon}</div>
          <h3 className="text-sm font-medium">{title}</h3>
        </div>
        <div className="mt-3 text-2xl font-bold text-blue-600">{value}</div>
      </div>
    );
  }

  const sendNotification = () => {
    toast.success("Pending task notification sent!");
  };

  const completed = 0;
  const total = 5;
  const percentage = (completed / total) * 100;

  return (
    <div className="min-h-screen bg-gray-100 p-6 pb-20">
      <Toaster />

      {/* Header */}
      <header className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/assets/india-emblem.png"
            alt="Gov Logo"
            className="h-10 w-10 object-contain"
          />
          <div>
            <h1 className="text-xl font-semibold text-gray-800">
              स्वच्छ भारत सुपरवाइज़र पोर्टल
            </h1>
            <p className="text-sm text-gray-600">Welcome back, John Doe 👋</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Bell className="h-6 w-6 text-gray-600" />
        </div>
      </header>

      {/* Action Buttons */}
      <div className="mb-6 flex gap-4 flex-wrap">
        <Link
          href="/assign-task"
          className="inline-flex items-center gap-2 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition"
        >
          <Plus className="h-5 w-5" />
          Assign a New Task
        </Link>
        <Link
          href="/add-location"
          className="inline-flex items-center gap-2 rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700 transition"
        >
          <MapPin className="h-5 w-5" />
          Add Location
        </Link>
      </div>

      {/* Stats Cards */}
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
        <Card icon={<Users />} title="Total Staff" value="150" />
        <Card icon={<Building2 />} title="Total Locations" value="450" color="bg-green-100" />
        <Card icon={<ClipboardList />} title="Total Assigned Tasks" value="970" color="bg-purple-100" />
        <Card icon={<Clock />} title="Pending Tasks" value="150" color="bg-yellow-100" />
        <Card icon={<CheckCircle2 />} title="Completed Tasks" value="450" color="bg-emerald-100" />
      </section>

      {/* Pending Tasks */}
      <section className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold">लंबित कार्य</h2>
          <button
            onClick={sendNotification}
            className="p-1 rounded hover:bg-gray-200"
            title="Notify Staff"
            type="button"
          >
            <Bell className="h-6 w-6 text-yellow-600" />
          </button>
        </div>
        <div className="rounded-lg bg-white p-4 shadow-sm">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium">John Doe</p>
              <p className="text-sm text-muted-foreground">5 tasks remaining</p>
              <div className="w-full bg-gray-200 h-2 rounded mt-2">
                <div
                  style={{ width: `${percentage}%` }}
                  className="h-2 bg-yellow-500 rounded"
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <BadgeCheck className="h-5 w-5 text-yellow-500" />
              <span className="text-sm">{completed}/{total}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Top Performers */}
      <section>
        <h2 className="text-lg font-semibold mb-3">शीर्ष 5 कर्मचारी</h2>
        {performers.length === 0 ? (
          <p className="text-sm text-gray-500">कोई शीर्ष प्रदर्शनकर्ता नहीं है।</p>
        ) : (
          <div className="grid gap-2">
            {performers.map((name, i) => (
              <Link
                href={`/profile/${name}`}
                key={name}
                className={`flex items-center justify-between rounded-md px-4 py-2 text-white ${
                  i === 0 ? "bg-yellow-500" : "bg-gray-700"
                } hover:bg-gray-600 transition`}
              >
                <span className="font-medium">#{i + 1} {name}</span>
                <span className="text-sm">{285 - i * 15} PT</span>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-10 flex justify-around bg-white border-t shadow md:hidden">
        {[
          { label: "Home", icon: <Home className="h-5 w-5" /> },
          { label: "Staff", icon: <Users className="h-5 w-5" /> },
          { label: "Locations", icon: <MapPin className="h-5 w-5" /> },
          { label: "Account", icon: <User className="h-5 w-5" /> },
        ].map(({ label, icon }) => (
          <div key={label} className="flex flex-col items-center p-2 text-sm text-gray-600">
            {icon}
            {label}
          </div>
        ))}
      </nav>
    </div>
  );
}
