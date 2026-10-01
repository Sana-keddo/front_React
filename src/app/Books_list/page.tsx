'use client';

import BooksFilterComponent from "@/components/books-list/BooksFilterComponent"
import BooksViewerComponent from "@/components/shared/BooksViewerComponent"
import BooksModel from "@/models/BooksModel";
import { useEffect, useState } from "react";

function page() {
    const [BooksList, setBooksList] = useState<BooksModel[]>([]);
   const getBooks = async (subject: string = '', keyword: string | null = null) => {
        try {
            let url = '';
            if (keyword && keyword.trim() !== '') {
                url = `https://openlibrary.org/search.json?q=${encodeURIComponent(keyword)}&limit=20`;
            } 
            else if (subject && subject.trim() !== '') {
                url = `https://openlibrary.org/subjects/${encodeURIComponent(subject.toLowerCase())}.json?limit=20`;
            } 
            else {
                url = `https://openlibrary.org/search.json?q=books&limit=50`;
            }

            const res = await fetch(url);
            const response = await res.json();

            let booksData = [];
            if (response?.docs) {
                booksData = response.docs;
            } else if (response?.works) {
                booksData = response.works;
            }

            if (res.ok && booksData.length > 0) {
                setBooksList(booksData);
            } else {
                setBooksList([]);
            }
        } catch (err) {
            console.error(err);
        }
    };
    useEffect(() => {
        getBooks();
    }, [])

    const getNextPage = async () => {
        // TODO: ...
    }

    return (
        <main className="text-center">
            <h1>Books List Page</h1>
            <BooksFilterComponent getBooks={getBooks} />
            <BooksViewerComponent BooksList={BooksList} title={"Books List"} />
        </main>
    )
}

export default page