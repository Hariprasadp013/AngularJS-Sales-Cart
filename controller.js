var app= angular.module("myApp",[]);
app.controller("myControl",function($scope){
	$scope.items=[
		{name:"Apple",
	 	desc:"Eat one every day to keep the doctor away!",
	 	price:12,
	 	img:"apple",
	 	active:false},
		{name:"Avocado",
		desc:"Guacamole anyone?",
	 	price:23,
	 	img:"avocado",
	 	active:false},
		{name:"Banana",
	 	desc:"These are rich in Potassium and easy to peet.",
	 	price:5,
	 	img:"banana",
	 	active:false},
		{name:"Cantaloupe",
	 	desc:"Delicious and refreshing.",
	 	price:8,
	 	img:"cantaloupe",
	 	active:false},
		{name:"Fig",
	 	desc:"OK, not that nutritious, but sooo good!",
	 	price:10,
	 	img:"fig",
	 	active:false},
		{name:"Grape",
	 	desc:"Whine is great, but grapes are even better.",
	 	price:7,
	 	img:"grape",
	 	active:false},
		{name:"Grapefruit",
	 	desc:"Pink or red, always healthy and delicious.",
	 	price:13,
	 	img:"grapefruit",
	 	active:false},
		{name:"Guava",
	 	desc:"Exotic, fragrant, tasty!",
	 	price:11,
	 	img:"guava",
	 	active:false}
	];
	$scope.cart=[];
	$scope.addCart = function(item){
		var obj = {};
		obj["name"] = item.name;
		obj["amount"] = item.price;
		($scope.cart).push(obj);
	};
	$scope.totalPrice = function(){

	
		var total=0;	
		for(i=0;i<($scope.cart).length;i++)
			total+=$scope.cart[i]["amount"];
		return total;		
	};
	$scope.totalCount = function(){
		var count=0;

						
		for(i=0;i<($scope.cart).length;i++)
			count++;
		return count;		
	};
});