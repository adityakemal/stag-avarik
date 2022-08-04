import AvarikTitle from "../../avarik-saga/avarik-title"
import { useScrollAnim } from "../../hooks/hooks"
import classes from "./VortemShardsCover.module.scss"
import AvarikDesc from "../../avarik-saga/AvarikDesc/AvarikDesc"
import VortemShard from "../../../assets/img/vortemShards/vortem_shard.png"

const VortemShardsCover = () => {
  const [trigger, anim] = useScrollAnim()

  return (
    <section className={classes.root} ref={trigger}>
      <img src={VortemShard} alt="" className={classes.shard} />
      <AvarikTitle
        title="Vortem Shards"
        titleClassName={`${anim(1)}`}
        variant="white"
      />
      <AvarikDesc classnames={classes.desc}>
        Vortem Shards (AVTS) is the pilot version of Avarik Saga’s official
        in-game currency, $VORTEM (AVTM), that you can earn by undertaking
        various Quests.
      </AvarikDesc>
    </section>
  )
}

export default VortemShardsCover
