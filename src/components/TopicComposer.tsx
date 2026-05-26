"use client";

import { ArrowRight, Flame, WandSparkles } from "lucide-react";
import { useMemo, useState } from "react";

const starters = [
  "Become vegan",
  "Vote for the other party",
  "Delete social media",
  "Move to a walkable city"
];

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 64);
}

export function TopicComposer() {
  const [topic, setTopic] = useState(starters[0]);

  const slug = useMemo(() => slugify(topic) || "new-case", [topic]);

  return (
    <div className="takeComposer" aria-label="Start a SteelManThis case">
      <div className="composerPrompt">
        <Flame size={18} aria-hidden="true" />
        <label htmlFor="topicPrompt">Convince me to</label>
      </div>
      <div className="takeInputRow">
        <input
          id="topicPrompt"
          type="text"
          value={topic}
          onChange={(event) => setTopic(event.target.value)}
          spellCheck="true"
        />
        <a href="#case-lab" className="primaryAction">
          <WandSparkles size={18} aria-hidden="true" />
          Steelman it
          <ArrowRight size={18} aria-hidden="true" />
        </a>
      </div>
      <div className="takeMeta">
        <span>/case/{slug}</span>
        <span>Claim cards, receipts, objections, replies.</span>
      </div>
      <div className="starterBelt" aria-label="Example prompts">
        {starters.map((starter) => (
          <button key={starter} type="button" onClick={() => setTopic(starter)}>
            {starter}
          </button>
        ))}
      </div>
    </div>
  );
}
