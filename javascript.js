const IMAGES = document.querySelectorAll("img");
const SIZES = {
    ocean: "100vw",
    mountain: "(max-width: 799px) 100vw, 372px",
    city: "(max-width: 799px) 100vw, 558px",
}

function makeSrcset(imgSrc) {
  let markup = [];
  let width = 400;

  for (let i = 0; i<3, i++) {
      markup[i] = imgSrc + "-" + width + ".jpg" + width + "w";
      width+=400;
      markup[i] = imgSrc + "-" + width + ".jpg" + width + "w";
      width+=800;
      markup[i] = imgSrc + "-" + width + ".jpg" + width + "w";
      width+=1200;

  }

  return markup.join();

}


for (let i = 0; i<IMAGES.length; i++) {
  let imgSrc = IMAGES[i].getAttribute("src");
  imgSrc = imgSrc.slice(0,-8);
  let srcset = makeSrcset(imgSrc);
  IMAGES[i].setAttribute("srcset", srcset);

  let type = IMAGES[i].getAttribute("data-type");
  let sizes = SIZES[type];
  IMAGES[i].setAttribute("sizes", sizes);
  console.log(sizes);
}
