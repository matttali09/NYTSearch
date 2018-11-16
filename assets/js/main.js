var queryUrl =  "https://api.nytimes.com/svc/search/v2/articlesearch.json";
$("#search").on("click",function(){
    
    console.log("this ran");
    var q = $("#searchTerm").val().trim();
    var searchNum=$("#recordRetrieve").val();
    var startYear=parseInt($("#start-year").val().trim());
    var endYear=parseInt($("#end-year").val().trim());
    queryUrl += '?api-keyea441dc83bc44743891bc283e089737d&q=' + q;
    if ((startYear>999)&&(startYear<10000)){
        url += startYear + '0101';
    }
    if ((endYear>999)&&(endYear<10000)){
        url += endYear + '1231';
    }
    $.ajax({
        url: queryUrl,
        method: 'GET'
    }).then(function(response){
        for(i=0;i<searchNum;i++){
            console.log(response.response.docs[i].web_url)
        }
    })
});