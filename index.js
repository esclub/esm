var esm = {

}
function appendStyle(id, text) {
    let styleNode = document.createElement('style')
    styleNode.innerHTML = text
    styleNode.setAttribute("data-url", id)
    document.head.appendChild(styleNode)
}
esm.load = function (url) {
    fetch(url)
        .then(function (res) {
            return res.text()
        }).then(function (text) {
        appendStyle(url, text)
    })
}
esm.appendCSS = function (text) {
    let id = String(Math.random()*100000000)
    appendStyle(id,text)
}
export default esm