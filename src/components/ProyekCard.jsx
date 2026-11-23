import { useState } from 'react';
import Button from './Button.jsx';

export default function ProyekCard({ proyek, onHapus }) {
  // State lokal: apakah detail sedang ditampilkan
  const [terbuka, setTerbuka] = useState(false);

  return (
    <li className="kartu proyek">
      <h3>{proyek.judul}</h3>
      <p className="teknologi">{proyek.teknologi}</p>

      {/* Conditional rendering: detail hanya muncul saat terbuka */}
      {terbuka && (
        <div className="detail">
          <p>{proyek.deskripsi}</p>
          {proyek.link && (
            <a href={proyek.link} target="_blank" rel="noopener noreferrer">
              Buka proyek
            </a>
          )}
        </div>
      )}

      <div className="aksi">
        <Button variant="garis" aria-expanded={terbuka} onClick={() => setTerbuka(!terbuka)}>
          {terbuka ? 'Sembunyikan detail' : 'Lihat detail'}
        </Button>
        <Button variant="bahaya" onClick={() => onHapus(proyek.id)}>
          Hapus
        </Button>
      </div>
    </li>
  );
}
