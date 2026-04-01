import Nama from "./Nama";
import Foto from "./Foto";
import Kontak from "./Kontak";
import Pendidikan from "./Pendidikan";
import Skill from "./Skill";
import Hobi from "./Hobi";
import "../custom.css";

function BiodataDiri() {
  return (
    <div className="wrapper">
      <div className="header">
        <h2 className="title">Pemrograman Framework Lanjutan</h2>
        <p className="subtitle">Portofolio ReactJS</p>
      </div>

      <div className="card">
        <div className="left">
          <Foto />
        </div>

        <div className="right">
          <Nama />
          <div className="divider"></div>
          <Kontak />
          <div className="divider"></div>
          <Pendidikan />
          <Skill />
          <Hobi />
        </div>
      </div>

      <div className="quote">
        <p>
          "Jika kamu kalah pintar, maka harus menang disiplin."
        </p>
        <span>- Arsyad -</span>
      </div>
    </div>
  );
}

export default BiodataDiri;