import styles from "./study.module.css";

const Study = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.tit}>자습서: React 시작하기</h2>
            <p className={styles.def}>이 자습서는 React에 대한 어떤 지식도 가정하지 않습니다.</p>
            <strong className={styles.strong}>자습서를 시작하기 전에</strong>            
            <p className={styles.p}>우리는 이 자습서에서 작은 게임을 만들겁니다. </p>
        </div>
    )
}

export default Study