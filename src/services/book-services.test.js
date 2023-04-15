import { getBooksBySearch } from "./book-services";

describe("Test cases for a function that calls Google API with provided search term", () => {
    beforeEach(() => {
        // Mock fetch globally
        global.fetch = jest.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve({}),
            })
        );
    });

    afterEach(() => {
        // Clear fetch mock
        global.fetch.mockClear();
    });

    it("should fetch data from the Google Books API with the correct URL", async () => {
        const searchTerm = "test";
        await getBooksBySearch(searchTerm);

        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toHaveBeenCalledWith(
            `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&startIndex=0&maxResults=40`
        );
    });

    it("should throw an error if the response is not ok", async () => {
        global.fetch.mockImplementationOnce(() =>
            Promise.resolve({
                ok: false,
            })
        );

        const searchTerm = "test";

        await expect(getBooksBySearch(searchTerm)).rejects.toThrow(
            "Something went wrong"
        );
    });

    it("should throw an error if no books are found for the given search term", async () => {
        const searchTerm = "nonexistentsearchterm";
        const data = {
            totalItems: 0,
        };
        global.fetch.mockImplementationOnce(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve(data),
            })
        );

        await expect(getBooksBySearch(searchTerm)).rejects.toThrow(
            `No books found for search term ${searchTerm}`
        );
    });

    it("should return the items array from the API response", async () => {
        const searchTerm = "test";
        const items = [
            { id: 1, title: "Book 1" },
            { id: 2, title: "Book 2" },
        ];
        const data = {
            totalItems: items.length,
            items: items,
        };
        global.fetch.mockImplementationOnce(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve(data),
            })
        );

        const result = await getBooksBySearch(searchTerm);

        expect(result).toEqual(items);
    });
});
