import './Techs.css';
import Title from '../Title/Title';
import TechnologyStack from '../TechnologyStack/TechnologyStack';
import { techStack } from '../../utils/constants';

const Techs = () => {
  return (
    <section id="techs" className="techs">
      <Title title={'Технологии'} />
      <div className="techs__container">
        <h2 className="techs__title">7 технологий</h2>
        <p className="techs__subtitle">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className="techs__list">
          {techStack.map((tech, i) => (
            <li key={i} className="techs__list-item">
              <TechnologyStack name={tech} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Techs;