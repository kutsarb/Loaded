$(document).ready(function () {


    function getLoads(loadNum) {
        $.ajax(`/api/search/${loadNum}`, {
            type: "GET",
        }).then(function (res) {
            console.log(res)
            let template = $("#loadResultDisplay")
            let renderResults = Handlebars.compile(template);
            $("#eachResult") = renderResults(res);
            // window.location.href = "/";
            // location.reload();

        });
    }

    $("#loadSrch").click(function () {
        var loadNum = $("#loadNum").val();
        getLoads(loadNum);

    });

})