import profileImage from "../assets/profil.png";

function Foto() {
  return (
    <img 
      src={profileImage}
      alt="Profile"
      style={{
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        objectFit: 'cover'
      }}
    />
  );
}

export default Foto;