import React from "react";
import logo from './estilos/logo nav/1.png'
const MembershipCard = (info) => {
        return (
            <div className = "Card-Activity">
                <div className = "face front">
                    <img
                        alt = "imagen de activity"
                        className = "img-cardActivity"
                        src = {logo}
                    />
                    <h2 className = "h-activityF">{info.type}</h2>
                </div>
                <div className = "face back">
                    <p className = "p-activity">{info.description}</p>
                    <p className = "p-activity">{info.price}</p>
                    <div className = "Link-turnos">
                        SUBSCRIBIRME
                    </div>
                </div>
            </div>
        )
}

export default MembershipCard


