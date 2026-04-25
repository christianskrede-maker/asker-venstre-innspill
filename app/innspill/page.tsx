const chapters: Record<string, string> = {
  "1": "DEG – Hverdagen din i Asker",
  "2": "Trygg oppvekst",
  "3": "Bolig og levende nærmiljø",
  "4": "Jobb, næringsliv og grønn mobilitet",
  "5": "Kultur, idrett og frivillighet",
  "6": "Helse, omsorg, trygghet og beredskap",
  "7": "Klima, natur og Oslofjorden",
  "8": "Demokrati og kommunen",
};

export default function Innspill({
  searchParams,
}: {
  searchParams: { kapittel?: string };
}) {
  const kapittelNr = searchParams.kapittel || "1";
  const kapittel = chapters[kapittelNr] || "Generelt innspill";

  return (
    <main style={{ minHeight: "100vh", background: "#f4f7f3", fontFamily: "Arial, sans-serif" }}>
      <section style={{ background: "#006666", color: "white", padding: "48px 24px", textAlign: "center" }}>
        <a href="/">
          <img src="/logo.svg" alt="Asker Venstre" style={{ height: 120, marginBottom: 24 }} />
        </a>

        <h1 style={{ fontSize: 42, margin: "0 auto 12px", maxWidth: 800 }}>
          Gi innspill
        </h1>

        <p style={{ fontSize: 20, margin: 0 }}>
          {kapittel}
        </p>
      </section>

      <section style={{ maxWidth: 720, margin: "0 auto", padding: "48px 24px" }}>
        <form
          action="/api/innspill"
          method="POST"
          style={{
            background: "white",
            padding: 32,
            borderRadius: 22,
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
          }}
        >
          <input type="hidden" name="kapittel" value={kapittel} />

          <label style={{ display: "block", fontWeight: 700, color: "#004750", marginBottom: 10 }}>
            Hva vil du at vi skal tenke på?
          </label>

          <textarea
            name="innspill"
            required
            rows={9}
            placeholder="Skriv innspillet ditt her..."
            style={{
              width: "100%",
              padding: 16,
              borderRadius: 14,
              border: "1px solid #cfd8d3",
              fontSize: 16,
              boxSizing: "border-box",
              marginBottom: 20
            }}
          />

          <label style={{ display: "block", fontWeight: 700, color: "#004750", marginBottom: 10 }}>
            Navn eller e-post, valgfritt
          </label>

          <input
            name="kontaktinfo"
            placeholder="Du kan være anonym"
            style={{
              width: "100%",
              padding: 16,
              borderRadius: 14,
              border: "1px solid #cfd8d3",
              fontSize: 16,
              boxSizing: "border-box",
              marginBottom: 24
            }}
          />

          <button
            type="submit"
            style={{
              background: "#FF9940",
              color: "#111",
              border: "none",
              borderRadius: 999,
              padding: "16px 26px",
              fontWeight: 800,
              fontSize: 16,
              cursor: "pointer"
            }}
          >
            Send innspill
          </button>
        </form>

        <p style={{ color: "#004750", marginTop: 24 }}>
          Du kan sende inn anonymt. Kontaktinfo er helt frivillig.
        </p>
      </section>
    </main>
  );
}
