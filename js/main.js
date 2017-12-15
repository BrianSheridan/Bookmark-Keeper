// Listen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

// save Bookmarker
function saveBookmark(e){
  //get form values
  var siteName =document.getElementById('siteName').value;
  console.log(siteName);
  var siteUrl =document.getElementById('siteUrl').value;
  console.log(siteName);

  var bookmark = {
      name: siteName,
      url: siteUrl
  }

  // Local Storage Test
  // localStorage.setItem('test', 'Hello World');
  // console.log(localStorage.getItem('test'));
  // localStorage.removeItem('test');
  // console.log(localStorage.getItem('test'));

  // test if bookmarks is null
  if(localStorage.getItem('bookmarks') === null){
  // Init array
  var bookmarks = [];
  // Add to Array
  bookmarks.push(bookmark);
  // set to local storage
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

  }
  


  // Prevent form from submitting
  e.preventDefault();
}
