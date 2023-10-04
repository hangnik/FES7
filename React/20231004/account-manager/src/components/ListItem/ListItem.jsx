import React from "react";

export default function ListItem({ item }) {
  return (
    <tr>
      <th>{item.name}</th>
      <td>{item.price}</td>
    </tr>
  );
}
