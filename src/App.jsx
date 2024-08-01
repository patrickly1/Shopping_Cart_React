import { Link } from 'react-router-dom';

function App() {

  return (
    <>
      <h1>Hello</h1>
      <Link to="Home/DefaultPage">Default Home Page</Link>
      <Link to="Home/Page1">Page 1 Home Page</Link>
      <Link to="Home/Page2">Page 2 Home Page</Link>
    </>
  )
}

export default App
