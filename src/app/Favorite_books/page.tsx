'use client';
import BookHorizontalCard from "@/components/shared/BooksHorizontalCard";
import BooksModel from "@/models/BooksModel";
import FavoriteBooksTool from "@/tools/favorite";
import { useEffect, useState } from "react";
import { HiHeart } from "react-icons/hi";

export default function FavoriteBooksPage() {
    const [booksList, setBooksList] = useState<BooksModel[]>([]);

    useEffect(() => {
        setBooksList(FavoriteBooksTool.getFavoritesList());
    }, []);

    return (
        <main className="min-h-screen bg-[#FDFBF7] py-10 px-4 my-25">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-stone-200 p-8">
                
                <div className="flex items-center justify-center gap-3 mb-8">
                    <h1 className="text-3xl font-bold text-stone-800">كتبي المفضلة</h1>
                    <HiHeart className=" text-[#C17A5B] text-3xl" />
                </div>

                <section className="space-y-4">
                    {booksList.length > 0 ? (
                        booksList.map((el, index) => (
                            <BookHorizontalCard key={el.title || index} bookElement={el} />
                        ))
                    ) : (
                        <p className="text-center text-stone-400 py-12">لا توجد كتب مضافة إلى المفضلة حالياً.</p>
                    )}
                </section>
            </div>
        </main>
    );
}