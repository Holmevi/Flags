import './App.css';
import Home from './pages/Home.jsx';
import Country from './pages/Country.jsx';
import { Box } from '@mui/material';

function App({ spotifyApi }) {
	return (
		<Box className="App">
			<Country />
			<Home />
		</Box>
	);
}

/*

import './App.css'

function App() {
  return (
    <div className='App'>
      <nav className='navbar'>
        <div>The Flag App</div>
        <div>Dark Mode</div>
      </nav>
    </div>
  )
}
*/
export default App


