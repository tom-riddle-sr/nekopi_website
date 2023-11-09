import React, { useEffect, useState } from 'react'
import styles from "./p2.module.css"
import Bg from "../Assets/p2_bg.jpeg"
import Whitecat from "../Assets/p2_whitecat.png"
import Blackcat from "../Assets/p2_blackcat.png"

const Sample = () => {
  const [scrollPosition, setScrollPosition] = useState(null)


  return (
    <div id='nekopi' className={styles.container_p2}>
      <p className={styles.p1}>雨でも晴れでも、あにゃたと一緒。</p>
      <div className={styles.container2}>
        <div className={styles.container2_1}>
          <img className={styles.whitecat} src={Whitecat}></img>
        </div>
        <div className={styles.container2_2}>
          <img className={styles.bg} src={Bg}></img>
        </div>
        <div className={styles.container2_3}>
          <img className={styles.blackcat} src={Blackcat}></img>
        </div>
      </div>
    </div>
  )
}

export default Sample
