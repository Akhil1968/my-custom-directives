var app = angular.module('myCards', []);

app.directive('contentDescriber', function() {
  return {
    scope: {
      dirTitle: '@ contentTitle',
      dirPic: '= contentPic',
      dirContent: '= contentContent',
      dirFn : '& contentFunction'
    },
    templateUrl: 'contentDescriber.html'
  };
});  //app.directive

app.controller('DataController', function(){
var self = this;
self.myFunction = function(){
	console.log("I am a function in controller");
}
self.places = [
	{
	 title: "Antelope Canyon, Arizona, USA", 
	 description: "In the Navajo desert of Arizona, Antelope Canyon is a slot canyon made up of stunning cracks and corkscrews, creating a wonderful light show. ",
	 image: "../images/antelope_canyon_arizona_usa.jpg"
	},
	{
	 title: "Huacachina, Peru", 
	 description: "Catch a glimpse of this impressive desert oasis, built in the 1930s around an existing watering hole. Keep your eyes peeled for a glimpse of the lake’s legendary resident, a mermaid.",
	 image: "../images/atacama_desert_oasis_huacachina_peru.jpg"
	},
	{
	 title: "The Dark Hedges, Northern Ireland", 
	 description: "If you go down to the woods today, drive through the Dark Hedges if you’re in Ballymoney, Northern Ireland, a tree-lined road on the coast of Antrim. Game of Thrones fans will also recognise this area as the Kingsroad.",
	 image: "../images/dark_hedges_ballymoney_northern_ireland_road_trees.jpg"
	},
	{
	 title: "Fethiye, Turkey", 
	 description: "Fethiye attracts its fair share of holidaymakers, and no wonder, with its selection of beaches: Oludeniz with its blue lagoon, Kelebekler Vadisi with its butterflies, pine-fringed Kıdrak and sunset spot Calis among other gems.",
	 image: "../images/fethiye.jpg"
	}
	];
	
self.dogs = [
	{
	 title: "Japanese Akita", 
	 description: "The Akita (秋田犬 Akita-inu, Akita-ken?) is a large breed of dog originating from the mountainous northern regions of Japan. ",
	 image: "../images/Japaneseakita.jpg"
	},
	{
	 title: "American Bulldog", 
	 description: "The American Bulldog is a breed of working dog. The names associated with the Bully and Standard types are those of the breeders who were influential in developing them, John D. Johnson (Bully) and Alan Scott (Standard).",
	 image: "../images/americanBullDog.jpg"
	},
	{
	 title: "Combai, India", 
	 description: "The Combai is usually tan or red brown with a black mask, and with a dark line along the back. It is found in India, often with a black mouth, much more pendent ears, a more savage temper, and a tendency to be active.",
	 image: "../images/Combai_dogIndia.jpg"
	},
	{
	 title: "Labrador", 
	 description: "The Labrador Retriever, also Labrador, is a type of retriever-gun dog. The Labrador is one of the most popular breeds of dog in the United Kingdom and the United States.A favorite disability assistance breed in many countries, Labradors are frequently trained to aid the blind, those who have autism, to act as a therapy dog and perform screening and detection work for law enforcement and other official agencies. They are prized as sporting and hunting dogs.",
	 image: "../images/Labrador.jpg"
	},
	{
	 title: "Pug", 
	 description: "The Pug is a breed of dog with a wrinkly, short-muzzled face and curled tail. The breed has a fine, glossy coat that comes in a variety of colours, most often fawn or black, and a compact square body with well-developed muscles.",
	 image: "../images/pug.jpg"
	},
	{
	 title: "Austrian Pinscher", 
	 description: "The Austrian Pinscher (Österreichischer Pinscher, FCI No. 64) is a medium-sized breed of pinscher-type dog from Austria, where dogs of the type were originally farm dogs, keeping barns free of rats and acting as home guards, livestock guardians, and drovers.",
	 image: "../images/Pinczer.jpg"
	}	
];
});