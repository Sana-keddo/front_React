import BooksModel from "@/models/BooksModel";
import { FAVORITE_BOOKS_STORAGE_KEY } from "./const";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export default class FavoriteBooksTool {
    /**
     * This method will return a list of favorite books has been saved in local storage
     * @returns Array of BooksModel objects
     */
    static getFavoritesList(): BooksModel[] {
        let data: BooksModel[] = [];
        const existData = localStorage.getItem(FAVORITE_BOOKS_STORAGE_KEY);
        if (existData) {
            data = JSON.parse(existData);
        }
        return data;
    }

    static addToFavorites(bookElement: BooksModel | null) {
        if (bookElement == null) {
            return;
        }

        const list = FavoriteBooksTool.getFavoritesList();
        // check if element is exist => continue adding
        // Note: checking existing is very important => to be sure that there's one object saved so on
        if (!list.find(el => el.title === bookElement.title)) {
            list.push(bookElement);
            const jsonString = JSON.stringify(list); // convert back to string => so can be saved in local storage
            localStorage.setItem(FAVORITE_BOOKS_STORAGE_KEY, jsonString);
        }
    }

    /**
     * This method will remove book item from books favorite list in local storage
     * @param [bookElement]: BooksModel
     */
    static removeFromFavorites(bookElement: BooksModel | null, router: AppRouterInstance) {
        if (bookElement == null) {
            return;
        }

        let list = FavoriteBooksTool.getFavoritesList();
        
        // method 2: filter
        list = list.filter(el => el.title !== bookElement.title);

        // save
        const jsonString = JSON.stringify(list); // convert back to string => so can be saved in local storage
        localStorage.setItem(FAVORITE_BOOKS_STORAGE_KEY, jsonString);

        
        // refresh page
    
        location.reload();
    }
}