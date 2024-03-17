"use client";

// Next hooks
import { useRouter } from "next/navigation";

// Shadcn/ui components
import { Button } from "./ui/button";

// Icons
import { ArrowLeft } from "lucide-react";

interface GoBackProps {
  title: string;
}

export function BackButton({ title }: GoBackProps) {
  const router = useRouter();
  return (
    <Button
      variant={"outline"}
      className="flex items-center gap-1"
      onClick={() => router.back()}
    >
      <ArrowLeft />
      <p>{title}</p>
    </Button>
  );
}
