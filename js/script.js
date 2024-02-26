var search = ""

function init()
{
    document.addEventListener('keydown', function handleKeyPress (event) {
        var key = event.key
        switch (key) {                
            case "Escape":
                search = ""
                $("#search-box").val("")
                $("#search").fadeOut(300, () => $("main").fadeIn(300))
                break
            case "Enter":
                var display = $("#search").css("display")
                if (display == "none" || display == "" )
                {
                    return
                }
                search = $("#search-box").val()
                if (search.length == 0)
                {
                    search = "Rina Tennoji"
                }
                window.open("https://www.google.com/search?q=" + search, "_self")
            default:
                if (key.match(/^[\w\s\p{P}]$/u))
                {
                    var display = $("#search").css("display")
                    if (display == "none" || display == "" )
                    {
                        $("#search-box").val($("#search-box").val() + key)
                    }
                    $("main").hide(300, () => $("#search").fadeIn(100).css({display: "flex"}))
                    $("#search-box").focus()
                }
                break
            }
            
    })
}


function getTimeNow()
{
    let date = new Date()
    let dateString = `${date.toLocaleDateString('en-US', { weekday: 'long' })}, ${date.toLocaleDateString('en-US', { month: 'long' })} ${date.getDate()}, ${date.getFullYear()}, ${date.toLocaleTimeString()}`
    return dateString
}

function getSpan()
{
    let span = document.getElementById("date")
    return span
}

function setSpan()
{
    let span = getSpan()
    span.innerText = getTimeNow()
}


setInterval(
    () => setSpan(), 500
)

init()