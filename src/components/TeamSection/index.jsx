import React from 'react';
import { Container } from '../TeamSection/TeamSection';
import { Card } from '../../components/Card';

const TeamSection = ({ children, cards }) => {
    let pmTeam, investors;

    if (cards) {
        pmTeam = cards.filter(card => card.role === 'project_managment');
        investors = cards.filter(card => card.role === 'investor');
    }

    return (
        <Container>
            {children}
            <h3 className='title'>Project Management team</h3>
            <div className="cards">
                {
                    pmTeam ?
                        (
                            pmTeam.map((card, index) => {
                                return (
                                    <Card key={index}
                                        id={card.id}
                                        name={card.name}
                                        jobTitle={card.jobTitle}
                                        twitter={card.twitter}
                                        linkedin={card.linkedin}
                                        instagram={card.instagram}
                                    />
                                )
                            })
                        )
                        :
                        <p>Loading...</p>
                }
            </div>
            <h3 className='title'>Investors / VCs</h3>
            <div className="cards">
                {
                    investors ?
                        (
                            investors.map((card, index) => {
                                return (
                                    <Card key={index}
                                        id={card.id}
                                        name={card.name}
                                        jobTitle={card.jobTitle}
                                        twitter={card.twitter}
                                        linkedin={card.linkedin}
                                        instagram={card.instagram}
                                    />
                                )
                            })
                        )
                        :
                        <p>Loading...</p>
                }
            </div>
            <p>More investors and VCs to be revealed.</p>
        </Container>
    )
}

export { TeamSection };