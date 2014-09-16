module.exports = {
    sentiment : require("./lib/sentiment"),
    classify  : require("./lib/classify"),
    closest   : require("./lib/levenshtein"),
    tag       : require("./lib/classify/pos-js")
};
