describe("Gilded Rose", function() {

  it("should age item", function() {
    var item = new Item("banana", 50, 1);
    item.updateSellIn();
    expect(item.sell_in).toEqual(49);
  });

  it("should increase the quality of an item", function() {
    var item = new Item("banana", 50, 1);
    item.increaseQuality();
    expect(item.quality).toEqual(2);
  });

  it("should decrease the quality of an item", function() {
    var item = new Item("banana", 50, 1);
    item.decreaseQuality();
    expect(item.quality).toEqual(0);
  });

  it("should put zero on quality for ticket expired ", function() {
    var item = new Item("Backstage passes to a TAFKAL80ETC concert", -1, 33);
    item.decreaseQuality();
    expect(item.quality).toEqual(0);
  });

  it("should not have a negative quality", function() {
    var item = new Item("banana", 50, 0);
    item.decreaseQuality();
    expect(item.quality).toEqual(0);
  });

  it("should not increase quality of item beyond 50", function() {
    var item = new Item("banana", 1, 50);
    item.increaseQuality();
    expect(item.quality).toEqual(50);
  });

  it("should not decrease quality for Aged Brie", function() {
    var item = new Item("Aged Brie", 1, 50);
    item.decreaseQuality();
    expect(item.quality).toEqual(50);
  });

  it("should not decrease quality for Sulfuras, Hand of Ragnaros", function() {
    var item = new Item("Sulfuras, Hand of Ragnaros", 1, 50);
    item.decreaseQuality();
    expect(item.quality).toEqual(50);
  });

  it('should increase quality 3 times if item is ticket and sell in is 5 days or less', function () {
    var item = new Item("Backstage passes to a TAFKAL80ETC concert", 5, 33);

    item.increaseQuality();

    expect(item.quality).toEqual(36);
  });

  it('should increase quality 2 times if item is ticket and sell in is 10 days or less', function () {
    var item = new Item("Backstage passes to a TAFKAL80ETC concert", 10, 33);
    item.increaseQuality();
    expect(item.quality).toEqual(35);
  });
});
