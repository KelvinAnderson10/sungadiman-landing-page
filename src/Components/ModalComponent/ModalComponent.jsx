import './ModalComponent.css'

const ModalComponent = ({isOpen, onClose, content}) => {
    if (!isOpen) return null;

    return (
        <div className="modal-component">
            <div className="modal-component-content">
            <span className="close" onClick={onClose}>
                &times;
            </span>
                {content}
            </div>
        </div>
    )
}

export default ModalComponent;