import React, { Component } from 'react';

class Tile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
        }
    }
    render() {
        return (
            <div className="tile">
                <h3 className="tile-title">{this.state.data.title}</h3>
                <p className="tile-copy">{this.state.data.copy}</p>
                <a href={this.state.data.url} className="tile-link">{this.state.data.link}</a>
            </div>
        );
    }
}

export default Tile;
