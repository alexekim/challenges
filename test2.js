<style>
 #aaa { color: red }
#bbb {color: red }
#ccc {color: red }
</style>

<h3>node app.js from code\xls-to-json</h3>
<p>display of ajax call below:</p>
<br>
<p>translations:</p>
<p>Hello: <span id="aaa"><img style="height: 50px; width: 50px;" src="http://awasudesign.vyqdy3k2nc1vkrjlhx.netdna-cdn.com/wp-content/uploads/2017/03/spinner-1.gif" /></span></p>
<p>Goodbye: <span id="bbb"><img style="height: 50px; width: 50px;" src="http://awasudesign.vyqdy3k2nc1vkrjlhx.netdna-cdn.com/wp-content/uploads/2017/03/spinner-1.gif" /></span></p>
<p>Thank You: <span id="ccc"><img style="height: 50px; width: 50px;" src="http://awasudesign.vyqdy3k2nc1vkrjlhx.netdna-cdn.com/wp-content/uploads/2017/03/spinner-1.gif" /></span></p>

<script>

function getMovieTitles(substr){
$.ajax({
      url: 'https://jsonmock.hackerrank.com/api/movies/search/?Title=' + "spiderman",
      dataType: "json",
      success: function(file){
        var titles = [];
        console.log(file);
        for (var i = 0; i < file.length; i++) {
          var title = file.data[i].Title;
          console.log(title);
          // titles.push(title);
        }
        // console.log(titles);
      },
      error: function(err){

        return err;
      }
  })


}


</script>
