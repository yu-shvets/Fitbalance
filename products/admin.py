from django.contrib import admin
from .models import Category, Product, Image


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    pass


class ImageInline(admin.TabularInline):
    model = Image
    extra = 0


@admin.register(Product)
class ItemAdmin(admin.ModelAdmin):
    inlines = (ImageInline,)
