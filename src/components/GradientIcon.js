export default function GradientIcon(icon) {
  return (
    <div>
      <svg
        width="0"
        height="0"
      >
        <linearGradient
          id="icon-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop
            stopColor="#058ed9"
            offset="0%"
          />
          <stop
            stopColor="#40bbda"
            offset="100%"
          />
        </linearGradient>
      </svg>
      <div className="flex items-center">{icon}</div>
    </div>
  );
}
