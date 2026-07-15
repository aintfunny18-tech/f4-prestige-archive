"use client";

import { Fragment, useCallback, useEffect, useMemo, useState } from "react";

const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

type Character = {
  id: string;
  name: string;
  classTitle: string;
  portrait: string;
  sigil: string;
  motif: string;
  summary: string;
  entryId?: string;
};

type Entry = {
  id: string;
  characterId: string;
  title: string;
  eyebrow: string;
  portrait: string;
  motif: string;
  status: string;
  sourceStart: string;
  sourceEnd: string;
};

const characters: Character[] = [
  {
    id: "konte",
    name: "Konte Spatium",
    classTitle: "Space-Time Savant",
    portrait: asset("portraits/Konte.png"),
    sigil: "⌬",
    motif: "violet",
    summary: "Fold spell geometry, revise position, and borrow a moment from the future.",
    entryId: "konte",
  },
  {
    id: "thackeray",
    name: "Thackeray A. M. Holmes",
    classTitle: "Arcane Annotator",
    portrait: asset("portraits/Thackeray.png"),
    sigil: "✒",
    motif: "ink",
    summary: "Write corrections into reality with living ink and spectral marginalia.",
    entryId: "thackeray",
  },
  {
    id: "vorn",
    name: "Vorn Don’eld",
    classTitle: "Choose one of two theses",
    portrait: asset("portraits/Vorn.png"),
    sigil: "✦",
    motif: "prismari",
    summary: "Unite blade and spell—or transform the battlefield into a Prismari finale.",
  },
  {
    id: "aicusa",
    name: "Aicusa Ossya",
    classTitle: "Arcano-Botanist",
    portrait: asset("portraits/Aicusa.png"),
    sigil: "❧",
    motif: "verdant",
    summary: "Open an impossible conservatory and cultivate specimens for any crisis.",
    entryId: "aicusa",
  },
  {
    id: "wet",
    name: "Wēt",
    classTitle: "Tattooed Spellrager",
    portrait: asset("portraits/W%C4%93t.png"),
    sigil: "ᛉ",
    motif: "ember",
    summary: "Awaken spell-runes through fury and weave battle magic into every strike.",
    entryId: "wet",
  },
  {
    id: "jacob",
    name: "Jacob / Vesper Palamer",
    classTitle: "Sanguine Assassin",
    portrait: asset("portraits/Vesper(Jacob).png"),
    sigil: "◈",
    motif: "sanguine",
    summary: "Trace the living current of blood, lash from afar, and manifest a hemic echo.",
    entryId: "jacob",
  },
];

const entries: Entry[] = [
  {
    id: "vorn-duskblade",
    characterId: "vorn",
    title: "Duskblade Virtuoso",
    eyebrow: "Vorn Don’eld · Martial Thesis",
    portrait: asset("portraits/Vorn.png"),
    motif: "prismari",
    status: "Approved",
    sourceStart: "# Duskblade Virtuoso",
    sourceEnd: "# Prismari Maestro",
  },
  {
    id: "vorn-maestro",
    characterId: "vorn",
    title: "Prismari Maestro",
    eyebrow: "Vorn Don’eld · Performance Thesis",
    portrait: asset("portraits/Vorn.png"),
    motif: "prismari",
    status: "Approved",
    sourceStart: "# Prismari Maestro",
    sourceEnd: "# Wēt",
  },
  {
    id: "wet",
    characterId: "wet",
    title: "Tattooed Spellrager",
    eyebrow: "Wēt · Runic Thesis",
    portrait: asset("portraits/W%C4%93t.png"),
    motif: "ember",
    status: "Approved · terminology under review",
    sourceStart: "# Tattooed Spellrager",
    sourceEnd: "# Jacob / Vesper Palamer",
  },
  {
    id: "jacob",
    characterId: "jacob",
    title: "Sanguine Assassin",
    eyebrow: "Jacob / Vesper Palamer · Hemic Thesis",
    portrait: asset("portraits/Vesper(Jacob).png"),
    motif: "sanguine",
    status: "Approved",
    sourceStart: "# Sanguine Assassin",
    sourceEnd: "# Konte Spatium",
  },
  {
    id: "konte",
    characterId: "konte",
    title: "Space-Time Savant",
    eyebrow: "Konte Spatium · Geometric Thesis",
    portrait: asset("portraits/Konte.png"),
    motif: "violet",
    status: "Approved",
    sourceStart: "# Space-Time Savant",
    sourceEnd: "# Thackeray A. M. Holmes",
  },
  {
    id: "thackeray",
    characterId: "thackeray",
    title: "Arcane Annotator",
    eyebrow: "Thackeray A. M. Holmes · Living Manuscript",
    portrait: asset("portraits/Thackeray.png"),
    motif: "ink",
    status: "Approved",
    sourceStart: "# Arcane Annotator",
    sourceEnd: "# Aicusa Ossya",
  },
  {
    id: "aicusa",
    characterId: "aicusa",
    title: "Arcano-Botanist",
    eyebrow: "Aicusa Ossya · Conservatory Thesis",
    portrait: asset("portraits/Aicusa.png"),
    motif: "verdant",
    status: "Approved",
    sourceStart: "# Arcano-Botanist",
    sourceEnd: "# End of Player Material",
  },
];

const byId = new Map(entries.map((entry) => [entry.id, entry]));

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function inline(text: string) {
  const pieces = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).filter(Boolean);
  return pieces.map((piece, index) => {
    if (piece.startsWith("**") && piece.endsWith("**")) {
      return <strong key={index}>{piece.slice(2, -2)}</strong>;
    }
    if (piece.startsWith("*") && piece.endsWith("*")) {
      return <em key={index}>{piece.slice(1, -1)}</em>;
    }
    return <Fragment key={index}>{piece}</Fragment>;
  });
}

function cells(line: string) {
  return line
    .trim()
    .replace(/^\||\|$/g, "")
    .split("|")
    .map((cell) => cell.trim());
}

function Markdown({ markdown, prefix }: { markdown: string; prefix: string }) {
  const lines = markdown.replace(/\r/g, "").split("\n");
  const blocks: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) {
      i += 1;
      continue;
    }

    const heading = line.match(/^(#{2,4})\s+(.+)$/);
    if (heading) {
      const level = heading[1].length;
      const title = heading[2];
      const id = `${prefix}-${slugify(title)}`;
      if (level === 2) blocks.push(<h2 id={id} key={i}>{inline(title)}</h2>);
      else if (level === 3) blocks.push(<h3 id={id} key={i}>{inline(title)}</h3>);
      else blocks.push(<h4 id={id} key={i}>{inline(title)}</h4>);
      i += 1;
      continue;
    }

    if (line.trim().startsWith("|") && i + 1 < lines.length && /^\s*\|?\s*:?-+/.test(lines[i + 1])) {
      const header = cells(line);
      i += 2;
      const rows: string[][] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        rows.push(cells(lines[i]));
        i += 1;
      }
      blocks.push(
        <div className="table-scroll" key={`table-${i}`} tabIndex={0} aria-label="Scrollable feature table">
          <table>
            <thead><tr>{header.map((cell, c) => <th key={c} scope="col">{inline(cell)}</th>)}</tr></thead>
            <tbody>{rows.map((row, r) => <tr key={r}>{row.map((cell, c) => <td key={c}>{inline(cell)}</td>)}</tr>)}</tbody>
          </table>
        </div>,
      );
      continue;
    }

    if (/^\s*[-*]\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\s*[-*]\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\s*[-*]\s+/, ""));
        i += 1;
      }
      blocks.push(<ul key={`ul-${i}`}>{items.map((item, n) => <li key={n}>{inline(item)}</li>)}</ul>);
      continue;
    }

    if (/^\s*\d+\.\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\s*\d+\.\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\s*\d+\.\s+/, ""));
        i += 1;
      }
      blocks.push(<ol key={`ol-${i}`}>{items.map((item, n) => <li key={n}>{inline(item)}</li>)}</ol>);
      continue;
    }

    const paragraph = [line];
    i += 1;
    while (
      i < lines.length && lines[i].trim() &&
      !/^#{2,4}\s/.test(lines[i]) &&
      !/^\s*[-*]\s+/.test(lines[i]) &&
      !/^\s*\d+\.\s+/.test(lines[i]) &&
      !lines[i].trim().startsWith("|")
    ) {
      paragraph.push(lines[i]);
      i += 1;
    }
    blocks.push(
      <p key={`p-${i}`}>
        {paragraph.map((part, n) => <Fragment key={n}>{n > 0 && <br />}{inline(part.trim().replace(/\s{2,}$/, ""))}</Fragment>)}
      </p>,
    );
  }

  return <>{blocks}</>;
}

function extractSource(source: string, entry: Entry) {
  const start = source.indexOf(entry.sourceStart);
  const end = source.indexOf(entry.sourceEnd, start + entry.sourceStart.length);
  if (start < 0 || end < 0) return { intro: "", body: "" };
  const section = source.slice(start + entry.sourceStart.length, end).trim();
  const firstHeading = section.search(/^##\s/m);
  return {
    intro: firstHeading >= 0 ? section.slice(0, firstHeading).trim() : section,
    body: firstHeading >= 0 ? section.slice(firstHeading).trim() : "",
  };
}

function sectionLinks(body: string, prefix: string) {
  return body
    .split("\n")
    .filter((line) => /^##\s+/.test(line))
    .map((line) => line.replace(/^##\s+/, ""))
    .map((title) => ({ title, id: `${prefix}-${slugify(title)}` }));
}

export function PrestigeArchive() {
  const [route, setRoute] = useState("home");
  const [source, setSource] = useState("");
  const [copied, setCopied] = useState(false);
  const [progress, setProgress] = useState(0);

  const navigate = useCallback((next: string) => {
    const hash = next === "home" ? "" : `#${next}`;
    window.history.pushState(null, "", `${window.location.pathname}${hash}`);
    setRoute(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const syncHash = () => setRoute(window.location.hash.slice(1) || "home");
    syncHash();
    window.addEventListener("hashchange", syncHash);
    fetch(asset("prestige-classes.md")).then((response) => response.text()).then(setSource);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? Math.min(100, (window.scrollY / total) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [route]);

  const activeEntry = byId.get(route);
  const parsed = useMemo(() => activeEntry ? extractSource(source, activeEntry) : null, [source, activeEntry]);
  const toc = useMemo(() => activeEntry && parsed ? sectionLinks(parsed.body, activeEntry.id) : [], [activeEntry, parsed]);

  const copyLink = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  if (route === "vorn") {
    return (
      <main className="site-shell motif-prismari">
        <div className="aurora" aria-hidden="true" />
        <button className="back-button" onClick={() => navigate("home")}>← All characters</button>
        <section className="choice-view" aria-labelledby="choice-title">
          <div className="choice-portrait"><img src={asset("portraits/Vorn.png")} alt="Portrait of Vorn Don’eld" /></div>
          <p className="kicker">Vorn Don’eld · Two mutually exclusive paths</p>
          <h1 id="choice-title">Choose the shape of the performance.</h1>
          <p className="choice-lede">Steel and spell become one continuous act—or the whole battlefield becomes your stage.</p>
          <div className="thesis-choices">
            <button onClick={() => navigate("vorn-duskblade")} className="thesis-card blade-choice">
              <span className="choice-icon" aria-hidden="true">⚔</span>
              <span className="choice-label">Duskblade Virtuoso</span>
              <span>Channel close-range spells through a weapon and evolve Blade Flourish.</span>
              <b>Open martial thesis →</b>
            </button>
            <button onClick={() => navigate("vorn-maestro")} className="thesis-card spell-choice">
              <span className="choice-icon" aria-hidden="true">✦</span>
              <span className="choice-label">Prismari Maestro</span>
              <span>Entrance an audience, build a crescendo, and land a Grand Finale.</span>
              <b>Open performance thesis →</b>
            </button>
          </div>
        </section>
      </main>
    );
  }

  if (activeEntry && parsed) {
    return (
      <main className={`site-shell reading-shell motif-${activeEntry.motif}`}>
        <div className="reading-progress" style={{ width: `${progress}%` }} aria-hidden="true" />
        <div className="aurora" aria-hidden="true" />
        <header className="reader-toolbar">
          <button className="back-button" onClick={() => navigate(activeEntry.characterId === "vorn" ? "vorn" : "home")}>
            ← {activeEntry.characterId === "vorn" ? "Vorn’s paths" : "All characters"}
          </button>
          <div className="toolbar-actions">
            <button onClick={copyLink}>{copied ? "Link copied" : "Copy link"}</button>
            <button onClick={() => window.print()}>Print sheet</button>
          </div>
        </header>

        <article className="class-page">
          <header className="class-hero">
            <div className="hero-portrait"><img src={activeEntry.portrait} alt={`Portrait for ${activeEntry.eyebrow.split(" · ")[0]}`} /></div>
            <div className="class-title-block">
              <p className="kicker">{activeEntry.eyebrow}</p>
              <h1>{activeEntry.title}</h1>
              <div className="status-row">
                <span className="status-seal">Four prestige levels</span>
                <span className="status-seal">Entry at character level 12</span>
                <span className="status-seal">{activeEntry.status}</span>
              </div>
            </div>
          </header>

          <div className="class-layout">
            <aside className="toc" aria-label="On this page">
              <span className="toc-title">On this page</span>
              <nav>{toc.map((item) => <a key={item.id} href={`#${item.id}`}>{item.title}</a>)}</nav>
            </aside>

            <div className="rules-column">
              <div className="flavor-block"><Markdown markdown={parsed.intro} prefix={`${activeEntry.id}-intro`} /></div>
              {source ? <Markdown markdown={parsed.body} prefix={activeEntry.id} /> : <p className="loading-copy">Opening the archive…</p>}
            </div>
          </div>
        </article>
      </main>
    );
  }

  return (
    <main className="site-shell landing-shell">
      <div className="aurora" aria-hidden="true" />
      <header className="landing-hero">
        <div className="archive-mark" aria-hidden="true"><span>F</span><b>4</b></div>
        <p className="kicker">Strixhaven University · Year Four</p>
        <h1>Senior year has a way of turning electives into survival skills.</h1>
        <p className="landing-lede">The F4 have made it through three years of exams, Mage Tower, Icewind Dale, Candlekeep, and more than one administrative catastrophe. These are the advanced disciplines taking shape as they head into what comes next.</p>
        <div className="archive-meta">
          <span>7 capstone paths</span><i />
          <span>4 prestige levels each</span><i />
          <span>Built for the F4 at level 12</span>
        </div>
      </header>

      <section className="roster" aria-labelledby="roster-heading">
        <div className="section-heading">
          <div><p className="kicker">Senior capstones</p><h2 id="roster-heading">Where senior capstones become prestige paths.</h2></div>
          <p>Each path grows from the character’s classes, college, campaign history, and senior-year focus.</p>
        </div>
        <div className="character-grid">
          {characters.map((character, index) => (
            <button
              key={character.id}
              className={`character-card motif-${character.motif}`}
              onClick={() => navigate(character.entryId || character.id)}
              style={{ "--order": index } as React.CSSProperties}
              aria-label={`Open ${character.name}: ${character.classTitle}`}
            >
              <span className="portrait-wrap"><img src={character.portrait} alt="" /></span>
              <span className="card-sigil" aria-hidden="true">{character.sigil}</span>
              <span className="card-content">
                <small>{character.name}</small>
                <span className="card-title">{character.classTitle}</span>
                <span className="card-summary">{character.summary}</span>
                <b>Enter the archive <span aria-hidden="true">→</span></b>
              </span>
            </button>
          ))}
        </div>
      </section>

      <footer className="archive-footer">
        <span>The F4 Prestige Archive</span>
        <span>Working player reference · Year Four, 1494 DR</span>
      </footer>
    </main>
  );
}
