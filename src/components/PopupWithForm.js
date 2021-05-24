function PopupWithForm({title, name, isOpen, onClose, children}) {
    return (
      <>
        <div className={!isOpen ? `popup ${name}` : `popup ${name} popup_opened`}>
          <div className="popup__container">
            <button className="popup__btn" type="button" onClick={onClose}></button>
            <form className="popup__form" name={name}>
              <h2 className="popup__form-title">
                {title}
              </h2>
              {children}
            </form>
          </div>
        </div>
      </>
    );
}

export default PopupWithForm;
