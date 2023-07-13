import "./SearchForm.css";
import Button from "../Button/Button";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

const SearchForm = () => {
  return (
    <section className="search-form">
      <form className="search-form__form">
        <div className="search-form__container">
          <input
            className="search-form__input"
            name="search"
            placeholder="Фильм"
            minLength="1"
            required
          />
          <Button type="search" buttonType="submit" />
        </div>
        <FilterCheckbox />
      </form>
    </section>
  );
};

export default SearchForm;
