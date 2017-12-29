var mercury_path = anime.path('.mercury-orbit');
var venus_path = anime.path('.venus-orbit');
var earth_path = anime.path('.earth-orbit');
var mars_path = anime.path('.mars-orbit');

anime({
  duration: 3000,
  loop: true,
  easing: 'linear',
  targets: '.mercury',
  translateX: mercury_path('x'),
  translateY: mercury_path('y')
});

anime({
  duration: 4000,
  loop: true,
  easing: 'linear',
  targets: '.venus',
  translateX: venus_path('x'),
  translateY: venus_path('y')
})

anime({
  duration: 5000,
  loop: true,
  easing: 'linear',
  targets: '.earth-moon-system',
  translateX: earth_path('x'),
  translateY: earth_path('y'),
  rotate: {
    value: '3turn',
    loop: true,
    easing: 'linear',
  }
})

anime({
  duration: 6000,
  loop: true,
  easing: 'linear',
  targets: '.mars',
  translateX: mars_path('x'),
  translateY: mars_path('y')
}) 