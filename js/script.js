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