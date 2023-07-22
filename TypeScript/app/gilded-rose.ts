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
const isCommon = (item: Item): boolean => !isAgedBrie(item) && !isBackstage(item) && !isSulfuras(item)

const limitQuality = (item: Item): Item => {
  if (item.quality > 50) {
    item.quality = 50
  }
  if (item.quality < 0) {
    item.quality = 0
  }
  return item
}

const updateAgedBrie = (item: Item): Item => {
  if (item.sellIn > 0) {
    item.quality = item.quality + 1
  }
  if (item.sellIn <= 0) {
    item.quality = item.quality + 2
  }
  limitQuality(item);
  item.sellIn = item.sellIn - 1;
  return item
}

const updateBackstage = (item: Item): Item => {
  if (item.sellIn > 0) {
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
  if (item.sellIn <= 0) {
    item.quality = 0
  }
  limitQuality(item);
  item.sellIn = item.sellIn - 1;
  return item
}

const updateCommon = (item: Item): Item => {
  if (item.sellIn > 0) {
    item.quality = item.quality - 1
  }
  if (item.sellIn <= 0) {
    item.quality = item.quality - 2
  }
  limitQuality(item);
  item.sellIn = item.sellIn - 1;
  return item;
}

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

      if (isBackstage(item)) {
        updateBackstage(item)
      }

      if (isAgedBrie(item)) {
        updateAgedBrie(item)
      }

      if (isCommon(item)) {
        updateCommon(item)
      }
    }

    return this.items;
  }
}
