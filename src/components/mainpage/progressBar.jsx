function ProgressBar(props) {
  const { bgcolor, completed } = props;

  const containerStyles = {
    height: '1rem',
    backgroundColor: 'white',
    borderRadius: '2rem',
    border: '1px solid #619d46',
  };

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right',
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles} />
    </div>
  );
}

export default ProgressBar;
