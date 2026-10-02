export default function LatihanAudit() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Katalog Alat Laboratorium</h1>
      <img src="/next.svg" alt="Next.js Logo" width={120} height={24} />
      <p className="text-gray-700">Stok diperbarui setiap hari.</p>
      
      <div className="mt-4 flex items-center">
        <label htmlFor="cari-alat" className="sr-only">
          Cari alat
        </label>
        <input 
          id="cari-alat" 
          type="search" 
          className="border p-2" 
          placeholder="Cari alat..." 
        />
        <button 
          type="button" 
          aria-label="Cari" 
          className="ml-2 border p-2"
        >
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 16 16" 
            aria-hidden="true"
          >
            <circle cx="7" cy="7" r="5" stroke="currentColor" fill="none" />
          </svg>
        </button>
      </div>
    </main>
  );
}