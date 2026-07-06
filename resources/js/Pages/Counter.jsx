import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="container" style={{ padding: '20px', maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
      <Head title="Counter"/>
      <h1>Counter App</h1>
      
      {/* ส่วนแสดงผลตัวเลขจาก State */}
      <h5 style={{ backgroundColor: '#17a2b8', color: 'white', fontSize: '3rem', padding: '10px', borderRadius: '8px', margin: '20px 0' }}>
        {count}
      </h5>

      {/* ปุ่มกดเรียกฟังก์ชันกระทำกับ State */}
      <div style={{ display: 'flex', justifyContent: 'space-around', gap: '10px' }}>
        <button onClick={decrement} style={{ padding: '10px 20px', backgroundColor: '#ffc107', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          ลด
        </button>
        <button onClick={reset} style={{ padding: '10px 20px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          รีเซ็ท
        </button>
        <button onClick={increment} style={{ padding: '10px 20px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          เพิ่ม
        </button>
      </div>
    </div>
  );
}