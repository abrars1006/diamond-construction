import { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Homeowner',
    content: 'Diamond Construction transformed our outdated house into a modern dream home. Their attention to detail and precision is unmatched.',
    rating: 5
  },
  {
    id: 2,
    name: 'James Carter',
    role: 'CEO, Horizon Ventures',
    content: 'We hired Diamond Construction for our new office complex. They delivered ahead of schedule and the architecture is simply breathtaking. Abdul and his team are true professionals.',
    rating: 5
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    role: 'Interior Designer',
    content: 'I have collaborated with them on numerous projects. The structural integrity and aesthetic finishing Diamond Construction provides makes my job so much easier.',
    rating: 5
  }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[currentIndex];

  return (
    <div style={{ fontFamily: 'Tahoma', fontSize: '11px' }}>
      {/* Testimonial display as a Windows dialog message box */}
      <div
        className="win-inset"
        style={{
          padding: '12px 16px',
          background: '#ffffff',
          textAlign: 'center',
          minHeight: '120px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Stars */}
        <div style={{ marginBottom: '6px' }}>
          {[...Array(t.rating)].map((_, i) => (
            <FaStar key={i} style={{ color: '#DAA520', marginRight: '2px', fontSize: '14px' }} />
          ))}
        </div>

        {/* Quote */}
        <p
          style={{
            color: '#000',
            fontSize: '12px',
            lineHeight: '1.7',
            fontStyle: 'italic',
            maxWidth: '520px',
            marginBottom: '8px',
          }}
        >
          &ldquo;{t.content}&rdquo;
        </p>

        {/* Attribution */}
        <div style={{ borderTop: '1px solid #d4d0c8', paddingTop: '6px', width: '100%', maxWidth: '300px' }}>
          <strong style={{ color: '#000080' }}>{t.name}</strong>
          <br />
          <span style={{ color: '#808080', fontSize: '10px' }}>{t.role}</span>
        </div>
      </div>

      {/* Navigation (radio-button style) */}
      <div
        style={{
          display: 'flex',
          gap: '8px',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '8px',
        }}
      >
        <button
          className="win-btn"
          style={{ padding: '2px 8px', fontSize: '10px', minWidth: 'auto' }}
          onClick={() => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
        >
          ◄ Prev
        </button>
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            style={{
              width: '14px',
              height: '14px',
              borderRadius: '50%',
              border: '2px solid #808080',
              background: idx === currentIndex ? '#000080' : '#d4d0c8',
              cursor: 'pointer',
              padding: 0,
            }}
            title={`Review ${idx + 1}`}
          />
        ))}
        <button
          className="win-btn"
          style={{ padding: '2px 8px', fontSize: '10px', minWidth: 'auto' }}
          onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
        >
          Next ►
        </button>
      </div>
      <div style={{ textAlign: 'center', color: '#808080', fontSize: '10px', marginTop: '4px' }}>
        Review {currentIndex + 1} of {testimonials.length}
      </div>
    </div>
  );
};

export default TestimonialSlider;
