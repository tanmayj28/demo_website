$(document).ready(function(){
  // $.get( 'http://api.fiz.com/content/api/v2/places/?lat=24.571270&lon=73.691544&radius=100000&filter_type_ids=499&filter_type=type&orderby=86_priority&extradata=true', function( data ) {
  //   console.log(data);
  // });
  var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.fiz.com/content/api/v2/places/?lat=24.571270&lon=73.691544&radius=100000&filter_type_ids=499&filter_type=type&orderby=86_priority&extradata=true",
  "method": "GET",
  dataType: 'json',
  "headers": {
    "fizapikey": "7db1cd36-f846-4e52-8724-fb1d8eaf4f4e",
    "authorization": "Basic Og==",
    "cache-control": "no-cache",
    "postman-token": "f2ff9b51-6895-dae6-6bc6-47ee72499be4"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
});
