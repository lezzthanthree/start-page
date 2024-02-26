var search = ""
var isUrl = false

function init()
{
    document.addEventListener('keydown', function handleKeyPress (event) {
        var key = event.key
        switch (key) {                
            case "Escape":
                search = ""
                $("#search-box").val("")
                $("#search").fadeOut(300, () => $("main").fadeIn(300))
                $("body").css("background", "#202020")
                isUrl = false
                break
            case "Backspace":
                $("#search-box").focus()
                break;
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
                if (isUrl)
                {
                    if (!search.startsWith("http"))
                    {
                        search = "https://" + search
                    }
                    window.open(search, "_self")
                    return
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
    document.querySelector("#search-box").addEventListener("input", (event) => {
        var data = event.target.value
        console.log(data)
        if (/^www\./i.test(data) || /^https:\/\//i.test(data) || /\.com$/.test(data))
        {
            $("body").css("background", "#115511")
            isUrl = true
            return
        }
        isUrl = false
        $("body").css("background", "#202020")
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