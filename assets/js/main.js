const source = "https://raw.githubusercontent.com/turicas/rows/develop/rows/plugins/xlsx.py"
let step = 772
let fim = 0
let fonte = ""
const bspkeycode = 8;

const draw = () => {
    $('#source').html(
        PR.prettyPrintOne(
            fonte.substring(step, step+fim)
        )
    )
}

$(document).ready(() => {
    $(document).on('keydown', (e) => {
        let carrier = Math.round(Math.random()*10%4)+1
        if (e.keyCode === bspkeycode)
            fim -= carrier
        else 
            fim += carrier
        
        if (fim < 0)
            fim = 0

        draw()
        window.scrollTo(0, document.body.scrollHeight)
    });

    $.get(source, function (data) {
        fonte = data
        step = fonte.indexOf("from __future__")
    })
});
