// Icons.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faCheck, faExclamationTriangle , faEnvelope  } from '@fortawesome/free-solid-svg-icons';

export const PaperPlaneIcon = (props) => <FontAwesomeIcon icon={faPaperPlane} {...props} />;
export const CheckIcon = (props) => <FontAwesomeIcon icon={faCheck} {...props} />;
export const WarningIcon = (props) => <FontAwesomeIcon icon={faExclamationTriangle} {...props} />;
export const Envelope = (props) => <FontAwesomeIcon icon={faEnvelope} {...props} />;
// export const WhatsApp = (props) => <FontAwesomeIcon icon={faWhatsapp} {...props} />;
// export const LinkedIn = (props) => <FontAwesomeIcon icon={faLinkedin} {...props} />;
