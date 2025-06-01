"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import {
  Bell,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Truck,
  Users,
  BarChart3,
  Settings,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Component() {
  const announcements = [
    "Zone-A Garbage Collection Schedule Updated - New Routes Effective from Tomorrow",
    "Waste Management Staff Meeting Scheduled for 2 PM Today - All Supervisors Required",
    "New Garbage Trucks Deployed in Sector 15 and 16 - Update Vehicle Tracking System",
    "Monthly Waste Collection Report Due by End of Week - Submit to Head Office",
    "Emergency: Breakdown in Zone-C Truck No. RJ-04-1234 - Backup Vehicle Dispatched",
    "Citizen Complaint Portal Updated - Check New Grievance Management System",
    "Monsoon Preparedness Meeting Tomorrow 10 AM - All Zone Heads Mandatory Attendance",
  ];

  const adminServices = [
    {
      title: "Vehicle Management",
      description: "Track garbage trucks, maintenance schedules",
      icon: Truck,
      status: "active",
      count: "24 Active",
    },
    {
      title: "Staff Management",
      description: "Manage workers, attendance, duty rosters",
      icon: Users,
      status: "active",
      count: "156 Staff",
    },
    {
      title: "Zone Reports",
      description: "Collection reports, zone-wise analytics",
      icon: BarChart3,
      status: "pending",
      count: "7 Zones",
    },
    {
      title: "Complaint Management",
      description: "Handle citizen complaints and grievances",
      icon: AlertTriangle,
      status: "urgent",
      count: "23 Pending",
    },
    {
      title: "Route Planning",
      description: "Optimize collection routes and schedules",
      icon: Settings,
      status: "active",
      count: "45 Routes",
    },
    {
      title: "Waste Analytics",
      description: "Daily collection data and statistics",
      icon: CheckCircle,
      status: "completed",
      count: "Today: 245T",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500";
      case "pending":
        return "bg-yellow-500";
      case "urgent":
        return "bg-red-500";
      case "completed":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "active":
        return "Active";
      case "pending":
        return "Pending";
      case "urgent":
        return "Urgent";
      case "completed":
        return "Completed";
      default:
        return "Unknown";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Waste Management Operations"
          fill
          className="object-cover opacity-15"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/80 to-green-800/60" />
      </div>

      {/* Header */}
      <header className="relative z-10 bg-green-900/95 backdrop-blur-sm border-b border-green-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <Truck className="w-6 h-6 text-green-900" />
              </div>
              <div>
                <h1 className="text-white font-bold text-lg">
                  नगर निगम रायपुर
                </h1>
                <p className="text-green-200 text-xs">
                  Waste Management Admin Portal
                </p>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-6">
              <Link
                href="#"
                className="text-white hover:text-green-200 transition-colors"
              >
                Dashboard
              </Link>
              <Link
                href="#"
                className="text-white hover:text-green-200 transition-colors"
              >
                Reports
              </Link>
              <Link
                href="#"
                className="text-white hover:text-green-200 transition-colors"
              >
                Settings
              </Link>
              <Link
                href="#"
                className="text-white hover:text-green-200 transition-colors"
              >
                Help
              </Link>
            </nav>

            <Button
              asChild
              className="bg-white text-green-900 hover:bg-green-50"
            >
              <Link href="/signin">
                Admin Login
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Auto-scrolling Announcements */}
      <div className="relative z-10 bg-orange-600 text-white py-2 overflow-hidden">
        <div className="flex items-center">
          <div className="flex-shrink-0 px-4 flex items-center">
            <Bell className="h-4 w-4 mr-2" />
            <span className="font-semibold text-sm">ADMIN ALERTS:</span>
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="animate-scroll flex whitespace-nowrap">
              {announcements.map((announcement, index) => (
                <span key={index} className="inline-block px-8 text-sm">
                  {announcement}
                </span>
              ))}
              {/* Duplicate for seamless loop */}
              {announcements.map((announcement, index) => (
                <span
                  key={`duplicate-${index}`}
                  className="inline-block px-8 text-sm"
                >
                  {announcement}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            रायपुर नगर निगम
            <span className="block text-green-200">
              Waste Management System
            </span>
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Administrative Portal for Garbage Collection, Vehicle Tracking, and
            Staff Management in Raipur Municipal Corporation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-green-900 hover:bg-green-50"
            >
              Access Admin Dashboard
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-900"
            >
              View Today's Reports
            </Button>
          </div>
        </div>

        {/* Admin Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {adminServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="bg-white/95 backdrop-blur-sm hover:bg-white transition-all duration-300 hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900">
                          {service.title}
                        </h3>
                        <p className="text-sm text-gray-500">{service.count}</p>
                      </div>
                    </div>
                    <Badge
                      className={`${getStatusColor(
                        service.status
                      )} text-white text-xs`}
                    >
                      {getStatusText(service.status)}
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    {service.description}
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Access Module
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card className="bg-white/95 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">245T</div>
              <div className="text-sm text-gray-600">Today's Collection</div>
            </CardContent>
          </Card>
          <Card className="bg-white/95 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/26</div>
              <div className="text-sm text-gray-600">Vehicles Active</div>
            </CardContent>
          </Card>
          <Card className="bg-white/95 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">23</div>
              <div className="text-sm text-gray-600">Pending Complaints</div>
            </CardContent>
          </Card>
          <Card className="bg-white/95 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">156</div>
              <div className="text-sm text-gray-600">Staff on Duty</div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <Card className="bg-white/95 backdrop-blur-sm">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Emergency Contact Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-600" />
                <div>
                  <p className="font-semibold text-gray-900">Control Room</p>
                  <p className="text-gray-600">0771-2234567</p>
                  <p className="text-xs text-gray-500">24/7 Emergency</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-600" />
                <div>
                  <p className="font-semibold text-gray-900">Admin Email</p>
                  <p className="text-gray-600">
                    waste.admin@raipurnagar.gov.in
                  </p>
                  <p className="text-xs text-gray-500">
                    Official Communication
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-green-600" />
                <div>
                  <p className="font-semibold text-gray-900">Head Office</p>
                  <p className="text-gray-600">Nagar Nigam Bhawan, Raipur</p>
                  <p className="text-xs text-gray-500">Chhattisgarh - 492001</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Admin Modules</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-green-300">
                    Vehicle Tracking
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-300">
                    Staff Management
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-300">
                    Route Planning
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-300">
                    Complaint System
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Reports</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-green-300">
                    Daily Collection
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-300">
                    Zone-wise Reports
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-300">
                    Vehicle Maintenance
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-300">
                    Staff Attendance
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Zone Management</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-green-300">
                    Zone A - Central Raipur
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-300">
                    Zone B - Shankar Nagar
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-300">
                    Zone C - Telibandha
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-300">
                    All Zones Overview
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-green-300">
                    Technical Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-300">
                    User Manual
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-300">
                    System Status
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-300">
                    Contact IT Team
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
            <p>
              &copy; {new Date().getFullYear()} Raipur Municipal Corporation -
              Waste Management Division. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
      `}</style>
    </div>
  );
}
