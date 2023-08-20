const GradientIcon = ({ icon, ...props }) => {
  const Icon = icon;
  return (
    <div>
      <svg
        width="0"
        height="0"
      >
        <linearGradient
          id="blue-gradient"
          x1="100%"
          y1="100%"
          x2="0%"
          y2="0%"
        >
          <stop
            stopColor="#058ed9"
            offset="100%"
          />
          <stop
            stopColor="	#40bbda"
            offset="0%"
          />
        </linearGradient>
      </svg>
      <Icon
        {...props}
        style={{ fill: "url(#blue-gradient)" }}
      />
    </div>
  );
};

export default GradientIcon;
