import React, { useState } from 'react';

import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [placeName, setPlaceName] = useState('');
  const [placeImg, setPlaceImg] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    onAddPlace ({
      name: placeName,
      link: placeImg
    });
  };

  return (
    <PopupWithForm title={'Новое место'} name={'popup_add_card'} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} children={(
      <>
        <label className="popup__form-label">
          <input type="text" className="popup__form-input popup__form-input_value_place" id="place-name-input" placeholder="Название" name="placeName" minLength="2" maxLength="30" required value={placeName} onChange={e => setPlaceName(e.target.value)} />
          <span className="popup__error-message place-name-input-error"></span>
        </label>
        <label className="popup__form-label">
          <input type="url" className="popup__form-input popup__form-input_value_img" placeholder="Ссылка на картинку" id="place-img-input" name="placeImg" required value={placeImg} onChange={e => setPlaceImg(e.target.value)} />
          <span className="popup__error-message place-img-input-error"></span>
        </label>
        <button className="button-popup button-popup_add_card" type="submit">Создать</button>
      </>
    )} />
  );
}

export default AddPlacePopup;
