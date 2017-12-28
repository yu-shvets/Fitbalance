from django.shortcuts import render, reverse, HttpResponseRedirect
from .cart import Cart
from products.models import Product
from django.shortcuts import get_object_or_404
from .models import Order, OrderItem
from .forms import CartAddProductForm, OrderForm
from django.views.generic.edit import CreateView
from django.views.generic import TemplateView
from django.http import JsonResponse


def cart_view(request):
    cart = Cart(request)
    total_price = cart.get_total_price()
    form = CartAddProductForm()
    return render(request, 'cart/cart.html', {'cart': cart, 'total_price': total_price, 'form': form})


def add_to_cart(request, product_id):
    cart = Cart(request)
    product = get_object_or_404(Product, id=product_id)
    cart.add(product=product)
    return HttpResponseRedirect(reverse('cart'))


def cart_remove(request, product_id):
    cart = Cart(request)
    product = get_object_or_404(Product, id=product_id)
    cart.remove(product)
    return HttpResponseRedirect(reverse('cart'))


def update_quantity(request, product_id):
    cart = Cart(request)
    product = get_object_or_404(Product, id=product_id)
    response_data = {}
    if request.method == 'POST':
        new_quantity = (request.POST['new_quantity'])
        if new_quantity.isnumeric():
            new_quantity = int(new_quantity)
            if new_quantity > 0:
                cart.update(product, new_quantity)
                response_data['quantity'] = new_quantity
                response_data['sum'] = new_quantity * product.price
                response_data['total_price'] = cart.get_total_price()
    return JsonResponse(response_data)


class OrderView(TemplateView):
    template_name = 'cart/order.html'

    def get_context_data(self, **kwargs):
        context = super(OrderView, self).get_context_data(**kwargs)
        context['cart'] = Cart(self.request)
        context['form'] = OrderForm()
        return context


class OrderCreate(CreateView):
    model = Order
    form_class = OrderForm
    template_name = 'cart/order.html'

    def form_valid(self, form):
        cart = Cart(self.request)
        self.obj = form.save(commit=False)
        self.obj.total_cost = cart.get_total_price()
        self.obj.save()
        for element in cart:
            order_item = OrderItem(product=element['product'], quantity=element['quantity'],
                                   price=element['price'], order=self.obj)
            order_item.save()
        cart.clear()
        return HttpResponseRedirect(reverse('home'))