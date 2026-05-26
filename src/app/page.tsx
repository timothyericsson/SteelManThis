import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  ChevronsUp,
  CircleGauge,
  Flame,
  MessageSquareQuote,
  Pickaxe,
  Rocket,
  SearchCheck,
  ShieldQuestion,
  ChevronRight,
  Trophy
} from "lucide-react";
import { TopicComposer } from "@/components/TopicComposer";
import { WaitlistForm } from "@/components/WaitlistForm";

const battleCards = [
  {
    title: "Be vegan",
    tag: "Ethics",
    heat: "92",
    color: "coral",
    line: "Lead with avoidable harm. Skip the guilt trip."
  },
  {
    title: "Vote across party lines",
    tag: "Politics",
    heat: "87",
    color: "blue",
    line: "Make the cross-pressure honest before making the pitch."
  },
  {
    title: "Quit social media",
    tag: "Life",
    heat: "89",
    color: "yellow",
    line: "The best case is not moral panic. It is attention math."
  },
  {
    title: "Move to a dense city",
    tag: "Urbanism",
    heat: "84",
    color: "green",
    line: "Start with time, friends, sidewalks, and the price of isolation."
  }
];

const principles = [
  {
    icon: SearchCheck,
    title: "Receipts beat vibes",
    text: "Good stories help. Good evidence survives the comments."
  },
  {
    icon: ShieldQuestion,
    title: "Objections get a throne",
    text: "The strongest counterargument sits on the page, not buried below it."
  },
  {
    icon: Trophy,
    title: "Skeptics score the win",
    text: "A case climbs when people outside the choir say it made them update."
  }
];

const labRows = [
  {
    label: "The hook",
    text: "Start with the version a smart opponent would not laugh off.",
    score: "+31"
  },
  {
    label: "The receipts",
    text: "Stack studies, incentives, lived experience, and concrete examples.",
    score: "+28"
  },
  {
    label: "The hard part",
    text: "Name the cost. Admit the weird edge case. Keep going.",
    score: "+19"
  }
];

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <Image
          src="/steelman-fun-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="heroImage"
        />
        <div className="heroShade" />
        <nav className="topNav" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="SteelManThis home">
            <span aria-hidden="true">SMT</span>
            SteelManThis
          </a>
          <div className="navLinks">
            <a href="#case-lab">Lab</a>
            <a href="#arena">Topics</a>
            <a href="#join">Join</a>
          </div>
        </nav>

        <div className="heroContent" id="top">
          <p className="eyebrow">Hot takes go in. Strong cases come out.</p>
          <h1 id="hero-title">SteelManThis</h1>
          <p className="heroCopy">
            Drop any belief, decision, or worldview. The crowd turns it into
            the best fair argument on the internet, with the strongest
            objections sitting right beside it.
          </p>
          <TopicComposer />
        </div>
      </section>

      <section className="scoreStrip" aria-label="Site promise">
        <div className="scoreItem">
          <Flame size={22} aria-hidden="true" />
          <span>Messy prompt</span>
        </div>
        <div className="scoreItem">
          <Pickaxe size={22} aria-hidden="true" />
          <span>Argument mined</span>
        </div>
        <div className="scoreItem">
          <BadgeCheck size={22} aria-hidden="true" />
          <span>Best case wins</span>
        </div>
      </section>

      <section className="sectionShell playbookSection">
        <div className="sectionHeader">
          <p className="eyebrow">The whole game</p>
          <h2>One topic becomes one canonical community case.</h2>
          <p>
            Reddit gives you a thousand replies. SteelManThis squeezes the
            chaos into the cleanest argument a skeptic can actually inspect.
          </p>
        </div>
        <div className="playbookGrid">
          <article>
            <Rocket size={24} aria-hidden="true" />
            <h3>Drop the take</h3>
            <p>&ldquo;Convince me to be vegan.&rdquo; &ldquo;Convince me to switch parties.&rdquo;</p>
          </article>
          <article>
            <ChevronsUp size={24} aria-hidden="true" />
            <h3>Buff the case</h3>
            <p>The crowd edits the argument upward instead of farming replies.</p>
          </article>
          <article>
            <MessageSquareQuote size={24} aria-hidden="true" />
            <h3>Face the boss fight</h3>
            <p>The hardest objection gets its own lane and cannot be dodged.</p>
          </article>
          <article>
            <Trophy size={24} aria-hidden="true" />
            <h3>Crown the keeper</h3>
            <p>The page keeps the strongest version on top as the topic evolves.</p>
          </article>
        </div>
      </section>

      <section className="sectionShell labSection" id="case-lab">
        <div className="labIntro">
          <p className="eyebrow">Inside a case page</p>
          <h2>The page feels less like a thread, more like a scoreboard.</h2>
        </div>

        <div className="caseLab" aria-label="Example SteelManThis case page">
          <div className="labTop">
            <div>
              <span>Now steelmanning</span>
              <strong>Convince me to move to a walkable city</strong>
            </div>
            <a href="#join" className="miniAction">
              Join the build
              <ChevronRight size={17} aria-hidden="true" />
            </a>
          </div>

          <div className="labGrid">
            <aside className="heatPanel" aria-label="Case score">
              <CircleGauge size={28} aria-hidden="true" />
              <strong>96</strong>
              <span>skeptic score</span>
              <p>People who started unsure are moving.</p>
            </aside>

            <div className="labStack">
              {labRows.map((row) => (
                <article className="labCard" key={row.label}>
                  <div>
                    <span>{row.label}</span>
                    <p>{row.text}</p>
                  </div>
                  <strong>{row.score}</strong>
                </article>
              ))}
            </div>

            <aside className="bossCard" aria-label="Strongest objection">
              <ShieldQuestion size={28} aria-hidden="true" />
              <span>Boss objection</span>
              <h3>&ldquo;Isn&apos;t this just expensive urban lifestyle branding?&rdquo;</h3>
              <p>
                The top reply has to answer cost, families, disability,
                weather, and job location without pretending they are fake.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section
        className="sectionShell arenaSection"
        id="arena"
        aria-labelledby="topics-title"
      >
        <div className="sectionHeader">
          <p className="eyebrow">The argument arcade</p>
          <h2 id="topics-title">Start with the fights people actually have.</h2>
          <p>
            Politics, diets, money, cities, parenting, work, religion, tech.
            The messier the topic, the more useful the best version becomes.
          </p>
        </div>
        <div className="battleGrid">
          {battleCards.map((topic) => (
            <article className={`battleCard ${topic.color}`} key={topic.title}>
              <div className="battleMeta">
                <span>{topic.tag}</span>
                <strong>{topic.heat}</strong>
              </div>
              <h3>{topic.title}</h3>
              <p>{topic.line}</p>
              <a href="#join">
                Read the case
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="sectionShell rulesSection">
        {principles.map((principle) => (
          <article className="ruleCard" key={principle.title}>
            <principle.icon size={28} aria-hidden="true" />
            <h3>{principle.title}</h3>
            <p>{principle.text}</p>
          </article>
        ))}
      </section>

      <section className="joinSection" id="join">
        <div className="joinCopy">
          <p className="eyebrow">Early access</p>
          <h2>Help pick the first 100 arguments.</h2>
          <p>
            We are launching with topics that deserve better than another
            comment pile.
          </p>
        </div>
        <WaitlistForm />
        <div className="footerTicker" aria-label="Example launch topics">
          {[
            "veganism",
            "tariffs",
            "remote work",
            "having kids",
            "nuclear energy"
          ].map((topic) => (
            <span key={topic}>{topic}</span>
          ))}
        </div>
      </section>
    </main>
  );
}
