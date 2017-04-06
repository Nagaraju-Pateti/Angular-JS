
app.directive("myDirectiveWithInput",function(){

return{

    template:"<div style='border:solid 1px black'><p><input type='text' ng-model='person.firstname' ></p><p><input type='text' ng-model='person.lastname'></p></div>"
}

});