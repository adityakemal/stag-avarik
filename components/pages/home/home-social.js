import React from "react";

import { Social } from "components/anti/social/social";
import { useScrollAnim } from "components/hooks/hooks";

import icLogo from "assets/img/common/logo_main-icon-light.png";

const HomeSocial = () => {
  const [trigger, anim] = useScrollAnim();
  const social = [
    {
      type: "discord",
      url: "https://discord.gg/AvarikSaga",
    },
    {
      type: "twitter",
      url: "https://twitter.com/avariksaga",
    },
    {
      type: "instagram",
      url: "https://instagram.com/avariksaga",
    },
  ];

  return (
    <div className="sc-home-social pt-main-sm pb-main" ref={trigger}>
      <div className="container mw-xl">
        <div className="heading">
          <img
            src={icLogo}
            className={`img-fluid ${anim(1)}`}
            alt="Avarik Saga"
          />
          <h2 className={anim(2)}>Join the Conversation</h2>
        </div>
        <Social
          shape="square"
          size="lg"
          variant="primary"
          data={social}
          className={`social-conversation ${anim(3)}`}
        />
      </div>
    </div>
  );
};

export default HomeSocial;
