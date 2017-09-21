import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

import '../node_modules/bootstrap/dist/css/bootstrap.css';

const API_KEY = 'AIzaSyACC9a0PhmBmZ8bpYLk_tJw8y5PeYHUYm4';




class App extends React.Component {
    constructor(props){
        super(props);
        
        this.state = { 
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('coffee');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
            });
        });       
    }

    render(){
        return ( 
            <div>                
                <SearchBar onSearchTermChange={(term) => this.videoSearch(term)} />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                    onVideoSelect={ (selectedVideo) => this.setState({selectedVideo: selectedVideo})}
                    videos={this.state.videos} />
            </div>
        );
    }
    
}

ReactDOM.render(<App />, document.getElementById('app'));