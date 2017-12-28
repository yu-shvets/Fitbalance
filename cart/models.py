from django.db import models
from products.models import CommonInfo, Product


class Order(CommonInfo):

    class Meta(CommonInfo.Meta):
        verbose_name = "Заказ"
        verbose_name_plural = "Заказы"

    PAYMENT_CHOICES = (('Карта', 'Карта'),
                       ('Наличные', 'Наличные'))

    customer_first_name = models.CharField(max_length=256, verbose_name="имя покупателя")
    customer_second_name = models.CharField(max_length=256, blank=True, null=True, verbose_name="фамилия покупателя")
    customer_email = models.EmailField(verbose_name="email")
    phone = models.CharField(max_length=13, verbose_name='телефон')
    payment_type = models.CharField(choices=PAYMENT_CHOICES, max_length=8,
                                    default='Карта', verbose_name='способ платежа')
    total_cost = models.DecimalField(max_digits=11, decimal_places=2, verbose_name='общая_стоимость')

    def __str__(self):
        return '{}-{}'.format(self.customer_first_name, self.created)


class OrderItem(models.Model):

    class Meta(object):
        verbose_name = "Товар в заказе"
        verbose_name_plural = "Товары в заказе"

    product = models.ForeignKey(Product, verbose_name='товар', on_delete=models.CASCADE)
    quantity = models.IntegerField(verbose_name='количество')
    price = models.DecimalField(max_digits=11, decimal_places=2, verbose_name='цена')
    order = models.ForeignKey(Order, on_delete=models.CASCADE, verbose_name='заказ')

    def __str__(self):
        return '{}-{}'.format(self.product, self.order)


