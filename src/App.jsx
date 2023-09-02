import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignupForm from './components/auth/SignupForm'; // Import your SignupForm component
import LoginForm from './components/auth/LoginForm'; // Import your LoginForm component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupForm />} /> {/* Add SignupForm component */}
        <Route path="/login" element={<LoginForm />} /> {/* Add LoginForm component */}
      </Routes>
    </Router>
  );
};

export default App;
