// show tabs in TOUR section
const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('.content');
//Create list of circles
const circles = document.querySelectorAll('.questionNumberIcon');
const circlesBottom = document.querySelectorAll('.circleBot');

//Add index to the foreach loop to be used to idenitfy which circle should be set to active
tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget);
        tabContents.forEach(tabContent => tabContent.classList.remove('show'));
        target.classList.add('show');
        //Removed active class from all circles
        circles.forEach(circle => circle.classList.remove('active'));
        circlesBottom.forEach(circleBottom => circleBottom.classList.remove('active'));
        //Create a variable for the circle container so the index can be used to select the one that was clicked on
        const circlesClass = document.querySelector('.ng-modal-number-container');
        const circlesClassBottom = document.querySelector('.circleContainerBot');
        //Use the index to select the correct circle to set as active
        // since within .ng-model-number-container there is a questionNumber subclass you need to select the children of the children to add the active class to
        circlesClass.children[index].children[0].classList.add('active');
        circlesClassBottom.children[index].children[0].classList.add('active');
    });
});

// drop down menu on Homepage
// Item 1
// const menu1 = document.querySelector('#menu-1').addEventListener('click', () => {
//   const content1 = document.querySelector('#menu-c-1');
//   if (content1.style.display === 'none') {
//     content1.style.display='block';
//   } else {
//     content1.style.display = 'none';
//   }
// })
// // Item 2
// const menu2 = document.querySelector('#menu-2').addEventListener('click', () => {
//   const content1 = document.querySelector('#menu-c-2');
//   if (content1.style.display === 'none') {
//     content1.style.display='block';
//   } else {
//     content1.style.display = 'none';
//   }
// })
// // Item 3
// const menu3 = document.querySelector('#menu-3').addEventListener('click', () => {
//   const content1 = document.querySelector('#menu-c-3');
//   if (content1.style.display === 'none') {
//     content1.style.display='block';
//   } else {
//     content1.style.display = 'none';
//   }
// })
// // Item 4
// const menu4 = document.querySelector('#menu-4').addEventListener('click', () => {
//   const content1 = document.querySelector('#menu-c-4');
//   if (content1.style.display === 'none') {
//     content1.style.display='block';
//   } else {
//     content1.style.display = 'none';
//   }
// })
// // Item 5
// const menu5 = document.querySelector('#menu-5').addEventListener('click', () => {
//   const content1 = document.querySelector('#menu-c-5');
//   if (content1.style.display === 'none') {
//     content1.style.display='block';
//   } else {
//     content1.style.display = 'none';
//   }
// })
// // Item 6
// const menu6 = document.querySelector('#menu-6').addEventListener('click', () => {
//   const content1 = document.querySelector('#menu-c-6');
//   if (content1.style.display == 'none') {
//     content1.style.display='block';
//   } else {
//     content1.style.display = 'none';
//   }
// })
// // Item 7
// // const menu7 = document.querySelector('#menu-7').addEventListener('click', () => {
// //   const content1 = document.querySelector('#menu-c-7');
// //   if (content1.style.display == 'none') {
// //     content1.style.display='block';
// //   } else {
// //     content1.style.display = 'none';
// //   }
// // })
// // // Item 8
// // const menu8 = document.querySelector('#menu-8').addEventListener('click', () => {
// //   const content1 = document.querySelector('#menu-c-8');
// //   if (content1.style.display == 'none') {
// //     content1.style.display='block';
// //   } else {
// //     content1.style.display = 'none';
// //   }
// // })
// // // Item 9
// // const menu9 = document.querySelector('#menu-9').addEventListener('click', () => {
// //   const content1 = document.querySelector('#menu-c-9');
// //   if (content1.style.display == 'none') {
// //     content1.style.display='block';
// //   } else {
// //     content1.style.display = 'none';
// //   }
// // })
// // // Item 10
// // const menu10 = document.querySelector('#menu-10').addEventListener('click', () => {
// //   const content1 = document.querySelector('#menu-c-10');
// //   if (content1.style.display == 'none') {
// //     content1.style.display='block';
// //   } else {
// //     content1.style.display = 'none';
// //   }
// // })
