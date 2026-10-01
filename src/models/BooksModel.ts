export default interface BooksModel {
    title: string;
    author_name: string[];
    authors?: { name: string }[];
    cover_i?: number;      
    cover_id?: number;        
    first_publish_year?: number;
    edition_count?: number;
    language?: string[];
    key: string;
    ebook_access?: string;
    has_fulltext?: boolean;
}


