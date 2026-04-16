const ProjectCard = ({ project, index }) => {
  return (
    <div
      className="win-window"
      style={{ cursor: 'default', overflow: 'hidden' }}
    >
      {/* Image thumbnail with IE-style border */}
      <div className="win-inset" style={{ overflow: 'hidden', lineHeight: 0 }}>
        <img
          src={project.imageUrl}
          alt={project.title}
          style={{
            width: '100%',
            height: '160px',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </div>

      {/* File info panel */}
      <div style={{ padding: '6px 8px', background: '#d4d0c8' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '2px',
          }}
        >
          <strong
            style={{
              fontSize: '11px',
              fontFamily: 'Tahoma',
              color: '#000080',
              fontWeight: 'bold',
            }}
          >
            {project.title}
          </strong>
          <span
            style={{
              background: '#000080',
              color: '#ffffff',
              fontSize: '9px',
              fontFamily: 'Tahoma',
              padding: '0 4px',
              lineHeight: '14px',
            }}
          >
            {project.category}
          </span>
        </div>
        <p style={{ fontSize: '10px', color: '#444', lineHeight: '1.4', margin: '0 0 4px' }}>
          {project.description}
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
            fontSize: '10px',
            fontFamily: 'Tahoma',
          }}
          onClick={(e) => e.preventDefault()}
        >
          View Project Details &gt;&gt;
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
