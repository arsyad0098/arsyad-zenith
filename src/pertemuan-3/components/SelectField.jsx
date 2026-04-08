export default function SelectField({ label, value, onChange, options, error }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <label style={{
        display: "block", fontSize: "12px", fontWeight: 600,
        letterSpacing: "1.5px", textTransform: "uppercase",
        color: "#94a3b8", marginBottom: "8px"
      }}>
        {label}
      </label>
      <select
        value={value}
        onChange={onChange}
        style={{
          width: "100%", padding: "13px 16px", borderRadius: "14px",
          background: error ? "#fff5f5" : "#f8fafc",
          border: `1.5px solid ${error ? "#fca5a5" : "#e2e8f0"}`,
          color: value ? "#1e293b" : "#94a3b8",
          fontSize: "14px", outline: "none", cursor: "pointer",
          appearance: "none", boxSizing: "border-box",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2394a3b8' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 16px center",
        }}
      >
        <option value="" style={{ color: "#94a3b8" }}>— Pilih {label} —</option>
        {options.map((item, index) => (
          <option key={index} value={item} style={{ color: "#1e293b" }}>{item}</option>
        ))}
      </select>
      {error && (
        <p style={{ marginTop: "6px", fontSize: "12px", color: "#ef4444", display: "flex", alignItems: "center", gap: "5px" }}>
          <span>⚠</span> {error}
        </p>
      )}
    </div>
  );
}