export default function InputField({ label, type, placeholder, value, onChange, error }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <label style={{
        display: "block", fontSize: "12px", fontWeight: 600,
        letterSpacing: "1.5px", textTransform: "uppercase",
        color: "#94a3b8", marginBottom: "8px"
      }}>
        {label}
      </label>
      <input 
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{
          width: "100%", padding: "13px 16px", borderRadius: "14px",
          background: error ? "#fff5f5" : "#f8fafc",
          border: `1.5px solid ${error ? "#fca5a5" : "#e2e8f0"}`,
          color: "#1e293b", fontSize: "14px", outline: "none",
          transition: "all 0.2s", boxSizing: "border-box",
        }}
        onFocus={e => {
          e.target.style.border = `1.5px solid ${error ? "#f87171" : "#818cf8"}`;
          e.target.style.background = "#fff";
          e.target.style.boxShadow = `0 0 0 4px ${error ? "rgba(248,113,113,0.1)" : "rgba(129,140,248,0.1)"}`;
        }}
        onBlur={e => {
          e.target.style.border = `1.5px solid ${error ? "#fca5a5" : "#e2e8f0"}`;
          e.target.style.background = error ? "#fff5f5" : "#f8fafc";
          e.target.style.boxShadow = "none";
        }}
      />
      {error && (
        <p style={{ marginTop: "6px", fontSize: "12px", color: "#ef4444", display: "flex", alignItems: "center", gap: "5px" }}>
          <span>⚠</span> {error}
        </p>
      )}
    </div>
  );
}