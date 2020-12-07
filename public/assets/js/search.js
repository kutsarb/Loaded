// var Handlebars = require('handlebars');
$(document).ready(function () {


    function getSearchResults(where, query) {
        $.ajax(`/api/search/${where}/${query}`, {
            type: "GET",
        }).then(function (res) {
            console.log(res)
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
                var futureBtn = $("<input>")
                var futureBtnLabel = $("<label>")
                var enRouteBtn = $("<input>")
                var enRouteLabel = $("<label>")
                var deliveredBtn = $("<input>")
                var deliveredLabel = $("<label>")

                broker.addClass("p-2 m-2 border rounded")
                loadNum.addClass("p-2 m-2 border rounded")
                puAddress.addClass("p-2 m-2 border rounded")
                doAddress.addClass("p-2 m-2 border rounded")
                puDate.addClass("p-2 m-2 border rounded")
                dueDate.addClass("p-2 m-2 border rounded")
                trailer.addClass("p-2 m-2 border rounded")
                driverName.addClass("p-2 m-2 border rounded")
                broker.text(res[j].broker);
                loadNum.text(res[j].loadNum);
                puAddress.text(res[j].puAddress);
                doAddress.text(res[j].doAddress);
                puDate.text(res[j].puDate);
                dueDate.text(res[j].dueDate);
                trailer.text(res[j].trailer);
                driverName.text(res[j].Driver.driverName);

                futureBtn.addClass("future");
                futureBtn.attr("type","radio");
                futureBtn.attr("value","future");
                futureBtn.attr("name",`${res[j].loadNum}`);
                futureBtnLabel.attr("for","future");
                futureBtnLabel.text("Future");

                enRouteBtn.addClass("enRoute");
                enRouteBtn.attr("type","radio");
                enRouteBtn.attr("value","enRoute");
                enRouteBtn.attr("name",`${res[j].loadNum}`);
                enRouteLabel.attr("for","enRoute");
                enRouteLabel.text("En Route");

                deliveredBtn.addClass("delivered");
                deliveredBtn.attr("type","radio");
                deliveredBtn.attr("value","delivered");
                deliveredBtn.attr("name",`${res[j].loadNum}`);
                deliveredLabel.attr("for","delivered");
                deliveredLabel.text("Delivered");

                resultBox.addClass("p-2 m-2 border rounded");
            
                resultsList.append(resultBox);

                resultBox.append(broker);

                resultBox.append(loadNum);

                resultBox.append(puAddress);

                resultBox.append(doAddress);

                resultBox.append(puDate);

                resultBox.append(dueDate);

                resultBox.append(trailer);

                resultBox.append(driverName);

                resultBox.append(enRouteBtn);

                resultBox.append(enRouteLabel);

                resultBox.append(futureBtn);

                resultBox.append(futureBtnLabel);

                resultBox.append(deliveredBtn);

                resultBox.append(deliveredLabel);


                
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
        var searchValue = $("#searchValue").val();
        var searchParam = $("#selection").val()
        console.log(searchValue)
        
        switch (searchParam) {
            case "Load #":
            let where1 = "loadNum";
            let query1 = searchValue    
            getSearchResults(where1, query1);
            break;
            case "Broker":
            let where2 = "broker";
            let query2 = searchValue    
            getSearchResults(where2, query2);
            break;
        }

    });



})