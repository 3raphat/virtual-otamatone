(function () {
    window.addEventListener("keydown", function (e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

        if (!audio) return;

        audio.currentTime = 0;
        audio.play();
        key.classList.add("playing");

        console.log(e.keyCode);

        function show_musicNote() {
            if (e.keyCode == 96) {
                document.getElementById("musicNote").innerHTML = "C";
            } else if (e.keyCode == 97) {
                document.getElementById("musicNote").innerHTML = "D";
            } else if (e.keyCode == 98) {
                document.getElementById("musicNote").innerHTML = "E";
            } else if (e.keyCode == 99) {
                document.getElementById("musicNote").innerHTML = "F";
            } else if (e.keyCode == 100) {
                document.getElementById("musicNote").innerHTML = "G";
            } else if (e.keyCode == 101) {
                document.getElementById("musicNote").innerHTML = "A";
            } else if (e.keyCode == 102) {
                document.getElementById("musicNote").innerHTML = "B";
            } else if (e.keyCode == 103) {
                document.getElementById("musicNote").innerHTML = "C";
            } else if (e.keyCode == 104) {
                document.getElementById("musicNote").innerHTML = "D";
            } else if (e.keyCode == 105) {
                document.getElementById("musicNote").innerHTML = "E";
            }
        }
        show_musicNote();
    });

    function removeTransition(e) {
        if (e.propertyName !== "transform") return;
        this.classList.remove("playing");
    }

    const keys = document.querySelectorAll(".key");
    keys.forEach((key) =>
        key.addEventListener("transitionend", removeTransition)
    );
})();
