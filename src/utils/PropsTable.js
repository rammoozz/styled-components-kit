// stories.js
import React from "react";

const Red = props => <span style={{ color: "red" }} {...props} />;

const PropsTable = ({ propDefinitions }) => {
  const propDefinitionsKeys = Object.keys(propDefinitions);
  const props = propDefinitionsKeys.map((id, index) => {
    const prop = propDefinitions[id];
    const { property, type, required, description, defaultValue } = prop;

    return (
      <tr key={property}>
        <td>
          {id}
          {required ? <Red>*</Red> : null}
        </td>
        <td>{type && Object.values(type)[0]}</td>
        <td>{defaultValue.value}</td>
        <td>{description}</td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>type</th>
          <th>default</th>
          <th>description</th>
        </tr>
      </thead>
      <tbody>{props}</tbody>
    </table>
  );
};

export default PropsTable;
