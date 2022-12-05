Feature('Liking Unliking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#query');
  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item__not__found');
});

Scenario('liking unliking one restaurant', ({ I }) => {
  // liking Restaurant
  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.waitForElement('.restaurant__name a', 10);
  I.seeElement('.restaurant__name a');

  I.click(locate('.restaurant__name a').first());
  // klik menyukai restoran
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.restaurant-item');

  // Unliking Restaurant
  I.seeElement('.restaurant__name a');
  I.click(locate('.restaurant__name a').first());
  // klik batal menyukai restoran
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');

  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item__not__found');
});
