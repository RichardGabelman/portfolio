import { useEffect, useRef } from "react";

const W = 800, H = 320, INSET = 22, R = 44;
const GAUGE = 7, SLEEPER_HALF = 12, SLEEPER_SPACING = 20;

function buildTrackGeometry() {
  const x0 = INSET, y0 = INSET, x1 = W - INSET, y1 = H - INSET;
  const tw = x1 - x0, th = y1 - y0;
  const pts = [], tans = [];

  function straight(ax, ay, bx, by, count) {
    const dx = bx - ax, dy = by - ay, len = Math.sqrt(dx*dx + dy*dy);
    const tx = dx/len, ty = dy/len;
    for (let i = 0; i < count; i++) {
      const t = i / count;
      pts.push([ax + dx*t, ay + dy*t]);
      tans.push([tx, ty]);
    }
  }
  function arc(cx, cy, a0, count) {
    for (let i = 0; i < count; i++) {
      const a = a0 + (i / count) * (Math.PI / 2);
      pts.push([cx + R * Math.cos(a), cy + R * Math.sin(a)]);
      tans.push([Math.cos(a + Math.PI/2), Math.sin(a + Math.PI/2)]);
    }
  }

  const circ = 2 * (tw - 2*R + th - 2*R) + 4 * (Math.PI/2) * R;
  const sn = (l) => Math.max(3, Math.round(800 * l / circ));
  const cn = Math.max(6, Math.round(800 * (Math.PI/2) * R / circ));

  straight(x0+R, y0, x1-R, y0, sn(tw-2*R));
  arc(x1-R, y0+R, -Math.PI/2, cn);
  straight(x1, y0+R, x1, y1-R, sn(th-2*R));
  arc(x1-R, y1-R, 0, cn);
  straight(x1-R, y1, x0+R, y1, sn(tw-2*R));
  arc(x0+R, y1-R, Math.PI/2, cn);
  straight(x0, y1-R, x0, y0+R, sn(th-2*R));
  arc(x0+R, y0+R, Math.PI, cn);

  // Sleeper elements
  const sleepers = [];
  let acc = 0, next = 0;
  for (let i = 0; i < pts.length - 1; i++) {
    const dx = pts[i+1][0] - pts[i][0], dy = pts[i+1][1] - pts[i][1];
    acc += Math.sqrt(dx*dx + dy*dy);
    if (acc >= next) {
      const [px, py] = pts[i], [, ty] = tans[i];
      const tx = tans[i][0];
      const nx = -ty, ny = tx;
      sleepers.push({
        x1: px + nx * SLEEPER_HALF, y1: py + ny * SLEEPER_HALF,
        x2: px - nx * SLEEPER_HALF, y2: py - ny * SLEEPER_HALF,
      });
      next += SLEEPER_SPACING;
    }
  }

  // Rail paths
  function railD(offset) {
    return pts.map(([px, py], i) => {
      const [tx, ty] = tans[i];
      const nx = -ty * offset, ny = tx * offset;
      return `${i === 0 ? "M" : "L"} ${px + nx},${py + ny}`;
    }).join(" ") + " Z";
  }

  // Motion path (centerline)
  const motionPath = `M ${x0+R},${y0} L ${x1-R},${y0} Q ${x1},${y0} ${x1},${y0+R} L ${x1},${y1-R} Q ${x1},${y1} ${x1-R},${y1} L ${x0+R},${y1} Q ${x0},${y1} ${x0},${y1-R} L ${x0},${y0+R} Q ${x0},${y0} ${x0+R},${y0} Z`;

  return { sleepers, rail1: railD(GAUGE), rail2: railD(-GAUGE), motionPath };
}

const { sleepers, rail1, rail2, motionPath } = buildTrackGeometry();

// Content area in SVG coords, inset from track
const CONTENT_X = INSET + 20;
const CONTENT_Y = INSET + 20;
const CONTENT_W = W - (INSET + 20) * 2;
const CONTENT_H = H - (INSET + 20) * 2;

const TrainHeader = () => {
  const locoRef = useRef(null);

  useEffect(() => {
    if (locoRef.current) {
      locoRef.current.style.offsetPath = `path('${motionPath}')`;
    }
  }, []);

  return (
    <header className="header">
      <svg
        className="train-svg"
        viewBox={`0 0 ${W} ${H}`}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        {/* Track */}
        <g>
          {sleepers.map((s, i) => (
            <line
              key={i}
              x1={s.x1} y1={s.y1} x2={s.x2} y2={s.y2}
              stroke="#4a2e10" strokeWidth="5" strokeLinecap="round"
            />
          ))}
          <path d={rail1} fill="none" stroke="#6a6050" strokeWidth="2.5" strokeLinejoin="round" />
          <path d={rail2} fill="none" stroke="#6a6050" strokeWidth="2.5" strokeLinejoin="round" />
        </g>

        <foreignObject x={CONTENT_X} y={CONTENT_Y} width={CONTENT_W} height={CONTENT_H}>
          <div xmlns="http://www.w3.org/1999/xhtml" className="header-inner">
            <h1>
              Hi, I'm <span id="name">Richard Gabelman</span>
            </h1>
            <p className="subtext">
              CS grad from SDSU. I build full-stack web apps and care about
              technology that's actually useful to people.
            </p>
            <nav className="contact-links">
              <a href="mailto:richardgabelman@gmail.com" className="contact-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" fill="currentColor" />
                </svg>
                Email
              </a>
              <a href="https://github.com/RichardGabelman" className="contact-link" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 96" width="14" height="14">
                  <path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="currentColor" />
                </svg>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/richard-gabelman/" className="contact-link" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path fill="currentColor" d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z" />
                </svg>
                LinkedIn
              </a>
            </nav>
          </div>
        </foreignObject>

        {/* Locomotive */}
        <g ref={locoRef} className="loco" style={{ offsetDistance: "0%" }}>
          <rect x="-24" y="-9" width="46" height="18" rx="2" fill="#111111" />
          <polygon points="-22,7 16,7 20,3 22,0 20,-3 16,-7 -22,-7" fill="#8b1a1a" stroke="#a52020" strokeWidth="0.8" />
          <line x1="-4" y1="-7" x2="-4" y2="7" stroke="#a52020" strokeWidth="0.7" />
          <line x1="6"  y1="-7" x2="6"  y2="7" stroke="#a52020" strokeWidth="0.7" />
          <rect x="14" y="-7" width="9" height="14" rx="2.5" fill="#1a1a1a" stroke="#333" strokeWidth="0.7" />
          <circle cx="10" cy="0" r="5.5" fill="#8a6a20" stroke="#6a5018" strokeWidth="0.7" />
          <circle cx="10" cy="0" r="3.8" fill="#1a1a1a" stroke="#333" strokeWidth="0.5" />
          <circle cx="10" cy="0" r="2"   fill="#111" />
          <circle cx="-1" cy="0" r="4"   fill="#8a6a20" stroke="#6a5018" strokeWidth="0.6" />
          <circle cx="-1" cy="0" r="2.2" fill="#6a5018" />
          <rect x="-24" y="-8" width="14" height="16" rx="1.5" fill="#7a1818" stroke="#a52020" strokeWidth="0.7" />
          <rect x="-24" y="-10" width="13" height="3.5" rx="1" fill="#1a1a1a" stroke="#333" strokeWidth="0.4" />
          <rect x="-22" y="-6.5" width="5" height="4.5" rx="0.8" fill="#c8a84a" opacity="0.7" />
          <rect x="-22" y="2"    width="5" height="4.5" rx="0.8" fill="#c8a84a" opacity="0.7" />
          <circle cx="23" cy="0" r="2.2" fill="#64edf1" opacity="0.85" />
          <circle cx="23" cy="0" r="1.1" fill="#d0fcfe" />
          <rect x="-20" y="-12" width="8" height="4" rx="1.5" fill="#1a1a1a" stroke="#444" strokeWidth="0.6" />
          <rect x="-20" y="8"   width="8" height="4" rx="1.5" fill="#1a1a1a" stroke="#444" strokeWidth="0.6" />
          <rect x="-8"  y="-12" width="8" height="4" rx="1.5" fill="#1a1a1a" stroke="#444" strokeWidth="0.6" />
          <rect x="-8"  y="8"   width="8" height="4" rx="1.5" fill="#1a1a1a" stroke="#444" strokeWidth="0.6" />
          <rect x="5"   y="-11" width="6" height="3.5" rx="1.2" fill="#1a1a1a" stroke="#444" strokeWidth="0.5" />
          <rect x="5"   y="7.5" width="6" height="3.5" rx="1.2" fill="#1a1a1a" stroke="#444" strokeWidth="0.5" />
          <line x1="-16" y1="-10" x2="-4" y2="-10" stroke="#9a7a28" strokeWidth="1.4" strokeLinecap="round" />
          <line x1="-16" y1="10"  x2="-4" y2="10"  stroke="#9a7a28" strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="5" cy="-5" r="1.8" fill="#9a7a28" stroke="#6a5018" strokeWidth="0.4" />
        </g>
      </svg>
    </header>
  );
};

export default TrainHeader;