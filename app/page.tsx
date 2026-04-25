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
      <section style={{
        background: "#006666",
        color: "white",
        padding: "72px 32px",
        textAlign: "center"
      }}>
        <img
          src="/logo.svg"
          alt="Asker Venstre"
          style={{ height: 100, marginBottom: 36 }}
        />

        <h1 style={{
          fontSize: 56,
          maxWidth: 900,
          lineHeight: 1.05,
          margin: "0 auto 24px"
        }}>
          Hva er viktig for deg i Asker?
        </h1>

        <p style={{
          fontSize: 21,
          maxWidth: 680,
          margin: "0 auto"
        }}>
          Vi lager nytt program for 2027–2031. Dine innspill hjelper oss å prioritere riktig.
        </p>
      </section>

      <section style={{ padding: "56px 32px", maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ color: "#004750", fontSize: 34, textAlign: "center", marginBottom: 32 }}>
          Trykk på der du vil gi innspill
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 18
        }}>
          {chapters.map((chapter, index) => (
            <a
              key={chapter}
              href={`/innspill?kapittel=${index + 1}`}
              style={{
                background: "white",
                padding: 26,
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
