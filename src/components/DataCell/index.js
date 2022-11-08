import React, {useEffect} from 'react';
import RelationalDataCell from "./RelationalDataCell";
import RelationalArrayDataCell from "./RelationalArrayDataCell";

import "./styles.css";

const fieldsToShow = {
  films: ['title'],
  homeworld: ['name'],
  starships: ['manufacturer', 'model']
}

const DataCell = ({relationalField, field, data}) => {
  // Data is an array and need to be processed as it
  if (Array.isArray(data)) return <RelationalArrayDataCell className="Data-cell" fieldsToShow={fieldsToShow[field]} urlArray={data} />

  // Data is relational and need to be processed as it
  if (relationalField) return <RelationalDataCell className="Data-cell" fieldsToShow={fieldsToShow[field]} url={data} />

  return <td className="Data-cell">{data}</td>
};

export default DataCell;