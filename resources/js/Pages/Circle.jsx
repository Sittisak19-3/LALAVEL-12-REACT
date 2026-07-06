import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function Circle() {
  const [items, setItems] = useState([1, 1, 1, 1, 1, 1, 1, 1]);
  const [color, setColor] = useState("blue");

  const onPressButton = () => { 
    setColor("red"); 
  };

  return (
    <div className="container" style={{ paddingTop: '20px', paddingLeft: '20px' }}>
      <Head title="Circle and state" />
      <h1>Circle and state</h1>
      
      <button className="btn btn-primary" onClick={onPressButton} style={{ marginBottom: '20px', padding: '8px 16px', backgroundColor: '#0d6efd', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}> 
        Change Color 
      </button>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {items.map((item, index) => (
          <div key={index}>
            <div 
              style={{ backgroundColor: color, width: '100px', height: '100px', borderRadius: '50%' }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}