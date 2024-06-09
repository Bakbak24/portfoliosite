let right = document.getElementById("right");
    let menu = document.getElementById("br-menu");
    let isMenuOpen = false;

    right.addEventListener("click", function () {
        let computedStyle = window.getComputedStyle(right);
        let backgroundImage = computedStyle.backgroundImage;

        if (backgroundImage !== 'none') {
            if (isMenuOpen) {
                right.style.backgroundImage = "url('images/br-menu.svg')";
                menu.style.display = "none";
                isMenuOpen = false;
            } else {
                right.style.backgroundImage = "url('images/br-menu-cls.svg')";
                menu.style.display = "block";
                isMenuOpen = true;
            }
        }
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth >= 750) {
            menu.style.display = "none";
            right.style.backgroundImage = "none";
            right.style.backgroundRepeat = "no-repeat";
            isMenuOpen = false;
        } else {
            if (isMenuOpen) {
                right.style.backgroundImage = "url('images/br-menu-cls.svg')";
            } else {
                right.style.backgroundImage = "url('images/br-menu.svg')";
            }
        }
    });