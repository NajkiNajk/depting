import React from 'react';
import Nivea from '../../assets/Logos/Nivea_logo_zwart.jpg'
import Mona from '../../assets/Logos/Mona_logo_zwart.jpg'
import Transavia from '../../assets/Logos/Transavia_logo_zwart.jpg'
import Zalando from '../../assets/Logos/Zalando_logo_zwart.jpg'
import Tomtom from '../../assets/Logos/Tomtom_logo_zwart.jpg'
import Unilever from '../../assets/Logos/Unilever_logo_zwart.jpg'
import Adidas from '../../assets/Logos/Adidas_logo_zwart.jpg'
import Pathe from '../../assets/Logos/Pathe_logo_zwart.jpg'
import Abn from '../../assets/Logos/ABN_logo_zwart.jpg'
import Triumph from '../../assets/Logos/Triumph_logo_zwart.jpg'
import Microsoft from '../../assets/Logos/Microsoft_logo_zwart.jpg'
import Oxxio from '../../assets/Logos/Oxxio_logo_zwart.jpg'
import NN from '../../assets/Logos/NN_logo_zwart.jpg'
import Ziggo from '../../assets/Logos/Ziggo_logo_zwart.jpg'
import Walibi from '../../assets/Logos/Walibi_logo_zwart.jpg'
import KLM from '../../assets/Logos/KLM_logo_zwart.jpg'

import './Clients.scss'

const Clients = () => {

    return (
        <div className="back-clients">
            <span className="clients">
                CLIENTS
            </span>
            <div className="we-value">
                <span >
                    We value a great working relationship with our clients above all else. It’s<br /> why they often come to our parties. It’s also why we’re able to challenge,<br />and inspire them to reach for the stars.
                </span>
            </div>
            <div className="big-box">
                <div className="logos-zwart"><img src={Nivea} alt="nivea_log" /></div>
                <div className="logos-zwart"><img src={Mona} alt="nivea_log" /></div>
                <div className="logos-zwart"><img src={Transavia} alt="transavia_log" /></div>
                <div className="logos-zwart"><img src={Zalando} alt="zalando_log" /></div>

                <div className="logos-zwart"><img src={Tomtom} alt="nivea_log" /></div>
                <div className="logos-zwart"><img src={Unilever} alt="unilever_log" /></div>
                <div className="logos-zwart"><img src={Adidas} alt="adidas_log" /></div>
                <div className="logos-zwart"><img src={Pathe} alt="pathe_log" /></div>

                <div className="logos-zwart"><img src={Abn} alt="abn_log" /></div>
                <div className="logos-zwart"><img src={Triumph} alt="triumph_log" /></div>
                <div className="logos-zwart"><img src={Microsoft} alt="microsoft_log" /></div>
                <div className="logos-zwart"><img src={Oxxio} alt="oxxio_log" /></div>

                <div className="logos-zwart"><img src={NN} alt="nn_log" /></div>
                <div className="logos-zwart"><img src={Ziggo} alt="ziggo_log" /></div>
                <div className="logos-zwart"><img src={Walibi} alt="walibi_log" /></div>
                <div className="logos-zwart"><img src={KLM} alt="klm_log" /></div>
            </div>
        </div>
    )
}
export default Clients;