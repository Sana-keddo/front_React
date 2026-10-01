import Link from "next/link";
import { FaBookOpen, FaHeart, FaEnvelope, FaShieldAlt, FaInfoCircle } from "react-icons/fa";

export default function PageFooter() {
    return (
        <footer className="bg-[#b56848] rounded-2xl shadow-sm border border-amber-100 m-4 mt-auto">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <div className="p-2 bg-white rounded-xl text-amber-900">
                            <FaBookOpen className="w-6 h-6" />
                        </div>
                        <span className="self-center text-2xl font-bold text-white whitespace-nowrap">كتابي</span>
                    </Link>

                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 gap-y-2">
                        <li>
                            <Link href="/about" className="hover:text-amber-800 hover:underline me-4 md:me-6 flex items-center gap-1.5">
                                <FaInfoCircle className="w-3.5 h-3.5 text-amber-700" />
                                حول المكتبة
                            </Link>
                        </li>
                        <li>
                            <Link href="/privacy" className="hover:text-amber-800 hover:underline me-4 md:me-6 flex items-center gap-1.5">
                                <FaShieldAlt className="w-3.5 h-3.5 text-amber-700" />
                                سياسة الخصوصية
                            </Link>
                        </li>
                        <li>
                            <Link href="/Favorite_books" className="hover:text-amber-800 hover:underline me-4 md:me-6 flex items-center gap-1.5">
                                <FaHeart className="w-3.5 h-3.5 text-amber-700" />
                                المفضلة
                            </Link>
                        </li>
                        <li>
                            <Link href="/Contact_us" className="hover:text-amber-800 hover:underline flex items-center gap-1.5">
                                <FaEnvelope className="w-3.5 h-3.5 text-amber-700" />
                                اتصل بنا
                            </Link>
                        </li>
                    </ul>
                </div>

                <hr className="my-6 border-amber-100 sm:mx-auto lg:my-8" />

                <span className="block text-sm text-white sm:text-center">
                    © 2026 <Link href="/" className="hover:underline text-amber-900 font-medium"></Link> جميع الحقوق محفوظة 
                </span>
            </div>
        </footer>
    );
}