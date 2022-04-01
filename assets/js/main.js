const source = "https://raw.githubusercontent.com/pandas-dev/pandas/master/pandas/core/common.py"
let step = 228
let fim = 0
let fonte = ""
const bspkeycode = 8
let $source, $blink

const draw = () => {
    let text = fonte.substring(step, step+fim) 

    $source.html(
        PR.prettyPrintOne(text)
    )
}

const addCursor = () => {
    $blink.show()
}

const removeCursor = () => {
    $blink.hide()
}

const blink = () => {
    addCursor()
    window.setTimeout(removeCursor, 500)
}

const press = e => {
    let carrier = Math.round(Math.random()*10%3)+1
    if (e && e.keyCode === bspkeycode)
        fim -= carrier
    else 
        fim += carrier
    
    if (fim < 0)
        fim = 0

    draw()
    window.scrollTo(0, document.body.scrollHeight)
}

const isMobileDevice = () => {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

$(document).ready(() => {
    window.setInterval(blink, 1000)
    $source = $('#source')
    $blink = $('#blink')
    $('#texto').focus()
    $(document).on('keydown', press)
    $('#texto').on('keydown', press)
    $(document).on('click', () => {
        $('#texto').focus()
        press()
    })

    if (!isMobileDevice()) 
        $('#texto').hide()
    

    $.get(source, function (data) {
        fonte = data
        step = fonte.indexOf("def is_bool_indexer")
    })
});
