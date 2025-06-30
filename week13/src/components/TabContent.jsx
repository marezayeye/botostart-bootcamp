import React from 'react'

function TabContent({ index, title, setFunction, storageWriter, isActive }) {
  if (isActive){
    return (
    <div className='active-tab' onClick={() => {
      setFunction(index);
      storageWriter(index);
    }}>{title}</div>
  )
  } else {
    return (
    <div onClick={() => {
      setFunction(index);
      storageWriter(index);
    }}>{title}</div>
  )
  }
}
export default TabContent
