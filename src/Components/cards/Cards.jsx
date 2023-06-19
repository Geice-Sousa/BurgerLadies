import { BsCartPlus } from "react-icons/bs";
import {
  Button,
  CardInfo,
  CardPrice,
  CardsItens,
} from "./Cards.styled";
import burguer from "../../assets/hamburguer.png";


const Cards = ({ item, handleClick }) => {
  const { name, price, description } = item;

  
  return (
    <CardsItens>
      <CardInfo>
        <h3>{name}</h3>
        <img src={burguer} alt="Image" />
        <p>{description}</p>
      </CardInfo>
      <CardPrice>
        <p>R$ {price},00</p>
        <Button onClick={() => handleClick(item)}>
        <BsCartPlus size={27} weight="bold" color="#DDD9CE" />
        </Button>
      </CardPrice>
    </CardsItens>
  );
};

export default Cards;