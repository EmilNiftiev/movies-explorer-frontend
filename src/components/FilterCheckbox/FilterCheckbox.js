import "./FilterCheckbox.css";

const FilterCheckbox = ({ isShortMovieChecked, setIsShortMovieChecked }) => {
  // Обработчик чекбокса короткометражек
  const handleCheckbox = () => {
    setIsShortMovieChecked(!isShortMovieChecked);
    localStorage.setItem("checkboxState", !isShortMovieChecked);
    // Если карточки уже отображены, новое состояние чекбокса всё
    // равно запишется в localStorage, даже если не нажать сабмит
  };

  return (
    <section className="filter-checkbox">
      <label className="filter-checkbox__switcher">
        <input
          className="filter-checkbox__checkbox"
          type="checkbox"
          checked={isShortMovieChecked}
          onChange={handleCheckbox}
        />
        <span className="filter-checkbox__container"></span>
      </label>
      <p className="filter-checkbox__title">Короткометражки</p>
    </section>
  );
};

export default FilterCheckbox;
