var search = ""

function init()
{
    document.addEventListener('keydown', function handleKeyPress (event) {
        var key = event.key
        switch (key) {
            case "Backspace":
                if (search.length > 0)
                {
                    search = search.substring(0, search.length - 1)
                }
                break
                
            case "Escape":
                search = ""
                $("#search").fadeOut(300, () => $("main").fadeIn(300))
                break
            case "Enter":
                if (document.getElementById("search").style.display == "none" || document.getElementById("search").style.display == "" )
                {
                    return
                }
                if (search.length == 0)
                {
                    search = "Rina Tennoji"
                }
                window.open("https://www.google.com/search?q=" + search, "_self")
            default:
                if (key.match(/^[\w\s\p{P}]$/u))
                {
                    search += key
                    $("main").fadeOut(300, () => $("#search").fadeIn(300).css({display: "flex"}))
                }
                break
            }

            document.getElementById("search-box").value = search
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