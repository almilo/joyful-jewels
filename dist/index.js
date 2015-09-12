var glob = require('glob'), path = require('path'), _ = require('lodash');

var picturesPath = path.join(__dirname, '..', 'pictures/**/*'), pictures = glob.sync(picturesPath);

exports.getPictures = function (howMany) {
    return _.chain(pictures)
        .shuffle()
        .take(howMany || 10)
        .value();
};
