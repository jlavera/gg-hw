import React, { useState } from 'react'

import Row from './row/Row'
import HeaderRow from './row/headerRow/HeaderRow'

import './Spreadsheet.scss'

const Spreadsheet = ({ rowsCount, columnsCount }) => {
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
      <HeaderRow columnsCount={columnsCount} />

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
  )
}

export default Spreadsheet
