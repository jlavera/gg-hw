import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Row from './row/Row'
import HeaderRow from './row/headerRow/HeaderRow'

import './Spreadsheet.scss'
import LinkButton from './linkButton/LinkButton'

const Spreadsheet = ({ rowsCount, columnsCount }) => {
  let { id } = useParams()

  let [ data, setData ] = useState([...Array(rowsCount)]
    .map(_ => [...Array(columnsCount)].map(_ => '')))

  useEffect(() => {
    if (!id) return

    const cachedDataStr = localStorage.getItem(id)

    if (!cachedDataStr) {
      localStorage.setItem(id, JSON.stringify(data))
      return
    }
    
    setData(JSON.parse(cachedDataStr))
  }, [])

  const updateCellFn = (rowIdx, colIdx) => value => {
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
          updateCellFn={updateCellFn}
        />)
      }
      
      <LinkButton data={data} id={id} />
    </div>
  )
}

export default Spreadsheet
