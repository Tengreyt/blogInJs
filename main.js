window.onload = function() {
    let icon = document.querySelector('.sidebar_icon');
    let sidebar = document.querySelector('.sidebar');
    let main = document.querySelector('.main');
    let mainContent = document.querySelector('.main > .main__content');
    let navigation = document.querySelector('.nav');
        
    // icon
    icon.onclick = function() {
        this.classList.toggle('change-icon');
        sidebar.classList.toggle('expanded'); // добавляем класс для увеличения
        main.classList.toggle('main_bg');
        mainContent.classList.toggle('main__content_bg');
        navigation.classList.toggle('nav_bar');
    };
   
    main.addEventListener('click', function(event) {
        let target = event.target;

        if(target.classList.contains('main_bg')) {
            icon.classList.remove('change-icon');
            sidebar.classList.remove('expanded'); // убираем класс для уменьшения
            main.classList.remove('main_bg');
            mainContent.classList.remove('main__content_bg');
        }
    });
}
