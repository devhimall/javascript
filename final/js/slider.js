const swipers = document.querySelectorAll(".swiper")

swipers.forEach((swiperContainer, index) => {
  const paginationClass = `swiper-pagination-${index}`
  const scrollbarClass = `swiper-scrollbar-${index}`
  console.log(swipers)
  console.log(swiperContainer)

  // Add unique classes for each Swiper instance's pagination and scrollbar
  const scrollbarEl = document.createElement("div")
  scrollbarEl.className = `swiper-scrollbar ${scrollbarClass}`
  swiperContainer.appendChild(scrollbarEl)

  const paginationEl = document.createElement("div")
  paginationEl.className = `swiper-pagination ${paginationClass}`
  swiperContainer.appendChild(paginationEl)

  // Initialize slider1
  // if (typeof sliders !== "undefined") {
  new Swiper(swiperContainer, {
    loop: true,
    spaceBetween: 30,
    speed: 2000,
    pauseOnMouseEnter: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    // coverflowEffect:
    //   sliders[index] !== 0
    //     ? {
    //         rotate: 50,
    //         stretch: 0,
    //         depth: 100,
    //         modifier: 1,
    //         slideShadows: true,
    //       }
    //     : undefined,
    slidesPerView: "auto",
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: `.${paginationClass}`,
      clickable: true,
    },
    scrollbar: {
      el: `.${scrollbarClass}`,
    },
  })

  // Add event listeners for pausing autoplay on mouse enter and resume on mouse leave
  swiperContainer.addEventListener("mouseenter", () => swiper.autoplay.stop())
  swiperContainer.addEventListener("mouseleave", () => swiper.autoplay.sstart())
  // } else {
  //   console.log("There is no sliders element ")
  // }
})
