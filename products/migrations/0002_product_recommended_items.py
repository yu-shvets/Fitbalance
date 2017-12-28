# -*- coding: utf-8 -*-
# Generated by Django 1.11.8 on 2017-12-21 15:17
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='recommended_items',
            field=models.ManyToManyField(blank=True, related_name='_product_recommended_items_+', to='products.Product', verbose_name='рекомендованные товары'),
        ),
    ]