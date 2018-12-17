import React, { Component } from 'react'
import TVShow from './TVShow'
import SiteNav from './SiteNav'

class ManagePage extends Component {

    state={
        show :{
         nameInProgress : '',
         ratingInProgress : '',
         urlInProgress : ''
        },
        showSaved :{
            nameSaved: '',
            ratingSaved: '',
            urlSaved: ''
        }
    }

    tvShowSelected = () => {
        this.setState({
            show: {
                nameInProgress: this.state.showSaved.nameSaved,
                ratingInProgress: this.state.showSaved.ratingSaved,
                urlInProgress: this.state.showSaved.urlSaved
            }
        })
    }

    tvShowDeleted = () => {
        console.log('tvShowDelete')
    }

    changeName = (e) => {
        this.setState({show:{nameInProgress: e.target.value}})
    }

    changeRating = (e) => {
        this.setState({show:{ratingInProgress: e.target.value}})
    }

    changeURL = (e) => {
        this.setState({show:{urlInProgress: e.target.value}})
    }

    saveTVShow = (e) => {
        e.preventDefault()
        this.setState({
            showSaved :{
            nameSaved : this.state.show.nameInProgress,
            ratingSaved : this.state.show.ratingInProgress,
            urlSaved : this.state.show.urlInProgress
            }
        })
        this.setState ({
            show : {
                nameInProgress: '',
                ratingInProgress: '',
                urlInProgress: ''
            }
        })
        console.log(this.state)
    }

    renderShows = () => {
        return (
        <TVShow name={this.state.showSaved.nameSaved} allowDelete={true} selectHandler={this.tvShowSelected} deleteHandler={this.tvShowDeleted}></TVShow>
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
                            <p>
                                <li>{this.renderShows}</li>
                                {/* <li><TVShow name='King of the Hill' allowDelete={true} selectHandler={this.tvShowSelected} deleteHandler={this.tvShowDeleted}></TVShow></li>
                                <li><TVShow name='Seinfeld' allowDelete={true} selectHandler={this.tvShowSelected} deleteHandler={this.tvShowDeleted}>></TVShow></li>
                                <li><TVShow name='The Office' allowDelete={true} selectHandler={this.tvShowSelected} deleteHandler={this.tvShowDeleted}>></TVShow></li>
                                <li><TVShow name='Fresh Prince of Bel-Air' allowDelete={true} selectHandler={this.tvShowSelected} deleteHandler={this.tvShowDeleted}>></TVShow></li>   */}
                            </p>
                        </ul>
                    </div>
                    <div className='form'>
                        <form>
                            <h2>Add a Show</h2>
                            <div>
                                <label>Name:</label>
                                <input type='search' name='Name' onChange={this.changeName} value={this.state.show.nameInProgress}/>
                            </div>
                            <div>
                                <label>Rating:</label>
                                <input type='search' name='Rating' onChange={this.changeRating} value={this.state.show.ratingInProgress}/>
                            </div>
                            <div>
                                <label>Image URL:</label>
                                <input type='search' name='Image URL' onChange={this.changeURL} value={this.state.show.urlInProgress}/>
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