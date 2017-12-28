from django.db import models
from mptt.models import MPTTModel, TreeForeignKey


class CommonInfo(models.Model):

    class Meta:
        abstract = True
        ordering = ['-created']

    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)


class Category(MPTTModel):

    class Meta(object):
        verbose_name = "Категория"
        verbose_name_plural = "Категории"

    slug = models.SlugField(blank=True, null=True)
    title = models.CharField(max_length=256, verbose_name='наименование')
    parent = TreeForeignKey('self', null=True, blank=True, related_name='children',
                            db_index=True, on_delete=models.CASCADE, verbose_name='родительская категория')

    class MPTTMeta:
        order_insertion_by = ['title']

    def __str__(self):
        return "{}".format(self.title)


class Product(CommonInfo):

    class Meta(CommonInfo.Meta):
        verbose_name = "Товар"
        verbose_name_plural = "Товары"

    slug = models.SlugField(blank=True, null=True)
    vendor_code = models.PositiveIntegerField(blank=True, null=True, verbose_name='артикул')
    title = models.CharField(max_length=256, verbose_name='наименование')
    title_image = models.ImageField(upload_to='catalog/products', verbose_name='титульное изображение')
    price = models.DecimalField(max_digits=11, decimal_places=2, verbose_name='цена')
    weight = models.FloatField(blank=True, null=True, verbose_name='вес, гр')
    description = models.TextField(blank=True, null=True, verbose_name='описание')
    ingredients = models.TextField(blank=True, null=True, verbose_name='состав')
    category = models.ForeignKey(Category, on_delete=models.CASCADE, verbose_name='категория')
    recommended_items = models.ManyToManyField('self', blank=True, verbose_name='рекомендованные товары')

    def __str__(self):
        return "{}-{}".format(self.category, self.title)


class Image(models.Model):

    class Meta(object):
        verbose_name = "Изображение"
        verbose_name_plural = "Изображения"

    image = models.ImageField(upload_to='catalog/products', verbose_name='изображение')
    product = models.ForeignKey(Product, on_delete=models.CASCADE, verbose_name='товар')

    def __str__(self):
        return "{}-{}".format(self.item, self.image)
