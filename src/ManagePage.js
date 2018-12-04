import React, { Component } from 'react'
import './Style.css'

class ManagePage extends Component {
    render = () => {
        return (
            <div>
                <script>
                    clickedShow1 = () => {
                        console.log("You clicked King of the Hill")
                    }
                    clickedDeleteShow1 = () => {
                        console.log("You clicked to delete King of the Hill")
                    }
                    clickedShow2 = () => {
                        console.log("You clicked It's Always Sunny in Philadelphia")
                    }
                    clickedDeleteShow2 = () => {
                        console.log("You clicked to delete It's Always Sunny in Philadelphia")
                    }
                    clickedSubmit = () => {
                        console.log("You clicked submit")
                    }
                </script>

                <header className="menu">
                    <h1>
                        <span>Manage</span>
                        <a href="/preview">Preview</a>
                    </h1>
                </header>
                <main className="manage_wrapper">
                    <section class="sidebar">
                        <h2>Shows</h2>
                        <ul className="showlist">
                            <li>
                                <button onclick={this.clickedShow1}>King of the Hill</button>
                                <button className="deletebutton" onclick={this.clickedDeleteShow1}>-</button>
                            </li>
                            <li>
                                <button onclick={this.clickedShow2}>It's Always Sunny in Philadelphia</button>
                                <button className="deletebutton" onclick={this.clickedDeleteShow2}>-</button>
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
                            <button type="submit" onclick={this.clickedSubmit}>Create Entry</button>
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