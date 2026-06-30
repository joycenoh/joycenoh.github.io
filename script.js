// Grab all filter buttons and all the project ros.
const buttons = document.querySelectorAll('.filter');
const projects = document.querySelectorAll('.project');

// For each button, listen for a click.
buttons.forEach(function (button) {
    button.addEventListener('click', function () {

        // 1. What did they pick? Read the button's data-filter.
        const choice = button.dataset.filter;

        // 2. Move the highlight: clear it from ALL, add to this one.
        buttons.forEach(function (b) {
            b.classList.remove('is-active');
        });
        button.classList.add('is-active');

        // 3. Show or hide each project.
        projects.forEach(function (project) {
            const discipline = project.dataset.discipline;
            if (choice === 'all' || choice === discipline) {
                project.style.display = '';           // show
            } else {
                project.style.display = 'none';       // hide
            }
        });

    });
});