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
  } else {
    // Get bookmarks from LocalStorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    // add bookmark to array
    bookmarks.push(bookmark);
    // Re-set back to LocalStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }

  


  // Prevent form from submitting
  e.preventDefault();
}

// delete bookmark
function deleteBookmark(url){
   //get bookmarks from local Storage
   var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
   // loop through the bookmarks
   for(var i =0; i < bookmarks.length; i++){
     if(bookmarks[i].url == url){
       // Remove from Array
       bookmarks.splice(i, 1);
     }
   }
   // reset back to localStorage
   localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

   // re-fetch Bookmarks
   fetchBookmarks();
}

// fetch bookmarks
function fetchBookmarks(){
// Get bookmarks from localStorage
var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
// get output id
var bookmarksResults = document.getElementById('bookmarksResults');



// Build output
bookmarksResults.innerHTML = '';
for(var i = 0; i < bookmarks.length; i++){
  var name = bookmarks[i].name;
  var url = bookmarks[i].url;

  bookmarksResults.innerHTML += '<div class="well">'+
  '<h3>'+name+
  ' <a class="btn btn-default" target="_blank" href="'+url+'">Visit</a> ' +
  ' <a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">Delete</a> ' +
  '</h3>'+
  '</div>';

 }
}

