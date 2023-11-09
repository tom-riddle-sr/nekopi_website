import React from 'react'
import styles from "./p5.module.css"
import WhiteCat from "../Assets/p5_whiteumbrella.png"
import BlackCat from "../Assets/p5_blackumbrella.png"
const P5 = () => {
  return (
    <div className={styles.container_p5}>
      <div className={styles.container_p5_1}>lineup</div>
      <div className={styles.container_p5_2}>
        <div className={styles.container_p5_2_1}>
          <img className={styles.img1} src={WhiteCat}></img>
          <div className={styles.container_p5_2_1_1}>
            <p className={styles.p1}>shironeko</p>
            <p className={styles.p2}>ネコピ フォールディングアンブレラ 〈シロネコ〉<br></br>
              本体色　外側：白 / 内側：シルバー</p>
            <p className={styles.p3}>¥4,400(税込)</p>
          </div>
        </div>
        <div className={styles.container_p5_2_2}>
          <img className={styles.img2} src={BlackCat}></img>
          <div className={styles.container_p5_2_2_2}>
            <p className={styles.p1}>kuroneko</p>
            <p className={styles.p2}>ネコピ フォールディングアンブレラ 〈クロネコ
              <br></br>本体色　外側：黒 / 内側：黒</p>
            <p className={styles.p3}>¥4,400(税込)</p>
          </div>
        </div>
      </div>
      <div className={styles.container_p5_3}>〈共通仕様〉本体生地：ポリエステル100％ / 親骨長さ：50cm / 傘直径：88cm</div>
      <div className={styles.container_p5_4}>
        <p className={styles.p4}>Buy Now</p>
        <svg className={styles.svg1} viewBox="0 0 440 124"><path stroke='black' strokeWidth="2" fill="white" d="M392,29.1H266.6L251.5,2.9c-0.8-1.4-2.9-1.3-3.6,0.2l-11.9,26h-38l-11.9-26c-0.7-1.5-2.7-1.6-3.6-0.2l-15.1,26.1H48c-25.7,0-46.5,20.8-46.5,46.5c0,25.7,20.8,46.5,46.5,46.5h344c25.7,0,46.5-20.8,46.5-46.5C438.5,49.9,417.7,29.1,392,29.1z"></path></svg>
        <svg className={styles.svg2} viewBox="0 0 440 124"><path fill="black" d="M392,29.1H266.6L251.5,2.9c-0.8-1.4-2.9-1.3-3.6,0.2l-11.9,26h-38l-11.9-26c-0.7-1.5-2.7-1.6-3.6-0.2l-15.1,26.1H48c-25.7,0-46.5,20.8-46.5,46.5c0,25.7,20.8,46.5,46.5,46.5h344c25.7,0,46.5-20.8,46.5-46.5C438.5,49.9,417.7,29.1,392,29.1z"></path></svg>




      </div>
    </div>
  )
}

export default P5
