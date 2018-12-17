import React, { Component } from 'react'

class ManagePage extends Component {
    render = () => {
        return (
            <div>
                <header class="menu">
                    <h1>
                        <span>Manage</span>
                        <a href="preview.html">Preview</a>
                    </h1>
                </header>
                <main class="manage_wrapper">
                    <section class="sidebar">
                        <h2>Shows</h2>
                        <ul class="showlist">
                            <li>
                                <button>King of the Hill</button>
                       <button class="deletebutton">-</button>
                            </li>
                            <li>
                                <button>It's Always Sunny in Philadelphia</button>
                                <button class="deletebutton">-</button>
                            </li>
                        </ul>
                    </section>
                    <section class="content">
                        <h2>Add a Show</h2>
                        <form class="textfields">
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
                            <button type="submit">Create Entry</button>
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