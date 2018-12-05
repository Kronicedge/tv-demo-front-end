import React, { Component } from 'react'
import './Style.css'
import TVShow from './TVShow.js'

class ManagePage extends Component {
    
    tvShowSelected = () => {
        console.log("tvShowSelected")
    }
    tvShowDeleted = () => {
        console.log("tvShowDeleted")
    }

    saveTVShow = () => {
        console.log("saveTVShow")
    }

    render = () => {
        return (
            <div>
                <header className="menu">
                    <h1>
                        <span>Manage</span>
                        <a href="/preview">Preview</a>
                    </h1>
                </header>
                <main className="manage_wrapper">
                    <section className="sidebar">
                        <h2>Shows</h2>
                        <ul className="showlist">
                            <li>
                                <TVShow name="King of the Hill" allowDelete={true} selectHandler={this.tvShowSelected} deleteHandler={this.tvShowDeleted} />                                
                            </li>
                            <li>
                                <TVShow name="It's Always Sunny in Philadelphia" allowDelete={true} selectHandler={this.tvShowSelected} deleteHandler={this.tvShowDeleted} />
                            </li>
                        </ul>
                    </section>
                    <section className="content">
                        <h2>Add a Show</h2>
                        <form className="textfields">
                            <div>
                                <label>Name:</label>
                                <input type="search" name="name" />
                            </div>
                            <div>
                                <label>Rating:</label>
                                <input type="number" name="rating" />
                            </div>
                            <div>
                                <label>Image URL:</label>
                                <input type="url" name="imageURL" />
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