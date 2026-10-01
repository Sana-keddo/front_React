import BooksModel from '@/models/BooksModel';
import Link from 'next/link';
import Image from 'next/image';

interface BooksViewerProps {
    BooksList: BooksModel[];
    title: string;
}

export default function BooksViewerComponent({ BooksList, title }: BooksViewerProps) {
    return (
        <section className="py-8 px-4 max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8 text-[#C17A5B]">{title}</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {BooksList.length === 0 ? (
                    <h3 className="text-center col-span-full text-gray-500">جاري تحميل الكتب...</h3>
                ) : ( BooksList.filter((book) => book.title !== "Cryptonomicon").map((book) => (
                        <Link key={book.key}  href={`/Books/${encodeURIComponent(book.title)}`} className="...">
                            {/* 1. عرض الغلاف بشكل آمن */}
        
                            <div className="relative w-full h-64 bg-amber-50/50 rounded-2xl overflow-hidden mb-3 flex items-center justify-center p-2 border border-amber-100/40 shadow-inner">
                                {(book.cover_i && book.cover_i > 0) || (book.cover_id && book.cover_id > 0) ? (
                                    <Image
                                        src={`https://covers.openlibrary.org/b/id/${book.cover_i || book.cover_id}-M.jpg`}
                                        alt={book.title || "book cover"}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-contain p-1 transition-transform duration-300 hover:scale-105"
                                    />
                                ) : (
                                    <div className="flex flex-col items-center justify-center h-full text-xs text-amber-800/60 font-medium">
                                        <span>لا يوجد غلاف</span>
                                    </div>
                                )}
                            </div>

                            {/* 2. عنوان الكتاب */}
                            <h3 className="font-bold text-base mt-2 text-gray-800">{book.title}</h3>

                            {/* 3. اسم المؤلف */}
                          {/* 3. اسم المؤلف */}
                            <p className="text-sm text-gray-500 mt-1">
                                {book.authors && Array.isArray(book.authors) && book.authors.length > 0
                                    ? book.authors.map((a) => a.name).join(', ')
                                    : book.author_name && Array.isArray(book.author_name)
                                    ? book.author_name.join(', ')
                                    : 'مؤلف غير معروف'}
                            </p>
                        </Link>
                  ))
                    )}
            </div>
            
        </section>
    );
}