document.addEventListener("DOMContentLoaded", () => {
    const headerModal = document.querySelector("[data-headermodal]");
    const headerNav = document.querySelector("[data-headernav]");
    const priceModal = document.querySelectorAll("[data-price_modal]");
    const priceCard = document.querySelectorAll("[data-price_card_info]");
    const galleryContent = document.querySelector(".gallery__content");

    // клик на меню в header
    headerNav.addEventListener("click", () => {
        headerModal.classList.toggle("header-modal--visible");
    });

    headerModal.addEventListener("click", (e) => {
        if (e.target !== headerModal) {
            headerModal.classList.remove("header-modal--visible");
        }
    });

    // клик на i в banner
    $(".banner__info").on("click", function () {
        $(".banner-modal").css("display", "block");
    });

    $(".banner-modal__close").on("click", function () {
        $(".banner-modal").css("display", "none");
    });

    // клик на ? в prices
    priceCard.forEach((item, indx) => {
        item.addEventListener("click", (_) => {
            priceModal[indx].classList.toggle("price-card__modal-visible");
        });
    });

    priceModal.forEach((item) => {
        item.addEventListener("click", (e) => {
            if (e.target.classList.contains("price-card__modal-cross")) {
                e.currentTarget.classList.remove("price-card__modal-visible");
            }
        });
    });

    // слайдер в jobs
    $(".jobs__sample").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        appendArrows: $(".jobs__arrows"),
        prevArrow:
            "<div class='jobs__arrows-prev'><img src='./assets/img/arrow-prev.png' alt=''><span>Пред работа</span></div>",
        nextArrow:
            "<div class='jobs__arrows-next'><span>След работа</span><img src='./assets/img/arrow-next.png' alt=''></div>",
    });

    $(".jobs__imgs").slick({
        slidesToShow: 4,
        asNavFor: ".jobs__sample",
        focusOnSelect: true,
    });

    // слайдер в discount
    $(".discount__sample").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        appendArrows: $(".discount__arrows"),
        prevArrow:
            "<div class='discount__arrows-prev'><img src='./assets/img/arrow-prev.png ' alt=''><span>Пред акция</span></div>",
        nextArrow:
            "<div class='discount__arrows-next'><span>След акция</span><img src='./assets/img/arrow-next.png ' alt=''></div>",
    });

    // popup галерея
    $(".samples__gallery").magnificPopup({
        delegate: "a",
        type: "image",
        tLoading: "Loading image #%curr%...",
        mainClass: "mfp-img-mobile",
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1],
        },
    });
    // переключаемые табы на странице sample

    let mixer;
    if (galleryContent) {
        mixer = mixitup(".gallery__content", {
            animation: {
                enable: false,
            },
        });
    }
});
