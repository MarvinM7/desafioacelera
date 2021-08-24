import React from 'react';

const Type = ({ type, click }) => {
  return (
    <React.Fragment key={type.index}>
      <div
        className='type font-text'
        style={{backgroundColor: type.checked ? '#E2350D' : '', color: type.checked ? '#FFFFFF' : '#E2350D' }} onClick={() => click(type)}
      >
        {type.name}
      </div>
    </React.Fragment>
  )
}

export default Type;