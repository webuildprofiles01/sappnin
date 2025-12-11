"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          success: true,
          message: "Thank you! Your message has been sent.",
        });
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
      } else {
        setSubmitStatus({
          success: false,
          message: "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-[90vw] sm:max-w-[37.21vw] h-[auto] mx-auto w-full border-0 sm:border-2 sm:border-white rounded-2xl">
      <div className="bg-transparent sm:bg-black/40 backdrop-blur-none sm:backdrop-blur-sm rounded-2xl p-0 sm:p-8 border-none sm:border border-white/20">
        <h2 className="text-[6.33vw] sm:text-[3.06vw] font-bold mb-4 text-center text-white">
          CONTACT US
        </h2>

        {submitStatus.message && (
          <div
            className={`mb-6 p-4 rounded-lg text-center ${
              submitStatus.success
                ? "bg-green-100 text-green-800 border border-green-200"
                : "bg-red-100 text-red-800 border border-red-200"
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-1 gap-4">
            <div className="space-y-1">
            <label
              htmlFor="firstName"
              className="hidden sm:block text-white/80 sm:text-[0.9vw] font-medium"
            >
              First Name
            </label>
            <Input
              id="firstName"
              name="firstName"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleChange}
              className="bg-white border-0 rounded-[5.12px] sm:rounded-lg px-[2vw] sm:px-[1vw] py-[4.5vw] sm:py-[1.5vw] text-black placeholder:text-gray-350 placeholder:text-[2.52vw] sm:placeholder:text-[0.9vw]"
              required
            />
          </div>

          <div className="space-y-1">
            <label
              htmlFor="lastName"
              className="hidden sm:block text-white/80 text-[0.9vw] font-medium"
            >
              Last Name
            </label>
            <Input
              id="lastName"
              name="lastName"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={handleChange}
              className="bg-white border-0 rounded-[5.12px] sm:rounded-lg px-[2vw] sm:px-[1vw] py-[4.5vw] sm:py-[1.5vw] text-black placeholder:text-gray-350 placeholder:text-[2.52vw] sm:placeholder:text-[0.9vw]"
              required
            />
          </div>
          </div>

          <div className="space-y-1">
            <label
              htmlFor="email"
              className="hidden sm:block text-white/80 text-[0.9vw] font-medium"
            >
              Your Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="bg-white border-0 rounded-[5.12px] sm:rounded-lg px-[2vw] sm:px-[1vw] py-[4.5vw] sm:py-[1.5vw] text-black placeholder:text-gray-350 placeholder:text-[2.52vw] sm:placeholder:text-[0.9vw]"
              required
            />
          </div>

          <div className="space-y-1">
            <label
              htmlFor="message"
              className="hidden sm:block text-white/80 text-[0.9vw] font-medium"
            >
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Write your Message"
              value={formData.message}
              onChange={handleChange}
              className="bg-white border-0 rounded-[5.12px] sm:rounded-lg px-[2vw] sm:px-[1vw] py-[4.5vw] sm:py-[1.5vw] min-h-[150px] sm:min-h-[100px] text-black placeholder:text-gray-350 placeholder:text-[2.52vw] sm:placeholder:text-[0.9vw]"
              required
            />
          </div>

          <div className="flex justify-center sm:justify-start w-full pt-2">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-brand-orange hover:bg-brand-orange/90 disabled:bg-brand-orange/50 text-white py-3 px-6 rounded-lg text-base uppercase rounded-full"
            >
              {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
