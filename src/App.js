import { Component } from "react";
import "./App.css";
import superHeroes from "./data/superHeroes";
import HeroForm from "./components/HeroForm";
import HeroList from "./components/HeroList";

class App extends Component {

  constructor() {
    super();
    this.state = {
      allSuperHeroes: superHeroes,
      selected: []
      // AN ARRAY IS A NUMBERED/ORDERED LIST
    };
  }

  // HOW TO SPEAK TO CHILD SO IT CAN SPEAK BACK. PASSING MESSAGE DOWN AS A PROP TO CHILD SELECTED
  handleHeroSelect = (event) => {
    const { allSuperHeroes } = this.state
    const { value } = event.target
    // console.log(event.target.value)
    let hero = allSuperHeroes.find(hero => {
      return hero.name.includes(value)
    })
    this.setState({
      selected: [...this.state.selected, hero]

    })
  }

  render() {
    // console.log(this.state.selected)
    return <div className="app">
      <NavBar />
      <HeroForm handleHeroSelect={this.handleHeroSelect}
      handleNewHero={this.handleNewHero}
      />
      <HeroList selected={this.state.selected}/>
    </div>
  }
}

export default App;
