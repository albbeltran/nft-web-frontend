import React from 'react';
import { Container } from './FAQ';
import { Question } from '../../components/Question/index.jsx';

const FAQSection = ({ children, questions }) => {
    return (
        <Container className='Inner'>
            {children}
            <h1 className='title faq'>FAQ</h1>
            <div className="questions">
            </div>
            {
                questions ?
                    (
                        questions.map((question, index) => {
                            return (
                                <Question key={index}
                                    id={question.id}
                                    question={question.question}
                                    answer={question.answer}
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

export { FAQSection };