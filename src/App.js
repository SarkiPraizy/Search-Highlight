import React, { useState } from 'react';
import './App.css';

const items = [
  'JavaScript programming',
  'HTML and CSS basics',
  'Frontend development',
  'Web design principles',
  'Dynamic content handling'
];

function App() {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value.toLowerCase());
  };

  const highlightText = (text, query) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
  };

  return (
    <div className="App">
      <h1>Search and Highlight</h1>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Type to search..."
      />
      <ul>
        {items
          .filter(item => item.toLowerCase().includes(query))
          .map((item, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: highlightText(item, query) }}></li>
          ))}
      </ul>
    </div>
  );
}

export default App;
