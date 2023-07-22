export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

const isAgedBrie = (item: Item): boolean => item.name == 'Aged Brie'
const isBackstage = (item: Item): boolean => item.name == 'Backstage passes to a TAFKAL80ETC concert'
const isSulfuras = (item: Item): boolean => item.name == 'Sulfuras, Hand of Ragnaros'

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i]

      if (isSulfuras(item)) {
        break
      }

      if (isAgedBrie(item) || isBackstage(item)) {
        if (isBackstage(item)) {
          if (item.sellIn > 10) {
            item.quality = item.quality + 1
          }
          if (item.sellIn <= 10 && item.sellIn > 5) {
            item.quality = item.quality + 2
          }
          if (item.sellIn <= 5) {
            item.quality = item.quality + 3
          }
        }
        if (isAgedBrie(item)) {
          item.quality = item.quality + 1
        }
      }
      else {
        item.quality = item.quality - 1
      }

      item.sellIn = item.sellIn - 1;

      if (item.sellIn < 0) {
        if (isBackstage(item)) {
          item.quality = item.quality - item.quality
        }
        if (isAgedBrie(item)) {
          item.quality = item.quality + 1
        }
        if (!isBackstage(item) && !isAgedBrie(item)) {
          item.quality = item.quality - 1
        }
      }

      if (item.quality > 50) {
        item.quality = 50
      }
      if (item.quality < 0) {
        item.quality = 0
      }

    }

    return this.items;
  }
}
