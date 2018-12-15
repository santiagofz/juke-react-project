import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import RouteHook from 'react-route-hook';
import SidebarContainer from '../containers/SidebarContainer';
import PlayerContainer from '../containers/PlayerContainer';
import AlbumsContainer from '../containers/AlbumsContainer';
import AlbumContainer from '../containers/AlbumContainer';
import FilterableArtistsContainer from '../containers/FilterableArtistsContainer';
import ArtistContainer from '../containers/ArtistContainer';
import NewPlaylistContainer from '../containers/NewPlaylistContainer';
import LyricsContainer from '../containers/LyricsContainer';
import PlaylistContainer from '../containers/PlaylistContainer';
import StationsContainer from '../containers/StationsContainer';
import StationContainer from '../containers/StationContainer';
import store from '../store';
import { fetchSongs } from '../action-creators/songs';
import { fetchPlaylist } from '../action-creators/playlists';
import { fetchArtists, fetchArtist } from '../action-creators/artists';
import { fetchAlbums, fetchAlbum } from '../action-creators/albums';

const onStationsEnter = () => store.dispatch(fetchSongs());

const onPlaylistEnter = ({ match }) => {
  store.dispatch(fetchPlaylist(match.params.id));
  store.dispatch(fetchSongs());
}

const onPlaylistChange = ({ match }) => store.dispatch(fetchPlaylist(match.params.id));

const onArtistsEnter = () => store.dispatch(fetchArtists());

const onArtistEnter = ({ match }) => store.dispatch(fetchArtist(match.params.id));

const onAlbumsEnter = () => store.dispatch(fetchAlbums());

const onAlbumEnter = ({ match }) => store.dispatch(fetchAlbum(match.params.id));

export default () => (
  <div id="main" className="container-fluid">
    <SidebarContainer />
    <div className="col-xs-10">
    <Switch>
        <RouteHook exact path="/albums" component={AlbumsContainer} onEnter={onAlbumsEnter} />
        <RouteHook path="/albums/:id" component={AlbumContainer} onEnter={onAlbumEnter} />
        <RouteHook path="/artists" exact component={FilterableArtistsContainer} onEnter={onArtistsEnter} />
        <RouteHook path="/artists/:id" component={ArtistContainer} onEnter={onArtistEnter} />
        <Route path="/playlists/new" component={NewPlaylistContainer} />
        <RouteHook path="/playlists/:id" component={PlaylistContainer} onEnter={onPlaylistEnter} onChange={onPlaylistChange} />
        <Route path="/lyrics" component={LyricsContainer} />
        <RouteHook exact path="/stations" component={StationsContainer} onEnter={onStationsEnter} />
        <RouteHook path="/stations/:genreName" component={StationContainer} onEnter={onStationsEnter} />
        <Redirect exact from="/" to="/albums" />
      </Switch> 
    </div>
    <PlayerContainer />
  </div>
);