import logo from "./logo.svg";
import "./App.css";
import { getEachPokemon, getPokemonLIst } from "./endPoints";
import { useEffect, useState } from "react";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [listData, setListData]=useState([])
  let data = [];
  let newObj;



  const getData = () => {
    setLoading(true);
    getPokemonLIst().then((response) => {
      setLoading(false);
      for (let i = 0; i < response.results.length; i++) {
console.log(response.results[i]);
        let lastThree = response.results[i].url.substr(
          response.results[i].url.length - 3
        );
        console.log(response.results[i].url.length - 3);
        console.log(lastThree);
        let getPokemonNumber = lastThree.split("/")[0];
        console.log(getPokemonNumber);
        console.log(getEachPokemon(getPokemonNumber));
        if (getPokemonNumber > 0) {
          getEachPokemon(getPokemonNumber).then((res) => {
            newObj = {
              name: response.results[i].name,
              imgUrl: res.sprites.back_default,
            };

            if (newObj) {
              data.push(newObj);
            }
            if (data.length) {
              setPokemonList([...data]);
            }
          });
          console.log(response.results[i].name);
          console.log(data);
        }
      }
    });
  };

  console.log(listData);
  console.log(loading);

  useEffect(() => {
    getData();
  }, []);

  useEffect(()=>{
    setListData(pokemonList)
  },[pokemonList])

  return (
    <div className="App">
      <header className="App-header">
        {pokemonList.map((each, i) => (
          <div>
            <img src={each.imgUrl} className="App-logo" alt="logo" />
            <p>
              {each.name}
            </p>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
