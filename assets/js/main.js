// QUERY SELECTOR SNIPPET
const select = (selector, scope = document) => {
    return scope.querySelector(selector);
};
const selectAll = (selector, scope = document) => {
    return scope.querySelectorAll(selector);
};

// NAVIGATION
const scrollToElem = (elem) => {
    select(elem).scrollIntoView({behavior:"smooth"});
}

// YEAR
selectAll('.year').forEach((el) => {
    el.innerText = new Date().getFullYear();
});

// MODAL
const licenseModalCall = selectAll(".modal-call");
const licenseModalClose = select(".close-icon");
const licenseModal = select(".form-modal");
const modalContent = select(".modal-content");

function openModal() {
    licenseModal.classList.add('active');
}

function closeModal() {
    if (licenseModal.classList.contains('active')) {
        licenseModal.classList.remove('active');
    }
}

licenseModalCall.forEach(el => el.addEventListener('click', openModal));
licenseModalClose.addEventListener('click', closeModal);
licenseModal.addEventListener('click', closeModal);
modalContent.addEventListener('click', e => e.stopPropagation());

// MOBILE MENU
const menuBtnOpen = select('.burger-menu-icon');
const menuBtnClose = select('.mob-menu-close');
const mobileMenu = select('.navigation');
const navigationUnderlay = select('.navigation-underlay');
const mobileMenuItems = selectAll('.nav-menu-list-item');

const mobileMenuOpen = () => {
    mobileMenu.classList.add('active');
    navigationUnderlay.classList.add('active');
}

const mobileMenuClose = () => {
  if (mobileMenu.classList.contains('active')) {
    mobileMenu.classList.remove('active');
    navigationUnderlay.classList.remove('active');
  }
}

menuBtnOpen.addEventListener('click', mobileMenuOpen);
menuBtnClose.addEventListener('click', mobileMenuClose);
navigationUnderlay.addEventListener('click', mobileMenuClose);
mobileMenuItems.forEach((el) => {
    el.addEventListener('click', mobileMenuClose);
});

// Form Submission
let nameValue = document.querySelector('.name');
let lastnameValue = document.querySelector('.lastname');
let emailValue = document.querySelector('.email');
let phoneValue = document.querySelector('.phone');
let requiredFields = document.querySelectorAll('.required-fields');

const formSubmission = () => {
    if (nameValue.value != '' && lastnameValue.value != '' && emailValue.value != '' && phoneValue.value != '') {
        window.location.href = 'thankyou.html';
    } else {
        requiredFields.forEach((e) => {
            e.classList.add('visible');
        })
    }
}

const inputFields = document.querySelectorAll('.name, .lastname, .email, .phone');
for (let inputItem of inputFields) {
    inputItem.addEventListener('focus', function() {
        requiredFields.forEach((e) => {
            if (e.classList.contains('visible')) {
                e.classList.remove('visible');
            }
        })
    });
}

// VIDEO
var Z = document.querySelectorAll(".play-btn");
if (void 0 === window.helloVideoStateFlag || "undefined" === typeof window.helloVideoStateFlag) {
    window.helloVideoStateFlag = !0;
    for (var Q = 0; Q < Z.length; Q++)
        Z[Q].addEventListener("click", (function() {
            var e = this.parentNode.querySelector("video");
            e.paused ? (e.play(),
            this.parentNode.classList.add("play")) : (e.pause(),
            this.parentNode.classList.remove("play"))
        }
    ))
}

