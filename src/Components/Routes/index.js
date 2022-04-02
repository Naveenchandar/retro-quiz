import { Route, Routes } from 'react-router-dom';
import { Home } from '../../Pages';

export const NavRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route
                path="*"
                element={
                    <main>
                        <p className="error404">404 Page Not Found!</p>
                        <p className="error404-msg">
                            Oops!! Looks like you have entered a wrong URL
                        </p>
                    </main>
                }
            />
        </Routes>
    )
}