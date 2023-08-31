import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ForgotPassword from './components/ForgotPassword';
import EventList from './components/EventList';
import EventDetails from './components/EventDetails';
import SeatSelection from './components/SeatSelection';
import TicketCart from './components/TicketCart';
import CheckoutForm from './components/CheckoutForm';
import OrderHistory from './components/OrderHistory';


const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomePage />} /> 
        <Route path="/:id" element={<EventList />} />
        <Route path="/event/:eventId" element={<EventDetails />} />
        <Route path="/event/:eventId/seats" element={<SeatSelection />} />
        <Route path="/cart" element={<TicketCart />} />
        <Route path="/checkout" element={<CheckoutForm />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/order-history" element={<OrderHistory />} />
      </Routes>
    </Router>
  );
};

export default App;
