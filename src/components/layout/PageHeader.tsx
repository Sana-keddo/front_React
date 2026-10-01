import Link from 'next/link';
import { HiBookOpen } from "react-icons/hi";

function PageHeader() {
  return (
    <header className="bg-[#FEFDF9] border-b border-[#4A3C31]/10 fixed w-full z-50 top-0 start-0 shadow-sm">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4 flex-row-reverse">
        
        <div className="flex items-center gap-3">
          <button className="bg-[#C17A5B] hover:bg-[#b06a4b] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm">
            تسجيل الخروج
          </button>
          
          <div className="w-10 h-10 rounded-full bg-[#4A3C31]/10 flex items-center justify-center text-[#4A3C31] cursor-pointer hover:bg-[#4A3C31]/20 transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 font-medium text-[#4A3C31]">
           <a href="/Contact_us" className="hover:text-[#C17A5B] transition-colors"> اتصل بنا </a>
          <a href="/about" className="hover:text-[#C17A5B] transition-colors">حول المكتبة</a>
          <a href="/Favorite_books" className="hover:text-[#C17A5B] transition-colors">المفضلة</a>
          <Link href="/Books_list" className="hover:text-[#C17A5B] transition-colors">الكتب</Link>
          <Link href="/" className="hover:text-[#C17A5B] transition-colors">الرئيسية</Link>
        </nav>

        <div className="flex items-center gap-2 cursor-pointer">
            <div className="bg-[#C17A5B] text-white p-2 rounded-xl">
                <HiBookOpen size={24} />
            </div>
            <span className="text-2xl font-bold text-stone-800">كتابي</span>
        </div>
      

      </div>
    </header>
  );
}

export default PageHeader;

<Link 
                        href="/" 
                        className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
                    >
                        الرئيسية
                    </Link>