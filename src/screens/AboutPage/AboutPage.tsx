import React, { useState, useEffect } from 'react';

const AboutPage: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = (): void => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div id="about" style={{
      minHeight: '100vh',
      backgroundColor: '#000000',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      backgroundImage: "url('./About/bg balls.png')", // use only the image
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundAttachment: 'scroll'
    }}>
      {/* Main Content Container */}
      <div style={{
        display: 'flex',
        flexDirection: windowWidth <= 768 ? 'column' : 'row',
        height: '100vh',
        position: 'relative',
        zIndex: 2
      }}>
        {/* Left Side - Group Photo (2/3 width on desktop, full width on mobile) */}
        <div style={{
          width: windowWidth <= 768 ? '100%' : '66.666%',
          height: windowWidth <= 768 ? '50vh' : '100vh',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: windowWidth <= 768 ? '1rem' : '1.5rem'
        }}>
          <div style={{ position: 'relative' }}>
            {/* Wave Border */}
            <div style={{
              position: 'absolute',
              top: '-1rem',
              right: '-1rem',
              width: '2rem',
              height: '2rem',
              backgroundColor: '#f97316',
              borderRadius: '50%',
              opacity: 0.8
            }}></div>
            <div style={{
              position: 'absolute',
              top: '-0.5rem',
              right: '-0.5rem',
              width: '1.5rem',
              height: '1.5rem',
              backgroundColor: '#fb923c',
              borderRadius: '50%',
              opacity: 0.6
            }}></div>
            <div style={{
              position: 'absolute',
              top: '-0.25rem',
              right: '-0.25rem',
              width: '1rem',
              height: '1rem',
              backgroundColor: '#fdba74',
              borderRadius: '50%',
              opacity: 0.4
            }}></div>
            
            {/* Group Photo */}
            <div style={{
              position: 'relative',
              backgroundColor: 'transparent',
              borderRadius: '1rem',
              padding: '0',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
            }}>
              <img 
                src="./About/ImageGroup.png" 
                alt="Coding Ninjas 10X Club SRM Group Photo" 
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '0.75rem'
                }}
              />
            </div>
          </div>
        </div>

        {/* Right Side - Text Content (1/3 width on desktop, full width on mobile) */}
        <div style={{
          width: windowWidth <= 768 ? '100%' : '33.333%',
          height: windowWidth <= 768 ? '50vh' : '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: windowWidth <= 768 ? '1rem' : '0.5rem',
          overflow: 'hidden'
        }}>
          <div style={{ 
            maxWidth: windowWidth <= 768 ? '100%' : '28rem',
            textAlign: windowWidth <= 768 ? 'center' : 'left'
          }}>
            {/* About Heading */}
            <h1 style={{
              fontSize: windowWidth <= 480 ? '2rem' : windowWidth <= 768 ? '2.5rem' : '3rem',
              fontWeight: '900',
              color: 'white',
              marginBottom: windowWidth <= 768 ? '0.5rem' : '1rem',
              letterSpacing: '0.1em',
              lineHeight: 1,
              fontFamily: "'BatmanForeverAlternate', sans-serif",
              textTransform: 'uppercase',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
            }}>
              ABOUT
            </h1>
            
            {/* Content Paragraphs */}
            <div style={{ marginBottom: windowWidth <= 768 ? '0.5rem' : '1rem' }}>
              <p style={{
                fontSize: windowWidth <= 480 ? '0.9rem' : '1rem',
                lineHeight: '1.6',
                color: 'white',
                marginBottom: '1rem',
                textShadow: '0 0 8px rgba(249, 115, 22, 0.6)'
              }}>
                Welcome to <span style={{ color: '#fb923c', fontWeight: 'bold' }}>Coding Ninjas 10X Club SRM</span>! 
                We are a community of <span style={{ color: '#fb923c', fontWeight: 'bold' }}>passionate coders</span> and 
                executives who love to explore the world of technology and push our limits to create innovative 
                solutions. Our club is designed to provide a platform for students to <span style={{ color: '#fb923c', fontWeight: 'bold' }}>learn, share, and grow</span> 
                their technical skills. We organize a variety of events throughout the year, from Hackathons and 
                Workshops to amazing Gaming Events.
              </p>
              
              <p style={{
                fontSize: windowWidth <= 480 ? '0.9rem' : '1rem',
                lineHeight: '1.6',
                color: 'white',
                textShadow: '0 0 8px rgba(249, 115, 22, 0.6)'
              }}>
                At <span style={{ color: '#fb923c', fontWeight: 'bold' }}>Coding Ninjas 10X Club SRM</span>, we believe that 
                technology can be a force for good in the world. That's why we encourage our members to use their 
                skills to solve real-world problems and make a <span style={{ color: '#fb923c', fontWeight: 'bold' }}>positive impact on the society</span>.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Random Glowing Elements */}
      <div style={{ position: 'absolute', top: '25%', left: '15%', width: '12px', height: '12px', backgroundColor: '#f97316', borderRadius: '50%', boxShadow: '0 0 12px #f97316', opacity: 0.8, zIndex: 1 }}></div>
      <div style={{ position: 'absolute', top: '60%', left: '85%', width: '10px', height: '10px', backgroundColor: '#fb923c', borderRadius: '50%', boxShadow: '0 0 10px #fb923c', opacity: 0.6, zIndex: 1 }}></div>
      <div style={{ position: 'absolute', top: '40%', left: '70%', width: '8px', height: '8px', backgroundColor: '#fdba74', borderRadius: '50%', boxShadow: '0 0 8px #fdba74', opacity: 0.7, zIndex: 1 }}></div>
      <div style={{ position: 'absolute', top: '80%', left: '30%', width: '14px', height: '14px', backgroundColor: '#f97316', borderRadius: '50%', boxShadow: '0 0 14px #f97316', opacity: 0.5, zIndex: 1 }}></div>

    </div>
  );
};

export default AboutPage;