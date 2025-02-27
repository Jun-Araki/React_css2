export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">Styled JSx</p>
        <button className="button">Awesome</button>
      </div>
      <style jsx="true">{`
        .container {
          border: solid 2px #392eff;
          border-radius: 20px;
          padding: 8px;
          margin: 8px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .title {
          margin: 0;
          color: #3d94a8;
        }
        .button {
          background-color: #abedd8;
          border: none;
          padding: 8px;
          &:hover {
            background-color: #46cdcf;
            color: #fff;
            cursor: pointer;
          }
        }
      `}</style>
    </>
  );
};
