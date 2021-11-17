import { Component } from "react";
import HeroCard from "./HeroCard";

class HeroList extends Component {
  render() {
    const { selected } = this.props;
    let allHeros = selected.map((hero, i) => {
      return <HeroCard key={hero.name + i} hero={hero} />
    })

    return (
    <div className="heroesContainer"> 
    { allHeros };
    </div>
    )
  }
}

export default HeroList;
