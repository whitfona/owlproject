// show tabs in TOUR section
const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('.content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach(tabContent => tabContent.classList.remove('show'));
    target.classList.add('show');
  });
});

// const tabs = document.querySelectorAll('[data-tab-target]');
// const circles = document.querySelectorAll('.questionNumberIcon');
// const billing = document.querySelector('#cir-billing');
// const schedule = document.querySelector('#cir-schedule');

// tabs.forEach(tab => {
//   tab.addEventListener('click', e => {
//     const circleTarget = document.querySelectorAll('.questionNumberIcon');
//     circles.forEach(circle => circle.classList.remove('active'));
//     circleTarget.classList.add('active');
//   });
// });
