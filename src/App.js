import { Component } from 'react';
import { Reader } from './components/Reader/Reader';
import { VideoList } from './components/VideoList /VideoList';
import { Player } from './components/Player/Player';
import publications from './publications.json';
import videos from './videos.json';

class App extends Component {
  state = {
    selectedVideo: null,
  };

  selectVideo = (link) => {
    this.setState({ selectedVideo: link });
  };

  render() {
    return (
      <>
        <Reader items={publications} />

        <div style={{ padding: 24 }}>
          <h1>Selected video: {this.state.selectedVideo}</h1>
          <VideoList videos={videos} onSelect={this.selectVideo} />
          <Player url={this.state.selectedVideo} />
        </div>
      </>
    );
  }
}

export default App;
