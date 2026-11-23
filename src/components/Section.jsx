// Komponen reusable: pembungkus setiap bagian halaman (menerima props id, judul, children)
export default function Section({ id, judul, children }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-judul`}>
      <h2 id={`${id}-judul`}>{judul}</h2>
      {children}
    </section>
  );
}
