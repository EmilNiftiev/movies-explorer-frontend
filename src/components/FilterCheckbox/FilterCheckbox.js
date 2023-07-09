import "./FilterCheckbox.css";

const FilterCheckbox = () => {
  return (
    <section className="filter-checkbox">
      <label className="filter-checkbox__switcher">
        <input className="filter-checkbox__checkbox" type="checkbox" />
        <span className="filter-checkbox__container"></span>
      </label>
      <p className="filter-checkbox__title">Короткометражки</p>
    </section>
  );
};

export default FilterCheckbox;
