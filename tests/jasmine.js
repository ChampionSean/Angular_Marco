describe('Lista de usuarios', function() {

beforeEach(module('firstApp'));

var myCtrl,
scope;

beforeEach(inject(function ($rootScope, $controller) {
scope = $rootScope.$new();
myCtrl = $controller('myCtrl', {
$scope: scope
});
}));
it('la lista mostrada debe coincidir con la informarcion del json', function () {
	var doble;
	$http.get("users.json").then(function(response) {
        doble = response.data.records;
    });
	for (i = 0; i < scope.myData.length; i++) {
    expect(scope.myData[i].Nombre).toEqual(doble[i].Nombre);
}

});

});

