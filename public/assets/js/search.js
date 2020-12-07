// var Handlebars = require('handlebars');
$(document).ready(function () {


    function getSearchResults(where, query) {
        $.ajax(`/api/search/${where}/${query}`, {
            type: "GET",
        }).then(function (res) {
            console.log(res)
            for (let j = 0; j < res.length; j++) {

                var resultsList = $("#results-list")
                var resultBox = $("<tr>")
                var emptyRow = $("<tr>")
                var emptyCell = $("<td>")
                var broker = $("<td>")
                var loadNum = $("<td>")
                var puAddress = $("<td>")
                var doAddress = $("<td>")
                var puDate = $("<td>")
                var dueDate = $("<td>")
                var trailer = $("<td>")
                var driverName = $("<td>")
                var futureBtn = $("<input>")
                var futureBtnLabel = $("<label>")
                var enRouteBtn = $("<input>")
                var enRouteLabel = $("<label>")
                var deliveredBtn = $("<input>")
                var deliveredLabel = $("<label>")
                var brokerLabel = $("<label>")

                brokerLabel.attr("for","broker")
                broker.text("Broker:")
                broker.addClass("p-2 m-2 border rounded bold")
                broker.addClass("broker")
                loadNum.addClass("p-2 m-2 border rounded")
                puAddress.addClass("p-2 m-2 border rounded")
                doAddress.addClass("p-2 m-2 border rounded")
                puDate.addClass("p-2 m-2 border rounded")
                dueDate.addClass("p-2 m-2 border rounded")
                trailer.addClass("p-2 m-2 border rounded")
                driverName.addClass("p-2 m-2 border rounded")
                broker.html("Broker: "+'<br>'+res[j].broker);
                loadNum.html("Load #: "+'<br>'+res[j].loadNum);
                puAddress.html("Pick Up: "+'<br>'+res[j].puAddress);
                doAddress.html("Drop Off: "+'<br>'+res[j].doAddress);
                puDate.html("Pick Up: "+'<br>'+res[j].puDate);
                dueDate.html("Drop Off: "+'<br>'+res[j].dueDate);
                trailer.html("Trailer: "+'<br>'+res[j].trailer);
                driverName.html("Driver: "+'<br>'+res[j].Driver.driverName);
                emptyRow.addClass("spacer")

                futureBtn.addClass("radio");
                futureBtn.attr("type","radio");
                futureBtn.attr("value","future");
                futureBtn.attr("name",`${res[j].loadNum}`);
                futureBtnLabel.attr("for","future");
                futureBtnLabel.html("Future");
                futureBtnLabel.addClass("labels")

                enRouteBtn.addClass("radio");
                enRouteBtn.attr("type","radio");
                enRouteBtn.attr("value","enRoute");
                enRouteBtn.attr("name",`${res[j].loadNum}`);
                enRouteLabel.attr("for","enRoute");
                enRouteLabel.text("En Route");
                enRouteLabel.addClass("labels")

                deliveredBtn.addClass("radio");
                deliveredBtn.attr("type","radio");
                deliveredBtn.attr("value","delivered");
                deliveredBtn.attr("name",`${res[j].loadNum}`);
                deliveredLabel.attr("for","delivered");
                deliveredLabel.text("Delivered");
                deliveredLabel.addClass("labels")

                resultBox.addClass("rows p-2 m-2 border rounded");
            
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

                resultBox.append(brokerLabel);

                resultsList.append(emptyRow)

                emptyRow.append(emptyCell)
                
                emptyRow.append(emptyCell)

                emptyRow.append(emptyCell)
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