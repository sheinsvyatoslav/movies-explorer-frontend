import { Link } from 'react-router-dom';

export default function PageNotFound() {

  return (
    <section className="not-found">
      <h2 className="not-found__title">404</h2>
      <p className="not-found__subtitle">Страница не найдена</p>
      <Link to="signup" className="not-found__link">Назад</Link>
    </section>
  )
}