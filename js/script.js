var search = "";
var isUrl = false;
var current = "main";

function init() {
    $("#search-box").val("");
    document.addEventListener("keydown", function handleKeyPress(event) {
        var key = event.key;
        // console.log(key);
        switch (key) {
            case "Escape":
                search = "";
                $("#search-box").val("");
                if (current != "main") {
                    $(current).fadeOut(500, () => $("main").fadeIn(300));
                    $("body").css("background", "#202020");
                    isUrl = false;
                    current = "main";
                }
                break;
            case "Backspace":
                $("#search-box").focus();
                break;
            case "Enter":
                var display = $("#search").css("display");
                if (display == "none" || display == "") {
                    return;
                }
                search = $("#search-box").val();
                if (search.length == 0) {
                    search = "Rina Tennoji";
                }
                if (isUrl) {
                    if (!search.startsWith("http")) {
                        search = "https://" + search;
                    }
                    window.open(search, "_self");
                    return;
                }
                window.open(
                    "https://www.google.com/search?q=" + search,
                    "_self"
                );
            case "Tab":
                var search = $("#search").css("display");
                if (search == "flex") {
                    return;
                }
                $("main").fadeOut(300, () =>
                    $("#research").fadeIn(100).css({ display: "flex" })
                );
                current = "#research";
                $("body").css("background", "#2f2020");
            default:
                if (key.match(/^[\w\s\p{P}]$/u)) {
                    var research = $("#research").css("display");
                    var display = $("#search").css("display");

                    if (research == "flex") {
                        return;
                    }
                    if (display == "none" || display == "") {
                        $("#search-box").val($("#search-box").val() + key);
                    }
                    $("main").fadeOut(300, () =>
                        $("#search").fadeIn(100).css({ display: "flex" })
                    );
                    $("#search-box").focus();
                    current = "#search";
                }
                break;
        }
    });
    document.querySelector("#search-box").addEventListener("input", (event) => {
        var data = event.target.value;
        console.log(data);
        if (
            /^www\./i.test(data) ||
            /^https:\/\//i.test(data) ||
            /\.com$/.test(data)
        ) {
            $("body").css("background", "#114411");
            isUrl = true;
            return;
        }
        isUrl = false;
        $("body").css("background", "#202020");
    });
}

function getTimeNow() {
    let date = new Date();
    let dateString = `${date.toLocaleDateString("en-US", {
        weekday: "long",
    })}, ${date.toLocaleDateString("en-US", {
        month: "long",
    })} ${date.getDate()}, ${date.getFullYear()}, ${date.toLocaleTimeString()}`;
    return dateString;
}

function getSpan() {
    let span = document.getElementById("date");
    return span;
}

function setSpan() {
    let span = getSpan();
    span.innerText = getTimeNow();
}

setInterval(() => setSpan(), 500);

init();
