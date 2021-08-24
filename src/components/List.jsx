import React from 'react';
import Type from './Type';

const List = ({data, click}) => {
  return (
    <div className="grid-type">
      {data.map(item => {
        return (
          <React.Fragment key={item.id}>
            <Type
              type={item}
              click={click}
            />
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default List;