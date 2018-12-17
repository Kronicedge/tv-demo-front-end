import React, { Component } from 'react'
import TVShow from './TVShow'


class PreviewPage extends Component {
    render = () => {
        return (
            <div>
                <header class='menu'>
                <h1>
                    <a href='./manage.html'>Manage</a>
                    <span>Preview</span>
                </h1>
                </header>
                <main class='wrapper'>
                    <div class='sidebar'>
                        <h2>Shows</h2>
                        <ul>
                            <p>
                                <li><TVShow name='King of the Hill' allowDelete={false} selectHandler={this.tvShowSelected}></TVShow></li>
                                <li><TVShow name='Seinfeld' allowDelete={false} selectHandler={this.tvShowSelected}></TVShow></li>    
                                <li><TVShow name='The Office' allowDelete={false} selectHandler={this.tvShowSelected}></TVShow></li>    
                                <li><TVShow name='Fresh Prince of Bel-Air' allowDelete={false} selectHandler={this.tvShowSelected}></TVShow></li>        
                            </p>
                        </ul>
                    </div>
                    <div class='preview'>
                        <div>
                            <h2>
                                <span>Show Name</span>
                                <span>Rating</span>
                            </h2>
                        </div>
                        <img src='./Pictures/Fresh_Prince_HIGH.jpeg' alt='Show Thumbnail'/>
                    </div>
                </main>
            </div>
        )
    }
}

export default PreviewPage