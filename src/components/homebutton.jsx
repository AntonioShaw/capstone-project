import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

function HomeButton() {
	return(
		<Link to={'/'}><FontAwesomeIcon icon={faHome} /></Link>
	)
}

export default HomeButton