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
  it('should not change sellIn when sellIn negative ', () => {
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
