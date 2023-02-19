import Promo from "./promo";
import AboutProject from "./about-project";
import Techs from "./techs";
import AboutMe from "./about-me";
import Portfolio from "./portfolio";

export default function Main() {
  return (
    <main className="content">
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </main>
  );
}
