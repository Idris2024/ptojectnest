import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { BookApiService } from '../service/book-api.service';

@Controller('book-api')

    export class BookApiController {

    constructor(private readonly bookapiservice: BookApiService ) {
        //
    } 
        @Get('Booklist')
        getBooks(){
            return this.bookapiservice.getBook();
        }

        @Get('view/:id/:catId')
        async BooKId(@Param('id') bookIdData: string) {
                const message = await this.bookapiservice.getBookById(bookIdData);

            return message;
        }}
            
       
    
    


