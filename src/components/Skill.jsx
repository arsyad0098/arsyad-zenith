function Skill() {
  const skills = [
    "React.js",
    "JavaScript",
    "CSS/Tailwind",
    "Node.js",
    "Python",
    "Git & GitHub"
  ];

  return (
    <div>
      <h4 style={{ 
        fontSize: '18px', 
        fontWeight: '600',
        margin: '20px 0 15px 0',
        color: '#2c3e50'
      }}>
        Skills
      </h4>
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap',
        gap: '10px'
      }}>
        {skills.map((skill, index) => (
          <span key={index} style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            fontSize: '14px',
            color: '#2c3e50',
            border: '1px solid #e9ecef',
            transition: 'all 0.3s ease'
          }}>
            <span>💻</span>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Skill;