import MatkulItem from './MatkulItem.jsx';

export default function MatkulList({ daftar }) {
  // Conditional rendering: tampilkan pesan jika tidak ada hasil
  if (daftar.length === 0) {
    return <p className="kosong">Tidak ada mata kuliah yang cocok.</p>;
  }

  const totalSks = daftar.reduce((jumlah, m) => jumlah + m.sks, 0);

  return (
    <>
      <p className="info" role="status">
        Menampilkan {daftar.length} mata kuliah ({totalSks} SKS)
      </p>
      {/* List rendering dengan map() dan key */}
      <ul className="grid">
        {daftar.map((m) => (
          <MatkulItem key={m.id} nama={m.nama} sks={m.sks} dosen={m.dosen} />
        ))}
      </ul>
    </>
  );
}
