import "./FilterCheckbox.css";

const FilterCheckbox = ({ isShortMovieChecked, setIsShortMovieChecked }) => {
  // Обработчик чекбокса короткометражек
  const handleCheckbox = () => {
    setIsShortMovieChecked(!isShortMovieChecked);
    // localStorage.setItem("checkboxState", !isShortMovieChecked);
  };

  console.log(`состояние чекбокса - ${isShortMovieChecked}`);

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
