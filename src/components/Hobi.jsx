function Hobi() {
  const hobbies = [
    { icon: "🎮", name: "Gaming" },
    { icon: "🏸", name: "Badminton" },
    { icon: "🏍️", name: "Riding" },
    { icon: "📚", name: "Reading" }
  ];

  return (
    <div style={{ textAlign: 'center' }}>
      <h4 style={{ 
        fontSize: '18px', 
        fontWeight: '600',
        margin: '20px 0 15px 0',
        color: '#2c3e50'
      }}>
        Hobi & Interests
      </h4>

      <div style={{ 
      }}>
        {hobbies.map((hobby, index) => (
          <span key={index} style={{
            display: 'inline-flex',
            gap: '10px',
            padding: '8px 16px',
            backgroundColor: '#f8f9fa',
            borderRadius: '20px',
            fontSize: '14px',
            color: '#2c3e50',
            border: '1px solid #e9ecef'
          }}>
            <span style={{ fontSize: '16px' }}>{hobby.icon}</span>
            {hobby.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Hobi;