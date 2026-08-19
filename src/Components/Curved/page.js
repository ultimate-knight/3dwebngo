export default function Curved() {
  return (
    <svg
      className="h-[400px] w-[20px] shrink-0"
      viewBox="0 0 20 400"
      preserveAspectRatio="none"
     
    >
      <path
        d="M14 8
           C 10 10, 4 8, 4 20
           L 4 380
           C 4 380, 4 392, 14 392"
        stroke="#06896B"
        strokeWidth="7"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}