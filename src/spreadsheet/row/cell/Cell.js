import React, { useState } from 'react'
import classnames from 'classnames'

import ReferenceValue from './ValuesDisplay/ReferenceValue'
import AbsoluteValue from './ValuesDisplay/AbsoluteValue'

import './Cell.scss'

const Cell = ({ rowIdx, columnIdx, data, updateCellFn }) => {
  const getCurrentCellData = () => data[rowIdx][columnIdx] || ''

  let [ isEditing, setIsEditing ] = useState(false)
  let [ editingData, setEditingData ] = useState(getCurrentCellData())

  const classes = classnames({
    cell: true,
    isEditing
  })

  const saveEdit = event => {
    updateCellFn(editingData)
    setIsEditing(false)
    event.preventDefault()    
  }

  const cancelEdit = event => {
    setEditingData(getCurrentCellData())
    setIsEditing(false)
    event.preventDefault()
  }
  
  const input = (
    <input 
      autoFocus={true}
      value={editingData} 
      onChange={v => setEditingData(v.target.value)}
      onKeyDown={event => {
        if (event.key === 'Enter' || event.key === 'Tab') {
          // TODO: on tab move focus to right cell 
          saveEdit(event)
        } else if (event.key === 'Escape') {
          cancelEdit(event)
        }
      }}
      onBlur={event => cancelEdit(event)}
    />
  )

  const getValueDisplay = () => {
    return getCurrentCellData().startsWith('=') ? (
      <ReferenceValue data={data} value={getCurrentCellData()} rowIdx={rowIdx} columnIdx={columnIdx} />
    ) : (<AbsoluteValue value={getCurrentCellData()}/>)
  }

  return (
    <div
      className={classes}
      onClick={() => setIsEditing(true) }
      onFocus={() => setIsEditing(true) }>
      { isEditing ? input : getValueDisplay() }
    </div>
  )
}

export default Cell
