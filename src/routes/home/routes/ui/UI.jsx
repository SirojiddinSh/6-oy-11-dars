import "./UI.css";
import { UI } from "../../../../cloneApi/Clone";

const UIcards = () => {
    return (
        <div>
            <div className="UI__cards">
                {UI.map((item) => {
                    return (
                        <div className="UI__card">
                            <img src={item.img} alt="" />
                            <h3>NOV 23 2020</h3>
                            <h2>{item.title}</h2>
                            <p>
                                A quick guide to assisting users in the
                                challenging steps from learning about your
                                podcast on the web. A quick guide to assisting
                                users in the  challenging steps from learning
                                about your podcast on the web.{" "}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default UIcards;
