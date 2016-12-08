/**
 * Created by davem on 27/11/2016.
 */
describe('LearnJavascript', function(){
    it ('can show question view',function(){
        learnjavascript.showView('#question-1');
        expect($('.view-container .question-view').length).toEqual(1);
    });
    it ('shows the landing page view when their is not a hash', removeFunctionWidthId(){
        learnjavascript.showView('');
        expect($('.view-container .landing-view').length).toEqual(1);
    };
});