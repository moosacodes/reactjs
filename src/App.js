import React from 'react';
import Header from './components/header'; // Import Header
import Content from './components/content'; // Import Content

function App() {
    return (
        <div>
            <Header />  {/* Render Header */}
            <Content /> {/* Render Content */}
        </div>
    );
}

export default App;
