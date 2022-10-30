const reviews = [
    {
        id: 1,
        name: 'lady',
        job: 'web developer',
        img: 
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"

    },
    {
        id: 2,
        name: 'Anna Johnson',
        job: 'WEB DESIGNER',
        img: 
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel\
        pin fashion axe.photo booth jean shorts artisan narwhal."
    },
    {
        id: 3,
        name:"Bill anderson",
        job:"The boss",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text:
            "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz,\
            edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
    },
    {
        id: 4,
        name: "Peter Jones",
        job: "intern",
        img:
            "	https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text:
            "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated\
            charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
    }
]

const img = document.getElementById('person-img');
const authon = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

// select the button
preBtn = document.querySelector('.prev-btn');
nextBtn = document.querySelector('.next-btn');
randBtn = document.querySelector('.random-btn');


// set starting item
let currentItem = 2;

// load intial item
window.addEventListener('DOMContentLoaded', function (){
    addContentInHtml(0);
});

preBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0)
        currentItem = reviews.length-1;
    addContentInHtml(currentItem);
})
nextBtn.addEventListener('click', function(){
    currentItem++;
    currentItem%=reviews.length;
    addContentInHtml(currentItem);
})

randBtn.addEventListener('click',function(){
    random = Math.floor(Math.random()*reviews.length)
    addContentInHtml(random)
})


function addContentInHtml(person){
    const item = reviews[person];
    img.src = item.img;
    authon.textContent = item.name
    job.textContent = item.job;
    info.textContent = item.text
}
