import React from "react";
// using react.memo() to only render the new rows in the table and not rerender every row when a new row is added
const Row = React.memo((props) => {
  const { description, cost, quantity, key, price } = props;
  return (
    <tr key={key}>
      <td>{description}</td>
      <td>${cost}</td>
      <td>{quantity}</td>
      <td>${price}</td>
    </tr>
  );
});

export default Row;
