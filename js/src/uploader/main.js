import React from "react";
import ReactDOM from "react-dom";
import Dropzone from 'react-dropzone';
import 'whatwg-fetch';

class AppContainer extends React.Component {
  render() {
    return <App />
  }
}

class FileDropzone extends React.Component {
  onDrop (files) {
    if (files.length == 1) {
      const file = files[0]
      const data = new FormData()
      data.append('csv', file)
      fetch('/post', {
        method: 'POST',
        body: data
      })
    } else {
      console.log('アップロードするファイルは 1 つまでです')
    }
  }

  render () {
    return (
      <div>
        <Dropzone onDrop={this.onDrop}>
          <div>Try dropping some files here, or click to select files to upload.</div>
        </Dropzone>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    console.log("render start");
    return (
      <div>
        <FileDropzone />
      </div>
    );
  }
}

ReactDOM.render(
  <AppContainer/>,
  document.querySelector("#app-root")
);
