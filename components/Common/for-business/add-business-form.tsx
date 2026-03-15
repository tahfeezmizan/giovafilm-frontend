"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { BusinessFormStep1 } from "./business-form-step1";
import { BusinessFormStep2 } from "./business-form-step2";
import { BusinessFormStep3 } from "./business-form-step3";
import { BusinessFormStep4 } from "./business-form-step4";
import { AlertCircle } from "lucide-react";

const businessFormSchema = z.object({
  // Step 1
  businessName: z.string().min(1, "Business name is required"),
  category: z.string().min(1, "Category is required"),
  businessDescription: z
    .string()
    .min(10, "Description must be at least 10 characters"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  website: z.string().url("Valid URL required").optional().or(z.literal("")),
  instagram: z.string().optional(),
  streetAddress: z.string().min(1, "Street address is required"),
  city: z.string().min(1, "City is required"),
  country: z.string().min(1, "Country is required"),
  hoursMonFriStart: z.string().min(1, "Start time required"),
  hoursMonFriEnd: z.string().min(1, "End time required"),
  hoursSatSunStart: z.string().min(1, "Start time required"),
  hoursSatSunEnd: z.string().min(1, "End time required"),

  // Step 3
  offerTitle: z.string().optional(),
  offerDescription: z.string().optional(),
  offerDiscount: z.string().optional(),
  offerValidUntil: z.string().optional(),

  // Step 4
  ownerPhone: z.string().min(1, "Owner phone is required"),
  invoicingEmail: z.string().email("Valid email required"),
});

type BusinessFormData = z.infer<typeof businessFormSchema>;

export function AddBusinessForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [businessPhotos, setBusinessPhotos] = useState<File[]>([]);
  const [menuFile, setMenuFile] = useState<File | null>(null);

  const form = useForm<BusinessFormData>({
    resolver: zodResolver(businessFormSchema),
    defaultValues: {
      businessName: "",
      category: "",
      businessDescription: "",
      phoneNumber: "",
      website: "",
      instagram: "",
      streetAddress: "",
      city: "",
      country: "",
      hoursMonFriStart: "09:00",
      hoursMonFriEnd: "18:00",
      hoursSatSunStart: "10:00",
      hoursSatSunEnd: "16:00",
      offerTitle: "",
      offerDescription: "",
      offerDiscount: "",
      offerValidUntil: "",
      ownerPhone: "",
      invoicingEmail: "",
    },
  });

  const onSubmit = async (data: BusinessFormData) => {
    if (currentStep === 4) {
      setIsSubmitting(true);
      try {
        console.log("[v0] ===== BUSINESS FORM SUBMISSION =====");
        console.log("[v0] Form Data:", data);

        // Here you would typically send data to a backend API
        alert("Business submitted successfully! Check console for details.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const progressPercentage = (currentStep / 4) * 100;

  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Add Your Business
        </h1>

        {/* Progress Bar */}
        <div className="mb-8 space-y-2 border p-6 rounded-lg border-gray-200/50">
          <div className="flex items-center justify-between mb-2">
            <div>
              <p className="text-gray-500/80 uppercase tracking-wider font-bold">
                Business Progress
              </p>
            </div>
            <p className="text-sm font-semibold text-primary">
              Step {currentStep} of 4 ({progressPercentage.toFixed(0)}%)
            </p>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-yellow-400 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {/* Info Banner */}
        <div className="bg-primary/10 border border-primary/50 flex items-center gap-5 mb-8 p-4 rounded-lg font-public-sans">
          <AlertCircle className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-black">
              You won't be charged until approved
            </p>
            <p className="text-sm text-gray-500">
              Our team reviews all listings to ensure quality and community
              standards.
            </p>
          </div>
          <Button className="ml-auto text-sm font-semibold text-black">
            Learn More
          </Button>
        </div>

        {/* Form */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="bg-white rounded-lg border border-gray-200/50 p-8 space-y-8"
          >
            {currentStep === 1 && <BusinessFormStep1 form={form} />}
            {currentStep === 2 && (
              <BusinessFormStep2
                businessPhotos={businessPhotos.map((f) =>
                  URL.createObjectURL(f),
                )}
                menuFile={menuFile ? URL.createObjectURL(menuFile) : undefined}
                onPhotosChange={setBusinessPhotos}
                onMenuChange={setMenuFile}
              />
            )}
            {currentStep === 3 && <BusinessFormStep3 form={form} />}
            {currentStep === 4 && <BusinessFormStep4 form={form} />}

            {/* Navigation Buttons */}
            <div className="flex gap-3 pt-8 border-t">
              {currentStep > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="flex-1 py-6 text-base font-semibold"
                >
                  Back
                </Button>
              )}

              {currentStep < 4 ? (
                <Button
                  type="button"
                  onClick={async () => {
                    // Validate current step fields
                    const fieldsToValidate = {
                      1: [
                        "businessName",
                        "category",
                        "businessDescription",
                        "phoneNumber",
                        "streetAddress",
                        "city",
                        "country",
                      ],
                      2: [],
                      3: [],
                    };

                    const stepFields =
                      fieldsToValidate[
                        currentStep as keyof typeof fieldsToValidate
                      ] || [];
                    const isValid = await form.trigger(stepFields as any);

                    if (isValid || currentStep === 2 || currentStep === 3) {
                      setCurrentStep(currentStep + 1);
                    }
                  }}
                  className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-6 text-base"
                >
                  Continue
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-6 text-base"
                >
                  {isSubmitting ? "Submitting..." : "Submit and Finish"}
                </Button>
              )}
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
