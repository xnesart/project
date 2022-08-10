window.addEventListener("DOMContentLoaded", (e) => {
    const tabsParent = document.querySelector(".tabheader__items"),
        tabs = document.querySelectorAll(".tabheader__item"),
        tabActive = document.querySelector(".tabheader__item_active"),
        tabContent = document.querySelectorAll(".tabcontent");

    function hideTabs() {
        tabs.forEach((tab) => {
            tab.classList.remove("tabheader__item_active");
        });
        tabContent.forEach((item) => {
            item.classList.add("hide");
            item.classList.remove("show", "fade");
        });
        tabActive.classList.remove("tabheader__item_active");
    }
    function showTabs(i = 0) {
        tabs[i].classList.add("tabheader__item_active");
        tabContent[i].classList.add("show", "fade");
        tabContent[i].classList.remove("hide");
    }

    tabsParent.addEventListener("click", (event) => {
        const target = event.target;
        if (target && target.classList.contains("tabheader__item")) {
            tabs.forEach((item, i) => {
                if (item == target) {
                    hideTabs();
                    showTabs(i);
                    console.log('click')
                }
            });
        }
    });
    hideTabs();
    showTabs();
});

//         tabsParent.addEventListener('click', (event) =>{
//             const target = event.target;

// });
