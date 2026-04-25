export default function Home() {
  return (
    <main style={{
      padding: "40px",
      fontFamily: "sans-serif",
      background: "#f5f5f5",
      minHeight: "100vh"
    }}>
      <h1 style={{ color: "#006666" }}>
        Asker Venstre – Innspill til programmet
      </h1>

      <p>
        Hva er viktig for deg i Asker?
      </p>

      <a href="/innspill">
        <button style={{
          padding: "12px 20px",
          background: "#006666",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}>
          Gi innspill
        </button>
      </a>
    </main>
  );
}
