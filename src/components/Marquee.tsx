const ITEMS = [
  'React',
  'React Native',
  'TypeScript',
  'Rust',
  'Python',
  'Node.js',
  'Firebase',
  'Supabase',
  'WebSockets',
  'AI APIs',
  'WebGL',
  'C++',
];

export function Marquee() {
  const row = (
    <div className="marquee-item" aria-hidden="true">
      {ITEMS.map((item) => (
        <span key={item} className="marquee-item">
          <span className="dot" />
          {item}
        </span>
      ))}
    </div>
  );

  return (
    <div className="marquee" role="presentation">
      <div className="marquee-track">
        {row}
        {row}
      </div>
    </div>
  );
}
