import { Slider } from "@material-ui/core"
import { Input, NavTabs, TabContent, TabPane } from "components/anti"
import AvarikButton from "components/avarik-saga/avarik-button"
import AvarikTitle from "components/avarik-saga/avarik-title"
import { useScrollAnim } from "components/hooks/hooks"
import { useState } from "react"

const StakeAvrk = ({ setIsStaking }) => {
    const [trigger, anim] = useScrollAnim()
    const [input, setInput] = useState(0)
    const [balance] = useState(15329656.63)
    const [lock, setLock] = useState(47)
    return (
        <div className="sc-stake-avrk" ref={trigger}>
            <div className={`heading ${anim(1)}`}>
                <AvarikTitle
                    title="Stake AVRK"
                    variant="white"
                    className="mx-auto"
                />
            </div>
            <div className="box">
                <NavTabs
                    data={[
                        { name: "Flexible", target: "flexible" },
                        { name: "Locked", target: "locked" },
                    ]}
                    variant="pills"
                    className="stake-tabs"
                    wrapperClassName="stake-tabs-wrapper mw-sm"
                />
                <TabContent className="stake-tabs-content mw-sm">
                    <TabPane id="flexible" className="active">
                        <h6 className={`label ${anim(1)}`}>I want to stake</h6>
                        <div className={`input-stake-wrapper ${anim(2)}`}>
                            <Input
                                className="input-stake"
                                value={input.toLocaleString()}
                                onChange={(e) => setInput(e.target.value)}
                            />
                            <span onClick={() => setInput(balance)}>Max</span>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p className={anim(3)}>Est. APR: 44.68%</p>
                            <p className={anim(4)}>Balance: {balance.toLocaleString()}</p>
                        </div>
                        <p className={`warning-text ${anim(5)}`}>
                            Warning: be aware that there are always risks associated with staking contracts. You assume all responsibillity. Staking rewards enter a 12 month lock-up period after claiming
                        </p>
                        <AvarikButton
                            variant="dark"
                            className={`w-100 ${anim(6)}`}
                            onClick={() => setIsStaking(false)}
                            text="Approve For Staking"
                        />
                    </TabPane>
                    <TabPane id="locked">
                        <div className="d-flex justify-content-between">
                            <p className={anim(1)}>Lock for: {lock} weeks</p>
                            <p className={anim(2)}>Weight: 1.90</p>
                        </div>
                        <Slider
                            max={50}
                            value={lock}
                            onChange={(e, value) => setLock(value)}
                            className="lock-slider"
                        />
                        <h6 className={`label ${anim(3)}`}>I want to stake</h6>
                        <div className={`input-stake-wrapper ${anim(2)}`}>
                            <Input
                                className="input-stake"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                            />
                            <span onClick={() => setInput(balance)}>Max</span>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p className={anim(4)}>Est. APR: 44.68%</p>
                            <p className={anim(5)}>Balance: {balance.toLocaleString()}</p>
                        </div>
                        <p className={`warning-text ${anim(6)}`}>
                            Warning: be aware that there are always risks associated with staking contracts. You assume all responsibillity. Staking rewards enter a 12 month lock-up period after claiming
                        </p>
                        <AvarikButton
                            variant="dark"
                            className={`w-100 ${anim(7)}`}
                            onClick={() => setIsStaking(false)}
                            text="Approve For Staking"
                        />
                    </TabPane>
                </TabContent>
            </div>
        </div>
    )
}

export default StakeAvrk