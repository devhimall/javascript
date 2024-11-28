let swiperMain = document.querySelector(".main-swiper")
let thumbSwiper = document.querySelector(".thumbs-swiper")

let chessImages = [
  "/javascript/day5/assets/image1.jpg",
  "/javascript/day5/assets/image2.jpg",
  "/javascript/day5/assets/image3.jpg",
  "/javascript/day5/assets/image4.jpg",
  "/javascript/day5/assets/image5.jpg",
  "/javascript/day5/assets/image6.jpg",
  "/javascript/day5/assets/image7.jpg",
  "/javascript/day5/assets/image8.jpg",
]

// For main swiper
if (swiperMain) {
  chessImages.forEach((image) => {
    // creating swiper-wrapper element.
    let swiperWrapper = document.querySelector(".swiper-wrapper")
    swiperWrapper.classList.add("swiper-wrapper")

    // creating swiper-slide element.
    let swiperSlide = document.createElement("div")
    swiperSlide.classList.add("swiper-slide")

    // creating img element.
    let imageTag = document.createElement("img")
    imageTag.src = image
    imageTag.alt = image

    // appending the childs.
    swiperSlide.appendChild(imageTag)
    swiperWrapper.appendChild(swiperSlide)
  })
} else {
  console.log("swiper-main element is not found in the dom.")
}

// For thumbsSwiper

if (thumbSwiper) {
  chessImages.forEach((image) => {
    // create swiper-slide element
    let thumbSwiperSlide = document.createElement("div")
    thumbSwiperSlide.classList.add("swiper-slide")

    // create image
    let thumbImage = document.createElement("img")
    thumbImage.alt = image
    thumbImage.src = image
    thumbSwiperSlide.appendChild(thumbImage)
    document.getElementById("swiper-wrapper").appendChild(thumbSwiperSlide)
  })
} else {
  console.log("thumbs swiper dom is not loaded.")
}

// thumb swiper
const thumbsSwiper = new Swiper(".thumbs-swiper", {
  spaceBetween: 10,
  slidesPerView: 8,
  freeMode: true,
  watchSlidesProgress: true,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    768: {
      slidesPerView: 6,
    },
    400: {
      slidesPerView: 4,
    },
    200: {
      slidesPerView: 2,
    },
  },
})
const mainSwiper = new Swiper(".main-swiper", {
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  thumbs: {
    swiper: thumbsSwiper,
  },
})
