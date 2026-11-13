import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "general",
      progress: 0,
    };
  }
  setProgress = (progress) =>{
    this.setState({progress:progress})
  }
  setCategory = (category) => {
    this.setState({ category });
  };

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar color="#f11946" progress={this.state.progress} onLoadFinished={() => this.setProgress(0)} />
          <Routes>
            <Route path="/" element={<News setProgress={this.setProgress}  pageSize={5} country="us" category="general" />} />
            <Route path="/general" element={<News setProgress={this.setProgress}  pageSize={5} country="us" category="general" />} />
            <Route path="/health" element={<News setProgress={this.setProgress}  pageSize={5} country="us" category="health" />} />
            <Route path="/entertainment" element={<News setProgress={this.setProgress}  pageSize={5} country="us" category="entertainment" />} />
            <Route path="/science" element={<News setProgress={this.setProgress}  pageSize={5} country="us" category="science" />} />
            <Route path="/technology" element={<News setProgress={this.setProgress}  pageSize={5} country="us" category="technology" />} />
            <Route path="/sports" element={<News setProgress={this.setProgress}  pageSize={5} country="us" category="sports" />} />
            <Route path="/business" element={<News setProgress={this.setProgress}  pageSize={5} country="us" category="business" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
