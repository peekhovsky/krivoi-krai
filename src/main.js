import slick from 'slick-carousel'
import $ from 'jquery'

$(document).ready(() => {
    $('.gal').slick({
        slidesToShow: 3,
        dots:true,
        centerMode: true,
    })
});