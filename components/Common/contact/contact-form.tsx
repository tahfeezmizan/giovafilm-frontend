"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

/**
 * ContactForm Component
 *
 * A reusable contact form with the following fields:
 * - Name
 * - Email
 * - Subject (dropdown)
 * - Message (textarea)
 *
 * The form handles input changes and submission with proper state management.
 */

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactForm() {
  // State to manage form inputs
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  // Handler for form input changes
  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Handler for form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      subject: "General Inquiry",
      message: "",
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 md:p-10">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name and Email row - two columns on desktop, one on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Name input field */}
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-900"
            >
              Name
            </label>
            <Input
              id="name"
              type="text"
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          {/* Email input field */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-900"
            >
              Email Address
            </label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>
        </div>

        {/* Subject dropdown */}
        <div className="space-y-2">
          <label
            htmlFor="subject"
            className="block text-sm font-semibold text-gray-900"
          >
            Subject
          </label>
          <Select
            value={formData.subject}
            onValueChange={(value) => handleInputChange("subject", value)}
          >
            <SelectTrigger className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="General Inquiry">General Inquiry</SelectItem>
              <SelectItem value="Trip Planning">Trip Planning</SelectItem>
              <SelectItem value="Partnership">Partnership</SelectItem>
              <SelectItem value="Support">Support</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Message textarea */}
        <div className="space-y-2">
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-gray-900"
          >
            Message
          </label>
          <textarea
            id="message"
            placeholder="Tell us more about your adventure..."
            value={formData.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none h-32 font-sans"
            required
          ></textarea>
        </div>

        {/* Submit button */}
        <Button
          type="submit"
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 rounded-lg transition-colors text-base"
        >
          Send Message →
        </Button>
      </form>
    </div>
  );
}
