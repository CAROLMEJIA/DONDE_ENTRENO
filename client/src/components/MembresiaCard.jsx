import React from "react";
import logo from './estilos/logo nav/logoNav.png'
import { Link } from 'react-router-dom';
import './estilos/membershipCards.css'

const MembershipCard = (info) => {

    if (info.userls) {
        return (
            <div className="Card-Member">
                <div className="face front">
                    <h2 className="hmember">MEMBRESIA</h2>
                    <img
                        alt="HenryLogo"
                        className="img-cardMembership"
                        src={logo}
                    />
                    <h2 className="h-memberF">{info.type.toUpperCase()}</h2>
                </div>
                <div className="face back">
                    <h2 className="h-memberB">{info.type.toUpperCase()}</h2>
                    <p className="p-member">{info.description}</p>
                    <p className="p-member">{info.price} U$D</p>
                    <Link to={`/pago/${info.id}`}>
                        <div className="Link-pago">
                            SUBSCRIBIRME
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="Card-Member">
                <div className="face front">
                    <h2 className="hmember">MEMBRESIA</h2>
                    <img
                        alt="HenryLogo"
                        className="img-cardMembership"
                        src={logo}
                    />
                    <h2 className="h-memberF">{info.type.toUpperCase()}</h2>
                </div>
                <div className="face back">
                    <h2 className="h-memberB">{info.type.toUpperCase()}</h2>
                    <p className="p-member">{info.description}</p>
                    <p className="p-member">{info.price} U$D</p>
                    <Link to= '/loginUser'>
                        <div className="Link-pago">
                            SUBSCRIBIRME
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}

export default MembershipCard


