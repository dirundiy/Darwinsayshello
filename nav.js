/* Nav dropdown support for touch screens.
   On a mouse, CSS handles it with :hover and :focus-within.
   On a phone or tablet there is no hover, so the first tap
   opens the menu and a second tap follows the link. */
(function(){
  "use strict";

  var item = document.querySelector(".has-drop");
  if (!item) return;

  var link = item.querySelector("a");
  var noHover = window.matchMedia("(hover: none)").matches;
  if (!noHover) return;

  link.addEventListener("click", function(e){
    if (!item.classList.contains("open")){
      e.preventDefault();
      item.classList.add("open");
    }
  });

  document.addEventListener("click", function(e){
    if (!item.contains(e.target)) item.classList.remove("open");
  });

  document.addEventListener("keydown", function(e){
    if (e.key === "Escape") item.classList.remove("open");
  });
})();
