import PopupWithForm from './PopupWithForm';

function ConfirmRemove({ isOpen, onClose, onRemoveCard }) {

  const handleSubmit = e => {
    e.preventDefault();

    onRemoveCard();
  };

  return (
    <PopupWithForm title={'Вы уверены?'} name={'popup_remove_card'} isOpen={isOpen} onClose={onClose} children={(
      <>
        <button className="button-popup button-popup_delete_card" type="submit" onClick={handleSubmit}>Да</button>
      </>
    )} />
  );
}

export default ConfirmRemove;
