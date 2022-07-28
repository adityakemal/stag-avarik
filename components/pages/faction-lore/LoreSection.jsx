import React from 'react'
import AvarikTitle from 'components/avarik-saga/avarik-title'

import loreBg from '../../../assets/img/factionLore/loreBg.png'

import ignisLogo from '../../../assets/img/factionLore/ignisLogo.svg'
import glaciaLogo from '../../../assets/img/factionLore/glaciaLogo.svg'
import terraLogo from '../../../assets/img/factionLore/terraLogo.svg'

import bgMapIgnis from '../../../assets/img/factionLore/bgMapIgnis.svg'
import bgMapGlacia from '../../../assets/img/factionLore/bgMapGlacia.svg'
import bgMapTerra from '../../../assets/img/factionLore/bgMapTerra.svg'

import bottomLine from '../../../assets/img/factionLore/bottomLine.svg'


export default function LoreSection({ title, description, logo }) {

    let imageLogo = logo === 'ignis' ? ignisLogo : title === 'glacia' ? glaciaLogo : terraLogo

    let imageLogoBg = logo === 'ignis' ? bgMapIgnis : title === 'glacia' ? bgMapGlacia : bgMapTerra

    return (
        <section
            className='lore-section pt-5 pb-4'
            style={{
                backgroundImage: `url(${loreBg})`,
            }}
        >
            <div className="container-fluid">
                <div className="d-flex justify-content-center w-100 mb-5">
                    <AvarikTitle title={'Lore'} />
                </div>
                <div className="row row-5 mb-5">
                    <div
                        className="col-md-5"
                        style={{
                            backgroundImage: `url(${imageLogoBg})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center'
                        }}
                    >
                        <div className="w-100 d-flex justify-content-center">
                            <img src={imageLogo} alt="" />
                        </div>
                    </div>
                    <div className="col-md-7 ">
                        <h2 className='desctitle'>{title}</h2>
                        <div className="desc" dangerouslySetInnerHTML={{ __html: description }} />
                    </div>
                </div>

                <div className="w-100 text-center">
                    <img src={bottomLine} className='img-fluid bottomline' alt="" />
                </div>
            </div>
        </section>
    )
}
