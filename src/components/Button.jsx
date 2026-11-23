// Komponen reusable: tombol dengan beberapa varian (utama, garis, bahaya)
export default function Button({ children, onClick, variant = 'utama', type = 'button', ...sisa }) {
  return (
    <button type={type} className={`btn btn-${variant}`} onClick={onClick} {...sisa}>
      {children}
    </button>
  );
}
