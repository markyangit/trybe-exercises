import React, {Component} from 'react';

class Pokemon extends Component {
    render () {
        const { name, type, averageWeight, image } = this.props.pokemon;
        
        return (
            <section className={"pokemon-section"}>
                <h1>{ name }</h1>
                <p>{ type }</p>
                <p>Average Weight: { averageWeight.value } { averageWeight.measurementUnit }</p>
                <img alt="imagem representativa do Pokemon" src={image}></img>
            </section>
        )
    }
}

export default Pokemon;