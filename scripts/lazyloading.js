let imagesToLoad = document.querySelectorAll("[data-src]");


function loadImages(img){
    const src = img.getAttribute("data-src");
    if (!src)
    {
        return;
    }
    img.setAttribute('src', src);
    img.onload = () => {img.removeAttribute("data-src");};
}

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px -300px 0px"
};

const imgObserver = new IntersectionObserver ((items, imgObserver) => {
    items.forEach(item => {
        if (!item.isIntersecting) 
        {
            return;
        }
        else
        {
            loadImages(item.target);
            imgObserver.unobserve(item.target);
        }
    })
}, imgOptions);

imagesToLoad.forEach((image) => {
    imgObserver.observe(image);
});