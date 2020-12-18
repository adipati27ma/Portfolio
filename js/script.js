$(".page-scroll").on("click", function (event) {
  // ambil isi href

  let tujuan = $(this).attr("href");

  // tangkap elemen yg bersangkutan
  let elemenTujuan = $(tujuan);

  // alert($('body').scrollTop());

  // pindahkan scroll
  // $('html, body').scrollTop('700');

  $("html, body").animate(
    {
      scrollTop: elemenTujuan.offset().top - 35,
    },
    1200,
    "easeInOutExpo"
  );

  event.preventDefault();
});

// onload, show top page
$(document).ready(function () {
  $(document).scrollTop(0);
});

// unable scroll
$("html").css("overflow", "hidden");

// able scroll setelah parallax selesai
setTimeout(() => {
  $("html").css("overflow", "auto");
}, 4000);

// on load, show top display
$(window).on("beforeunload", function () {
  $(window).scrollTop(0);
});

// Parallax onload Body+About
$(window).on("load", function () {
  $("html, body").addClass("bAppear");

  setTimeout(() => {
    $(".jumbotron img").addClass("jAppear");
    $("section, footer").addClass("Appear");
  }, 2000);

  setTimeout(() => {
    $(".jumbotron h1").addClass("jAppear");
    $(".jumbotron p").addClass("jAppear");

    $(".pKiri").addClass("pAppear");
    $(".pKanan").addClass("pAppear");
  }, 3000);
});

// Parallax effect

$(window).scroll(function () {
  let wScroll = $(this).scrollTop();

  // jumbotron
  $("h1").css({
    transform: "translate(" + wScroll / 4.6 + "%," + wScroll / 4 + "%)",
  });

  $(".jumbotron p").css({
    transform: "translate(" + -wScroll / 5 + "%," + wScroll / 4 + "%)",
  });

  $(".jumbotron img").css({
    transform: "translate(0px, " + wScroll / 3.5 + "%)",
  });

  // Portfolio
  // tampilkan
  if (wScroll > 700) {
    $(".portfolio .thumbnail.t2").each(function (i) {
      setTimeout(() => {
        $(".portfolio .thumbnail.t1").eq(i).addClass("appears");
      }, 270 * (i + 1));
    });
  }

  if (wScroll > 973) {
    $(".portfolio .thumbnail.t2").each(function (i) {
      setTimeout(() => {
        $(".portfolio .thumbnail.t2").eq(i).addClass("appears");
      }, 270 * i);
    });
  }

  // hilangkan
  if (wScroll <= 533) {
    $(".portfolio .thumbnail.t2").each(function () {
      $(".portfolio .thumbnail.t1").removeClass("appears");
      $(".portfolio .thumbnail.t2").removeClass("appears");
    });
  }

  // Navbar hilangkan
  if (wScroll < 438) {
    // $('nav').removeClass('navbar-inverse');

    $("nav.navbar-inverse").css("backgroundColor", "rgba(0, 8, 54, 0)");
    $("nav.navbar-inverse").removeClass("navbar");
  }

  // Navbar tampilkan
  if (wScroll > 410) {
    $("nav.navbar-inverse").addClass("navbar");
    $("nav.navbar-inverse").css("backgroundColor", "rgba(0, 8, 54, .68)");
  }
});
