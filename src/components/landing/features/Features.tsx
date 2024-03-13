import React from "react";
import Feature from "./Feature";
import gear from "../../../../public/gears.png";
const Feautres = () => {
  return (
    <div className=" mx-4 sm:mx-32 flex gap-10 sm:gap-32 justify-center p sm:py-24 flex-col sm:flex-row">
      <Feature
        heading="Stay up to date"
        description="You can allow notifications on your loan offers and lends to stay updated with your assets. "
        btnName="Set notification"
        bgImage={gear}
      />
      <Feature
        heading="Have around"
        description="Download our Chrome extension to track your offers, lends and receive notifications!"
        btnName="Get extension"
        bgImage={gear}
      />
    </div>
  );
};

export default Feautres;
