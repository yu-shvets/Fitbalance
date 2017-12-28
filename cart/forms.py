from django import forms
from django.forms import ModelForm
from .models import Order
from django.utils.translation import ugettext as _


class CartAddProductForm(forms.Form):
    quantity = forms.IntegerField(min_value=1, label='Количество', widget=forms.TextInput(attrs={
        'class': 'update_q'
    }))


class OrderForm(ModelForm):

    class Meta:
        model = Order
        fields = ('customer_first_name', 'customer_second_name', 'customer_email', 'phone', 'payment_type')


