$(document).ready(function () {
  $(window).on("scroll", function () {
    let posTop = $(window).scrollTop();
    if (posTop > 0) {
      $(".header").addClass("dop");
    } else {
      if ($(".header").hasClass("header-main")) {
        $(".header").removeClass("dop");
      }
    }
  });

  $(".banner__phone").on("click", function (e) {
    if (!$(this).hasClass("active")) {
      $(this).addClass("active");
      $(this).closest(".banner__social").addClass("active");
      return false;
    }
  });

  $(".banner__strong").on("click", function (e) {
    $(".banner__social").removeClass("active");
    $(".banner__phone").removeClass("active");
    return false;
  });

  $(".header-menu__head").click(function () {
    $(this).addClass("active");
    $(this).removeClass("color");
    $(".header-menu").addClass("active");

    $("body").addClass("fixed");
    $(".header__drop").addClass("active");

    $(".header-catalog__head").addClass("color");
    $(".header-catalog__head").removeClass("active");
    $(".header-catalog").removeClass("active");
  });

  $(document).on("click", function (e) {
    if (!$(e.target).closest(".header").length) {
      $(".header-menu__head").removeClass("active");
      $(".header-menu__head").removeClass("color");
      $(".header-catalog__head").removeClass("active");
      $(".header-catalog__head").removeClass("color");
      $(".header__drop").removeClass("active");
      $(".header-menu").removeClass("active");
      $("body").removeClass("fixed");
    }
    e.stopPropagation();
  });

  $(".header-catalog__head").click(function () {
    $(this).addClass("active");
    $(this).removeClass("color");
    $(".header-catalog").addClass("active");

    $(".header__drop").addClass("active");

    $(".header-menu__head").addClass("color");
    $(".header-menu__head").removeClass("active");
    $(".header-menu").removeClass("active");
  });

  $(".header__close").click(function () {
    $(".header-menu__head").removeClass("active");
    $(".header-catalog__head").removeClass("active");
    $(".header__drop").removeClass("active");
    $("body").removeClass("fixed");
  });

  $(".header__burger").click(function () {
    if ($("body").hasClass("fixed")) {
      $(".header__left").removeClass("active");
      $("body").removeClass("fixed");
    } else {
      $(".header__left").addClass("active");
      $("body").addClass("fixed");
      setTimeout(() => {
        $(".header-menu__head").trigger("click");
      }, 100);
    }
  });

  $(".header__search-head").click(function () {
    $(this).next().toggleClass("active");
    if ($(this).next().hasClass("active")) {
      setTimeout(() => {
        $(this).next().find(".header__search-input").trigger("focus");
      }, 100);
    }
  });

  $(document).on("click", function (e) {
    if (
      !$(e.target).closest(".header__search-head, .header__search-drop").length
    ) {
      $(".header__search-drop").removeClass("active");
    }
    e.stopPropagation();
  });

  $(".scroll-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });

  $(".bestseller__see").click(function () {
    $(this).hide();
    $(this).prev().addClass("active");
  });

  $("[data-tabs-type]").on("click", function () {
    if (!$(this).hasClass("active")) {
      var index2 = $(this).index();
      $(this).addClass("active").siblings().removeClass("active");
      $("[data-tabs-typecontent]").hide().eq(index2).fadeIn();
    }
    return false;
  });

  $(".footer__head").click(function () {
    if ($(window).width() < 768) {
      $(this).toggleClass("active");
      $(this).next().slideToggle(200);
    }
  });

  /* Страница каталога */
  $(".catalog-sorting__price-head").click(function () {
    $(this).toggleClass("active");
    $(this).next().slideToggle(200);
    if ($(window).width() < 992) {
      $(".catalog-filter__head").removeClass("active");
      $(".catalog-filter__item").slideUp(250);
      $(".catalog-sorting__drop-input, .catalog-filter__head").removeClass(
        "active"
      );
      $(".catalog-filter__item, .catalog-sorting__drop-list").slideUp(250);
    }
  });

  $(document).on("click", function (event) {
    if (
      $(event.target).closest(
        ".catalog-sorting__price-head, .catalog-sorting__price-drop"
      ).length
    )
      return;
    $(".catalog-sorting__price-drop").slideUp(250);
    $(".catalog-sorting__price-head").removeClass("active");
    event.stopPropagation();
  });

  $(".catalog-sorting__drop-input").on("click", function () {
    if ($(this).parent().hasClass("active")) {
      $(".catalog-sorting__drop-main").removeClass("active");
      $(".catalog-sorting__drop-input").removeClass("active");
      $(".catalog-sorting__drop-list").slideUp(250);
    } else {
      $(".catalog-sorting__drop-main").removeClass("active");
      $(".catalog-sorting__drop-input").removeClass("active");
      $(".catalog-sorting__drop-list").slideUp(250);
      if ($(window).width() < 992) {
        $(".catalog-filter__head").removeClass("active");
        $(".catalog-filter__item").slideUp(250);
        $(".catalog-sorting__price-head").removeClass("active");
        $(".catalog-sorting__price-drop").slideUp(250);
      }
      $(this).parent().toggleClass("active");
      $(this).next().slideToggle(250);
      $(this).toggleClass("active");
    }
  });

  $("li.catalog-sorting__drop-li").on("click", function () {
    var text = $(this).html().trim();
    $(this)
      .parent()
      .parent()
      .parent()
      .find(".catalog-sorting__drop-input")
      .val(text)
      .removeClass("active");
    $(".catalog-sorting__drop-list").slideUp(250);
    $(this).closest("ul").find("li").removeClass("active");
    $(this).addClass("active");
  });

  $(document).on("click", function (event) {
    if ($(event.target).closest(".catalog-sorting__drop-input").length) return;
    $(".catalog-sorting__drop-list").slideUp(250);
    $(".catalog-sorting__drop-main").removeClass("active");
    event.stopPropagation();
  });

  $(".catalog-filter__head").click(function () {
    if ($(window).width() < 992) {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this).next().slideUp(200);
      } else {
        $(".catalog-sorting__drop-input").removeClass("active");
        $(".catalog-sorting__drop-list").slideUp(200);
        $(".catalog-filter__head").removeClass("active");
        $(".catalog-filter__item").slideUp(200);
        $(this).addClass("active");
        $(this).next().slideToggle(200);
      }
    }
  });

  $(".brand__down-arrow").on("click", function () {
    let height = $(".header").outerHeight();
    console.log(height);
    var $el = $(this),
      id = $el.attr("href");

    $("html, body").animate(
      {
        scrollTop: $(id).offset().top - height,
      },
      1000
    );
    return false;
  });

  $(".catalog__name").click(function () {
    if ($(window).width() < 992) {
      $(this).toggleClass("active");
      $(".catalog__nav").toggleClass("active");
    }
  });

  $(".card__head").click(function () {
    $(this).toggleClass("active");
    $(this).next().slideToggle(200);
  });

  $("#checkbox").click(function () {
    if ($(this).is(":checked")) {
      $(".catalog-filter__checkbox-input input:checkbox").prop("checked", true);
    } else {
      $(".catalog-filter__checkbox-input input:checkbox").prop(
        "checked",
        false
      );
    }
  });

  function onEntry(entry) {
    entry.forEach((change) => {
      if (change.isIntersecting) {
        if (change.target.classList.contains("element-animation")) {
          change.target.classList.add("element-show");
        }
        if (change.target.classList.contains("element-animation-2")) {
          setTimeout(() => {
            change.target.classList.add("element-show");
          }, 600);
        }
        if (change.target.classList.contains("element-animation-3")) {
          setTimeout(() => {
            change.target.classList.add("element-show");
          }, 1200);
        }
        if (change.target.classList.contains("element-animation-4")) {
          setTimeout(() => {
            change.target.classList.add("element-show");
          }, 1800);
        }
        if (change.target.classList.contains("element-animation-5")) {
          setTimeout(() => {
            change.target.classList.add("element-show");
          }, 2400);
        }
      }
    });
  }
  let options = { threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll(
    ".element-animation, .element-animation-2, .element-animation-3, .element-animation-4, .element-animation-5"
  );
  for (let elm of elements) {
    observer.observe(elm);
  }

  if ($('[type="tel"]').length > 0) {
    $('[type="tel"]').each(function () {
      IMask($(this)[0], {
        mask: "+{7} (000) 000-00-00",
      });
    });
  }

  if ($(".registration__input input").length > 0) {
    $(".registration__input input").each(function () {
      IMask($(this)[0], {
        mask: "(000) 000-00-00",
      });
    });
  }

  $(".workout-info__play").on("click", function () {
    $(".workout-info__image").hide();
    $(this).hide();
    $(".workout-info__video video").show().trigger('play');
  });

  Fancybox.bind("[data-fancybox]", {});

  var swiper = new Swiper(".banner__slider", {
    spaceBetween: 0,
    slidesPerView: 1,
    loop: true,
    speed: 600,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 5000,
    },
  });

  var swiper2 = new Swiper(".category__slider", {
    spaceBetween: 0,
    slidesPerView: 2,
    navigation: {
      nextEl: ".category__arrow-next",
      prevEl: ".category__arrow-prev",
    },
    breakpoints: {
      0: {
        spaceBetween: 0,
        slidesPerView: 1.4,
      },
      767: {
        spaceBetween: 0,
        slidesPerView: 2.2,
      },
      991: {
        spaceBetween: 0,
        slidesPerView: 2,
      },
    },
  });

  var swiper3 = new Swiper(".brand-advantages__slider", {
    spaceBetween: 87,
    slidesPerView: 2,
    loop: true,
    navigation: {
      nextEl: ".category__arrow-next",
      prevEl: ".category__arrow-prev",
    },
    breakpoints: {
      0: {
        spaceBetween: 0,
        slidesPerView: 1,
      },
      767: {
        spaceBetween: 0,
        slidesPerView: 1,
      },
      991: {
        spaceBetween: 57,
        slidesPerView: 2,
      },
      1399: {
        spaceBetween: 87,
        slidesPerView: 2,
      },
    },
  });

  var swiper4 = new Swiper(".card-block__slider", {
    spaceBetween: 21,
    slidesPerView: 4,
    loop: true,
    navigation: {
      nextEl: ".category__arrow-next",
      prevEl: ".category__arrow-prev",
    },
    breakpoints: {
      0: {
        spaceBetween: 2,
        slidesPerView: 2,
      },
      767: {
        spaceBetween: 21,
        slidesPerView: 2,
      },
      991: {
        spaceBetween: 21,
        slidesPerView: 3,
      },
      1399: {
        spaceBetween: 21,
        slidesPerView: 4,
      },
    },
  });

  var init = false;
  var swiper;
  function swiperCard() {
    if (window.innerWidth <= 992) {
      if (!init) {
        init = true;
        swiper = new Swiper(".card__slider", {
          slidesPerView: 1,
          spaceBetween: 0,
          loop: true,
          pagination: {
            el: ".swiper-pagination",
          },
        });
      }
    } else if (init) {
      swiper.destroy();
      init = false;
    }
  }
  swiperCard();
  window.addEventListener("resize", swiperCard);
});
