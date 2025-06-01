import React from "react";

// Reuse the ProfilePhoto component defined earlier or define it here
function ProfilePhoto({
  name,
  imageUrl,
  size = "md",
}: {
  name: string;
  imageUrl?: string;
  size?: "sm" | "md" | "lg";
}) {
  const getSize = () => {
    switch (size) {
      case "sm":
        return "h-8 w-8 text-sm";
      case "lg":
        return "h-24 w-24 text-4xl";
      default:
        return "h-16 w-16 text-2xl";
    }
  };

  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return imageUrl ? (
    <img
      src={imageUrl}
      alt={name}
      className={`rounded-full object-cover ${getSize()}`}
    />
  ) : (
    <div
      className={`flex items-center justify-center rounded-full bg-blue-100 text-blue-700 font-semibold ${getSize()}`}
    >
      {initials}
    </div>
  );
}

interface ProfileProps {
  params: {
    username: string; // dynamic segment from URL
  };
}

export default function UserProfile({ params }: ProfileProps) {
  const { username } = params;

  // You can replace this with actual fetch logic or API call
  const userData = {
    fullName: username.replace(/([A-Z])/g, " $1").trim(), // e.g. "RahulSharma" => "Rahul Sharma"
    imageUrl: "", // leave blank to fallback to initials
    email: `${username.toLowerCase()}@example.com`,
    location: "New Delhi, India",
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-md mx-auto rounded-lg bg-white p-6 shadow">
        <div className="flex flex-col items-center gap-4">
          <ProfilePhoto
            name={userData.fullName}
            imageUrl={userData.imageUrl}
            size="lg"
          />
          <h1 className="text-2xl font-semibold text-gray-800">
            {userData.fullName}
          </h1>
          <p className="text-gray-600">{userData.email}</p>
          <p className="text-gray-600 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.657 16.657L13.414 12.414a2 2 0 10-2.828 2.828l4.243 4.243a8 8 0 1111.314-11.314z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            {userData.location}
          </p>
        </div>
      </div>
    </div>
  );
}
