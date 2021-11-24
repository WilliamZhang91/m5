import {Link} from "react-router-dom";
import styles from "./Form.module.css";
import PersonalDetails from "../personal_details/PersonalDetails";

const Plans = () => {
    return <div>
        <h1>Our Plans</h1>

        <div className={styles.plans}>
            <div className={styles.plan_options}>
                <div className={styles.card_options}>
                    <h1>$30.50</h1>
                    <Link to="/apply">Buy Now</Link>
                </div>
            </div>
            <div className={styles.plan_options}>
                <div className={styles.card_options}>
                    <h1>$22.50</h1>
                    <Link to="/apply">Buy Now</Link>
                </div>
            </div>
            <div className={styles.plan_options}>
                <div className={styles.card_options}>
                    <h1>$10.00</h1>
                    <Link to="/apply">Buy Now</Link>
                </div>
            </div>
        </div>


    </div>
}

export default Plans