const regex = /\d\d?:\d\d */g;

function replace(elem) {
    var source = elem.childNodes;
    source.forEach(function(item){
        console.log(item)
        if (item.nodeType == 3) {
            const regex = /\s\d\d?:\d\d\s*pst/g;

            info = regex.exec(paragraph)

            while (info != null) {
                console.log(info)
                paragraph = paragraph.substring(0,info.index) + "yay" + paragraph.substring(info.index+info[0].length,paragraph.length)
                regex.lastIndex = info.index+3
                info = regex.exec(paragraph)
                console.log(paragraph)
                console.log(info)
            }
            console.log(paragraph)
        } else {
            replace(item)
        }
    });
}

replace(document.body);
//await new Promise(r => setTimeout(r, 2000));