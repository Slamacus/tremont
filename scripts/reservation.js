"use strict";

// == Date Input ==

$("#date-input").datepicker({
  dateFormat: "dd/mm/yy",
});

// == Time Input ==

$("#time-input").timepicker({
  timeFormat: "h:mm p",
  interval: 60,
  minTime: "09",
  maxTime: "09:00pm",
  defaultTime: "",
  startTime: "09:00",
  dynamic: false,
  dropdown: false,
  scrollbar: false,
});

const resBtn = $(".hero-button");
const resOverlay = $(".overlay");

function openOverlay() {
  resOverlay.css("display", "flex");
  //   $("html, body").css({
  //     overflow: "hidden",
  //     height: "100%",
  //   });
}

function closeOverlay() {
  resOverlay.css("display", "none");
  //   $("html, body").css({
  //     overflow: "auto",
  //     height: "auto",
  //   });
}