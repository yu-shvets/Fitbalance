from django.views.generic import TemplateView, ListView, DetailView
from .models import Category, Product


class HomeView(TemplateView):
    template_name = 'products/index.html'


class ProductListView(ListView):
    model = Product
    template_name = 'products/catalogue.html'

    def get_context_data(self, **kwargs):
        context = super(ProductListView, self).get_context_data(**kwargs)
        context['categories'] = Category.objects.all()
        return context


class ProductDetailView(DetailView):
    model = Product
    template_name = 'products/product_detail.html'