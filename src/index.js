import './mock';
import $ from 'jquery';

const toJson = (res) => res.json();

$('#btn').on('click', () => {
  fetch('https://github.com/octocat')
  .then(toJson).then(console.log)
  .catch(err => {
    console.error(err);
  });
});