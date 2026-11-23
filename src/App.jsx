import { useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Section from './components/Section.jsx';
import ProfilCard from './components/ProfilCard.jsx';
import SearchBar from './components/SearchBar.jsx';
import FilterButtons from './components/FilterButtons.jsx';
import MatkulList from './components/MatkulList.jsx';
import ProyekCard from './components/ProyekCard.jsx';
import ProyekForm from './components/ProyekForm.jsx';
import Penjelasan from './components/Penjelasan.jsx';
import { MATKUL } from './data/matkul.js';
import { PROYEK_AWAL } from './data/proyek.js';

const PROFIL = {
  nama: 'Silvi Anggraeni',
  nim: '1247050035',
  prodi: 'Informatika',
  fakultas: 'Sains dan Teknologi',
  kampus: 'UIN Sunan Gunung Djati Bandung',
  asal: 'Garut',
};

const PILIHAN_SKS = [
  { nilai: 'semua', label: 'Semua' },
  { nilai: '3', label: '3 SKS' },
  { nilai: '2', label: '2 SKS' },
];

export default function App() {
  const [kata, setKata] = useState('');
  const [sks, setSks] = useState('semua');
  const [proyek, setProyek] = useState(PROYEK_AWAL);

  const matkulTampil = MATKUL.filter((m) => {
    const cocokSks = sks === 'semua' || String(m.sks) === sks;
    const cocokKata = `${m.nama} ${m.dosen}`.toLowerCase().includes(kata.toLowerCase());
    return cocokSks && cocokKata;
  });

  const tambahProyek = (baru) => setProyek([...proyek, { id: Date.now(), ...baru }]);
  const hapusProyek = (id) => setProyek(proyek.filter((p) => p.id !== id));

  return (
    <>
      <Header nama={PROFIL.nama} nim={PROFIL.nim} />
      <main className="wadah">
        <h1 className="judul-utama">Portofolio Mahasiswa Informatika</h1>

        <Section id="profil" judul="Profil">
          <ProfilCard {...PROFIL} />
        </Section>

        <Section id="matkul" judul="Mata Kuliah Semester Ini">
          <div className="kontrol">
            <SearchBar
              nilai={kata}
              onUbah={setKata}
              label="Cari mata kuliah atau dosen"
              placeholder="Contoh: jaringan"
            />
            <FilterButtons pilihan={PILIHAN_SKS} aktif={sks} onPilih={setSks} />
          </div>
          <MatkulList daftar={matkulTampil} />
        </Section>

        <Section id="proyek" judul="Proyek">
          {proyek.length === 0 && <p className="kosong">Belum ada proyek. Tambahkan lewat formulir di bawah.</p>}
          <ul className="grid">
            {proyek.map((p) => (
              <ProyekCard key={p.id} proyek={p} onHapus={hapusProyek} />
            ))}
          </ul>
          <ProyekForm onTambah={tambahProyek} />
        </Section>

        <Penjelasan />
      </main>
      <Footer nama={PROFIL.nama} nim={PROFIL.nim} />
    </>
  );
}
