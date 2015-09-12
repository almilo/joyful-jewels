var slideshow = document.getElementById('slideshow'), batchSize = 10;

process.mainModule.exports.getPictures(batchSize).forEach(addToSlider);

function addToSlider(picture) {
    var divElement = document.createElement('div'), imgElement = document.createElement('img');

    imgElement.setAttribute('src', picture);
    imgElement.setAttribute('width', '1024px');
    imgElement.setAttribute('height', '768px');
    divElement.appendChild(imgElement);
    slideshow.appendChild(divElement);
}

$(function () {
    var times = 0;

    $('#slideshow > div:gt(0)').hide();

    setInterval(function () {
        if (times < batchSize) {
            $('#slideshow > div:first')
                .fadeOut(1000)
                .next()
                .fadeIn(1000)
                .end()
                .appendTo('#slideshow');
            times++;
        } else {
            location.reload();
        }
    }, 5000);
});
