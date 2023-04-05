import './App.css';
import ProductItem from './components/ProductItem';
import products from './data/productData';

function App() {
    return (
        <div className="App">
            {products.map((elt) =>
                <ProductItem
                    image={elt.image}
                    description={elt.description}
                    price={elt.price}
                />
            )}
        </div>
    );
};

export default App;
