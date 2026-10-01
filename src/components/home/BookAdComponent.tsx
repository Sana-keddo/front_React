import Image from "next/image";
import Link from "next/link";

export default function BookAdComponent() {
    return (
        <section className="my-12 max-w-7xl mx-auto px-4">
            <div className="relative rounded-2xl overflow-hidden shadow-lg bg-[#d7a573] text-white p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
                
                <div className="mb-6 md:mb-0 md:max-w-xl text-center md:text-right">
                    <span className="bg-amber-500 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                        عرض خاص
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-2">
                        اكتشف عوالم جديدة من القراءة
                    </h2>
                    <p className="text-amber-100 text-sm md:text-base mb-6">
                        تصفح مئات الكتب الأدبية والعلمية وتعرف على أحدث الإصدارات المضافة لمكتبتنا الرقمية بكل سهولة.
                    </p>
                    <Link 
                        href="/books-list" 
                        className="inline-block bg-white text-amber-900 font-semibold px-6 py-3 rounded-xl shadow hover:bg-amber-50 transition-colors"
                    >
                        تصفح الكتب الآن
                    </Link>
                </div>

                <div className="relative w-full md:w-[350px] h-[200px] rounded-xl overflow-hidden shadow-md">
                    <Image
                        src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80"
                        alt="Book Banner"
                        fill
                        className="object-cover"
                    />
                </div>

            </div>
        </section>
    );
}