import React, { Component } from 'react'
import TVShow from './TVShow'
import SiteNav from './SiteNav'

class ManagePage extends Component {

    state={
        nameInProgress : '',
        ratingInProgress : '',
        urlInProgress : '',
        nameSaved: '',
        ratingSaved: '',
        urlSaved: ''
        }
    

    tvShowSelected = () => {
        this.setState({
                nameInProgress: this.state.nameSaved,
                ratingInProgress: this.state.ratingSaved,
                urlInProgress: this.state.urlSaved
            })
    }

    tvShowDeleted = () => {
        this.setState ({
            nameInProgress : '',
            ratingInProgress : '',
            urlInProgress : '',
            nameSaved: '',
            ratingSaved: '',
            urlSaved: ''            
        })
    }

    changeName = (e) => {
        this.setState({nameInProgress: e.target.value})
    }

    changeRating = (e) => {
        this.setState({ratingInProgress: e.target.value})
    }

    changeURL = (e) => {
        this.setState({urlInProgress: e.target.value})
    }

    saveTVShow = (e) => {
        e.preventDefault()
        this.setState({
            nameSaved : this.state.nameInProgress,
            ratingSaved : this.state.ratingInProgress,
            urlSaved : this.state.urlInProgress
        })
    

        this.setState ({
            nameInProgress: '',
            ratingInProgress: '',
            urlInProgress: ''
        })
        console.log(this.state)
    }

    renderShows = () => {
        return (
        this.state.nameSaved ? <TVShow name={this.state.nameSaved} allowDelete={true} selectHandler={this.tvShowSelected} deleteHandler={this.tvShowDeleted}></TVShow> : null
        )
    }

    render = () => {
        return (
            <div>
                <header className='menu'>
                    <h1>
                        <SiteNav/>
                    </h1>
                </header>
                <main className='wrapper'>
                    <div className='sidebar'>
                        <h2>Shows</h2>
                        <ul>
                                <li>{this.renderShows()}</li>
                                {/* <li><TVShow name='King of the Hill' allowDelete={true} selectHandler={this.tvShowSelected} deleteHandler={this.tvShowDeleted}></TVShow></li>
                                <li><TVShow name='Seinfeld' allowDelete={true} selectHandler={this.tvShowSelected} deleteHandler={this.tvShowDeleted}>></TVShow></li>
                                <li><TVShow name='The Office' allowDelete={true} selectHandler={this.tvShowSelected} deleteHandler={this.tvShowDeleted}>></TVShow></li>
                                <li><TVShow name='Fresh Prince of Bel-Air' allowDelete={true} selectHandler={this.tvShowSelected} deleteHandler={this.tvShowDeleted}>></TVShow></li>   */}
                        </ul>
                    </div>
                    <div className='form'>
                        <form>
                            <h2>Add a Show</h2>
                            <div>
                                <label>Name:</label>
                                <input type='search' name='Name' onChange={this.changeName} value={this.state.nameInProgress}/>
                            </div>
                            <div>
                                <label>Rating:</label>
                                <input type='search' name='Rating' onChange={this.changeRating} value={this.state.ratingInProgress}/>
                            </div>
                            <div>
                                <label>Image URL:</label>
                                <input type='search' name='Image URL' onChange={this.changeURL} value={this.state.urlInProgress}/>
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