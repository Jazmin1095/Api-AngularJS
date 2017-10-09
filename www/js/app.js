(function () {
    var app = angular.module('store', [])
   
      /*  {
            name: 'Dodecahedrom',
            price: 1000,
            description: 'Lorem ipsum',
            images: 'image_01.jpg',
            stock: 10,
            discounts: [10, 15, 20],
            reviews: [
                {
                    stars: 5,
                    comments: 'Lorem ipsum',
                    author: 'Jazmin@gmail.com'
                },
                {
                    stars: 5,
                    comments: 'Lorem ipsum',
                    author: 'jovana@gmail.com',
                },
                {
                    stars: '5',
                    comments: 'Lorem ipsum',
                    author: 'jovanaj@hotmail.com'
                }
            ],
        },
        {
            name: 'Dodecahedrom',
            price: 1000,
            description: 'Lorem ipsum',
            images: 'image_01.jpg',
            stock: 10,
            discounts: [10, 15, 20],
            reviews: [
                {
                    stars: 5,
                    comments: 'Lorem ipsum',
                    author: 'Jovana'
                },
                {
                    stars: 5,
                    comments: 'Lorem ipsum',
                    author: 'Jovana',
                },
                {
                    stars: 5,
                    comments: 'Lorem ipsum',
                    author: 'Jovana'
                }
            ],
        },
        {
            name: 'Dodecahedrom',
            price: 1000,
            description: 'Lorem ipsum',
            images: 'image_01.jpg',
            stock: 10,
            discounts: [10, 15, 20],
            reviews: [
                {
                    stars: 5,
                    comments: 'Lorem ipsum',
                    author: 'Jovana'
                },
                {
                    stars: 5,
                    comments: 'Lorem ipsum',
                    author: 'Jovana'
                },
                {
                    stars: 5,
                    comments: 'Lorem ipsum',
                    author: 'Jovana'
                }
            ]
        }*/
    
    app.controller('StoreController', ['$http','$scope', function($http,$scope) {
        var store = this;
        var url = 'http://localhost:3001/api/fgemproduct/';
        store.p = {
            name: '',
            price: 0,
            description: '',
            images: '',
            stock: 0,
            discounts: 0,
            reviews: [
                {
                    stars: 0,
                    comments: '',
                    author: ''
                }
            ]
        };
        store.view = true;

        $http.get(url)
        .then(function success(response){
            console.log(response);
            console.log(response.data.fgemproducts);
            store.Product = response.data.fgemproducts;
            console.log(this.fgemproducts);
        });
        store.addProduct = function(fgemproduct) {
            console.log(fgemproduct);
            $http.post(url, fgemproduct).then(function success(response) {
            },
            function err(err){
              console.log(err);
            })
          }
        /*store.deleteProduct = function(id){
            console.log(id);
            $http.delete(url + id)
            .then(function success(response){
                console.log(`El producto con el id ${id} se ha eliminado`);
                document.location.reload();
            }, function err(err){
                console.log(`El producto no se ha eliminado ERR: ${err}`);
            })
            }*/
            $scope.borrar=function(fgemproducts){
                $http({
                    method: 'DELETE',
                    url: 'http://localhost:3001/api/fgemproduct/' + fgemproducts,
                    headers:{
                        'Content-type': 'aplication/json;charset=utf-8'
                    }
                })
                .then(function(response){
                    document.location.reload();
                    console.log(response.data);
                }, function(rejetion){
                    console.log(rejetion.data);
                
                });
            }





            
            store.getUniqueProduct = function(id){
                $http.get(url + id).then(function success(response){
                    console.log(response);
                    store.products = response.data.products;
                },
                function err(err){
                    console.log(`El producto no se ha encontradoERR:${err}`);  
                               
            });
        }


    }])
})();