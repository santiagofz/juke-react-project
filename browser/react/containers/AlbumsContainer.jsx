import React from 'react';
import {connect} from 'react-redux'

import { fetchAlbums } from '../action-creators/albums';
import Albums from '../components/Albums';


const mapStateToProps =(state)=>({
  albums:state.albums.list,
})
const mapDispatchToProps =(dispatch)=>({
  fetchAlbums:()=>dispatch(fetchAlbums())
})
export default connect (mapStateToProps, mapDispatchToProps)(Albums)
