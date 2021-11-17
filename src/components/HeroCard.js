import { Component } from "react";



class HeroCard extends Component {

    render() {
        const { name, description, thumbnail} = this.props.hero

        return(
            <div className="heroCard">
                <h2>{name}</h2>
                <p>{description}</p>
                <img src={thumbnail} alt="superheroName" />
            </div>
        )
    }
}

export default HeroCard