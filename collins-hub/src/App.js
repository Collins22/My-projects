import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
  
  
function App() {
  //{ const title = 'First App' }
  const creator = 'Legacy Collins'
  //{ const links = "https://Google.com" }
  return (

    /*
    => In a nutshell a Component is a Js function that must always return something inside the function which is generally a Jsx template after which it is then exported to our main folder. (JSX folders serve the same thing as html tho the are not that similar.)
    => In a react file we always export our component function so that it can be used in other files for, though the use the use of the import tag that has the path to where the exported file is located. which is then rendered through the ReactDOM library.(this is carried out in our main js folder).
    => in Jsx we can also return dynamic variables throught the use of curly brackets. also remeber that when creating the variable it should be before the return tag. the curly braces are placed in the area where we want to change/place the new variable. after placing the curly braces we then place the title/name of the variable in the curly braces.
    => React doesnt need to knw if we wrote a string or number as it will generally convert our value to a string. we can place lots of diffrent values as far as they are created first before the return and placed into the return to be displayed. the only thing it cant output are boleans or objects
    => We can use Jsx values as attribute values in element tags 
    */

    /*
    => The App.js is out first component(root component) for our application. when we decide to create more components we nest them inside our root component, also if we create more components they can be listed under the other compenents nested already. remeber to create a new component we must create it in our src file.
    */ 
    <Router>
      <div className="App">
      <Navbar />
        <div className="Content">
          <Routes>
            <Route path='/' element={<Home />} /> 
          </Routes>
        <p>Created by {creator} its his first project</p>
      </div>
    </div>
    </Router>
  );
}

export default App;
