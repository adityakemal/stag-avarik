import React from "react";

import { useScrollAnim } from "components/hooks/hooks";

import { Element } from "react-scroll";

const HomeRoadmap = () => {
  const [trigger, anim] = useScrollAnim();

  const roadmap = [
    {
      percentage: "25%",
      content: (
        <p className="mb-0">
          Begin your journey with the{" "}
          <strong>Avarik Saga Art Derivative Contest</strong>. May the best
          warriors rule!
        </p>
      ),
    },
    {
      percentage: "50%",
      content: (
        <p className="mb-0">
          Start collecting your spoils of war with{" "}
          <strong>Avarik Saga NFT Giveaways</strong>.
        </p>
      ),
    },
    {
      percentage: "75%",
      content: (
        <p className="mb-0">
          Start the <strong>crafting of the deadliest NFT weapons</strong> that
          will be given out to the victorious holders of Avarik Saga warriors.
        </p>
      ),
    },
    {
      percentage: "100%",
      content: (
        <p className="mb-0">
          Heroes and warriors, it’s time for us to{" "}
          <strong>start the Avarik Saga metaverse game development</strong>. The
          curtain rises on the dawn of this new era.
        </p>
      ),
    },
  ];

  return (
    <Element name="roadmap-content">
      <div className="sc-home-roadmap pt-main" id="roadmap" ref={trigger}>
        <div className="container">
          <div className={`heading ${anim(1)}`}>
            <h2>The Roadmap</h2>
          </div>
          <div className={`box ${anim(2)}`}>
            <div className="box-inner">
              <div className="content">
                <ul className="list-unstyled roadmap">
                  {roadmap.map((item, i) => {
                    return (
                      <li className={`roadmap-item ${anim(3 + i)}`} key={i}>
                        <div className="roadmap-no">
                          {item.percentage} <span>Sold</span>
                        </div>
                        <div className="roadmap-content">{item.content}</div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className={`box box-roadmap-project ${anim(3)}`}>
            <div className="box-inner">
              <div className="content">
                <div className="row">
                  <div className={`col-md-6 ${anim(4)}`}>
                    <h3>September 2021</h3>
                    <ul>
                      <li>
                        The dawn of the new era is finally here. Explore through
                        the <strong>Avarik Roadmap</strong>,{" "}
                        <strong>Lite Paper</strong> and{" "}
                        <strong>Game Preview</strong>.
                      </li>
                      <li>
                        Start collecting your spoils of war with the{" "}
                        <strong>official release of the Avarik Saga NFT</strong>
                        !
                      </li>
                    </ul>
                  </div>
                  <div className={`col-md-6 ${anim(5)}`}>
                    <h3>October 2021</h3>
                    <ul>
                      <li>
                        Your awaited <strong>White Paper</strong> and{" "}
                        <strong>Game Design</strong> will be released.
                      </li>
                      <li>
                        Avarik Heroes, brace yourselves as{" "}
                        <strong>
                          4444 NFT Weapons will be released randomly
                        </strong>{" "}
                        exclusively for <strong>Avarik Saga NFT HODLers</strong>
                        .
                      </li>
                    </ul>
                  </div>
                  <div className={`col-md-6 ${anim(6)}`}>
                    <h3>November 2021</h3>
                    <ul>
                      <li>
                        Great Heroes deserve the <strong>"best armors"</strong>.
                      </li>
                      <li>
                        Stay tuned for the launch of{" "}
                        <strong>1st Avarik Saga Game Play Trailer</strong>!
                      </li>
                    </ul>
                  </div>
                  <div className={`col-md-6 ${anim(7)}`}>
                    <h3>December 2021</h3>
                    <ul>
                      <li>
                        Great Heroes deserve the{" "}
                        <strong>"best companions"</strong>.
                      </li>
                      <li>
                        As the suspense grows stronger, save the date for the{" "}
                        <strong>2nd Avarik Saga Game Play Trailer</strong>!
                      </li>
                    </ul>
                  </div>
                  <div className={`col-12 ${anim(8)}`}>
                    <h3>Avarik Saga Game</h3>
                    <p className="mb-0">
                      <strong>P2E game where you can earn $AVRK token</strong>{" "}
                      by playing the game regularly will be{" "}
                      <strong>released in Q2 2022</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default HomeRoadmap;
