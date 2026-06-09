import Image from "next/image";
import { favoriteTools, indiaRegions, techStack } from "@/lib/content";

export function HomeBento() {
  const emphasizedToolIndex = Math.floor(favoriteTools.length / 2);

  return (
    <section className="home-bento" id="home-bento" aria-label="Tech stack, availability, and tools">
      <div className="home-bento-grid">
        <article className="home-bento-card glass-panel home-bento-card--stack">
          <p className="section-label">Tech Stack</p>
          <h2>The stack behind everything I ship</h2>
          <div className="home-tech-pills">
            {techStack.map((item) => (
              <span className="home-tech-pill" key={item.name}>
                <Image src={item.icon} alt="" width={16} height={16} aria-hidden="true" />
                {item.name}
              </span>
            ))}
          </div>
        </article>

        <article className="home-bento-card glass-panel home-bento-card--india">
          <p className="section-label">Available in India</p>
          <h2>Based in India</h2>
          <div className="home-india-map" aria-hidden="true">
            <div className="home-india-globe">
              <span className="home-india-land" />
              <span className="home-india-marker home-india-marker--gujarat">
                <i />
                <small>Gujarat</small>
              </span>
              <span className="home-india-marker home-india-marker--mumbai">
                <i />
                <small>Mumbai</small>
              </span>
              <span className="home-india-marker home-india-marker--bangalore">
                <i />
                <small>Bangalore</small>
              </span>
            </div>
          </div>
          <ul className="home-india-regions">
            {indiaRegions.map((region) => (
              <li key={region}>{region}</li>
            ))}
          </ul>
        </article>
      </div>

      <article className="home-bento-card glass-panel home-bento-card--uses">
        <p className="section-label">Uses</p>
        <h2>Check out my favourite tools</h2>
        <div className="home-uses-row">
          {favoriteTools.map((tool, index) => (
            <div
              className={`home-uses-item${index === emphasizedToolIndex ? " is-emphasized" : ""}`}
              key={tool.name}
            >
              <div className="home-uses-icon">
                <Image src={tool.icon} alt="" width={28} height={28} aria-hidden="true" />
              </div>
              <span>{tool.name}</span>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
