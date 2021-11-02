import imgTotalSupply from 'assets/img/token/img_total-supply.png';
import { useScrollAnim } from 'components/hooks/hooks';


const AvaTokenTotalSupply = () => {
    const [trigger, anim] = useScrollAnim()
    return (
        <section className="total-supply" ref={trigger}>
            <div className="row">
                <div className="col-md-6 col-sm-12 title-wrapper">
                    <h2 className={anim(1)}>Total Supply</h2>
                    <h5 className={anim(2)}>(500,000,000)</h5>
                </div>
                <div className="col-md-6 col-sm-12">
                    <img src={imgTotalSupply} className={`img-total-supply ${anim(3)}`} />
                </div>
            </div>
        </section>
    )
}

export default AvaTokenTotalSupply;