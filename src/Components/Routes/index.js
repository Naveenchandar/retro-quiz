import { Route, Routes } from 'react-router-dom';
import { Home, Quiz, Result, Rules } from '../../Pages';

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
                    <main
                        style={{
                            padding: "1rem",
                            // backgroundColor: "var(--background-color)",
                        }}
                    >
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