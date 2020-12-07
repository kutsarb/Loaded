// Driver Data
// .Name
// .Cell
// .Truck

// Load Data
// .Broker
// .Load Number
// .pick up add
// .drop off add
// .pick up date/time
// .due date date/time
// .trailer
// .active boolean
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
        + (currentdate.getMonth() + 1) + "-"
        + currentdate.getDate() + " "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();
    console.log(datetime)

    let map;
    function initMap() {
        var options = {
         center: { lat: -34.397, lng: 150.644 },
         zoom: 8,
        };

        var map = new google.maps.Map(document.getElementById("map"), options);
        return map;            
    };


    initMap();






    $("#sidebar").mouseenter(function () {
        $("#sidebar").removeClass("active");
    });

    $("#sidebar").mouseleave(function () {
        $("#sidebar").addClass("active")
    });

    //    $('#sidebar').mouseover(function () {
    //        // open or close navbar
    //        $('#sidebar').toggleClass('active');
    //        // close dropdowns
    //        $('.collapse.in').toggleClass('in');
    //        // and also adjust aria-expanded attributes we use for the open/closed arrows
    //        // in our CSS
    //        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    //    });

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
            }).then(function () {

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
            !doAddValue.val()) {
            return;
        }

        const puDateValue = $("#puTimeInput").val();
        const puTimeValue = $("#datetimepicker1").find(".time").val();
        const doDateValue = $("#doTimeInput").val();
        const doTimeValue = $("#datetimepicker2").find(".time").val();
        
        const compiledPuDate = puDateValue + " " + puTimeValue;
        const compiledDueDate = doDateValue + " " + doTimeValue; 
        console.log(compiledPuDate)
        console.log(compiledDueDate)
        
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
            puDate: compiledPuDate,
            dueDate: compiledDueDate,
            DriverId: loadDriverValue
                .val()
                .trim()
        };
        console.log(newPost);

        function postLoad(post) {

            $.ajax("/api/loads", {
                type: "POST",
                data: post
            }).then(function () {

                window.location.href = "/";
                // location.reload();
            });

        };

        postLoad(newPost);
    });


    $(".enRouted").click(function(){
        $(".enRouted").removeClass("activ");
        $(this).addClass("activ")
    })

    function updateFlag(req) {
        $.ajax({
          method: "PUT",
          url: `/api/loads`,
          data: req
        })
          .then(function() {
            console.log("flag updated")
          });
    }

    $(".deliverButton").click(function(){
        let id = ($(this).data("id"));
        let button = $(this);
        
        button.removeClass("btn-warning");
        button.addClass("btn-danger");
        button.empty();
        button.html("<i class='fas fa-truck-loading'></i>")
        
        var flagPutReq = {
            id: id,
            enRoute: 0,
            delivered: 1,
            
        }
        updateFlag(flagPutReq);
    });

    $(".enRouteButton").click(function(){
        let id = ($(this).data("id"));
        let button = $(this);
        
        button.removeClass("btn-success");
        button.addClass("btn-warning");
        button.empty();
        button.html("<i class='fas fa-truck-loading'></i>")
        
        var flagPutReq = {
            id: id,
            enRoute: 1,
            future: 0,
            
        }
        updateFlag(flagPutReq);
    });

 

    $(".enRoute").click(function () {
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

            function calculateRoute(from, to) {
                // Center initialized to Naples, Italy
                var myOptions = {
                    zoom: 10,
                    center: new google.maps.LatLng(40.84, 14.25),
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                // Draw the map
                var mapObject = new google.maps.Map(document.getElementById("map"), myOptions);

                var directionsService = new google.maps.DirectionsService();
                var directionsRequest = {
                    origin: from,
                    destination: to,
                    travelMode: google.maps.DirectionsTravelMode.DRIVING
                };
                directionsService.route(
                    directionsRequest,
                    function (response, status) {
                        if (status == google.maps.DirectionsStatus.OK) {
                            new google.maps.DirectionsRenderer({
                                map: mapObject,
                                directions: response
                            });
                        }
                        else
                        window.alert("directions request failed, see" + status)
                    }
                );
            }

            calculateRoute(res[0].puAddress, res[0].doAddress);



        });


    });

    $(function () {
        $('#datetimepicker1').datepicker({
            format: 'mm-dd-yyyy',
            autoclose: true
        });
    });

    $(function () {
        $('#datetimepicker2').datepicker({
            format: 'mm-dd-yyyy',
            autoclose: true
        });
    });

});


