import "./Nav.css";
import { NavLink } from "react-router-dom";
import Container from "../../utils/Container";
import i18n from "../../locales/i18next";
import { useTranslation } from "react-i18next";

const Nav = () => {
    let { t } = useTranslation();
    let data = useTranslation();
    return (
        <nav>
            <Container>
                <div className="nav">
                    <div className="nav_title">
                        <div className="nav__title__div">
                            <h2 className="nav__title__1">sad </h2>
                            <h2 className="nav__title__2">zeppelins</h2>
                        </div>
                        <div className="nav_HireMe">
                            <p className="nav__in">in</p>
                            <p className="nav__hire">Hire Me</p>
                        </div>
                    </div>
                    <div className="nav_links">
                        <select
                            defaultValue={data.i18n.language}
                            onChange={(e) =>
                                i18n.changeLanguage(e.target.value)
                            }
                        >
                            <option value="en">EN</option>
                            <option value="uz">UZ</option>
                            <option value="ru">RU</option>
                            <option value="es">ES</option>
                        </select>
                        <ul>
                            <li>
                                {""}
                                <NavLink to="/">{t("HOME")}</NavLink>
                            </li>
                            <li>
                                {""}
                                <NavLink
                                    target="_blank"
                                    to="https://6-oy-6-dars-six.vercel.app/"
                                >
                                    {t("PORTFOLIO")}
                                </NavLink>
                            </li>
                            <li>
                                {""}
                                <NavLink to="/cv">CV</NavLink>
                            </li>
                            <li>
                                {""}
                                <NavLink to="/about">{t("ABOUT")}</NavLink>
                            </li>
                            <li>
                                {""}
                                <NavLink to="/contact">{t("CONTACT")}</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </nav>
    );
};

export default Nav;
