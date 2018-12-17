import React, { Component } from 'react'
import TVShow from './TVShow'
import SiteNav from './SiteNav'

class ManagePage extends Component {

    tvShowSelected = () => {
        console.log('tvShowSelected')
    }

    tvShowDeleted = () => {
        console.log('tvShowDelete')
    }

    saveTVShow = (e) => {
        e.preventDefault()
        console.log('saveTVShow')
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
                                <li><TVShow name='King of the Hill' allowDelete={true} selectHandler={this.tvShowSelected} deleteHandler={this.tvShowDeleted}></TVShow></li>
                                <li><TVShow name='Seinfeld' allowDelete={true} selectHandler={this.tvShowSelected} deleteHandler={this.tvShowDeleted}>></TVShow></li>
                                <li><TVShow name='The Office' allowDelete={true} selectHandler={this.tvShowSelected} deleteHandler={this.tvShowDeleted}>></TVShow></li>
                                <li><TVShow name='Fresh Prince of Bel-Air' allowDelete={true} selectHandler={this.tvShowSelected} deleteHandler={this.tvShowDeleted}>></TVShow></li>  
                            </p>
                        </ul>
                    </div>
                    <div className='form'>
                        <form>
                            <h2>Add a Show</h2>
                            <div>
                                <label>Name:</label>
                                <input type='search' name='Name' />
                            </div>
                            <div>
                                <label>Rating:</label>
                                <input type='search' name='Rating' />
                            </div>
                            <div>
                                <label>Image URL:</label>
                                <input type='search' name='Image URL' />
                            </div>
                            <button type='submit' onClick={this.saveTVShow} >Create/Update</button>
                        </form>

                    </div>

                </main>
            </div>
        )
    }
}

export default ManagePage