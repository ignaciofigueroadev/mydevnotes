"use client";

// Utils
import { errors } from "@/constants/site";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <h2>{errors.globalError}</h2>
        <button onClick={() => reset()}>{errors.tryAgainButton}</button>
      </body>
    </html>
  );
}
