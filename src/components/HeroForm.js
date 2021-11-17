import React from "react";

class HeroForm extends React.Component {
  constructor() {
    super();

    this.state = {};
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <form>
          <div>
            <label htmlFor="hero-select"></label>
          </div>
          <select
            onChange={this.props.handleHeroSelect}
            name="hero-select"
            id="hero-select"
          >
            <option value="blank">Choose a Hero</option>
            <option value="Spider-Man">Spider-Man</option>
            <option value="Hulk">Hulk</option>
            <option value="Captain America">Captain America</option>
            <option value="Black Widow">Black Widow</option>
            <option value="Black Panther">Black Panther</option>
            <option value="Thor">Thor</option>
            <option value="Iron Man">Iron Man</option>
            <option value="Vision">Vision</option>
            <option value="Hawkeye">Hawkeye</option>
          </select>
        </form>
      </div>
    );
  }
}

export default HeroForm