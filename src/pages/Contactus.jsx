import React from "react";
import { MapPin } from "lucide-react";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";

const CONTACT_ITEMS = [
  {
    icon: FaWhatsapp,
    label: "واتساب",
    value: "+970 599 077 193",
    href: "https://wa.me/message/6GBQWGLBSFR7A1",
  },
  {
    icon: MapPin,
    label: "الموقع",
    value: "سلفيت، فلسطين",
    href: null,
  },
];

export default function ContactUs() {
  return (
    <section className="cu-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700&display=swap');

        :root {
          --bob: #452829;
          --gold: #c9a96e;
          --ink: #2a1f1f;
          --gray: #7a7070;
          --border: #e8e2dc;
          --white: #fff;
          --off: #faf8f6;
        }

        .cu-section {
          padding: 80px 20px;
          background: var(--off);
          direction: rtl;
          font-family: 'Tajawal', sans-serif;
        }

        .cu-container {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .cu-header { margin-bottom: 50px; }
        .cu-header h2 { 
          font-size: 2.2rem; 
          color: var(--bob); 
          margin-bottom: 10px; 
          font-weight: 700;
        }
        .cu-header p { color: var(--gray); font-size: 1.1rem; }

        .cu-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
          margin-bottom: 50px;
        }

        .cu-card {
          background: var(--white);
          padding: 35px 25px;
          border-radius: 15px;
          border: 1px solid var(--border);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }

        .cu-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 35px rgba(69, 40, 41, 0.08);
          border-color: var(--gold);
        }

        .cu-icon-box {
          width: 60px;
          height: 60px;
          background: #f3ede7;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--bob);
          margin-bottom: 15px;
          transition: 0.3s;
        }

        .cu-card:hover .cu-icon-box {
          background: var(--bob);
          color: var(--white);
        }

        .cu-card h3 { font-size: 1.25rem; color: var(--ink); margin-bottom: 8px; }
        .cu-card p { color: var(--gray); font-size: 0.95rem; }

        .cu-footer {
          border-top: 1px solid var(--border);
          padding-top: 40px;
        }

        .cu-social-title {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #b0a8a8;
          margin-bottom: 20px;
          display: block;
        }

        .cu-social-links {
          display: flex;
          justify-content: center;
          gap: 15px;
        }

        .cu-social-item {
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: var(--bob);
          color: white;
          transition: 0.3s;
          font-size: 1.2rem;
          text-decoration: none;
        }

        .cu-social-item:hover {
          background: var(--gold);
          transform: scale(1.1);
        }

        @media (max-width: 600px) {
          .cu-header h2 { font-size: 1.8rem; }
        }
      `}</style>

      <div className="cu-container">
        <div className="cu-header">
          <h2>تواصل معنا</h2>
          <p>نحن هنا لمساعدتك في اختيار عطرك المفضل</p>
        </div>

        <div className="cu-grid">
          {CONTACT_ITEMS.map((item, idx) => {
            const Content = (
              <>
                <div className="cu-icon-box">
                  <item.icon size={28} />
                </div>
                <h3>{item.label}</h3>
                <p>{item.value}</p>
              </>
            );

            return item.href ? (
              <a key={idx} href={item.href} target="_blank" rel="noreferrer" className="cu-card">
                {Content}
              </a>
            ) : (
              <div key={idx} className="cu-card">
                {Content}
              </div>
            );
          })}
        </div>

        <div className="cu-footer">
          <span className="cu-social-title">تابعنا على</span>
          <div className="cu-social-links">
            <a href="https://instagram.com/sam.perfume" target="_blank" rel="noreferrer" className="cu-social-item">
              <FaInstagram />
            </a>
            <a href="https://facebook.com/share/1Li9qxxJYm" target="_blank" rel="noreferrer" className="cu-social-item">
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}