import ApplyForm from './components/applyForm';
import { Home } from './components/home';
import { Route, Routes, BrowserRouter } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/' 
          element={<Home />} 
        />
        <Route 
          path='/applyForm'
          element={<ApplyForm />}
        />
      </Routes>
    </BrowserRouter>
  )
}