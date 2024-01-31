import React from "react";
import Feature from "./Feature";
import gear from "../../../../public/gears.png";
const Feautres = () => {
  return (
    <div className="mx-32 flex gap-16 justify-center py-16">
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
