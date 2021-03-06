from django.conf.urls import url
from .views import add_to_cart, cart_view, cart_remove, update_quantity, OrderView, OrderCreate

urlpatterns = [
    url(r'^add/(?P<product_id>\d+)/$', add_to_cart, name='add_to_cart'),
    url(r'^cart/$', cart_view, name='cart'),
    url(r'^remove/(?P<product_id>\d+)/$', cart_remove, name='cart_remove'),
    url(r'^update/(?P<product_id>\d+)/$', update_quantity, name='cart_update'),

    url(r'^order/$', OrderView.as_view(), name='order'),
    url(r'^create_order/$', OrderCreate.as_view(), name='new_order'),
                ]
