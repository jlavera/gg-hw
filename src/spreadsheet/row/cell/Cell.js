import React, { useState } from 'react'
import classnames from 'classnames';

import './Cell.css'

const Cell = ({ data, updateCellFn }) => {
  let [ mouseOver, setMouseOver ] = useState(false)
  let [ isEditing, setIsEditing ] = useState(false)
  let [ editingData, setEditingData ] = useState(data || '')

  let classes = classnames({
    cell: true,
    mouseOver,
    isEditing
  })

  const saveEdit = event => {
    updateCellFn(editingData)
    setIsEditing(false)
    event.preventDefault()    
  }

  const cancelEdit = event => {
    setEditingData(data || '')
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
    onBlur={event => cancelEdit(event)} />
  )

  return (
    <div
      className={classes}
      onMouseOver={() => setMouseOver(true) }
      onMouseLeave={() => setMouseOver(false) }
      onClick={() => setIsEditing(true) } >
      { isEditing ? input : data }
    </div>
  )
}

export default Cell
