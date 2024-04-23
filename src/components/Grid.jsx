const styles = (columns) => {
  return {
    display: "grid",
    gridTemplateColumns: `repeat(${columns}, 109px)`,
    columGap: "20px",
    rowGap: "20px",
  };
};

export const Grid = (props) => (
  <div style={styles(props.columns)}> {props.children} </div>
);
