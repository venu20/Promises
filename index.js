// Import stylesheets
import './style.css';
import { whenAllDone } from './customMethods';

const urls = [
  'https://jsonplaceholder.typicode.com/photos',
  'https://jsonplaceholder.typicode.com/albums',
  'https://jsonplaceholder.typicode.com/comment'
  ];

const details = urls.map((url) => fetch(url));

whenAllDone(details).then((response) => {
  console.log('On Response', response);
}, (reject) => {
  console.log('Rejected ALL', reject)
})
