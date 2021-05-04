from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.


def index(response):
    

    if response.method =='POST':
        try:
            dictionary = response.POST
            Sentexpression = dictionary['SentCalculation']
            answer= eval(Sentexpression)
        except:
            answer = "Please Give Valid Input"
        return render(response, 'project/index.html', {"answer":answer,"Sentexpression":Sentexpression})
    else:
        return render(response, 'project/index.html',{})
