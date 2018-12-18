import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TVShow from './TVShow'
import SiteNav from './SiteNav'


class PreviewPage extends Component {

    static propTypes = {
        show: PropTypes.object.isRequired
    }

    state = {
        show: '',
        rating: '',
        url: '',
        ratingSelected: '',
        urlSelected: '',
        showSelected: ''
    }

    tvShowSelected = () => {
        this.setState({
            showSelected: this.props.show,
            ratingSelected: this.props.rating,
            urlSelected: this.props.url
        })
    }

    renderShows = () => {
        return (this.props.show ? <TVShow name={this.props.show} selectHandler={this.tvShowSelected}></TVShow> : null)
    }

    render = () => {
        return (
            <div>
                <header class='menu'>
                    <h1>
                        <SiteNav />
                    </h1>
                </header>
                <main class='wrapper'>
                    <div class='sidebar'>
                        <h2>Shows</h2>
                        <ul>
                            <p>
                                {this.renderShows()}
                                {/* <li><TVShow name='King of the Hill' selectHandler={this.tvShowSelected}></TVShow></li>
                                <li><TVShow name='Seinfeld' selectHandler={this.tvShowSelected}></TVShow></li>
                                <li><TVShow name='The Office' selectHandler={this.tvShowSelected}></TVShow></li>
                                <li><TVShow name='Fresh Prince of Bel-Air' selectHandler={this.tvShowSelected}></TVShow></li> */}
                            </p>
                        </ul>
                    </div>
                    <div class='preview'>
                        <h2>
                            <span>Show Name: {this.state.showSelected}</span>
                            <span>Rating: {this.state.ratingSelected}</span>
                        </h2>
                        <img src={this.state.urlSelected} alt='Show Preview' />
                    </div>
                </main>
            </div>
        )
    }
}

export default PreviewPage