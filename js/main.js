$(function () {
    var theme = localStorage.getItem("theme");
    var parsedTheme = JSON.parse(theme);
    console.log(parsedTheme);


    if (theme != null && theme != undefined) {
        $("body").css({
            "--bg": parsedTheme.background,
            "--color": parsedTheme.f_high,
            "--dot": parsedTheme.b_med,
            "--mouse-color": parsedTheme.f_med,
            "--mouse-hover": parsedTheme.f_high
        });
    } else {
        console.log("theme not found!");
    }





    $("#theme-list svg").click(function () {
        var background = $(this).find("#background").attr("fill");
        var f_high = $(this).find("#f_high").attr("fill");
        var b_high = $(this).find("#b_high").attr("fill");

        var f_med = $(this).find("#f_med").attr("fill");
        var f_low = $(this).find("#f_low").attr("fill");
        var f_inv = $(this).find("#f_inv").attr("fill");
        var b_med = $(this).find("#b_med").attr("fill");
        var b_low = $(this).find("#b_low").attr("fill");
        var b_inv = $(this).find("#b_inv").attr("fill");

        // console.log(bg, text);
        $("body").css({
            "--bg": background,
            "--color": f_high,
            "--dot": b_med,
            "--mouse-color": f_med,
            "--mouse-hover": f_high
        });

        // if (theme != null && theme != undefined) {
        var newTheme = {
            "background": background,
            "f_high": f_high,
            "f_med": f_med,
            "f_low": f_low,
            "f_inv": f_inv,
            "b_high": b_high,
            "b_med": b_med,
            "b_low": b_low,
            "b_inv": b_inv
        }

        localStorage.setItem("theme", JSON.stringify(newTheme))
        // } else {
        //     console.log("theme not found!");
        // }
    });


    /* Start Mouse Cursor */
    // Code from https://codepen.io/ntenebruso/pen/QWLzVjY

    var cursor = document.querySelector('.cursor');
    var cursorinner = document.querySelector('.cursor2');
    var a = document.querySelectorAll('a');

    document.addEventListener('mousemove', function (e) {
        var x = e.clientX;
        var y = e.clientY;
        cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
    });

    document.addEventListener('mousemove', function (e) {
        var x = e.clientX;
        var y = e.clientY;
        cursorinner.style.left = x + 'px';
        cursorinner.style.top = y + 'px';
    });

    document.addEventListener('mousedown', function () {
        cursor.classList.add('click');
        cursorinner.classList.add('cursorinnerhover')
    });

    document.addEventListener('mouseup', function () {
        cursor.classList.remove('click')
        cursorinner.classList.remove('cursorinnerhover')
    });

    a.forEach(item => {
        item.addEventListener('mouseover', () => {
            cursor.classList.add('hover');
        });
        item.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    })
    /* End Mouse Cursor */
});