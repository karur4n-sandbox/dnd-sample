import React from "react";
import ReactDOM from "react-dom";
import {EventEmitter} from "events";
import Dropzone from 'react-dropzone';

class AppContainer extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      filterQuery: ""
    };
    this.emitter = new EventEmitter();
    this.emitter.on("change-filter-query", (filterQuery) => {
      this.setState({filterQuery})
    });
  }

  render() {
    return <App dispatch={this.emitter.emit.bind(this.emitter)} />
  }
}

class FileDropzone extends React.Component {
  onDrop (files) {
    console.log('Received files: ', files);
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
  onChangeFilterQuery(ev) {
    this.props.dispatch("change-filter-query", ev.target.value)
  }

  render() {
    console.log("render start");
    return (
      <div>
        <input onChange={this.onChangeFilterQuery.bind(this)}/>
        <FileDropzone />
        <h2>aAAAAAAAAAAAAAAAAAAAAAAA</h2>
      </div>
    );
  }
}


ReactDOM.render(
  <AppContainer/>,
  document.querySelector("#app-root")
);
