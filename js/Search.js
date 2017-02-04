import React from 'react'
import ShowCard from './ShowCard'
const { arrayOf, shape, string } = React.PropTypes

const Search = React.createClass({
  propTypes: {
    shows: arrayOf(shape({
      title: string,
      description: string
    }))
  },
  getInitialState () {
    return {
      searchTerm: ''
    }
  },
  handleSearchTermChange (event) {
    this.setState({searchTerm: event.target.value})
    // This is Bad Practice way to update, see 46 minutes in on Session 4 Video
    // "You will and should never have to use forceUpdate"
    // this.state.searchTerm = event.target.value
    // this.forceUpdate()
  },
  render () {
    return (
      <div className='search'>
        <header>
          <h1>RouteLog</h1>
          <input onChange={this.handleSearchTermChange} value={this.state.searchTerm} type='text' placeholder='Search' />
        </header>
        <div>
          { this.props.shows.filter((show) => `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
            .map((show) => {
              return (
                <ShowCard key={show.imdbID} {...show} />
              )
            })}
        </div>
      </div>
    )
  }
})

export default Search
