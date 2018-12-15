import React from 'react';
import {connect} from 'react-redux'

import Sidebar from '../components/Sidebar';

const mapStateToProps =({playlists})=>({
  playlists:playlists.list

});
const mapDispatchToProps=(dispatch)=>({})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)