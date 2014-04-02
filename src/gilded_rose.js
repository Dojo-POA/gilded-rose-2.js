function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;

  this.updateSellIn = function () {
    this.sell_in--;
  };

  this.increaseQuality = function () {
    if (this.quality === 50) {
      return;
    }

    this.quality++;
  };

  this.decreaseQuality = function () {
    if (this.name == 'Backstage passes to a TAFKAL80ETC concert') {
      this.quality = 0;
      return;
    }
    this.quality--;
  };
}

var items = [];

items.push(new Item('+5 Dexterity Vest', 10, 20));
items.push(new Item('Aged Brie', 2, 0));
items.push(new Item('Elixir of the Mongoose', 5, 7));
items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
items.push(new Item('Conjured Mana Cake', 3, 6));

function update_quality() {
  for (var i = 0; i < items.length; i++) {
    if (items[i].name != 'Aged Brie' && items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
      if (items[i].quality > 0) {
        if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
          items[i].decreaseQuality();
        }
      }
    } else {
      items[i].increaseQuality();
      if (items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
        if (items[i].sell_in < 11) {
          items[i].increaseQuality();
        }
        if (items[i].sell_in < 6) {
          items[i].increaseQuality();
        }
      }
    }
    if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
      items[i].updateSellIn();
    }
    if (items[i].sell_in < 0) {
      if (items[i].name != 'Aged Brie') {
        if (items[i].quality > 0) {
          if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
            items[i].decreaseQuality();
          }
        }
      } else {
        items[i].increaseQuality();
      }
    }
  }
}

for(var count=0; count < 50;count++) {
  items.forEach(function(item) {
    console.log(item.name, item.sell_in, item.quality);
  });
  console.log();
  update_quality();
}
