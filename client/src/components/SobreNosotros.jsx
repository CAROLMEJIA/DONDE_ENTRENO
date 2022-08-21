import React, {useEffect} from "react";
import NavBar from "./NavBar";
import Footer from './Footer';
import "./estilos/SobreNosotros.css";
import img from "./estilos/nosotros/img-gimnasio.jpeg";
import { useDispatch, useSelector } from "react-redux"
import { getGymInfo } from "../redux/actions.js"




export default function SobreNosotros(){

    const dispatch = useDispatch();
    const gymInfo = useSelector((state) => state.gymInfo);

    useEffect(() =>{
        dispatch(getGymInfo())
    },[])
    console.log(gymInfo)

    return(
        <div>
            <div>
                <NavBar />
             </div>

            <div className="contenedor-general">
            
            <img src={img} className="img-gym"></img>
                
                { gymInfo? gymInfo.map((g) =>{
                    return(
                        <div className="contenedor-info">

                            <p className="description">{g.description}</p>
                            
                            <div className="info">
                                <div className="div-cont">
                                    <h2 className="h2-t">Dirección</h2>
                                    <p className="address">{g.address}</p>
                                </div>
                                <div className="div-cont">
                                    <h2 className="h2-t">Teléfono</h2>
                                    <p className="phone">{g.phone}</p>
                                </div>
                                <div className="div-cont">
                                    <h2 className="h2-t">Horario</h2>
                                    <p className="horarios"> 7am - 21pm</p>
                                </div>
                               
                            </div>

                            
                        </div>
                    )


                })
                
                :null
            
            }

                    <h2 className="h2-text">ABIERTO TODOS LOS DÍAS</h2>
                

            
            </div>
         <Footer/>
        </div>
    )
}