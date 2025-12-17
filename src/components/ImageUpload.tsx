"use client";

import { UploadButton } from "@/lib/uploadthing";
import {XIcon} from "lucide-react";
import toast from "react-hot-toast";

interface ImageUploadProps {
    onChange: (url: string) => void;
    value: string;
    endpoint: "postImage";
}

export function ImageUpload ({endpoint, onChange, value}: ImageUploadProps) {
 if (value) {
    console.log(value);
    return (
      <div className="relative size-40">
        <img src={value} alt="Upload" className="rounded-md size-40 object-cover" />
        <button
          onClick={() => onChange("")}
          className="absolute top-0 right-0 p-1 bg-red-500 rounded-full shadow-sm"
          type="button"
        >
          <XIcon className="h-4 w-4 text-white" />
        </button>
      </div>
    );
  }
  return (
    <UploadButton
        endpoint={endpoint}
        appearance={{
          button: "bg-blue-500 text-white hover:bg-blue-700 p-4 rounded-lg",
          container: "flex justify-center mt-4",
        }}
        onClientUploadComplete={(res) => {
          onChange(res?.[0].url);
          console.log("Upload completed:", res);
          toast("✅ Upload done!", );
        }}
        onUploadError={(err) => {
          console.error("Upload error:", err);
          toast("❌ Upload failed");
        }}
        onUploadBegin={(file) => {
          console.log("Uploading:", file);
        }}
      />

  );
}
export default ImageUpload;