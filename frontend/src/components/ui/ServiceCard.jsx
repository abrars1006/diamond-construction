const ServiceCard = ({ icon: Icon, title, description, index }) => {
  return (
    <div
      className="win-window"
      style={{
        padding: '0',
        cursor: 'default',
      }}
    >
      {/* Mini title bar */}
      <div
        style={{
          background: '#d4d0c8',
          borderBottom: '1px solid #808080',
          padding: '2px 6px',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          fontSize: '11px',
          fontFamily: 'Tahoma',
          fontWeight: 'bold',
          color: '#000080',
        }}
      >
        <Icon size={14} style={{ color: '#DAA520' }} />
        {title}
      </div>
      <div style={{ padding: '8px' }}>
        <p style={{ fontSize: '11px', color: '#000', lineHeight: '1.6', marginBottom: '8px' }}>
          {description}
        </p>
        <hr
          style={{
            border: 'none',
            borderTop: '1px solid #808080',
            borderBottom: '1px solid #ffffff',
            margin: '4px 0',
          }}
        />
        <a
          href="#"
          style={{
            color: '#0000ee',
            textDecoration: 'underline',
            fontSize: '11px',
            fontFamily: 'Tahoma',
          }}
          onClick={(e) => e.preventDefault()}
        >
          Learn More &gt;&gt;
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
