from django.shortcuts import render

# Create your views here.
def coffeeTest(request):
    return render(request, 'CoffeeQuestionare.html')