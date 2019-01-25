import React, { Component } from 'react'
import TVShow from './TVShow'
import SiteNav from './SiteNav'

class ManagePage extends Component {

    state = {
        nameInProgress: '',
        ratingInProgress: '',
        urlInProgress: '',
    }

    consoleLog = () => {
        console.log(this.state)
    }

    componentDidMount = () => {
        fetch('http://localhost:4000/shows/', {
            method: 'GET',
            headers: {
                'content-type': 'applicaton/json'
            }
        })
            .then(res => res.json())
            .then(tvShows => this.setState({ tvShows }, () => {
                console.log(this.state.tvShows)
            }))
    }
    tvShowSelected = () => {
        this.setState({
            nameInProgress: this.state.tvShow.name,
            ratingInProgress: this.props.tvShow.rating,
            urlInProgress: this.props.tvShow.url
        })
    }

    tvShowDeleted = () => {
        this.setState({
            nameInProgress: '',
            ratingInProgress: '',
            urlInProgress: '',
            tvShow: []
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
            body: JSON.stringify(tvShow)
        }).then(res => res.json())
            .then(tvShow => console.log(tvShow))
            .catch(err => console.log(err))

        this.componentDidMount()


        this.setState({
            nameInProgress: '',
            ratingInProgress: '',
            urlInProgress: ''
        })
    }

    renderShows = () => {
        if (this.state.tvShows) {
            return this.state.tvShows.map((tvShow) => {
                return (<li><TVShow name={tvShow.name} allowDelete={true} selectHandler={this.tvShowSelected} deleteHandler={this.tvShowDeleted}></TVShow></li>)
            })
        }
        else
            return null
    }

    render = () => {
        return (
            <div onClick={this.consoleLog}>
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