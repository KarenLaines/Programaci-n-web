
from django.contrib import admin
from .models import Product, ProductReview, ProductImage, ProductInventory

admin.site.register(Product)
admin.site.register(ProductReview)
admin.site.register(ProductImage)
admin.site.register(ProductInventory)
