describe("Gilded Rose", function() {

  it("should age item", function() {
    var item = new Item("banana", 50, 1);
    item.age();
    expect(item.sell_in).toEqual(49);
  });

});
