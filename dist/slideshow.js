var sbSlider = document.getElementById('sb-slider'), batchSize = 10;

process.mainModule.exports.getPictures(batchSize).forEach(addToSlider);

function addToSlider(picture) {
    var liElement = document.createElement('li'), imgElement = document.createElement('img');

    imgElement.setAttribute('src', picture);
    imgElement.setAttribute('width', '1024px');
    imgElement.setAttribute('height', '768px');
    liElement.appendChild(imgElement);
    sbSlider.appendChild(liElement);
}

$(function () {
    var times = 0,
        slicebox = $('#sb-slider').slicebox({
            orientation: 'r',
            cuboidsRandom: true,
            disperseFactor: 30
        });

    setInterval(function () {
        if (times < batchSize) {
            slicebox.next();
            times++;
        } else {
            location.reload();
        }
    }, 5000);
});
