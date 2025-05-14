from django.shortcuts import render

# Create your views here.
# it must have the path of the file, if the file is in the same path, just write the files name
def coffeeTest(request):
    return render(request, 'CoffeeQuestionare.html')

def homepage(request):
    return render(request, 'LandingPage.html')