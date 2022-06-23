import styles from "./homepage.module.css";

const Hompage = () => {
    return (
        <div className={styles.container}>
            <h3 className={styles.tit}>React</h3>
            <strong className={styles.def}>사용자 인터페이스를 만들기 위한 JavaScript 라이브러리</strong>
            <div className={styles.BtnLink}>
                <button className={styles.btn}>시작하기</button>
                <a href="#" className={styles.link}>자습서 읽어보기 &gt;</a>
            </div>
        </div>

    )
}

export default Hompage