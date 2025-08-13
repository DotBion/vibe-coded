import React from 'react';
import { UserData, DesignData } from '../types';

interface PortfolioLayoutProps {
  userData: UserData;
  designData: DesignData;
}

const PortfolioLayout: React.FC<PortfolioLayoutProps> = ({ userData, designData }) => {
  const renderSidebar = () => (
    <aside 
      className="fixed left-0 top-0 h-full w-80 p-8 flex flex-col justify-between"
      style={{ backgroundColor: designData.colors.primary }}
    >
      {/* Header */}
      <div className="space-y-4">
        <h1 
          className="text-4xl font-bold leading-tight"
          style={{ 
            color: designData.colors.text,
            fontFamily: designData.typography.headingFont,
            fontSize: designData.typography.fontSize.h1
          }}
        >
          {userData.fullName || 'Your Name'}
        </h1>
        <h2 
          className="text-xl font-medium"
          style={{ 
            color: designData.colors.accent,
            fontFamily: designData.typography.headingFont
          }}
        >
          {userData.title || 'Professional Title'}
        </h2>
        <p 
          className="text-base leading-relaxed"
          style={{ 
            color: designData.colors.secondary,
            fontFamily: designData.typography.bodyFont,
            fontSize: designData.typography.fontSize.body
          }}
        >
          {userData.bio || 'I build accessible, pixel-perfect digital experiences for the web.'}
        </p>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        <a 
          href="#about" 
          className="block py-2 text-sm font-medium transition-colors hover:text-accent"
          style={{ 
            color: designData.colors.text,
            fontFamily: designData.typography.bodyFont
          }}
        >
          ABOUT
        </a>
        <a 
          href="#experience" 
          className="block py-2 text-sm font-medium transition-colors hover:text-accent"
          style={{ 
            color: designData.colors.text,
            fontFamily: designData.typography.bodyFont
          }}
        >
          EXPERIENCE
        </a>
        <a 
          href="#projects" 
          className="block py-2 text-sm font-medium transition-colors hover:text-accent"
          style={{ 
            color: designData.colors.text,
            fontFamily: designData.typography.bodyFont
          }}
        >
          PROJECTS
        </a>
        <a 
          href="#contact" 
          className="block py-2 text-sm font-medium transition-colors hover:text-accent"
          style={{ 
            color: designData.colors.text,
            fontFamily: designData.typography.bodyFont
          }}
        >
          CONTACT
        </a>
      </nav>

      {/* Social Links */}
      <div className="flex space-x-4">
        {userData.github && (
          <a 
            href={userData.github as string}
            className="text-white hover:text-accent transition-colors"
            style={{ color: designData.colors.text }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        )}
        {userData.linkedin && (
          <a 
            href={userData.linkedin as string}
            className="text-white hover:text-accent transition-colors"
            style={{ color: designData.colors.text }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        )}
        <div 
          className="w-5 h-5 rounded bg-white flex items-center justify-center"
          style={{ backgroundColor: designData.colors.accent }}
        >
          <span className="text-xs font-bold" style={{ color: designData.colors.primary }}>P</span>
        </div>
        <div 
          className="w-5 h-5 rounded bg-white flex items-center justify-center"
          style={{ backgroundColor: designData.colors.accent }}
        >
          <span className="text-xs font-bold" style={{ color: designData.colors.primary }}>I</span>
        </div>
        <div 
          className="w-5 h-5 rounded bg-white flex items-center justify-center"
          style={{ backgroundColor: designData.colors.accent }}
        >
          <span className="text-xs font-bold" style={{ color: designData.colors.primary }}>G</span>
        </div>
      </div>
    </aside>
  );

  const renderMainContent = () => (
    <main 
      className="ml-80 min-h-screen"
      style={{ backgroundColor: designData.colors.background }}
    >
      {/* About Section */}
      {userData.bio && (
        <section id="about" className="py-20 px-12">
          <div className="max-w-4xl">
            <h2 
              className="text-3xl font-bold mb-8"
              style={{ 
                color: designData.colors.text,
                fontFamily: designData.typography.headingFont,
                fontSize: designData.typography.fontSize.h2
              }}
            >
              About Me
            </h2>
            <div className="space-y-6">
              <p 
                className="text-lg leading-relaxed"
                style={{ 
                  color: designData.colors.secondary,
                  fontFamily: designData.typography.bodyFont,
                  fontSize: designData.typography.fontSize.body
                }}
              >
                {userData.bio}
              </p>
              <p 
                className="text-lg leading-relaxed"
                style={{ 
                  color: designData.colors.secondary,
                  fontFamily: designData.typography.bodyFont,
                  fontSize: designData.typography.fontSize.body
                }}
              >
                I've had the privilege of working with advertising agencies, large corporations, 
                start-ups, and small digital product studios. I've also taught a comprehensive 
                video course on building a web app with the Spotify API.
              </p>
              <p 
                className="text-lg leading-relaxed"
                style={{ 
                  color: designData.colors.secondary,
                  fontFamily: designData.typography.bodyFont,
                  fontSize: designData.typography.fontSize.body
                }}
              >
                In my spare time, I enjoy climbing, reading, hanging out with my wife and two cats, 
                or running around Hyrule searching for Korok seeds.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Experience Section */}
      {userData.experience && (
        <section id="experience" className="py-20 px-12" style={{ backgroundColor: designData.colors.surface }}>
          <div className="max-w-4xl">
            <h2 
              className="text-3xl font-bold mb-12"
              style={{ 
                color: designData.colors.text,
                fontFamily: designData.typography.headingFont,
                fontSize: designData.typography.fontSize.h2
              }}
            >
              Experience
            </h2>
            <div className="space-y-12">
              {/* Experience Item 1 */}
              <div className="border-l-2 pl-6" style={{ borderColor: designData.colors.accent }}>
                <div className="flex justify-between items-start mb-2">
                  <h3 
                    className="text-xl font-semibold"
                    style={{ 
                      color: designData.colors.text,
                      fontFamily: designData.typography.headingFont
                    }}
                  >
                    Senior Frontend Engineer, Accessibility
                  </h3>
                  <span 
                    className="text-sm font-medium"
                    style={{ color: designData.colors.accent }}
                  >
                    2024 — PRESENT
                  </span>
                </div>
                <p 
                  className="text-lg font-medium mb-3"
                  style={{ 
                    color: designData.colors.accent,
                    fontFamily: designData.typography.bodyFont
                  }}
                >
                  Klaviyo
                </p>
                <p 
                  className="text-base leading-relaxed mb-4"
                  style={{ 
                    color: designData.colors.secondary,
                    fontFamily: designData.typography.bodyFont,
                    fontSize: designData.typography.fontSize.body
                  }}
                >
                  {userData.experience}
                </p>
                <div className="flex flex-wrap gap-2">
                  {['JavaScript', 'TypeScript', 'React', 'Storybook'].map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 text-sm font-medium rounded"
                      style={{ 
                        backgroundColor: designData.colors.accent,
                        color: designData.colors.primary
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Experience Item 2 */}
              <div className="border-l-2 pl-6" style={{ borderColor: designData.colors.accent }}>
                <div className="flex justify-between items-start mb-2">
                  <h3 
                    className="text-xl font-semibold"
                    style={{ 
                      color: designData.colors.text,
                      fontFamily: designData.typography.headingFont
                    }}
                  >
                    Lead Engineer
                  </h3>
                  <span 
                    className="text-sm font-medium"
                    style={{ color: designData.colors.accent }}
                  >
                    2018 — 2024
                  </span>
                </div>
                <p 
                  className="text-lg font-medium mb-3"
                  style={{ 
                    color: designData.colors.accent,
                    fontFamily: designData.typography.bodyFont
                  }}
                >
                  Upstatement
                </p>
                <div className="space-y-1 mb-4">
                  <p 
                    className="text-base font-medium"
                    style={{ 
                      color: designData.colors.secondary,
                      fontFamily: designData.typography.bodyFont
                    }}
                  >
                    Senior Engineer
                  </p>
                  <p 
                    className="text-base font-medium"
                    style={{ 
                      color: designData.colors.secondary,
                      fontFamily: designData.typography.bodyFont
                    }}
                  >
                    Engineer
                  </p>
                </div>
                <p 
                  className="text-base leading-relaxed"
                  style={{ 
                    color: designData.colors.secondary,
                    fontFamily: designData.typography.bodyFont,
                    fontSize: designData.typography.fontSize.body
                  }}
                >
                  Built and maintained client websites using React, TypeScript, and Next.js. 
                  Collaborated with designers and project managers to deliver high-quality digital products.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Projects Section */}
      {userData.projects && (
        <section id="projects" className="py-20 px-12">
          <div className="max-w-4xl">
            <h2 
              className="text-3xl font-bold mb-12"
              style={{ 
                color: designData.colors.text,
                fontFamily: designData.typography.headingFont,
                fontSize: designData.typography.fontSize.h2
              }}
            >
              Projects
            </h2>
            <div className="space-y-8">
              <p 
                className="text-lg leading-relaxed"
                style={{ 
                  color: designData.colors.secondary,
                  fontFamily: designData.typography.bodyFont,
                  fontSize: designData.typography.fontSize.body
                }}
              >
                {userData.projects}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Skills Section */}
      {userData.skills && (
        <section className="py-20 px-12" style={{ backgroundColor: designData.colors.surface }}>
          <div className="max-w-4xl">
            <h2 
              className="text-3xl font-bold mb-8"
              style={{ 
                color: designData.colors.text,
                fontFamily: designData.typography.headingFont,
                fontSize: designData.typography.fontSize.h2
              }}
            >
              Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {(userData.skills as string)?.split(',').map((skill, index) => (
                <div 
                  key={index} 
                  className="px-4 py-2 text-center font-medium rounded"
                  style={{ 
                    backgroundColor: designData.colors.accent,
                    color: designData.colors.primary
                  }}
                >
                  {skill.trim()}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section id="contact" className="py-20 px-12" style={{ backgroundColor: designData.colors.primary }}>
        <div className="max-w-4xl">
          <h2 
            className="text-3xl font-bold mb-8"
            style={{ 
              color: designData.colors.background,
              fontFamily: designData.typography.headingFont,
              fontSize: designData.typography.fontSize.h2
            }}
          >
            Get In Touch
          </h2>
          <div className="space-y-4">
            <p 
              className="text-xl"
              style={{ 
                color: designData.colors.surface,
                fontFamily: designData.typography.bodyFont
              }}
            >
              {userData.email || 'your.email@example.com'}
            </p>
            {userData.phone && (
              <p 
                className="text-xl"
                style={{ 
                  color: designData.colors.surface,
                  fontFamily: designData.typography.bodyFont
                }}
              >
                {userData.phone}
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  );

  return (
    <div className="flex">
      {renderSidebar()}
      {renderMainContent()}
    </div>
  );
};

export default PortfolioLayout;
