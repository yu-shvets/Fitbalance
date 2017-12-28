from django.conf.urls import url
from .views import ProductListView, ProductDetailView

urlpatterns = [
    url(r'^$', ProductListView.as_view(), name='catalogue'),
    url(r'^products/(?P<pk>\d+)/$', ProductDetailView.as_view(), name='product'),
                ]
