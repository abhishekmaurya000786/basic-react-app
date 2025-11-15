import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Cart from './components/Cart';
import Products from './components/Products';
import ThemeToggle from './components/ThemeToggle';
const App = () => {
return (
<Provider store={store}>
<div className="p-6">
<ThemeToggle />
<Products />
<Cart />
</div>
</Provider>
);
};
export default App;