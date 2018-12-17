import React, { Component } from 'react'

class PreviewPage extends Component {
    render = () => {
        return (
            <div>
                <header class="menu">
                    <h1>
                        <a href="manage.html">Manage</a>
                        <span>Preview</span>
                    </h1>
                </header>
                <section class="preview_wrapper">

                    <section class="sidebar">
                        <h2>Shows</h2>
                        <ul class="showlist">
                            <li>
                                <button>King of the Hill</button>
                            </li>
                            <li>
                                <button>It's Always Sunny in Philadelphia</button>
                            </li>
                        </ul>
                    </section>

                    <section class="content_left">
                        <h2>Show Name</h2>
                        <img src="https://vignette.wikia.nocookie.net/soundeffects/images/4/42/KOTH_Logo.jpg/revision/latest?cb=20140530074540" />
                    </section>
                    <h2 class="content_right">Rating</h2>

                </section>
                <footer>
                    <p>Notflix by Myles</p>
                </footer>
            </div>
        )
    }
}

export default PreviewPage