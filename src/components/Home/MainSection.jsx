import React from "react";
import UseCases from "./UseCases";
import WhyChirrpy from "./WhyChirrpy";

const MainSection = () => {
  return (
    <>
      <section>
        <WhyChirrpy />

        <section className="my-6">
          <UseCases />
        </section>
      </section>
    </>
  );
};

export default MainSection;
