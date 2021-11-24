import { useGlobalContext } from "../../store/context";
import React, { useState } from "react";
import Summary from "../Summary";
import styles from "./PersonalDetails.module.css"
import { AiOutlineArrowRight } from "react-icons/ai";


const PaymentDetails = () => {

    const [showSummary, setShowSummary] = useState(false);

    const displaySummary = () => {
        setShowSummary(true)
    }

    return <div>
        <div className={styles.layout}>

            <div className={styles.layout1}>

                <h1 className={styles.title}>Payment Details</h1>

                <div className={styles.layout}>Pay by:
                    <button>Credit Card</button>
                    <button>Bank Transfer</button>
                </div>

                <form>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            name="name"
                        />
                    </div>

                    <div>
                        <label htmlFor="billing">Billing Address:</label>
                        <input
                            type="text"
                            name="billing"
                        />
                    </div>

                    <div>
                        <label htmlFor="name">Card Number:</label>
                        <input
                            type="number"
                            name="card_number"
                        />
                    </div>


                    <div>
                        <label htmlFor="name">Expiry: </label>
                        <input
                            type="text"
                            name="Expiry"
                        />

                        <label htmlFor="cvc">CVC: </label>
                        <input
                            type="number"
                            name="cvc"
                        />

                    </div>

                </form>
            </div>

            <AiOutlineArrowRight className={styles.arrow} onClick={displaySummary} />

            {showSummary && <Summary />}

        </div>

    </div>
}

export default PaymentDetails