import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function FormExample() {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newFormData = { ...formData, [name]: value };
    setFormData(newFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="container" style={{ padding: '40px', maxWidth: '600px', margin: '0 auto' }}>
      <Head title="Form Example" />
      <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start' }}>
        
        {/* ฝั่งซ้าย: ฟอร์มสำหรับพิมพ์กรอกข้อมูล */}
        <div style={{ flex: 1 }}>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '15px' }}>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="Name" 
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="Email" 
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
            </div>
            <button type="submit" style={{ padding: '8px 16px', backgroundColor: '#0d6efd', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
              Submit
            </button>
          </form>
        </div>

        {/* ฝั่งขวา: แสดงผลลัพธ์จาก State ทันทีที่พิมพ์ */}
        <div style={{ flex: 1, padding: '10px', borderLeft: '2px solid #eee' }}>
          <h1 style={{ margin: '0 0 10px 0', fontSize: '24px' }}>{formData.name || "ชื่อจะแสดงตรงนี้"}</h1>
          <p style={{ margin: 0, color: '#666' }}>{formData.email || "อีเมลจะแสดงตรงนี้"}</p>
        </div>

      </div>
    </div>
  );
}