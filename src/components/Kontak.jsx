function Kontak() {
  const contactItems = [
    { icon: "📧", label: "Email", value: "arsyad24si@mahasiswa.pcr.ac.id" },
    { icon: "📱", label: "WhatsApp", value: "085264203527" },
    { icon: "📸", label: "Instagram", value: "@arsyad.rmdhn" },
    { icon: "🌐", label: "Website", value: "arsyad.dev" }
  ];

  return (
    <div>
      <h4 style={{ 
        fontSize: '18px', 
        fontWeight: '600',
        margin: '0 0 15px 0',
        color: '#2c3e50'
      }}>
        Kontak
      </h4>
      {contactItems.map((item, index) => (
        <p key={index} style={{ 
          display: 'flex', 
          alignItems: 'center',
          margin: '10px 0',
          color: '#5a6c7e'
        }}>
          <span style={{ fontSize: '20px', width: '30px' }}>{item.icon}</span>

          <strong style={{ 
            width: '100px',  // bikin semua label sejajar
            color: '#2c3e50'
          }}>
            {item.label}
          </strong>

          <span style={{ marginRight: '5px' }}>:</span>

          <span>{item.value}</span>
        </p>
      ))}
    </div>
  );
}

export default Kontak;