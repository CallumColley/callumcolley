// Clean URL

$(document).ready(function() {
  $("a").click(function() {
    $(this)
      .attr("href")
      .replace(/\#*/g, "");
  });
});

// Window Load Function

$(document).ready(function() {
  setTimeout(function() {
    $("body").addClass("loaded");
  }, 3000);
});

// Side nav

var stickySidebar = $(".trigger");
if (stickySidebar.length) {
  var stickySidebar = $(".trigger").offset().top;
}

$("#content").scroll(function() {
  if ($("#content").scrollTop() > stickySidebar) {
    $(".side-nav").addClass("affix");
  } else {
    $(".side-nav").removeClass("affix");
  }
});
$(function() {
  $(".side-nav").hover(
    function() {
      $(".side-nav ul").css({ overflow: "auto" });
    },
    function() {
      $(".side-nav ul").css({ overflow: "hidden" });
    }
  );
});

// Return top

$("#content").scroll(function() {
  if ($(this).scrollTop() >= 500) {
    $("#return").fadeIn(200);
  } else {
    $("#return").fadeOut(200);
  }
});
$("#return").click(function() {
  $("#content").animate(
    {
      scrollTop: 0
    },
    500
  );
});

// Week identifier

$("#wk-one-btn").click(function() {
  $("#btn-wk1 .cardio-btn, #btn-wk1 .off-day").css(
    "background-color",
    "#f8f8f8"
  );
  setTimeout(function() {
    $("#btn-wk1 .cardio-btn").css("background-color", "#f5da7c");
    $("#btn-wk1 .off-day").css("background-color", "#fc6363");
  }, 1700);
  $("#btn-wk1 *#week")
    .fadeIn()
    .delay(1000)
    .fadeOut();
});
$("#wk-two-btn").click(function() {
  $("#btn-wk2 .cardio-btn, #btn-wk2 .off-day").css(
    "background-color",
    "#f8f8f8"
  );
  setTimeout(function() {
    $("#btn-wk2 .cardio-btn").css("background-color", "#f5da7c");
    $("#btn-wk2 .off-day").css("background-color", "#fc6363");
  }, 1700);
  $("#btn-wk2 *#week")
    .fadeIn()
    .delay(1000)
    .fadeOut();
});
$("#wk-three-btn").click(function() {
  $("#btn-wk3 .cardio-btn, #btn-wk3 .off-day").css(
    "background-color",
    "#f8f8f8"
  );
  setTimeout(function() {
    $("#btn-wk3 .cardio-btn").css("background-color", "#f5da7c");
    $("#btn-wk3 .off-day").css("background-color", "#fc6363");
  }, 1700);
  $("#btn-wk3 *#week")
    .fadeIn()
    .delay(1000)
    .fadeOut();
});
$("#wk-four-btn").click(function() {
  $("#btn-wk4 .cardio-btn, #btn-wk4 .off-day").css(
    "background-color",
    "#f8f8f8"
  );
  setTimeout(function() {
    $("#btn-wk4 .cardio-btn").css("background-color", "#f5da7c");
    $("#btn-wk4 .off-day").css("background-color", "#fc6363");
  }, 1700);
  $("#btn-wk4 *#week")
    .fadeIn()
    .delay(1000)
    .fadeOut();
});
$("#wk-five-btn").click(function() {
  $("#btn-wk5 .cardio-btn, #btn-wk5 .off-day").css(
    "background-color",
    "#f8f8f8"
  );
  setTimeout(function() {
    $("#btn-wk5 .cardio-btn").css("background-color", "#f5da7c");
    $("#btn-wk5 .off-day").css("background-color", "#fc6363");
  }, 1700);
  $("#btn-wk5 *#week")
    .fadeIn()
    .delay(1000)
    .fadeOut();
});
$("#wk-six-btn").click(function() {
  $("#btn-wk6 .cardio-btn, #btn-wk6 .off-day").css(
    "background-color",
    "#f8f8f8"
  );
  setTimeout(function() {
    $("#btn-wk6 .cardio-btn").css("background-color", "#f5da7c");
    $("#btn-wk6 .off-day").css("background-color", "#fc6363");
  }, 1700);
  $("#btn-wk6 *#week")
    .fadeIn()
    .delay(1000)
    .fadeOut();
});
$("#wk-seven-btn").click(function() {
  $("#btn-wk7 .cardio-btn, #btn-wk7 .off-day").css(
    "background-color",
    "#f8f8f8"
  );
  setTimeout(function() {
    $("#btn-wk7 .cardio-btn").css("background-color", "#f5da7c");
    $("#btn-wk7 .off-day").css("background-color", "#fc6363");
  }, 1700);
  $("#btn-wk7 *#week")
    .fadeIn()
    .delay(1000)
    .fadeOut();
});
$("#wk-eight-btn").click(function() {
  $("#btn-wk8 .cardio-btn, #btn-wk8 .off-day").css(
    "background-color",
    "#f8f8f8"
  );
  setTimeout(function() {
    $("#btn-wk8 .cardio-btn").css("background-color", "#f5da7c");
    $("#btn-wk8 .off-day").css("background-color", "#fc6363");
  }, 1700);
  $("#btn-wk8 *#week")
    .fadeIn()
    .delay(1000)
    .fadeOut();
});
$("#wk-nine-btn").click(function() {
  $("#btn-wk9 .cardio-btn, #btn-wk9 .off-day").css(
    "background-color",
    "#f8f8f8"
  );
  setTimeout(function() {
    $("#btn-wk9 .cardio-btn").css("background-color", "#f5da7c");
    $("#btn-wk9 .off-day").css("background-color", "#fc6363");
  }, 1700);
  $("#btn-wk9 *#week")
    .fadeIn()
    .delay(1000)
    .fadeOut();
});
$("#wk-ten-btn").click(function() {
  $("#btn-wk10 .cardio-btn, #btn-wk10 .off-day").css(
    "background-color",
    "#f8f8f8"
  );
  setTimeout(function() {
    $("#btn-wk10 .cardio-btn").css("background-color", "#f5da7c");
    $("#btn-wk10 .off-day").css("background-color", "#fc6363");
  }, 1700);
  $("#btn-wk10 *#week")
    .fadeIn()
    .delay(1000)
    .fadeOut();
});
$("#wk-eleven-btn").click(function() {
  $("#btn-wk11 .cardio-btn, #btn-wk11 .off-day").css(
    "background-color",
    "#f8f8f8"
  );
  setTimeout(function() {
    $("#btn-wk11 .cardio-btn").css("background-color", "#f5da7c");
    $("#btn-wk11 .off-day").css("background-color", "#fc6363");
  }, 1700);
  $("#btn-wk11 *#week")
    .fadeIn()
    .delay(1000)
    .fadeOut();
});
$("#wk-twelve-btn").click(function() {
  $("#btn-wk12 .cardio-btn, #btn-wk12 .off-day").css(
    "background-color",
    "#f8f8f8"
  );
  setTimeout(function() {
    $("#btn-wk12 .cardio-btn").css("background-color", "#f5da7c");
    $("#btn-wk12 .off-day").css("background-color", "#fc6363");
  }, 1700);
  $("#btn-wk12 *#week")
    .fadeIn()
    .delay(1000)
    .fadeOut();
});

//Ingredient overlay
$("#card-1 .ingredients #open").click(function() {
  $("#card-1 .details")
    .fadeOut()
    .delay(400);
  $("#card-1 .overlay").fadeIn();
});
$("#card-1 .ingredients #close").click(function() {
  $("#card-1 .overlay").fadeOut();
  $("#card-1 .original")
    .delay(400)
    .fadeIn();
});

$("#card-2 .ingredients #open").click(function() {
  $("#card-2 .details")
    .fadeOut()
    .delay(400);
  $("#card-2 .overlay").fadeIn();
});
$("#card-2 .ingredients #close").click(function() {
  $("#card-2 .overlay").fadeOut();
  $("#card-2 .original")
    .delay(400)
    .fadeIn();
});

$("#card-3 .ingredients #open").click(function() {
  $("#card-3 .details")
    .fadeOut()
    .delay(400);
  $("#card-3 .overlay").fadeIn();
});
$("#card-3 .ingredients #close").click(function() {
  $("#card-3 .overlay").fadeOut();
  $("#card-3 .original")
    .delay(400)
    .fadeIn();
});

$("#card-4 .ingredients #open").click(function() {
  $("#card-4 .details")
    .fadeOut()
    .delay(400);
  $("#card-4 .overlay").fadeIn();
});
$("#card-4 .ingredients #close").click(function() {
  $("#card-4 .overlay").fadeOut();
  $("#card-4 .original")
    .delay(400)
    .fadeIn();
});

$("#card-5 .ingredients #open").click(function() {
  $("#card-5 .details")
    .fadeOut()
    .delay(400);
  $("#card-5 .overlay").fadeIn();
});
$("#card-5 .ingredients #close").click(function() {
  $("#card-5 .overlay").fadeOut();
  $("#card-5 .original")
    .delay(400)
    .fadeIn();
});

$("#card-6 .ingredients #open").click(function() {
  $("#card-6 .details")
    .fadeOut()
    .delay(400);
  $("#card-6 .overlay").fadeIn();
});
$("#card-6 .ingredients #close").click(function() {
  $("#card-6 .overlay").fadeOut();
  $("#card-6 .original")
    .delay(400)
    .fadeIn();
});

// Info toggle
//Caret rotation

$(function() {
  $(".nutrient .btn-toggle").click(function() {
    $(".nutrient .info-wrap").toggle();
    $(".nutrient .btn-toggle span").toggleClass("rotate");
    $(this).toggleClass("expand-txt");
    $(this).toggleClass("collapse-txt");
  });
  $(".water .btn-toggle").click(function() {
    $(".water .info-wrap").toggle();
    $(".water .btn-toggle span").toggleClass("rotate");
    $(this).toggleClass("expand-txt");
    $(this).toggleClass("collapse-txt");
  });
  $(".lbm-section .btn-toggle").click(function() {
    $(".lbm-section .info-wrap").toggle();
    $(".lbm-section .btn-toggle span").toggleClass("rotate");
    $(this).toggleClass("expand-txt");
    $(this).toggleClass("collapse-txt");
  });
});

$(document).ready(function() {
  /* LEAN BODY MASS CALCULATOR */

  $('.lbm-calculator input[name="weight-system3"]').click(function() {
    var weightUnits = $(this).val();

    if (weightUnits == "kilos") {
      $('.lbm-calculator input[name="weight"]').attr(
        "placeholder",
        "Kilograms"
      );
      $('.lbm-calculator input[name="weight"]').val("");
    } else if (weightUnits == "pounds") {
      $('.lbm-calculator input[name="weight"]').attr("placeholder", "Pounds");
      $('.lbm-calculator input[name="weight"]').val("");
    }
  });

  $(".lbm-calculator .calc-submit").click(function() {
    var weight = parseInt($('.lbm-calculator input[name="weight"]').val());
    var weightType = $(
      '.lbm-calculator input[name="weight-system3"]:checked'
    ).val();
    var bodyfat =
      parseInt($('.lbm-calculator input[name="bodyfat"]').val()) / 100;
    var lbm = 0;

    if (isNaN(weight)) {
      $(".lbm-calculator .calc-answer")
        .show(0)
        .html('<span style="color: #a30000;">Please enter your weight.</span>');
    } else if (isNaN(bodyfat)) {
      $(".lbm-calculator .calc-answer")
        .show(0)
        .html(
          '<span style="color: #a30000;">Please enter your body fat percentage.</span>'
        );
    } else {
      if (weightType == "kilos") {
        lbm = Math.round((1 - bodyfat) * weight * 10) / 10;
        $(".lbm-calculator .calc-answer")
          .show(0)
          .html(
            '<div>Your Lean Body Mass: <span class="lbms extra-condensed-regular">' +
              lbm +
              " kg</span></div>"
          );
      } else {
        lbm = Math.round((1 - bodyfat) * weight * 10) / 10;
        $(".lbm-calculator .calc-answer")
          .show(0)
          .html(
            '<div>Your Lean Body Mass: <span class="lbms extra-condensed-regular">' +
              lbm +
              " lbs</span></div>"
          );
      }
    }
  });

  /* WATER CALCULATOR */

  $('.water-calculator input[name="weight-system2"]').click(function() {
    var weightUnits = $(this).val();

    if (weightUnits == "kilos") {
      $('.water-calculator input[name="weight"]').attr(
        "placeholder",
        "Kilograms"
      );
      $('.water-calculator input[name="weight"]').val("");
    } else if (weightUnits == "pounds") {
      $('.water-calculator input[name="weight"]').attr("placeholder", "Pounds");
      $('.water-calculator input[name="weight"]').val("");
    }
  });

  $(".water-calculator .calc-submit").click(function() {
    var weight = parseInt($('.water-calculator input[name="weight"]').val());
    var weightType = $(
      '.water-calculator input[name="weight-system2"]:checked'
    ).val();
    var workout = $(".water-calculator input[name=activity2]:checked").val();
    var water = 0;

    if (isNaN(weight)) {
      $(".water-calculator .calc-water-answer")
        .show(0)
        .html('<span style="color: #a30000;">Please enter your weight.</span>');
    } else {
      if (weightType == "kilos") {
        weight = weight * 2.20462;
      }

      switch (workout) {
        case "L":
          water = Math.round(weight * 0.6 + 12);
          break;
        case "M":
          water = Math.round(weight * 0.6 + 24);
          break;
        case "V":
          water = Math.round(weight * 0.6 + 36);
          break;
      }

      $(".water-calculator .calc-water-answer")
        .show(0)
        .html(
          '<div>Target Daily Water Intake: <span class="waters extra-condensed-regular">' +
            water +
            " oz</span></div>"
        );
    }
  });

  /* CARB CALCULATOR */

  $('.carb-calculator input[name="height-system"]').click(function() {
    var heightUnits = $(this).val();

    if (heightUnits == "meters") {
      $('.carb-calculator input[name="height-tens"]').attr(
        "placeholder",
        "Meters"
      );
      $('.carb-calculator input[name="height-units"]').attr(
        "placeholder",
        "Centimeters"
      );
      $('.carb-calculator input[name="height-tens"]').val("");
      $('.carb-calculator input[name="height-units"]').val("");
    } else if (heightUnits == "feet") {
      $('.carb-calculator input[name="height-tens"]').attr(
        "placeholder",
        "Feet"
      );
      $('.carb-calculator input[name="height-units"]').attr(
        "placeholder",
        "Inches"
      );
      $('.carb-calculator input[name="height-tens"]').val("");
      $('.carb-calculator input[name="height-units"]').val("");
    }
  });

  $('.carb-calculator input[name="weight-system"]').click(function() {
    var weightUnits = $(this).val();

    if (weightUnits == "kilos") {
      $('.carb-calculator input[name="weight"]').attr(
        "placeholder",
        "Kilograms"
      );
      $('.carb-calculator input[name="weight"]').val("");
    } else if (weightUnits == "pounds") {
      $('.carb-calculator input[name="weight"]').attr("placeholder", "Pounds");
      $('.carb-calculator input[name="weight"]').val("");
    }
  });

  $(".carb-calculator .calc-submit").click(function() {
    var height = 0;
    var heightTens = parseInt(
      $('.carb-calculator input[name="height-tens"]').val()
    );
    var heightUnits = parseInt(
      $('.carb-calculator input[name="height-units"]').val()
    );
    var heightType = $(
      '.carb-calculator input[name="height-system"]:checked'
    ).val();
    var weight = parseInt($('.carb-calculator input[name="weight"]').val());
    var weightType = $(
      '.carb-calculator input[name="weight-system"]:checked'
    ).val();
    var calories = 0;
    var age = parseInt($(".carb-calculator input[name=age]").val());
    var sex = $(".carb-calculator input[name=sex]:checked").val();
    var job = $(".carb-calculator input[name=activity]:checked").val();
    var goal = $(".carb-calculator input[name=goal]:checked").val();
    var carbs = 0;

    if (isNaN(age) || isNaN(heightTens) || isNaN(weight)) {
      $(".carb-calculator .calc-carb-answer")
        .show(0)
        .html('<span style="color: #a30000;"></span>');
    } else {
      if (isNaN(heightUnits)) {
        heightUnits = 0;
      }

      if (heightType == "feet") {
        height = heightTens * 30.48 + heightUnits * 2.54;
      } else {
        height = heightTens * 100 + heightUnits;
      }

      if (weightType == "pounds") {
        weight = weight * 0.453592;
      }

      if (sex == "M") {
        calories = weight * 10 + height * 6.25 - age * 5 + 5;
      } else {
        calories = weight * 10 + height * 6.25 - age * 5 - 161;
      }

      switch (job) {
        case "L":
          calories = Math.round(calories * 1.1);
          break;
        case "M":
          calories = Math.round(calories * 1.3);
          break;
        case "V":
          calories = Math.round(calories * 1.5);
          break;
        case "E":
          calories = Math.round(calories * 1.7);
          break;
      }

      switch (goal) {
        case "fat-loss":
          if (calories <= 2000) calories = 0.9 * calories;
          if (calories > 2000) calories = 0.8 * calories;
          carbs = Math.round(0.4 * calories / 4);
          break;
        case "maintenance":
          carbs = Math.round(0.45 * calories / 4);
          break;
        case "gainz":
          calories += 500;
          carbs = Math.round(0.45 * calories / 4);
          break;
      }

      $(".carb-calculator .calc-carb-answer")
        .show(0)
        .html(
          'Target daily carb intake: <span class="calories extra-condensed-regular">' +
            carbs +
            " g</span>"
        );
    }
  });

  /* PROTEIN CALCULATOR */

  $('.protein-calculator input[name="height-system"]').click(function() {
    var heightUnits = $(this).val();

    if (heightUnits == "meters") {
      $('.protein-calculator input[name="height-tens"]').attr(
        "placeholder",
        "Meters"
      );
      $('.protein-calculator input[name="height-units"]').attr(
        "placeholder",
        "Centimeters"
      );
      $('.protein-calculator input[name="height-tens"]').val("");
      $('.protein-calculator input[name="height-units"]').val("");
    } else if (heightUnits == "feet") {
      $('.protein-calculator input[name="height-tens"]').attr(
        "placeholder",
        "Feet"
      );
      $('.protein-calculator input[name="height-units"]').attr(
        "placeholder",
        "Inches"
      );
      $('.protein-calculator input[name="height-tens"]').val("");
      $('.protein-calculator input[name="height-units"]').val("");
    }
  });

  $('.protein-calculator input[name="weight-system"]').click(function() {
    var weightUnits = $(this).val();

    if (weightUnits == "kilos") {
      $('.protein-calculator input[name="weight"]').attr(
        "placeholder",
        "Kilograms"
      );
      $('.protein-calculator input[name="weight"]').val("");
    } else if (weightUnits == "pounds") {
      $('.protein-calculator input[name="weight"]').attr(
        "placeholder",
        "Pounds"
      );
      $('.protein-calculator input[name="weight"]').val("");
    }
  });

  $(".protein-calculator .calc-submit").click(function() {
    var height = 0;
    var heightTens = parseInt(
      $('.protein-calculator input[name="height-tens"]').val()
    );
    var heightUnits = parseInt(
      $('.protein-calculator input[name="height-units"]').val()
    );
    var heightType = $(
      '.protein-calculator input[name="height-system"]:checked'
    ).val();
    var weight = parseInt($('.protein-calculator input[name="weight"]').val());
    var weightType = $(
      '.protein-calculator input[name="weight-system"]:checked'
    ).val();
    var calories = 0;
    var age = parseInt($(".protein-calculator input[name=age]").val());
    var sex = $(".protein-calculator input[name=sex]:checked").val();
    var job = $(".protein-calculator input[name=activity]:checked").val();
    var goal = $(".protein-calculator input[name=goal]:checked").val();
    var protons = 0;

    if (isNaN(age) || isNaN(heightTens) || isNaN(weight)) {
      $(".protein-calculator .calc-protein-answer")
        .show(0)
        .html('<span style="color: #a30000;"></span>');
    } else {
      if (isNaN(heightUnits)) {
        heightUnits = 0;
      }

      if (heightType == "feet") {
        height = heightTens * 30.48 + heightUnits * 2.54;
      } else {
        height = heightTens * 100 + heightUnits;
      }

      if (weightType == "pounds") {
        weight = weight * 0.453592;
      }

      if (sex == "M") {
        calories = weight * 10 + height * 6.25 - age * 5 + 5;
      } else {
        calories = weight * 10 + height * 6.25 - age * 5 - 161;
      }

      switch (job) {
        case "L":
          calories = Math.round(calories * 1.1);
          break;
        case "M":
          calories = Math.round(calories * 1.3);
          break;
        case "V":
          calories = Math.round(calories * 1.5);
          break;
        case "E":
          calories = Math.round(calories * 1.7);
          break;
      }

      switch (goal) {
        case "fat-loss":
          if (calories <= 2000) calories = 0.9 * calories;
          if (calories > 2000) calories = 0.8 * calories;
          protons = Math.round(0.4 * calories / 4);
          break;
        case "maintenance":
          protons = Math.round(0.3 * calories / 4);
          break;
        case "gainz":
          calories += 500;
          protons = Math.round(0.3 * calories / 4);
          break;
      }

      $(".protein-calculator .calc-protein-answer")
        .show(0)
        .html(
          'Target daily protein intake: <span class="calories extra-condensed-regular">' +
            protons +
            " g</span>"
        );
    }
  });

  /* FAT CALCULATOR */

  $('.fat-calculator input[name="height-system"]').click(function() {
    var heightUnits = $(this).val();

    if (heightUnits == "meters") {
      $('.fat-calculator input[name="height-tens"]').attr(
        "placeholder",
        "Meters"
      );
      $('.fat-calculator input[name="height-units"]').attr(
        "placeholder",
        "Centimeters"
      );
      $('.fat-calculator input[name="height-tens"]').val("");
      $('.fat-calculator input[name="height-units"]').val("");
    } else if (heightUnits == "feet") {
      $('.fat-calculator input[name="height-tens"]').attr(
        "placeholder",
        "Feet"
      );
      $('.fat-calculator input[name="height-units"]').attr(
        "placeholder",
        "Inches"
      );
      $('.fat-calculator input[name="height-tens"]').val("");
      $('.fat-calculator input[name="height-units"]').val("");
    }
  });

  $('.fat-calculator input[name="weight-system"]').click(function() {
    var weightUnits = $(this).val();

    if (weightUnits == "kilos") {
      $('.fat-calculator input[name="weight"]').attr(
        "placeholder",
        "Kilograms"
      );
      $('.fat-calculator input[name="weight"]').val("");
    } else if (weightUnits == "pounds") {
      $('.fat-calculator input[name="weight"]').attr("placeholder", "Pounds");
      $('.fat-calculator input[name="weight"]').val("");
    }
  });

  $(".fat-calculator .calc-submit").click(function() {
    var height = 0;
    var heightTens = parseInt(
      $('.fat-calculator input[name="height-tens"]').val()
    );
    var heightUnits = parseInt(
      $('.fat-calculator input[name="height-units"]').val()
    );
    var heightType = $(
      '.fat-calculator input[name="height-system"]:checked'
    ).val();
    var weight = parseInt($('.fat-calculator input[name="weight"]').val());
    var weightType = $(
      '.fat-calculator input[name="weight-system"]:checked'
    ).val();
    var calories = 0;
    var age = parseInt($(".fat-calculator input[name=age]").val());
    var sex = $(".fat-calculator input[name=sex]:checked").val();
    var job = $(".fat-calculator input[name=activity]:checked").val();
    var goal = $(".fat-calculator input[name=goal]:checked").val();
    var fats = 0;

    if (isNaN(age) || isNaN(heightTens) || isNaN(weight)) {
      $(".fat-calculator .calc-fat-answer")
        .show(0)
        .html('<span style="color: #a30000;"></span>');
    } else {
      if (isNaN(heightUnits)) {
        heightUnits = 0;
      }

      if (heightType == "feet") {
        height = heightTens * 30.48 + heightUnits * 2.54;
      } else {
        height = heightTens * 100 + heightUnits;
      }

      if (weightType == "pounds") {
        weight = weight * 0.453592;
      }

      if (sex == "M") {
        calories = weight * 10 + height * 6.25 - age * 5 + 5;
      } else {
        calories = weight * 10 + height * 6.25 - age * 5 - 161;
      }

      switch (job) {
        case "L":
          calories = Math.round(calories * 1.1);
          break;
        case "M":
          calories = Math.round(calories * 1.3);
          break;
        case "V":
          calories = Math.round(calories * 1.5);
          break;
        case "E":
          calories = Math.round(calories * 1.7);
          break;
      }

      switch (goal) {
        case "fat-loss":
          if (calories <= 2000) calories = 0.9 * calories;
          if (calories > 2000) calories = 0.8 * calories;
          fats = Math.round(0.2 * calories / 9);
          break;
        case "maintenance":
          fats = Math.round(0.25 * calories / 9);
          break;
        case "gainz":
          calories += 500;
          fats = Math.round(0.25 * calories / 9);
          break;
      }

      $(".fat-calculator .calc-fat-answer")
        .show(0)
        .html(
          'Target daily fat intake: <span class="calories extra-condensed-regular">' +
            fats +
            " g</span>"
        );
    }
  });

  /* CALORIE CALCULATOR */

  $('.calorie-calculator input[name="height-system"]').click(function() {
    var heightUnits = $(this).val();

    if (heightUnits == "meters") {
      $('.calorie-calculator input[name="height-tens"]').attr(
        "placeholder",
        "Meters"
      );
      $('.calorie-calculator input[name="height-units"]').attr(
        "placeholder",
        "Centimeters"
      );
      $('.calorie-calculator input[name="height-tens"]').val("");
      $('.calorie-calculator input[name="height-units"]').val("");
    } else if (heightUnits == "feet") {
      $('.calorie-calculator input[name="height-tens"]').attr(
        "placeholder",
        "Feet"
      );
      $('.calorie-calculator input[name="height-units"]').attr(
        "placeholder",
        "Inches"
      );
      $('.calorie-calculator input[name="height-tens"]').val("");
      $('.calorie-calculator input[name="height-units"]').val("");
    }
  });

  $('.calorie-calculator input[name="weight-system"]').click(function() {
    var weightUnits = $(this).val();

    if (weightUnits == "kilos") {
      $('.calorie-calculator input[name="weight"]').attr(
        "placeholder",
        "Kilograms"
      );
      $('.calorie-calculator input[name="weight"]').val("");
    } else if (weightUnits == "pounds") {
      $('.calorie-calculator input[name="weight"]').attr(
        "placeholder",
        "Pounds"
      );
      $('.calorie-calculator input[name="weight"]').val("");
    }
  });

  $(".calorie-calculator .calc-submit").click(function() {
    var height = 0;
    var heightTens = parseInt(
      $('.calorie-calculator input[name="height-tens"]').val()
    );
    var heightUnits = parseInt(
      $('.calorie-calculator input[name="height-units"]').val()
    );
    var heightType = $(
      '.calorie-calculator input[name="height-system"]:checked'
    ).val();
    var weight = parseInt($('.calorie-calculator input[name="weight"]').val());
    var weightType = $(
      '.calorie-calculator input[name="weight-system"]:checked'
    ).val();
    var calories = 0;
    var age = parseInt($(".calorie-calculator input[name=age]").val());
    var sex = $(".calorie-calculator input[name=sex]:checked").val();
    var job = $(".calorie-calculator input[name=activity]:checked").val();
    var goal = $(".calorie-calculator input[name=goal]:checked").val();

    if (isNaN(age) || isNaN(heightTens) || isNaN(weight)) {
      $(".calorie-calculator .calc-caloric-answer")
        .show(0)
        .html(
          '<span style="color: #a30000;">Please complete all fields.</span>'
        );
    } else {
      if (isNaN(heightUnits)) {
        heightUnits = 0;
      }

      if (heightType == "feet") {
        height = heightTens * 30.48 + heightUnits * 2.54;
      } else {
        height = heightTens * 100 + heightUnits;
      }

      if (weightType == "pounds") {
        weight = weight * 0.453592;
      }

      if (sex == "M") {
        calories = weight * 10 + height * 6.25 - age * 5 + 5;
      } else {
        calories = weight * 10 + height * 6.25 - age * 5 - 161;
      }

      switch (job) {
        case "L":
          calories = Math.round(calories * 1.1);
          break;
        case "M":
          calories = Math.round(calories * 1.3);
          break;
        case "V":
          calories = Math.round(calories * 1.5);
          break;
        case "E":
          calories = Math.round(calories * 1.7);
          break;
      }

      switch (goal) {
        case "fat-loss":
          if (calories <= 2000) calories = 0.9 * calories;
          if (calories > 2000) calories = 0.8 * calories;
          break;
        case "maintenance":
          break;
        case "gainz":
          calories += 500;
          break;
      }

      $(".calorie-calculator .calc-caloric-answer")
        .show(0)
        .html(
          '<div>Target  Daily Caloric Intake: <span class="extra-condensed-regular">' +
            calories +
            " cal</span></div>"
        );
    }
  });
});
