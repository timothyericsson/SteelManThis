"use client";

import { PartyPopper } from "lucide-react";
import { FormEvent, useState } from "react";

export function WaitlistForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "");

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(payload?.error || "Could not join the waitlist yet.");
      }

      setStatus("success");
      setMessage("You're in. We'll use this list for the first private build.");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Could not join the waitlist yet."
      );
    }
  }

  const isLocked = status === "submitting" || status === "success";

  return (
    <form className="joinForm" onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <div className="joinInputRow">
        <input
          id="email"
          type="email"
          placeholder="you@example.com"
          required
          name="email"
          disabled={isLocked}
        />
        <button type="submit" disabled={isLocked}>
          <PartyPopper size={18} aria-hidden="true" />
          {status === "submitting"
            ? "Sending"
            : status === "success"
              ? "You're in"
              : "Get in"}
        </button>
      </div>
      {message ? (
        <p className={`formMessage ${status === "error" ? "error" : ""}`}>
          {message}
        </p>
      ) : null}
    </form>
  );
}
