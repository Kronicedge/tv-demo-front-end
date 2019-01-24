import React, { Component } from 'react'
import TVShow from './TVShow'
import SiteNav from './SiteNav'

class ManagePage extends Component {

    state = {
        nameInProgress: '',
        ratingInProgress: '',
        urlInProgress: '',
    }

    componentDidMount = () => {
        fetch('http://localhost:4000/shows/')
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                console.log(JSON.stringify(myJson));
            })
    }
    tvShowSelected = () => {
        this.setState({
            nameInProgress: this.state.tvShow.name,
            ratingInProgress: this.props.tvShow.rating,
            urlInProgress: this.props.tvShow.url
        })
    }

    tvShowDeleted = () => {
        this.props.tvShowDeleted()
        this.setState({
            nameInProgress: '',
            ratingInProgress: '',
            urlInProgress: '',
            tvShows: []
        })
    }

    changeName = (e) => {
        this.setState({ nameInProgress: e.target.value })
    }

    changeRating = (e) => {
        this.setState({ ratingInProgress: e.target.value })
    }

    changeURL = (e) => {
        this.setState({ urlInProgress: e.target.value })
    }

    saveTVShow = (e) => {
        e.preventDefault()
        const tvShow = {
            show: this.state.nameInProgress,
            rating: this.state.ratingInProgress,
            url: this.state.urlInProgress
        }

        fetch('http://localhost:4000/shows/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify(tvShow)
        }).then(res => res.json())
            .then(savedTVShow => console.log(savedTVShow))
            .catch(err => console.log(err))

        this.componentDidMount()
        

        this.setState({
            nameInProgress: '',
            ratingInProgress: '',
            urlInProgress: ''
        })
    }

    renderShows = (savedTVShow) => {
        if (savedTVShow) {
            return this.state.tvShows.map((savedTVShow) => {
            return (
                savedTVShow.show
                    ? <li><TVShow name={savedTVShow.show} allowDelete={true} selectHandler={this.tvShowSelected} deleteHandler={this.tvShowDeleted}></TVShow></li>
                    : null
            )
        })
    } 
    else 
    return null
    }

    render = () => {
        return (
            <div>
                <header className='menu'>
                    <h1>
                        <SiteNav />
                    </h1>
                </header>
                <main className='wrapper'>
                    <div className='sidebar'>
                        <h2>Shows</h2>
                        <ul>
                            {this.renderShows()}
                        </ul>
                    </div>
                    <div className='form'>
                        <form>
                            <h2>Add a Show</h2>
                            <div>
                                <label onClick={this.tvShows}>Name: </label >
                                <input type='search' name='Name' onChange={this.changeName} value={this.state.nameInProgress} />
                            </div>
                            <div>
                                <label>Rating:</label>
                                <input type='search' name='Rating' onChange={this.changeRating} value={this.state.ratingInProgress} />
                            </div>
                            <div>
                                <label>Image URL:</label>
                                <input type='search' name='Image URL' onChange={this.changeURL} value={this.state.urlInProgress} />
                            </div>
                            <button type='submit' onClick={this.saveTVShow}>Create/Update</button>
                        </form>

                    </div>

                </main>
            </div>
        )
    }
}

export default ManagePage