import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { book } from '../../lib/db'
@Injectable()
export class BookApiService {
    getBook() {
        return (book);
    }
    //  const viewbookbyId(bookId:book)
  async getBookById(bookIdData: string) {
    // Find the book that matches both the bookId and categoryId
    const GrabBook = book.find(
      (b) => b.bookId.toString() === bookIdData.toString() && b.categoryId.toString() === bookIdData.toString()
    );

    // If no book is found, throw a 404 error
    if (!book) {
      throw new HttpException('Book not found', HttpStatus.NOT_FOUND);
    }

    // Return the found book
    return GrabBook;
     
   }
}
 