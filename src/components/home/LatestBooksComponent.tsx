import dummy_books from "@/dummy_data/books"
import BooksModel from "@/models/BooksModel";
import Image from "next/image"
import BooksViewerComponent from "../shared/BooksViewerComponent";

async function LatestBooksComponent() {
    let BooksList: BooksModel[] = [];
    try {
        const res = await fetch('https://openlibrary.org/search.json?q=fiction&limit=10')
        const response = await res.json();
        if (res.ok && response?.docs) {
            BooksList = response.docs;
        } else {
            BooksList = [];
        }
    } catch (err) {
        console.error(err);
    }

    return <BooksViewerComponent BooksList={BooksList} title= {"تصفح أحدث الإصدارات"} />
}

export default LatestBooksComponent
