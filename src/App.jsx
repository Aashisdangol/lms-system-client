import { Route, Routes } from 'react-router'
import './App.css'
import AuthPage from './pages/Auth/AuthPage'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import VerifyUserPage from './pages/Auth/VerifyUserPage';
import AdminPrivateRoute from './components/AdminPrivateRoute';
import AdminLayout from './layouts/Adminlayout';
import AdminBooksPage from './pages/Admin/AdminBooksPage';
import StudentLayout from './components/StudentLayout';
import StudentsBooksPage from './pages/Student/StudentBooksPage';
import BookDetailsPage from './pages/Student/BookDetailsPage';
import StudentBorrowPage from './pages/Student/StudentBorrowHistory';
import StudentPrivateRoute from './components/StudentPrivateRoute';

function App() {
  return (
    <>
      <Routes>
        {/* Auth Routes - Public */}
        <Route path='/' element={<AuthPage />} />
        <Route path='/verify-user' element={<VerifyUserPage />} />

        {/* Private Routes - Admin Routes */}
        <Route path='/admin' element={<AdminPrivateRoute><AdminLayout /></AdminPrivateRoute>}>
          <Route path='dashboard' element={<h1>Dashboard Page</h1>} />
          <Route path='books' element={<AdminBooksPage />} />
          <Route path='burrows' element={<h1>Burrows Page</h1>} />
          <Route path='reviews' element={<h1>Reviews Page</h1>} />
          <Route path='students' element={<h1>Students Page</h1>} />
        </Route>
        {/* Public Route - Student Route */}
        <Route path='/students' element={<StudentLayout />}>
          <Route path='books' element={<StudentsBooksPage />} />
          <Route path='book/:_id' element={<BookDetailsPage />} />

          <Route path='borrowHistory' element={<StudentPrivateRoute><StudentBorrowPage /></StudentPrivateRoute>} />
        </Route>
      </Routes>

      <ToastContainer />
    </>
  )
}

export default App
