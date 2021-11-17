import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./Navbar";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <div className="business-card">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)