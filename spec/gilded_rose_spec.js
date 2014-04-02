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
});
