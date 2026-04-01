function Pendidikan() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h4 style={{ 
        fontSize: '18px', 
        fontWeight: '600',
        margin: '0 0 15px 0',
        color: '#2c3e50'
      }}>
        Pendidikan
      </h4>
      <div style={{ 
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'center', // ini yang bikin isi ke tengah
        flexWrap: 'wrap',
        margin: '10px 0',
        color: '#5a6c7e'
      }}>
        <span style={{ fontSize: '20px', marginRight: '10px' }}>🎓</span>
        <strong style={{ color: '#2c3e50', marginRight: '8px' }}>Sistem Informasi</strong>
        <span style={{ color: '#95a5a6' }}>| Politeknik Caltex Riau</span>
      </div>
    </div>
  );
}

export default Pendidikan;