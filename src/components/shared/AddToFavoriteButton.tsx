'use client'; // for accessing local storage [browser]
import BooksModel from "@/models/BooksModel";
import FavoriteBooksTool from "@/tools/favorite";
import { Button } from "flowbite-react";
import { HiStar } from "react-icons/hi";

export default function AddToFavoriteBookButton({ bookElement }: { bookElement: BooksModel | null }) {
    return (
        <Button className="bg-[#C17A5B]"
            onClick={(evt) => {
                // add book object to favorite ...
                FavoriteBooksTool.addToFavorites(bookElement);
            }}
        >
            <HiStar size={25} className="ml-2  " color ="text-[#C17A5B] " /> <b>أضف إلى المفضلة</b>
        </Button>
    );
}