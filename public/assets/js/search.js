// var Handlebars = require('handlebars');
$(document).ready(function () {


    function getLoadNum(loadNum) {
        $.ajax(`/api/search/${loadNum}`, {
            type: "GET",
        }).then(function (res) {
            console.log(res[0].loadNum)
            for (let j = 0; j < res.length; j++) {

                var resultsList = $("#results-list")
                var resultBox = $("<div>")
                var broker = $("<p>")
                var loadNum = $("<p>")
                var puAddress = $("<p>")
                var doAddress = $("<p>")
                var puDate = $("<p>")
                var dueDate = $("<p>")
                var trailer = $("<p>")
                var driverName = $("<p>")


                broker.text(res[j].broker);
                loadNum.text(res[j].loadNum);
                puAddress.text(res[j].puAddress);
                doAddress.text(res[j].doAddress);
                puDate.text(res[j].puDate);
                dueDate.text(res[j].dueDate);
                trailer.text(res[j].trailer);
                driverName.text(res[j].driverName);

                resultBox.addClass("p-2 m-2 border rounded");

                resultsList.append(resultBox);

                resultBox.append(broker);

                resultBox.append(loadNum);

                //     switch(res[j]){ 

                //         case moment().add(0, 'days'): 

                //         var broker = $

                //         $("#day-0").append(loadNum.append(body));

                //         break;
                //     }
            }
        });
    }

    $("#loadSrch").click(function () {
        var loadNum = $("#loadNum").val();
        getLoadNum(loadNum);



        // var loadNum = $("#loadNum").val();

        // switch (searchParam){
        //     case loadNum:
        //     getLoadNum();
        //     break;


        // }

    });



})