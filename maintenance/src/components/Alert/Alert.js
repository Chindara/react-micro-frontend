import { toastr } from 'react-redux-toastr';
import './custom.css';

export default function setAlert(title, message) {
	toastr.success(title, message);
}

export function setAlerDanger(title, message) {
	toastr.error(title, message);
}

export function setAlerWarning(title, message) {
	toastr.warning(title, message);
}
