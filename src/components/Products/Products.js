import Cards from "../Cards/Cards";
import { playlist } from "../../playlist"
import "./Products.css";

function Products(props){
    return( 
        <div className="Items">
            <h2> Les Produits</h2>
            <div className="wrapperCard">
                {playlist.map(function(value,key){
                    return (
                        <Cards 
                            key={key}             
                            cover={value.cover}
                            album={value.album}
                            track={value.track}
                            title={value.title}
                            artist={value.artist}
                            genre={value.genre}
                            annee={value.annee}
                            prix={value.prix}
                            quantity={value.quantity}
                            description={value.description}>
                        </Cards>
                    )
                })}
                
            </div>
        </div>
    );
};

export default Products;