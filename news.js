/**
 * Created by rekha on 1/12/2021.
 */
var output_data;
var query;

function searchdata() {
    if (query !== "") {
        // $("#newresult").html(output_data);
        alert($("#searchquery").val());
        var query = $("#searchquery").val();
        $("#searchquery").val(" ");
    }
    else {
        alert("plz enter to search ");
    }
    getdata(query);
}
//<![CDATA[

function getdata(query) {


    $.ajax({
        url: "https://newsapi.org/v2/everything?q=" + query + "&apiKey=f6dd5bda11e74103b2f00b04fb5c5a18&pageSize=5&page=1",
        type: "GET",
        dataType: "json",

        page: 2,
        success: function (news) {
            console.log(news);
            output_data ="";
            var latestnews = news.articles;
            output_data += '';
            for (var i in latestnews) {
                output_data += '<tr> <td>' + latestnews[i].title + '</td> <td><img id="img_table" src="' + latestnews[i].urlToImage + ' "></td></tr>';
            }
            $("#table_result").html(output_data);
        }
    });
}

//]]>

