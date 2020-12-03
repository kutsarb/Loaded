
$(document).ready(function () {

    // modal inputs element
    const driverValue = $("#driverNameInput");
    const cellValue = $("#cellInput");
    const truckNumValue = $("#truckNumberInput");
    const brokerValue = $("#brokerInput");
    const loadNumValue = $("#loadNumInput");
    const trailerValue = $("#trailerInput");
    const puAddValue = $("#puAddInput");
    const doAddValue = $("#doAddInput");
    const puTimeValue = $("#puTimeInput");
    const doTimeValue = $("#doTimeInput");
    const loadDriverValue = $("#loadDriver");

    // focus output elements
    const brokerFocus = $("#brokerFocus");
    const loadNumFocus = $("#loadNumFocus");
    const trailerNumFocus = $("#trailerNumFocus");
    const puAddressFocus = $("#puAddressFocus");
    const puDateFocus = $("#puDateFocus");
    const doAddressFocus = $("#doAddressFocus");
    const dueDateFocus = $("#dueDateFocus");
    const driverNameFocus = $("#driverNameFocus");
    const driverCellFocus = $("#driverCellFocus");
    const truckNumFocus = $("#truckNumFocus");

    const currentdate = new Date(); 
    const datetime = currentdate.getFullYear() + "-"
                + (currentdate.getMonth()+1)  + "-" 
                + currentdate.getDate() + " "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    console.log(datetime)

    let map;

    function initMap() {
        map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8,
        });
    }

    $("#sidebar").mouseenter( function () {
        $("#sidebar").removeClass("active");
    });

    $("#sidebar").mouseleave( function () {
        $("#sidebar").addClass("active")
    });
        

    // post for driver
    $("#submitDriver").click(function () {
        if (!driverValue.val().trim() || !cellValue.val().trim() || !truckNumValue.val()) {
            return;
        }

        let newPost = {
            driverName: driverValue
                .val()
                .trim(),
            cell: cellValue
                .val()
                .trim(),
            truck: truckNumValue
                .val()
                .trim(),
        };
        console.log(newPost);

        function postDriver(post) {
            
            $.ajax("/api/driver", {
                type: "POST",
                data: post
            }).then(function() {
                
                window.location.href = "/";
                // location.reload();
            });

        };

        postDriver(newPost);
    });

    // post for loads
    $("#submitLoad").click(function () {
        if (!brokerValue.val() || 
            !loadNumValue.val() || 
            !trailerValue.val() ||
            !puAddValue.val() ||
            !doAddValue.val() ||
            !puTimeValue.val() ||
            !doTimeValue.val() ) 
            {
            return;
        }

        let newPost = {
            broker: brokerValue
                .val()
                .trim(),
            loadNum: loadNumValue
                .val()
                .trim(),
            trailer: trailerValue
                .val()
                .trim(),
            puAddress: puAddValue
                .val()
                .trim(),
            doAddress: doAddValue
                .val()
                .trim(),
            puDate:puTimeValue
                .val()
                .trim(),
            dueDate: doTimeValue
                .val()
                .trim(),
            DriverId: loadDriverValue
                .val()
                .trim()
        };
        console.log(newPost);

        function postLoad(post) {
            
            $.ajax("/api/loads", {
                type: "POST",
                data: post
            }).then(function() {
                
                window.location.href = "/";
                // location.reload();
            });

        };

        postLoad(newPost);
    });

    $(".enRoute").click( function () {
        let loadId = ($(this).data("id"));

        $.ajax(`api/loads/${loadId}`, {
            type: "GET"
        }).then(function (res) {
            console.log(res)
            brokerFocus.text(res[0].broker);
            loadNumFocus.text(res[0].loadNum);
            trailerNumFocus.text(res[0].trailer);
            puAddressFocus.text(res[0].puAddress);
            puDateFocus.text(res[0].puDate);
            doAddressFocus.text(res[0].doAddress);
            dueDateFocus.text(res[0].dueDate);
            driverNameFocus.text(res[0].Driver.driverName);
            driverCellFocus.text(res[0].Driver.cell);
            truckNumFocus.text(res[0].Driver.truck);
        });



    });

    



    
    

});

