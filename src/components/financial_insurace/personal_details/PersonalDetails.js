import React, { useState } from "react";
import { useGlobalContext } from "../../store/context";
import PaymentPlan from "./PaymentPlan";
import styles from "./PersonalDetails.module.css";
import {AiOutlineArrowRight} from "react-icons/ai";



const PersonalDetails = () => {

    const state = useGlobalContext();
    const { handleSurname } = useGlobalContext();
    const { handleFirstName } = useGlobalContext();
    const { handleAddress } = useGlobalContext();
    const { handlePhone } = useGlobalContext();
    const { handleEmail } = useGlobalContext();
    const dispatch = useGlobalContext();
    console.log(dispatch);

    const [showPaymentPlan, setShowPaymentPlan] = useState(false)

    const confirmation = () => {
        setShowPaymentPlan(true)
    }

    return <div>
        <h1 className={styles.title}>
            Personal Details
        </h1>

        <form>
            <div>
                <label className={styles.personal_details} htmlFor="name">Name:</label>
                <input
                    className={styles.input}
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={state.first_name}
                    onChange={(e) => handleFirstName(e)}
                />
                <input
                    className={styles.input}
                    type="text"
                    name="surname"
                    placeholder="Family Name"
                    value={state.surname}
                    onChange={(e) => handleSurname(e)}
                />
            </div>

            <div>
                <label className={styles.personal_details} htmlFor="address">Address:</label>
                <input
                    className={styles.input1}
                    type="text"
                    name="address"
                    value={state.address}
                    onChange={(e) => handleAddress(e)}
                />
            </div>

            <div>
                <label className={styles.personal_details} htmlFor="phone">Phone:</label>
                <input
                    className={styles.input1}
                    type="number"
                    name="phone"
                    value={state.phone}
                    onChange={(e) => handlePhone(e)}
                />
            </div>

            <div>
                <label className={styles.personal_details} htmlFor="email">Email:</label>
                <input
                    className={styles.input1}
                    type="email"
                    name="email"
                    value={state.email}
                    onChange={(e) => handleEmail(e)}
                />
            </div>
        </form>

        <AiOutlineArrowRight className={styles.arrow} onClick={confirmation}/>

        {showPaymentPlan && <PaymentPlan />}

    </div>
}

export default PersonalDetails