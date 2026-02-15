const shapes = {
  circles: (
    <>
      <circle cx="80" cy="80" r="60" fill="hsl(192,100%,48%)" opacity="0.08" />
      <circle cx="900" cy="200" r="40" fill="hsl(42,92%,56%)" opacity="0.1" />
      <circle cx="1100" cy="100" r="25" fill="hsl(330,80%,55%)" opacity="0.07" />
      <circle cx="200" cy="400" r="35" fill="hsl(150,47%,38%)" opacity="0.06" />
    </>
  ),
  rings: (
    <>
      <circle cx="150" cy="100" r="70" fill="none" stroke="hsl(13,88%,52%)" strokeWidth="2" opacity="0.1" />
      <circle cx="1000" cy="300" r="50" fill="none" stroke="hsl(192,100%,48%)" strokeWidth="2" opacity="0.08" />
      <circle cx="50" cy="350" r="30" fill="none" stroke="hsl(42,92%,56%)" strokeWidth="1.5" opacity="0.1" />
    </>
  ),
  dots: (
    <>
      {[
        [100, 50], [300, 120], [500, 80], [700, 150], [900, 60], [1100, 130],
        [200, 300], [400, 350], [600, 280], [800, 320], [1000, 370],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="3" fill="hsl(150,47%,38%)" opacity={0.06 + (i % 3) * 0.03} />
      ))}
    </>
  ),
  waves: (
    <>
      <path d="M0 200 Q200 150 400 200 T800 200 T1200 200" fill="none" stroke="hsl(192,100%,48%)" strokeWidth="1.5" opacity="0.08" />
      <path d="M0 250 Q200 200 400 250 T800 250 T1200 250" fill="none" stroke="hsl(42,92%,56%)" strokeWidth="1" opacity="0.06" />
    </>
  ),
  diagonals: (
    <>
      <line x1="0" y1="0" x2="200" y2="400" stroke="hsl(13,88%,52%)" strokeWidth="1" opacity="0.06" />
      <line x1="1000" y1="0" x2="800" y2="400" stroke="hsl(150,47%,38%)" strokeWidth="1" opacity="0.05" />
      <line x1="600" y1="0" x2="700" y2="400" stroke="hsl(192,100%,48%)" strokeWidth="0.8" opacity="0.04" />
    </>
  ),
};

type ShapeVariant = keyof typeof shapes;

interface FloatingShapesProps {
  variant?: ShapeVariant;
  className?: string;
}

const FloatingShapes = ({ variant = "circles", className = "" }: FloatingShapesProps) => (
  <svg
    className={`pointer-events-none absolute inset-0 h-full w-full overflow-visible ${className}`}
    viewBox="0 0 1200 400"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    {shapes[variant]}
  </svg>
);

export default FloatingShapes;
