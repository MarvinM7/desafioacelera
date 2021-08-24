import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Col, Form, Row } from 'react-bootstrap';
import Grid from '../../components/Grid';
import List from '../../components/List';
import ReactLoading from 'react-loading';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);
  const [pokemonsFiltered, setPokemonsFiltered] = useState([]);
  const [order, setOrder] = useState('1')
  const [search, setSearch] = useState('');
  const [favSwitch, setFavSwitch] = useState(false);
  const [favorites, setFavorites] = useState([]);
  
  useEffect(() => {
    let types_backend = [{
      id: 1,
      name: 'Bug',
      color: '#A8B821',
      checked: false
    },
    {
      id: 2,
      name: 'Dark',
      color: '#6F5848',
      checked: false
    },
    {
      id: 3,
      name: 'Dragon',
      color: '#724EF9',
      checked: false
    },
    {
      id: 4,
      name: 'Electric',
      color: '#F8CF32',
      checked: false
    },
    {
      id: 5,
      name: 'Fairy',
      color: '#F4C8E2',
      checked: false
    },
    {
      id: 6,
      name: 'Fighting',
      color: '#C03228',
      checked: false
    },
    {
      id: 7,
      name: 'Fire',
      color: '#EE7F33',
      checked: false
    },
    {
      id: 8,
      name: 'Flying',
      color: '#A790EF',
      checked: false
    },
    {
      id: 9,
      name: 'Ghost',
      color: '#705797',
      checked: false
    },
    {
      id: 10,
      name: 'Grass',
      color: '#78C84F',
      checked: false
    },
    {
      id: 11,
      name: 'Ground',
      color: '#E0C069',
      checked: false
    },
    {
      id: 12,
      name: 'Ice',
      color: '#98D8D7',
      checked: false
    },
    {
      id: 13,
      name: 'Normal',
      color: '#A9A778',
      checked: false
    },
    {
      id: 14,
      name: 'Poison',
      color: '#A040A1',
      checked: false
    },
    {
      id: 15,
      name: 'Psychic',
      color: '#E95587',
      checked: false
    },
    {
      id: 16,
      name: 'Rock',
      color: '#B6A037',
      checked: false
    },
    {
      id: 17,
      name: 'Steel',
      color: '#B8B8D0',
      checked: false
    },
    {
      id: 18,
      name: 'Water',
      color: '#6890F0',
      checked: false
    }]
    
    axios.get('https://unpkg.com/pokemons@1.1.0/pokemons.json')
    .then(response => {
      let response_aux = [];
      response.data.results.forEach((resp, index) => {
        resp.id = index;
        resp.favorite = false;
        response_aux.push(resp);
      })

      setPokemons(response_aux);
      setTypes(types_backend)
      setPokemonsFiltered(response_aux);
      
      setLoading(false);
    })
    .catch(error => {
      console.log(error)
    })
  }, []);

  useEffect(() => {
    setLoading(true);

    let pokemons_aux = [];

    if (favSwitch) {
      pokemons_aux = filterFav(pokemons, favorites);
    } else {
      pokemons.forEach(pokemon => pokemons_aux.push(pokemon));
    }

    let types_aux = [];
    types.forEach(type => {
      if (type.checked) {
        types_aux.push(type.name);
      }
    })

    if (types_aux.length > 0) {
      pokemons_aux = filterType(pokemons_aux, types_aux);
    }   

    pokemons_aux = filterText(pokemons_aux, search);
    pokemons_aux = filterSort(pokemons_aux, order);

    setPokemonsFiltered(pokemons_aux);
    setLoading(false);
  }, [favorites, favSwitch, order, pokemons, search, types]);

  const changeType = (data) => {
    let array = [];
    types.forEach(type => {
      if (data.name === type.name) {
        type.checked = !type.checked
      }

      array.push(type);
    })

    setTypes(array);
  }

  const changeFav = (data) => {
    let favorites_aux = [];
    let check = false;
    favorites.forEach(pokemon => {
      if (pokemon.id === data.id) {
        check = true;
        return;
      }

      favorites_aux.push(pokemon);
    })

    if (!check) {
      favorites_aux.push(data);
    }
    
    let pokemonsFilteredAux = [];
    pokemonsFiltered.forEach(pokemon => {
      if (pokemon.id === data.id) {
        pokemon.favorite = !pokemon.favorite;
      }

      pokemonsFilteredAux.push(pokemon);
    })
    
    setPokemonsFiltered(pokemonsFilteredAux);
    setFavorites(favorites_aux);
  }

  const filterFav = (list, favs) => {
    let response = [];
    if (favs.length > 0) {
      for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < favs.length; j++) {
          if (list[i].id === favs[j].id) {
            response.push(list[i]);
            break;
          }
        }
      }
    }

    return response;
  }

  const filterText = (list, text) => {
    return list.filter(pokemon => pokemon.name.toLowerCase().includes(text.toLowerCase()) ? pokemon : pokemon.national_number.includes(text) ? pokemon : null);
  }

  const filterSort = (list, order) => {
    let list2 = [];
    list2 = list.map(function(el, i) {
      return { index: i, value: el };
    })

    list2.sort(function(a, b) {
      let response;
      if (order === '1') {
        response = +(a.value.national_number.toLowerCase() > b.value.national_number.toLowerCase()) || +(a.value.national_number.toLowerCase() === b.value.national_number.toLowerCase()) - 1;
      } else if (order === '2') {
        response = +(a.value.national_number.toLowerCase() < b.value.national_number.toLowerCase()) || +(a.value.national_number.toLowerCase() === b.value.national_number.toLowerCase()) - 1;
      } else if (order === '3') {
        response = +(a.value.name.toLowerCase() > b.value.name.toLowerCase()) || +(a.value.name.toLowerCase() === b.value.name.toLowerCase()) - 1;
      } else if (order === '4') {
        response = +(a.value.name.toLowerCase() < b.value.name.toLowerCase()) || +(a.value.name.toLowerCase() === b.value.name.toLowerCase()) - 1;
      }

      return response;
    })
    
    let response = list2.map(function(el) {
      return list[el.index];
    })

    return response;
  }

  const filterType = (list, types) => {
    let response = [];
    list.forEach(pokemon => {
      if (pokemon.type.some(r=> types.indexOf(r) >= 0)) {
        response.push(pokemon);
      }
    })

    return response;
  }

  return (
    <div className="content">
      {loading?
        <div className="loading">
          <ReactLoading type="spokes" color={'#E2350D'} />
        </div>
      :
        <React.Fragment>
          <Row>
            <Col xs={'12'} sm={'8'} md={'6'}>
              <Form>
                <Form.Group className="mb-3" controlId="search">
                  <Form.Control className="font-text input input-text" type="text" placeholder="Pesquisar por nome ou número" value={search} onChange={(e) => setSearch(e.target.value)} />
                </Form.Group>
              </Form>
            </Col>
            <Col xs={'0'} md={'3'}>
            </Col>
            <Col xs={'12'} sm={'4'} md={'3'}>
              <Form>
                <Form.Group className="mb-3" controlId="order">
                  <Form.Select className="font-text input select" value={order} onChange={(e) => setOrder(e.target.value)}>
                    <option value='1'>Menor número primeiro</option>
                    <option value='2'>Maior número primeiro</option>
                    <option value='3'>Nome A-Z</option>
                    <option value='4'>Nome Z-A</option>
                  </Form.Select>
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <div className="scrollbar">
            <Row>
              <Col xs={'12'} sm={'3'}>
                <h4 className="font-text">Filtrar por Tipo</h4>
                <List
                  data={types}
                  click={changeType}
                />
                <h4 className="font-text">Filtrar Favoritos</h4>
                <Form>
                  <Form.Check 
                    type="switch"
                    id="favorites"
                    label=""
                    value={favSwitch}
                    onChange={() => setFavSwitch(!favSwitch)}
                  />
                </Form>
              </Col>
              <Col xs={'12'} sm={'9'}>
                <Grid
                  data={pokemonsFiltered} 
                  click={changeFav}
                />
              </Col>
            </Row>
          </div>
        </React.Fragment>
      }
    </div>
  )
}

export default Home;