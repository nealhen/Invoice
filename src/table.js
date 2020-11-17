import React from "react";
import Row from "./row";

const Table = (props) => {
  const { data } = props;
  return (
    <table>
      <tbody>
        <tr>
          <th>Description</th>
          <th>Cost</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
        {data.map((row, i) => (
          <Row
            key={`Item${i + 1}`}
            description={row.description}
            quantity={row.quantity}
            cost={row.cost}
            price={row.price}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
