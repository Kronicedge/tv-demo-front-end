import React, { Component } from 'react'
import './Style.css'
import TVShow from './TVShow.js'
import SiteNav from './SiteNav'

class ManagePage extends Component {

    state = { }

    tvShowSelected = () => {
        console.log("tvShowSelected")
    }

    tvShowDeleted = () => {
        this.setState ({name: '', rating: '', url: ''})
    }


    updateShows = (e) => {
        this.setState({ name: e.target.value })
    }

    updateRating = (e) => {
        this.setState({ rating: e.target.value })
    }

    updateImage = (e) => {
        this.setState({ url: e.target.value })
    }

    saveTVShow = (e) => {
        e.preventDefault()
        this.setState({
            nameSaved : this.state.name,
            ratingSaved : this.state.rating,
            imageSaved : this.state.url 
        })
        this.setState ({
            name: '',
            rating: '',
            url: ''
        })
    }

    renderShows = () => {
        return (this.state.nameSaved ? <TVShow name={this.state.nameSaved} value={this.state.name} allowDelete={true}/> : null)
    }

    render = () => {
        return (
            <div>
                <header>
                    <SiteNav>
                    </SiteNav>
                </header>

                <main className="manage_wrapper">
                    <section className="sidebar">
                        <h2>Shows</h2>
                        <ul className="showlist">
                            <li>
                                {this.renderShows()}
                            </li>
                            {/* <li>
                                <TVShow name="It's Always Sunny in Philadelphia" allowDelete={true} selectHandler={this.tvShowSelected} deleteHandler={this.tvShowDeleted} />
                            </li> */}
                        </ul>
                    </section>
                    <section className="content">
                        <h2>Add a Show</h2>
                        <form className="textfields">
                            <div>
                                <label>Name:</label>
                                <input value={this.state.name} onChange={this.updateShows} type="search" name="name" />
                            </div>
                            <div>
                                <label>Rating:</label>
                                <input value={this.state.rating} onChange={this.updateRating} type="number" name="rating" />
                            </div>
                            <div>
                                <label>Image URL:</label>
                                <input value={this.state.url} onChange={this.updateImage} type="url" name="imageURL" />
                            </div>
                            <button onClick={this.saveTVShow}>Create Entry</button>
                        </form>
                    </section>
                </main>
                <footer>
                    <p>Notflix by Myles</p>
                </footer>
            </div>
        )
    }
}

export default ManagePage