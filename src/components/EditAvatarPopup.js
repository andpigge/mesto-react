import React, { useRef } from 'react';

import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  // Использую рефы
  const inputRef = useRef();

  const handleSubmit = e => {
    e.preventDefault();

    onUpdateAvatar({
      avatar: inputRef.current.value
    });
  };

  return (
    <PopupWithForm title={'Обновить аватар'} name={'popup_edit_img'} isOpen={isOpen} onClose={onClose} children={(
      <>
        <label className="popup__form-label">
          <input type="url" className="popup__form-input" id="url-img-edit" placeholder="Ссылка на картинку" name="imgEdit" required ref={inputRef} />
          <span className="popup__error-message url-img-edit-error"></span>
        </label>
        <button className="button-popup button-popup_edit_img" type="submit" onClick={handleSubmit}>Сохранить</button>
      </>
    )} />
  );
}

export default EditAvatarPopup;