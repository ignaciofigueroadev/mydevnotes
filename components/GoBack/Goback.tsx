"use client";

// Next hooks
import { useRouter } from "next/navigation";

// Shadcn/ui components
import { Button } from "../ui/button";

// Icons
import { ArrowLeft } from "lucide-react";

export function GoBack() {
  const router = useRouter();
  return (
    <Button
      variant={"outline"}
      className="flex gap-2"
      onClick={() => router.back()}
    >
      <ArrowLeft />
      {/* Back */}
    </Button>
  );
}
