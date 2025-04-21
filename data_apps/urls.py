from django.urls import path, include
from . import views

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path('', include('forms.urls')),
    # path('forms/coffee-questionaire/CoffeeQuestionare.html/', views.coffeeTest, name='coffee-questionaire'),
]
