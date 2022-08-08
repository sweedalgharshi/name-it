import React from 'react'

import Header from '../Header/Header'
import SearchBox from '../SearchBox/SearchBox'
import ResultsContainer from '../ResultsContainer/ResultsContainer'

import './App.css'

const name = require('@rstacruz/startup-name-generator')
class App extends React.Component {
    constructor() {
        super()

        this.state = {
            headerText: 'Name It!',
            headerExpanded: true,
            suggestedNames: [],
        }
    }

    handleInputChange = (inputText) => {
        this.setState({
            headerExpanded: !inputText,
            suggestedNames: inputText ? name(inputText) : [],
        })
    }

    render() {
        return (
            <div>
                <Header
                    headTitle={this.state.headerText}
                    headerExpanded={this.state.headerExpanded}
                />
                <SearchBox onInputChange={this.handleInputChange} />
                <ResultsContainer suggestedNames={this.state.suggestedNames} />
            </div>
        )
    }
}
// const App = () => {
//     const [expanded, setExpanded] = useState(true)
//     const header = {
//         headerText: 'Name It!',
//     }

//     const handleInputChange = (inputText) => {
//         setExpanded(false)
//     }
//     return (
//         <div>
//             <Header headTitle={header.headerText} expanded={expanded} />
//             <SearchBox onInputChange={handleInputChange} />
//         </div>
//     )
// }

export default App
