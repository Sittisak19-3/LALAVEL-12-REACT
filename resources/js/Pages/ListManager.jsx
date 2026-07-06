import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function ListManager() {
  const [items, setItems] = useState([]);

  // ฟังก์ชันเพิ่มไอเทมใหม่เข้าไปใน Array State (สไลด์หน้า 29)
  const addItem = () => {
    setItems([...items, `Item ${items.length + 1}`]);
  };

  // ฟังก์ชันลบไอเทมโดยใช้ filter คัดออกตาม index (สไลด์หน้า 29)
  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="container" style={{ padding: '20px' }}>
      <Head title="List Manager" />
      <h1>State managed List</h1>
      
      {/* ปุ่มกดสำหรับเพิ่มไอเทม */}
      <button 
        onClick={addItem} 
        style={{ padding: '10px 20px', backgroundColor: '#0d6efd', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginBottom: '20px' }}
      >
        Add Item
      </button>

      {/* แผงแสดงรายการการ์ดรูปภาพแบบ Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
        {items.map((item, index) => (
          <div key={index} style={{ border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            {/* ดึงรูปจาก Picsum Cloud (สไลด์หน้า 29) */}
            <img 
              src={`https://picsum.photos/200/${100 + index}`} 
              alt="Random placeholder" 
              style={{ width: '100%', height: '150px', objectFit: 'cover' }}
            />
            <div style={{ padding: '15px', flexGrow: 1 }}>
              <h5 style={{ margin: '0 0 10px 0' }}>{item}</h5>
              <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
                This is a longer card with supporting text below as a natural lead-in to additional content.
              </p>
            </div>
            {/* ปุ่มกดลบไอเทมตัวนี้ออก */}
            <button 
              onClick={() => removeItem(index)} 
              style={{ padding: '8px', backgroundColor: '#dc3545', color: 'white', border: 'none', width: '100%', cursor: 'pointer' }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}