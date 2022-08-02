import React from 'react'
import { useScrollAnim } from 'components/hooks/hooks'
import AvarikTitle from 'components/avarik-saga/avarik-title'

import loreBg from '../../../assets/img/factionLore/loreBg.png'

import ignisLogo from '../../../assets/img/factionLore/ignisLogo.svg'
import glaciaLogo from '../../../assets/img/factionLore/glaciaLogo.svg'
import terraLogo from '../../../assets/img/factionLore/terraLogo.svg'

import bgMapIgnis from '../../../assets/img/factionLore/bgMapIgnis.svg'
import bgMapGlacia from '../../../assets/img/factionLore/bgMapGlacia.svg'
import bgMapTerra from '../../../assets/img/factionLore/bgMapTerra.svg'

import bottomLine from '../../../assets/img/factionLore/bottomLine.svg'
import bottomLineMobile from '../../../assets/img/factionLore/bottomLineMobile.svg'


export default function LoreSection({ title, description, logo }) {
    const [trigger, anim] = useScrollAnim()


    let imageLogo = logo === 'ignis' ? ignisLogo : logo === 'glacia' ? glaciaLogo : terraLogo

    let imageLogoBg = logo === 'ignis' ? bgMapIgnis : logo === 'glacia' ? bgMapGlacia : bgMapTerra

    return (
        <section
            className={`lore-section pb-5 d-flex align-items-center`}
            ref={trigger}
            style={{
                backgroundImage: `url(${loreBg})`,
            }}
        >
            <div className="container-xxl p-auto p-xs-0">
                <div className="d-flex justify-content-center w-100 mb-0 mb-md-5">
                    <AvarikTitle title={'Lore'} />
                </div>
                <div className={`row  mb-3 mb-md-5 ${anim()}`}>
                    <div
                        className="col-lg-5 loreleft"
                        style={{
                            backgroundImage: `url(${imageLogoBg})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                        }}
                    >
                        <div className="w-100 d-flex justify-content-center align-items-center flagimage">
                            <img src={imageLogo} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-7 wrapdesc px-4 px-md-auto" >
                        <h2 className='mb-3 mb-md-4'>{title}</h2>
                        <div className="desc" dangerouslySetInnerHTML={{ __html: description }} />
                    </div>
                </div>

                <div className="w-100 text-center d-none d-sm-block">
                    <img src={bottomLine} className='img-fluid bottomline' alt="" />
                </div>
                <div className="w-100 text-center d-block d-sm-none px-4 px-md-auto">
                    <img src={bottomLineMobile} className='img-fluid bottomline' alt="" />
                </div>
            </div>
        </section>
    )
}
