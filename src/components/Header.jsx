const MENU = [
  { id: 'profil', label: 'Profil' },
  { id: 'matkul', label: 'Mata Kuliah' },
  { id: 'proyek', label: 'Proyek' },
  { id: 'tentang', label: 'Tentang Aplikasi' },
];

export default function Header({ nama, nim }) {
  return (
    <header className="header">
      <div className="wadah header-isi">
        <p className="brand">
          {nama} <span>NIM {nim}</span>
        </p>
        <nav aria-label="Navigasi utama">
          <ul>
            {MENU.map((m) => (
              <li key={m.id}>
                <a href={`#${m.id}`}>{m.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
