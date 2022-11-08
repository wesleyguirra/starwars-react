import React from 'react';
import DataCell from "../DataCell";
import "./styles.css";

const relationalFields = ['homeworld', 'starships', 'films']

const PeopleRow = ({data}) => {

  return (
    <tr className="People-row">
      {Object.keys(data).map((key) => (
        <DataCell
          data={data[key]}
          field={key}
          relationalField={relationalFields.includes(key)}
        />
      ))}
    </tr>
  );
};

export default PeopleRow;