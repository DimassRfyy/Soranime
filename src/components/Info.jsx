import { FaFacebook, FaInstagram, FaCoffee, FaGithub } from "react-icons/fa";

const Info = () => {
    return (
        <div className="p-4 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-extrabold mb-4">Information</h2>
            <p className="text-white-700 mb-4">
                Selamat datang di <span className="font-semibold">Soranime</span>. Website baca komik online yang berisi berbagai koleksi manhua, manhwa, dan manga dengan terjemahan Bahasa Indonesia berkualitas. Nikmati pengalaman membaca komik favorit kamu dengan fitur yang mudah digunakan dan tampilan yang nyaman di semua perangkat.
            </p>
            
            <h3 className="text-lg font-semibold mb-2">Kontak Saya</h3>
            <div className="flex flex-col gap-2 items-center">
                <a className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition" href="https://www.facebook.com/dimas.rafi.522066" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="text-xl" />
                    <span>Facebook</span>
                </a>
                <a className="flex items-center gap-2 text-pink-500 hover:text-pink-700 transition" href="https://www.instagram.com/dimass_rfyy" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-xl" />
                    <span>Instagram</span>
                </a>
                <a className="flex items-center gap-2 text-white-500 hover:text-white-700 transition" href="https://github.com/DimassRfyy" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-xl" />
                    <span>Github</span>
                </a>
            </div>
            
            <div className="mt-6">
                <a className="inline-flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition" href="https://trakteer.id/dimassrfyy" target="_blank" rel="noopener noreferrer">
                    <FaCoffee className="text-xl" />
                    <span>Donasi di Trakteer</span>
                </a>
            </div>
        </div>
    );
};

export default Info;