import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function VolumeToggle() {
  // สร้าง State เก็บสถานะการปิดเสียง (ค่าเริ่มต้นคือ false หมายถึงเปิดเสียงอยู่)
  const [isMuted, setIsMuted] = useState(false);

  // ฟังก์ชันสลับค่าสำหรับเปิด-ปิดเสียงเมื่อกดปุ่ม
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="container" style={{ padding: '5px 20px', maxWidth: '400px', margin: '50px auto', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <Head title="Volume Toggle" />
      <h2>ระบบเปิด-ปิดเสียง</h2>
      
      {/* การแสดงผลสถานะปัจจุบันตามค่าของ State */}
      <div style={{ margin: '30px 0', fontSize: '18px', fontWeight: 'bold' }}>
        สถานะปัจจุบัน: {' '}
        {isMuted ? (
          <span style={{ color: '#dc3545' }}>🔇 ปิดเสียง (Muted)</span>
        ) : (
          <span style={{ color: '#28a745' }}>🔊 เปิดเสียง (Unmuted)</span>
        )}
      </div>

      {/* ปุ่มสำหรับกดเปลี่ยนสถานะ State */}
      <button 
        onClick={toggleMute} 
        style={{
          padding: '12px 24px',
          fontSize: '16px',
          cursor: 'pointer',
          border: 'none',
          borderRadius: '25px',
          color: 'white',
          backgroundColor: isMuted ? '#dc3545' : '#28a745',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          transition: 'all 0.2s ease'
        }}
      >
        {isMuted ? '🔌 เปิดเสียง' : '🔇 ปิดเสียง'}
      </button>
    </div>
  );
}