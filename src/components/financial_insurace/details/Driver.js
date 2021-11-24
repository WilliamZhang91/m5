import React, { useState, useRef } from "react"
import styles from "./Form.module.css";
import Plans from "./Plans";
import { useGlobalContext } from "../../store/context";
import {AiOutlineArrowRight} from "react-icons/ai";

const Driver = () => {

    const [showPlans, setShowPlans] = useState(false)

    const state = useGlobalContext();
    const { handleBirthday } = useGlobalContext();
    const dispatch = useGlobalContext();
    console.log(dispatch)


    const validation = () => {
        setShowPlans(true)
    }

    return <div>
        <div>
            <h1>Driver Details (You)</h1>

            <form>
                <label htmlFor="birthday">Date of Birth:</label>
                <input
                    type="date"
                    id="dob"
                    name="dob"
                    value={state.dob}
                    onChange={(e) =>  handleBirthday(e)}
                    className={styles.form3}
                />
            </form>

            <div className={styles.gender}>
                <p>Gender:</p>
                <button className={styles.choose}>Male</button>
                <button className={styles.choose}>Female</button>
            </div>

            <form>
                <label htmlFor="cars">Choose a License:</label>
                <select className={styles.license} id="cars" name="cars">
                    <option value="learners">NZ Learners License</option>
                    <option value="restricted">NZ Restricted License</option>
                    <option value="full">NZ Full License</option>
                </select>
            </form>

            <div className={styles.gender}>
                <p>Add another driver</p>
                <button className={styles.choose}>Yes</button>
                <button className={styles.choose}>No</button>
            </div>

        </div>

        <AiOutlineArrowRight className={styles.arrow} onClick={validation}/>

        {showPlans && <Plans />}


    </div>
}

export default Driver