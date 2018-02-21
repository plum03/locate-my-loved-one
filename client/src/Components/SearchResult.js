import React, { Component } from 'react'

import '../CSS/SearchResult.css'

class SearchResult extends Component {
    render() {
        let { firstName, lastName, city, state, comment, msg } = this.props
        return (
            msg ?
                <div>{msg}</div>
                :
                <div className="display-result">
                    <h2>{firstName + ' ' + lastName}</h2>
                    <h4>{city + ', ' + state}</h4>
                    <p>{comment ? `Note: ${comment}` : null}</p>
                </div>
        )
    }
}

export default SearchResult
