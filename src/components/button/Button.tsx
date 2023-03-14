import styles from './Button.module.css';

const Button = () => {
    return (

        <button
            className={`${styles.custombtn} ${styles.btn10}`}
        >
            Ответить потом
        </button>

    );
}

export default Button;