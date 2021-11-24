import styles from "./Summary.module.css";
import { useGlobalContext } from "../store/context";

const Summary = () => {

    const state = useGlobalContext();

    return <div>

        <div>
            <h1 className={styles.title}>Quote Summary</h1>
        </div>

        <div className={styles.summaryDetails}>
            <p>Driver Name:</p>

            <p className={styles.marginName}>{state.first_name}</p>
            <p>{state.surname}</p>

        </div>

        <div className={styles.summaryDetails}>
            <p>Registration:</p>
            <p className={styles.marginVehicle}>{state.registration}</p>
        </div>

        <div className={styles.summaryDetails}>
            <p>Email:</p>
            <p className={styles.marginEmail}>{state.email}</p>
        </div>

        <div className={styles.summaryDetails}>
            <p>Plan:</p>
            <p className={styles.marginPlan}>comprehensive</p>
        </div>

        <div className={styles.summaryDetails}>
            <p>Price:</p>
            <p className={styles.marginPrice}>$30.50</p>
        </div>

        <span>
            <button>Modify Details</button>
            <button>Process Payment</button>
        </span>

    </div>
}

export default Summary