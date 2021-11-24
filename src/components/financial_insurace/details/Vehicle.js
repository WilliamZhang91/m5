import React, { useState } from "react";
import Driver from "./Driver";
import styles from "./Form.module.css";
import { useGlobalContext } from "../../store/context";
import { AiOutlineArrowRight } from "react-icons/ai"

const Vehicle = () => {

    const [showDriver, setShowDriver] = useState(false);
    const [highlight, setHighLight] = useState("2");

    const state = useGlobalContext();
    const { handleRegistration } = useGlobalContext();
    const { handleParked } = useGlobalContext();
    const dispatch = useGlobalContext();
    console.log(dispatch);

    const validation = () => {
        setShowDriver(true)
    };

    const toggleButton = (number) => {
        setHighLight(number)
    };


    return <div>

        <div>
            <h1 className={`${styles.vehicle_details} ${styles.flex}`}>Vehicle Details</h1>
            <div className={styles.plans}>
                <div className={styles.format}>

                    <form className={styles.flex}>
                        <label>Registration Number:</label>
                        <div>
                            <input
                                className={styles.form}
                                type="text"
                                id="registration"
                                name="registration"
                                required
                                value={state.registration}
                                onChange={(e) => handleRegistration(e)}
                            />
                            <button className={styles.button1}>Find</button>
                        </div>
                    </form>

                    <form className={styles.flex}>
                        <label>Where is the car usually parked:</label>
                        <input
                            className={styles.form2}
                            type="text"
                            id="parked"
                            name="parked"
                            required
                            value={state.parked}
                            onChange={(e) => handleParked(e)} />
                    </form>

                    <div className={styles.flex}>
                        <div>Is this used for business:</div>
                        <div className={styles.flex}>
                            <div onClick={() => toggleButton(1)} className={highlight === 1 ? `${styles.highlight}` : `${styles.button}`}>Yes</div>
                            <div onClick={() => toggleButton(2)} className={highlight === 2 ? `${styles.highlight}` : `${styles.button}`}>No</div>
                        </div>
                    </div>

                    <div className={styles.arrow}>
                        <AiOutlineArrowRight onClick={validation} />
                    </div>

                    {showDriver && <Driver />}


                </div>

                <div className={styles.empty}>

                </div>
            </div>
        </div>
    </div>
}

export default Vehicle