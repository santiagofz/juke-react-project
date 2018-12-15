import React from 'react';
import {connect} from 'react-redux'

import { start } from '../action-creators/player';
import Artist from '../components/Artist';


const mapStateToProps=(state, ownProps)=>({
      url: ownProps.match.url,
      path :ownProps.match.path,
      artist: state.artists.selected,
      currentSong: state.player.currentSong
})
const MapDispatchToProps =(dispatch)=>({
  start:(song, list)=>dispatch(start(song, list))
})


export default connect(mapStateToProps, MapDispatchToProps)(Artist)