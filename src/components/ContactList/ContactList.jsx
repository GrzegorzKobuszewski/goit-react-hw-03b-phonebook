import PropTypes from 'prop-types';

import styles from './ContactList.module.css';

export const ContactList = ({ contacts, toDelete }) => (
    <ul className={styles.list}>
        {contacts.map(({ id, name, number }) => (
            <li className={styles.item} key={id}>
                <p className={styles.paragraph}>
                    {name}: {number}
                </p>
                    
                <button className={styles.button} type="submit" onClick={() => toDelete(id)}>
                    Delete
                </button>
            </li>
        ))}
    </ul>
);

ContactList.propTypes = {
    toDelete: PropTypes.func.isRequired,
}