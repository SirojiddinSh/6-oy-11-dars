import "./HomeLinks.css";
import { NavLink, Outlet } from "react-router-dom";
import Container from "../../utils/Container";

const HomeLinks = () => {
    return (
        <div>
            <Container>
                <div className="home__linkss">
                    <ul>
                        <li>
                            <NavLink to="/">All</NavLink>
                        </li>
                        <li>
                            <NavLink to="/ui">UI Design</NavLink>
                        </li>
                        <li>
                            <NavLink to="/ux">UX Design</NavLink>
                        </li>
                    </ul>
                </div>
            </Container>
        </div>
    );
};

export default HomeLinks;
