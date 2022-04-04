import { Link, Route, Routes } from 'react-router-dom';
import { Home, Quiz, Result, Rules } from '../../Pages';
import './index.css';

export const NavRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/result" element={<Result />} />
            <Route path="/rules" element={<Rules />} />
            <Route
                path="*"
                element={
                    <div className='not_found'>
                        <p className="error404">404 Page Not Found!</p>
                        <p className="error404-msg">
                            Oops!! Looks like you have entered a wrong URL
                        </p>
                        <Link to='/'>Click here to go home</Link>
                    </div>
                }
            />
        </Routes>
    )
}