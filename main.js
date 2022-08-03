(() => {
  'use strict';
  function e (e) {
    const t = document.createElement ('p');
    return (t.textContent = e), t;
  }
  const t = function () {
    const t = document.getElementById ('main');
    (t.textContent = ''), t.appendChild (
      (function () {
        const t = document.createElement ('div');
        t.classList.add ('home');
        const n = document.createElement ('img');
        return (n.src = 'images/chef.png'), (n.alt = 'Chef'), t.appendChild (
          e ('Best pizza in your country')
        ), t.appendChild (e ('Made with passion since 1908')), t.appendChild (
          n
        ), t.appendChild (e ('Order online or visit us!')), t;
      }) ()
    );
  };
  function n (e, t) {
    const n = document.createElement ('div');
    n.classList.add ('menu-item');
    const a = document.createElement ('h2');
    a.textContent = e;
    const o = document.createElement ('p');
    o.textContent = t;
    const c = document.createElement ('img');
    return (c.src = `images/pizzas/${e.toLowerCase ()}.png`), (c.alt = `${e}`), n.appendChild (
      c
    ), n.appendChild (a), n.appendChild (o), n;
  }
  function a () {
    const e = document.createElement ('header');
    e.classList.add ('header');
    const a = document.createElement ('h1');
    return a.classList.add ('restaurant-name'), (a.textContent =
      'Mozzafiato'), e.appendChild (a), e.appendChild (
      (function () {
        const e = document.createElement ('nav'),
          a = document.createElement ('button');
        a.classList.add ('button-nav'), (a.textContent =
          'Home'), a.addEventListener ('click', e => {
          e.target.classList.contains ('active') || (o (a), t ());
        });
        const c = document.createElement ('button');
        c.classList.add ('button-nav'), (c.textContent =
          'Menu'), c.addEventListener ('click', e => {
          e.target.classList.contains ('active') ||
            (o (c), (function () {
              const e = document.getElementById ('main');
              (e.textContent = ''), e.appendChild (
                (function () {
                  const e = document.createElement ('div');
                  return e.classList.add ('menu'), e.appendChild (
                    n (
                      'Salsiccia',
                      'Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil'
                    )
                  ), e.appendChild (
                    n (
                      'Gamberi',
                      'Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil'
                    )
                  ), e.appendChild (
                    n (
                      'Pepe',
                      'Tomato sauce, Mozarella, Chilli flakes, Olives, Basil'
                    )
                  ), e.appendChild (
                    n (
                      'Disgustoso',
                      'Tomato sauce, Bacon, Pineapple, Olives, Basil'
                    )
                  ), e.appendChild (
                    n (
                      'Colorato',
                      'Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil'
                    )
                  ), e.appendChild (
                    n (
                      'Pomodoro',
                      'Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli'
                    )
                  ), e.appendChild (
                    n (
                      'Crema',
                      'White sauce, Mozarella, Shrimps, Salmon, Pineapple, Olives, Basil'
                    )
                  ), e.appendChild (
                    n (
                      'Carne',
                      'Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli'
                    )
                  ), e;
                }) ()
              );
            }) ());
        });
        const i = document.createElement ('button');
        return i.classList.add ('button-nav'), (i.textContent =
          'Contact'), i.addEventListener ('click', e => {
          e.target.classList.contains ('active') ||
            (o (i), (function () {
              const e = document.getElementById ('main');
              (e.textContent = ''), e.appendChild (
                (function () {
                  const e = document.createElement ('div');
                  e.classList.add ('contact');
                  const t = document.createElement ('p');
                  t.textContent = '📞 123 456 789';
                  const n = document.createElement ('p');
                  n.textContent = '🏠 Hollywood Boulevard 42, Los Angeles, USA';
                  const a = document.createElement ('img');
                  return (a.src = 'images/restaurant-location.png'), (a.alt =
                    'Mozzafiato restaurant location'), e.appendChild (
                    t
                  ), e.appendChild (n), e.appendChild (a), e;
                }) ()
              );
            }) ());
        }), e.appendChild (a), e.appendChild (c), e.appendChild (i), e;
      }) ()
    ), e;
  }
  function o (e) {
    document.querySelectorAll ('.button-nav').forEach (e => {
      e !== this && e.classList.remove ('active');
    }), e.classList.add ('active');
  }
  !(function () {
    const e = document.getElementById ('content');
    e.appendChild (a ()), e.appendChild (
      (function () {
        const e = document.createElement ('main');
        return e.classList.add ('main'), e.setAttribute ('id', 'main'), e;
      }) ()
    ), e.appendChild (
      (function () {
        const e = document.createElement ('footer');
        e.classList.add ('footer');
        const t = document.createElement ('p');
        t.textContent = 'odin project';
        const n = document.createElement ('a');
        n.href = 'https://github.com/michalosman';
        const a = document.createElement ('i');
        return a.classList.add ('fab'), a.classList.add (
          'fa-github'
        ), n.appendChild (a), e.appendChild (t), e.appendChild (n), e;
      }) ()
    ), o (document.querySelector ('.button-nav')), t ();
  }) ();
}) ();
