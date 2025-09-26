import { useRef, useEffect, useState } from 'react';

const DEFAULT_GLOW_COLOR = '255, 76, 36'; // Matches #ff4c24
const MOBILE_BREAKPOINT = 768;

const cardData = [
  {
    title: 'Strategic Design',
    image: '/images/filler/filler1.svg',
    content: [
      {
        label: 'UX/UI Design:',
        text: 'We craft seamless user experiences and modern interfaces that users love.',
      },
      {
        label: 'Brand Strategy:',
        text: 'We define your brand’s digital identity to stand out in the market.',
      },
    ],
  },
  {
    title: 'Development',
    image: '/images/filler/filler2.svg',
    content: [
      {
        label: 'Frontend:',
        text: 'Modern web applications built with cutting-edge technologies and frameworks.',
      },
      {
        label: 'Backend:',
        text: 'Scalable server solutions and robust API development for your business needs.',
      },
    ],
  },
  {
    title: 'Consultation',
    image: '/images/filler/filler3.svg',
    content: [
      {
        label: 'Tech Advisory:',
        text: 'Expert guidance on technology stack selection and architecture decisions.',
      },
      {
        label: 'Digital Strategy:',
        text: 'Comprehensive roadmaps for your digital transformation journey.',
      },
    ],
  },
  {
    title: 'Support',
    image: '/images/filler/filler4.svg',
    content: [
      {
        label: 'Maintenance:',
        text: 'Ongoing support and updates to keep your systems running smoothly.',
      },
      {
        label: 'Optimization:',
        text: 'Performance improvements and feature enhancements for existing solutions.',
      },
    ],
  },
];

const BentoCardGrid = ({ children, gridRef }) => (
  <div
    className="section text-primary relative mx-auto flex w-full flex-col items-center"
    ref={gridRef}
  >
    {children}
  </div>
);

const MagicBento = ({
  enableBorderGlow = true,
  disableAnimations = false,
  glowColor = DEFAULT_GLOW_COLOR,
}) => {
  const gridRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const shouldDisableAnimations = disableAnimations || isMobile;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);

      const handleResize = () => {
        setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    if (shouldDisableAnimations || !gridRef.current || !enableBorderGlow) return;

    const cards = gridRef.current.querySelectorAll('.card');
    const handleMouseMove = (e) => {
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const relativeX = ((e.clientX - rect.left) / rect.width) * 100;
        const relativeY = ((e.clientY - rect.top) / rect.height) * 100;

        card.style.setProperty('--glow-x', `${relativeX}%`);
        card.style.setProperty('--glow-y', `${relativeY}%`);
        card.style.setProperty('--glow-intensity', '1');
      });
    };

    const handleMouseLeave = () => {
      cards.forEach((card) => {
        card.style.setProperty('--glow-intensity', '0');
      });
    };

    const section = gridRef.current;
    section.addEventListener('mousemove', handleMouseMove);
    section.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      section.removeEventListener('mousemove', handleMouseMove);
      section.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [shouldDisableAnimations, enableBorderGlow]);

  return (
    <>
      <style>
        {`
          .section {
            --glow-x: 50%;
            --glow-y: 50%;
            --glow-intensity: 0;
            --glow-radius: 300px;
            --glow-color: ${glowColor};
          }

          .card-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
            width: 100%;
            z-index: 10;
          }

          .card {
            position: relative;
            overflow: hidden;
            padding: 1px;
            padding-right: 0.5px;
            transition: all 300ms ease-in-out;
            background: rgba(128, 128, 128, 0.1); 
          }

          .card:nth-child(1), .card:nth-child(3) {
            border-top-left-radius: 32px;
            border-bottom-left-radius: 32px;
          }

          .card:nth-child(2), .card:nth-child(4) {
            border-top-right-radius: 32px;
            border-bottom-right-radius: 32px;
          }

          .card--border-glow::after {
            content: '';
            position: absolute;
            inset: 0;
            padding: 6px;
            background: radial-gradient(var(--glow-radius) circle at var(--glow-x) var(--glow-y),
                rgba(${glowColor}, calc(var(--glow-intensity) * 0.8)) 0%,
                rgba(${glowColor}, calc(var(--glow-intensity) * 0.4)) 30%,
                transparent 60%);
            border-radius: inherit;
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            mask-composite: subtract;
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            pointer-events: none;
            transition: opacity 0.3s ease;
            z-index: 1;
          }

          .card--border-glow:hover::after {
            opacity: 1;
          }

          .card-content {
            display: flex;
            flex-direction: column;
            background: #0D0D0C;
            backdrop-filter: blur(80px);
            padding: 40px;
            min-height: 520px;
            transition: all 300ms ease-in-out;
          }

          .card:nth-child(1) .card-content, .card:nth-child(3) .card-content {
            border-top-left-radius: 32px;
            border-bottom-left-radius: 32px;
          }

          .card:nth-child(2) .card-content, .card:nth-child(4) .card-content {
            border-top-right-radius: 32px;
            border-bottom-right-radius: 32px;
          }

          .card:nth-child(1) .card-content {
            background-image: linear-gradient(45deg, #1A1A1A 0%, transparent 100%);
          }

          .card:nth-child(2) .card-content {
            background-image: linear-gradient(315deg, #1A1A1A 0%, transparent 100%);
          }

          .card:nth-child(3) .card-content {
            background-image: linear-gradient(45deg, #1A1A1A 0%, rgba(26, 26, 26, 0.6) 100%);
          }

          .card:nth-child(4) .card-content {
            background-image: linear-gradient(315deg, #1A1A1A 0%, rgba(26, 26, 26, 0.6) 100%);
          }

          .card-title {
            margin-bottom: 16px;
            font-size: 32px;
            font-weight: 600;
            line-height: 48px;
            letter-spacing: -0.02em;
            color: #ffffffcc;
          }

          .card-text {
            margin-bottom: 16px;
            font-size: 20px;
            line-height: 36px;
            color: #ffffffcc;
          }

          .card-text span {
            font-weight: 600;
          }

          .card-image {
            display: flex;
            justify-content: flex-end;
          }

          .card-image img {
            object-fit: contain;
            opacity: 0.6;
          }

          @media (max-width: 768px) {
            .card-grid {
              grid-template-columns: 1fr;
            }

            .card-content {
              min-height: 400px;
              padding: 24px;
            }

            .card-title {
              font-size: 24px;
              line-height: 36px;
            }

            .card-text {
              font-size: 16px;
              line-height: 28px;
            }

            .card:nth-child(1), .card:nth-child(3) {
              border-top-left-radius: 32px;
              border-bottom-left-radius: 32px;
              border-top-right-radius: 0;
              border-bottom-right-radius: 0;
            }

            .card:nth-child(2), .card:nth-child(4) {
              border-top-right-radius: 32px;
              border-bottom-right-radius: 32px;
              border-top-left-radius: 0;
              border-bottom-left-radius: 0;
            }

            .card:nth-child(1) .card-content, .card:nth-child(3) .card-content {
              border-top-left-radius: 32px;
              border-bottom-left-radius: 32px;
              border-top-right-radius: 0;
              border-bottom-right-radius: 0;
            }

            .card:nth-child(2) .card-content, .card:nth-child(4) .card-content {
              border-top-right-radius: 32px;
              border-bottom-right-radius: 32px;
              border-top-left-radius: 0;
              border-bottom-left-radius: 0;
            }
          }
        `}
      </style>

      <BentoCardGrid gridRef={gridRef}>
        <div className="card-grid">
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`card ${enableBorderGlow ? 'card--border-glow' : ''}`}
            >
              <div className="card-content">
                <h3 className="card-title">{card.title}</h3>
                <div className="flex-1">
                  {card.content.map((item, i) => (
                    <p key={i} className="card-text">
                      <span>{item.label}</span> {item.text}
                    </p>
                  ))}
                </div>
                <div className="card-image">
                  <img src={card.image} alt={card.title} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </BentoCardGrid>
    </>
  );
};

export default MagicBento;