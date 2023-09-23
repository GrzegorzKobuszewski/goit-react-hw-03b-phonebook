import PropTypes from 'prop-types';

import styles from './Filter.module.css';


export const Filter = ({ value, onChange }) => (
    <label className={styles.label}>Find contacts by name
        <input
            className={styles.input}
            onChange={onChange}
            type="name"
            value={value}
        />
    </label>
)

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};