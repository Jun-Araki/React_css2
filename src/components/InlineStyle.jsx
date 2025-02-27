export const InlineStyle = () => {
  const containerStyle = {
    border: "solid 2px #392eff",
    borderRadius: "20px",
    padding: "8px",
    margin: "8px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  };
  const titleStyle = {
    margin: 0,
    color: "#3d94a8",
  };
  const buttonStyle = {
    backgroundColor: "#abedd8",
    border: "none",
    padding: "8px",
  };
  return (
    <div style={containerStyle}>
      <p style={titleStyle}>Inline Style</p>
      <button style={buttonStyle}>Good</button>
    </div>
  );
};
