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
        
//    $('#sidebar').mouseover(function () {
//        // open or close navbar
//        $('#sidebar').toggleClass('active');
//        // close dropdowns
//        $('.collapse.in').toggleClass('in');
//        // and also adjust aria-expanded attributes we use for the open/closed arrows
//        // in our CSS
//        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
//    });


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

    
    
    

});

