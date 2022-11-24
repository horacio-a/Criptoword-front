import React, { useEffect, useState } from "react";
import axios from 'axios';
import Boreditem from "../componets/nft/Boreditem";
import CryptoPunksitem from "../componets/nft/CryptoPunks";

const NFTPage = (props) => {
    const [loading, setLoading] = useState(false)
    const [NFT, setNFT] = useState([])
    useEffect(() => {
        const cargarNFT = async () => {
            setLoading(true);
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/NFT`);
            setNFT(response.data)
            setLoading(false)
        }
        cargarNFT();

    }, []);



    return (
        <section className="holder nft">
            <div class='barraseparar'></div>
            <h2 className="titulo">NFT's</h2>
            <div class='barraseparar'></div>
            <h2 className="titulo">Bored</h2>
            <div className="center">

                {
                    loading ? (
                        <div class="item">
                            <i class="loader --1"></i>
                        </div>

                    ) : (

                        NFT.map(item => <Boreditem key={item.id}
                            name={item.nombre}
                            price={item.precio}
                            coin={item.Moneda}
                            imagen={item.imagen}
                            owmer={item.propietario}
                            collection={item.coleccion}

                        />)
                    )
                }
            </div>

            <h2 className="titulo">CryptoPunks</h2>
            <div className="center">

                {
                    loading ? (
                        <div class="item">
                            <i class="loader --1"></i>
                        </div>

                    ) : (

                        NFT.map(item => <CryptoPunksitem key={item.id}
                            name={item.nombre}
                            price={item.precio}
                            coin={item.Moneda}
                            imagen={item.imagen}
                            owmer={item.propietario}
                            collection={item.coleccion}

                        />)
                    )
                }
            </div>

        </section>
    );
}
export default NFTPage;


