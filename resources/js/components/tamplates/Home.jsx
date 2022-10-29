import React from "react";
import Admin from "./Admin";
import Ecom from "./Ecom";
import Edit_card from "./Edit_card";
import First from "./First";
import Footer from "./Footer";
import Forth from "./Forth";
import Second from "./Second";
import Third from "./Third";

const Home = () => {
  return (
    <div>
      <section>
        <First />
      </section>

      <section>
        <Second />
      </section>

      <section>
        <Third />
      </section>

      <section>
        <Forth />
      </section>

      <section>
        <Ecom />
      </section>

      <section>
        <Footer />
      </section>

      <section>
        <Admin />
      </section>

      <section>
        <Edit_card />
      </section>
    </div>
  );
};

export default Home;
