const GradientText = ({ text }) => {
  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-focus via-primary to-secondary-focus">
      {text}
    </span>
  );
};

export default GradientText;
