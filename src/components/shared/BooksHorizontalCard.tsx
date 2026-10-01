'use client';
import BooksModel from "@/models/BooksModel";
import FavoriteBooksTool from "@/tools/favorite";
import { Button } from "flowbite-react";
import { HiTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function BookHorizontalCard({ bookElement }: { bookElement: BooksModel }) {
    const router = useRouter();

    const coverId = bookElement.cover_i || bookElement.cover_id;
    const imageSrc = coverId 
        ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg` 
        : "/placeholder-book.jpg";

    return (
        <div className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-orange-100 mb-4 transition-all hover:shadow-md">
            <div className="flex items-center gap-4">
                <div className="relative w-14 h-20 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0 shadow-inner">
                    <Image
                        src={imageSrc}
                        alt={bookElement.title || "غلاف الكتاب"}
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="text-right">
                    <h4 className="font-bold text-lg text-stone-800">{bookElement.title}</h4>
                    <p className="text-sm text-stone-500 mt-1">
                        {bookElement.author_name || ""}
                    </p>
                </div>
            </div>

            <Button
                className=" bg-[#C17A5B] hover:bg-[#8C674A] text-white px-4 py-1 rounded-xl flex items-center gap-2 border-none"
                onClick={() => {
                    FavoriteBooksTool.removeFromFavorites(bookElement, router);
                }}
            >
                <HiTrash size={20} />
                <span className="font-medium">إزالة</span>
            </Button>
        </div>
    );
}