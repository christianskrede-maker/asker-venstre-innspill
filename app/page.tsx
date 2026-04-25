const chapters = [
  "DEG – Hverdagen din i Asker",
  "Trygg oppvekst",
  "Bolig og levende nærmiljø",
  "Jobb, næringsliv og grønn mobilitet",
  "Kultur, idrett og frivillighet",
  "Helse, omsorg, trygghet og beredskap",
  "Klima, natur og Oslofjorden",
  "Demokrati og kommunen",
];

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "#f4f7f3", fontFamily: "Arial, sans-serif" }}>
      <section style={{ background: "#006666", color: "white", padding: "64px 32px" }}>
        <img
          src="/logo.svg"
          alt="Asker Venstre"
          style={{ height: 56, marginBottom: 28 }}
        />

        <h1 style={{ fontSize: 56, maxWidth: 850, lineHeight: 1.05, margin: "24px 0" }}>
          Hva er viktig for deg i Asker?
        </h1>

        <p style={{ fontSize: 20, maxWidth: 650 }}>
          Vi lager nytt program for 2027–2031. Dine innspill hjelper oss å prioritere riktig.
        </p>

        <a href="/innspill" style={{
          display: "inline-block",
          marginTop: 24,
          background: "#FF9940",
          color: "#111",
          padding: "16px 24px",
          borderRadius: 999,
          fontWeight: 700,
          textDecoration: "none"
        }}>
          Gi innspill
        </a>
      </section>

      <section style={{ padding: "48px 32px", maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ color: "#004750", fontSize: 34 }}>
          Velg kapittel
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 16
        }}>
          {chapters.map((chapter, index) => (
            <a
              key={chapter}
              href={`/innspill?kapittel=${index + 1}`}
              style={{
                background: "white",
                padding: 24,
                borderRadius: 18,
                color: "#004750",
                textDecoration: "none",
                boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                fontWeight: 700
              }}
            >
              <div style={{ color: "#2ba869", marginBottom: 10 }}>
                Kapittel {index + 1}
              </div>
              {chapter}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
