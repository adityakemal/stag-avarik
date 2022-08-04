import classes from "./VortemShardsMechanism.module.scss"
import AvarikTitle from "../../avarik-saga/avarik-title"
import { useScrollAnim } from "../../hooks/hooks"
import AvarikDesc from "../../avarik-saga/AvarikDesc/AvarikDesc"
import Claim from "./assets/Claim.png"
import Staking from "./assets/Staking.png"
import Utilize from "./assets/Utilize.png"
import clsx from "clsx"

const Divider = () => (
  <div className={classes.divider}>
    <div className={classes.smallDiamond} />
    <div className={classes.dividerLine} />
    <div className={classes.smallDiamond} />
  </div>
)

const VortemShardsMechanism = () => {
  const [trigger, anim] = useScrollAnim()

  return (
    <section className={classes.root} ref={trigger}>
      <div className={classes.title}>
        <AvarikTitle
          title="Mechanism"
          titleClassName={clsx(anim(1))}
          variant="white"
        />
      </div>
      <div className="row">
        <div className={clsx("col-md-4 col-sm-6", classes.item)}>
          <img src={Staking} alt="" className="img-fluid" />
          <div className={classes.dashedBox}>1</div>
          <h2>Stake & Earn</h2>
          <Divider />
          <AvarikDesc classnames={classes.desc}>
            Send your NFT warriors to sharpen their skills, defeat monsters, and
            hoist your faction’s worth
          </AvarikDesc>
        </div>
        <div className={clsx("col-md-4 col-sm-6", classes.item)}>
          <img src={Claim} alt="" className="img-fluid" />
          <div className={classes.dashedBox}>2</div>
          <h2>Claim</h2>
          <Divider />
          <AvarikDesc classnames={classes.desc}>
            Prove your prowess by winning Quests and claiming Vortem Shards
          </AvarikDesc>
        </div>
        <div
          className={clsx(
            "col-md-4 col-sm-6 offset-md-0 offset-sm-3",
            classes.item
          )}
        >
          <img src={Utilize} alt="" className="img-fluid" />
          <div className={classes.dashedBox}>3</div>
          <h2>Utilize</h2>
          <Divider />
          <AvarikDesc classnames={classes.desc}>
            Leverage Vortem Shards to get exclusive items that set your heroes
            apart, and wait for the reveal of more surprises!
          </AvarikDesc>
        </div>
      </div>
    </section>
  )
}

export default VortemShardsMechanism
