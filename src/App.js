import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
const App = () => {
  const [progress,setProgress]=useState(0);
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar color="#f11946" progress={progress} onLoadFinished={() => setProgress(0)} />
          <Routes>
            <Route path="/" element={<News setProgress={setProgress}  pageSize={5} country="us" category="general" />} />
            <Route path="/general" element={<News setProgress={setProgress}  pageSize={5} country="us" category="general" />} />
            <Route path="/health" element={<News setProgress={setProgress}  pageSize={5} country="us" category="health" />} />
            <Route path="/entertainment" element={<News setProgress={setProgress}  pageSize={5} country="us" category="entertainment" />} />
            <Route path="/science" element={<News setProgress={setProgress}  pageSize={5} country="us" category="science" />} />
            <Route path="/technology" element={<News setProgress={setProgress}  pageSize={5} country="us" category="technology" />} />
            <Route path="/sports" element={<News setProgress={setProgress}  pageSize={5} country="us" category="sports" />} />
            <Route path="/business" element={<News setProgress={setProgress}  pageSize={5} country="us" category="business" />} />
          </Routes>
        </Router>
      </div>
    );
}
export default App;