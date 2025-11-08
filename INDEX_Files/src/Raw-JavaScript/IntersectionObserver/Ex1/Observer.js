
let imgs = document.querySelectorAll("img");

const observer = new IntersectionObserver(
    function(enteries,observer){
        enteries.forEach(function(entry){
            if (entry.isIntersecting){
                const img = entry.target;
                img.src= img.dataset.src;
                observer.unobserve(img);
            }
        })  
    },{
        root: null,
        threshold: 0.1,
    }
);

imgs.forEach(function(img){
    observer.observe(img);
})


export default observer
