from django.http import HttpResponse

def home(_):
    return HttpResponse("ok")
