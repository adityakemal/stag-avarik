import classes from "./VortemShardsLore.module.scss"
import AvarikTitle from "../../avarik-saga/avarik-title"
import { useScrollAnim } from "../../hooks/hooks"
import AvarikDesc from "../../avarik-saga/AvarikDesc/AvarikDesc"
import vortemLore from "./assets/VortemLore.png"
import clsx from "clsx"
import VortemShard from "../../../assets/img/vortemShards/vortem_shard.png"

const VortemShardsLore = () => {
  const [trigger, anim] = useScrollAnim()

  return (
    <section className={clsx(classes.root, "row")} ref={trigger}>
      <div className={clsx("col-lg-4 col-md-12", classes.main)}>
        <AvarikTitle
          title="Lore"
          titleClassName={`${anim(1)}`}
          variant="dark"
        />
        <h2 className={classes.subtitle}>Avarus’ First Currency</h2>
        <img src={vortemLore} className="img-fluid d-block d-md-none" alt="" />
        <AvarikDesc color="dark" classnames={classes.desc}>
          During the Age of Gods, as an attempt to civilize and regulate
          humanity, the gods imparted the concept of currency to a peasant named
          Vortemus, the eponymous creator of Vortem Shards and its derivation,
          $VORTEM. The gods guided him to an uncharted cavern near what is known
          today as the Crus Mines of Tenebris. Bestowed with divine wisdom,
          Vortemus led a team of scholars and merchants to turn the rare and
          precious Amethite gems into the world’s first money form, an
          iridescent, tapering shard that symbolizes its legendary namesake.
        </AvarikDesc>
      </div>
      <div className={clsx(classes.imgContainer, "col-lg-8 d-none d-md-flex")}>
        <div>
          <img src={vortemLore} className="img-fluid" alt="" />
        </div>
      </div>
      <img src={VortemShard} alt="" className={classes.shard1} />
      <img src={VortemShard} alt="" className={classes.shard2} />
    </section>
  )
}

export default VortemShardsLore
