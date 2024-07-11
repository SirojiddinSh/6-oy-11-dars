import "./All.css";
import React from "react";
import All from "../../../../cloneApi/Clone";
import { useTranslation } from "react-i18next";

const AllCards = () => {
    let { t } = useTranslation();
    return (
        <div>
            <div className="All__cards">
                {All.map((item) => {
                    return (
                        <div className="All__card">
                            <img src={item.img} alt="" />
                            <h3>NOV 23 2020</h3>
                            <h2>{item.title}</h2>
                            <p>
                                {t(
                                    "A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting  users in the  challenging steps from learning about your podcast on the web."
                                )}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AllCards;
