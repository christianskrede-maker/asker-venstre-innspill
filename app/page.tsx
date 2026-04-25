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
          style={{ height: 220, marginBottom: 28 }}
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
          maxWidth: 720,
          margin: "0 auto",
          lineHeight: 1.35
        }}>
          Vi lager nytt program for 2027–2031.<br />
          Dine innspill hjelper oss å prioritere riktig.
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

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 16,
          marginTop: 42
        }}>
          <a href="/nominasjon" style={linkButton}>
            Nominasjonsinnspill
          </a>

          <a href="https://www.venstre.no/lokal/viken/asker/" style={linkButton}>
            Mer om Asker Venstre
          </a>

          <a href="https://www.venstre.no/blimedlem/#framover" style={linkButton}>
            Bli medlem i Venstre
          </a>

        <a href="/innspill?kapittel=valgkamp" style={linkButton}>
  Vil du hjelpe til i valgkampen, send melding her
</a>

          <a href="https://www.venstre.no/artikkel/2023/05/10/valgprogram-asker-venstre-2023/" style={linkButton}>
            Partiprogram Asker Venstre 2023–27
          </a>
        </div>
      </section>
    </main>
  );
}

const linkButton = {
  background: "#FF9940",
  color: "#111",
  padding: 18,
  borderRadius: 999,
  textAlign: "center" as const,
  fontWeight: 800,
  textDecoration: "none",
  boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
  minHeight: 54,
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};
