import './App.css';
import HomePage from './pages/HomePage';
import About from './pages/About';
import ArticleList from './pages/ArticleList';
import ArticlePage from './pages/ArticlePage';
import NavBar from './NavBar';


import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <div id ="page-body">
          <Route path ="/"  component= {HomePage} exact />
          <Route path ="/about"  component= {About} />
          <Route path ="/articlepage/:name"  component= {ArticlePage} />
          <Route path ="/articlelist"  component= {ArticleList} />
        </div>

      </div>
    </Router>
  );
}

export default App;
