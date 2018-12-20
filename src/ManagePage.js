import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TVShow from './TVShow'
import SiteNav from './SiteNav'

class ManagePage extends Component {

    static propTypes = {
        show: PropTypes.object.isRequired,
        tvShowDeleted: PropTypes.func.isRequired,
        saveTVShow: PropTypes.func.isRequired,
        tvShows: PropTypes.array.isRequired
    }

    state = {
        nameInProgress: '',
        ratingInProgress: '',
        urlInProgress: '',
    }

    tvShows = () => {
        console.log(this.props.tvShows)
    }

    tvShowSelected = () => {
        this.setState({
            nameInProgress: this.props.show,
            ratingInProgress: this.props.rating,
            urlInProgress: this.props.url
        })
    }

    tvShowDeleted = () => {
        this.props.tvShowDeleted()
        this.setState({
            nameInProgress: '',
            ratingInProgress: '',
            urlInProgress: ''
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
        this.props.saveShow({
            show: this.state.nameInProgress,
            rating: this.state.ratingInProgress,
            url: this.state.urlInProgress
        })
        this.setState({
            nameInProgress: '',
            ratingInProgress: '',
            urlInProgress: ''
        })
    }

    renderShows = () => {
        return this.props.tvShows.map((tvShow) => {
            return (
                tvShow.show
                    ? <li><TVShow name={tvShow.show} allowDelete={true} selectHandler={this.tvShowSelected} deleteHandler={this.tvShowDeleted}></TVShow></li>
                    : null
            )
        })
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