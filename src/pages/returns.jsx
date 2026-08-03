import React from 'react';

export default function ReturnsPolicy() {
  return (
    <div style={{
      maxWidth: '800px', 
      margin: '6rem auto', 
      padding: '0 2rem', 
      direction: 'rtl', 
      fontFamily: 'Tajawal, sans-serif',
      lineHeight: '1.8',
      color: '#333'
    }}>
      <style>{`
        .policy-header { text-align: center; margin-bottom: 4rem; }
        .policy-header h1 { font-family: 'Amiri', serif; font-size: 2.5rem; color: #452829; }
        .policy-header div { width: 50px; height: 2px; background: #9d8461; margin: 1rem auto; }
        
        .policy-section { margin-bottom: 2.5rem; }
        .policy-section h3 { color: #452829; font-size: 1.2rem; margin-bottom: 1rem; border-right: 3px solid #9d8461; padding-right: 15px; }
        .policy-section p { color: #666; font-size: 0.95rem; }
        
        .important-note { background: #fdfaf7; border: 1px solid #f0ebe5; padding: 1.5rem; border-radius: 4px; margin-top: 2rem; }
      `}</style>

      <div className="policy-header">
        <h1>سياسة الاستبدال والاسترجاع</h1>
        <div></div>
        <p>نحن في SamPerfume نهتم برضاكم التام وضمان جودة منتجاتنا</p>
      </div>

      <div className="policy-section">
        <h3>1. الفترة الزمنية</h3>
        <p>يمكنكم تقديم طلب الاستبدال أو الاسترجاع خلال 3 أيام فقط من تاريخ استلام الطلب.</p>
      </div>

      <div className="policy-section">
        <h3>2. شروط وحالات الاسترجاع والاستبدال</h3>
        <p>
          نظراً لطبيعة المنتجات (عطور)، فإن الاسترجاع أو الاستبدال يتم <strong>حصرياً</strong> في حال وجود خلل مصنعي أو مشكلة بالمنتج، مثل:
        </p>
        <ul style={{ paddingRight: '1.2rem', color: '#666', fontSize: '0.95rem', marginTop: '0.5rem' }}>
          <li>وصول العبوة أو الزجاجة مكسورة.</li>
          <li>وجود عطل في مضخة العطر (البخاخ لا يرش).</li>
          <li>وجود خلل أو تسريب واضح في العطر.</li>
        </ul>
      </div>

      <div className="policy-section">
        <h3>3. التغيير لعدم الرغبة</h3>
        <p>نعتذر عن استرجاع أو استبدال أي منتج لمجرد عدم رغبة العميل أو عدم تناسب الرائحة مع ذوقه الشخصي بعد فتح المنتج.</p>
      </div>

      <div className="policy-section">
        <h3>4. رسوم التوصيل</h3>
        <p>في حال وجود عيب مصنعي أو خلل بالزجاجة أو وصول منتج خاطئ، نتحمل نحن كافة تكاليف التوصيل والشحن كاملة.</p>
      </div>

      <div className="important-note">
        <strong>ملاحظة هامة:</strong> عينات العطور (Samples) والتقسيمات الصغيرة غير قابلة للاسترجاع أو الاستبدال نهائياً لضمان الجودة والسلامة الصحية.
      </div>
    </div>
  );
}
