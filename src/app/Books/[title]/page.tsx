"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import BooksModel from "@/models/BooksModel";
import { FaBook, FaUser, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import AddToFavoriteButton from "@/components/shared/AddToFavoriteButton";

export default function BookDetailsPage() {
    const params = useParams();
    const bookTitle = decodeURIComponent((params?.title as string) || "");
    
    const [book, setBook] = useState<BooksModel | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!bookTitle) return;

        async function fetchBookDetails() {
            try {
                const res = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(bookTitle)}&limit=1`);
                const data = await res.json();
                if (data.docs && data.docs.length > 0) {
                    setBook(data.docs[0]);
                }
            } catch (error) {
                console.error("Error fetching book details:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchBookDetails();
    }, [bookTitle]);

    return (
        <div className="min-h-screen flex flex-col bg-amber-50/20 text-gray-800" suppressHydrationWarning>
            <main className="flex-grow container mx-auto px-4 py-12">
                <div className="max-w-3xl my-16 mx-auto mb-6">
                    <Link href="/Books_list" className="inline-flex items-center gap-2 text-sm font-medium text-[#8B4513] hover:underline">
                        <FaArrowRight className="w-4 h-4" />
                        العودة لقائمة الكتب
                    </Link>
                </div>

                <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-sm border border-amber-100 p-8 md:p-12">
                    {loading ? (<div className="text-center py-20 text-amber-900 font-medium">جاري تحميل تفاصيل الكتاب...</div>) : book ? (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                            {/* غلاف الكتاب */}
                            <div className="relative w-full h-80 bg-amber-50/50 rounded-2xl overflow-hidden flex items-center justify-center p-2 border border-amber-100/40 shadow-inner">
                                {(book.cover_i && book.cover_i > 0) || (book.cover_id && book.cover_id > 0) ? (
                                    <Image
                                        src={`https://covers.openlibrary.org/b/id/${book.cover_i || book.cover_id}-L.jpg`}
                                        alt={book.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-contain p-1"
                                    />
                                ) : (
                                    <div className="flex flex-col items-center justify-center h-full text-xs text-amber-800/60 font-medium">
                                        <FaBook className="w-8 h-8 mb-2 opacity-40" />
                                        <span>لا يوجد غلاف</span>
                                    </div>
                                )}
                            </div>

                            {/* معلومات الكتاب */}
                            <div className="md:col-span-2 space-y-4">
                                <h1 className="text-2xl md:text-3xl font-bold text-amber-900">{book.title}</h1>
                                
                                <div className="flex items-center gap-2 text-gray-600 text-sm">
                                    <FaUser className="text-[#8B4513]" />
                                    <span className="font-medium">المؤلف:</span>
                                    <span>
                                        {book.authors && Array.isArray(book.authors) && book.authors.length > 0
                                            ? book.authors.map((a) => a.name).join(', ')
                                            : book.author_name && Array.isArray(book.author_name)
                                            ? book.author_name.join(', ')
                                            : 'مؤلف غير معروف'}
                                    </span>
                                </div>

                                {book.first_publish_year && (
                                    <p className="text-sm text-gray-500">
                                        <span className="font-medium text-gray-700">سنة النشر الأولى: </span> 
                                        {book.first_publish_year}
                                    </p>
                                )}

                                <div className="pt-4 border-t border-amber-100">
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        <span className="font-medium text-gray-700"> عدد الطبعات : </span> 
                                           {book.edition_count}
                                    </p>
                                </div>
                                <AddToFavoriteButton bookElement={book} />
                            </div>
                      

                        </div>
                    ) : ( <div className="text-center py-20 text-red-600 font-medium">عذراً، لم يتم العثور على تفاصيل هذا الكتاب.</div> )}
                </div>
          
            </main>
        </div>
    );
}