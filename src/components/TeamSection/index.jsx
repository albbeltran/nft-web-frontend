import React from 'react';
import { Container } from '../TeamSection/TeamSection';
import { Card } from '../../components/Card';

const TeamSection = ({ children, cards }) => {
    let pmTeam, investors;

    if(cards) {
        pmTeam = cards.filter(card => card.role==='project_managment');
        investors = cards.filter(card => card.role==='investor');
    }

    return (
        <Container>
            {children}
            <h3 className='title'>Project Management team</h3>
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
            <h3 className='title'>Investors / VCs</h3>
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
        </Container>
    )
}

export { TeamSection };