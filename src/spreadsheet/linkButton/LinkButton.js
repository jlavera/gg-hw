import { hri } from 'human-readable-ids'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './LinkButton.scss'

const LinkButton = ({ data, id = hri.random() }) => {
    const cacheAndGenerateLink = () => {
        localStorage.setItem(id, JSON.stringify(data))

        navigator.clipboard.writeText(`localhost:3000/${id}`)

        toast.success('Link copied to clipboard!', {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        })
    }

    return (
        <div className="linkbutton" onClick={() => cacheAndGenerateLink()}>
            <FontAwesomeIcon icon={faLink} />
            <ToastContainer />
        </div>
    )
}

export default LinkButton
