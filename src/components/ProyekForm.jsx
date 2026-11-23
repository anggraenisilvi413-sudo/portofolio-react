import { useState } from 'react';
import Button from './Button.jsx';

export default function ProyekForm({ onTambah }) {
  const [judul, setJudul] = useState('');
  const [teknologi, setTeknologi] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [galat, setGalat] = useState('');

  // Event handling: submit formulir
  function kirim(e) {
    e.preventDefault();
    if (!judul.trim() || !deskripsi.trim()) {
      setGalat('Judul dan deskripsi wajib diisi.');
      return;
    }
    onTambah({
      judul: judul.trim(),
      teknologi: teknologi.trim() || '-',
      deskripsi: deskripsi.trim(),
      link: '',
    });
    setJudul('');
    setTeknologi('');
    setDeskripsi('');
    setGalat('');
  }

  return (
    <form className="kartu form" onSubmit={kirim}>
      <h3>Tambah Proyek</h3>
      <div className="field">
        <label htmlFor="p-judul">Judul proyek</label>
        <input id="p-judul" value={judul} onChange={(e) => setJudul(e.target.value)} maxLength={80} />
      </div>
      <div className="field">
        <label htmlFor="p-teknologi">Teknologi (opsional)</label>
        <input id="p-teknologi" value={teknologi} onChange={(e) => setTeknologi(e.target.value)} maxLength={80} />
      </div>
      <div className="field">
        <label htmlFor="p-deskripsi">Deskripsi</label>
        <textarea id="p-deskripsi" rows={3} value={deskripsi} onChange={(e) => setDeskripsi(e.target.value)} maxLength={300} />
      </div>
      {galat && <p className="galat" role="alert">{galat}</p>}
      <Button type="submit">Tambah Proyek</Button>
    </form>
  );
}
