jQuery(document).ready(function ($) {
  $(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop()) {
        $("header").addClass("sticky");
      } else {
        $("header").removeClass("sticky");
      }
    });
  });

  $(".slideshow-img").slick({
    slidesToScroll: 1,
    slidesToShow: 3,
    arrows: true,
    dots: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
  $(".slideshow-feedback").slick({
    slidesToScroll: 1,
    slidesToShow: 1,
    arrows: true,
    dots: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });

  $(document).ready(function () {
    $(".accordion-item.active1 .accordion-body").slideDown();
    $(".accordion-header").click(function () {
      $(this).parent().toggleClass("active1");
      $(this).parent().children(".accordion-body").slideToggle();
    });
  });





  // phan cua tabcontent
  // function openPage(pageName, elmnt, color) {
  //   var i, tabcontent1, tabcontent2, tabcontent3, tabcontent4, tabcontent5, tablinks;
  //   tabcontent1 = document.getElementsByClassName("tabcontent1");
  //   for (i = 0; i < tabcontent1.length; i++) {
  //     tabcontent1[i].style.display = "none";
  //   }

  //   tabcontent2 = document.getElementsByClassName("tabcontent2");
  //   for (i = 0; i < tabcontent2.length; i++) {
  //     tabcontent2[i].style.display = "none";
  //   }

  //   tabcontent3 = document.getElementsByClassName("tabcontent3");
  //   for (i = 0; i < tabcontent3.length; i++) {
  //     tabcontent3[i].style.display = "none";
  //   }

  //   tabcontent4 = document.getElementsByClassName("tabcontent4");
  //   for (i = 0; i < tabcontent4.length; i++) {
  //     tabcontent4[i].style.display = "none";
  //   }

  //   tabcontent5 = document.getElementsByClassName("tabcontent5");
  //   for (i = 0; i < tabcontent5.length; i++) {
  //     tabcontent5[i].style.display = "none";
  //   }

  //   tablinks = document.getElementsByClassName("tablink");
  //   for (i = 0; i < tablinks.length; i++) {
  //     tablinks[i].style.backgroundColor = "";
  //   }
  //   document.getElementById(pageName).style.display = "block";
  //   elmnt.style.backgroundColor = color;
  // }





  //contact
  function openPage(pageName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
  }

  // Get the element with id="defaultOpen" and click on it
});

// contact
var tabLinks = document.querySelectorAll(".tablinks");
var tabContent = document.querySelectorAll(".tabcontent");

tabLinks.forEach(function (el) {
  el.addEventListener("click", openTabs);
});

function openTabs(el) {
  var btn = el.currentTarget;
  var electronic = btn.dataset.electronic;

  tabContent.forEach(function (el) {
    el.classList.remove("active");
  });

  tabLinks.forEach(function (el) {
    el.classList.remove("active");
  });

  document.querySelector("#" + electronic).classList.add("active");

  btn.classList.add("active");
}

///
//about
document.getElementById("form").onsubmit = function (e) {
  e.preventDefault();
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let comment = document.getElementById("comment").value;
  let ex = /^SV[0-9]{2}$/;

  ex = /^[a-z ]{3,}$/gi;
  if (!ex.test(fname)) {
    alert("Invalid name. Re-enter, plz !");
    document.getElementById("fname").focus();
    return false;
  }
  ex = /^[a-z ]{3,}$/gi;
  if (!ex.test(lname)) {
    alert("Invalid name. Re-enter, plz !");
    document.getElementById("lname").focus();
    return false;
  }

  ex = /^[a-z]([a-z0-9\-_\.]+)+@([a-z1-9]+\.)+[a-z]{2,3}$/gi;
  if (!ex.test(email)) {
    alert("Invalid email. Re-enter, plz !");
    document.getElementById("email").focus();
    return false;
  }

  let s = ["You have successfully registered"];
  s.push(`Fisrt name :${fname}`);
  s.push(`Last name  :${lname}`);
  s.push(`Email      :${email}`);
  s.push(`Phone      :${phone}`);
  s.push(`Comment    :${comment}`);

  alert(s.join("\n"));
};

//about


