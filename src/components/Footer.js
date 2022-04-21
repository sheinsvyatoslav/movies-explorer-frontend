import Navigation from './Navigation'

export default function Footer() {

  return (
    <footer className="footer">
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__container">
        <p className="footer__copyright">&copy; 2022</p>
        <Navigation />
      </div>
    </footer>
  );
}