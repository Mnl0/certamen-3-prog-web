import styles from './contact.module.css';

const Contact = () => {

    return (
        <div>
            <section className={styles.aboutus}>
                <div className={styles.container}>
                    <h2>Contáctanos!</h2>
                    <p>Si tienes preguntas o necesitas ayuda, envíanos un mensaje. Puedes llamarnos al +56 98765432 o escribirnos a soporte@workwise.cl. Respondemos en un plazo de 24 horas. ¡Estamos aquí para ayudarte!.</p>
                </div>
            </section>
        </div>
    )
}

export default Contact;