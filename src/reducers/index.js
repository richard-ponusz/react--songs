import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'In The End', duration: '3:36' },
        { title: 'Bang', duration: '2:42' },
        { title: 'All-star', duration: '3:15' },
        { title: 'I Want it That Way', duration: '1:45' },
    ];
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};


export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});