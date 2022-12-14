import React, { useEffect, useState } from "react";
import AsicsItem from "../componets/mineria/asics";
import axios from 'axios';


const MineriaPage = (props) => {
    const [loading, setLoading] = useState(false)
    const [mineria, setMineria] = useState([])
    useEffect(() => {
        const cargarMineria = async () => {
            setLoading(true);
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/mineria`);
            console.log(process.env.REACT_APP_API_URL)
            setMineria(response.data)
            setLoading(false)
        }
        cargarMineria();

    }, []);



    return (
        <div>
            <div class='barraseparar'></div>
            <div id='titulos'>
                <h2>Mineria con GPU</h2>
            </div>
            <div class='barraseparar'></div>
            <section className="holder"> </section>
            <div class='barraseparar'></div>

            <div className="center">
                {
                    loading ? (
                        <div class="item">
                            <i class="loader --1"></i>
                        </div>
                    ) : (

                        mineria.map(item => <AsicsItem key={item.id}
                            name={item.nombre}
                            price={item.precio}
                            power={item.potencia}
                            imagen={item.imagen}
                            type={item.tipo}
                            unitpower={item.unidadpotencia}
                            profit={item.ganancia}
                            consumption={item.consumo}


                        />)
                    )
                }
            </div>
           
        </div>
    );
}

export default MineriaPage;