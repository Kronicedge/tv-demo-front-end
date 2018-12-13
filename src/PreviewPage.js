import React, { Component } from 'react'
import './Style.css'
import TVShow from './TVShow.js'
import SiteNav from './SiteNav'


class PreviewPage extends Component {
    
    tvShowSelected = () => {
        console.log("tvShowSelected")
    }
    
    render = () => {
        return (
            <div>
                <header>
                    <SiteNav/>
                </header>
                <section className="preview_wrapper">

                    <section className="sidebar">
                        <h2>Shows</h2>
                        <ul className="showlist">
                            <li>
                                <TVShow name="King of the Hill" allowDelete={false} selectHandler={this.tvShowSelected}/>
                            </li>
                            <li>
                                <TVShow name="It's Always Sunny in Philadelphia" allowDelete={false} selectHandler={this.tvShowSelected}/>
                            </li>
                        </ul>
                    </section>

                    <section className="content_left">
                        <h2>Show Name</h2>
                        <img src="https://vignette.wikia.nocookie.net/soundeffects/images/4/42/KOTH_Logo.jpg/revision/latest?cb=20140530074540" alt="Self Portrait" />
                    </section>
                    <h2 className="content_right">Rating</h2>

                </section>
                <footer>
                    <p>Notflix by Myles</p>
                </footer>
            </div>
        )
    }
}

export default PreviewPage