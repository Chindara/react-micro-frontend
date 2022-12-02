import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function setAlertSuccess(message) {
	toast.success(message);
}

export function setAlertWarning(message) {
	toast.warning(message);
}

export function setAlertError(message) {
	toast.error(message);
}
