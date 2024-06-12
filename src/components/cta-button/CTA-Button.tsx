import * as PropTypes from 'prop-types';

import styles from './CTA-Button.module.css';

interface Props {
  text: string;
}

function CTA_Button(props: Readonly<Props>) {
  return (
    <button className={styles.button}>
      <span className="text">{props.text}</span>
      <span className="arrow">→</span>
    </button>
  )
}

CTA_Button.propTypes = {
  text: PropTypes.string
}

export default CTA_Button;