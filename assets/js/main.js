window.addEventListener('DOMContentLoaded', (event) => {
    const not__silvers = document.querySelectorAll('.not__silver');
    let height_current = 0;
    for (let index = 0; index < not__silvers.length; index++) {
        const not__silver = not__silvers[index];
        const height_desciption = not__silver.querySelector('.booking-price__product--description');
        let height_desciption_height = height_desciption.clientHeight;
        if (height_desciption_height > height_current) {
            height_current = height_desciption_height;
        } else {
            height_current = height_current;
        }
    }

    for (let index = 0; index < not__silvers.length; index++) {
        const not__silver = not__silvers[index];
        const height_item = not__silver.querySelector('.booking-price__product--description');
        height_item.style.height = height_current + "px";
    }

    const silvers = document.querySelectorAll('.silver .booking-price__product');
    let height_default = 0;
    for (let index = 0; index < silvers.length; index++) {
        const silver = silvers[index];
        const height_desciption = silver.querySelector('.booking-price__product--description');
        let height_desciption_height = height_desciption.clientHeight;
        if (height_desciption_height > height_default) {
            height_default = height_desciption_height;
        } else {
            height_default = height_default;
        }
    }

    for (let index = 0; index < silvers.length; index++) {
        const silver = silvers[index];
        const height_active = silver.querySelector('.booking-price__product--description');
        height_active.style.height = height_default + "px";
    }

})



// $(document).ready(function () {
//     var default_height = 0;
//     jQuery('.not__silver').each(function () {
//         var height_title = jQuery(this).find('.booking-price__product--description').height();
//         console.log(height_title);
//         if (height_title > default_height) {
//             default_height = height_title;
//         } else {
//             default_height = default_height;
//         }
//     });
//     console.log(default_height);
//     //jQuery('.gridder-list').find('.name-category').css('height', default_height);
// })