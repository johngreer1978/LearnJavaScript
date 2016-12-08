/**
 * Created by davem on 27/11/2016.
 */
'use strict';
var learnjavascript={};
learnjavascript.questionView=function(){
    return $('<div class="question-view">').text('Arriving Soon!!!');
};

learnjavascript.showView = function (hash){
    var routes={
        '#question-1': learnjavascript.questionView};

    var viewFn = routes[hash];
    if (viewFn) {
        $('view-container').empty().append(viewFn());
    }

};



