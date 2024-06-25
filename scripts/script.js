document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('sidebar-hidden');
});

// POPUP
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("popup1").style.display = "flex";
    document.getElementById("background").classList.add("blur-background");

    document.getElementById("next-popup1").addEventListener("click", function() {
        document.getElementById("popup1").style.display = "none";
        document.getElementById("popup2").style.display = "flex";
    });

    function removeBlur() {
        document.getElementById("background").classList.remove("blur-background");
    }

    document.getElementById("next-popup2-maybe").addEventListener("click", function() {
        document.getElementById("popup2").style.display = "none";
        document.getElementById("popup5").style.display = "flex";
    });

    document.getElementById("next-popup2-yes").addEventListener("click", function() {
        document.getElementById("popup2").style.display = "none";
        document.getElementById("popup3").style.display = "flex";
        setTimeout(function() {
            document.getElementById("popup3").style.display = "none";
            document.getElementById("popup4").style.display = "flex";
        }, 5000);
    });

    document.getElementById("next-popup4").addEventListener("click", function() {
        document.getElementById("popup4").style.display = "none";
        document.getElementById("popup5").style.display = "flex";
    });

    document.getElementById("next-popup5-maybe").addEventListener("click", function() {
        document.getElementById("popup5").style.display = "none";
        removeBlur();
    });

    document.getElementById("next-popup5-yes").addEventListener("click", function() {
        document.getElementById("popup5").style.display = "none";
        document.getElementById("popup6").style.display = "flex";
    });

    document.getElementById("next-popup6").addEventListener("click", function() {
        document.getElementById("popup6").style.display = "none";
        document.getElementById("popup7").style.display = "flex";
    });

    document.getElementById("next-popup7").addEventListener("click", function() {
        document.getElementById("popup7").style.display = "none";
        document.getElementById("popup8").style.display = "flex";
        setTimeout(function() {
            document.getElementById("popup8").style.display = "none";
            document.getElementById("popup9").style.display = "flex";
            setTimeout(function() {
                document.getElementById("popup9").style.display = "none";
                removeBlur();
            }, 5000);
        }, 5000);
    });
});
// END POPUP

// COURSE MODAL
var modal = document.getElementById("courseModal");

var span = document.getElementsByClassName("close")[0];

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

span.onclick = function() {
  closeModal();
}

window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
}

document.getElementById("goBackBtn").addEventListener("click", closeModal);
document.getElementById("addToCartBtn").addEventListener("click", function() {
  alert("HEHE udah ketambah");
});