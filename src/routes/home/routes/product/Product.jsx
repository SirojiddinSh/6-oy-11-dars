import "./Product.css";
import { Products } from "../../../../cloneApi/Clone";
import { useTranslation } from "react-i18next";

const Product = () => {
    let { t } = useTranslation();
    return (
        <div>
            <div className="Products__cards">
                {Products.map((item) => {
                    return (
                        <div className="Products__card">
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

export default Product;
