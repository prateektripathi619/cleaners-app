"use client";

import { useState } from "react";
import { Plus, Trash2, ArrowLeftCircle } from "lucide-react";
import Link from "next/link";

export default function AddLocationPage() {
  const [area, setArea] = useState("");
  const [subAreas, setSubAreas] = useState<string[]>([""]);

  const handleSubAreaChange = (index: number, value: string) => {
    const updated = [...subAreas];
    updated[index] = value;
    setSubAreas(updated);
  };

  const addSubArea = () => {
    setSubAreas([...subAreas, ""]);
  };

  const removeSubArea = (index: number) => {
    const updated = subAreas.filter((_, i) => i !== index);
    setSubAreas(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!area.trim()) {
      alert("Please enter an Area name.");
      return;
    }

    const validSubAreas = subAreas.filter((sub) => sub.trim() !== "");
    if (validSubAreas.length === 0) {
      alert("Please enter at least one Sub-Area.");
      return;
    }

    // Simulate save (send to API)
    console.log("Area:", area);
    console.log("Sub-Areas:", validSubAreas);

    alert("🎉 Location added successfully!");

    // Reset form
    setArea("");
    setSubAreas([""]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-6">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-lg relative">
        {/* Back to Dashboard */}
        

        <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">
          🏙️ Add New Location
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Area Input */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Area Name
            </label>
            <input
              type="text"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              placeholder="e.g. NIT Raipur"
              className="w-full rounded-md border border-gray-300 p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Sub-Areas */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Sub-Areas
            </label>

            <div className="space-y-3">
              {subAreas.map((sub, index) => (
                <div key={index} className="flex items-center gap-2">
                  <input
                    type="text"
                    value={sub}
                    onChange={(e) => handleSubAreaChange(index, e.target.value)}
                    placeholder={`Sub-Area ${index + 1}`}
                    className="flex-1 rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                  {subAreas.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeSubArea(index)}
                      title="Remove Sub-Area"
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  )}
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={addSubArea}
              className="mt-3 inline-flex items-center text-blue-600 text-sm hover:underline"
            >
              <Plus className="h-4 w-4 mr-1" />
              Add another Sub-Area
            </button>
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition shadow-md"
            >
              Save Location
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
