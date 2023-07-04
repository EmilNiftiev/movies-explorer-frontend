import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
// import Movies from '../Movies/Movies';
// import SavedMovies from '../SavedMovies/SavedMovies';
// import Profile from '../Profile/Profile';
// import Register from '../Register/Register';
// import Login from '../Login/Login';

const App = () => {
    return (
        <section className='app'>
            <Routes>
                <Route path='/' element={<Main />} />
                {/* <Route path='/movies' element={<Movies />} />
                <Route path='/saved-movies' element={<SavedMovies />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/signup' element={<Register />} />
                <Route path='/signin' element={<Login />} /> */}
            </Routes>
        </section>
    );
};

export default App;