import Nav from './Navbar';
import Home from './Home';
import Home2 from './Home2'
import Home3 from './Home3_delete';
import About from './components/About';
import Contact from './components/contact';
import BlogDetails from './BlogDetails';
import Create from './Create';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import NotFound from './NotFound';
// App.js is your App component, whereas index.js is the "entry point" for your application.
// The index.js contains the logic for rendering your App component and provides it with any necessary props (either directly, or via contexts).
//App.js contain our app while in index.js it renders
function App() {
  const a = "Dynamic Value inserted";
  const b = 100;
  const arr = [1, 4, 2, 67];
  const link = "https://www.google.com/"
  return (
    <BrowserRouter>
      <div className="App">
        <Nav></Nav>
        <div className="content">
          <Routes>
            {/* <Route path='/' element={<Home></Home>}></Route> */}
            <Route exact path='/' element={<Home2/>}></Route>
            <Route exact path='/about' element={<About/>}></Route>
            <Route exact path='/contact' element={<Contact/>}></Route>
            <Route exatc path='/blogs/:id' element={<BlogDetails/>}></Route>
            <Route exact path='/create' element={<Create/>}></Route>
            <Route path='*' element={<NotFound/>}></Route>                       {/*  '*' is used for catching all the remaining routes/urls if not listed above  and it needs to be at the bottom*/}
          </Routes>
          {/* <Home></Home> */}
          {/* <Home2></Home2> */}
          {/* <About></About> */}
          {/* <Home3></Home3> */}
          {/* <h1> Welcome to react </h1>
          <p>{a}</p>
          <p>The contenet is liked by {b} people</p>
          <p>{Math.random() * 50}</p>
          <p>{arr}</p> */}
         {/* <a href={link}>Google Site</a> */} {/* using dynamic vaue stored in link */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
