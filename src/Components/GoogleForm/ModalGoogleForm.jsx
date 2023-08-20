import GoogleFormEmbed from "./GoogleForm";
import './GoogleForm.css'

const ModalGoogleForm = ({isOpen, onClose}) => {
    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <GoogleFormEmbed/>
                <button className="close-button" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    )
}

export default ModalGoogleForm;