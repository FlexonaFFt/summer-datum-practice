from django.http import HttpResponse

# Create your views here.
def Home(_):
    return HttpResponse("ok")
