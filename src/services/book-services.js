export const getBooksBySearch = async (searchTerm) => {
    const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&startIndex=0&maxResults=40`
    );
    if (!response.ok) {
        throw new Error("Something went wrong");
    }

    const data = await response.json();

    const { items } = data;

    if (data.totalItems < 1) {
        throw new Error("No books found for search term " + searchTerm);
    }

    return items;
};
