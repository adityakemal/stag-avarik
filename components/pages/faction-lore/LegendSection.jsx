import React, { useState } from 'react'

import { useScrollAnim } from 'components/hooks/hooks'
import AvarikTitle from 'components/avarik-saga/avarik-title'


import knightButton from 'assets/img/factionLore/legendsSection/knightButton.svg'
import wizardButton from 'assets/img/factionLore/legendsSection/wizardButton.svg'
import marksmanButton from 'assets/img/factionLore/legendsSection/marksmanButton.svg'

import leftbutton from 'assets/img/factionLore/legendsSection/leftbutton.png'
import rightbutton from 'assets/img/factionLore/legendsSection/rightbutton.png'
import legendFrame from 'assets/img/factionLore/legendsSection/legendFrame.svg'

const data = [
    {
        type: 'knight',
        icon: knightButton,
        heroes: [
            {
                "name": "Legionaire",
                "subclass": "Legendary Knight",
                "img": "https://lh3.googleusercontent.com/gigtp8rqH60mjPucykVgqEJK4P3zXVybjexY2pz2AuVSrD7wj5UUq5NcEdRRsqO5EA-R2Q7oxB0GgSZ6Ju4C2D-ZdUw0Jh_Ak52WVUk"
            },
            {
                "name": "Dragon Knight",
                "subclass": "Legendary Knight",
                "img": "https://lh3.googleusercontent.com/bQye73RjCdpX57s5jRqgMNcJUwwvMST_eaGtj1oGxyiGv0jY-QLuNQ4sfpF79ikNahfFFurcmm1o0AhNgfG1nECtiyuaVWZT7mrc"
            },
            {
                "name": "Samurai",
                "subclass": "Legendary Knight",
                "img": "https://lh3.googleusercontent.com/Dhi261_2MnUkDRqDLhcoYFfBFD5e2bRo5f4_VMnKFnbvBdeKVCpJ6xJo6KhCk9edAsql0x1Ocaa_qcymCBwhy4HA61-l2tOVOfGfDQ"
            },
            {
                "name": "Arcane Knight",
                "subclass": "Legendary Knight",
                "img": "https://lh3.googleusercontent.com/p4Yn_wLbKCvVU6V7QEXhmCmD5GBs0Wc0G1tsgAGLb3MIf8UXnQGWVlMWYQeG5b2MmZl6f6tvRE_-UG0y0t-MCU4AjEn-twBEY1nrfQ"
            }
        ],
    },
    {
        type: 'wizard',
        icon: wizardButton,
        heroes: [
            {
                "name": "Thunder Lord",
                "subclass": "Legendary Wizard",
                "img": "https://lh3.googleusercontent.com/87CReAR3MWty6BU6LuNl5Ti5ZCCs9EjRD4VNQMJdHlB2L_YOeBPg46iRgBvvUEX526d03ApAKHZk0DrvNYm6896r62bt1MRcuyL5iFs"
            },
            {
                "name": "Fire Sorceress",
                "subclass": "Legendary Wizard",
                "img": "https://lh3.googleusercontent.com/VuIXJzAXYgFZOiGBOlSA0bnpjRWpDTkpunAV9O85ntZhzAoth6t4ZqIbXcrR6mjY9drnx-aTtINbNJOI19_DJW__FM-GIFU6xYsO59U"
            },
            {
                "name": "Dragon Mage",
                "subclass": "Legendary Wizard",
                "img": "https://lh3.googleusercontent.com/iOFyN_D4pmSvoSKK7-enUYHMxpzHUYMKCjyRA0PotRGpz2BWrKqBR3-oeujL2qiLr1tHQVqGDsMZNIPY4YtImuY6n8kbFWWeTJJq1g"
            },
            {
                "name": "Time Keeper",
                "subclass": "Legendary Wizard",
                "img": "https://lh3.googleusercontent.com/Hb_AfUw6VjTTm0dfkic9tYDDL7ZqHdyDk8brN7v0c2Wy6s3lMnpA6owU1X8h-wmv9lIRssUM-6QHfjU6TXENu4-xv0QJStac1QS6n1I"
            }
        ],
    },
    {
        type: 'marksman',
        icon: marksmanButton,
        heroes: [
            {
                "name": "Huntress",
                "subclass": "Legendary Marksman",
                "img": "https://lh3.googleusercontent.com/c8zjirY6hUVH2jxPWSCM4bFgnzUmFMXjinQebv0XJqWS-xZOKe47Kbgr1qzatlSO3PBwc1O0AuamUN9Sy6pJ9cPXHC0SnnVJQgAbDS0"
            },
            {
                "name": "Ranger",
                "subclass": "Legendary Marksman",
                "img": "https://lh3.googleusercontent.com/lS_xs8RyPqYjm47t1CpqB9MP5rnhZ3-0nr44asKJ9PE6d3GM2fPNRd9P8lPANArtDOUiK8uPT2tFY8ooooMnUaHsq6oveIui6q5j5g"
            },
            {
                "name": "Assassin",
                "subclass": "Legendary Marksman",
                "img": "https://lh3.googleusercontent.com/vwpdKYS3zsnvLVN0ySHX-Y4WLh87mEzo_NrnJsGgVOSHne8OyQureHbUoIzaQkrnX3Pgg5YsL8VAJlYMjg-CUTnOW-xvnsLEXRszjA"
            },
            {
                "name": "Ninja",
                "subclass": "Legendary Marksman",
                "img": "https://lh3.googleusercontent.com/eS6RZcyF5dLD9pS2YPKrRKrWV2YlUgLK99qlLAFRG57WcC_xM9ep28YTMB42iSypE9543uluVxcCqoQRsgVbPXvuHmMoqZK-t-ePFlY"
            }
        ],
    },
]

const dataGlacia = [
    {
        type: 'knight',
        icon: knightButton,
        heroes: [
            {
                "name": "High Templar",
                "subclass": "Legendary Knight",
                "img": "https://lh3.googleusercontent.com/1ZJ5lJKXODLgPYffs3tcftbld6XD4BZIjGKijmNsslHaAwIbnhTfu1RuOAX9XMcHMN7zRGOVZfqiPZzEV_PT--N8zSmpsiX3o4dqy6c"
            },
            {
                "name": "Duelist",
                "subclass": "Legendary Knight",
                "img": "https://lh3.googleusercontent.com/D_ao1jc715wYoC3UHdvdSfCuaT_qdI9Cjxn_gyDSwTVPipfH175Kn6jLvZR24efUdtStdvpMSKkOlJe9FENkn9JbGbDDvQUUS4wH"
            },
            {
                "name": "Paladin",
                "subclass": "Legendary Knight",
                "img": "https://lh3.googleusercontent.com/YGIKOjnjjYEIYaI_3uoGshhSig0hbdoNosRofG3v_AaYCuYn8sOSPVligvqAtXUIUQuXCjxJPdvWGy5TaLyb9LJ-uTC1Yv_irzQiIw"
            },
            {
                "name": "Lancer",
                "subclass": "Legendary Knight",
                "img": "https://lh3.googleusercontent.com/vgQ388fBURs-6ciuCgK-9-oAKhEv5ZuRRQodcSm6-aV1FlDCXpRrIh2Zi_uM5ce7U9aMbU6X7QolCfTADJMI2cAWTaJH07KE4Fqrhw"
            }
        ],
    },
    {
        type: 'wizard',
        icon: wizardButton,
        heroes: [
            {
                "name": "Priest",
                "subclass": "Legendary Wizard",
                "img": "https://lh3.googleusercontent.com/xktrvZCklnlWkPwX8DwKZL_snnyk7V92mOwde8_oS2HmK-e2T2gs0u2jeCtLjAMmNwoyscdRC_5TuzRepnaiGeZ187sQe5pY7gVd"
            },
            {
                "name": "Cleric",
                "subclass": "Legendary Wizard",
                "img": "https://lh3.googleusercontent.com/uFIWvRWohmG-3jps9_GUDZ5ocbktdWmwN3i_zbxsWkOuTGA-RKhKmxIO6zaBJDTs7zesgc9QBnbZvm_4UK-2P_nS_eMxJwJ6X1EvPA"
            },
            {
                "name": "Sealer",
                "subclass": "Legendary Wizard",
                "img": "https://lh3.googleusercontent.com/0frPWJODcKFqc-HD9eyM0vm1P67vfd7jxI5hwRa33DX7Ao7Xy1V3rImjmRRj-yMzSJpOGLTY8ZX1RlJgnNv5_j8n9t921CX7gdQGGHQ"
            },
            {
                "name": "Ice Wizard",
                "subclass": "Legendary Wizard",
                "img": "https://lh3.googleusercontent.com/3xDKqiYlKLEInQS6O6okMt8r1k8B-p7_upmRDCM8dChB4rCNrWVfgaywMlDEv_jU4LxBupttmbPllSarvH-KXEUhynuW6xcmIHTIwQ"
            }
        ],
    },
    {
        type: 'marksman',
        icon: marksmanButton,
        heroes: [
            {
                "name": "Beastmaster",
                "subclass": "Legendary Marksman",
                "img": "https://lh3.googleusercontent.com/fRyICzixIPbKrzImwYVTTdyz96TXyl8FI3yK01xyWo-doWmFx2Oid6q6-UuXnT-mKcYZGDmUxBJxV-jAQk57YTneY54aSF7JbiB6U4A"
            },
            {
                "name": "Seeker",
                "subclass": "Legendary Marksman",
                "img": "https://lh3.googleusercontent.com/yYXTLecPpApv030DfFdG9q1NZ_4J43XojtNUd-cBtNnR9lVGmv8y2DR_GTdZc3EiVcXpJsWy1flUsQr3VzaQrhQXIMkW66pWOfPBSQ"
            },
            {
                "name": "Pirate",
                "subclass": "Legendary Marksman",
                "img": "https://lh3.googleusercontent.com/0ubOl493BsBJhETruI2v_HguHeSlIDzCvivzOMg8mcDjsayEIt8zXCYEYbvzAXvYhc9KsEqhaRLWy2fTsQWM68Y7GFoxo6DoTtliIQ"
            },
            {
                "name": "Bard",
                "subclass": "Legendary Marksman",
                "img": "https://lh3.googleusercontent.com/p36AOVvX7gIlvNYNhSA590cUs8oNVArpPdSCJo4S5trcoq06oz1V0GA8i20KyZoztN7QrGfSTg7iBzk8XGFXO5P4ASTU2HbdJzoiUYo"
            }
        ],
    },
]

const dataTerra = [
    {
        type: 'knight',
        icon: knightButton,
        heroes: [
            {
                "name": "Barbarian",
                "subclass": "Legendary Knight",
                "img": "https://lh3.googleusercontent.com/tDARnL2WK0qGai5eG1IlfTNFUVMiHqvBalTcTaPO5IkASYV19LBjY_mOOaYUrO1A-NEESRQlY09HflbcMr-lIlTsL3HDJXocTB83nSg"
            },
            {
                "name": "Berserker",
                "subclass": "Legendary Knight",
                "img": "https://lh3.googleusercontent.com/RKu-EgUUms31CzYiE9os0VSrXDQm0W3g2XMbK8hLJQC4RSrzzoUVbt9PEQUClL54ZpPChFg_caolDEkgVymgT0_yM3CZ0B6qFZZA"
            },
            {
                "name": "Geomancer",
                "subclass": "Legendary Knight",
                "img": "https://lh3.googleusercontent.com/MKhmptiEuROc1m6WRH6RIQpoOXaT1eDbdmtX-og4hknKdn0-MPtY8djXYFCIcVfEG5xNQcY2VKfUxEH4r8m41eW--8qMw9B0eoMuFk8"
            },
            {
                "name": "Monk",
                "subclass": "Legendary Knight",
                "img": "https://lh3.googleusercontent.com/oMbDDq8CSvXbATFNrSlhO2yGVHPOdbkKbc-0b4J2Z-gKvrdg60HsY65KA7lCF68CrbFGXHt-mmPCAHpVWlYg7cN0Vchup0Qd_rGhzZU"
            }
        ],
    },
    {
        type: 'wizard',
        icon: wizardButton,
        heroes: [
            {
                "name": "Druid",
                "subclass": "Legendary Wizard",
                "img": "https://lh3.googleusercontent.com/N2hL9lkkBwOCn_f6B7XgSQG9zZFvt8AbxqpeuXvUDMDx2hEJDCdtmCf6ILtdyEVrxXGeZZEAx59dvlXt7OEteti58NG0GyknHYfiWA"
            },
            {
                "name": "Oracle",
                "subclass": "Legendary Wizard",
                "img": "https://lh3.googleusercontent.com/Q5oMxiGFKO5fpDWNsGfBvnljmoXFPH7UTCIZZIAuxOXh2jNhJMgglECX3av0d2KsYvYnPccGNBPWn80HHFEfe-fFqdowQZBR06gQ"
            },
            {
                "name": "Shaman",
                "subclass": "Legendary Wizard",
                "img": "https://lh3.googleusercontent.com/FRaVGRyNySDfZus4kuG16TkWqfidyyqW_84AXambpE7g0MTKioaI-YMPZBjIlxrXEwg1ZGG1Yzj_Pu2zjZjubU813X0zI28wniizbw"
            },
            {
                "name": "Earth Mage",
                "subclass": "Legendary Wizard",
                "img": "https://lh3.googleusercontent.com/04qUq_dl1XIQx_TgQuhINCKXo9Q5ttvyxAjgW7bSO36gGOp-nBqo88WgaPMqTlN4v4qprqRBLPhqG0A_e3g02cR0H83azoU261905LY"
            }
        ],
    },
    {
        type: 'marksman',
        icon: marksmanButton,
        heroes: [
            {
                "name": "Alchemist",
                "subclass": "Legendary Marksman",
                "img": "https://lh3.googleusercontent.com/zgctJm91PqhqIQPKIjx37kOF3jzAvu_XHSXmcue7A9ZdD-Ev096592bIVcmyxIQ8H198fHIQ3dEbmJljqNlF-rzmCBNPfuRi27Gg"
            },
            {
                "name": "Gunslinger",
                "subclass": "Legendary Marksman",
                "img": "https://lh3.googleusercontent.com/ONsopsLtcc3MHVNZKGIQYF9iceinl7dm-G_pbOQ78S0uZ8stUbFVSeWlDV0kagK7A9H8s0pZgNX3dQnAgeKSmmT6ABV_OUc0Wk8FAw"
            },
            {
                "name": "Tracker",
                "subclass": "Legendary Marksman",
                "img": "https://lh3.googleusercontent.com/cQQY2vkqPdYSS0ntsbUZz03aOAxcPInqDaAt_-61fb7w9fyCuaSotcgQ1zEJPQUsKdSeVG1tY5UkU8DtS7aPOd8oOOgzHNv1FoLa"
            },
            {
                "name": "Crossbowmen",
                "subclass": "Legendary Marksman",
                "img": "https://lh3.googleusercontent.com/V6Ox7BNPoVR_o2-tyyfAMwnnZL11xN4J1vjblW_ZdWgcMJ9_MBF_3gAWULLK0ll5LmO8N78if3ShdLstfeTiKwFFka-0V0AkafexPWI"
            }
        ],
    },
]


const dataTenebris = [
    {
        type: 'knight',
        icon: knightButton,
        heroes: [
            {
                "name": "Warlord",
                "subclass": "Legendary Knight",
                "img": "https://lh3.googleusercontent.com/YcsdhgL7-hQUcdq3Bv3TH6aoGP99S4c31zA2Lr9Nz2m1nnNpijzDL_RF5fy9xagF4hiUXT7BPvINDJV5R97Vi7-4aHrFoSO5k-9kNjY"
            },
            {
                "name": "Blood Knight",
                "subclass": "Legendary Knight",
                "img": "https://lh3.googleusercontent.com/KeQPEEOIBeT8we4sNgQOjEedNcoLmoZnkWBL3Za3GayS2R1Krqf4CJekxW8G3Yg4-Q9_cDLragL4acZ7ugNZiUXcVi6mbBLKH8En7w"
            },
            {
                "name": "Hell Knight",
                "subclass": "Legendary Knight",
                "img": "https://lh3.googleusercontent.com/nNZKIS51gxwXQZ_RA4H8VRHaJw6m6yZFe6kqYZ5P8r498MdjygluhsiZ8Uwr6qm4iXTZsMnCqe15fRfWpPwWVeUWXvtqAiW30buEwg"
            },
            {
                "name": "Death Knight",
                "subclass": "Legendary Knight",
                "img": "https://lh3.googleusercontent.com/ST63HKVS_fYIM9Lp_fpZOS-nAZXjlewpnPsOYBNnIMSLmQE6vJhYvy3Mz9-vSHRUCAfY1Sne1XMyPnb0dQMeK0PpD8XYZ4v5Wuzc"
            }
        ],
    },
    {
        type: 'wizard',
        icon: wizardButton,
        heroes: [
            {
                "name": "Thunder Lord",
                "subclass": "Legendary Wizard",
                "img": "https://lh3.googleusercontent.com/87CReAR3MWty6BU6LuNl5Ti5ZCCs9EjRD4VNQMJdHlB2L_YOeBPg46iRgBvvUEX526d03ApAKHZk0DrvNYm6896r62bt1MRcuyL5iFs"
            },
            {
                "name": "Fire Sorceress",
                "subclass": "Legendary Wizard",
                "img": "https://lh3.googleusercontent.com/VuIXJzAXYgFZOiGBOlSA0bnpjRWpDTkpunAV9O85ntZhzAoth6t4ZqIbXcrR6mjY9drnx-aTtINbNJOI19_DJW__FM-GIFU6xYsO59U"
            },
            {
                "name": "Dragon Mage",
                "subclass": "Legendary Wizard",
                "img": "https://lh3.googleusercontent.com/iOFyN_D4pmSvoSKK7-enUYHMxpzHUYMKCjyRA0PotRGpz2BWrKqBR3-oeujL2qiLr1tHQVqGDsMZNIPY4YtImuY6n8kbFWWeTJJq1g"
            },
            {
                "name": "Time Keeper",
                "subclass": "Legendary Wizard",
                "img": "https://lh3.googleusercontent.com/Hb_AfUw6VjTTm0dfkic9tYDDL7ZqHdyDk8brN7v0c2Wy6s3lMnpA6owU1X8h-wmv9lIRssUM-6QHfjU6TXENu4-xv0QJStac1QS6n1I"
            }
        ],
    },
    {
        type: 'marksman',
        icon: marksmanButton,
        heroes: [
            {
                "name": "Tinker",
                "subclass": "Legendary Marksman",
                "img": "https://lh3.googleusercontent.com/fplSca6eZZPFlI4YZhomEj5kQAsXKv9F0xd3DZebvAUb6gaPRP8yXOzDZjcFsnEO938lThidMiZ4VGTTE-Uunji8CiXwritLAOHReg"
            },
            {
                "name": "Inquisitor",
                "subclass": "Legendary Marksman",
                "img": "https://lh3.googleusercontent.com/F4IjGsvIqJuBkc_7uKC6PvoDp4iqPnGaagsIaA0AsAzFFtc_92gqk2Omg4_Sg5NfbfAvq9w-z0cL9bgUpSYhAClPrTE2rPYK6Y24"
            },
            {
                "name": "Raider",
                "subclass": "Legendary Marksman",
                "img": "https://lh3.googleusercontent.com/_89X0L2mjwqRSzmerIF2PNcQmt1WPh6JBb3M6HnlQMsUzeh1EHEB_14UBxgCBWENvexJajkzsImu8874AiE7NBnQUtSiU_imlUo6"
            },
            {
                "name": "Marauder",
                "subclass": "Legendary Marksman",
                "img": "https://lh3.googleusercontent.com/5YUmS3bkc-VYbb6HRFbEtWWExsX5nEP2ODWqqK9s-0-MrsKoM6xO3HjEkkK9jF9VFFY_fz7ykyxQsxzFv_GVXrRP8tHNMx64ObXS"
            }
        ],
    },
]


export default function LegendSection({ title }) {
    const [trigger, anim] = useScrollAnim()

    const [selectedHeroType, setSelectedHeroType] = useState(0)


    const handleNext = () => {
        if (selectedHeroType < (data.length - 1)) {
            setSelectedHeroType(selectedHeroType + 1)
        }
    }

    const handlePrev = () => {
        if (selectedHeroType > 0) {
            setSelectedHeroType(selectedHeroType - 1)
        }
    }

    return (
        <section className='sc-legend' ref={trigger}>
            <div className="container-fluid py-5">
                <div className="d-flex justify-content-center w-100 mb-5 pt-5">
                    <AvarikTitle title={title} variant={'white'} />
                </div>
                <div className={`w-100 box-heroes`}>
                    {
                        data[selectedHeroType]?.heroes?.map((res, i) => (
                            <div className={`wrapimage text-white text-center ${anim(i + 2, "revealInDown")}`} key={i} >
                                <img src={legendFrame} className='img-fluid frame ' alt="" />
                                <img src={res.img} className='img-fluid' alt="" />
                                <p className="name mt-3">
                                    {res?.name}
                                </p>
                                {/* <p className="desc">
                                    {res.subclass}
                                </p> */}
                            </div>
                        ))
                    }
                </div>

                <div className="wrapnavhero">
                    <div className={`d-flex align-items-center justify-content-center w-100`}>
                        <img className='buttonslide mx-3' src={leftbutton} alt="" onClick={handlePrev} />
                        {data.map((res, i) =>
                            <div
                                key={i}
                                className={`navbut mx-3 ${i === selectedHeroType && 'active'} `}
                                onClick={() => setSelectedHeroType(i)}
                            >
                                <img src={res.icon} alt="" />
                            </div>
                        )}
                        <img className='buttonslide mx-3' src={rightbutton} alt="" onClick={handleNext} />
                    </div>

                </div>

            </div>
        </section >
    )
}
