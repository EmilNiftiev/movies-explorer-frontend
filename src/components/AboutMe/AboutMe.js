import "./AboutMe.css";
import Title from "../Title/Title";
import studentPhoto from "../../images/about-me/student-photo.JPG";

const AboutMe = () => {
  return (
    <section id="student" className="about-me">
      <Title title={"Студент"} />
      <div className="about-me__content">
        <div className="about-me__info">
          <p className="about-me__name">Эмиль</p>
          <p className="about-me__job">Фронтенд-разработчик, 28 лет</p>
          <p className="about-me__resume">
            Я родился в маленьком городе Шарья, сейчас живу и работаю в
            Санкт-Петербурге, закончил факультет радиотехники в СПбГЭТУ "ЛЭТИ".
            Люблю автомобильную тематику, слушать музыку и путешествовать. С
            2018 года работаю в «НИИ телевидения», занимаюсь настройкой и сдачей
            контрольно-проверочной аппаратуры для бортовых блоков летательных
            аппаратов, а также разрабатываю техническую документацию. В 2022
            году начал изучать веб-разработку и хочу продолжать расти в этом
            направлении.
          </p>
          {/* Сделал сразу список, если нужно будет добавить еще ссылку */}
          <ul className="about-me__links">
            <li>
              <a
                className="about-me__link"
                href="https://github.com/EmilNiftiev"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
        <img
          className="about-me__photo"
          src={studentPhoto}
          alt="Фотография студента"
        />
      </div>
    </section>
  );
};

export default AboutMe;
