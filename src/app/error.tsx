"use client";

import { useEffect } from "react";

interface Error {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: Error) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container flex h-full flex-col items-center justify-center">
      <h2 className="text-destructive">Something went wrong!</h2>
      <button
        onClick={() => reset()}
        className="bg-primary text-primary-foreground"
      >
        Try again
      </button>
    </div>
  );
}
