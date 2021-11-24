import { useGlobalContext } from "../../store/context";
import React, { useState } from "react";
import Summary from "../Summary";
import styles from "./PersonalDetails.module.css"
import {AiOutlineArrowRight} from "react-icons/ai";


const PaymentDetails = () => {

    const [showSummary, setShowSummary] = useState(false);

    const displaySummary = () => {
        setShowSummary(true)
    }

    return <div>
        <div>

            <h1 className={styles.title}>Payment Details</h1>

            <div>Pay by:
                <span>
                    <button>Credit Card</button>
                    <button>Bank Transfer</button>
                </span>
            </div>

            <form>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    name="name"
                />

                <label htmlFor="billing">Billing Address:</label>
                <input
                    type="text"
                    name="billing"
                />

                <label htmlFor="name">Card Number:</label>
                <input
                    type="number"
                    name="card_number"
                />

                <div>
                    <label htmlFor="name">Expiry:</label>
                    <input
                        type="text"
                        name="Expiry"
                    />

                    <label htmlFor="cvc">CVC:</label>
                    <input
                        type="number"
                        name="cvc"
                    />
                </div>

            </form>
        </div>

        <AiOutlineArrowRight className={styles.arrow} onClick={displaySummary}/>

        {showSummary && <Summary />}

    </div>
}

export default PaymentDetails