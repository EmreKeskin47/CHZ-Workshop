import React from "react";
import styles from "@/styles/Home.module.css";
import Countdown from "react-countdown";

const Meeting = () => {
    const native = 0;
    const isEligible = Number(native) > 0;
    const countdownDate = new Date("2023-12-31T23:59:59");

    return (
        <div className={styles.center}>
            <div>
                <h1 className="my-8 text-center text-3xl font-bold  ">
                    MEETING WILL START SOON!
                </h1>

                <Countdown date={countdownDate} className={styles.countdown} />

                <h2 className="my-8 text-center text-xl font-bold">
                    <div className="my-4">
                        only native token holders will be eligible to join
                    </div>
                    <div className="my-4">{`Your native balance is ${native}`}</div>
                    <div className="my-4 ">
                        {`YOU ARE ${isEligible ? "" : "NOT"} ELIGIBLE`}
                    </div>
                </h2>
            </div>
        </div>
    );
};

export default Meeting;
