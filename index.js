
const fruits = [
    {
        fruitName : "Tomat",
        latinName : "Solanum lycopersicum",
        fruitColor: "Merah",
        fruitBiji : "Dikotil",
        fruitImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/1200px-Tomato_je.jpg"
    },
    {
        fruitName : "Jeruk",
        latinName : "Citrus",
        fruitColor: "Orange",
        fruitBiji : "Dikotil",
        fruitImage: "/assets/orange-1995079_640.jpg"
    },
    {
        fruitName : "Pisang",
        latinName : "Musa sp",
        fruitColor: "Kuning",
        fruitBiji : "Monokotil",
        fruitImage: "/assets/bananas-1642706_640.jpg"
    },
    {
        fruitName : "Tebu",
        latinName : "Saccharum sp",
        fruitColor: "Hijau",
        fruitBiji : "Monokotil",
        fruitImage: "/assets/sugar-cane-276242_640.jpg"
    },
    {
        fruitName : "Anggur",
        latinName : "Vitis vinivera",
        fruitColor: "Hitam",
        fruitBiji : "Dikotil",
        fruitImage: "/assets/purple-grapes-553462_640.jpg"
    },
    {
        fruitName : "Mangga",
        latinName : "Mangifera indica",
        fruitColor: "Hijau",
        fruitBiji : "Dikotil",
        fruitImage: "https://2.bp.blogspot.com/-lWffBRAEjIs/UUFwfIQiQxI/AAAAAAAAAf0/eNwZdpp9zVs/s1600/pohon+mangga.jpg"
    },
    {
        fruitName : "Salak",
        latinName : "Salacca edulis",
        fruitColor: "Cokelat",
        fruitBiji : "Monokotil",
        fruitImage: "https://i2.wp.com/b-pikiran.cekkembali.com/wp-content/uploads/2019/10/buah-salak.jpg"
    },
    {
        fruitName : "Nanas",
        latinName : "Ananas comocus",
        fruitColor: "Kuning",
        fruitBiji : "Monokotil",
        fruitImage: "/assets/pineapple-636562_640.jpg"
    }
];

//kita buah fungsinya
fruits.forEach(function (data) {

    const div = document.createElement('div');
    div.className = "col-lg-3 col-md-6 mb-4 data";

    div.innerHTML = 
    '<div class="card h-100">' +
        '<img class="card-img-top" src="' +data.fruitImage+ '" alt="fruit image">'+
            '<div class="card-body">' +
                '<h4 class="card-title">' +data.fruitName+ '</h4>' +
                '<ul class="card-text">'+
                    '<li>'+data.latinName+'</li>'+
                    '<li>'+data.fruitColor+'</li>'+
                    '<li>'+data.fruitBiji+'</li>'+
                '</ul>'+
            '</div>'+
            '<div class="card-footer">'+
                '<a href="" class="btn btn-primary">Find Out More!</a>'+
            '</div>'+
        '</div>'+
    '</div>'
    document.getElementById("showData").appendChild(div);
});