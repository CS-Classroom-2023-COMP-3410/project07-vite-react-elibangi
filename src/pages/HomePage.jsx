import { useState } from 'react';
import Counter from '../components/Counter';
import Card from '../components/Card';
import Button from '../components/Button';
import ShoppingCart from '../components/ShoppingCart';

function HomePage({ onNavigate, cart, setCart, products, setProducts}) {
    const [message, setMessage] = useState('Welcome to our React application!');
    const [showFeatures, setShowFeatures] = useState(false);


    // Handle counter value changes
    const handleCountChange = (newCount) => {
        if (newCount === 5) {
            setMessage('You reached 5! Great job!');
        } else if (newCount === 10) {
            setMessage('Wow! You reached 10!');
        } else if (newCount === 0) {
            setMessage('Counter reset to zero.');
        }
    };

    return (
        <div>
            <h1>Home Page</h1>
            <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
                <h2>{message}</h2>
                <p>This is a demonstration of a multi-page React application.</p>
                
                <div style={{ marginTop: '15px' }}>
                    <Button onClick={() => onNavigate('products')}>
                        View Products
                    </Button>
                </div>
            </div>
            {/* only display if cart at has at least one item */}
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                {cart.length > 0 ? (<ShoppingCart cart={cart} setCart={setCart} products = {products} setProducts={setProducts}/>) : (null) } 
            </div>
            

            <Counter initialValue={0} onCountChange={handleCountChange} />

            <div style={{ marginTop: '30px' }}>
                <Button
                    // onClick={() => setShowFeatures(!showFeatures)}
                    variant="secondary"
                >
                    {showFeatures ? 'Hide Features' : 'Show Features'}
                </Button>

                {showFeatures && (
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '20px',
                        marginTop: '20px'
                    }}>
                        {features.map((feature, index) => (
                            <Card
                                key={index}
                                title={feature.title}
                                description={feature.description}
                                imageUrl={feature.imageUrl}
                                actions={[
                                    {
                                        label: 'Learn More',
                                        onClick: () => setMessage(`You clicked on ${feature.title}!`),
                                        variant: 'primary'
                                    }
                                ]}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default HomePage;