import React, { useState } from 'react'

import Row from './row/Row'

import './Spreadsheet.css'

const Spreadsheet = () => {
  let rowsCount = 10
  let columnsCount = 10
  let [ data, setData ] = useState([...Array(rowsCount)]
    .map(_ => [...Array(columnsCount)].map(_ => '')))

  const updateCell = (rowIdx, colIdx) => value => {
    const copy = [...data]
    const rowCopy = [...data[rowIdx]]

    rowCopy[colIdx] = value
    copy[rowIdx] = rowCopy

    setData(copy)
  }

  return (
    <div className="spreadsheet" key="spreadsheet">
      <Row isHeader={true} columnsCount={columnsCount} />

      { [...Array(rowsCount)].map((_, idx) =>
        <Row
          key={`row-${idx}`}
          rowIdx={idx}
          data={data}
          columnsCount={columnsCount}
          updateCellFn={updateCell}
        />)
      }
    </div>
  );
}

export default Spreadsheet
