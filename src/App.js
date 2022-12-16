import './App.css';
import {useState} from 'react'
import NewOrderPage from './pages/NewOrderPage';
import AuthPage from './pages/AuthPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import { getUser } from './utilities/users-service';

function App() {
  // Initialize user to null
  const [user, setUser] = useState(getUser());

  
  return (
    <main className='App'>
      { 
      user ?//if user is true then we go to new order page
      <>
      <NavBar user= {user} setUser= {setUser}/>
        <Routes>
          <Route path="/orders/new" element={<NewOrderPage></NewOrderPage>}/>
          <Route path ="/orders" element={<OrderHistoryPage></OrderHistoryPage>}/>
        </Routes>
      </>
      : //or if false
        <AuthPage setUser={setUser} />// then goes to authPage
      }
    </main>
  );
}

export default App;
