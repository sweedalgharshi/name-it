import React from 'react'
import NameCard from '../NameCard/NameCard'
import './ResultsContainer.css'

const ResultsContainer = ({ suggestedNames }) => {
    return (
        <div className="results-container">
            {suggestedNames.map((suggestedName) => (
                <NameCard key={suggestedName} suggestedName={suggestedName} />
            ))}
        </div>
    )
}

export default ResultsContainer
