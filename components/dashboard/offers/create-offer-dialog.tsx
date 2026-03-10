"use client";

import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload } from "lucide-react";

interface CreateOfferDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface FormData {
  title: string;
  place: string;
  description: string;
  discountType: string;
  discountValue: string;
  validFrom: string;
  validUntil: string;
  redemptionRules: string;
  buttonLabel: string;
  photo: FileList;
}

export function CreateOfferDialog({
  open,
  onOpenChange,
}: CreateOfferDialogProps) {
  const { register, handleSubmit, reset, setValue } = useForm<FormData>();

  const fileRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const openFileWindow = () => {
    fileRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setPreview(URL.createObjectURL(file));
      setValue("photo", e.target.files as FileList);
    }
  };

  const removePhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPreview(null);
    setValue("photo", undefined as any);

    if (fileRef.current) {
      fileRef.current.value = "";
    }
  };

  const onSubmit = (data: FormData) => {
    console.log("Saving offer:", data);

    if (data.photo && data.photo.length > 0) {
      console.log("Uploaded file:", data.photo[0]);
    }

    onOpenChange(false);
    reset();
    setPreview(null);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="min-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Create New Offer
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 py-4">
          {/* Offer Photo */}
          <div>
            <Label className="text-sm font-medium text-gray-700 mb-2 block">
              Offer Photo
            </Label>

            <div
              onClick={openFileWindow}
              className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors cursor-pointer relative"
            >
              {preview ? (
                <div className="relative">
                  <img
                    src={preview}
                    alt="preview"
                    className="mx-auto max-h-48 rounded-md"
                  />

                  <button
                    type="button"
                    onClick={removePhoto}
                    className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <>
                  <Upload className="mx-auto mb-2 text-gray-400" size={32} />
                  <p className="text-sm text-gray-600">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
                </>
              )}

              <input
                type="file"
                className="hidden"
                accept="image/*"
                {...register("photo")}
                ref={(e) => {
                  register("photo").ref(e);
                  fileRef.current = e;
                }}
                onChange={handleFileChange}
              />
            </div>
          </div>

          {/* Offer Title */}
          <div>
            <Label
              htmlFor="title"
              className="text-sm font-medium text-gray-700"
            >
              Offer Title
            </Label>
            <Input
              id="title"
              placeholder="e.g., 20% off Coffee"
              className="mt-1"
              {...register("title")}
            />
          </div>

          {/* Place */}
          <div>
            <Label
              htmlFor="place"
              className="text-sm font-medium text-gray-700"
            >
              Place
            </Label>
            <Input
              id="place"
              placeholder="Select or enter place name"
              className="mt-1"
              {...register("place")}
            />
          </div>

          {/* Offer Description */}
          <div>
            <Label
              htmlFor="description"
              className="text-sm font-medium text-gray-700"
            >
              Offer Description
            </Label>
            <textarea
              id="description"
              placeholder="Describe the offer..."
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
              {...register("description")}
            />
          </div>

          {/* Discount Type and Value */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label
                htmlFor="discountType"
                className="text-sm font-medium text-gray-700"
              >
                Discount Type
              </Label>
              <select
                id="discountType"
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("discountType")}
              >
                <option value="">Select discount type</option>
                <option value="percentage">Percentage</option>
                <option value="fixed">Fixed Amount</option>
                <option value="bogo">Buy One Get One</option>
                <option value="free">Free Item</option>
              </select>
            </div>

            <div>
              <Label
                htmlFor="discountValue"
                className="text-sm font-medium text-gray-700"
              >
                Discount Value
              </Label>
              <Input
                id="discountValue"
                placeholder="20"
                className="mt-1"
                {...register("discountValue")}
              />
            </div>
          </div>

          {/* Valid From and Valid Until */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label
                htmlFor="validFrom"
                className="text-sm font-medium text-gray-700"
              >
                Valid From
              </Label>
              <Input
                id="validFrom"
                type="date"
                className="mt-1"
                {...register("validFrom")}
              />
            </div>

            <div>
              <Label
                htmlFor="validUntil"
                className="text-sm font-medium text-gray-700"
              >
                Valid Until
              </Label>
              <Input
                id="validUntil"
                type="date"
                className="mt-1"
                {...register("validUntil")}
              />
            </div>
          </div>

          {/* Redemption Rules */}
          <div>
            <Label
              htmlFor="redemptionRules"
              className="text-sm font-medium text-gray-700"
            >
              Redemption Rules
            </Label>
            <textarea
              id="redemptionRules"
              placeholder="e.g., One per user..."
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
              {...register("redemptionRules")}
            />
          </div>

          {/* Button Label */}
          <div>
            <Label
              htmlFor="buttonLabel"
              className="text-sm font-medium text-gray-700"
            >
              Button Label
            </Label>
            <Input
              id="buttonLabel"
              placeholder="Redeem Offer"
              className="mt-1"
              {...register("buttonLabel")}
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="border-gray-300"
            >
              Cancel
            </Button>

            <Button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              Save Offer
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
