import photo from "../images/photo.jpeg";

export default function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__container">
        <div className="about-me__info">
          <h3 className="about-me__name">Святослав</h3>
          <p className="about-me__description">Фронтенд-разработчик, 24 года</p>
          <p className="about-me__summary">
            Решил перейти именно во фронтенд-разработку, поскольку люблю решать
            логические задачи и видеть результат своей работы. Помимо курсов
            Яндекс.Практикум, прохожу обучение на портале freeCodeCamp и решаю
            задачи на Codewars. В свободное время люблю ходить в кино, кататься
            на роликах/коньках. Обожаю играть в шахматы и английский.
          </p>
          <ul className="about-me__links">
            <li>
              <a className="about-me__link" href="https://t.me/shsvtslv">
                Telegram
              </a>
            </li>
            <li>
              <a
                className="about-me__link"
                href="https://github.com/sheinsvyatoslav"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
        <img className="about-me__photo" src={photo} alt="Моё фото" />
      </div>
    </section>
  );
}
