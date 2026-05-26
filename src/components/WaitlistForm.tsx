"use client";

import { PartyPopper } from "lucide-react";
import { FormEvent, useState } from "react";

export function WaitlistForm() {
  const [joined, setJoined] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setJoined(true);
  }

  return (
    <form className="joinForm" onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <div className="joinInputRow">
        <input
          id="email"
          type="email"
          placeholder="you@example.com"
          required
          disabled={joined}
        />
        <button type="submit" disabled={joined}>
          <PartyPopper size={18} aria-hidden="true" />
          {joined ? "You're in" : "Get in"}
        </button>
      </div>
    </form>
  );
}
