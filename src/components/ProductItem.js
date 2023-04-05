const ProductItem = (props) => {
    return (
        <div>
            <img className="productItem__img" src={props.image} alt="" />
            <p className="productItem__description">{props.description}</p>
            <p className="productItem__price">{props.price}</p>
            {/* <a className="productItem__button" href="#"></a> */}
        </div>
    );
}

export default ProductItem;