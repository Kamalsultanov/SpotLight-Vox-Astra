import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './Sections/Hero';
import StoriesPage from './Components/Stories';
import Navbar from './Sections/Navbar'; // Import Navbar to allow navigation

function App() {
  return (
    <Router>
      <Navbar /> {/* Include Navbar for navigation */}
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/stories" element={<StoriesPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
