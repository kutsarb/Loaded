// var Handlebars = require('handlebars');
$(document).ready(function () {


    function getSearchResults(where, query) {
        $.ajax(`/api/search/${where}/${query}`, {
            type: "GET",
        }).then(function (res) {
            
            // hbsObject = {
            //     load: res
            // };
            // console.log(hbsObject)
            
            // var template = $("#handlebarsTest");
            // var renderSearch = Handlebars.compile(template);
            // $("#searchBlockTest") = renderSearch(hbsObject);



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
                var buttonGroup = $("<div>")
                var buttonLabel1 = $("<label>")
                var buttonLabel2 = $("<label>")
                var buttonLabel3 = $("<label>")
                var buttonInput1 = $("<input type='radio' name='options' autocomplete='off'>")
                var buttonInput2 = $("<input type='radio' name='options' autocomplete='off'>")
                var buttonInput3 = $("<input type='radio' name='options' autocomplete='off'>")

                broker.addClass("p-2 m-2 border rounded")
                loadNum.addClass("p-2 m-2 border rounded")
                puAddress.addClass("p-2 m-2 border rounded")
                doAddress.addClass("p-2 m-2 border rounded")
                puDate.addClass("p-2 m-2 border rounded")
                dueDate.addClass("p-2 m-2 border rounded")
                trailer.addClass("p-2 m-2 border rounded")
                driverName.addClass("p-2 m-2 border rounded")
                buttonGroup.addClass("btn-group btn-group-toggle")
                buttonGroup.attr("data-toggle", "buttons")
                buttonLabel1.addClass("btn btn-danger")
                buttonLabel2.addClass("btn btn-warning")
                buttonLabel3.addClass("btn btn-success")
                broker.text(res[j].broker);
                loadNum.text(res[j].loadNum);
                puAddress.text(res[j].puAddress);
                doAddress.text(res[j].doAddress);
                puDate.text(res[j].puDate);
                dueDate.text(res[j].dueDate);
                trailer.text(res[j].trailer);
                driverName.text(res[j].Driver.driverName);

                

                resultBox.addClass("p-2 m-2 border rounded contentCol");
                resultsList.append(resultBox);
                resultBox.append(broker);
                resultBox.append(loadNum);
                resultBox.append(puAddress);
                resultBox.append(doAddress);
                resultBox.append(puDate);
                resultBox.append(dueDate);
                resultBox.append(trailer);
                resultBox.append(driverName);
                resultBox.append(buttonGroup)
                
                for (i=1; i<4; i++) {
                    

            
                    switch (i) {
                        case 1:
                            buttonInput1.attr("id", `option${i}`)
                            
                            buttonGroup.append(buttonLabel1)
                            buttonLabel1.append(buttonInput1)
                            buttonInput1.text(" delivered ")
                            break;
                        case 2:
                            buttonInput2.attr("id", `option${i}`)
                            buttonInput2.text(" en route ")
                            buttonGroup.append(buttonLabel2)
                            buttonLabel2.append(buttonInput2)
                             break;
                        case 3:
                            buttonInput3.attr("id", `option${i}`)
                            buttonInput3.text(" look ahead ")
                            buttonGroup.append(buttonLabel3)
                            buttonLabel3.append(buttonInput3)
                            break;
                    }
                    
                };

                
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

    $("input[name='ourRadio']:radio").change(function() {
     let query = ($(this).attr("name"));
     let select = ($(this).attr("value"));
        console.log(query)
        console.log(select)
        console.log("hi")
    });
   



});