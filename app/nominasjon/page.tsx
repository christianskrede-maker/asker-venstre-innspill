export default function Nominasjon() {
  return (
    <main style={{ minHeight: "100vh", background: "#f4f7f3", fontFamily: "Arial, sans-serif" }}>
      <section style={{ background: "#006666", color: "white", padding: "56px 24px", textAlign: "center" }}>
        <style>{`
          @media (max-width: 520px) {
            .nominasjon-title { font-size: 31px !important; }
            .nominasjon-logo { height: 115px !important; }
          }
        `}</style>

        <a href="/">
          <img className="nominasjon-logo" src="/logo.svg" alt="Asker Venstre" style={{ height: 140, marginBottom: 24 }} />
        </a>

        <h1 className="nominasjon-title" style={{ fontSize: 48, maxWidth: 900, lineHeight: 1.1, margin: "0 auto 20px" }}>
          Hvem skal være Asker Venstres folkevalgte for 2027–2031?
        </h1>

        <p style={{ fontSize: 21, maxWidth: 780, margin: "0 auto", lineHeight: 1.45 }}>
          Kunne du tenke deg å stille som kandidat for Asker Venstre i valget? Eller er det noen du har lyst til å foreslå?
Nominasjonskomiteen skal lage et listeforslag, og ønsker et bredt spekter av innspill slik at listeforslaget blir representativt for den mangfoldigheten som kjennetegner både Venstre og hele nye Asker kommune. Den endelige valglisten skal velges på et eget nominasjonsmøte i oktober.
        </p>
      </section>

      <section style={{ maxWidth: 980, margin: "0 auto", padding: "48px 24px" }}>
        <div style={cardStyle}>
          <h2 style={headingStyle}>Vi ønsker dine forslag</h2>

          <p style={textStyle}>
            Ønsker du å stå på kommunestyrelista i Asker i 2027? Eller kjenner du noen som bør stå der?
          </p>

          <p style={textStyle}>
            Har du andre innspill angående listen? Vi ønsker dine innspill slik at vi kan lage den best mulige listen for Asker.
            Send gjerne flere forslag hvis du ønsker det, men ett navn av gangen.
          </p>

          <div style={deadlineStyle}>
            <div style={{ fontSize: 15, marginBottom: 6 }}>Frist for innspill på navn</div>
            <div>Onsdag 20. mai</div>
          </div>
        </div>

        <div style={formCardStyle}>
          <h2 style={{ color: "#004750", marginTop: 0 }}>Send nominasjonsinnspill</h2>

          <p style={textStyle}>
            Forslaget sendes direkte til nominasjonskomiteen. Skriv inn kontaktinfo slik at komiteen kan følge opp ved behov.
          </p>

          <form action="/api/innspill" method="POST">
            <input type="hidden" name="kapittel" value="Nominasjonsinnspill" />
            <input type="hidden" name="redirectTo" value="/nominasjon" />

            <label style={labelStyle}>Navn på personen du foreslår</label>
            <input name="foreslattKandidat" required placeholder="Skriv navn her" style={inputStyle} />

            <label style={labelStyle}>Hvorfor foreslår du denne personen?</label>
            <textarea
              name="innspill"
              required
              rows={8}
              placeholder="Skriv gjerne litt om erfaring, engasjement, lokalkunnskap eller hvorfor personen bør vurderes."
              style={textareaStyle}
            />

            <label style={labelStyle}>Ditt navn og kontaktinfo</label>
            <input
              name="kontaktinfo"
              required
              placeholder="Skriv navn, e-post eller telefonnummer"
              style={inputStyle}
            />

            <button type="submit" style={buttonStyle}>
              Send innspill
            </button>
          </form>
        </div>

        <div style={cardStyle}>
          <h2 style={headingStyle}>Spørsmål om prosessen?</h2>

          <p style={textStyle}>
            Har du spørsmål om nominasjonsprosessen, eller er du i tvil om du vil stille til valg?
            Nøl ikke med å ta kontakt med nominasjonskomiteen.
          </p>

          <div style={committeeGridStyle}>
            {committee.map((person) => (
              <div key={person.name} style={personCardStyle}>
                <div style={{ color: "#2ba869", fontWeight: 800, marginBottom: 6 }}>
                  {person.role}
                </div>

                <h3 style={{ color: "#004750", margin: "0 0 12px", lineHeight: 1.25 }}>
                  {person.name}
                </h3>

                <p style={{ margin: "0 0 8px", lineHeight: 1.4 }}>
                  <a href={`mailto:${person.email}`} style={linkStyle}>
                    {person.email}
                  </a>
                </p>

                <p style={{ margin: 0 }}>
                  <a href={`tel:${person.phone.replaceAll(" ", "")}`} style={phoneStyle}>
                    {person.phone}
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>

        <p style={{ marginTop: 24 }}>
          <a href="/" style={{ color: "#006666", fontWeight: 700, textDecoration: "none" }}>
            ← Tilbake til forsiden
          </a>
        </p>
      </section>
    </main>
  );
}

const committee = [
  { role: "Leder", name: "Elisabeth Holter-Schøyen", email: "elisabeth.holter.schoyen@venstre.no", phone: "900 61 171" },
  { role: "Komitemedlem", name: "Tobias Waage Bremnes", email: "tobiaswaage@live.com", phone: "407 40 811" },
  { role: "Komitemedlem", name: "Gro Buttingsrud", email: "gro.buttingsrud@gmail.com", phone: "456 00 638" },
  { role: "Komitemedlem", name: "Eirik Davidsen", email: "eirik-d@online.no", phone: "930 16 971" },
  { role: "Komitemedlem", name: "Wilhelm Kavli", email: "wilhelmkavli@gmail.com", phone: "400 42 448" },
  { role: "Representant fra Unge Venstre", name: "Andreas Krogenæs", email: "andreas@krogenaes.com", phone: "474 46 445" },
];

const cardStyle = {
  background: "white",
  padding: 32,
  borderRadius: 22,
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  marginBottom: 28,
};

const formCardStyle = {
  ...cardStyle,
  borderLeft: "8px solid #FF9940",
};

const headingStyle = {
  color: "#004750",
  marginTop: 0,
  fontSize: 30,
};

const textStyle = {
  color: "#004750",
  lineHeight: 1.7,
  fontSize: 17,
};

const deadlineStyle = {
  marginTop: 24,
  background: "#FF9940",
  color: "#111",
  padding: 20,
  borderRadius: 18,
  fontWeight: 800,
  fontSize: 20,
  textAlign: "center" as const,
};

const committeeGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: 16,
  marginTop: 24,
};

const personCardStyle = {
  background: "#f4f7f3",
  padding: 22,
  borderRadius: 18,
  border: "1px solid #dbe6df",
};

const linkStyle = {
  color: "#006666",
  fontWeight: 700,
  wordBreak: "break-word" as const,
};

const phoneStyle = {
  color: "#004750",
  fontWeight: 700,
  textDecoration: "none",
};

const labelStyle = {
  display: "block",
  fontWeight: 700,
  color: "#004750",
  marginTop: 22,
  marginBottom: 8,
};

const inputStyle = {
  width: "100%",
  padding: 16,
  borderRadius: 14,
  border: "1px solid #cfd8d3",
  fontSize: 16,
  boxSizing: "border-box" as const,
};

const textareaStyle = {
  ...inputStyle,
  minHeight: 160,
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
  cursor: "pointer",
};
