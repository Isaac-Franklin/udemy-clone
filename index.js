const slideset = document.querySelectorAll(".coursesslides");
const slideNum = document.querySelectorAll(".slideone");
const slideFront = document.querySelectorAll(".scroll1");
const slideBack = document.querySelectorAll(".scroll2");


slideset.forEach(
    function(Item, i){
        let slideSetDimension = Item.getBoundingClientRect();
        let slideWidth = slideSetDimension.width;

        slideFront[i].addEventListener('click', () =>{
            Item.scrollLeft += slideWidth;
        })

        slideBack[i].addEventListener('click', () =>{
            Item.scrollLeft -= slideWidth;
        } )
    }
)

//STEDENTS SECTION SLIDE ARROWS BELOW//

const fullSlide = document.querySelectorAll(".studentsinteretslides");
const nextSlide = document.querySelectorAll(".scroll3");
const prevSlide = document.querySelectorAll(".scroll4");
const prevSlide2 = document.querySelectorAll(".scroll5");





fullSlide.forEach(function(item, a) {
    const scrollDimension = item.getBoundingClientRect();
    const scrollWidth = scrollDimension.width;

    prevSlide2[a].addEventListener("click", ()=>{
        item.scrollLeft -= scrollWidth;
    })

    nextSlide[a].addEventListener("click", ()=>{
        item.scrollLeft += scrollWidth;
    })
})