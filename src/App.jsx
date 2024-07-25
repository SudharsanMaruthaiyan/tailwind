import Nav from "./components/Nav";
import {
  Hero,
  PopularProducts,
  SuperQuality,
  SpecialOffer,
  CustomerReviews,
  Booter,
  Services,
  Subscribe,
} from "./sections";

const App = () => (
  <main className="relative ">
    <Nav />
    <section className="wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10 ">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffer />
    </section>
    <section className="bg-pale-blue w-ful padding ">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="bg-black padding-x padding-t pb-5">
      <Booter />
    </section>
  </main>
);

export default App;
