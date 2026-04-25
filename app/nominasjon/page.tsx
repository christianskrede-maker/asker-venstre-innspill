export default function Nominasjon() {
  return (
    <main style={{ minHeight: "100vh", background: "#f4f7f3", fontFamily: "Arial, sans-serif" }}>
      <section style={{ background: "#006666", color: "white", padding: "64px 32px", textAlign: "center" }}>
        <a href="/">
          <img src="/logo.svg" alt="Asker Venstre" style={{ height: 160, marginBottom: 24 }} />
        </a>

        <h1 style={{ fontSize: 48, maxWidth: 900, lineHeight: 1.1, margin: "0 auto 20px" }}>
          Nominasjonsinnspill
        </h1>

        <p style={{ fontSize: 21, maxWidth: 760, margin: "0 auto", lineHeight: 1.4 }}>
          Hvem mener du bør stå på listen for Asker Venstre ved kommunevalget?
        </p>
      </section>

      <section style={{ maxWidth: 760, margin: "0 auto", padding: "48px 24px" }}>
        <div style={{ background: "white", padding: 32, borderRadius: 22, boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}>
          <h2 style={{ color: "#004750", marginTop: 0 }}>Send inn forslag</h2>

          <p style={{ color: "#004750", lineHeight: 1.6 }}>
            Du kan foreslå personer du mener bør bidra politisk for Asker Venstre. 
            Forslaget kan være kort, men skriv gjerne litt om hvorfor du foreslår personen.
          </p>

          <form action="/api/innspill" method="POST">
            <input type="hidden" name="kapittel" value="Nominasjonsinnspill" />

            <label style={labelStyle}>Navn på personen du foreslår</label>
            <input name="Foreslått kandidat" required style={inputStyle} />

            <label style={labelStyle}>Hvorfor foreslår du denne personen?</label>
            <textarea name="innspill" required rows={8} style={textareaStyle} />

            <label style={labelStyle}>Din kontaktinfo, valgfritt</label>
            <input name="kontaktinfo" placeholder="Du kan være anonym" style={inputStyle} />

            <button type="submit" style={buttonStyle}>
              Send nominasjonsinnspill
            </button>
          </form>
        </div>

        <p style={{ marginTop: 24 }}>
          <a href="/" style={{ color: "#006666", fontWeight: 700 }}>
            ← Tilbake til forsiden
          </a>
        </p>
      </section>
    </main>
  );
}

const labelStyle = {
  display: "block",
  fontWeight: 700,
  color: "#004750",
  marginTop: 22,
  marginBottom: 8
};

const inputStyle = {
  width: "100%",
  padding: 16,
  borderRadius: 14,
  border: "1px solid #cfd8d3",
  fontSize: 16,
  boxSizing: "border-box" as const
};

const textareaStyle = {
  ...inputStyle,
  minHeight: 160
};

const buttonStyle = {
  marginTop: 24,
  background: "#FF9940",
  color: "#111",
  border: "none",
  borderRadius: 999,
  padding: "16px 26px",
  fontWeight: 800,
  fontSize: 16,
  cursor: "pointer"
};
