import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { BorrowedBookService } from '../borrowedBookService/borrowed-book.service';
import BorrowedBook from 'src/entities/borrowed_book.entity';
import { IsAuthenticated } from 'src/shared/IsAuthenticated';
import { GetAuthPayload } from 'src/shared/getAuthTokenPayload';
import { AuthTokenPayload } from 'src/lib/types/type';
@Controller('borrowed-book')

export class BorrowedBookController {
    constructor(private readonly borrowedBookService: BorrowedBookService) {}
  
    
     // Authentication Guard to protect the route
    @UseGuards(IsAuthenticated)
    // Route for borrowing a book
    @Post('BorrowBook')
    async borrowBook(
      @Body() borrowedBooksData: BorrowedBook, // The data for borrowing the book
      @GetAuthPayload() payload: AuthTokenPayload, // Fetch the auth payload of the logged-in user
    ) {
      // You can log or return the auth payload for testing or debugging purposes
      console.log('User payload:', payload);
  
      // Proceed to borrow the book
      return await this.borrowedBookService.borrowBook(borrowedBooksData);
    }


    @Get('/BorrowBooklist')
    getBorrowedBooks(){
    return this.borrowedBookService.getBorrowedBooks();
    }
  }



    // An example route to show the user's auth payload (protected route)
    // @UseGuards(IsAuthenticated)
    // @Get('/protected-route')
    // async showAuthPayload(@GetAuthPayload() payload: AuthTokenPayload) {
    //   return `This is the auth payload: ${JSON.stringify(payload)}`;
    // }

 