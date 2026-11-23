export default function ProfilCard({ nama, nim, prodi, fakultas, kampus, asal }) {
  const inisial = nama.split(' ').map((k) => k[0]).slice(0, 2).join('');
  const data = [
    ['NIM', nim],
    ['Program Studi', prodi],
    ['Fakultas', fakultas],
    ['Universitas', kampus],
    ['Asal', asal],
  ];

  return (
    <div className="kartu profil">
      <div className="avatar" aria-hidden="true">{inisial}</div>
      <div>
        <h3>{nama}</h3>
        <dl>
          {data.map(([label, isi]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{isi}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
