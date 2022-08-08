import React from 'react'
import './NameCard.css'

const nameCheapUrl =
    'https://www.namecheap.com/domains/registration/results/?domain='

const NameCard = ({ suggestedName }) => {
    return (
        <a
            target="_blank"
            href={`${nameCheapUrl}${suggestedName}`}
            className="card-link"
            rel="noreferrer"
        >
            <div className="result-name__container">
                <p className="result-name">{suggestedName}</p>
            </div>
        </a>
    )
}

export default NameCard
