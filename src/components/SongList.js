import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
    render() {
        // because mapStateToProps and connect, inside render:
        // this.props === { songs: state.songs }
        console.log(this.props);
        return <div>SongList</div>
    }
}

const mapStateToProps = state => {
    return { songs: state.songs };
}

export default connect(mapStateToProps)(SongList);
