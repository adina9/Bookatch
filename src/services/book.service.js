'use strict';

import { DbService } from './db-service.js';
import Axios from 'axios'
import { Utils } from './utils.service.js';
var axios = Axios.create({
    withCredentials: false
})
const KEY = 'books';
const KEYG = 'googleBooks'
export default {
    query,
    get,
    remove,
    save,
    addReview,
    getNetworkBooks,
    removeReview
}
var booksDB = [
    {

        "title": "metus hendrerit",
        "subtitle": "mi est eros convallis auctor arcu dapibus himenaeos",
        "authors": [
            "Barbara Cartland"
        ],
        "publishedDate": 1999,
        "description": "placerat nisi sodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum platea vehicula conubia fermentum habitasse congue suspendisse",
        "pageCount": 713,
        "categories": [
            "Computers",
            "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/20.jpg",
        "language": "en",
        "listPrice": {
            "amount": 109,
            "currencyCode": "EUR",
            "isOnSale": false
        }
    },
    {

        "title": "morbi",
        "subtitle": "lorem euismod dictumst inceptos mi",
        "authors": [
            "Barbara Cartland"
        ],
        "publishedDate": 1978,
        "description": "aliquam pretium lorem laoreet etiam odio cubilia iaculis placerat aliquam tempor nisl auctor",
        "pageCount": 129,
        "categories": [
            "Computers",
            "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/14.jpg",
        "language": "sp",
        "listPrice": {
            "amount": 44,
            "currencyCode": "EUR",
            "isOnSale": true
        }
    },
    {

        "title": "at viverra venenatis",
        "subtitle": "gravida libero facilisis rhoncus urna etiam",
        "authors": [
            "Dr. Seuss"
        ],
        "publishedDate": 1999,
        "description": "lorem molestie ut euismod ad quis mi ultricies nisl cursus suspendisse dui tempor sit suscipit metus etiam euismod tortor sagittis habitant",
        "pageCount": 972,
        "categories": [
            "Computers",
            "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/2.jpg",
        "language": "he",
        "listPrice": {
            "amount": 108,
            "currencyCode": "ILS",
            "isOnSale": false
        }
    },
    {

        "title": "dictum",
        "subtitle": "augue eu consectetur class curabitur conubia ligula in ullamcorper",
        "authors": [
            "Danielle Steel"
        ],
        "publishedDate": 1978,
        "description": "interdum inceptos mauris habitant primis neque tempus lacus morbi auctor cras consectetur euismod vehicula neque netus enim vivamus augue molestie imperdiet tincidunt aliquam",
        "pageCount": 303,
        "categories": [
            "Computers",
            "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/16.jpg",
        "language": "en",
        "listPrice": {
            "amount": 30,
            "currencyCode": "EUR",
            "isOnSale": true
        }
    },
    {

        "title": "sem himenaeos aptent",
        "subtitle": "interdum per habitasse luctus purus est",
        "authors": [
            "Dr. Seuss"
        ],
        "publishedDate": 2011,
        "description": "et vehicula faucibus amet accumsan lectus cras nulla cubilia arcu neque litora mi habitasse quis amet augue facilisis sed",
        "pageCount": 337,
        "categories": [
            "Computers",
            "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/12.jpg",
        "language": "sp",
        "listPrice": {
            "amount": 19,
            "currencyCode": "USD",
            "isOnSale": false
        }
    },
    {

        "title": "mi ante posuere",
        "subtitle": "sapien curae consectetur ultrices fringilla blandit ipsum curae faucibus",
        "authors": [
            "Leo Tolstoy"
        ],
        "publishedDate": 1978,
        "description": "senectus habitant nam imperdiet nostra elit dapibus nisl adipiscing in",
        "pageCount": 748,
        "categories": [
            "Computers",
            "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/1.jpg",
        "language": "en",
        "listPrice": {
            "amount": 91,
            "currencyCode": "USD",
            "isOnSale": true
        }
    },
    {

        "title": "non",
        "subtitle": "leo tortor per dapibus mattis ut conubia porttitor ligula viverra",
        "authors": [
            "Leo Tolstoy"
        ],
        "publishedDate": 2011,
        "description": "nec scelerisque id cursus platea sit ullamcorper bibendum ultrices tempus ante mi aliquet cras tortor dapibus dictum scelerisque",
        "pageCount": 65,
        "categories": [
            "Computers",
            "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/14.jpg",
        "language": "he",
        "listPrice": {
            "amount": 90,
            "currencyCode": "USD",
            "isOnSale": false
        }
    },
    {

        "title": "tristique",
        "subtitle": "consectetur a eu tincidunt condimentum amet nisi",
        "authors": [
            "Dr. Seuss"
        ],
        "publishedDate": 1999,
        "description": "magna quisque venenatis laoreet purus in semper habitant proin pellentesque sed egestas cursus faucibus nam enim id sit mi ligula risus curabitur senectus curabitur sodales fames sem",
        "pageCount": 299,
        "categories": [
            "Computers",
            "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/11.jpg",
        "language": "he",
        "listPrice": {
            "amount": 176,
            "currencyCode": "EUR",
            "isOnSale": false
        }
    },
    {

        "title": "urna ornare gravida",
        "subtitle": "sem vestibulum semper convallis pharetra tempor himenaeos ut",
        "authors": [
            "Jin Yong"
        ],
        "publishedDate": 2011,
        "description": "porttitor nisl sodales id eu tellus venenatis laoreet auctor dictumst nulla",
        "pageCount": 803,
        "categories": [
            "Computers",
            "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/10.jpg",
        "language": "sp",
        "listPrice": {
            "amount": 116,
            "currencyCode": "USD",
            "isOnSale": true
        }
    },
    {

        "title": "consequat neque volutpat",
        "subtitle": "vel quis taciti fermentum feugiat ullamcorper curae praesent",
        "authors": [
            "Dr. Seuss"
        ],
        "publishedDate": 1978,
        "description": "curabitur bibendum in dolor neque magna phasellus arcu nulla cubilia senectus maecenas ullamcorper neque accumsan facilisis dictumst ornare",
        "pageCount": 891,
        "categories": [
            "Computers",
            "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/5.jpg",
        "language": "en",
        "listPrice": {
            "amount": 145,
            "currencyCode": "EUR",
            "isOnSale": false
        }
    },
    {

        "title": "risus",
        "subtitle": "pretium bibendum pharetra curabitur quisque dictumst",
        "authors": [
            "Danielle Steel"
        ],
        "publishedDate": 2018,
        "description": "auctor amet nostra luctus molestie proin platea cubilia netus sed purus egestas a primis eu tristique interdum litora lorem venenatis mattis senectus",
        "pageCount": 86,
        "categories": [
            "Computers",
            "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/16.jpg",
        "language": "sp",
        "listPrice": {
            "amount": 157,
            "currencyCode": "ILS",
            "isOnSale": true
        }
    },
    {

        "title": "interdum etiam vulputate",
        "subtitle": "velit sapien eget tincidunt nunc tortor",
        "authors": [
            "Danielle Steel"
        ],
        "publishedDate": 2018,
        "description": "aenean mauris porta netus accumsan turpis etiam vestibulum vivamus sagittis nullam nec tellus quam mattis est pellentesque nisi litora sit ad",
        "pageCount": 882,
        "categories": [
            "Computers",
            "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/17.jpg",
        "language": "sp",
        "listPrice": {
            "amount": 57,
            "currencyCode": "USD",
            "isOnSale": true
        }
    },
    {

        "title": "sagittis justo",
        "subtitle": "etiam primis proin praesent placerat nisi fermentum nisi",
        "authors": [
            "Agatha Christie"
        ],
        "publishedDate": 2011,
        "description": "nec faucibus arcu suspendisse tempus potenti lobortis aliquam quisque augue integer consectetur etiam ultrices curabitur tristique metus",
        "pageCount": 598,
        "categories": [
            "Computers",
            "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/8.jpg",
        "language": "en",
        "listPrice": {
            "amount": 167,
            "currencyCode": "ILS",
            "isOnSale": false
        }
    },
    {

        "title": "quam ullamcorper himenaeos",
        "subtitle": "ut placerat eu dapibus sapien sodales laoreet",
        "authors": [
            "Danielle Steel"
        ],
        "publishedDate": 1999,
        "description": "etiam nec aliquam euismod platea vel laoreet quisque condimentum sapien neque ut aliquam torquent in nam",
        "pageCount": 608,
        "categories": [
            "Computers",
            "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/3.jpg",
        "language": "he",
        "listPrice": {
            "amount": 150,
            "currencyCode": "USD",
            "isOnSale": true
        }
    },
    {

        "title": "quis",
        "subtitle": "suscipit turpis etiam turpis libero lobortis",
        "authors": [
            "Jin Yong"
        ],
        "publishedDate": 2011,
        "description": "etiam pretium urna fusce lobortis curae viverra aptent metus semper nisi litora feugiat elementum purus nunc consequat lorem ultricies non primis phasellus sociosqu donec dolor",
        "pageCount": 583,
        "categories": [
            "Computers",
            "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/6.jpg",
        "language": "en",
        "listPrice": {
            "amount": 58,
            "currencyCode": "ILS",
            "isOnSale": true
        }
    },
    {

        "title": "aliquam aliquet dapibus",
        "subtitle": "neque eu purus euismod placerat adipiscing odio egestas consequat",
        "authors": [
            "Leo Tolstoy"
        ],
        "publishedDate": 2011,
        "description": "dolor morbi malesuada eleifend purus taciti sit interdum aliquet commodo ut libero tincidunt",
        "pageCount": 497,
        "categories": [
            "Computers",
            "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/7.jpg",
        "language": "en",
        "listPrice": {
            "amount": 78,
            "currencyCode": "USD",
            "isOnSale": false
        }
    },
    {

        "title": "class",
        "subtitle": "elit enim ultricies amet imperdiet a molestie class elementum venenatis",
        "authors": [
            "Danielle Steel"
        ],
        "publishedDate": 1999,
        "description": "rhoncus odio netus consectetur aenean hendrerit massa scelerisque elementum aptent lobortis pharetra maecenas quam nulla volutpat turpis non habitasse aenean ante sodales lobortis quisque libero imperdiet gravida eleifend nulla",
        "pageCount": 804,
        "categories": [
            "Computers",
            "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/10.jpg",
        "language": "en",
        "listPrice": {
            "amount": 118,
            "currencyCode": "ILS",
            "isOnSale": false
        }
    },
    {

        "subtitle": "class habitant at commodo semper ligula a bibendum",
        "authors": [
            "Leo Tolstoy"
        ],
        "publishedDate": 1999,
        "description": "himenaeos quis iaculis orci libero egestas quam varius primis erat lacus facilisis blandit dictum tristique interdum litora quisque purus senectus pretium purus",
        "pageCount": 231,
        "categories": [
            "Computers",
            "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/12.jpg",
        "language": "he",
        "listPrice": {
            "amount": 60,
            "currencyCode": "EUR",
            "isOnSale": false
        }
    },
    {

        "title": "rhoncus vivamus",
        "subtitle": "nullam class risus amet senectus scelerisque etiam curabitur",
        "authors": [
            "Agatha Christie"
        ],
        "publishedDate": 1978,
        "description": "torquent in et id lacus vivamus aptent cursus erat integer venenatis risus ac ante quam etiam euismod feugiat risus suscipit rhoncus pharetra quisque felis",
        "pageCount": 652,
        "categories": [
            "Computers",
            "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/20.jpg",
        "language": "he",
        "listPrice": {
            "amount": 110,
            "currencyCode": "USD",
            "isOnSale": true
        }
    },
    {

        "title": "donec mi ullamcorper",
        "subtitle": "varius malesuada augue molestie sollicitudin faucibus mi eu tempus",
        "authors": [
            "William Shakespeare"
        ],
        "publishedDate": 2011,
        "description": "aliquet euismod mi vivamus bibendum donec etiam quisque iaculis ullamcorper est sed",
        "pageCount": 904,
        "categories": [
            "Computers",
            "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/2.jpg",
        "language": "sp",
        "listPrice": {
            "amount": 186,
            "currencyCode": "ILS",
            "isOnSale": true
        }
    }
]

async function query() {
    var books = await DbService.query(KEY);
    if (!books || !books.length) {
        books = booksDB
        // books = _createDefaultBooks();
        await DbService.insert(KEY, books);
    }
    return books;
}


// async function query() {
//     try {
//         const books = await httpService.get('/book')
//         return books
//     } catch (err) {
//         console.log('err in front query:', err);
//     }
// }

// async function query() {
//     var books = await DbService.query(KEY)
//     if (!books || !books.length) {
//         book = _createDefaultBooks()
//         await DbService.insert(KEY, books)
//     }
//     return books
// }

// function _createDefaultBooks() {
//     return [
//         {

//             "title": "metus hendrerit",
//             "subtitle": "mi est eros convallis auctor arcu dapibus himenaeos",
//             "authors": [
//                 "Barbara Cartland"
//             ],
//             "publishedDate": 1999,
//             "description": "placerat nisi sodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum platea vehicula conubia fermentum habitasse congue suspendisse",
//             "pageCount": 713,
//             "categories": [
//                 "Computers",
//                 "Hack"
//             ],
//             "thumbnail": "http://coding-academy.org/books-photos/20.jpg",
//             "language": "en",
//             "listPrice": {
//                 "amount": 109,
//                 "currencyCode": "EUR",
//                 "isOnSale": false
//             }
//         },
//         {

//             "title": "morbi",
//             "subtitle": "lorem euismod dictumst inceptos mi",
//             "authors": [
//                 "Barbara Cartland"
//             ],
//             "publishedDate": 1978,
//             "description": "aliquam pretium lorem laoreet etiam odio cubilia iaculis placerat aliquam tempor nisl auctor",
//             "pageCount": 129,
//             "categories": [
//                 "Computers",
//                 "Hack"
//             ],
//             "thumbnail": "http://coding-academy.org/books-photos/14.jpg",
//             "language": "sp",
//             "listPrice": {
//                 "amount": 44,
//                 "currencyCode": "EUR",
//                 "isOnSale": true
//             }
//         },
//         {

//             "title": "at viverra venenatis",
//             "subtitle": "gravida libero facilisis rhoncus urna etiam",
//             "authors": [
//                 "Dr. Seuss"
//             ],
//             "publishedDate": 1999,
//             "description": "lorem molestie ut euismod ad quis mi ultricies nisl cursus suspendisse dui tempor sit suscipit metus etiam euismod tortor sagittis habitant",
//             "pageCount": 972,
//             "categories": [
//                 "Computers",
//                 "Hack"
//             ],
//             "thumbnail": "http://coding-academy.org/books-photos/2.jpg",
//             "language": "he",
//             "listPrice": {
//                 "amount": 108,
//                 "currencyCode": "ILS",
//                 "isOnSale": false
//             }
//         },
//         {

//             "title": "dictum",
//             "subtitle": "augue eu consectetur class curabitur conubia ligula in ullamcorper",
//             "authors": [
//                 "Danielle Steel"
//             ],
//             "publishedDate": 1978,
//             "description": "interdum inceptos mauris habitant primis neque tempus lacus morbi auctor cras consectetur euismod vehicula neque netus enim vivamus augue molestie imperdiet tincidunt aliquam",
//             "pageCount": 303,
//             "categories": [
//                 "Computers",
//                 "Hack"
//             ],
//             "thumbnail": "http://coding-academy.org/books-photos/16.jpg",
//             "language": "en",
//             "listPrice": {
//                 "amount": 30,
//                 "currencyCode": "EUR",
//                 "isOnSale": true
//             }
//         },
//         {

//             "title": "sem himenaeos aptent",
//             "subtitle": "interdum per habitasse luctus purus est",
//             "authors": [
//                 "Dr. Seuss"
//             ],
//             "publishedDate": 2011,
//             "description": "et vehicula faucibus amet accumsan lectus cras nulla cubilia arcu neque litora mi habitasse quis amet augue facilisis sed",
//             "pageCount": 337,
//             "categories": [
//                 "Computers",
//                 "Hack"
//             ],
//             "thumbnail": "http://coding-academy.org/books-photos/12.jpg",
//             "language": "sp",
//             "listPrice": {
//                 "amount": 19,
//                 "currencyCode": "USD",
//                 "isOnSale": false
//             }
//         },
//         {

//             "title": "mi ante posuere",
//             "subtitle": "sapien curae consectetur ultrices fringilla blandit ipsum curae faucibus",
//             "authors": [
//                 "Leo Tolstoy"
//             ],
//             "publishedDate": 1978,
//             "description": "senectus habitant nam imperdiet nostra elit dapibus nisl adipiscing in",
//             "pageCount": 748,
//             "categories": [
//                 "Computers",
//                 "Hack"
//             ],
//             "thumbnail": "http://coding-academy.org/books-photos/1.jpg",
//             "language": "en",
//             "listPrice": {
//                 "amount": 91,
//                 "currencyCode": "USD",
//                 "isOnSale": true
//             }
//         },
//         {

//             "title": "non",
//             "subtitle": "leo tortor per dapibus mattis ut conubia porttitor ligula viverra",
//             "authors": [
//                 "Leo Tolstoy"
//             ],
//             "publishedDate": 2011,
//             "description": "nec scelerisque id cursus platea sit ullamcorper bibendum ultrices tempus ante mi aliquet cras tortor dapibus dictum scelerisque",
//             "pageCount": 65,
//             "categories": [
//                 "Computers",
//                 "Hack"
//             ],
//             "thumbnail": "http://coding-academy.org/books-photos/14.jpg",
//             "language": "he",
//             "listPrice": {
//                 "amount": 90,
//                 "currencyCode": "USD",
//                 "isOnSale": false
//             }
//         },
//         {

//             "title": "tristique",
//             "subtitle": "consectetur a eu tincidunt condimentum amet nisi",
//             "authors": [
//                 "Dr. Seuss"
//             ],
//             "publishedDate": 1999,
//             "description": "magna quisque venenatis laoreet purus in semper habitant proin pellentesque sed egestas cursus faucibus nam enim id sit mi ligula risus curabitur senectus curabitur sodales fames sem",
//             "pageCount": 299,
//             "categories": [
//                 "Computers",
//                 "Hack"
//             ],
//             "thumbnail": "http://coding-academy.org/books-photos/11.jpg",
//             "language": "he",
//             "listPrice": {
//                 "amount": 176,
//                 "currencyCode": "EUR",
//                 "isOnSale": false
//             }
//         },
//         {

//             "title": "urna ornare gravida",
//             "subtitle": "sem vestibulum semper convallis pharetra tempor himenaeos ut",
//             "authors": [
//                 "Jin Yong"
//             ],
//             "publishedDate": 2011,
//             "description": "porttitor nisl sodales id eu tellus venenatis laoreet auctor dictumst nulla",
//             "pageCount": 803,
//             "categories": [
//                 "Computers",
//                 "Hack"
//             ],
//             "thumbnail": "http://coding-academy.org/books-photos/10.jpg",
//             "language": "sp",
//             "listPrice": {
//                 "amount": 116,
//                 "currencyCode": "USD",
//                 "isOnSale": true
//             }
//         },
//         {

//             "title": "consequat neque volutpat",
//             "subtitle": "vel quis taciti fermentum feugiat ullamcorper curae praesent",
//             "authors": [
//                 "Dr. Seuss"
//             ],
//             "publishedDate": 1978,
//             "description": "curabitur bibendum in dolor neque magna phasellus arcu nulla cubilia senectus maecenas ullamcorper neque accumsan facilisis dictumst ornare",
//             "pageCount": 891,
//             "categories": [
//                 "Computers",
//                 "Hack"
//             ],
//             "thumbnail": "http://coding-academy.org/books-photos/5.jpg",
//             "language": "en",
//             "listPrice": {
//                 "amount": 145,
//                 "currencyCode": "EUR",
//                 "isOnSale": false
//             }
//         },
//         {

//             "title": "risus",
//             "subtitle": "pretium bibendum pharetra curabitur quisque dictumst",
//             "authors": [
//                 "Danielle Steel"
//             ],
//             "publishedDate": 2018,
//             "description": "auctor amet nostra luctus molestie proin platea cubilia netus sed purus egestas a primis eu tristique interdum litora lorem venenatis mattis senectus",
//             "pageCount": 86,
//             "categories": [
//                 "Computers",
//                 "Hack"
//             ],
//             "thumbnail": "http://coding-academy.org/books-photos/16.jpg",
//             "language": "sp",
//             "listPrice": {
//                 "amount": 157,
//                 "currencyCode": "ILS",
//                 "isOnSale": true
//             }
//         },
//         {

//             "title": "interdum etiam vulputate",
//             "subtitle": "velit sapien eget tincidunt nunc tortor",
//             "authors": [
//                 "Danielle Steel"
//             ],
//             "publishedDate": 2018,
//             "description": "aenean mauris porta netus accumsan turpis etiam vestibulum vivamus sagittis nullam nec tellus quam mattis est pellentesque nisi litora sit ad",
//             "pageCount": 882,
//             "categories": [
//                 "Computers",
//                 "Hack"
//             ],
//             "thumbnail": "http://coding-academy.org/books-photos/17.jpg",
//             "language": "sp",
//             "listPrice": {
//                 "amount": 57,
//                 "currencyCode": "USD",
//                 "isOnSale": true
//             }
//         },
//         {

//             "title": "sagittis justo",
//             "subtitle": "etiam primis proin praesent placerat nisi fermentum nisi",
//             "authors": [
//                 "Agatha Christie"
//             ],
//             "publishedDate": 2011,
//             "description": "nec faucibus arcu suspendisse tempus potenti lobortis aliquam quisque augue integer consectetur etiam ultrices curabitur tristique metus",
//             "pageCount": 598,
//             "categories": [
//                 "Computers",
//                 "Hack"
//             ],
//             "thumbnail": "http://coding-academy.org/books-photos/8.jpg",
//             "language": "en",
//             "listPrice": {
//                 "amount": 167,
//                 "currencyCode": "ILS",
//                 "isOnSale": false
//             }
//         },
//         {

//             "title": "quam ullamcorper himenaeos",
//             "subtitle": "ut placerat eu dapibus sapien sodales laoreet",
//             "authors": [
//                 "Danielle Steel"
//             ],
//             "publishedDate": 1999,
//             "description": "etiam nec aliquam euismod platea vel laoreet quisque condimentum sapien neque ut aliquam torquent in nam",
//             "pageCount": 608,
//             "categories": [
//                 "Computers",
//                 "Hack"
//             ],
//             "thumbnail": "http://coding-academy.org/books-photos/3.jpg",
//             "language": "he",
//             "listPrice": {
//                 "amount": 150,
//                 "currencyCode": "USD",
//                 "isOnSale": true
//             }
//         },
//         {

//             "title": "quis",
//             "subtitle": "suscipit turpis etiam turpis libero lobortis",
//             "authors": [
//                 "Jin Yong"
//             ],
//             "publishedDate": 2011,
//             "description": "etiam pretium urna fusce lobortis curae viverra aptent metus semper nisi litora feugiat elementum purus nunc consequat lorem ultricies non primis phasellus sociosqu donec dolor",
//             "pageCount": 583,
//             "categories": [
//                 "Computers",
//                 "Hack"
//             ],
//             "thumbnail": "http://coding-academy.org/books-photos/6.jpg",
//             "language": "en",
//             "listPrice": {
//                 "amount": 58,
//                 "currencyCode": "ILS",
//                 "isOnSale": true
//             }
//         },
//         {

//             "title": "aliquam aliquet dapibus",
//             "subtitle": "neque eu purus euismod placerat adipiscing odio egestas consequat",
//             "authors": [
//                 "Leo Tolstoy"
//             ],
//             "publishedDate": 2011,
//             "description": "dolor morbi malesuada eleifend purus taciti sit interdum aliquet commodo ut libero tincidunt",
//             "pageCount": 497,
//             "categories": [
//                 "Computers",
//                 "Hack"
//             ],
//             "thumbnail": "http://coding-academy.org/books-photos/7.jpg",
//             "language": "en",
//             "listPrice": {
//                 "amount": 78,
//                 "currencyCode": "USD",
//                 "isOnSale": false
//             }
//         },
//         {

//             "title": "class",
//             "subtitle": "elit enim ultricies amet imperdiet a molestie class elementum venenatis",
//             "authors": [
//                 "Danielle Steel"
//             ],
//             "publishedDate": 1999,
//             "description": "rhoncus odio netus consectetur aenean hendrerit massa scelerisque elementum aptent lobortis pharetra maecenas quam nulla volutpat turpis non habitasse aenean ante sodales lobortis quisque libero imperdiet gravida eleifend nulla",
//             "pageCount": 804,
//             "categories": [
//                 "Computers",
//                 "Hack"
//             ],
//             "thumbnail": "http://coding-academy.org/books-photos/10.jpg",
//             "language": "en",
//             "listPrice": {
//                 "amount": 118,
//                 "currencyCode": "ILS",
//                 "isOnSale": false
//             }
//         },
//         {

//             "subtitle": "class habitant at commodo semper ligula a bibendum",
//             "authors": [
//                 "Leo Tolstoy"
//             ],
//             "publishedDate": 1999,
//             "description": "himenaeos quis iaculis orci libero egestas quam varius primis erat lacus facilisis blandit dictum tristique interdum litora quisque purus senectus pretium purus",
//             "pageCount": 231,
//             "categories": [
//                 "Computers",
//                 "Hack"
//             ],
//             "thumbnail": "http://coding-academy.org/books-photos/12.jpg",
//             "language": "he",
//             "listPrice": {
//                 "amount": 60,
//                 "currencyCode": "EUR",
//                 "isOnSale": false
//             }
//         },
//         {

//             "title": "rhoncus vivamus",
//             "subtitle": "nullam class risus amet senectus scelerisque etiam curabitur",
//             "authors": [
//                 "Agatha Christie"
//             ],
//             "publishedDate": 1978,
//             "description": "torquent in et id lacus vivamus aptent cursus erat integer venenatis risus ac ante quam etiam euismod feugiat risus suscipit rhoncus pharetra quisque felis",
//             "pageCount": 652,
//             "categories": [
//                 "Computers",
//                 "Hack"
//             ],
//             "thumbnail": "http://coding-academy.org/books-photos/20.jpg",
//             "language": "he",
//             "listPrice": {
//                 "amount": 110,
//                 "currencyCode": "USD",
//                 "isOnSale": true
//             }
//         },
//         {

//             "title": "donec mi ullamcorper",
//             "subtitle": "varius malesuada augue molestie sollicitudin faucibus mi eu tempus",
//             "authors": [
//                 "William Shakespeare"
//             ],
//             "publishedDate": 2011,
//             "description": "aliquet euismod mi vivamus bibendum donec etiam quisque iaculis ullamcorper est sed",
//             "pageCount": 904,
//             "categories": [
//                 "Computers",
//                 "Hack"
//             ],
//             "thumbnail": "http://coding-academy.org/books-photos/2.jpg",
//             "language": "sp",
//             "listPrice": {
//                 "amount": 186,
//                 "currencyCode": "ILS",
//                 "isOnSale": true
//             }
//         }
//     ]
// }



async function get(id) {
    return await DbService.get(KEY, id);
}

// async function get(id) {
//     try {
//         const book = await httpService.get('/book/' + id)
//         return book
//     } catch (err) {
//         console.log('err in front get:', err);
//     }
// }


async function remove(id) {
    return await DbService.remove(KEY, id);
}
// async function remove(id) {
//     return httpService.delete('/book/' + id)
// }

// async function save(book) {
//     console.log('service', book);
//     return await DbService.post(KEY, book)
// }

async function save(book) { //support editing and adding at the same time
    console.log('service', book);
    if (book.id) return await DbService.put(KEY, book);
    else return await DbService.post(KEY, book)
}
// async function save(book) {
//     var copyBook = JSON.parse(JSON.stringify(book))
//     if (copyBook._id) {
//         try {
//             const newBook = await httpService.put('/book/' + bookId, book)
//             return newBook
//         } catch (err) {
//             console.log('err in front save put:'), err;
//         }
//     } else {

//         try {
//             const newBook = await httpService.post('/book/', copyBook)
//             console.log('newBook in service:', newBook);
//             return newBook
//         } catch (err) {
//             console.log('err in front save post:', err);
//         }
//     }
//     // if (copyBook._id) return await httpService.put('/book/' + bookId, book)
//     // else return await httpService.post('/book/', copyBook)
// }



async function addReview(bookId, review) {
    var books = await DbService.query(KEY);
    if (!books || !books.length) {
        books = booksDB
    }
    let book = books.find(currBook => currBook.id === bookId)
    if (!book.reviews || !book.reviews.length) {
        book.reviews = []
        book.reviews.push(review)
    } else
        book.reviews.push(review)

    return await DbService.put(KEY, book)
}
// async function addReview(bookId, review) {
//     const books = await httpService.get('/book')
//     var book = books.find(currBook => currBook._id === bookId)
//     if (!book.reviews) {
//         book.reviews = []
//         book.reviews.push(review)
//     } else book.reviews.push(review)
//     console.log('book to update', book);
//     var savedBook = await httpService.put('/book/' + bookId, book)
//     console.log('savedBook in front-service', savedBook);
//     return savedBook
// }



async function removeReview(bookId, reviewId) {
    var books = await DbService.query(KEY);
    if (!books || !books.length) {
        books = booksDB
    }
    let book = books.find(currBook => currBook.id === bookId)
    let idx = book.reviews.findIndex(
        (currReview) => currReview.id === reviewId
    );
    book.reviews.splice(idx, 1);
    return await DbService.put(KEY, book)
}
// async function removeReview(bookId, reviewId) {
//     console.log('adinaaa');
//     const books = await httpService.get('/book')
//     console.log('books', books);
//     let book = books.find(currBook => currBook._id === bookId)
//     let idx = book.reviews.findIndex(
//         (currReview) => currReview.id === reviewId
//     );
//     console.log('idx @@@', idx);
//     book.reviews.splice(idx, 1)
//     return await httpService.put('/book/' + bookId, book)
// }


async function getNetworkBooks(query) {
    const googleBookStorage = localStorage.getItem(query)
    if (googleBookStorage || googleBookStorage !== null) return googleBookStorage
    else {
        const url = `https://www.googleapis.com/books/v1/volumes?printType=books&q=${query}`;
        const res = await axios.get(url)
        Utils.storeToStorage(KEYG, res.data.items)
        localStorage.setItem(KEYG, res.data.items)
        return res.data.items.splice(0, 5)

    }
}
// async function getNetworkBooks(query) {
//     // const googleBookStorage = localStorage.getItem(query)
//     // if (googleBookStorage || googleBookStorage !== null) return googleBookStorage
//     // else {
//     const url = `https://www.googleapis.com/books/v1/volumes?printType=books&q=${query}`;
//     const res = await axios.get(url)
//     // Utils.storeToStorage(KEYG, res.data.items)
//     // localStorage.setItem(KEYG, res.data.items)
//     return res.data.items.splice(0, 5)

//     // }
// }





// function getEmptyBook() {
//     return {
//         vendor: '',
//         speed: 0
//     }
// }

// function _createDefaultBooks() {
//     return [
//         _createBook('', 50),
//         _createBook('Fiak', 73),
//         _createBook('Subali', 100),
//         _createBook('Susika', 120),
//     ];
// }

// function _createBook(vendor, speed) {
//     return {
//         vendor,
//         speed,
//     }
// }


