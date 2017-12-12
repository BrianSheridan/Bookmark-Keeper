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
  localStorage.setItem('test', 'Hello World');

  // Prevent form from submitting
  e.preventDefault();
}
