import './navegation.css';
import { useNavigate, useLocation } from "react-router-dom";

const Navegation = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const routes = ['/', '/about', '/technologies', '/projects'];
    const routeNames = ['Home', 'About', 'Technologies', 'Projects'];
    const currentIndex = routes.indexOf(location.pathname);

    const handlePrevious = () => {
        if (currentIndex > 0) {
            navigate(routes[currentIndex - 1]);
        }
    };

    const handleNext = () => {
        if (currentIndex < routes.length - 1) {
            navigate(routes[currentIndex + 1]);
        }
    };

    return (
        <div className="navBtns">
            <button onClick={handlePrevious} disabled={currentIndex === 0}>
                {currentIndex > 0 ? routeNames[currentIndex - 1] : 'anterior'}
            </button>

            <button onClick={handleNext} disabled={currentIndex === routes.length - 1}>
                {currentIndex < routes.length - 1 ? routeNames[currentIndex + 1] : 'siguiente'}
            </button>
        </div>
    );
};

export default Navegation;