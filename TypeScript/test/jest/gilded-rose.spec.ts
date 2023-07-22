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
})
