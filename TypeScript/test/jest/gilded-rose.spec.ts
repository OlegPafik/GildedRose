import { Item, GildedRose } from '@/gilded-rose';

describe('Sulfuras, Hand of Ragnaros', () => {
  it('should not change quality', () => {
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 15, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(80);
  });
  it('should not change sellIn', () => {
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 15, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(15);
  });
});
