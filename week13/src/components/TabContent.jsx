import React from 'react'

function TabContent({ index, title, setFunction, storageWriter }) {
    return (
    <div onClick={() => {
      setFunction(index);
      storageWriter(index);
    }}>{title}</div>
  )
}
export default TabContent
