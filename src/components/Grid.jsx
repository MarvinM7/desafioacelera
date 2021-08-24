import React from 'react';
import Item from './Item';

const Grid = ({data, click}) => {
  return (
    <div className="grid-pokemon">
      {data.map(item => {
        return (
          <React.Fragment key={item.id}>
            <Item
              data={item}
              click={click}
            />
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default Grid;