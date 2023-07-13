import "./AboutProject.css";
import Title from "../Title/Title";

const AboutProject = () => {
  return (
    <section id="about-project" className="about-project">
      <Title title={"О проекте"} />
      <section className="about-project__info">
        <div className="about-project__info-container">
          <p className="about-project__info-title">
            Дипломный проект включал 5 этапов
          </p>
          <p className="about-project__info-text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__info-container">
          <p className="about-project__info-title">
            На выполнение диплома ушло 5 недель
          </p>
          <p className="about-project__info-text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </section>
      <section className="about-project__timeline">
        <div className="about-project__duration about-project__duration_type_backend">
          1 неделя
        </div>
        <p className="about-project__name about-project__name_type_backend">
          Back-end
        </p>
        <div className="about-project__duration about-project__duration_type_frontend">
          4 недели
        </div>
        <p className="about-project__name about-project__name_type_frontend">
          Front-end
        </p>
      </section>
    </section>
  );
};

export default AboutProject;
