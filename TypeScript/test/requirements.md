Generales	
	Todos los articulos tienen las propiedades sellIn y quality.
	La calidad nunca es negativa
	La calidad nunca es mayor que 50 (salvo sulfuras)
  No se puede alterar el objeto Item	

Sulfuras: 
	Calidad inmutable 80
	Fecha de venta inmutable

Aged brie: 
	Con sellIn positivo quality aumenta 1 cada dia 
	Con sellIn negativo quality aumenta 2 cada dia

Entrada al backstage
	Si sellIn mas de 10 dias quality aumenta 1
	Si sellIn 10 dias o menos para el concierto, quality aumenta en 2 cada dia
	Si sellIn 5 dias o menos quality aumenta en 3 unidades
	Si sellIn negativo calidad cae a 0	

Los demas articulos:
	Al final de cada dia se decremente sellIn y quality disminuye
	Si fecha sellIn negativo quality disminuye el doble

Requerimientos futuros:
  Los artículos conjurados degradan su calidad al doble de velocidad que los normales

Requerimientos nuestros:
  Sulfuras quality modificacion automatica a 80 si no lo es al crearlo
