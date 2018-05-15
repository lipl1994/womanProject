var sec2 = document.querySelector(".sec-2");
var ct1 = sec2.querySelector(".ct-1");
var ct3 = sec2.querySelector(".ct-3");
var len = data.length;
var strLeft = "";
var strRight = "";
for (var i = 0; i < len; i++) {
    strLeft += `<div class="ct-title">${data[i].title}</div>`;
    var contentLen = data[i].content.length;
    for (var j = 0; j < contentLen/2; j++) {
        strLeft += ` <div class="ct-li">
                        <div class="ct-source fr"><span>${data[i].content[j].item_webname}</span></div>
                        <div class="ct-content fr" title='${data[i].content[j].item_title}'>${data[i].content[j].item_title}</div>
                        <div class="ct-time fr">${data[i].content[j].item_webtime}</div>
                    </div>`;
    }
}
ct1.innerHTML=strLeft;

for (var i = 0; i < len; i++) {
    strRight += `<div class="ct-title">${data[i].title}</div>`;
    var contentLen = data[i].content.length;
    for (var j = contentLen/2; j < contentLen; j++) {
        strRight += ` <div class="ct-li">
                        <div class="ct-source fl"><span>${data[i].content[j].item_webname}</span></div>
                        <div class="ct-content fl" title='${data[i].content[j].item_title}'>${data[i].content[j].item_title}</div>
                        <div class="ct-time fl">${data[i].content[j].item_webtime}</div>
                    </div>`;
    }
}

ct3.innerHTML=strRight;

var lctTitle=ct1.querySelectorAll('.ct-title');
lctTitle.forEach(function(item){
    item.nextElementSibling.nextElementSibling.classList.add('p-l-56');
    item.nextElementSibling.nextElementSibling.nextElementSibling.classList.add('p-l-96');
    item.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.classList.add('p-l-56');
});
var rctTitle=ct3.querySelectorAll('.ct-title');
rctTitle.forEach(function(item){
    item.nextElementSibling.nextElementSibling.classList.add('p-r-56');
    item.nextElementSibling.nextElementSibling.nextElementSibling.classList.add('p-r-96');
    item.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.classList.add('p-r-56');
})