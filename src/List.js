import React, { Component } from 'react';
import './list.css';
import Card from './Card';

class List extends Component {
    render (){
        console.log('allCards:', this.props.allCards)
        const cards = this.props.cards;
        const allCards = this.props.allCards;
        return (
            <section className="List">
                <header className="List-header">
                <h2>{this.props.header}</h2>
                </header>
                <div className="List-cards">
                {cards.map((card) => 
                    <Card
                    key={card.key}
                    title={card.title}
                    content={card.content}
                    />
                )}
                <button type="button" className="List-add-button">
                    + Add Random Card
                </button>
                </div>
            </section>
        )
    }
}

export default List;