import styles from "./document.module.css";

const Documents = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.tit}>시작하기</h2>
            <p className={styles.def}>이 페이지는 React 문서 및 관련된 리소스의 개요입니다.</p>
            <span className={styles.RecDef}><strong className={styles.strong}>React</strong>는 사용자 인터페이스를 만들기 위한라이브러리입니다. 홈페이지나 자습서에서 React에 대한 모든 것을 알아보세요.</span>
        </div>
    )
}

export default Documents