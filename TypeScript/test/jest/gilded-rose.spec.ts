import { Item, GildedRose } from '@/gilded-rose';

describe('Sulfuras, Hand of Ragnaros', () => {
  const Sulfuras = 'Sulfuras, Hand of Ragnaros';
  it('should not change quality when sellIn positive', () => {
    const gildedRose = new GildedRose([new Item(Sulfuras, 15, 80)]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(80);
  });
  it('should not change quality when sellIn negative', () => {
    const gildedRose = new GildedRose([new Item(Sulfuras, -15, 80)]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(80);
  });
  it('should not change quality when sellIn zero', () => {
    const gildedRose = new GildedRose([new Item(Sulfuras, 0, 80)]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(80);
  });

  it('should not change sellIn when sellIn positive', () => {
    const gildedRose = new GildedRose([new Item(Sulfuras, 15, 80)]);

    const items = gildedRose.updateQuality();

    expect(items[0].sellIn).toBe(15);
  });
  it('should not change sellIn when sellIn negative', () => {
    const gildedRose = new GildedRose([new Item(Sulfuras, -15, 80)]);

    const items = gildedRose.updateQuality();

    expect(items[0].sellIn).toBe(-15);
  });
  it('should not change sellIn when sellIn zero', () => {
    const gildedRose = new GildedRose([new Item(Sulfuras, 0, 80)]);

    const items = gildedRose.updateQuality();

    expect(items[0].sellIn).toBe(0);
  });
});


describe('Aged Brie', () => {
  const AgedBrie = 'Aged Brie'
  it('should increase quality by 1 when sellIn positive', () => {
    const gildedRose = new GildedRose([new Item(AgedBrie, 15, 40)]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(41)
  });
  it('should increase quality by 2 when sellIn negative', () => {
    const gildedRose = new GildedRose([new Item(AgedBrie, -15, 40)]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(42)
  });
  it('should increase quality to 50 when sellIn negative and quality started at 49', () => {
    const gildedRose = new GildedRose([new Item(AgedBrie, -15, 49)]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(50);
  });
  it('should not increase quality more than 50', () => {
    const gildedRose = new GildedRose([new Item(AgedBrie, -15, 50), new Item(AgedBrie, 15, 50)]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(50);
    expect(items[1].quality).toBe(50);
  });

  it('should increase quality by 2 when sellIn zero', () => {
    const gildedRose = new GildedRose([new Item(AgedBrie, 0, 40)]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(42);
  });
})


describe('Backstage passes to a TAFKAL80ETC concert', () => {
  const Ticket = 'Backstage passes to a TAFKAL80ETC concert';
  it('should increase quality by 1 when sellIn greater than 10', () => {
    const gildedRose = new GildedRose([new Item(Ticket, 11, 40)]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(41);
  })
  it('should increase quality by 2 when sellIn between 6 and 10', () => {
    const gildedRose = new GildedRose([new Item(Ticket, 10, 40), new Item(Ticket, 9, 40)]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(42);
    expect(items[1].quality).toBe(42);
  })
  it('should increase quality by 3 when sellIn between 1 and 5', () => {
    const gildedRose = new GildedRose([new Item(Ticket, 5, 40), new Item(Ticket, 4, 40),  new Item(Ticket, 1, 40)]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(43);
    expect(items[1].quality).toBe(43);
    expect(items[2].quality).toBe(43);
  })
  it('should quality be 0 when sellIn is 0 or less', () => {
    const gildedRose = new GildedRose([new Item(Ticket, 0, 40), new Item(Ticket, -1, 40)]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(0);
    expect(items[1].quality).toBe(0);
  })
})
