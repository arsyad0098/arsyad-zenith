import { useState } from "react";
import InputField from "./components/InputField";
import SelectField from "./components/SelectField";

export default function TugasForm() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [umur, setUmur] = useState("");
  const [gender, setGender] = useState("");
  const [pekerjaan, setPekerjaan] = useState("");
  const [error, setError] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleValidasi = () => {
    let err = {};

    if (!nama) err.nama = "Nama wajib diisi";
    else if (!isNaN(nama)) err.nama = "Nama tidak boleh angka";

    if (!email) err.email = "Email wajib diisi";
    else if (!email.includes("@")) err.email = "Email tidak valid";

    if (!umur) err.umur = "Umur wajib diisi";
    else if (Number(umur) <= 0) err.umur = "Umur harus > 0";

    if (!gender) err.gender = "Pilih gender";
    if (!pekerjaan) err.pekerjaan = "Pilih pekerjaan";

    setError(err);
  };

  const isValid =
    Object.keys(error).length === 0 &&
    nama &&
    email &&
    umur &&
    gender &&
    pekerjaan;

  const handleSubmit = () => {
    if (isValid) setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setNama("");
    setEmail("");
    setUmur("");
    setGender("");
    setPekerjaan("");
    setError({});
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f0f4ff, #faf5ff, #f0fdf4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        fontFamily: "Segoe UI",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "460px",
          background: "#fff",
          borderRadius: "20px",
          padding: "30px",
          boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px",
            color: "#1e293b", // 👉 biar gelap & jelas
          }}
        >
          Form Data Diri
        </h2>

        {/* FORM */}
        <InputField
          label="Nama"
          type="text"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          error={error.nama}
        />

        <InputField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={error.email}
        />

        <InputField
          label="Umur"
          type="number"
          value={umur}
          onChange={(e) => setUmur(e.target.value)}
          error={error.umur}
        />

        <SelectField
          label="Gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          options={["Laki-laki", "Perempuan"]}
          error={error.gender}
        />

        <SelectField
          label="Pekerjaan"
          value={pekerjaan}
          onChange={(e) => setPekerjaan(e.target.value)}
          options={["Mahasiswa", "Karyawan", "Freelancer"]}
          error={error.pekerjaan}
        />

        {/* ERROR SUMMARY */}
        {Object.keys(error).length > 0 && (
          <div
            style={{
              background: "#ffe4e6",
              padding: "10px",
              borderRadius: "8px",
              marginBottom: "10px",
              color: "red",
            }}
          >
            Ada {Object.keys(error).length} kesalahan
          </div>
        )}

        {/* BUTTON */}
        {!isValid ? (
          <button
            onClick={handleValidasi}
            style={{
              width: "100%",
              padding: "12px",
              background: "#6366f1",
              color: "white",
              border: "none",
              borderRadius: "10px",
              marginTop: "10px",
            }}
          >
            Validasi
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            style={{
              width: "100%",
              padding: "12px",
              background: "#22c55e",
              color: "white",
              border: "none",
              borderRadius: "10px",
              marginTop: "10px",
            }}
          >
            Submit
          </button>
        )}

        {/* 🔥 HASIL DI BAWAH FORM */}
        {submitted && (
          <div
            style={{
              marginTop: "20px",
              padding: "15px",
              background: "#ecfdf5",
              borderRadius: "10px",
            }}
          >
            <h3 style={{ color: "green" }}>Berhasil!</h3>
            <p>
              <b>Nama:</b> {nama}
            </p>
            <p>
              <b>Email:</b> {email}
            </p>
            <p>
              <b>Umur:</b> {umur}
            </p>
            <p>
              <b>Gender:</b> {gender}
            </p>
            <p>
              <b>Pekerjaan:</b> {pekerjaan}
            </p>

            <button
              onClick={handleReset}
              style={{
                marginTop: "10px",
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              Isi Ulang
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
