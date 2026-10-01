'use client';
import { TextInput } from "flowbite-react";
import { useRef, useState } from "react";
import { HiSearch } from "react-icons/hi";
import { 
    HiBookOpen, 
    HiClock, 
    HiBeaker, 
    HiHeart, 
    HiSparkles, 
    HiUser, 
    HiChip 
} from "react-icons/hi";

interface BooksFilterProps {
    getBooks: (subject: string, keyword: string | null) => void;
}

export default function BooksFilterComponent({ getBooks }: BooksFilterProps) {
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const searchTextRef = useRef<HTMLInputElement>(null);

    const categories = [
        { id: "fiction", name: "روايات وخيال", icon: HiBookOpen },
        { id: "history", name: "تاريخ", icon: HiClock },
        { id: "science", name: "علوم", icon: HiBeaker },
        { id: "romance", name: "رومانسية", icon: HiHeart },
        { id: "fantasy", name: "خيال علمي", icon: HiSparkles },
        { id: "biography", name: "سير ذاتية", icon: HiUser },
        { id: "programming", name: "حاسوب وبرمجة", icon: HiChip },
    ];

    const updateCategory = (cat: string) => {
        if (selectedCategory === cat) {
            setSelectedCategory('');
            getBooks('', searchTextRef.current?.value ?? '');
        } else {
            setSelectedCategory(cat);
            getBooks(cat, searchTextRef.current?.value ?? '');
        }
    };

    const handleSearchClick = () => {
        const keyword = searchTextRef.current?.value ?? '';
        getBooks(selectedCategory, keyword);
    };

    return (
        <section dir="rtl" className="bg-white/90 backdrop-blur-md p-6 md:p-8 rounded-3xl shadow-sm border border-amber-100/60 my-6 max-w-7xl mx-auto text-right">
            
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-amber-900">اختر تصنيف الكتاب</h3>
                {selectedCategory && (
                    <button 
                        onClick={() => updateCategory(selectedCategory)}
                        className="text-xs text-amber-700 hover:text-amber-900 font-medium bg-amber-50 px-3 py-1 rounded-full transition-colors"
                    >
                        إلغاء التحديد ✕
                    </button>
                )}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-6">
                {categories.map((item) => {
                    const IconComponent = item.icon;
                    const isSelected = selectedCategory === item.id;
                    return (
                        <button
                            key={item.id}
                            onClick={() => updateCategory(item.id)}
                            className={`flex flex-col items-center justify-center p-3.5 rounded-2xl transition-all duration-300 border ${
                                isSelected
                                    ? 'bg-amber-800 text-white border-amber-800 shadow-md scale-105'
                                    : 'bg-amber-50/40 text-amber-900/80 border-amber-100 hover:bg-amber-100/60 hover:border-amber-200'
                            }`}
                        >
                            <IconComponent className={`w-6 h-6 mb-2 ${isSelected ? 'text-white' : 'text-amber-700'}`} />
                            <span className="text-xs font-semibold text-center">{item.name}</span>
                        </button>
                    );
                })}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 items-center pt-2 border-t border-amber-100/50">
                <div className="w-full flex-1">
                    <TextInput
                        ref={searchTextRef}
                        id="search-book"
                        type="text"
                        icon={HiSearch}
                        placeholder="ابحث عن اسم الكتاب أو المؤلف..."
                        className="rounded-xl text-right"
                    />
                </div>
                <button 
                    onClick={handleSearchClick}
                    className="w-full sm:w-auto px-6 py-2.5 bg-amber-800 hover:bg-amber-900 text-white font-medium rounded-xl shadow-sm transition-colors text-sm"
                >
                    بحث متقدم
                </button>
            </div>

        </section>
    );
}