import React from "react";
import { motion } from "framer-motion";
import styles from "./style.module.css";

export default function Button({ isActive, setIsActive }) {
  return (
    <div onClick={() => setIsActive(!isActive)} className={styles.button}>
      <motion.div
        className={styles.slider}
        animate={{ y: isActive ? "-100%" : "0%" }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className={styles.el}>
          <PerspectiveText isActive={!isActive} label="Menu" />
        </div>

        <div className={styles.el}>
          <PerspectiveText isActive={isActive} label="Close" />
        </div>
      </motion.div>
    </div>
  );
}

function PerspectiveText({ label, isActive }) {
  return (
    <div className={styles.perspectiveText}>
      <motion.p
        animate={{
          rotateX: isActive ? 0 : -90,
          opacity: isActive ? 1 : 0,
        }}
        transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
      >
        {label}
      </motion.p>
    </div>
  );
}
