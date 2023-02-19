import promoImage from "../images/promo_image.svg";

export default function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <div className="promo__info">
          <h1 className="promo__title">
            Учебный проект студента факультета Веб&#8209;разработки.
          </h1>
          <p className="promo__description">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <button className="promo__button">Узнать больше</button>
        </div>
        <img
          className="promo__image"
          src={promoImage}
          alt="Изображение баннера"
        />
      </div>
    </section>
  );
}
