import React, {useState} from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as HeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as HeartRegular } from '@fortawesome/free-regular-svg-icons';

const Item = ({ click, data }) => {
  const [showIcon, setShowIcon] = useState(false);

  const colorType = (type) => {
    let response;

    switch(type) {
      case 'Fire':
        response = '#EE7F33';
        break;
      case 'Normal':
        response = '#A9A778';
        break;
      case 'Water':
        response = '#6890F0';
        break;
      case 'Grass':
        response = '#78C84F';
        break;
      case 'Ice':
        response = '#98D8D7';
        break;
      case 'Poison':
        response = '#A040A1';
        break;
      case 'Ground':
        response = '#E0C069';
        break;
      case 'Flying':
        response = '#A790EF';
        break;
      case 'Bug':
        response = '#A8B821';
        break;
      case 'Rock':
        response = '#B6A037';
        break;
      case 'Ghost':
        response = '#705797';
        break;
      case 'Dragon':
        response = '#724EF9';
        break;
      case 'Dark':
        response = '#6F5848';
        break;
      case 'Steel':
        response = '#B8B8D0';
        break;
      case 'Fairy':
        response = '#F4C8E2';
        break;
      case 'Psychic':
        response = '#E95587';
        break;
      case 'Electric':
        response = '#F8CF32';
        break;
      case 'Fighting':
        response = '#C03228';
        break;
      default:
        break;  

    }

    return response;
  }

  return (
    <Card
      style={{cursor: 'pointer'}}
      onClick={() => click(data)}
      onMouseEnter={() => setShowIcon(true)}
      onMouseLeave={() => !data.favorite ? setShowIcon(false) : null}
    >
      <Card.Body>
        <Card.Img src={data.sprites.normal} alt="Pokemon" />
      </Card.Body>
        {data.favorite || showIcon?
          <div className="container-icon">
            <FontAwesomeIcon icon={data.favorite ? HeartSolid : HeartRegular} className="icon-fav color-red" />
          </div>
        :
          null
        }
        <Card.Footer>
        <div className="font-text font-pokemon-number">{`Nº ${data.national_number}`}</div>
        <h5 className="font-text">{data.name}</h5>
        <div style={{display: 'flex'}}>
          {data.type.map((type, index) => {
            let color = colorType(type);
            return (
              <React.Fragment key={index}>
                <div
                  className="pokemon-type font-text"
                  style={{backgroundColor: color, border: `1px solid ${color}`}}
                >
                  {type}
                </div>
              </React.Fragment>
            )
          })}
        </div>
      </Card.Footer>
    </Card>
  )
}

export default Item;