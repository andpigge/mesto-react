import React, { useRef } from 'react';

import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, loading }) {
  // Использую рефы
  const inputRef = useRef();

  const handleSubmit = e => {
    e.preventDefault();

    onUpdateAvatar({
      avatar: inputRef.current.value
    });

    inputRef.current.value = '';
  };

  const resetFormFieldsOnClose = () => {
    onClose();
    inputRef.current.value = '';
  }

  return (
    <PopupWithForm title={'Обновить аватар'} name={'popup_edit_img'} isOpen={isOpen} onClose={resetFormFieldsOnClose} children={(
      <>
        <label className="popup__form-label">
          <input type="url" className="popup__form-input" id="url-img-edit" placeholder="Ссылка на картинку" name="imgEdit" required ref={inputRef} />
          <span className="popup__error-message url-img-edit-error"></span>
        </label>
        <button className="button-popup button-popup_edit_img" type="submit" onClick={handleSubmit}>
          {loading ? 'Сохранить...' : 'Сохранить'}
        </button>
      </>
    )} />
  );
}

export default EditAvatarPopup;
